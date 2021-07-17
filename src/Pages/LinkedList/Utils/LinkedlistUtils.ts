import { IState } from '../../../Common/interface';

export const convertLinkedListToEdgesList = (
  data: string,
  isDoubly: boolean = false,
  pos: number = -1
) => {
  const list = JSON.parse(data);
  const res: any = [];
  let prev = list[0];
  res.push([prev, prev]);
  for (let i = 1; i < list.length; i++) {
    const cur = list[i];
    res.push([prev, cur]);
    if (isDoubly) {
      res.push([cur, prev]);
    }
    prev = cur;
  }
  if (pos !== -1) {
    res.push([prev, list[pos]]);
  }
  return res;
};
export const convertCircularToEdgesList = (data: string) => {
  const arr = data.split(/\r?\n/);
  const edges = convertLinkedListToEdgesList(arr[0], false, JSON.parse(arr[1]));
  return edges;
};
export const validationNonCircular = (values: IState) => {
  let list;
  try {
    list = JSON.parse(values.input);
  } catch (error) {
    return { input: 'invalid list eg. [1,2,3,4]' };
  }
  if (list.length === 0)
    return {
      input: 'input is required',
    };
  return {};
};
export const validationCircular = (values: IState) => {
  const { input } = values;
  const arr = input.split(/\r?\n/);
  if (arr.length !== 2) return { input: 'you need to have circular pos' };
  // #1. Validate list
  const validateList = validationNonCircular({ input: arr[0] });
  if (Object.keys(validateList).length > 0) return validateList;

  //#2. Validate circular position
  const list = JSON.parse(arr[0]);
  try {
    const circularPos = JSON.parse(arr[1]);
    if (circularPos < 0 || circularPos < list.length) throw new Error();
  } catch (error) {
    return { input: 'invalid circular position' };
  }
};
