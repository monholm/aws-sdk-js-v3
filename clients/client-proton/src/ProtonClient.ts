// smithy-typescript generated code
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/middleware-endpoint";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@smithy/middleware-retry";
import { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  defaultProtonHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  AcceptEnvironmentAccountConnectionCommandInput,
  AcceptEnvironmentAccountConnectionCommandOutput,
} from "./commands/AcceptEnvironmentAccountConnectionCommand";
import {
  CancelComponentDeploymentCommandInput,
  CancelComponentDeploymentCommandOutput,
} from "./commands/CancelComponentDeploymentCommand";
import {
  CancelEnvironmentDeploymentCommandInput,
  CancelEnvironmentDeploymentCommandOutput,
} from "./commands/CancelEnvironmentDeploymentCommand";
import {
  CancelServiceInstanceDeploymentCommandInput,
  CancelServiceInstanceDeploymentCommandOutput,
} from "./commands/CancelServiceInstanceDeploymentCommand";
import {
  CancelServicePipelineDeploymentCommandInput,
  CancelServicePipelineDeploymentCommandOutput,
} from "./commands/CancelServicePipelineDeploymentCommand";
import { CreateComponentCommandInput, CreateComponentCommandOutput } from "./commands/CreateComponentCommand";
import {
  CreateEnvironmentAccountConnectionCommandInput,
  CreateEnvironmentAccountConnectionCommandOutput,
} from "./commands/CreateEnvironmentAccountConnectionCommand";
import { CreateEnvironmentCommandInput, CreateEnvironmentCommandOutput } from "./commands/CreateEnvironmentCommand";
import {
  CreateEnvironmentTemplateCommandInput,
  CreateEnvironmentTemplateCommandOutput,
} from "./commands/CreateEnvironmentTemplateCommand";
import {
  CreateEnvironmentTemplateVersionCommandInput,
  CreateEnvironmentTemplateVersionCommandOutput,
} from "./commands/CreateEnvironmentTemplateVersionCommand";
import { CreateRepositoryCommandInput, CreateRepositoryCommandOutput } from "./commands/CreateRepositoryCommand";
import { CreateServiceCommandInput, CreateServiceCommandOutput } from "./commands/CreateServiceCommand";
import {
  CreateServiceInstanceCommandInput,
  CreateServiceInstanceCommandOutput,
} from "./commands/CreateServiceInstanceCommand";
import {
  CreateServiceSyncConfigCommandInput,
  CreateServiceSyncConfigCommandOutput,
} from "./commands/CreateServiceSyncConfigCommand";
import {
  CreateServiceTemplateCommandInput,
  CreateServiceTemplateCommandOutput,
} from "./commands/CreateServiceTemplateCommand";
import {
  CreateServiceTemplateVersionCommandInput,
  CreateServiceTemplateVersionCommandOutput,
} from "./commands/CreateServiceTemplateVersionCommand";
import {
  CreateTemplateSyncConfigCommandInput,
  CreateTemplateSyncConfigCommandOutput,
} from "./commands/CreateTemplateSyncConfigCommand";
import { DeleteComponentCommandInput, DeleteComponentCommandOutput } from "./commands/DeleteComponentCommand";
import { DeleteDeploymentCommandInput, DeleteDeploymentCommandOutput } from "./commands/DeleteDeploymentCommand";
import {
  DeleteEnvironmentAccountConnectionCommandInput,
  DeleteEnvironmentAccountConnectionCommandOutput,
} from "./commands/DeleteEnvironmentAccountConnectionCommand";
import { DeleteEnvironmentCommandInput, DeleteEnvironmentCommandOutput } from "./commands/DeleteEnvironmentCommand";
import {
  DeleteEnvironmentTemplateCommandInput,
  DeleteEnvironmentTemplateCommandOutput,
} from "./commands/DeleteEnvironmentTemplateCommand";
import {
  DeleteEnvironmentTemplateVersionCommandInput,
  DeleteEnvironmentTemplateVersionCommandOutput,
} from "./commands/DeleteEnvironmentTemplateVersionCommand";
import { DeleteRepositoryCommandInput, DeleteRepositoryCommandOutput } from "./commands/DeleteRepositoryCommand";
import { DeleteServiceCommandInput, DeleteServiceCommandOutput } from "./commands/DeleteServiceCommand";
import {
  DeleteServiceSyncConfigCommandInput,
  DeleteServiceSyncConfigCommandOutput,
} from "./commands/DeleteServiceSyncConfigCommand";
import {
  DeleteServiceTemplateCommandInput,
  DeleteServiceTemplateCommandOutput,
} from "./commands/DeleteServiceTemplateCommand";
import {
  DeleteServiceTemplateVersionCommandInput,
  DeleteServiceTemplateVersionCommandOutput,
} from "./commands/DeleteServiceTemplateVersionCommand";
import {
  DeleteTemplateSyncConfigCommandInput,
  DeleteTemplateSyncConfigCommandOutput,
} from "./commands/DeleteTemplateSyncConfigCommand";
import { GetAccountSettingsCommandInput, GetAccountSettingsCommandOutput } from "./commands/GetAccountSettingsCommand";
import { GetComponentCommandInput, GetComponentCommandOutput } from "./commands/GetComponentCommand";
import { GetDeploymentCommandInput, GetDeploymentCommandOutput } from "./commands/GetDeploymentCommand";
import {
  GetEnvironmentAccountConnectionCommandInput,
  GetEnvironmentAccountConnectionCommandOutput,
} from "./commands/GetEnvironmentAccountConnectionCommand";
import { GetEnvironmentCommandInput, GetEnvironmentCommandOutput } from "./commands/GetEnvironmentCommand";
import {
  GetEnvironmentTemplateCommandInput,
  GetEnvironmentTemplateCommandOutput,
} from "./commands/GetEnvironmentTemplateCommand";
import {
  GetEnvironmentTemplateVersionCommandInput,
  GetEnvironmentTemplateVersionCommandOutput,
} from "./commands/GetEnvironmentTemplateVersionCommand";
import { GetRepositoryCommandInput, GetRepositoryCommandOutput } from "./commands/GetRepositoryCommand";
import {
  GetRepositorySyncStatusCommandInput,
  GetRepositorySyncStatusCommandOutput,
} from "./commands/GetRepositorySyncStatusCommand";
import {
  GetResourcesSummaryCommandInput,
  GetResourcesSummaryCommandOutput,
} from "./commands/GetResourcesSummaryCommand";
import { GetServiceCommandInput, GetServiceCommandOutput } from "./commands/GetServiceCommand";
import { GetServiceInstanceCommandInput, GetServiceInstanceCommandOutput } from "./commands/GetServiceInstanceCommand";
import {
  GetServiceInstanceSyncStatusCommandInput,
  GetServiceInstanceSyncStatusCommandOutput,
} from "./commands/GetServiceInstanceSyncStatusCommand";
import {
  GetServiceSyncBlockerSummaryCommandInput,
  GetServiceSyncBlockerSummaryCommandOutput,
} from "./commands/GetServiceSyncBlockerSummaryCommand";
import {
  GetServiceSyncConfigCommandInput,
  GetServiceSyncConfigCommandOutput,
} from "./commands/GetServiceSyncConfigCommand";
import { GetServiceTemplateCommandInput, GetServiceTemplateCommandOutput } from "./commands/GetServiceTemplateCommand";
import {
  GetServiceTemplateVersionCommandInput,
  GetServiceTemplateVersionCommandOutput,
} from "./commands/GetServiceTemplateVersionCommand";
import {
  GetTemplateSyncConfigCommandInput,
  GetTemplateSyncConfigCommandOutput,
} from "./commands/GetTemplateSyncConfigCommand";
import {
  GetTemplateSyncStatusCommandInput,
  GetTemplateSyncStatusCommandOutput,
} from "./commands/GetTemplateSyncStatusCommand";
import {
  ListComponentOutputsCommandInput,
  ListComponentOutputsCommandOutput,
} from "./commands/ListComponentOutputsCommand";
import {
  ListComponentProvisionedResourcesCommandInput,
  ListComponentProvisionedResourcesCommandOutput,
} from "./commands/ListComponentProvisionedResourcesCommand";
import { ListComponentsCommandInput, ListComponentsCommandOutput } from "./commands/ListComponentsCommand";
import { ListDeploymentsCommandInput, ListDeploymentsCommandOutput } from "./commands/ListDeploymentsCommand";
import {
  ListEnvironmentAccountConnectionsCommandInput,
  ListEnvironmentAccountConnectionsCommandOutput,
} from "./commands/ListEnvironmentAccountConnectionsCommand";
import {
  ListEnvironmentOutputsCommandInput,
  ListEnvironmentOutputsCommandOutput,
} from "./commands/ListEnvironmentOutputsCommand";
import {
  ListEnvironmentProvisionedResourcesCommandInput,
  ListEnvironmentProvisionedResourcesCommandOutput,
} from "./commands/ListEnvironmentProvisionedResourcesCommand";
import { ListEnvironmentsCommandInput, ListEnvironmentsCommandOutput } from "./commands/ListEnvironmentsCommand";
import {
  ListEnvironmentTemplatesCommandInput,
  ListEnvironmentTemplatesCommandOutput,
} from "./commands/ListEnvironmentTemplatesCommand";
import {
  ListEnvironmentTemplateVersionsCommandInput,
  ListEnvironmentTemplateVersionsCommandOutput,
} from "./commands/ListEnvironmentTemplateVersionsCommand";
import { ListRepositoriesCommandInput, ListRepositoriesCommandOutput } from "./commands/ListRepositoriesCommand";
import {
  ListRepositorySyncDefinitionsCommandInput,
  ListRepositorySyncDefinitionsCommandOutput,
} from "./commands/ListRepositorySyncDefinitionsCommand";
import {
  ListServiceInstanceOutputsCommandInput,
  ListServiceInstanceOutputsCommandOutput,
} from "./commands/ListServiceInstanceOutputsCommand";
import {
  ListServiceInstanceProvisionedResourcesCommandInput,
  ListServiceInstanceProvisionedResourcesCommandOutput,
} from "./commands/ListServiceInstanceProvisionedResourcesCommand";
import {
  ListServiceInstancesCommandInput,
  ListServiceInstancesCommandOutput,
} from "./commands/ListServiceInstancesCommand";
import {
  ListServicePipelineOutputsCommandInput,
  ListServicePipelineOutputsCommandOutput,
} from "./commands/ListServicePipelineOutputsCommand";
import {
  ListServicePipelineProvisionedResourcesCommandInput,
  ListServicePipelineProvisionedResourcesCommandOutput,
} from "./commands/ListServicePipelineProvisionedResourcesCommand";
import { ListServicesCommandInput, ListServicesCommandOutput } from "./commands/ListServicesCommand";
import {
  ListServiceTemplatesCommandInput,
  ListServiceTemplatesCommandOutput,
} from "./commands/ListServiceTemplatesCommand";
import {
  ListServiceTemplateVersionsCommandInput,
  ListServiceTemplateVersionsCommandOutput,
} from "./commands/ListServiceTemplateVersionsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  NotifyResourceDeploymentStatusChangeCommandInput,
  NotifyResourceDeploymentStatusChangeCommandOutput,
} from "./commands/NotifyResourceDeploymentStatusChangeCommand";
import {
  RejectEnvironmentAccountConnectionCommandInput,
  RejectEnvironmentAccountConnectionCommandOutput,
} from "./commands/RejectEnvironmentAccountConnectionCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateAccountSettingsCommandInput,
  UpdateAccountSettingsCommandOutput,
} from "./commands/UpdateAccountSettingsCommand";
import { UpdateComponentCommandInput, UpdateComponentCommandOutput } from "./commands/UpdateComponentCommand";
import {
  UpdateEnvironmentAccountConnectionCommandInput,
  UpdateEnvironmentAccountConnectionCommandOutput,
} from "./commands/UpdateEnvironmentAccountConnectionCommand";
import { UpdateEnvironmentCommandInput, UpdateEnvironmentCommandOutput } from "./commands/UpdateEnvironmentCommand";
import {
  UpdateEnvironmentTemplateCommandInput,
  UpdateEnvironmentTemplateCommandOutput,
} from "./commands/UpdateEnvironmentTemplateCommand";
import {
  UpdateEnvironmentTemplateVersionCommandInput,
  UpdateEnvironmentTemplateVersionCommandOutput,
} from "./commands/UpdateEnvironmentTemplateVersionCommand";
import { UpdateServiceCommandInput, UpdateServiceCommandOutput } from "./commands/UpdateServiceCommand";
import {
  UpdateServiceInstanceCommandInput,
  UpdateServiceInstanceCommandOutput,
} from "./commands/UpdateServiceInstanceCommand";
import {
  UpdateServicePipelineCommandInput,
  UpdateServicePipelineCommandOutput,
} from "./commands/UpdateServicePipelineCommand";
import {
  UpdateServiceSyncBlockerCommandInput,
  UpdateServiceSyncBlockerCommandOutput,
} from "./commands/UpdateServiceSyncBlockerCommand";
import {
  UpdateServiceSyncConfigCommandInput,
  UpdateServiceSyncConfigCommandOutput,
} from "./commands/UpdateServiceSyncConfigCommand";
import {
  UpdateServiceTemplateCommandInput,
  UpdateServiceTemplateCommandOutput,
} from "./commands/UpdateServiceTemplateCommand";
import {
  UpdateServiceTemplateVersionCommandInput,
  UpdateServiceTemplateVersionCommandOutput,
} from "./commands/UpdateServiceTemplateVersionCommand";
import {
  UpdateTemplateSyncConfigCommandInput,
  UpdateTemplateSyncConfigCommandOutput,
} from "./commands/UpdateTemplateSyncConfigCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { resolveRuntimeExtensions, RuntimeExtension, RuntimeExtensionsConfig } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | AcceptEnvironmentAccountConnectionCommandInput
  | CancelComponentDeploymentCommandInput
  | CancelEnvironmentDeploymentCommandInput
  | CancelServiceInstanceDeploymentCommandInput
  | CancelServicePipelineDeploymentCommandInput
  | CreateComponentCommandInput
  | CreateEnvironmentAccountConnectionCommandInput
  | CreateEnvironmentCommandInput
  | CreateEnvironmentTemplateCommandInput
  | CreateEnvironmentTemplateVersionCommandInput
  | CreateRepositoryCommandInput
  | CreateServiceCommandInput
  | CreateServiceInstanceCommandInput
  | CreateServiceSyncConfigCommandInput
  | CreateServiceTemplateCommandInput
  | CreateServiceTemplateVersionCommandInput
  | CreateTemplateSyncConfigCommandInput
  | DeleteComponentCommandInput
  | DeleteDeploymentCommandInput
  | DeleteEnvironmentAccountConnectionCommandInput
  | DeleteEnvironmentCommandInput
  | DeleteEnvironmentTemplateCommandInput
  | DeleteEnvironmentTemplateVersionCommandInput
  | DeleteRepositoryCommandInput
  | DeleteServiceCommandInput
  | DeleteServiceSyncConfigCommandInput
  | DeleteServiceTemplateCommandInput
  | DeleteServiceTemplateVersionCommandInput
  | DeleteTemplateSyncConfigCommandInput
  | GetAccountSettingsCommandInput
  | GetComponentCommandInput
  | GetDeploymentCommandInput
  | GetEnvironmentAccountConnectionCommandInput
  | GetEnvironmentCommandInput
  | GetEnvironmentTemplateCommandInput
  | GetEnvironmentTemplateVersionCommandInput
  | GetRepositoryCommandInput
  | GetRepositorySyncStatusCommandInput
  | GetResourcesSummaryCommandInput
  | GetServiceCommandInput
  | GetServiceInstanceCommandInput
  | GetServiceInstanceSyncStatusCommandInput
  | GetServiceSyncBlockerSummaryCommandInput
  | GetServiceSyncConfigCommandInput
  | GetServiceTemplateCommandInput
  | GetServiceTemplateVersionCommandInput
  | GetTemplateSyncConfigCommandInput
  | GetTemplateSyncStatusCommandInput
  | ListComponentOutputsCommandInput
  | ListComponentProvisionedResourcesCommandInput
  | ListComponentsCommandInput
  | ListDeploymentsCommandInput
  | ListEnvironmentAccountConnectionsCommandInput
  | ListEnvironmentOutputsCommandInput
  | ListEnvironmentProvisionedResourcesCommandInput
  | ListEnvironmentTemplateVersionsCommandInput
  | ListEnvironmentTemplatesCommandInput
  | ListEnvironmentsCommandInput
  | ListRepositoriesCommandInput
  | ListRepositorySyncDefinitionsCommandInput
  | ListServiceInstanceOutputsCommandInput
  | ListServiceInstanceProvisionedResourcesCommandInput
  | ListServiceInstancesCommandInput
  | ListServicePipelineOutputsCommandInput
  | ListServicePipelineProvisionedResourcesCommandInput
  | ListServiceTemplateVersionsCommandInput
  | ListServiceTemplatesCommandInput
  | ListServicesCommandInput
  | ListTagsForResourceCommandInput
  | NotifyResourceDeploymentStatusChangeCommandInput
  | RejectEnvironmentAccountConnectionCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAccountSettingsCommandInput
  | UpdateComponentCommandInput
  | UpdateEnvironmentAccountConnectionCommandInput
  | UpdateEnvironmentCommandInput
  | UpdateEnvironmentTemplateCommandInput
  | UpdateEnvironmentTemplateVersionCommandInput
  | UpdateServiceCommandInput
  | UpdateServiceInstanceCommandInput
  | UpdateServicePipelineCommandInput
  | UpdateServiceSyncBlockerCommandInput
  | UpdateServiceSyncConfigCommandInput
  | UpdateServiceTemplateCommandInput
  | UpdateServiceTemplateVersionCommandInput
  | UpdateTemplateSyncConfigCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AcceptEnvironmentAccountConnectionCommandOutput
  | CancelComponentDeploymentCommandOutput
  | CancelEnvironmentDeploymentCommandOutput
  | CancelServiceInstanceDeploymentCommandOutput
  | CancelServicePipelineDeploymentCommandOutput
  | CreateComponentCommandOutput
  | CreateEnvironmentAccountConnectionCommandOutput
  | CreateEnvironmentCommandOutput
  | CreateEnvironmentTemplateCommandOutput
  | CreateEnvironmentTemplateVersionCommandOutput
  | CreateRepositoryCommandOutput
  | CreateServiceCommandOutput
  | CreateServiceInstanceCommandOutput
  | CreateServiceSyncConfigCommandOutput
  | CreateServiceTemplateCommandOutput
  | CreateServiceTemplateVersionCommandOutput
  | CreateTemplateSyncConfigCommandOutput
  | DeleteComponentCommandOutput
  | DeleteDeploymentCommandOutput
  | DeleteEnvironmentAccountConnectionCommandOutput
  | DeleteEnvironmentCommandOutput
  | DeleteEnvironmentTemplateCommandOutput
  | DeleteEnvironmentTemplateVersionCommandOutput
  | DeleteRepositoryCommandOutput
  | DeleteServiceCommandOutput
  | DeleteServiceSyncConfigCommandOutput
  | DeleteServiceTemplateCommandOutput
  | DeleteServiceTemplateVersionCommandOutput
  | DeleteTemplateSyncConfigCommandOutput
  | GetAccountSettingsCommandOutput
  | GetComponentCommandOutput
  | GetDeploymentCommandOutput
  | GetEnvironmentAccountConnectionCommandOutput
  | GetEnvironmentCommandOutput
  | GetEnvironmentTemplateCommandOutput
  | GetEnvironmentTemplateVersionCommandOutput
  | GetRepositoryCommandOutput
  | GetRepositorySyncStatusCommandOutput
  | GetResourcesSummaryCommandOutput
  | GetServiceCommandOutput
  | GetServiceInstanceCommandOutput
  | GetServiceInstanceSyncStatusCommandOutput
  | GetServiceSyncBlockerSummaryCommandOutput
  | GetServiceSyncConfigCommandOutput
  | GetServiceTemplateCommandOutput
  | GetServiceTemplateVersionCommandOutput
  | GetTemplateSyncConfigCommandOutput
  | GetTemplateSyncStatusCommandOutput
  | ListComponentOutputsCommandOutput
  | ListComponentProvisionedResourcesCommandOutput
  | ListComponentsCommandOutput
  | ListDeploymentsCommandOutput
  | ListEnvironmentAccountConnectionsCommandOutput
  | ListEnvironmentOutputsCommandOutput
  | ListEnvironmentProvisionedResourcesCommandOutput
  | ListEnvironmentTemplateVersionsCommandOutput
  | ListEnvironmentTemplatesCommandOutput
  | ListEnvironmentsCommandOutput
  | ListRepositoriesCommandOutput
  | ListRepositorySyncDefinitionsCommandOutput
  | ListServiceInstanceOutputsCommandOutput
  | ListServiceInstanceProvisionedResourcesCommandOutput
  | ListServiceInstancesCommandOutput
  | ListServicePipelineOutputsCommandOutput
  | ListServicePipelineProvisionedResourcesCommandOutput
  | ListServiceTemplateVersionsCommandOutput
  | ListServiceTemplatesCommandOutput
  | ListServicesCommandOutput
  | ListTagsForResourceCommandOutput
  | NotifyResourceDeploymentStatusChangeCommandOutput
  | RejectEnvironmentAccountConnectionCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAccountSettingsCommandOutput
  | UpdateComponentCommandOutput
  | UpdateEnvironmentAccountConnectionCommandOutput
  | UpdateEnvironmentCommandOutput
  | UpdateEnvironmentTemplateCommandOutput
  | UpdateEnvironmentTemplateVersionCommandOutput
  | UpdateServiceCommandOutput
  | UpdateServiceInstanceCommandOutput
  | UpdateServicePipelineCommandOutput
  | UpdateServiceSyncBlockerCommandOutput
  | UpdateServiceSyncConfigCommandOutput
  | UpdateServiceTemplateCommandOutput
  | UpdateServiceTemplateVersionCommandOutput
  | UpdateTemplateSyncConfigCommandOutput;

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use or its constructor options. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandlerUserInput;

  /**
   * A constructor for a class implementing the {@link @smithy/types#ChecksumConstructor} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __ChecksumConstructor | __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: __BodyLengthCalculator;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dynamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Setting a client profile is similar to setting a value for the
   * AWS_PROFILE environment variable. Setting a profile on a client
   * in code only affects the single client instance, unlike AWS_PROFILE.
   *
   * When set, and only for environments where an AWS configuration
   * file exists, fields configurable by this file will be retrieved
   * from the specified profile within that file.
   * Conflicting code configuration and environment variables will
   * still have higher priority.
   *
   * For client credential resolution that involves checking the AWS
   * configuration file, the client's profile (this value) will be
   * used unless a different profile is set in the credential
   * provider options.
   *
   */
  profile?: string;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @deprecated
   * @internal
   */
  credentialDefaultProvider?: (input: any) => AwsCredentialIdentityProvider;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-smithy-util-retry/Enum/RETRY_MODES/
   *
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Optional extensions
   */
  extensions?: RuntimeExtension[];

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type ProtonClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  UserAgentInputConfig &
  RetryInputConfig &
  RegionInputConfig &
  HostHeaderInputConfig &
  EndpointInputConfig<EndpointParameters> &
  HttpAuthSchemeInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of ProtonClient class constructor that set the region, credentials and other options.
 */
