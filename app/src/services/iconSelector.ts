import { RecordType } from "../components/Context/reducer";
import {EXPENDITURE_ICON_LIST, INCOME_ICON_LIST} from "../constants";

export const getIconByName = (type: RecordType, name: string) => {
  const list = type === RecordType.Income ? INCOME_ICON_LIST : EXPENDITURE_ICON_LIST;
  return list.find(item => item.name === name)!
}