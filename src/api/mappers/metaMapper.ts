import type { MetaDao } from "../dao/Meta.dao";
import type { Meta } from "../entities/Meta";

export const mapMetaDaoToEntity = (meta: MetaDao): Meta => ({
  page: meta.page,
  perPage: meta.perPage,
  total: meta.total,
});
