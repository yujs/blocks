import usestate from "react";
import styles from './block.less'
const BlockB = (props) => {
  // input
  const { input } = props;

  // mapping
  const [value, setValue] = usestate();
  useEffect(() => {
    setValue(input);
  }, [input]);

  return <div className={styles}>{value}</div>;
};

export default BlockB;

// div 图层
// style 样式
// input 输入数据
// state effect 映射
