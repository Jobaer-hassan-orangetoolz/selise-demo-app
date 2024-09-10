import {_dashboardItem} from '../../services/types/dashboard.type';

interface dashboardInitialState {
  list: Array<_dashboardItem>;
  isLoading: boolean;
  page: number;
  perPage: number;
  hasMore: boolean;
  isLoadingMore: boolean;
  refreshing: boolean;
  query: string;
  hasInfiniteScroll: boolean;
  firstRender: boolean;
  price: number | null;
  category: string;
  rating: number | null;
  order: 'descending' | 'ascending';
  search: string;
}
