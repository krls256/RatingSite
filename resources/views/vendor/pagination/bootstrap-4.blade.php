@if ($paginator->hasPages())
    <nav class="pagination__wrapper">
        <ul class="pagination pagination">
            {{-- Previous Page Link --}}
            @if ($paginator->onFirstPage())
                <li class="disabled"><span>«</span></li>
            @else
                <li><a class="pagination__arrow" href="{{ $paginator->previousPageUrl() }}" rel="prev">«</a></li>
            @endif

            @if($paginator->currentPage() > 2)
                <li class="hidden-xs"><a class="pagination__link" href="{{ $paginator->url(1) }}">1</a></li>
            @endif
            @if($paginator->currentPage() > 3)
                <li><span class="pagination__dots">...</span></li>
            @endif
            @foreach(range(1, $paginator->lastPage()) as $i)
                @if($i >= $paginator->currentPage() - 1 && $i <= $paginator->currentPage() + 2)
                    @if ($i == $paginator->currentPage())
                        <li class="active"><span>{{ $i }}</span></li>
                    @else
                        <li><a class="pagination__link" href="{{ $paginator->url($i) }}">{{ $i }}</a></li>
                    @endif
                @endif
            @endforeach
            @if($paginator->currentPage() < $paginator->lastPage() - 3)
                <li><span class="pagination__dots">...</span></li>
            @endif

            {{-- Next Page Link --}}
            @if ($paginator->hasMorePages())
                <li><a class="pagination__arrow" href="{{ $paginator->nextPageUrl() }}" rel="next">»</a></li>
            @else
                <li class="disabled"><span>»</span></li>
            @endif
        </ul>
    </nav>
@endif
