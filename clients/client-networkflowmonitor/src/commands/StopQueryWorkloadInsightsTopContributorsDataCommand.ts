// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  StopQueryWorkloadInsightsTopContributorsDataInput,
  StopQueryWorkloadInsightsTopContributorsDataOutput,
} from "../models/models_0";
import {
  NetworkFlowMonitorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NetworkFlowMonitorClient";
import {
  de_StopQueryWorkloadInsightsTopContributorsDataCommand,
  se_StopQueryWorkloadInsightsTopContributorsDataCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopQueryWorkloadInsightsTopContributorsDataCommand}.
 */
export interface StopQueryWorkloadInsightsTopContributorsDataCommandInput
  extends StopQueryWorkloadInsightsTopContributorsDataInput {}
/**
 * @public
 *
 * The output of {@link StopQueryWorkloadInsightsTopContributorsDataCommand}.
 */
export interface StopQueryWorkloadInsightsTopContributorsDataCommandOutput
  extends StopQueryWorkloadInsightsTopContributorsDataOutput,
    __MetadataBearer {}

/**
 * <p>Return the data for a query with the Network Flow Monitor query interface.
 *    		Specify the query that you want to return results for by providing a query ID
 *    		and a scope ID. This query returns data for the top contributors for workload insights.
 *    		Workload insights provide a high level view of network flow performance data collected by agents
 *    		for a scope.</p>
 *          <p>Top contributors in Network Flow Monitor are network flows with the highest values for a specific
 *    		metric type, related to a scope (for workload insights) or a monitor.</p>
 *          <p>The top contributor network flows overall for a specific metric type, for example, the
 *    		number of retransmissions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFlowMonitorClient, StopQueryWorkloadInsightsTopContributorsDataCommand } from "@aws-sdk/client-networkflowmonitor"; // ES Modules import
 * // const { NetworkFlowMonitorClient, StopQueryWorkloadInsightsTopContributorsDataCommand } = require("@aws-sdk/client-networkflowmonitor"); // CommonJS import
 * const client = new NetworkFlowMonitorClient(config);
 * const input = { // StopQueryWorkloadInsightsTopContributorsDataInput
 *   scopeId: "STRING_VALUE", // required
 *   queryId: "STRING_VALUE", // required
 * };
 * const command = new StopQueryWorkloadInsightsTopContributorsDataCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopQueryWorkloadInsightsTopContributorsDataCommandInput - {@link StopQueryWorkloadInsightsTopContributorsDataCommandInput}
 * @returns {@link StopQueryWorkloadInsightsTopContributorsDataCommandOutput}
 * @see {@link StopQueryWorkloadInsightsTopContributorsDataCommandInput} for command's `input` shape.
 * @see {@link StopQueryWorkloadInsightsTopContributorsDataCommandOutput} for command's `response` shape.
 * @see {@link NetworkFlowMonitorClientResolvedConfig | config} for NetworkFlowMonitorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeded a service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Invalid request.</p>
 *
 * @throws {@link NetworkFlowMonitorServiceException}
 * <p>Base exception class for all service exceptions from NetworkFlowMonitor service.</p>
 *
 *
 * @public
 */
export class StopQueryWorkloadInsightsTopContributorsDataCommand extends $Command
  .classBuilder<
    StopQueryWorkloadInsightsTopContributorsDataCommandInput,
    StopQueryWorkloadInsightsTopContributorsDataCommandOutput,
    NetworkFlowMonitorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkFlowMonitorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("NetworkFlowMonitor", "StopQueryWorkloadInsightsTopContributorsData", {})
  .n("NetworkFlowMonitorClient", "StopQueryWorkloadInsightsTopContributorsDataCommand")
  .f(void 0, void 0)
  .ser(se_StopQueryWorkloadInsightsTopContributorsDataCommand)
  .de(de_StopQueryWorkloadInsightsTopContributorsDataCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopQueryWorkloadInsightsTopContributorsDataInput;
      output: {};
    };
    sdk: {
      input: StopQueryWorkloadInsightsTopContributorsDataCommandInput;
      output: StopQueryWorkloadInsightsTopContributorsDataCommandOutput;
    };
  };
}
