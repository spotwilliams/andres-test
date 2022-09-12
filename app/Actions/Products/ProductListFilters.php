<?php

namespace App\Actions\Products;

interface ProductListFilters
{
    public function searchTerm(): ?string;
}
