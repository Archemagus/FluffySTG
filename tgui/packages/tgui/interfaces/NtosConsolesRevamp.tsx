// THIS IS A FLUFFY FONTIER UI FILE
import { ReactElement } from 'react';
import { NtosWindow, Window } from '../layouts';
import { Dimmer, Flex, Icon, Box } from '../components';
import { NtosMain } from './NtosMain';

// Components for replacement
import { ServerControl } from './ServerControl';
import { useBackend } from '../backend';

type Data = {
  reason: string;
};

const replaceWindowWithNtosWindow = (node: ReactElement) => {
  return (
    <NtosWindow width={node.props.width} height={node.props.height}>
      <NtosWindow.Content {...node.props.children.props.scrollable}>
        {node.props.children.props.children}
      </NtosWindow.Content>
    </NtosWindow>
  );
};

export const NtosConsolesRevamp = (props) => {
  const mainScreen = NtosMain(NtosWindow);
  const { data } = useBackend<Data>();
  const { reason } = data;
  return (
    <NtosWindow width={400} height={500} z>
      <NtosWindow.Content scrollable>
        <Dimmer>
          <Flex direction="column" textAlign="center" width="300px">
            <Flex.Item color="red" fontSize="16px">
              The application is not responding
            </Flex.Item>
            <br />
            <Flex.Item>
              <Icon name="face-grimace" size={10} />
            </Flex.Item>
            <br />
            <Flex.Item color="red" fontSize="20px">
              Error with process:
              <br />'
              <Box color="yellow" as="string">
                {reason}
              </Box>
              '
            </Flex.Item>
            <hr />
            <Flex.Item fontSize="12px">
              Try to plug back installation device or restart disk drive systems
              with multitool
            </Flex.Item>
          </Flex>
        </Dimmer>
        {mainScreen.props.children.props.children}
      </NtosWindow.Content>
    </NtosWindow>
  );
};

export const NtServerControl = (props) => {
  return replaceWindowWithNtosWindow(ServerControl(Window));
};
