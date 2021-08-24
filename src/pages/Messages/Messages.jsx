import React, {useEffect, useRef, useState} from "react";
import {useMutation, useQuery} from "@apollo/client";
import SEND_MESSAGE from "../../graphql/mutations/sendMessage";
import {CardsSection, DashboardSection} from "../Dashboard/dashboard.style";
import moment from "moment";
import {FlexBlock, Li, PriButton, Title, Ul} from "../../Styles/globalStyles";
import {ProfileSettingsTitle} from "../Profile/updateProfile";
import {AiFillDelete} from "react-icons/ai";
import {ErrorMessages, FormInput} from "../../Styles/forms.style";
import {
  DeleteIcon,
  Message,
  MessageBox,
  MessageCard,
  MessageDate,
  MessageMoment,
  MessageSection,
  MessageSender,
  MessageTimeStamp,
  MessageUserBox,
  SenderImage,
  SenderName,
  TypeSection,
} from "./message.style";
import avatar from "../../Assets/images/avater.png";
import {BeatLoader} from "react-spinners";
import DELETE_MESSAGE from "../../graphql/mutations/deleteMessage";
import {useLocation} from "react-router";
import GET_USER from "../../graphql/queries/GetUser";
import GET_MESSAGES from "../../graphql/queries/getMessages";

const Messages = ({getUser}) => {
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const Location = useLocation().pathname;
  const messageRef = useRef(null);
  const userId = Location.slice(10);

  const {data, loading: getLoading} = useQuery(GET_USER, {
    variables: {
      userId,
    },
    onError: (err) => {},
  });

  const [sendMessage, {loading}] = useMutation(SEND_MESSAGE, {
    variables: {
      userId,
      message,
    },
    refetchQueries: [{query: GET_MESSAGES}],
    onError: (err) => {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
  });

  const {
    data: messageData,
    loading: messageLoading,
    error: messageError,
  } = useQuery(GET_MESSAGES, {
    onError: (err) => {
      console.log(err);
    },
  });

  const [deleteMessage] = useMutation(DELETE_MESSAGE, {
    refetchQueries: [{query: GET_MESSAGES}],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() !== "" || e.keyCode === 13) {
      sendMessage();
      setMessage("");
    }
    return;
  };

  const handleDelete = (messageId) => {
    deleteMessage({
      variables: {userId, messageId},
    });
  };

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  });

  if (!messageLoading) {
    console.log(messageData);
  }
  return (
    <>
      <DashboardSection>
        <Title>Have Any Issue?</Title>
        <ProfileSettingsTitle>Chat Us</ProfileSettingsTitle>
        <CardsSection>
          <MessageCard>
            {messageLoading ? (
              <BeatLoader />
            ) : (
              <MessageBox>
                {messageData.messages.map((message, index) => (
                  <MessageUserBox key={index} ref={messageRef}>
                    <MessageSender me={message.userId === getUser.id}>
                      <SenderImage src={avatar} />
                      <SenderName>
                        {(message.role === "admin" &&
                          getUser.role !== "admin" &&
                          userId === getUser.id) ||
                        (userId !== getUser.id &&
                          message.role === "admin" &&
                          message.userId !== getUser.id &&
                          message.userId !== userId) ||
                        (message.role === "admin" &&
                          userId !== getUser.id &&
                          message.role === "admin" &&
                          message.userId !== userId &&
                          message.userId === userId)
                          ? "Pivon Team"
                          : message.firstName}
                      </SenderName>
                    </MessageSender>
                    <MessageSection me={message.userId === getUser.id}>
                      <FlexBlock>
                        <Message>{message.message}</Message>
                        <MessageTimeStamp me={message.userId === getUser.id}>
                          <MessageMoment>
                            {moment(message.sentAt).fromNow()}
                          </MessageMoment>
                          {/* <MessageDate>{message.sentAt}</MessageDate> */}
                        </MessageTimeStamp>
                        {getUser.id === message.userId && (
                          <DeleteIcon onClick={() => handleDelete(message.id)}>
                            <AiFillDelete />
                          </DeleteIcon>
                        )}
                      </FlexBlock>
                    </MessageSection>
                  </MessageUserBox>
                ))}
              </MessageBox>
            )}
            <TypeSection>
              <form onSubmit={handleSubmit}>
                <FormInput
                  style={{
                    width: "390px",
                    height: "100px",
                    fontSize: "15px",
                    paddingTop: "5px",
                  }}
                  as="textarea"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </form>

              {loading ? (
                <BeatLoader color={"#449b62;"} />
              ) : (
                <PriButton
                  style={{
                    width: "50px",
                  }}
                  onClick={handleSubmit}
                >
                  Send
                </PriButton>
              )}
              {Object.keys(errors).length > 0 && (
                <ErrorMessages>
                  <h4 style={{margin: "0"}}>Error!</h4>
                  <Ul>
                    {Object.values(errors).map((error) => (
                      <Li key={error}>* {error}</Li>
                    ))}
                  </Ul>
                </ErrorMessages>
              )}
            </TypeSection>
          </MessageCard>
        </CardsSection>
      </DashboardSection>
    </>
  );
};

export default Messages;
