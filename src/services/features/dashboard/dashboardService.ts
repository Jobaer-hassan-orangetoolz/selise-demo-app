import {_dashboardList} from '../../types/dashboard.type';
import data from '../../../dummy-data/dashboardContent.json';
class dashboardServiceClass {
  async dashboardList(payload: _dashboardList) {
    const {page = 1, perPage = 10, order = 'recent'} = payload || {};
    // Paginate products
    const paginate = (posts: Array<any>) => {
      return posts.slice((page - 1) * perPage, page * perPage);
    };
    // const analyzePosts = (posts: Array<_dashboardItem>) => {
    //   // @TODO work of sorting, searching
    // };
    //@todo delay here
    const searchResult = () => {
      const filteredAndSortedPosts: any = data;
      return paginate(filteredAndSortedPosts);
    };
    return searchResult();
  }
}

const DashboardService = new dashboardServiceClass();
export default DashboardService;
