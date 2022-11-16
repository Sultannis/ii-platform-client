import type { QueryParamsDto } from "@/api/converters/query-params/QueryParams.dto";

export const mapQueryParamsForRequest = (queryParams: QueryParamsDto) => ({
  page: queryParams.page,
  per_page: queryParams.perPage,
  order_by: queryParams.orderBy,
  order: queryParams.order,
});
