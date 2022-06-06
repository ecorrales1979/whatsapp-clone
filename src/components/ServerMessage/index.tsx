import classes from './server-message.module.scss'
import { MessageRow } from '../MessageRow'

interface Props {
  message: string;
  time: string;
  first?: boolean;
  last?: boolean;
}

export function ServerMessage({ first, last, message, time }: Props) {
  const rootClasses = [ classes.messageIn ];

  if (first) rootClasses.push(classes.tailed);

  return (
    <MessageRow last={!!last}>
      <div className={rootClasses.join(' ')}>
        <span className={classes.tail}></span>
        <div className={classes.messageContainer}>
          <div className={classes.messageContent}>
            <span>
              {message}
            </span>
          </div>
          <div className={classes.timeContainer}>
            <div className={classes.timeContent}>
              <span className={classes.timePre}></span>
              <span className={classes.time}>{time}</span>
            </div>
          </div>
        </div>
      </div>
    </MessageRow>
  )
}