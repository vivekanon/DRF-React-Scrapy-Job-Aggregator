import React from 'react'
import {LoginProvider} from './login'
import { FetchProvider } from './fetch'

function ProviderComposer({ contexts, children }) {
    return contexts.reduceRight(
      (kids, parent) =>
        React.cloneElement(parent, {
          children: kids,
        }),
      children
    );
  }
  
  function ContextProvider({ children }) {
    return (
      <ProviderComposer
        contexts={[<LoginProvider />, <FetchProvider />]}
      >
        {children}
      </ProviderComposer>
    );
  }
  
  export { ContextProvider };