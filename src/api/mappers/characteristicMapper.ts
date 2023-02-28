import type { UserCharacteristicDao } from '../dao/Characteristic.dao';
import type { UserCharacteristic } from '../entities/Characteristic';

export const mapCharacteristicDaoToEntity = (
  characteristicDao: UserCharacteristicDao
): UserCharacteristic => ({
  id: characteristicDao.id,
  name: characteristicDao.name,
  createdAt: characteristicDao.created_at,
});
