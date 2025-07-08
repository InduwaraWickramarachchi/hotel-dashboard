'use client';

import { FC, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface SnackBarMsgProp {
  message: string;
  isError: boolean;
}

const SnackBarMsg: FC<SnackBarMsgProp> = ({ message, isError }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(false), 4000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`fixed bottom-10 left-1/2 z-50 flex -translate-x-1/2 justify-center rounded-lg px-8 py-2 shadow-lg ${
            isError ? 'bg-red-200 text-red-700' : 'bg-green-200 text-green-700'
          }`}
        >
          <div className="text-sm">{message}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SnackBarMsg;
