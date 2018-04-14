package com.algaworks.algamoney.api.repository;

import com.algaworks.algamoney.api.model.Categoria;
import com.algaworks.algamoney.api.repository.categoria.CategoriaRepositoryQuery;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoriaRepository  extends JpaRepository<Categoria, Long>, CategoriaRepositoryQuery {
}
