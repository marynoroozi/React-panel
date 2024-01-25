import { Link } from "react-router-dom";
import { COMMENT, GREEN, PURPLE } from "../../helpers/colors";
import Spinner from "../spinner";

const AddContacts = ({ loading }) => {
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
                <form>
                  <div className="mb-2">
                    <input
                      type="text"
                      name="fullname"
                      placeholder="Firstname and lastname"
                      className="form-control"
                      required={true}
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      type="text"
                      name="photo"
                      placeholder="Image address"
                      className="form-control"
                      // required={true}
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      type="number"
                      name="mobile"
                      placeholder="Phone number"
                      className="form-control"
                      required={true}
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      type="text"
                      name="email"
                      placeholder="Email address"
                      className="form-control"
                      required={true}
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      type="text"
                      name="job"
                      placeholder="job"
                      className="form-control"
                      required={true}
                    />
                  </div>
                  <div className="mb-2">
                    <select
                      name="group"
                      className="form-control"
                      required={true}
                    >
                      <option value="">select a group</option>
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
