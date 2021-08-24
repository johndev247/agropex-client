import React, {useState} from "react";
import {FaArrowDown} from "react-icons/fa";
import {
  ErrorMessages,
  Form,
  FormInput,
  FormLabel,
  FormRouter,
  FormSelect,
  SuccessMessage,
} from "../../Styles/forms.style";
import {BeatLoader} from "react-spinners";
import {FlexDiv, FlexBlock, PriButton, Ul, Li} from "../../Styles/globalStyles";
import {NoPackage, NoPackageMessage} from "../Dashboard/dashboard.style";
import {
  ProfileSettings,
  ProfileSettingsTitle,
  SettingsCard,
  SettingsCardsDiv,
  SettingsCardsTitle,
  SettingsInfo,
} from "./updateProfile";
import {useForm} from "../../utils/hooks";
import {useMutation} from "@apollo/client";
import UPDATE_PROFILE from "../../graphql/mutations/UpdateProfile";
import CHANGE_PASSWORD from "../../graphql/mutations/changePassword";

const UpdateProfile = ({getUser, loading}) => {
  const [errors, setErrors] = useState({});
  const [state, setState] = useState(getUser.state);
  const initialValues = {
    firstName: getUser.firstName,
    middleName: getUser.middleName,
    lastName: getUser.lastName,
    prevPassword: "",
    newPassword: "",
  };
  const [updated, setUpdated] = useState("");
  const [addAcc, setAddAcc] = useState(false);
  const [changePassword, setChangePassword] = useState(false);

  const {handleInput, handleSubmit, values} = useForm(
    callUpdate,
    initialValues
  );

  const handleState = (e) => {
    setState(e.target.value);
  };

  const [updateProfile, {loading: updateLoading}] = useMutation(
    UPDATE_PROFILE,
    {
      variables: {
        firstName: values.firstName,
        middleName: values.middleName,
        lastName: values.lastName,
        state,
      },
      onCompleted: () => {
        setUpdated("details");
      },
      onError: (err) => {
        setErrors(err.graphQLErrors[0].extensions.exception.errors);
      },
    }
  );

  const [updatePassword, {loading: changePassLoading}] = useMutation(
    CHANGE_PASSWORD,
    {
      variables: {
        prevPassword: values.prevPassword,
        newPassword: values.newPassword,
      },

      onCompleted: () => {
        setUpdated("password");
      },
      onError: (err) => {
        setErrors(err.graphQLErrors[0].extensions.exception.errors);
      },
    }
  );

  const handlePass = (e) => {
    e.preventDefault();
    updatePassword();
  };

  function callUpdate() {
    updateProfile();
  }
  return (
    <div>
      <ProfileSettings>
        <ProfileSettingsTitle>Settings</ProfileSettingsTitle>

        <SettingsCardsDiv>
          <SettingsCard>
            <SettingsCardsTitle>Update Profile</SettingsCardsTitle>
            <SuccessMessage
              show={
                updated.length > 0 &&
                (updated === "details" || updated === "password")
              }
            >
              <p style={{textAlign: "center"}}>
                {updated === "details"
                  ? `Profile Info Updated Successfully`
                  : updated === "password" && `Password Changed Successfully`}
              </p>
            </SuccessMessage>
            <SettingsInfo>
              {changePassword ? (
                <>
                  <Form onSubmit={handlePass}>
                    <FlexDiv>
                      <FlexBlock>
                        <FormLabel>Previous Password</FormLabel>
                        <FormInput
                          type="password"
                          name="prevPassword"
                          onChange={handleInput}
                          value={values.prevPassword}
                        />
                      </FlexBlock>
                      <FlexBlock>
                        <FormLabel>New Password</FormLabel>
                        <FormInput
                          type="password"
                          name="newPassword"
                          onChange={handleInput}
                          value={values.newPassword}
                        />
                      </FlexBlock>
                    </FlexDiv>
                    {changePassLoading ? (
                      <BeatLoader />
                    ) : (
                      <PriButton onChange={handlePass} onSubmit={handlePass}>
                        Change Password
                      </PriButton>
                    )}
                  </Form>
                  {Object.keys(errors).length > 0 && (
                    <ErrorMessages>
                      <h4 style={{margin: "0"}}>Warning!</h4>
                      <Ul>
                        {Object.values(errors).map((error) => (
                          <Li key={error}>* {error}</Li>
                        ))}
                      </Ul>
                    </ErrorMessages>
                  )}
                  <FormRouter
                    style={{alignSelf: "flex-start"}}
                    onClick={() => setChangePassword(false)}
                  >
                    Click Here to Update Details
                  </FormRouter>
                </>
              ) : (
                <>
                  <Form onSubmit={handleSubmit}>
                    <FlexDiv>
                      <FlexBlock>
                        <FormLabel>First Name</FormLabel>
                        <FormInput
                          type="text"
                          name="firstName"
                          placeholder={getUser.firstName}
                          value={values.firstName}
                          onChange={handleInput}
                        />
                      </FlexBlock>
                      <FlexBlock>
                        <FormLabel>Middle Name</FormLabel>
                        <FormInput
                          type="text"
                          name="middleName"
                          placeholder={getUser.middleName}
                          value={values.middleName}
                          onChange={handleInput}
                        />
                      </FlexBlock>
                    </FlexDiv>
                    <FlexDiv>
                      <FlexBlock>
                        <FormLabel>Last Name</FormLabel>
                        <FormInput
                          type="text"
                          name="lastName"
                          placeholder={getUser.lastName}
                          value={values.lastName}
                          onChange={handleInput}
                        />
                      </FlexBlock>
                      <FlexBlock>
                        <FormLabel>State</FormLabel>
                        <FormSelect onChange={handleState}>
                          <option
                            selected={getUser.state === "Abia"}
                            name="state"
                            value="Abia"
                          >
                            Abia
                          </option>
                          <option
                            selected={getUser.state === "Adamawa"}
                            name="state"
                            value="Adamawa"
                          >
                            Adamawa
                          </option>
                          <option
                            selected={getUser.state === "Akwa Ibom"}
                            name="state"
                            value="Akwa Ibom"
                            onChange={handleInput}
                          >
                            Akwa Ibom
                          </option>
                          <option
                            selected={getUser.state === "Anambra"}
                            name="state"
                            value="Anambra"
                          >
                            Anambra
                          </option>
                          <option
                            selected={getUser.state === "Bauchi"}
                            name="state"
                            value="Bauchi"
                          >
                            Bauchi
                          </option>
                          <option
                            selected={getUser.state === "Bayelsa"}
                            name="state"
                            value="Bayelsa"
                          >
                            Bayelsa
                          </option>
                          <option
                            selected={getUser.state === "Benue"}
                            name="state"
                            value="Benue"
                          >
                            Benue
                          </option>
                          <option
                            selected={getUser.state === "Borno"}
                            name="state"
                            value="Borno"
                          >
                            Borno
                          </option>
                          <option
                            selected={getUser.state === "Cross Rive"}
                            name="state"
                            value="Cross Rive"
                          >
                            Cross River
                          </option>
                          <option
                            selected={getUser.state === "Delta"}
                            name="state"
                            value="Delta"
                          >
                            Delta
                          </option>
                          <option
                            selected={getUser.state === "Ebonyi"}
                            name="state"
                            value="Ebonyi"
                          >
                            Ebonyi
                          </option>
                          <option
                            selected={getUser.state === "Edo"}
                            name="state"
                            value="Edo"
                          >
                            Edo
                          </option>
                          <option
                            selected={getUser.state === "Ekiti"}
                            name="state"
                            value="Ekiti"
                          >
                            Ekiti
                          </option>
                          <option
                            selected={getUser.state === "Enugu"}
                            name="state"
                            value="Enugu"
                          >
                            Enugu
                          </option>
                          <option
                            selected={getUser.state === "FCT"}
                            name="state"
                            value="FCT"
                          >
                            Federal Capital Territory
                          </option>
                          <option
                            selected={getUser.state === "Gombe"}
                            name="state"
                            value="Gombe"
                          >
                            Gombe
                          </option>
                          <option
                            selected={getUser.state === "Imo"}
                            name="state"
                            value="Imo"
                          >
                            Imo
                          </option>
                          <option
                            selected={getUser.state === "Jigawa"}
                            name="state"
                            value="Jigawa"
                          >
                            Jigawa
                          </option>
                          <option
                            selected={getUser.state === "Kaduna"}
                            name="state"
                            value="Kaduna"
                          >
                            Kaduna
                          </option>
                          <option
                            selected={getUser.state === "Kano"}
                            name="state"
                            value="Kano"
                          >
                            Kano
                          </option>
                          <option
                            selected={getUser.state === "Katsina"}
                            name="state"
                            value="Katsina"
                          >
                            Katsina
                          </option>
                          <option
                            selected={getUser.state === "Kebbi"}
                            name="state"
                            value="Kebbi"
                          >
                            Kebbi
                          </option>
                          <option
                            selected={getUser.state === "Kogi"}
                            name="state"
                            value="Kogi"
                          >
                            Kogi
                          </option>
                          <option
                            selected={getUser.state === "Kwara"}
                            name="state"
                            value="Kwara"
                          >
                            Kwara
                          </option>
                          <option
                            selected={getUser.state === "Lagos"}
                            name="state"
                            value="Lagos"
                          >
                            Lagos
                          </option>
                          <option
                            selected={getUser.state === "Nasarawa"}
                            name="state"
                            value="Nasarawa"
                          >
                            Nasarawa
                          </option>
                          <option
                            selected={getUser.state === "Niger"}
                            name="state"
                            value="Niger"
                          >
                            Niger
                          </option>
                          <option
                            selected={getUser.state === "Ogun"}
                            name="state"
                            value="Ogun"
                          >
                            Ogun
                          </option>
                          <option
                            selected={getUser.state === "Ondo"}
                            name="state"
                            value="Ondo"
                          >
                            Ondo
                          </option>
                          <option
                            selected={getUser.state === "Osun"}
                            name="state"
                            value="Osun"
                          >
                            Osun
                          </option>
                          <option
                            selected={getUser.state === "Oyo"}
                            name="state"
                            value="Oyo"
                          >
                            Oyo
                          </option>
                          <option
                            selected={getUser.state === "Plateau"}
                            name="state"
                            value="Plateau"
                          >
                            Plateau
                          </option>
                          <option
                            selected={getUser.state === "Rivers"}
                            name="state"
                            value="Rivers"
                          >
                            Rivers
                          </option>
                          <option
                            selected={getUser.state === "Sokoto"}
                            name="state"
                            value="Sokoto"
                          >
                            Sokoto
                          </option>
                          <option
                            selected={getUser.state === "Taraba"}
                            name="state"
                            value="Taraba"
                          >
                            Taraba
                          </option>
                          <option
                            selected={getUser.state === "Yobe"}
                            name="state"
                            value="Yobe"
                          >
                            Yobe
                          </option>
                          <option
                            selected={getUser.state === "Zamfara"}
                            name="state"
                            value="Zamfara"
                          >
                            Zamfara
                          </option>
                        </FormSelect>
                      </FlexBlock>
                    </FlexDiv>
                    <FlexDiv>
                      <FlexBlock>
                        <FormLabel>Email</FormLabel>
                        <FormInput value={getUser.email} disabled />
                      </FlexBlock>
                      <FlexBlock>
                        <FormLabel>Phone</FormLabel>
                        <FormInput value={getUser.phone} disabled />
                      </FlexBlock>
                    </FlexDiv>
                    {updateLoading ? (
                      <BeatLoader />
                    ) : (
                      <PriButton onClick={updatePassword}> Update</PriButton>
                    )}{" "}
                    <FormRouter
                      style={{alignSelf: "flex-start"}}
                      onClick={() => setChangePassword(true)}
                    >
                      Click Here to Change Password
                    </FormRouter>
                  </Form>
                  {Object.keys(errors).length > 0 && (
                    <ErrorMessages>
                      <h4 style={{margin: "0"}}>Warning!</h4>
                      <Ul>
                        {Object.values(errors).map((error) => (
                          <Li key={error}>* {error}</Li>
                        ))}
                      </Ul>
                    </ErrorMessages>
                  )}
                </>
              )}
            </SettingsInfo>
          </SettingsCard>
          {getUser.bankInfo.length > 0 ? (
            <SettingsCard>
              <SettingsCardsTitle>Update Bank Info</SettingsCardsTitle>
              <SuccessMessage
                show={
                  updated.length > 0 &&
                  (updated === "addBank" || updated === "updateBank")
                }
              >
                {updated === "addBank"
                  ? `Bank Account Added Successfully`
                  : updated === "updateBank" &&
                    `Bank Info Updated Successfully`}
              </SuccessMessage>
              <SettingsInfo>
                {!getUser.bankInfo.length && addAcc === false ? (
                  <NoPackage>
                    <NoPackageMessage>Bank Account Not Added</NoPackageMessage>
                    <FaArrowDown
                      style={{
                        color: " #449b62",
                        width: "25px",
                        height: "25px",
                      }}
                    />
                    <PriButton onClick={() => setAddAcc(true)}>
                      Add Account
                    </PriButton>
                  </NoPackage>
                ) : (
                  <Form onSubmit={handleSubmit}>
                    <FlexDiv>
                      <FormLabel>Account Name:</FormLabel>
                      <FormInput />
                    </FlexDiv>
                    <FlexDiv>
                      <FormLabel>Account Num:</FormLabel>
                      <FormInput />
                    </FlexDiv>
                    <FlexDiv>
                      <FormLabel>Bank Name:</FormLabel>
                      <FormInput />
                    </FlexDiv>
                    <FlexDiv>
                      <FormLabel>Account Type:</FormLabel>
                      <FormInput />
                    </FlexDiv>

                    <PriButton onSubmit={handleSubmit}> Update</PriButton>
                  </Form>
                )}
              </SettingsInfo>
            </SettingsCard>
          ) : (
            <SettingsCard>
              <SettingsCardsTitle>Add Bank Account</SettingsCardsTitle>
              <SuccessMessage
                show={
                  updated.length > 0 &&
                  (updated === "addBank" || updated === "updateBank")
                }
              >
                {updated === "addBank"
                  ? `Bank Account Added Successfully`
                  : updated === "updateBank" &&
                    `Bank Info Updated Successfully`}
              </SuccessMessage>
              <SettingsInfo>
                {!getUser.bankInfo.length && addAcc === false ? (
                  <NoPackage>
                    <NoPackageMessage>Bank Account Not Added</NoPackageMessage>
                    <FaArrowDown
                      style={{
                        color: " #449b62",
                        width: "25px",
                        height: "25px",
                      }}
                    />
                    <PriButton onClick={() => setAddAcc(true)}>
                      Add Account
                    </PriButton>
                  </NoPackage>
                ) : (
                  <Form onSubmit={handleSubmit}>
                    <FlexDiv>
                      <FormLabel>Account Name:</FormLabel>
                      <FormInput />
                    </FlexDiv>
                    <FlexDiv>
                      <FormLabel>Account Num:</FormLabel>
                      <FormInput />
                    </FlexDiv>
                    <FlexDiv>
                      <FormLabel>Bank Name:</FormLabel>
                      <FormInput />
                    </FlexDiv>
                    <FlexDiv>
                      <FormLabel>Account Type:</FormLabel>
                      <FormInput />
                    </FlexDiv>

                    <PriButton onSubmit={handleSubmit}> Add Account</PriButton>
                  </Form>
                )}
              </SettingsInfo>
            </SettingsCard>
          )}
        </SettingsCardsDiv>
      </ProfileSettings>
    </div>
  );
};

export default UpdateProfile;
