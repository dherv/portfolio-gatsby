import React, { FC } from "react";
import { Heading } from "../../styled/Heading";

const DateRange: FC<Props> = ({ start, end }) => {
  return <Heading as="h5">{`${start} - ${end}`}</Heading>;
};

interface Props {
  start: string;
  end: string;
}

export default DateRange;
