// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListQuickResponsesRequest,
  ListQuickResponsesResponse,
  ListQuickResponsesResponseFilterSensitiveLog,
} from "../models/models_1";
import { de_ListQuickResponsesCommand, se_ListQuickResponsesCommand } from "../protocols/Aws_restJson1";
import { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListQuickResponsesCommand}.
 */
export interface ListQuickResponsesCommandInput extends ListQuickResponsesRequest {}
/**
 * @public
 *
 * The output of {@link ListQuickResponsesCommand}.
 */
export interface ListQuickResponsesCommandOutput extends ListQuickResponsesResponse, __MetadataBearer {}

/**
 * <p>Lists information about quick response.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, ListQuickResponsesCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, ListQuickResponsesCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * const client = new QConnectClient(config);
 * const input = { // ListQuickResponsesRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   knowledgeBaseId: "STRING_VALUE", // required
 * };
 * const command = new ListQuickResponsesCommand(input);
 * const response = await client.send(command);
 * // { // ListQuickResponsesResponse
 * //   quickResponseSummaries: [ // QuickResponseSummaryList // required
 * //     { // QuickResponseSummary
 * //       quickResponseArn: "STRING_VALUE", // required
 * //       quickResponseId: "STRING_VALUE", // required
 * //       knowledgeBaseArn: "STRING_VALUE", // required
 * //       knowledgeBaseId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       contentType: "STRING_VALUE", // required
 * //       status: "STRING_VALUE", // required
 * //       createdTime: new Date("TIMESTAMP"), // required
 * //       lastModifiedTime: new Date("TIMESTAMP"), // required
 * //       description: "STRING_VALUE",
 * //       lastModifiedBy: "STRING_VALUE",
 * //       isActive: true || false,
 * //       channels: [ // Channels
 * //         "STRING_VALUE",
 * //       ],
 * //       tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListQuickResponsesCommandInput - {@link ListQuickResponsesCommandInput}
 * @returns {@link ListQuickResponsesCommandOutput}
 * @see {@link ListQuickResponsesCommandInput} for command's `input` shape.
 * @see {@link ListQuickResponsesCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by a service.</p>
 *
 * @throws {@link QConnectServiceException}
 * <p>Base exception class for all service exceptions from QConnect service.</p>
 *
 *
 * @public
 */
export class ListQuickResponsesCommand extends $Command
  .classBuilder<
    ListQuickResponsesCommandInput,
    ListQuickResponsesCommandOutput,
    QConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WisdomService", "ListQuickResponses", {})
  .n("QConnectClient", "ListQuickResponsesCommand")
  .f(void 0, ListQuickResponsesResponseFilterSensitiveLog)
  .ser(se_ListQuickResponsesCommand)
  .de(de_ListQuickResponsesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListQuickResponsesRequest;
      output: ListQuickResponsesResponse;
    };
    sdk: {
      input: ListQuickResponsesCommandInput;
      output: ListQuickResponsesCommandOutput;
    };
  };
}
