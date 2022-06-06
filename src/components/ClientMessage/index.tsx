import classes from './client-message.module.scss'
import { MessageRow } from '../MessageRow'

interface Props {
  message: string;
  time: string;
  first?: boolean;
  last?: boolean;
}

export function ClientMessage({ first, last, message, time }: Props) {
  const rootClasses = [ classes.messageOut ];

  if (first) rootClasses.push(classes.tailed);

  return (
    <MessageRow last={!!last}>
      <div className={rootClasses.join(' ')}>
        <span className={classes.tail}></span>
        {first && (
          <span className={`${classes.tail} ${classes.highlight}`}></span>
        )}
        <div className={classes.messageContainer}>
          <div className={classes.messageContent}>
            <span>
              {message}
            </span>
          </div>
          <div className={classes.timeContainer}>
            <div role="button" className={classes.timeContent}>
              <span className={classes.timePre}></span>
              <span className={classes.time}>{time}</span>
              <div className={classes.readIndicator}>
                <span>
                  <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" width="16" height="15">
                    <path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z">
                    </path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MessageRow>
  )
}