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
  defaultWorkDocsHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  AbortDocumentVersionUploadCommandInput,
  AbortDocumentVersionUploadCommandOutput,
} from "./commands/AbortDocumentVersionUploadCommand";
import { ActivateUserCommandInput, ActivateUserCommandOutput } from "./commands/ActivateUserCommand";
import {
  AddResourcePermissionsCommandInput,
  AddResourcePermissionsCommandOutput,
} from "./commands/AddResourcePermissionsCommand";
import { CreateCommentCommandInput, CreateCommentCommandOutput } from "./commands/CreateCommentCommand";
import {
  CreateCustomMetadataCommandInput,
  CreateCustomMetadataCommandOutput,
} from "./commands/CreateCustomMetadataCommand";
import { CreateFolderCommandInput, CreateFolderCommandOutput } from "./commands/CreateFolderCommand";
import { CreateLabelsCommandInput, CreateLabelsCommandOutput } from "./commands/CreateLabelsCommand";
import {
  CreateNotificationSubscriptionCommandInput,
  CreateNotificationSubscriptionCommandOutput,
} from "./commands/CreateNotificationSubscriptionCommand";
import { CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand";
import { DeactivateUserCommandInput, DeactivateUserCommandOutput } from "./commands/DeactivateUserCommand";
import { DeleteCommentCommandInput, DeleteCommentCommandOutput } from "./commands/DeleteCommentCommand";
import {
  DeleteCustomMetadataCommandInput,
  DeleteCustomMetadataCommandOutput,
} from "./commands/DeleteCustomMetadataCommand";
import { DeleteDocumentCommandInput, DeleteDocumentCommandOutput } from "./commands/DeleteDocumentCommand";
import {
  DeleteDocumentVersionCommandInput,
  DeleteDocumentVersionCommandOutput,
} from "./commands/DeleteDocumentVersionCommand";
import { DeleteFolderCommandInput, DeleteFolderCommandOutput } from "./commands/DeleteFolderCommand";
import {
  DeleteFolderContentsCommandInput,
  DeleteFolderContentsCommandOutput,
} from "./commands/DeleteFolderContentsCommand";
import { DeleteLabelsCommandInput, DeleteLabelsCommandOutput } from "./commands/DeleteLabelsCommand";
import {
  DeleteNotificationSubscriptionCommandInput,
  DeleteNotificationSubscriptionCommandOutput,
} from "./commands/DeleteNotificationSubscriptionCommand";
import { DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import { DescribeActivitiesCommandInput, DescribeActivitiesCommandOutput } from "./commands/DescribeActivitiesCommand";
import { DescribeCommentsCommandInput, DescribeCommentsCommandOutput } from "./commands/DescribeCommentsCommand";
import {
  DescribeDocumentVersionsCommandInput,
  DescribeDocumentVersionsCommandOutput,
} from "./commands/DescribeDocumentVersionsCommand";
import {
  DescribeFolderContentsCommandInput,
  DescribeFolderContentsCommandOutput,
} from "./commands/DescribeFolderContentsCommand";
import { DescribeGroupsCommandInput, DescribeGroupsCommandOutput } from "./commands/DescribeGroupsCommand";
import {
  DescribeNotificationSubscriptionsCommandInput,
  DescribeNotificationSubscriptionsCommandOutput,
} from "./commands/DescribeNotificationSubscriptionsCommand";
import {
  DescribeResourcePermissionsCommandInput,
  DescribeResourcePermissionsCommandOutput,
} from "./commands/DescribeResourcePermissionsCommand";
import {
  DescribeRootFoldersCommandInput,
  DescribeRootFoldersCommandOutput,
} from "./commands/DescribeRootFoldersCommand";
import { DescribeUsersCommandInput, DescribeUsersCommandOutput } from "./commands/DescribeUsersCommand";
import { GetCurrentUserCommandInput, GetCurrentUserCommandOutput } from "./commands/GetCurrentUserCommand";
import { GetDocumentCommandInput, GetDocumentCommandOutput } from "./commands/GetDocumentCommand";
import { GetDocumentPathCommandInput, GetDocumentPathCommandOutput } from "./commands/GetDocumentPathCommand";
import { GetDocumentVersionCommandInput, GetDocumentVersionCommandOutput } from "./commands/GetDocumentVersionCommand";
import { GetFolderCommandInput, GetFolderCommandOutput } from "./commands/GetFolderCommand";
import { GetFolderPathCommandInput, GetFolderPathCommandOutput } from "./commands/GetFolderPathCommand";
import { GetResourcesCommandInput, GetResourcesCommandOutput } from "./commands/GetResourcesCommand";
import {
  InitiateDocumentVersionUploadCommandInput,
  InitiateDocumentVersionUploadCommandOutput,
} from "./commands/InitiateDocumentVersionUploadCommand";
import {
  RemoveAllResourcePermissionsCommandInput,
  RemoveAllResourcePermissionsCommandOutput,
} from "./commands/RemoveAllResourcePermissionsCommand";
import {
  RemoveResourcePermissionCommandInput,
  RemoveResourcePermissionCommandOutput,
} from "./commands/RemoveResourcePermissionCommand";
import {
  RestoreDocumentVersionsCommandInput,
  RestoreDocumentVersionsCommandOutput,
} from "./commands/RestoreDocumentVersionsCommand";
import { SearchResourcesCommandInput, SearchResourcesCommandOutput } from "./commands/SearchResourcesCommand";
import { UpdateDocumentCommandInput, UpdateDocumentCommandOutput } from "./commands/UpdateDocumentCommand";
import {
  UpdateDocumentVersionCommandInput,
  UpdateDocumentVersionCommandOutput,
} from "./commands/UpdateDocumentVersionCommand";
import { UpdateFolderCommandInput, UpdateFolderCommandOutput } from "./commands/UpdateFolderCommand";
import { UpdateUserCommandInput, UpdateUserCommandOutput } from "./commands/UpdateUserCommand";
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
  | AbortDocumentVersionUploadCommandInput
  | ActivateUserCommandInput
  | AddResourcePermissionsCommandInput
  | CreateCommentCommandInput
  | CreateCustomMetadataCommandInput
  | CreateFolderCommandInput
  | CreateLabelsCommandInput
  | CreateNotificationSubscriptionCommandInput
  | CreateUserCommandInput
  | DeactivateUserCommandInput
  | DeleteCommentCommandInput
  | DeleteCustomMetadataCommandInput
  | DeleteDocumentCommandInput
  | DeleteDocumentVersionCommandInput
  | DeleteFolderCommandInput
  | DeleteFolderContentsCommandInput
  | DeleteLabelsCommandInput
  | DeleteNotificationSubscriptionCommandInput
  | DeleteUserCommandInput
  | DescribeActivitiesCommandInput
  | DescribeCommentsCommandInput
  | DescribeDocumentVersionsCommandInput
  | DescribeFolderContentsCommandInput
  | DescribeGroupsCommandInput
  | DescribeNotificationSubscriptionsCommandInput
  | DescribeResourcePermissionsCommandInput
  | DescribeRootFoldersCommandInput
  | DescribeUsersCommandInput
  | GetCurrentUserCommandInput
  | GetDocumentCommandInput
  | GetDocumentPathCommandInput
  | GetDocumentVersionCommandInput
  | GetFolderCommandInput
  | GetFolderPathCommandInput
  | GetResourcesCommandInput
  | InitiateDocumentVersionUploadCommandInput
  | RemoveAllResourcePermissionsCommandInput
  | RemoveResourcePermissionCommandInput
  | RestoreDocumentVersionsCommandInput
  | SearchResourcesCommandInput
  | UpdateDocumentCommandInput
  | UpdateDocumentVersionCommandInput
  | UpdateFolderCommandInput
  | UpdateUserCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AbortDocumentVersionUploadCommandOutput
  | ActivateUserCommandOutput
  | AddResourcePermissionsCommandOutput
  | CreateCommentCommandOutput
  | CreateCustomMetadataCommandOutput
  | CreateFolderCommandOutput
  | CreateLabelsCommandOutput
  | CreateNotificationSubscriptionCommandOutput
  | CreateUserCommandOutput
  | DeactivateUserCommandOutput
  | DeleteCommentCommandOutput
  | DeleteCustomMetadataCommandOutput
  | DeleteDocumentCommandOutput
  | DeleteDocumentVersionCommandOutput
  | DeleteFolderCommandOutput
  | DeleteFolderContentsCommandOutput
  | DeleteLabelsCommandOutput
  | DeleteNotificationSubscriptionCommandOutput
  | DeleteUserCommandOutput
  | DescribeActivitiesCommandOutput
  | DescribeCommentsCommandOutput
  | DescribeDocumentVersionsCommandOutput
  | DescribeFolderContentsCommandOutput
  | DescribeGroupsCommandOutput
  | DescribeNotificationSubscriptionsCommandOutput
  | DescribeResourcePermissionsCommandOutput
  | DescribeRootFoldersCommandOutput
  | DescribeUsersCommandOutput
  | GetCurrentUserCommandOutput
  | GetDocumentCommandOutput
  | GetDocumentPathCommandOutput
  | GetDocumentVersionCommandOutput
  | GetFolderCommandOutput
  | GetFolderPathCommandOutput
  | GetResourcesCommandOutput
  | InitiateDocumentVersionUploadCommandOutput
  | RemoveAllResourcePermissionsCommandOutput
  | RemoveResourcePermissionCommandOutput
  | RestoreDocumentVersionsCommandOutput
  | SearchResourcesCommandOutput
  | UpdateDocumentCommandOutput
  | UpdateDocumentVersionCommandOutput
  | UpdateFolderCommandOutput
  | UpdateUserCommandOutput;

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
export type WorkDocsClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of WorkDocsClient class constructor that set the region, credentials and other options.
 */
export interface WorkDocsClientConfig extends WorkDocsClientConfigType {}

/**
 * @public
 */
export type WorkDocsClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of WorkDocsClient class. This is resolved and normalized from the {@link WorkDocsClientConfig | constructor configuration interface}.
 */
export interface WorkDocsClientResolvedConfig extends WorkDocsClientResolvedConfigType {}

/**
 * <p>The Amazon WorkDocs API is designed for the following use cases:</p>
 *          <ul>
 *             <li>
 *                <p>File Migration: File migration applications are supported for users who
 *                     want to migrate their files from an on-premises or off-premises file system or
 *                     service. Users can insert files into a user directory structure, as well as
 *                     allow for basic metadata changes, such as modifications to the permissions of
 *                     files.</p>
 *             </li>
 *             <li>
 *                <p>Security: Support security applications are supported for users who have
 *                     additional security needs, such as antivirus or data loss prevention. The API
 *                     actions, along with CloudTrail, allow these applications to detect when
 *                     changes occur in Amazon WorkDocs. Then, the application can take the necessary
 *                     actions and replace the target file. If the target file violates the policy, the
 *                     application can also choose to email the user.</p>
 *             </li>
 *             <li>
 *                <p>eDiscovery/Analytics: General administrative applications are supported,
 *                     such as eDiscovery and analytics. These applications can choose to mimic or
 *                     record the actions in an Amazon WorkDocs site, along with CloudTrail, to
 *                     replicate data for eDiscovery, backup, or analytical applications.</p>
 *             </li>
 *          </ul>
 *          <p>All Amazon WorkDocs API actions are Amazon authenticated and certificate-signed.
 *             They not only require the use of the Amazon Web Services SDK, but also allow for the exclusive use of
 *             IAM users and roles to help facilitate access, trust, and permission policies. By
 *             creating a role and allowing an IAM user to access the Amazon WorkDocs site, the
 *             IAM user gains full administrative visibility into the entire Amazon WorkDocs site (or as
 *             set in the IAM policy). This includes, but is not limited to, the ability to modify file
 *             permissions and upload any file to any user. This allows developers to perform the three
 *             use cases above, as well as give users the ability to grant access on a selective basis
 *             using the IAM model.</p>
 *          <note>
 *             <p>The pricing for Amazon WorkDocs APIs varies depending on the API call type for these actions:</p>
 *             <ul>
 *                <li>
 *                   <p>
 *                      <code>READ  (Get*)</code>
 *                   </p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <code>WRITE (Activate*, Add*, Create*, Deactivate*, Initiate*, Update*)</code>
 *                   </p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <code>LIST (Describe*)</code>
 *                   </p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <code>DELETE*, CANCEL</code>
 *                   </p>
 *                </li>
 *             </ul>
 *             <p>For information about Amazon WorkDocs API pricing, see <a href="https://aws.amazon.com/workdocs/pricing/">Amazon WorkDocs Pricing</a>.</p>
 *          </note>
 * @public
 */
export class WorkDocsClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  WorkDocsClientResolvedConfig
> {
  /**
   * The resolved configuration of WorkDocsClient class. This is resolved and normalized from the {@link WorkDocsClientConfig | constructor configuration interface}.
   */
  readonly config: WorkDocsClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<WorkDocsClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultWorkDocsHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: WorkDocsClientResolvedConfig) =>
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
