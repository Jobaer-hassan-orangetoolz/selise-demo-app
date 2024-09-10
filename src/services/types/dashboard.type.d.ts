interface _dashboardList {
  page: number;
  perPage: number;
  order: 'recent' | '';
}
interface _dashboardItem {
  id: number;
  image: string;
  title: string;
  description: string;
  likes: number;
}

export type {_dashboardList, _dashboardItem};
