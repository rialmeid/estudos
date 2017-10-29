package com.algaworks.algamoney.api.repository.lancamento;

import com.algaworks.algamoney.api.model.Lancamento;
import com.algaworks.algamoney.api.repository.filter.LancamentoFilter;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import java.util.List;

public class LancamentoRepositoryImpl implements LancamentoRepositoryQuery {

    @PersistenceContext
    private EntityManager em;

    @Override
    public Page<Lancamento> filtrar(LancamentoFilter lancamentoFilter, Pageable pageable) {
        StringBuilder sql = new StringBuilder("select l from Lancamento l ");

        TypedQuery<Lancamento> query = em.createQuery(sql.toString(), Lancamento.class);
        adicionarRestricoesDePaginacao(query, pageable);
        return new PageImpl(query.getResultList(), pageable, total(lancamentoFilter));
    }

    private void adicionarRestricoesDePaginacao(TypedQuery<Lancamento> query, Pageable pageable) {
        int paginaAtual = pageable.getPageNumber();
        int totalRegistrosPorPagina = pageable.getPageSize();
        int primeiroRegistroDaPagina = paginaAtual * totalRegistrosPorPagina;

        query.setFirstResult(primeiroRegistroDaPagina);
        query.setMaxResults(totalRegistrosPorPagina);
    }


    Long total(LancamentoFilter lancamentoFilter) {
        StringBuilder sql = new StringBuilder("select l from Lancamento l ");

        TypedQuery<Lancamento> query = em.createQuery(sql.toString(), Lancamento.class);
        List<Lancamento> lancamentos = query.getResultList();

        return Long.valueOf(lancamentos.size());
    }

}
