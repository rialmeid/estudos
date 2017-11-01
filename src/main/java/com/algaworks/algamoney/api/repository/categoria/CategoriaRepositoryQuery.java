package com.algaworks.algamoney.api.repository.categoria;

import com.algaworks.algamoney.api.model.Categoria;
import com.algaworks.algamoney.api.repository.filter.CategoriaFilter;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface CategoriaRepositoryQuery {

    Page<Categoria> filtrar(CategoriaFilter filter, Pageable pageable);

}
