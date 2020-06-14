import React, { FC } from "react";
import { HeadingDate } from "../../styled/Heading";

const DateRange: FC<Props> = ({ start, end }) => {
  const isEnded = !end ? "present" : end;
  return <HeadingDate as="h5">{`${start} - ${isEnded}`}</HeadingDate>;
};

interface Props {
  start: string;
  end: string;
}

export default DateRange;
