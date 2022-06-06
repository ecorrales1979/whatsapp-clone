import { ReactNode } from 'react'

import classes from './message-row.module.scss'

interface Props {
  children: ReactNode
  last?: boolean;
  centered?: boolean;
}

export function MessageRow({ centered, children, last }: Props) {
  const rootClasses = [ classes.messageRow ];

  if (last) rootClasses.push(classes.last);

  if (centered) rootClasses.push(classes.center)
  console.log(rootClasses)

  return (
    <div className={rootClasses.join(' ')}>
      {children}
    </div>
  )
}