package com.algaworks.algamoney.api.resource;

import com.algaworks.algamoney.api.event.RecursoCriadoEvent;
import com.algaworks.algamoney.api.exceptionhandler.AlgamoneyExceptionHandler;
import com.algaworks.algamoney.api.model.Lancamento;
import com.algaworks.algamoney.api.repository.LancamentoRepository;
import com.algaworks.algamoney.api.service.LancamentoService;
import com.algaworks.algamoney.api.service.exception.PessoaInexistenteOuInativaException;
import org.apache.commons.lang3.exception.ExceptionUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/lancamentos")
public class LancamentoResource {

    @Autowired
    private LancamentoRepository repository;

    @Autowired
    private ApplicationEventPublisher publisher;

    @Autowired
    private LancamentoService lancamentoService;

    @Autowired
    private MessageSource messageSource;

    @GetMapping
    public List<Lancamento> listar() {
        return repository.findAll();
    }

    @GetMapping("/{codigo}")
    public ResponseEntity<Lancamento> buscarPorCodigo(@PathVariable Long codigo) {
        ResponseEntity<Lancamento> result = ResponseEntity.noContent().build();
        Lancamento lancamento = repository.findOne(codigo);
        if (lancamento != null) {
            result = ResponseEntity.ok().body(lancamento);
        }
        return result;
    }

    @PostMapping
    public ResponseEntity<Lancamento> criar(@Valid @RequestBody Lancamento lancamento, HttpServletResponse response) {
        Lancamento save = lancamentoService.salvar(lancamento);

        Long codigo = save.getCodigo();
        publisher.publishEvent(new RecursoCriadoEvent(this, response, codigo));
        return ResponseEntity.status(HttpStatus.CREATED).body(save);
    }

    @ExceptionHandler({PessoaInexistenteOuInativaException.class})
    public ResponseEntity<Object> handlePessoaInexistenteOuInativaException(PessoaInexistenteOuInativaException e) {
        String s = "pessoa.inexistente-ou-inativa";
        String exceptionMessage = ExceptionUtils.getRootCauseMessage(e);

        String mensagemUsuario = messageSource.getMessage(s, null, LocaleContextHolder.getLocale());
        String mensagemDesenvolvedor = exceptionMessage;
        List<AlgamoneyExceptionHandler.Erro> erros = Arrays.asList(new AlgamoneyExceptionHandler.Erro(mensagemUsuario, mensagemDesenvolvedor));
        return ResponseEntity.badRequest().body(erros);
    }
}
