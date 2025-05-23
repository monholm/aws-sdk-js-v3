// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DeleteNetworkInsightsAccessScopeAnalysisRequest,
  DeleteNetworkInsightsAccessScopeAnalysisResult,
} from "../models/models_3";
import {
  de_DeleteNetworkInsightsAccessScopeAnalysisCommand,
  se_DeleteNetworkInsightsAccessScopeAnalysisCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteNetworkInsightsAccessScopeAnalysisCommand}.
 */
export interface DeleteNetworkInsightsAccessScopeAnalysisCommandInput
  extends DeleteNetworkInsightsAccessScopeAnalysisRequest {}
/**
 * @public
 *
 * The output of {@link DeleteNetworkInsightsAccessScopeAnalysisCommand}.
 */
export interface DeleteNetworkInsightsAccessScopeAnalysisCommandOutput
  extends DeleteNetworkInsightsAccessScopeAnalysisResult,
    __MetadataBearer {}

/**
 * <p>Deletes the specified Network Access Scope analysis.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteNetworkInsightsAccessScopeAnalysisCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteNetworkInsightsAccessScopeAnalysisCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteNetworkInsightsAccessScopeAnalysisRequest
 *   NetworkInsightsAccessScopeAnalysisId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteNetworkInsightsAccessScopeAnalysisCommand(input);
 * const response = await client.send(command);
 * // { // DeleteNetworkInsightsAccessScopeAnalysisResult
 * //   NetworkInsightsAccessScopeAnalysisId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteNetworkInsightsAccessScopeAnalysisCommandInput - {@link DeleteNetworkInsightsAccessScopeAnalysisCommandInput}
 * @returns {@link DeleteNetworkInsightsAccessScopeAnalysisCommandOutput}
 * @see {@link DeleteNetworkInsightsAccessScopeAnalysisCommandInput} for command's `input` shape.
 * @see {@link DeleteNetworkInsightsAccessScopeAnalysisCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeleteNetworkInsightsAccessScopeAnalysisCommand extends $Command
  .classBuilder<
    DeleteNetworkInsightsAccessScopeAnalysisCommandInput,
    DeleteNetworkInsightsAccessScopeAnalysisCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "DeleteNetworkInsightsAccessScopeAnalysis", {})
  .n("EC2Client", "DeleteNetworkInsightsAccessScopeAnalysisCommand")
  .f(void 0, void 0)
  .ser(se_DeleteNetworkInsightsAccessScopeAnalysisCommand)
  .de(de_DeleteNetworkInsightsAccessScopeAnalysisCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteNetworkInsightsAccessScopeAnalysisRequest;
      output: DeleteNetworkInsightsAccessScopeAnalysisResult;
    };
    sdk: {
      input: DeleteNetworkInsightsAccessScopeAnalysisCommandInput;
      output: DeleteNetworkInsightsAccessScopeAnalysisCommandOutput;
    };
  };
}
