<?php

namespace App\Actions\Products;

use Illuminate\Http\Request;

class ProductFilter implements ProductListFilters
{
    private Request $request;

    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    public function searchTerm(): ?string
    {
       return $this->request->input('search') ?? $this->request->route('search');
    }
}
