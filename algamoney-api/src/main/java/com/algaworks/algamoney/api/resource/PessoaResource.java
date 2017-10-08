package com.algaworks.algamoney.api.resource;

import com.algaworks.algamoney.api.event.RecursoCriadoEvent;
import com.algaworks.algamoney.api.model.Pessoa;
import com.algaworks.algamoney.api.repository.PessoaRepository;
import com.algaworks.algamoney.api.service.PessoaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/pessoas")
public class PessoaResource {

    @Autowired
    private PessoaRepository repository;

    @Autowired
    private ApplicationEventPublisher publisher;

    @Autowired
    private PessoaService pessoaService;

    @GetMapping
    public List<Pessoa> listar() {
        return repository.findAll();
    }

    @PostMapping
    public ResponseEntity<Pessoa> criar(@Valid @RequestBody Pessoa pessoa, HttpServletResponse response) {
        Pessoa save = repository.save(pessoa);
        Long codigo = save.getCodigo();
        publisher.publishEvent(new RecursoCriadoEvent(this, response, codigo));
        return ResponseEntity.status(HttpStatus.CREATED).body(save);
    }

    @GetMapping("/{codigo}")
    public ResponseEntity<Pessoa> buscarPorCodigo(@PathVariable Long codigo) {
        ResponseEntity<Pessoa> result;
        Pessoa pessoa = repository.findOne(codigo);
        if (pessoa == null) {
            result = ResponseEntity.noContent().build();
        } else {
            result = ResponseEntity.ok().body(pessoa);
        }
        return result;
    }

    @DeleteMapping("/{codigo}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void remover(@PathVariable Long codigo) {
        repository.delete(codigo);
    }

    @PutMapping("/{codigo}")
    public ResponseEntity<Pessoa> atualizar(@PathVariable Long codigo, @Valid @RequestBody Pessoa pessoa) {
        Pessoa pessoaSalva = pessoaService.atualizar(codigo, pessoa);
        return ResponseEntity.ok(pessoaSalva);
    }
}
