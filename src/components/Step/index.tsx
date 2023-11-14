
import { Steps } from 'antd';

interface Item{
    title: String;
    description?: String;
    subTitle?: String;
}
interface IProps {
    items: Item[],
    current: number,
}
const Step= ({items,current}:IProps) => (
  <Steps
    current={current}
    items={items}
  />
);

export default Step;