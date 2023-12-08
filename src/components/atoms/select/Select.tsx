import {ChangeEvent, FC} from 'react';
import { StyledSelect } from './styles';
import { map } from 'lodash';

const Select: FC<{ setChosenTopic: any; topics: string[]; }> = ({ setChosenTopic, topics }) => (
  <StyledSelect onChange={(evt: ChangeEvent<HTMLSelectElement>) => setChosenTopic(evt.target.value)}>
    <option value={null as any}>Select a Topic</option>
    {map(topics, (topic: string[], idx: number) => (
      <option key={idx} value={`${topic}`}>{topic}</option>
    ))}
  </StyledSelect>
);
export default Select;