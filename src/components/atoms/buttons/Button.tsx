import React, { FC } from 'react';
import { StyledButton } from './styledButton';

export const Button: FC<{ topic: string }> = ({ topic }) => (
  <StyledButton>{topic}</StyledButton>
)