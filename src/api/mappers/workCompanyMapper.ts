import type { WorkCompanyDao } from "@/api/dao/WorkCompany.dao";
import type { WorkCompany } from "@/api/entities/WorkCompany";

export const mapWorkCompanyDaoToEntity = (workCompanyDao: WorkCompanyDao): WorkCompany => ({
    id: workCompanyDao.id,
    userId: workCompanyDao.user_id,
    companyName: workCompanyDao.company_name,
    description: workCompanyDao.description,
    position: workCompanyDao.position,
    country: workCompanyDao.country,
    startDate: workCompanyDao.start_date,
    endDate: workCompanyDao.end_date,
    createdAt: workCompanyDao.created_at,
    updatedAt: workCompanyDao.updated_at,
});