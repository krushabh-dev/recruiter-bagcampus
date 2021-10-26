import React, { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  const displayName = user.displayName;
  const email = user.email;
  const photoURL = user.photoURL;
  const emailVerified = user.emailVerified;
});
const user = auth.currentUser;
const yemail = user.email;

//export { ydisplayName, yemail, yphotoURL, yemailVerified };
export { yemail };
