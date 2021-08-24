import React, { useEffect, useState } from "react";
import { Form, FormInput } from "../../Styles/forms.style";
import { Container, PriButton, WarnButton } from "../../Styles/globalStyles";
import {
  SendTicketsMessage,
  TicketsDetails,
  TicketsDetailsContainer,
  TicketsMessages,
  TicketsDetailsItems,
  TicketDetailsTitle,
  TicketItems,
  TicketDiscription,
  TicketDeleteSection,
  TicketSendMessageCont,
  MessageCont,
  MessageSender,
  Message,
  MyMessages,
  TicketsMessagesCont,
  MessageSenderDate,
  MyMessagesDate,
  Combiner,
} from "../../Components/Dashboard/ticketDetail.style";
import { tickets } from "../../Data";
import { useParams } from "react-router";

const TicketsDetailPage = () => {
  const [ticket, setTicket] = useState("");
  const [MessageList] = useState([]);

  const { tId } = useParams();

  useEffect(() => {
    for (let i = 0; i < tickets.length; i++) {
      if (tickets[i].id === tId) {
        setTicket(tickets[i]);

        continue;
      }
    }
  }, [tId]);

  return (
    <>
      <Container>
        <TicketsDetailsContainer>
          <TicketsDetails>
            <TicketDetailsTitle>Ticket Details</TicketDetailsTitle>
            <TicketsDetailsItems>
              <TicketItems>Added By: </TicketItems>
              <TicketItems>{ticket.user}</TicketItems>
            </TicketsDetailsItems>
            <TicketsDetailsItems>
              <TicketItems>Date: </TicketItems>
              <TicketItems>{ticket.date}</TicketItems>
            </TicketsDetailsItems>
            <TicketsDetailsItems>
              <TicketItems>Title: </TicketItems>
              <TicketItems>{ticket.title}</TicketItems>
            </TicketsDetailsItems>
            <TicketsDetailsItems>
              <TicketItems>Description: </TicketItems>
              <TicketDiscription>{ticket.desc}</TicketDiscription>
            </TicketsDetailsItems>
            <TicketsDetailsItems>
              <TicketItems>Status: </TicketItems>
              <TicketItems>{ticket.status}</TicketItems>
            </TicketsDetailsItems>
          </TicketsDetails>
          <TicketsDetails>
            <TicketDeleteSection>
              <PriButton>Resolved?</PriButton>
              <WarnButton>Delete </WarnButton>
            </TicketDeleteSection>
          </TicketsDetails>

          <TicketsMessagesCont>
            <TicketDetailsTitle>Messages</TicketDetailsTitle>
            <TicketsMessages>
              {MessageList.map((message) => (
                <MessageCont key={message.id}>
                  {message.sender !== "me" ? (
                    <Combiner>
                      <MessageSender>{message.fullname}</MessageSender>
                      <MessageSenderDate>{message.date}</MessageSenderDate>
                    </Combiner>
                  ) : (
                    <Combiner>
                      <MyMessagesDate>{message.date}</MyMessagesDate>
                      <MyMessages>{message.fullname}</MyMessages>
                    </Combiner>
                  )}

                  <Message>{message.message}</Message>
                </MessageCont>
              ))}
            </TicketsMessages>
          </TicketsMessagesCont>
          <SendTicketsMessage>
            <TicketDetailsTitle> Send A Message</TicketDetailsTitle>
            <Form>
              <TicketSendMessageCont>
                <TicketDeleteSection>
                  <FormInput
                    style={{
                      width: "80%",
                      height: "200px",
                      fontSize: "18px",
                    }}
                    type="text"
                    as="textarea"
                    name="message"
                    placeholder="Type here....."
                  />
                </TicketDeleteSection>
              </TicketSendMessageCont>
              <TicketDeleteSection>
                <PriButton type="submit" style={{ width: "50%" }}>
                  Send Message
                </PriButton>
              </TicketDeleteSection>
            </Form>
          </SendTicketsMessage>
        </TicketsDetailsContainer>
      </Container>
    </>
  );
};

export default TicketsDetailPage;
