package com.algaworks.algamoney.api.repository.categoria;

import com.algaworks.algamoney.api.model.Categoria;
import com.algaworks.algamoney.api.repository.filter.CategoriaFilter;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import java.util.List;

public class CategoriaRepositoryImpl implements CategoriaRepositoryQuery {

    @PersistenceContext
    private EntityManager em;

    @Override
    public Page<Categoria> filtrar(CategoriaFilter filter, Pageable pageable) {
        StringBuilder sql = new StringBuilder("select c from Categoria c ");
        String nome = filter.getNome();

        if (nome != null) {
            sql = sql.append("where c.nome like :nome");
        }

        TypedQuery<Categoria> query = em.createQuery(sql.toString(), Categoria.class);
        if (nome != null) {
            query.setParameter("nome", "%".concat(nome).concat("%"));
        }
        adicionarRestricoesDePaginacao(query, pageable);
        return new PageImpl(query.getResultList(), pageable, total(filter));
    }

    private void adicionarRestricoesDePaginacao(TypedQuery<Categoria> query, Pageable pageable) {
        int paginaAtual = pageable.getPageNumber();
        int totalRegistrosPorPagina = pageable.getPageSize();
        int primeiroRegistroDaPagina = paginaAtual * totalRegistrosPorPagina;

        query.setFirstResult(primeiroRegistroDaPagina);
        query.setMaxResults(totalRegistrosPorPagina);
    }

    private Long total(CategoriaFilter filter) {
        StringBuilder sql = new StringBuilder("select c from Categoria c ");

        String nome = filter.getNome();

        if (nome != null) {
            sql.append("where c.nome like :nome");
        }

        TypedQuery<Categoria> query = em.createQuery(sql.toString(), Categoria.class);

        if (nome != null) {
            query.setParameter("nome", "%".concat(nome).concat("%"));
        }

        List<Categoria> categorias = query.getResultList();
        return Long.valueOf(categorias.size());
    }
}