export interface ProtonClientConfig extends ProtonClientConfigType {}

/**
 * @public
 */
export type ProtonClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  UserAgentResolvedConfig &
  RetryResolvedConfig &
  RegionResolvedConfig &
  HostHeaderResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  HttpAuthSchemeResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of ProtonClient class. This is resolved and normalized from the {@link ProtonClientConfig | constructor configuration interface}.
 */
export interface ProtonClientResolvedConfig extends ProtonClientResolvedConfigType {}

/**
 * <p>This is the Proton Service API Reference. It provides descriptions, syntax and usage examples for each of the
 *     <a href="https://docs.aws.amazon.com/proton/latest/APIReference/API_Operations.html">actions</a> and <a href="https://docs.aws.amazon.com/proton/latest/APIReference/API_Types.html">data types</a> for the Proton
 *    service.</p>
 *          <p>The documentation for each action shows the Query API request parameters and the XML response.</p>
 *          <p>Alternatively, you can use the Amazon Web Services CLI to access an API. For more information, see the <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html">Amazon Web Services Command Line Interface User
 *     Guide</a>.</p>
 *          <p>The Proton service is a two-pronged automation framework. Administrators create service templates to provide
 *    standardized infrastructure and deployment tooling for serverless and container based applications. Developers, in
 *    turn, select from the available service templates to automate their application or service deployments.</p>
 *          <p>Because administrators define the infrastructure and tooling that Proton deploys and manages, they need
 *    permissions to use all of the listed API operations.</p>
 *          <p>When developers select a specific infrastructure and tooling set, Proton deploys their applications. To
 *    monitor their applications that are running on Proton, developers need permissions to the service
 *     <i>create</i>, <i>list</i>, <i>update</i> and <i>delete</i>
 *    API operations and the service instance <i>list</i> and <i>update</i> API
 *    operations.</p>
 *          <p>To learn more about Proton, see the <a href="https://docs.aws.amazon.com/proton/latest/userguide/Welcome.html">Proton User Guide</a>.</p>
 *          <p>
 *             <b>Ensuring Idempotency</b>
 *          </p>
 *          <p>When you make a mutating API request, the request typically returns a result before the asynchronous workflows
 *    of the operation are complete. Operations might also time out or encounter other server issues before they're
 *    complete, even if the request already returned a result. This might make it difficult to determine whether the
 *    request succeeded. Moreover, you might need to retry the request multiple times to ensure that the operation
 *    completes successfully. However, if the original request and the subsequent retries are successful, the operation
 *    occurs multiple times. This means that you might create more resources than you intended.</p>
 *          <p>
 *             <i>Idempotency</i> ensures that an API request action completes no more than one time. With an
 *    idempotent request, if the original request action completes successfully, any subsequent retries complete
 *    successfully without performing any further actions. However, the result might contain updated information, such as
 *    the current creation status.</p>
 *          <p>The following lists of APIs are grouped according to methods that ensure idempotency.</p>
 *          <p>
 *             <b>Idempotent create APIs with a client token</b>
 *          </p>
 *          <p>The API actions in this list support idempotency with the use of a <i>client token</i>. The
 *    corresponding Amazon Web Services CLI commands also support idempotency using a client token. A client token is a unique,
 *    case-sensitive string of up to 64 ASCII characters. To make an idempotent API request using one of these actions,
 *    specify a client token in the request. We recommend that you <i>don't</i> reuse the same client token
 *    for other API requests. If you don’t provide a client token for these APIs, a default client token is automatically
 *    provided by SDKs.</p>
 *          <p>Given a request action that has succeeded:</p>
 *          <p>If you retry the request using the same client token and the same parameters, the retry succeeds without
 *    performing any further actions other than returning the original resource detail data in the response.</p>
 *          <p>If you retry the request using the same client token, but one or more of the parameters are different, the retry
 *    throws a <code>ValidationException</code> with an <code>IdempotentParameterMismatch</code> error.</p>
 *          <p>Client tokens expire eight hours after a request is made. If you retry the request with the expired token, a new
 *    resource is created.</p>
 *          <p>If the original resource is deleted and you retry the request, a new resource is created.</p>
 *          <p>Idempotent create APIs with a client token:</p>
 *          <ul>
 *             <li>
 *                <p>CreateEnvironmentTemplateVersion</p>
 *             </li>
 *             <li>
 *                <p>CreateServiceTemplateVersion</p>
 *             </li>
 *             <li>
 *                <p>CreateEnvironmentAccountConnection</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Idempotent create APIs</b>
 *          </p>
 *          <p>Given a request action that has succeeded:</p>
 *          <p>If you retry the request with an API from this group, and the original resource <i>hasn't</i> been
 *    modified, the retry succeeds without performing any further actions other than returning the original resource detail
 *    data in the response.</p>
 *          <p>If the original resource has been modified, the retry throws a <code>ConflictException</code>.</p>
 *          <p>If you retry with different input parameters, the retry throws a <code>ValidationException</code> with an
 *     <code>IdempotentParameterMismatch</code> error.</p>
 *          <p>Idempotent create APIs:</p>
 *          <ul>
 *             <li>
 *                <p>CreateEnvironmentTemplate</p>
 *             </li>
 *             <li>
 *                <p>CreateServiceTemplate</p>
 *             </li>
 *             <li>
 *                <p>CreateEnvironment</p>
 *             </li>
 *             <li>
 *                <p>CreateService</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Idempotent delete APIs</b>
 *          </p>
 *          <p>Given a request action that has succeeded:</p>
 *          <p>When you retry the request with an API from this group and the resource was deleted, its metadata is returned in
 *    the response.</p>
 *          <p>If you retry and the resource doesn't exist, the response is empty.</p>
 *          <p>In both cases, the retry succeeds.</p>
 *          <p>Idempotent delete APIs:</p>
 *          <ul>
 *             <li>
 *                <p>DeleteEnvironmentTemplate</p>
 *             </li>
 *             <li>
 *                <p>DeleteEnvironmentTemplateVersion</p>
 *             </li>
 *             <li>
 *                <p>DeleteServiceTemplate</p>
 *             </li>
 *             <li>
 *                <p>DeleteServiceTemplateVersion</p>
 *             </li>
 *             <li>
 *                <p>DeleteEnvironmentAccountConnection</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Asynchronous idempotent delete APIs</b>
 *          </p>
 *          <p>Given a request action that has succeeded:</p>
 *          <p>If you retry the request with an API from this group, if the original request delete operation status is
 *     <code>DELETE_IN_PROGRESS</code>, the retry returns the resource detail data in the response without performing any
 *    further actions.</p>
 *          <p>If the original request delete operation is complete, a retry returns an empty response.</p>
 *          <p>Asynchronous idempotent delete APIs:</p>
 *          <ul>
 *             <li>
 *                <p>DeleteEnvironment</p>
 *             </li>
 *             <li>
 *                <p>DeleteService</p>
 *             </li>
 *          </ul>
 * @public
 */
export class ProtonClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ProtonClientResolvedConfig
> {
  /**
   * The resolved configuration of ProtonClient class. This is resolved and normalized from the {@link ProtonClientConfig | constructor configuration interface}.
   */
  readonly config: ProtonClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<ProtonClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    super(_config_0 as any);
    this.initConfig = _config_0;
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    this.config = _config_8;
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultProtonHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: ProtonClientResolvedConfig) =>
          new DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials,
          }),
      })
    );
    this.middlewareStack.use(getHttpSigningPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}
