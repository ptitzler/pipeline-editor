/*
 * Copyright 2018-2022 Elyra Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Message } from "./PropertiesPanel";

interface Props {
  pipelineFlow: any;
  propertiesSchema?: any;
  onChange?: (data: any) => any;
}

function PipelineProperties(props: Props) {
  if (props.propertiesSchema === undefined) {
    return <Message>No pipeline properties defined.</Message>;
  }

  return <div />;
}

export default PipelineProperties;
