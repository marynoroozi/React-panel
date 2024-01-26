import { Link, useNavigate } from "react-router-dom";
import { COMMENT, GREEN, PURPLE } from "../../helpers/colors";
import Spinner from "../spinner";
import { useState } from "react";
import { createContact } from "../../services/contactServices";

const AddContacts = ({ loading, getGroups, appRender }) => {
  const navigate = useNavigate();
  // const [forceRender, setForceRender] = useState(false);
  const [contact, setContact] = useState({
    fullname: "",
    photo: "",
    mobile: "",
    email: "",
    job: "",
    group: "",
  });

  const createContactForm = async (event) => {
    event.preventDefault();
    try {
      // const res = await createContact(contact);
      // console.log(res);
      const { status } = await createContact(contact);
      if (status === 201) {
        setContact({});
        // setForceRender(true);
        appRender(true);
        navigate("/contacts");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const setContactInfo = (event) => {
    setContact({ ...contact, [event.target.name]: event.target.value });
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <section className="p-3">
          <img
            src={require("../../assets/man-taking-note.png")}
            height="400px"
            style={{
              position: "absolute",
              zIndex: "-1",
              top: "130px",
              right: "100px",
              opacity: "50%",
            }}
          />
          <div className="container">
            <div className="row">
              <div className="col">
                <p className="h4 fw-bold text-center" style={{ color: GREEN }}>
                  {" "}
                  Create New Contact
                </p>
              </div>
            </div>
            <hr style={{ backgroundColor: GREEN }} />
            <div className="row mt-5">
              <div className="col-md-4">
                <form onSubmit={createContactForm}>
                  <div className="mb-2">
                    <input
                      type="text"
                      name="fullname"
                      placeholder="Firstname and lastname"
                      className="form-control"
                      required={true}
                      onChange={setContactInfo}
                      value={contact.fullname}
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      type="text"
                      name="photo"
                      placeholder="Image address"
                      className="form-control"
                      // required={true}
                      onChange={setContactInfo}
                      value={contact.photo}
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      type="number"
                      name="mobile"
                      placeholder="Phone number"
                      className="form-control"
                      required={true}
                      onChange={setContactInfo}
                      value={contact.mobile}
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      type="text"
                      name="email"
                      placeholder="Email address"
                      className="form-control"
                      required={true}
                      onChange={setContactInfo}
                      value={contact.email}
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      type="text"
                      name="job"
                      placeholder="job"
                      className="form-control"
                      required={true}
                      onChange={setContactInfo}
                      value={contact.job}
                    />
                  </div>
                  <div className="mb-2">
                    <select
                      name="group"
                      className="form-control"
                      required={true}
                      onChange={setContactInfo}
                      value={contact.group}
                    >
                      <option value="">select a group</option>
                      {getGroups.length > 0 &&
                        getGroups.map((group) => (
                          <option key={group.id} value={group.id}>
                            {" "}
                            {group.name}{" "}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div className="mb-2">
                    <input
                      type="submit"
                      className="btn"
                      style={{ backgroundColor: PURPLE }}
                      value="Create This Contact"
                    />
                    <Link
                      to={"/contacts"}
                      className="btn mx-2"
                      style={{ backgroundColor: COMMENT }}
                    >
                      Cancel
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default AddContacts;
