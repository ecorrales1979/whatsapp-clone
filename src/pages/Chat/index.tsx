import classes from './chat.module.scss'
import { ChatHeader } from '../../components/ChatHeader'
import { ClientMessage } from '../../components/ClientMessage'
import { DownButton } from '../../components/DownButton'
import { ServerMessage } from '../../components/ServerMessage'
import { ChatFooter } from '../../components/ChatFooter'
import { DayIndicator } from '../../components/DayIndicator'

export function Chat() {
  return (
    <div className={classes.pageContainer}>
      <div tabIndex={-1} className={classes.chatContainer}>
        <div className={classes.innerContainer}>
          <div className={classes.main}>
            <ChatHeader />
            <div className={classes.chatContent}>
              <div className={classes.copyableArea}>
                <DownButton />
                <div className={classes.mainArea} tabIndex={0}>
                  <div className={classes.topSpace}></div>
                  <div className={classes.content}>
                    <DayIndicator date="1 de junho de 2022" />
                    <ServerMessage message="Not yet" time="5:36 PM" first />
                    <ServerMessage message="Only this" time="5:36 PM" last />
                    <ClientMessage message="you will receive email for charge" time="5:37 PM" first />
                    <ClientMessage message="your card is not charged yet" time="5:37 PM" />
                    <ClientMessage message="payment is not done" time="5:37 PM" />
                    <ClientMessage message="lets wait for few hours" time="5:37 PM" last />
                    <ServerMessage message="Yes i am waiting" time="5:37 PM" first />
                    <ServerMessage message="Okay" time="5:37 PM" last />
                    <ClientMessage message="Oi, Edu!" time="5:37 PM" first />
                    <ClientMessage message="Tchau, Edu!" time="5:37 PM" last />
                    <DayIndicator date="Ontem" />
                    <ServerMessage message="When i get approve i will let you know" time="5:37 PM" first last />
                    <ClientMessage message="ok" time="5:37 PM" first last />
                    <ServerMessage message="When i get approve i will let you know" time="5:37 PM" first last />
                    <ClientMessage message="ok" time="5:37 PM" first last />
                    <ServerMessage message="When i get approve i will let you know" time="5:37 PM" first last />
                    <ClientMessage message="ok" time="5:37 PM" first last />
                    <ServerMessage message="When i get approve i will let you know" time="5:37 PM" first last />
                    <ClientMessage message="ok" time="5:37 PM" first last />
                    <ServerMessage message="When i get approve i will let you know" time="5:37 PM" first last />
                    <ClientMessage message="ok" time="5:37 PM" first last />
                    <ServerMessage message="When i get approve i will let you know" time="5:37 PM" first last />
                    <ClientMessage message="ok" time="5:37 PM" first last />
                    <ServerMessage message="When i get approve i will let you know" time="5:37 PM" first last />
                    <ClientMessage message="ok" time="5:37 PM" first last />
                  </div>
                </div>
              </div>
            </div>
            <ChatFooter />
          </div>
        </div>
      </div>
    </div>
  )
}