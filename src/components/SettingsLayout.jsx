import React, { useState } from "react";
import { TextInput } from "../components/TextInput";
import { SingleSelect } from "../components/SingleSelect";
import { Auth } from "aws-amplify";
import { ErrorMessage } from "../components/ErrorMessage";
import Moment from "moment";
import { Loader } from "./Loader";
import { Button } from "./Button";
import { NextButton } from "./NextButton";
import { Modal } from "./Modal";
import { DeleteAccaunt } from "./DeleteAccaunt";
import { useNavigate } from "react-router-dom";

const optionsRole = [
  { value: "Real estate transaction", label: "Real estate transaction" },
  { value: "Real estate strategy", label: "Real estate strategy" },
  { value: "Real estate design", label: "Real estate design" },
];

export const SettingsLayout = () => {
  const [formFirstName, setFormFirstName] = useState("");
  const [formSurname, setFormSurname] = useState("");
  const [formCompanyName, setFormCompanyName] = useState("");
  const [formAddress, setFormAddress] = useState("");
  const [formRole, setFormRole] = useState("");
  const [email, setEmail] = useState("");
  const [isEdit, setEdit] = useState(false);
  const [isEditPassword, setEditPassword] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [registrationDate, setRegistrationDate] = useState("");
  const [error, setError] = useState("");
  const [isVisibleLoader, setVisibleLoader] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [code, setCode] = useState("");
  const [updatedPassword, setUpdatedPassword] = useState("");
  const [isSendedForgotPassword, setSendedForgotPassword] = useState(false);
  const [isOpenDeleteAccountModal, setOpenDeleteAccountModal] = useState(false);
  const navigate = useNavigate();

  const canBeChangedPersonalData =
    formFirstName && formSurname && formCompanyName && formAddress && formRole;

  const canBeChangedPassword = oldPassword && newPassword;

  const getCurrentUser = async () => {
    try {
      if (!currentUser) {
        const user = await Auth.currentUserInfo();
        const {
          attributes: {
            "custom:first_name": first_name,
            "custom:surname": surname,
            "custom:company_name": company_name,
            "custom:address": address,
            "custom:role": role,
            "custom:registration_date": registration_date,
            email,
          },
        } = user;
        setFormFirstName(first_name);
        setFormSurname(surname);
        setFormCompanyName(company_name);
        setFormAddress(address);
        setFormRole(role);
        setEmail(email);
        setRegistrationDate(registration_date);
        setCurrentUser(user);
        setVisibleLoader(false);
      }
    } catch (error) {
      setVisibleLoader(false);
    }
  };

  const onChangePassword = async () => {
    if (oldPassword && newPassword) {
      setError("");
      setVisibleLoader(true);
      await Auth.currentAuthenticatedUser()
        .then((user) => {
          return Auth.changePassword(user, oldPassword, newPassword);
        })
        .then((data) => {
          setVisibleLoader(false);
          toggleEditPassword();
        })
        .catch((err) => {
          setVisibleLoader(false);
          setError(err);
        });
    } else {
      toggleEditPassword();
    }
  };

  const onEditPersonalDetails = async () => {
    try {
      if (canBeChangedPersonalData) {
        setError("");
        setVisibleLoader(true);
        await Auth.currentAuthenticatedUser()
          .then((user) => {
            return Auth.updateUserAttributes(user, {
              "custom:first_name": formFirstName,
              "custom:surname": formSurname,
              "custom:company_name": formCompanyName,
              "custom:address": formAddress,
              "custom:role": formRole,
              "custom:registration_date": Moment().format("DD/MM/YYYY"),
            });
          })
          .then((data) => setVisibleLoader(false))
          .catch((err) => setVisibleLoader(false));
      }
    } catch (error) {
      setVisibleLoader(false);
    }
    toggleEdit();
  };

  const forgotPassword = async () => {
    if (email) {
      setVisibleLoader(true);
      await Auth.forgotPassword(email)
        .then((data) => {
          setVisibleLoader(false);
          setSendedForgotPassword(true);
          setError("");
        })
        .catch((err) => {
          setVisibleLoader(false);
          setError(err);
        });
    }
  };

  const submitForgotPassword = async () => {
    if (email && code && updatedPassword) {
      setVisibleLoader(true);
      await Auth.forgotPasswordSubmit(email, code, updatedPassword)
        .then((data) => {
          setVisibleLoader(false);
          toggleForgotPassword();
          setSendedForgotPassword(false);
          setError("");
        })
        .catch((err) => {
          setVisibleLoader(false);
          // toggleForgotPassword();
          // setSendedForgotPassword(false);
          setError(err);
        });
    }
  };

  const onDeleteAccount = async () => {
    setVisibleLoader(true);
    await Auth.deleteUser()
      .then((res) => {
        setVisibleLoader(false);
        navigate("/");
        console.log("Delete Account success!: ", res);
      })
      .catch((error) => {
        setVisibleLoader(false);
        setError(error);
        console.log("Delete Account error!L ", error);
      });
  };

  const toggleEdit = () => setEdit(!isEdit);
  const toggleEditPassword = () => setEditPassword(!isEditPassword);
  const toggleForgotPassword = () => {
    setIsForgotPassword(!isForgotPassword);
    setSendedForgotPassword(false);
    setError("");
  };

  const toggleDeleteAccountModal = () => {
    setOpenDeleteAccountModal(!isOpenDeleteAccountModal);
  };

  getCurrentUser();

  return (
    <>
      <Loader visible={isVisibleLoader} />
      <div className="relative bg-[#4C5678] rounded-[8px] w-full p-[27px] mt-[15px] mb-[25px]">
        <span className="text-blue-light text-[24px] md:text[30px] font-bold">
          Your personal details
        </span>
        <div className="flex flex-col mt-[25px]">
          {isEdit ? (
            <div className="mb-[10px]">
              <TextInput
                type="text"
                value={formFirstName}
                placeholder="First name"
                onChange={(event) => setFormFirstName(event.target.value)}
              />
            </div>
          ) : (
            <div className="flex flex-col">
              <span className="text-blue-light text-[18px] font-bold">
                First Name
              </span>
              <span className="text-light text-[14px] font-normal mb-[25px]">
                {formFirstName}
              </span>
            </div>
          )}
          {isEdit ? (
            <div className="mb-[10px]">
              <TextInput
                type="text"
                value={formSurname}
                placeholder="Surname"
                onChange={(event) => setFormSurname(event.target.value)}
              />
            </div>
          ) : (
            <div className="flex flex-col">
              <span className="text-blue-light text-[18px] font-bold">
                Last Name
              </span>
              <span className="text-light text-[14px] font-normal mb-[25px]">
                {formSurname}
              </span>
            </div>
          )}
          {isEdit ? (
            <div className="mb-[10px]">
              <TextInput
                type="text"
                value={formCompanyName}
                placeholder="Company name"
                onChange={(event) => setFormCompanyName(event.target.value)}
              />
            </div>
          ) : (
            <div className="flex flex-col">
              <span className="text-blue-light text-[18px] font-bold">
                Company
              </span>
              <span className="text-light text-[14px] font-normal mb-[25px]">
                {formCompanyName}
              </span>
            </div>
          )}
          {isEdit ? (
            <div className="mb-[10px]">
              <TextInput
                type="text"
                value={formAddress}
                placeholder="Type your company address or postcode"
                onChange={(event) => setFormAddress(event.target.value)}
              />
            </div>
          ) : (
            <div className="flex flex-col">
              <span className="text-blue-light text-[18px] font-bold">
                Address
              </span>
              <span className="text-light text-[14px] font-normal mb-[25px]">
                {formAddress}
              </span>
            </div>
          )}
          {isEdit ? (
            <div className="mb-[50px]">
              <SingleSelect
                name="role"
                selected={formRole}
                options={optionsRole}
                onChande={({ value }) => setFormRole(value)}
              />
            </div>
          ) : (
            <div className="flex flex-col">
              <span className="text-blue-light text-[18px] font-bold">
                Role
              </span>
              <span className="text-light text-[14px] font-normal mb-[25px]">
                {formRole}
              </span>
            </div>
          )}
          {isEdit ? (
            <div
              className={`absolute h-fit bottom-[35px] right-[27px] md:top-[48px] md:right-[48px] hover:cursor-pointer underline uppercase underline-offset-4 text-[14px] font-normal text-light 
              `}
              onClick={() => {
                if (canBeChangedPersonalData) {
                  return onEditPersonalDetails();
                }
                setError(new Error("field cannot be empty"));
              }}
            >
              Save
            </div>
          ) : (
            <div
              className="absolute h-fit bottom-[35px] right-[27px] md:top-[48px] md:right-[48px] hover:cursor-pointer underline uppercase underline-offset-4 text-[14px] font-normal text-light"
              onClick={() => toggleEdit()}
            >
              Edit
            </div>
          )}
        </div>
        {isEdit && error && <ErrorMessage error={error} />}
      </div>
      <div>
        <div className="flex flex-col bg-[#4C5678] rounded-[8px] w-full p-[27px] mt-[15px] mb-[25px]">
          <div className="relative">
            <span className="text-blue-light text-[24px] font-bold mb-[19px]">
              Your account details
            </span>
            <div className="flex flex-col">
              <span className="text-blue-light text-[18px] font-bold">
                Email
              </span>
              <span className="text-light text-[14px] font-normal mb-[25px]">
                {email}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-blue-light text-[18px] font-bold">
                Password
              </span>
              {isEditPassword ? (
                <div className="mt-[10px]">
                  <div className="mb-[10px]">
                    <TextInput
                      type="text"
                      value={oldPassword}
                      placeholder="Old paswword"
                      onChange={(event) => setOldPassword(event.target.value)}
                    />
                  </div>
                  <div className="mb-[10px]">
                    <TextInput
                      type="text"
                      value={newPassword}
                      placeholder="New password"
                      onChange={(event) => setNewPassword(event.target.value)}
                    />
                  </div>
                </div>
              ) : (
                <span className="text-light text-[14px] font-normal mb-[25px]">
                  ********
                </span>
              )}
            </div>
            {isEditPassword ? (
              <div
                className="absolute h-fit bottom-[150px] right-0 md:top-0 md:right-0 hover:cursor-pointer underline uppercase underline-offset-4 text-[14px] font-normal text-light"
                onClick={() => onChangePassword()}
              >
                {canBeChangedPassword ? "Save" : "Cancel"}
              </div>
            ) : (
              <div
                className="absolute h-fit bottom-[35px] right-[27px] md:top-0 md:right-0 hover:cursor-pointer underline uppercase underline-offset-4 text-[14px] font-normal text-light"
                onClick={() => toggleEditPassword()}
              >
                Edit
              </div>
            )}
          </div>
          <hr />
          <div className="relative">
            <div className="flex items-center justify-end mt-[15px]">
              {isForgotPassword ? (
                <div
                  className="absolute bottom-1 md:relative hover:cursor-pointer underline uppercase underline-offset-4 text-[14px] font-normal text-light"
                  onClick={() => {
                    toggleForgotPassword();
                  }}
                >
                  Cancel
                </div>
              ) : (
                <div
                  className="hover:cursor-pointer underline uppercase underline-offset-4 text-[14px] font-normal text-light"
                  onClick={() => {
                    toggleForgotPassword();
                  }}
                >
                  Forgot password
                </div>
              )}
            </div>
            {isForgotPassword && (
              <div className="flex flex-col items-start justify-center">
                <span className="text-blue-light text-[24px] font-bold mb-[19px]">
                  Update your password
                </span>
                {isSendedForgotPassword ? (
                  <div className="mt-[10px]">
                    <div className="mb-[10px]">
                      <TextInput
                        type="text"
                        value={code}
                        placeholder="Code"
                        onChange={(event) => setCode(event.target.value)}
                      />
                    </div>
                    <div className="mb-[10px]">
                      <TextInput
                        type="text"
                        value={updatedPassword}
                        placeholder="New password"
                        onChange={(event) =>
                          setUpdatedPassword(event.target.value)
                        }
                      />
                    </div>
                    <Button
                      onClick={() => submitForgotPassword()}
                      className="w-fit"
                    >
                      Submit update
                    </Button>
                  </div>
                ) : (
                  <Button onClick={() => forgotPassword()} className="w-fit">
                    Send code
                  </Button>
                )}
                {isForgotPassword && error && <ErrorMessage error={error} />}
              </div>
            )}
          </div>
          {isEditPassword && error && <ErrorMessage error={error} />}
        </div>
        <div className="flex items-center justify-end w-full">
          <NextButton
            text="Delete account"
            disabled={false}
            onClick={() => {
              toggleDeleteAccountModal();
            }}
            to
          />
        </div>
        <Modal
          overflow={false}
          isOpen={isOpenDeleteAccountModal}
          closeModal={toggleDeleteAccountModal}
        >
          <DeleteAccaunt
            closeModal={toggleDeleteAccountModal}
            onConfirmDeleteAccount={onDeleteAccount}
          />
          {isOpenDeleteAccountModal && error && <ErrorMessage error={error} />}
        </Modal>
      </div>
    </>
  );
};
