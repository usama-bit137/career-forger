let cvState = {
  personal: {
    firstName: "Jim Bob",
    lastName: "Sherman",
    phone: "+44 7659 903428",
    email: "jimbob.sherman@email.com",
    profile:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum dui ac venenatis vulputate. In ornare pellentesque ante, ac ultrices lorem semper vitae. Sed hendrerit, elit quis eleifend finibus, est magna viverra risus, nec pulvinar ligula leo quis tellus. Pellentesque facilisis nulla ac velit sagittis ullamcorper.",
  },
  education: [
    {
      id: 0,
      institution: "",
      major: "",
      start: "",
      end: "",
      description: "",
    },
  ],

  work: [
    {
      id: 0,
      company: "",
      jobTitle: "",
      start: "",
      end: "",
      description: "",
    },
  ],
  skills: ["", ""],
  references: {
    refName: "",
    refType: "radio button",
    institution: "",
    phone: "",
    email: "",
  },
};
module.exports = cvState;
