package com.algaworks.algamoney.api.resource;

import com.algaworks.algamoney.api.event.RecursoCriadoEvent;
import com.algaworks.algamoney.api.model.Lancamento;
import com.algaworks.algamoney.api.repository.LancamentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/lancamentos")
public class LancamentoResource {

    @Autowired
    private LancamentoRepository repository;

    @Autowired
    private ApplicationEventPublisher publisher;

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
        Lancamento save = repository.save(lancamento);
        Long codigo = save.getCodigo();
        publisher.publishEvent(new RecursoCriadoEvent(this, response, codigo));
        return ResponseEntity.status(HttpStatus.CREATED).body(save);
    }
}
