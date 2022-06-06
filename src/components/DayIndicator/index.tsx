import { MessageRow } from '../MessageRow'
import classes from './day-indicator.module.scss'

interface Props {
  date: string;
}

export function DayIndicator({ date }: Props) {
  return (
    <MessageRow last centered >
      <div className={classes.dayIndicator}>
        <span>{date}</span>
      </div>
    </MessageRow>
  )
}