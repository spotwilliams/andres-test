<?php

namespace App\Actions\Products;

use App\Models\Product;
use App\Models\User;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Collection;

class ListOfProducts
{
    public function list(User $user, ProductListFilters $filters): array|Collection|LengthAwarePaginator
    {
        return $user->products()
            ->when($filters->searchTerm(), function ($query, $search) {
                $query->where('name', 'like', "%{$search}%")
                    ->orWhere('description', 'like', "%{$search}%");

            })
            ->with('images')
            ->paginate(10)
            ->withQueryString()
            ->through(function (Product $product) {
                return array_merge(
                    $product->only(['name', 'price', 'description']),
                    ['image_url' => $product->images->first->image ?? public_path('images/product.png')]
                );
            });
    }
}
