import React, { useEffect, useState } from 'react';
import Style from './withDataFetching.style';

const withDataFetching = <Props extends any>(
  shouldCallEffect: (props: Props) => any[],
  dataName: string,
) => (BaseComponent: React.ComponentType<Props>) => (props: Props) => {
  const { loading } = props;
  const [error, setError] = useState<string | null>();
  useEffect(() => {
    props.requestData(...shouldCallEffect(props));
  }, [...shouldCallEffect(props)]);
  const showComponent = !loading && props[dataName];
  return (
    <Style.Container>
      {loading && (
        <Style.Loader src="https://trello-attachments.s3.amazonaws.com/5d0ce56e059f0263f02e0155/5d0ce56e059f0263f02e016f/x/f020b178de9e22691149d450613f8f52/loader.svg" />
      )}
      {error && (
        <Style.Error>
          Oh no !<br /> The following error happened:
          <br /> {error}
        </Style.Error>
      )}
      {showComponent && <BaseComponent {...props} />}
    </Style.Container>
  );
};

export default withDataFetching;
