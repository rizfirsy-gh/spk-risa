import { createContext, useState, useContext } from "react";

const DeleteAlertContext = createContext(false);

export function DeleteAlertProvider({ children }) {
  const [deleteAlert, setDeleteAlert] = useState(false);

  return (
    <DeleteAlertContext.Provider value={[deleteAlert, setDeleteAlert]}>
      {children}
    </DeleteAlertContext.Provider>
  );
}

export function useDeleteAlertContext() {
  return useContext(DeleteAlertContext);
}
