import { APIClient, APIClientRequestOpts, APIClientOptions } from "@interweb/fetch-api-client";
export interface MutatingWebhook {
  admissionReviewVersions: string[];
  clientConfig: WebhookClientConfig;
  failurePolicy?: string;
  matchPolicy?: string;
  name: string;
  namespaceSelector?: LabelSelector;
  objectSelector?: LabelSelector;
  reinvocationPolicy?: string;
  rules?: RuleWithOperations[];
  sideEffects: string;
  timeoutSeconds?: number;
}
export interface MutatingWebhookConfiguration {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  webhooks?: MutatingWebhook[];
}
export interface MutatingWebhookConfigurationList {
  apiVersion?: string;
  items: MutatingWebhookConfiguration[];
  kind?: string;
  metadata?: ListMeta;
}
export interface RuleWithOperations {
  apiGroups?: string[];
  apiVersions?: string[];
  operations?: string[];
  resources?: string[];
  scope?: string;
}
export interface ServiceReference {
  name: string;
  namespace: string;
  path?: string;
  port?: number;
}
export interface ValidatingWebhook {
  admissionReviewVersions: string[];
  clientConfig: WebhookClientConfig;
  failurePolicy?: string;
  matchPolicy?: string;
  name: string;
  namespaceSelector?: LabelSelector;
  objectSelector?: LabelSelector;
  rules?: RuleWithOperations[];
  sideEffects: string;
  timeoutSeconds?: number;
}
export interface ValidatingWebhookConfiguration {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  webhooks?: ValidatingWebhook[];
}
export interface ValidatingWebhookConfigurationList {
  apiVersion?: string;
  items: ValidatingWebhookConfiguration[];
  kind?: string;
  metadata?: ListMeta;
}
export interface WebhookClientConfig {
  caBundle?: string;
  service?: ServiceReference;
  url?: string;
}
export interface ControllerRevision {
  apiVersion?: string;
  data?: RawExtension;
  kind?: string;
  metadata?: ObjectMeta;
  revision: number;
}
export interface ControllerRevisionList {
  apiVersion?: string;
  items: ControllerRevision[];
  kind?: string;
  metadata?: ListMeta;
}
export interface DaemonSet {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: DaemonSetSpec;
  status?: DaemonSetStatus;
}
export interface DaemonSetCondition {
  lastTransitionTime?: Time;
  message?: string;
  reason?: string;
  status: string;
  type: string;
}
export interface DaemonSetList {
  apiVersion?: string;
  items: DaemonSet[];
  kind?: string;
  metadata?: ListMeta;
}
export interface DaemonSetSpec {
  minReadySeconds?: number;
  revisionHistoryLimit?: number;
  selector: LabelSelector;
  template: PodTemplateSpec;
  updateStrategy?: DaemonSetUpdateStrategy;
}
export interface DaemonSetStatus {
  collisionCount?: number;
  conditions?: DaemonSetCondition[];
  currentNumberScheduled: number;
  desiredNumberScheduled: number;
  numberAvailable?: number;
  numberMisscheduled: number;
  numberReady: number;
  numberUnavailable?: number;
  observedGeneration?: number;
  updatedNumberScheduled?: number;
}
export interface DaemonSetUpdateStrategy {
  rollingUpdate?: RollingUpdateDaemonSet;
  type?: string;
}
export interface Deployment {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: DeploymentSpec;
  status?: DeploymentStatus;
}
export interface DeploymentCondition {
  lastTransitionTime?: Time;
  lastUpdateTime?: Time;
  message?: string;
  reason?: string;
  status: string;
  type: string;
}
export interface DeploymentList {
  apiVersion?: string;
  items: Deployment[];
  kind?: string;
  metadata?: ListMeta;
}
export interface DeploymentSpec {
  minReadySeconds?: number;
  paused?: boolean;
  progressDeadlineSeconds?: number;
  replicas?: number;
  revisionHistoryLimit?: number;
  selector: LabelSelector;
  strategy?: DeploymentStrategy;
  template: PodTemplateSpec;
}
export interface DeploymentStatus {
  availableReplicas?: number;
  collisionCount?: number;
  conditions?: DeploymentCondition[];
  observedGeneration?: number;
  readyReplicas?: number;
  replicas?: number;
  unavailableReplicas?: number;
  updatedReplicas?: number;
}
export interface DeploymentStrategy {
  rollingUpdate?: RollingUpdateDeployment;
  type?: string;
}
export interface ReplicaSet {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: ReplicaSetSpec;
  status?: ReplicaSetStatus;
}
export interface ReplicaSetCondition {
  lastTransitionTime?: Time;
  message?: string;
  reason?: string;
  status: string;
  type: string;
}
export interface ReplicaSetList {
  apiVersion?: string;
  items: ReplicaSet[];
  kind?: string;
  metadata?: ListMeta;
}
export interface ReplicaSetSpec {
  minReadySeconds?: number;
  replicas?: number;
  selector: LabelSelector;
  template?: PodTemplateSpec;
}
export interface ReplicaSetStatus {
  availableReplicas?: number;
  conditions?: ReplicaSetCondition[];
  fullyLabeledReplicas?: number;
  observedGeneration?: number;
  readyReplicas?: number;
  replicas: number;
}
export interface RollingUpdateDaemonSet {
  maxSurge?: IntOrString;
  maxUnavailable?: IntOrString;
}
export interface RollingUpdateDeployment {
  maxSurge?: IntOrString;
  maxUnavailable?: IntOrString;
}
export interface RollingUpdateStatefulSetStrategy {
  partition?: number;
}
export interface StatefulSet {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: StatefulSetSpec;
  status?: StatefulSetStatus;
}
export interface StatefulSetCondition {
  lastTransitionTime?: Time;
  message?: string;
  reason?: string;
  status: string;
  type: string;
}
export interface StatefulSetList {
  apiVersion?: string;
  items: StatefulSet[];
  kind?: string;
  metadata?: ListMeta;
}
export interface StatefulSetSpec {
  minReadySeconds?: number;
  podManagementPolicy?: string;
  replicas?: number;
  revisionHistoryLimit?: number;
  selector: LabelSelector;
  serviceName: string;
  template: PodTemplateSpec;
  updateStrategy?: StatefulSetUpdateStrategy;
  volumeClaimTemplates?: PersistentVolumeClaim[];
}
export interface StatefulSetStatus {
  availableReplicas?: number;
  collisionCount?: number;
  conditions?: StatefulSetCondition[];
  currentReplicas?: number;
  currentRevision?: string;
  observedGeneration?: number;
  readyReplicas?: number;
  replicas: number;
  updateRevision?: string;
  updatedReplicas?: number;
}
export interface StatefulSetUpdateStrategy {
  rollingUpdate?: RollingUpdateStatefulSetStrategy;
  type?: string;
}
export interface BoundObjectReference {
  apiVersion?: string;
  kind?: string;
  name?: string;
  uid?: string;
}
export interface TokenRequest {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec: TokenRequestSpec;
  status?: TokenRequestStatus;
}
export interface TokenRequestSpec {
  audiences: string[];
  boundObjectRef?: BoundObjectReference;
  expirationSeconds?: number;
}
export interface TokenRequestStatus {
  expirationTimestamp: Time;
  token: string;
}
export interface TokenReview {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec: TokenReviewSpec;
  status?: TokenReviewStatus;
}
export interface TokenReviewSpec {
  audiences?: string[];
  token?: string;
}
export interface TokenReviewStatus {
  audiences?: string[];
  authenticated?: boolean;
  error?: string;
  user?: UserInfo;
}
export interface UserInfo {
  extra?: {
    [key: string]: unknown;
  };
  groups?: string[];
  uid?: string;
  username?: string;
}
export interface LocalSubjectAccessReview {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec: SubjectAccessReviewSpec;
  status?: SubjectAccessReviewStatus;
}
export interface NonResourceAttributes {
  path?: string;
  verb?: string;
}
export interface NonResourceRule {
  nonResourceURLs?: string[];
  verbs: string[];
}
export interface ResourceAttributes {
  group?: string;
  name?: string;
  namespace?: string;
  resource?: string;
  subresource?: string;
  verb?: string;
  version?: string;
}
export interface ResourceRule {
  apiGroups?: string[];
  resourceNames?: string[];
  resources?: string[];
  verbs: string[];
}
export interface SelfSubjectAccessReview {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec: SelfSubjectAccessReviewSpec;
  status?: SubjectAccessReviewStatus;
}
export interface SelfSubjectAccessReviewSpec {
  nonResourceAttributes?: NonResourceAttributes;
  resourceAttributes?: ResourceAttributes;
}
export interface SelfSubjectRulesReview {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec: SelfSubjectRulesReviewSpec;
  status?: SubjectRulesReviewStatus;
}
export interface SelfSubjectRulesReviewSpec {
  namespace?: string;
}
export interface SubjectAccessReview {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec: SubjectAccessReviewSpec;
  status?: SubjectAccessReviewStatus;
}
export interface SubjectAccessReviewSpec {
  extra?: {
    [key: string]: unknown;
  };
  groups?: string[];
  nonResourceAttributes?: NonResourceAttributes;
  resourceAttributes?: ResourceAttributes;
  uid?: string;
  user?: string;
}
export interface SubjectAccessReviewStatus {
  allowed: boolean;
  denied?: boolean;
  evaluationError?: string;
  reason?: string;
}
export interface SubjectRulesReviewStatus {
  evaluationError?: string;
  incomplete: boolean;
  nonResourceRules: NonResourceRule[];
  resourceRules: ResourceRule[];
}
export interface CrossVersionObjectReference {
  apiVersion?: string;
  kind: string;
  name: string;
}
export interface HorizontalPodAutoscaler {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: HorizontalPodAutoscalerSpec;
  status?: HorizontalPodAutoscalerStatus;
}
export interface HorizontalPodAutoscalerList {
  apiVersion?: string;
  items: HorizontalPodAutoscaler[];
  kind?: string;
  metadata?: ListMeta;
}
export interface HorizontalPodAutoscalerSpec {
  maxReplicas: number;
  minReplicas?: number;
  scaleTargetRef: CrossVersionObjectReference;
  targetCPUUtilizationPercentage?: number;
}
export interface HorizontalPodAutoscalerStatus {
  currentCPUUtilizationPercentage?: number;
  currentReplicas: number;
  desiredReplicas: number;
  lastScaleTime?: Time;
  observedGeneration?: number;
}
export interface Scale {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: ScaleSpec;
  status?: ScaleStatus;
}
export interface ScaleSpec {
  replicas?: number;
}
export interface ScaleStatus {
  replicas: number;
  selector?: string;
}
export interface ContainerResourceMetricSource {
  container: string;
  name: string;
  targetAverageUtilization?: number;
  targetAverageValue?: Quantity;
}
export interface ContainerResourceMetricStatus {
  container: string;
  currentAverageUtilization?: number;
  currentAverageValue: Quantity;
  name: string;
}
export interface CrossVersionObjectReference {
  apiVersion?: string;
  kind: string;
  name: string;
}
export interface ExternalMetricSource {
  metricName: string;
  metricSelector?: LabelSelector;
  targetAverageValue?: Quantity;
  targetValue?: Quantity;
}
export interface ExternalMetricStatus {
  currentAverageValue?: Quantity;
  currentValue: Quantity;
  metricName: string;
  metricSelector?: LabelSelector;
}
export interface HorizontalPodAutoscaler {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: HorizontalPodAutoscalerSpec;
  status?: HorizontalPodAutoscalerStatus;
}
export interface HorizontalPodAutoscalerCondition {
  lastTransitionTime?: Time;
  message?: string;
  reason?: string;
  status: string;
  type: string;
}
export interface HorizontalPodAutoscalerList {
  apiVersion?: string;
  items: HorizontalPodAutoscaler[];
  kind?: string;
  metadata?: ListMeta;
}
export interface HorizontalPodAutoscalerSpec {
  maxReplicas: number;
  metrics?: MetricSpec[];
  minReplicas?: number;
  scaleTargetRef: CrossVersionObjectReference;
}
export interface HorizontalPodAutoscalerStatus {
  conditions: HorizontalPodAutoscalerCondition[];
  currentMetrics?: MetricStatus[];
  currentReplicas: number;
  desiredReplicas: number;
  lastScaleTime?: Time;
  observedGeneration?: number;
}
export interface MetricSpec {
  containerResource?: ContainerResourceMetricSource;
  external?: ExternalMetricSource;
  object?: ObjectMetricSource;
  pods?: PodsMetricSource;
  resource?: ResourceMetricSource;
  type: string;
}
export interface MetricStatus {
  containerResource?: ContainerResourceMetricStatus;
  external?: ExternalMetricStatus;
  object?: ObjectMetricStatus;
  pods?: PodsMetricStatus;
  resource?: ResourceMetricStatus;
  type: string;
}
export interface ObjectMetricSource {
  averageValue?: Quantity;
  metricName: string;
  selector?: LabelSelector;
  target: CrossVersionObjectReference;
  targetValue: Quantity;
}
export interface ObjectMetricStatus {
  averageValue?: Quantity;
  currentValue: Quantity;
  metricName: string;
  selector?: LabelSelector;
  target: CrossVersionObjectReference;
}
export interface PodsMetricSource {
  metricName: string;
  selector?: LabelSelector;
  targetAverageValue: Quantity;
}
export interface PodsMetricStatus {
  currentAverageValue: Quantity;
  metricName: string;
  selector?: LabelSelector;
}
export interface ResourceMetricSource {
  name: string;
  targetAverageUtilization?: number;
  targetAverageValue?: Quantity;
}
export interface ResourceMetricStatus {
  currentAverageUtilization?: number;
  currentAverageValue: Quantity;
  name: string;
}
export interface ContainerResourceMetricSource {
  container: string;
  name: string;
  target: MetricTarget;
}
export interface ContainerResourceMetricStatus {
  container: string;
  current: MetricValueStatus;
  name: string;
}
export interface CrossVersionObjectReference {
  apiVersion?: string;
  kind: string;
  name: string;
}
export interface ExternalMetricSource {
  metric: MetricIdentifier;
  target: MetricTarget;
}
export interface ExternalMetricStatus {
  current: MetricValueStatus;
  metric: MetricIdentifier;
}
export interface HPAScalingPolicy {
  periodSeconds: number;
  type: string;
  value: number;
}
export interface HPAScalingRules {
  policies?: HPAScalingPolicy[];
  selectPolicy?: string;
  stabilizationWindowSeconds?: number;
}
export interface HorizontalPodAutoscaler {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: HorizontalPodAutoscalerSpec;
  status?: HorizontalPodAutoscalerStatus;
}
export interface HorizontalPodAutoscalerBehavior {
  scaleDown?: HPAScalingRules;
  scaleUp?: HPAScalingRules;
}
export interface HorizontalPodAutoscalerCondition {
  lastTransitionTime?: Time;
  message?: string;
  reason?: string;
  status: string;
  type: string;
}
export interface HorizontalPodAutoscalerList {
  apiVersion?: string;
  items: HorizontalPodAutoscaler[];
  kind?: string;
  metadata?: ListMeta;
}
export interface HorizontalPodAutoscalerSpec {
  behavior?: HorizontalPodAutoscalerBehavior;
  maxReplicas: number;
  metrics?: MetricSpec[];
  minReplicas?: number;
  scaleTargetRef: CrossVersionObjectReference;
}
export interface HorizontalPodAutoscalerStatus {
  conditions: HorizontalPodAutoscalerCondition[];
  currentMetrics?: MetricStatus[];
  currentReplicas: number;
  desiredReplicas: number;
  lastScaleTime?: Time;
  observedGeneration?: number;
}
export interface MetricIdentifier {
  name: string;
  selector?: LabelSelector;
}
export interface MetricSpec {
  containerResource?: ContainerResourceMetricSource;
  external?: ExternalMetricSource;
  object?: ObjectMetricSource;
  pods?: PodsMetricSource;
  resource?: ResourceMetricSource;
  type: string;
}
export interface MetricStatus {
  containerResource?: ContainerResourceMetricStatus;
  external?: ExternalMetricStatus;
  object?: ObjectMetricStatus;
  pods?: PodsMetricStatus;
  resource?: ResourceMetricStatus;
  type: string;
}
export interface MetricTarget {
  averageUtilization?: number;
  averageValue?: Quantity;
  type: string;
  value?: Quantity;
}
export interface MetricValueStatus {
  averageUtilization?: number;
  averageValue?: Quantity;
  value?: Quantity;
}
export interface ObjectMetricSource {
  describedObject: CrossVersionObjectReference;
  metric: MetricIdentifier;
  target: MetricTarget;
}
export interface ObjectMetricStatus {
  current: MetricValueStatus;
  describedObject: CrossVersionObjectReference;
  metric: MetricIdentifier;
}
export interface PodsMetricSource {
  metric: MetricIdentifier;
  target: MetricTarget;
}
export interface PodsMetricStatus {
  current: MetricValueStatus;
  metric: MetricIdentifier;
}
export interface ResourceMetricSource {
  name: string;
  target: MetricTarget;
}
export interface ResourceMetricStatus {
  current: MetricValueStatus;
  name: string;
}
export interface CronJob {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: CronJobSpec;
  status?: CronJobStatus;
}
export interface CronJobList {
  apiVersion?: string;
  items: CronJob[];
  kind?: string;
  metadata?: ListMeta;
}
export interface CronJobSpec {
  concurrencyPolicy?: string;
  failedJobsHistoryLimit?: number;
  jobTemplate: JobTemplateSpec;
  schedule: string;
  startingDeadlineSeconds?: number;
  successfulJobsHistoryLimit?: number;
  suspend?: boolean;
}
export interface CronJobStatus {
  active?: ObjectReference[];
  lastScheduleTime?: Time;
  lastSuccessfulTime?: Time;
}
export interface Job {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: JobSpec;
  status?: JobStatus;
}
export interface JobCondition {
  lastProbeTime?: Time;
  lastTransitionTime?: Time;
  message?: string;
  reason?: string;
  status: string;
  type: string;
}
export interface JobList {
  apiVersion?: string;
  items: Job[];
  kind?: string;
  metadata?: ListMeta;
}
export interface JobSpec {
  activeDeadlineSeconds?: number;
  backoffLimit?: number;
  completionMode?: string;
  completions?: number;
  manualSelector?: boolean;
  parallelism?: number;
  selector?: LabelSelector;
  suspend?: boolean;
  template: PodTemplateSpec;
  ttlSecondsAfterFinished?: number;
}
export interface JobStatus {
  active?: number;
  completedIndexes?: string;
  completionTime?: Time;
  conditions?: JobCondition[];
  failed?: number;
  startTime?: Time;
  succeeded?: number;
  uncountedTerminatedPods?: UncountedTerminatedPods;
}
export interface JobTemplateSpec {
  metadata?: ObjectMeta;
  spec?: JobSpec;
}
export interface UncountedTerminatedPods {
  failed?: string[];
  succeeded?: string[];
}
export interface CronJob {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: CronJobSpec;
  status?: CronJobStatus;
}
export interface CronJobList {
  apiVersion?: string;
  items: CronJob[];
  kind?: string;
  metadata?: ListMeta;
}
export interface CronJobSpec {
  concurrencyPolicy?: string;
  failedJobsHistoryLimit?: number;
  jobTemplate: JobTemplateSpec;
  schedule: string;
  startingDeadlineSeconds?: number;
  successfulJobsHistoryLimit?: number;
  suspend?: boolean;
}
export interface CronJobStatus {
  active?: ObjectReference[];
  lastScheduleTime?: Time;
  lastSuccessfulTime?: Time;
}
export interface JobTemplateSpec {
  metadata?: ObjectMeta;
  spec?: JobSpec;
}
export interface CertificateSigningRequest {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec: CertificateSigningRequestSpec;
  status?: CertificateSigningRequestStatus;
}
export interface CertificateSigningRequestCondition {
  lastTransitionTime?: Time;
  lastUpdateTime?: Time;
  message?: string;
  reason?: string;
  status: string;
  type: string;
}
export interface CertificateSigningRequestList {
  apiVersion?: string;
  items: CertificateSigningRequest[];
  kind?: string;
  metadata?: ListMeta;
}
export interface CertificateSigningRequestSpec {
  expirationSeconds?: number;
  extra?: {
    [key: string]: unknown;
  };
  groups?: string[];
  request: string;
  signerName: string;
  uid?: string;
  usages?: string[];
  username?: string;
}
export interface CertificateSigningRequestStatus {
  certificate?: string;
  conditions?: CertificateSigningRequestCondition[];
}
export interface Lease {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: LeaseSpec;
}
export interface LeaseList {
  apiVersion?: string;
  items: Lease[];
  kind?: string;
  metadata?: ListMeta;
}
export interface LeaseSpec {
  acquireTime?: MicroTime;
  holderIdentity?: string;
  leaseDurationSeconds?: number;
  leaseTransitions?: number;
  renewTime?: MicroTime;
}
export interface AWSElasticBlockStoreVolumeSource {
  fsType?: string;
  partition?: number;
  readOnly?: boolean;
  volumeID: string;
}
export interface Affinity {
  nodeAffinity?: NodeAffinity;
  podAffinity?: PodAffinity;
  podAntiAffinity?: PodAntiAffinity;
}
export interface AttachedVolume {
  devicePath: string;
  name: string;
}
export interface AzureDiskVolumeSource {
  cachingMode?: string;
  diskName: string;
  diskURI: string;
  fsType?: string;
  kind?: string;
  readOnly?: boolean;
}
export interface AzureFilePersistentVolumeSource {
  readOnly?: boolean;
  secretName: string;
  secretNamespace?: string;
  shareName: string;
}
export interface AzureFileVolumeSource {
  readOnly?: boolean;
  secretName: string;
  shareName: string;
}
export interface Binding {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  target: ObjectReference;
}
export interface CSIPersistentVolumeSource {
  controllerExpandSecretRef?: SecretReference;
  controllerPublishSecretRef?: SecretReference;
  driver: string;
  fsType?: string;
  nodePublishSecretRef?: SecretReference;
  nodeStageSecretRef?: SecretReference;
  readOnly?: boolean;
  volumeAttributes?: {
    [key: string]: unknown;
  };
  volumeHandle: string;
}
export interface CSIVolumeSource {
  driver: string;
  fsType?: string;
  nodePublishSecretRef?: LocalObjectReference;
  readOnly?: boolean;
  volumeAttributes?: {
    [key: string]: unknown;
  };
}
export interface Capabilities {
  add?: string[];
  drop?: string[];
}
export interface CephFSPersistentVolumeSource {
  monitors: string[];
  path?: string;
  readOnly?: boolean;
  secretFile?: string;
  secretRef?: SecretReference;
  user?: string;
}
export interface CephFSVolumeSource {
  monitors: string[];
  path?: string;
  readOnly?: boolean;
  secretFile?: string;
  secretRef?: LocalObjectReference;
  user?: string;
}
export interface CinderPersistentVolumeSource {
  fsType?: string;
  readOnly?: boolean;
  secretRef?: SecretReference;
  volumeID: string;
}
export interface CinderVolumeSource {
  fsType?: string;
  readOnly?: boolean;
  secretRef?: LocalObjectReference;
  volumeID: string;
}
export interface ClientIPConfig {
  timeoutSeconds?: number;
}
export interface ComponentCondition {
  error?: string;
  message?: string;
  status: string;
  type: string;
}
export interface ComponentStatus {
  apiVersion?: string;
  conditions?: ComponentCondition[];
  kind?: string;
  metadata?: ObjectMeta;
}
export interface ComponentStatusList {
  apiVersion?: string;
  items: ComponentStatus[];
  kind?: string;
  metadata?: ListMeta;
}
export interface ConfigMap {
  apiVersion?: string;
  binaryData?: {
    [key: string]: unknown;
  };
  data?: {
    [key: string]: unknown;
  };
  immutable?: boolean;
  kind?: string;
  metadata?: ObjectMeta;
}
export interface ConfigMapEnvSource {
  name?: string;
  optional?: boolean;
}
export interface ConfigMapKeySelector {
  key: string;
  name?: string;
  optional?: boolean;
}
export interface ConfigMapList {
  apiVersion?: string;
  items: ConfigMap[];
  kind?: string;
  metadata?: ListMeta;
}
export interface ConfigMapNodeConfigSource {
  kubeletConfigKey: string;
  name: string;
  namespace: string;
  resourceVersion?: string;
  uid?: string;
}
export interface ConfigMapProjection {
  items?: KeyToPath[];
  name?: string;
  optional?: boolean;
}
export interface ConfigMapVolumeSource {
  defaultMode?: number;
  items?: KeyToPath[];
  name?: string;
  optional?: boolean;
}
export interface Container {
  args?: string[];
  command?: string[];
  env?: EnvVar[];
  envFrom?: EnvFromSource[];
  image?: string;
  imagePullPolicy?: string;
  lifecycle?: Lifecycle;
  livenessProbe?: Probe;
  name: string;
  ports?: ContainerPort[];
  readinessProbe?: Probe;
  resources?: ResourceRequirements;
  securityContext?: SecurityContext;
  startupProbe?: Probe;
  stdin?: boolean;
  stdinOnce?: boolean;
  terminationMessagePath?: string;
  terminationMessagePolicy?: string;
  tty?: boolean;
  volumeDevices?: VolumeDevice[];
  volumeMounts?: VolumeMount[];
  workingDir?: string;
}
export interface ContainerImage {
  names?: string[];
  sizeBytes?: number;
}
export interface ContainerPort {
  containerPort: number;
  hostIP?: string;
  hostPort?: number;
  name?: string;
  protocol?: string;
}
export interface ContainerState {
  running?: ContainerStateRunning;
  terminated?: ContainerStateTerminated;
  waiting?: ContainerStateWaiting;
}
export interface ContainerStateRunning {
  startedAt?: Time;
}
export interface ContainerStateTerminated {
  containerID?: string;
  exitCode: number;
  finishedAt?: Time;
  message?: string;
  reason?: string;
  signal?: number;
  startedAt?: Time;
}
export interface ContainerStateWaiting {
  message?: string;
  reason?: string;
}
export interface ContainerStatus {
  containerID?: string;
  image: string;
  imageID: string;
  lastState?: ContainerState;
  name: string;
  ready: boolean;
  restartCount: number;
  started?: boolean;
  state?: ContainerState;
}
export interface DaemonEndpoint {
  Port: number;
}
export interface DownwardAPIProjection {
  items?: DownwardAPIVolumeFile[];
}
export interface DownwardAPIVolumeFile {
  fieldRef?: ObjectFieldSelector;
  mode?: number;
  path: string;
  resourceFieldRef?: ResourceFieldSelector;
}
export interface DownwardAPIVolumeSource {
  defaultMode?: number;
  items?: DownwardAPIVolumeFile[];
}
export interface EmptyDirVolumeSource {
  medium?: string;
  sizeLimit?: Quantity;
}
export interface EndpointAddress {
  hostname?: string;
  ip: string;
  nodeName?: string;
  targetRef?: ObjectReference;
}
export interface EndpointPort {
  appProtocol?: string;
  name?: string;
  port: number;
  protocol?: string;
}
export interface EndpointSubset {
  addresses?: EndpointAddress[];
  notReadyAddresses?: EndpointAddress[];
  ports?: EndpointPort[];
}
export interface Endpoints {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  subsets?: EndpointSubset[];
}
export interface EndpointsList {
  apiVersion?: string;
  items: Endpoints[];
  kind?: string;
  metadata?: ListMeta;
}
export interface EnvFromSource {
  configMapRef?: ConfigMapEnvSource;
  prefix?: string;
  secretRef?: SecretEnvSource;
}
export interface EnvVar {
  name: string;
  value?: string;
  valueFrom?: EnvVarSource;
}
export interface EnvVarSource {
  configMapKeyRef?: ConfigMapKeySelector;
  fieldRef?: ObjectFieldSelector;
  resourceFieldRef?: ResourceFieldSelector;
  secretKeyRef?: SecretKeySelector;
}
export interface EphemeralContainer {
  args?: string[];
  command?: string[];
  env?: EnvVar[];
  envFrom?: EnvFromSource[];
  image?: string;
  imagePullPolicy?: string;
  lifecycle?: Lifecycle;
  livenessProbe?: Probe;
  name: string;
  ports?: ContainerPort[];
  readinessProbe?: Probe;
  resources?: ResourceRequirements;
  securityContext?: SecurityContext;
  startupProbe?: Probe;
  stdin?: boolean;
  stdinOnce?: boolean;
  targetContainerName?: string;
  terminationMessagePath?: string;
  terminationMessagePolicy?: string;
  tty?: boolean;
  volumeDevices?: VolumeDevice[];
  volumeMounts?: VolumeMount[];
  workingDir?: string;
}
export interface EphemeralVolumeSource {
  volumeClaimTemplate?: PersistentVolumeClaimTemplate;
}
export interface Event {
  action?: string;
  apiVersion?: string;
  count?: number;
  eventTime?: MicroTime;
  firstTimestamp?: Time;
  involvedObject: ObjectReference;
  kind?: string;
  lastTimestamp?: Time;
  message?: string;
  metadata: ObjectMeta;
  reason?: string;
  related?: ObjectReference;
  reportingComponent?: string;
  reportingInstance?: string;
  series?: EventSeries;
  source?: EventSource;
  type?: string;
}
export interface EventList {
  apiVersion?: string;
  items: Event[];
  kind?: string;
  metadata?: ListMeta;
}
export interface EventSeries {
  count?: number;
  lastObservedTime?: MicroTime;
}
export interface EventSource {
  component?: string;
  host?: string;
}
export interface ExecAction {
  command?: string[];
}
export interface FCVolumeSource {
  fsType?: string;
  lun?: number;
  readOnly?: boolean;
  targetWWNs?: string[];
  wwids?: string[];
}
export interface FlexPersistentVolumeSource {
  driver: string;
  fsType?: string;
  options?: {
    [key: string]: unknown;
  };
  readOnly?: boolean;
  secretRef?: SecretReference;
}
export interface FlexVolumeSource {
  driver: string;
  fsType?: string;
  options?: {
    [key: string]: unknown;
  };
  readOnly?: boolean;
  secretRef?: LocalObjectReference;
}
export interface FlockerVolumeSource {
  datasetName?: string;
  datasetUUID?: string;
}
export interface GCEPersistentDiskVolumeSource {
  fsType?: string;
  partition?: number;
  pdName: string;
  readOnly?: boolean;
}
export interface GitRepoVolumeSource {
  directory?: string;
  repository: string;
  revision?: string;
}
export interface GlusterfsPersistentVolumeSource {
  endpoints: string;
  endpointsNamespace?: string;
  path: string;
  readOnly?: boolean;
}
export interface GlusterfsVolumeSource {
  endpoints: string;
  path: string;
  readOnly?: boolean;
}
export interface HTTPGetAction {
  host?: string;
  httpHeaders?: HTTPHeader[];
  path?: string;
  port: IntOrString;
  scheme?: string;
}
export interface HTTPHeader {
  name: string;
  value: string;
}
export interface Handler {
  exec?: ExecAction;
  httpGet?: HTTPGetAction;
  tcpSocket?: TCPSocketAction;
}
export interface HostAlias {
  hostnames?: string[];
  ip?: string;
}
export interface HostPathVolumeSource {
  path: string;
  type?: string;
}
export interface ISCSIPersistentVolumeSource {
  chapAuthDiscovery?: boolean;
  chapAuthSession?: boolean;
  fsType?: string;
  initiatorName?: string;
  iqn: string;
  iscsiInterface?: string;
  lun: number;
  portals?: string[];
  readOnly?: boolean;
  secretRef?: SecretReference;
  targetPortal: string;
}
export interface ISCSIVolumeSource {
  chapAuthDiscovery?: boolean;
  chapAuthSession?: boolean;
  fsType?: string;
  initiatorName?: string;
  iqn: string;
  iscsiInterface?: string;
  lun: number;
  portals?: string[];
  readOnly?: boolean;
  secretRef?: LocalObjectReference;
  targetPortal: string;
}
export interface KeyToPath {
  key: string;
  mode?: number;
  path: string;
}
export interface Lifecycle {
  postStart?: Handler;
  preStop?: Handler;
}
export interface LimitRange {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: LimitRangeSpec;
}
export interface LimitRangeItem {
  default?: {
    [key: string]: unknown;
  };
  defaultRequest?: {
    [key: string]: unknown;
  };
  max?: {
    [key: string]: unknown;
  };
  maxLimitRequestRatio?: {
    [key: string]: unknown;
  };
  min?: {
    [key: string]: unknown;
  };
  type: string;
}
export interface LimitRangeList {
  apiVersion?: string;
  items: LimitRange[];
  kind?: string;
  metadata?: ListMeta;
}
export interface LimitRangeSpec {
  limits: LimitRangeItem[];
}
export interface LoadBalancerIngress {
  hostname?: string;
  ip?: string;
  ports?: PortStatus[];
}
export interface LoadBalancerStatus {
  ingress?: LoadBalancerIngress[];
}
export interface LocalObjectReference {
  name?: string;
}
export interface LocalVolumeSource {
  fsType?: string;
  path: string;
}
export interface NFSVolumeSource {
  path: string;
  readOnly?: boolean;
  server: string;
}
export interface Namespace {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: NamespaceSpec;
  status?: NamespaceStatus;
}
export interface NamespaceCondition {
  lastTransitionTime?: Time;
  message?: string;
  reason?: string;
  status: string;
  type: string;
}
export interface NamespaceList {
  apiVersion?: string;
  items: Namespace[];
  kind?: string;
  metadata?: ListMeta;
}
export interface NamespaceSpec {
  finalizers?: string[];
}
export interface NamespaceStatus {
  conditions?: NamespaceCondition[];
  phase?: string;
}
export interface Node {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: NodeSpec;
  status?: NodeStatus;
}
export interface NodeAddress {
  address: string;
  type: string;
}
export interface NodeAffinity {
  preferredDuringSchedulingIgnoredDuringExecution?: PreferredSchedulingTerm[];
  requiredDuringSchedulingIgnoredDuringExecution?: NodeSelector;
}
export interface NodeCondition {
  lastHeartbeatTime?: Time;
  lastTransitionTime?: Time;
  message?: string;
  reason?: string;
  status: string;
  type: string;
}
export interface NodeConfigSource {
  configMap?: ConfigMapNodeConfigSource;
}
export interface NodeConfigStatus {
  active?: NodeConfigSource;
  assigned?: NodeConfigSource;
  error?: string;
  lastKnownGood?: NodeConfigSource;
}
export interface NodeDaemonEndpoints {
  kubeletEndpoint?: DaemonEndpoint;
}
export interface NodeList {
  apiVersion?: string;
  items: Node[];
  kind?: string;
  metadata?: ListMeta;
}
export interface NodeSelector {
  nodeSelectorTerms: NodeSelectorTerm[];
}
export interface NodeSelectorRequirement {
  key: string;
  operator: string;
  values?: string[];
}
export interface NodeSelectorTerm {
  matchExpressions?: NodeSelectorRequirement[];
  matchFields?: NodeSelectorRequirement[];
}
export interface NodeSpec {
  configSource?: NodeConfigSource;
  externalID?: string;
  podCIDR?: string;
  podCIDRs?: string[];
  providerID?: string;
  taints?: Taint[];
  unschedulable?: boolean;
}
export interface NodeStatus {
  addresses?: NodeAddress[];
  allocatable?: {
    [key: string]: unknown;
  };
  capacity?: {
    [key: string]: unknown;
  };
  conditions?: NodeCondition[];
  config?: NodeConfigStatus;
  daemonEndpoints?: NodeDaemonEndpoints;
  images?: ContainerImage[];
  nodeInfo?: NodeSystemInfo;
  phase?: string;
  volumesAttached?: AttachedVolume[];
  volumesInUse?: string[];
}
export interface NodeSystemInfo {
  architecture: string;
  bootID: string;
  containerRuntimeVersion: string;
  kernelVersion: string;
  kubeProxyVersion: string;
  kubeletVersion: string;
  machineID: string;
  operatingSystem: string;
  osImage: string;
  systemUUID: string;
}
export interface ObjectFieldSelector {
  apiVersion?: string;
  fieldPath: string;
}
export interface ObjectReference {
  apiVersion?: string;
  fieldPath?: string;
  kind?: string;
  name?: string;
  namespace?: string;
  resourceVersion?: string;
  uid?: string;
}
export interface PersistentVolume {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: PersistentVolumeSpec;
  status?: PersistentVolumeStatus;
}
export interface PersistentVolumeClaim {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: PersistentVolumeClaimSpec;
  status?: PersistentVolumeClaimStatus;
}
export interface PersistentVolumeClaimCondition {
  lastProbeTime?: Time;
  lastTransitionTime?: Time;
  message?: string;
  reason?: string;
  status: string;
  type: string;
}
export interface PersistentVolumeClaimList {
  apiVersion?: string;
  items: PersistentVolumeClaim[];
  kind?: string;
  metadata?: ListMeta;
}
export interface PersistentVolumeClaimSpec {
  accessModes?: string[];
  dataSource?: TypedLocalObjectReference;
  dataSourceRef?: TypedLocalObjectReference;
  resources?: ResourceRequirements;
  selector?: LabelSelector;
  storageClassName?: string;
  volumeMode?: string;
  volumeName?: string;
}
export interface PersistentVolumeClaimStatus {
  accessModes?: string[];
  capacity?: {
    [key: string]: unknown;
  };
  conditions?: PersistentVolumeClaimCondition[];
  phase?: string;
}
export interface PersistentVolumeClaimTemplate {
  metadata?: ObjectMeta;
  spec: PersistentVolumeClaimSpec;
}
export interface PersistentVolumeClaimVolumeSource {
  claimName: string;
  readOnly?: boolean;
}
export interface PersistentVolumeList {
  apiVersion?: string;
  items: PersistentVolume[];
  kind?: string;
  metadata?: ListMeta;
}
export interface PersistentVolumeSpec {
  accessModes?: string[];
  awsElasticBlockStore?: AWSElasticBlockStoreVolumeSource;
  azureDisk?: AzureDiskVolumeSource;
  azureFile?: AzureFilePersistentVolumeSource;
  capacity?: {
    [key: string]: unknown;
  };
  cephfs?: CephFSPersistentVolumeSource;
  cinder?: CinderPersistentVolumeSource;
  claimRef?: ObjectReference;
  csi?: CSIPersistentVolumeSource;
  fc?: FCVolumeSource;
  flexVolume?: FlexPersistentVolumeSource;
  flocker?: FlockerVolumeSource;
  gcePersistentDisk?: GCEPersistentDiskVolumeSource;
  glusterfs?: GlusterfsPersistentVolumeSource;
  hostPath?: HostPathVolumeSource;
  iscsi?: ISCSIPersistentVolumeSource;
  local?: LocalVolumeSource;
  mountOptions?: string[];
  nfs?: NFSVolumeSource;
  nodeAffinity?: VolumeNodeAffinity;
  persistentVolumeReclaimPolicy?: string;
  photonPersistentDisk?: PhotonPersistentDiskVolumeSource;
  portworxVolume?: PortworxVolumeSource;
  quobyte?: QuobyteVolumeSource;
  rbd?: RBDPersistentVolumeSource;
  scaleIO?: ScaleIOPersistentVolumeSource;
  storageClassName?: string;
  storageos?: StorageOSPersistentVolumeSource;
  volumeMode?: string;
  vsphereVolume?: VsphereVirtualDiskVolumeSource;
}
export interface PersistentVolumeStatus {
  message?: string;
  phase?: string;
  reason?: string;
}
export interface PhotonPersistentDiskVolumeSource {
  fsType?: string;
  pdID: string;
}
export interface Pod {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: PodSpec;
  status?: PodStatus;
}
export interface PodAffinity {
  preferredDuringSchedulingIgnoredDuringExecution?: WeightedPodAffinityTerm[];
  requiredDuringSchedulingIgnoredDuringExecution?: PodAffinityTerm[];
}
export interface PodAffinityTerm {
  labelSelector?: LabelSelector;
  namespaceSelector?: LabelSelector;
  namespaces?: string[];
  topologyKey: string;
}
export interface PodAntiAffinity {
  preferredDuringSchedulingIgnoredDuringExecution?: WeightedPodAffinityTerm[];
  requiredDuringSchedulingIgnoredDuringExecution?: PodAffinityTerm[];
}
export interface PodCondition {
  lastProbeTime?: Time;
  lastTransitionTime?: Time;
  message?: string;
  reason?: string;
  status: string;
  type: string;
}
export interface PodDNSConfig {
  nameservers?: string[];
  options?: PodDNSConfigOption[];
  searches?: string[];
}
export interface PodDNSConfigOption {
  name?: string;
  value?: string;
}
export interface PodIP {
  ip?: string;
}
export interface PodList {
  apiVersion?: string;
  items: Pod[];
  kind?: string;
  metadata?: ListMeta;
}
export interface PodReadinessGate {
  conditionType: string;
}
export interface PodSecurityContext {
  fsGroup?: number;
  fsGroupChangePolicy?: string;
  runAsGroup?: number;
  runAsNonRoot?: boolean;
  runAsUser?: number;
  seLinuxOptions?: SELinuxOptions;
  seccompProfile?: SeccompProfile;
  supplementalGroups?: number[];
  sysctls?: Sysctl[];
  windowsOptions?: WindowsSecurityContextOptions;
}
export interface PodSpec {
  activeDeadlineSeconds?: number;
  affinity?: Affinity;
  automountServiceAccountToken?: boolean;
  containers: Container[];
  dnsConfig?: PodDNSConfig;
  dnsPolicy?: string;
  enableServiceLinks?: boolean;
  ephemeralContainers?: EphemeralContainer[];
  hostAliases?: HostAlias[];
  hostIPC?: boolean;
  hostNetwork?: boolean;
  hostPID?: boolean;
  hostname?: string;
  imagePullSecrets?: LocalObjectReference[];
  initContainers?: Container[];
  nodeName?: string;
  nodeSelector?: {
    [key: string]: unknown;
  };
  overhead?: {
    [key: string]: unknown;
  };
  preemptionPolicy?: string;
  priority?: number;
  priorityClassName?: string;
  readinessGates?: PodReadinessGate[];
  restartPolicy?: string;
  runtimeClassName?: string;
  schedulerName?: string;
  securityContext?: PodSecurityContext;
  serviceAccount?: string;
  serviceAccountName?: string;
  setHostnameAsFQDN?: boolean;
  shareProcessNamespace?: boolean;
  subdomain?: string;
  terminationGracePeriodSeconds?: number;
  tolerations?: Toleration[];
  topologySpreadConstraints?: TopologySpreadConstraint[];
  volumes?: Volume[];
}
export interface PodStatus {
  conditions?: PodCondition[];
  containerStatuses?: ContainerStatus[];
  ephemeralContainerStatuses?: ContainerStatus[];
  hostIP?: string;
  initContainerStatuses?: ContainerStatus[];
  message?: string;
  nominatedNodeName?: string;
  phase?: string;
  podIP?: string;
  podIPs?: PodIP[];
  qosClass?: string;
  reason?: string;
  startTime?: Time;
}
export interface PodTemplate {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  template?: PodTemplateSpec;
}
export interface PodTemplateList {
  apiVersion?: string;
  items: PodTemplate[];
  kind?: string;
  metadata?: ListMeta;
}
export interface PodTemplateSpec {
  metadata?: ObjectMeta;
  spec?: PodSpec;
}
export interface PortStatus {
  error?: string;
  port: number;
  protocol: string;
}
export interface PortworxVolumeSource {
  fsType?: string;
  readOnly?: boolean;
  volumeID: string;
}
export interface PreferredSchedulingTerm {
  preference: NodeSelectorTerm;
  weight: number;
}
export interface Probe {
  exec?: ExecAction;
  failureThreshold?: number;
  httpGet?: HTTPGetAction;
  initialDelaySeconds?: number;
  periodSeconds?: number;
  successThreshold?: number;
  tcpSocket?: TCPSocketAction;
  terminationGracePeriodSeconds?: number;
  timeoutSeconds?: number;
}
export interface ProjectedVolumeSource {
  defaultMode?: number;
  sources?: VolumeProjection[];
}
export interface QuobyteVolumeSource {
  group?: string;
  readOnly?: boolean;
  registry: string;
  tenant?: string;
  user?: string;
  volume: string;
}
export interface RBDPersistentVolumeSource {
  fsType?: string;
  image: string;
  keyring?: string;
  monitors: string[];
  pool?: string;
  readOnly?: boolean;
  secretRef?: SecretReference;
  user?: string;
}
export interface RBDVolumeSource {
  fsType?: string;
  image: string;
  keyring?: string;
  monitors: string[];
  pool?: string;
  readOnly?: boolean;
  secretRef?: LocalObjectReference;
  user?: string;
}
export interface ReplicationController {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: ReplicationControllerSpec;
  status?: ReplicationControllerStatus;
}
export interface ReplicationControllerCondition {
  lastTransitionTime?: Time;
  message?: string;
  reason?: string;
  status: string;
  type: string;
}
export interface ReplicationControllerList {
  apiVersion?: string;
  items: ReplicationController[];
  kind?: string;
  metadata?: ListMeta;
}
export interface ReplicationControllerSpec {
  minReadySeconds?: number;
  replicas?: number;
  selector?: {
    [key: string]: unknown;
  };
  template?: PodTemplateSpec;
}
export interface ReplicationControllerStatus {
  availableReplicas?: number;
  conditions?: ReplicationControllerCondition[];
  fullyLabeledReplicas?: number;
  observedGeneration?: number;
  readyReplicas?: number;
  replicas: number;
}
export interface ResourceFieldSelector {
  containerName?: string;
  divisor?: Quantity;
  resource: string;
}
export interface ResourceQuota {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: ResourceQuotaSpec;
  status?: ResourceQuotaStatus;
}
export interface ResourceQuotaList {
  apiVersion?: string;
  items: ResourceQuota[];
  kind?: string;
  metadata?: ListMeta;
}
export interface ResourceQuotaSpec {
  hard?: {
    [key: string]: unknown;
  };
  scopeSelector?: ScopeSelector;
  scopes?: string[];
}
export interface ResourceQuotaStatus {
  hard?: {
    [key: string]: unknown;
  };
  used?: {
    [key: string]: unknown;
  };
}
export interface ResourceRequirements {
  limits?: {
    [key: string]: unknown;
  };
  requests?: {
    [key: string]: unknown;
  };
}
export interface SELinuxOptions {
  level?: string;
  role?: string;
  type?: string;
  user?: string;
}
export interface ScaleIOPersistentVolumeSource {
  fsType?: string;
  gateway: string;
  protectionDomain?: string;
  readOnly?: boolean;
  secretRef: SecretReference;
  sslEnabled?: boolean;
  storageMode?: string;
  storagePool?: string;
  system: string;
  volumeName?: string;
}
export interface ScaleIOVolumeSource {
  fsType?: string;
  gateway: string;
  protectionDomain?: string;
  readOnly?: boolean;
  secretRef: LocalObjectReference;
  sslEnabled?: boolean;
  storageMode?: string;
  storagePool?: string;
  system: string;
  volumeName?: string;
}
export interface ScopeSelector {
  matchExpressions?: ScopedResourceSelectorRequirement[];
}
export interface ScopedResourceSelectorRequirement {
  operator: string;
  scopeName: string;
  values?: string[];
}
export interface SeccompProfile {
  localhostProfile?: string;
  type: string;
}
export interface Secret {
  apiVersion?: string;
  data?: {
    [key: string]: unknown;
  };
  immutable?: boolean;
  kind?: string;
  metadata?: ObjectMeta;
  stringData?: {
    [key: string]: unknown;
  };
  type?: string;
}
export interface SecretEnvSource {
  name?: string;
  optional?: boolean;
}
export interface SecretKeySelector {
  key: string;
  name?: string;
  optional?: boolean;
}
export interface SecretList {
  apiVersion?: string;
  items: Secret[];
  kind?: string;
  metadata?: ListMeta;
}
export interface SecretProjection {
  items?: KeyToPath[];
  name?: string;
  optional?: boolean;
}
export interface SecretReference {
  name?: string;
  namespace?: string;
}
export interface SecretVolumeSource {
  defaultMode?: number;
  items?: KeyToPath[];
  optional?: boolean;
  secretName?: string;
}
export interface SecurityContext {
  allowPrivilegeEscalation?: boolean;
  capabilities?: Capabilities;
  privileged?: boolean;
  procMount?: string;
  readOnlyRootFilesystem?: boolean;
  runAsGroup?: number;
  runAsNonRoot?: boolean;
  runAsUser?: number;
  seLinuxOptions?: SELinuxOptions;
  seccompProfile?: SeccompProfile;
  windowsOptions?: WindowsSecurityContextOptions;
}
export interface Service {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: ServiceSpec;
  status?: ServiceStatus;
}
export interface ServiceAccount {
  apiVersion?: string;
  automountServiceAccountToken?: boolean;
  imagePullSecrets?: LocalObjectReference[];
  kind?: string;
  metadata?: ObjectMeta;
  secrets?: ObjectReference[];
}
export interface ServiceAccountList {
  apiVersion?: string;
  items: ServiceAccount[];
  kind?: string;
  metadata?: ListMeta;
}
export interface ServiceAccountTokenProjection {
  audience?: string;
  expirationSeconds?: number;
  path: string;
}
export interface ServiceList {
  apiVersion?: string;
  items: Service[];
  kind?: string;
  metadata?: ListMeta;
}
export interface ServicePort {
  appProtocol?: string;
  name?: string;
  nodePort?: number;
  port: number;
  protocol?: string;
  targetPort?: IntOrString;
}
export interface ServiceSpec {
  allocateLoadBalancerNodePorts?: boolean;
  clusterIP?: string;
  clusterIPs?: string[];
  externalIPs?: string[];
  externalName?: string;
  externalTrafficPolicy?: string;
  healthCheckNodePort?: number;
  internalTrafficPolicy?: string;
  ipFamilies?: string[];
  ipFamilyPolicy?: string;
  loadBalancerClass?: string;
  loadBalancerIP?: string;
  loadBalancerSourceRanges?: string[];
  ports?: ServicePort[];
  publishNotReadyAddresses?: boolean;
  selector?: {
    [key: string]: unknown;
  };
  sessionAffinity?: string;
  sessionAffinityConfig?: SessionAffinityConfig;
  type?: string;
}
export interface ServiceStatus {
  conditions?: Condition[];
  loadBalancer?: LoadBalancerStatus;
}
export interface SessionAffinityConfig {
  clientIP?: ClientIPConfig;
}
export interface StorageOSPersistentVolumeSource {
  fsType?: string;
  readOnly?: boolean;
  secretRef?: ObjectReference;
  volumeName?: string;
  volumeNamespace?: string;
}
export interface StorageOSVolumeSource {
  fsType?: string;
  readOnly?: boolean;
  secretRef?: LocalObjectReference;
  volumeName?: string;
  volumeNamespace?: string;
}
export interface Sysctl {
  name: string;
  value: string;
}
export interface TCPSocketAction {
  host?: string;
  port: IntOrString;
}
export interface Taint {
  effect: string;
  key: string;
  timeAdded?: Time;
  value?: string;
}
export interface Toleration {
  effect?: string;
  key?: string;
  operator?: string;
  tolerationSeconds?: number;
  value?: string;
}
export interface TopologySelectorLabelRequirement {
  key: string;
  values: string[];
}
export interface TopologySelectorTerm {
  matchLabelExpressions?: TopologySelectorLabelRequirement[];
}
export interface TopologySpreadConstraint {
  labelSelector?: LabelSelector;
  maxSkew: number;
  topologyKey: string;
  whenUnsatisfiable: string;
}
export interface TypedLocalObjectReference {
  apiGroup?: string;
  kind: string;
  name: string;
}
export interface Volume {
  awsElasticBlockStore?: AWSElasticBlockStoreVolumeSource;
  azureDisk?: AzureDiskVolumeSource;
  azureFile?: AzureFileVolumeSource;
  cephfs?: CephFSVolumeSource;
  cinder?: CinderVolumeSource;
  configMap?: ConfigMapVolumeSource;
  csi?: CSIVolumeSource;
  downwardAPI?: DownwardAPIVolumeSource;
  emptyDir?: EmptyDirVolumeSource;
  ephemeral?: EphemeralVolumeSource;
  fc?: FCVolumeSource;
  flexVolume?: FlexVolumeSource;
  flocker?: FlockerVolumeSource;
  gcePersistentDisk?: GCEPersistentDiskVolumeSource;
  gitRepo?: GitRepoVolumeSource;
  glusterfs?: GlusterfsVolumeSource;
  hostPath?: HostPathVolumeSource;
  iscsi?: ISCSIVolumeSource;
  name: string;
  nfs?: NFSVolumeSource;
  persistentVolumeClaim?: PersistentVolumeClaimVolumeSource;
  photonPersistentDisk?: PhotonPersistentDiskVolumeSource;
  portworxVolume?: PortworxVolumeSource;
  projected?: ProjectedVolumeSource;
  quobyte?: QuobyteVolumeSource;
  rbd?: RBDVolumeSource;
  scaleIO?: ScaleIOVolumeSource;
  secret?: SecretVolumeSource;
  storageos?: StorageOSVolumeSource;
  vsphereVolume?: VsphereVirtualDiskVolumeSource;
}
export interface VolumeDevice {
  devicePath: string;
  name: string;
}
export interface VolumeMount {
  mountPath: string;
  mountPropagation?: string;
  name: string;
  readOnly?: boolean;
  subPath?: string;
  subPathExpr?: string;
}
export interface VolumeNodeAffinity {
  required?: NodeSelector;
}
export interface VolumeProjection {
  configMap?: ConfigMapProjection;
  downwardAPI?: DownwardAPIProjection;
  secret?: SecretProjection;
  serviceAccountToken?: ServiceAccountTokenProjection;
}
export interface VsphereVirtualDiskVolumeSource {
  fsType?: string;
  storagePolicyID?: string;
  storagePolicyName?: string;
  volumePath: string;
}
export interface WeightedPodAffinityTerm {
  podAffinityTerm: PodAffinityTerm;
  weight: number;
}
export interface WindowsSecurityContextOptions {
  gmsaCredentialSpec?: string;
  gmsaCredentialSpecName?: string;
  hostProcess?: boolean;
  runAsUserName?: string;
}
export interface Endpoint {
  addresses: string[];
  conditions?: EndpointConditions;
  deprecatedTopology?: {
    [key: string]: unknown;
  };
  hints?: EndpointHints;
  hostname?: string;
  nodeName?: string;
  targetRef?: ObjectReference;
  zone?: string;
}
export interface EndpointConditions {
  ready?: boolean;
  serving?: boolean;
  terminating?: boolean;
}
export interface EndpointHints {
  forZones?: ForZone[];
}
export interface EndpointPort {
  appProtocol?: string;
  name?: string;
  port?: number;
  protocol?: string;
}
export interface EndpointSlice {
  addressType: string;
  apiVersion?: string;
  endpoints: Endpoint[];
  kind?: string;
  metadata?: ObjectMeta;
  ports?: EndpointPort[];
}
export interface EndpointSliceList {
  apiVersion?: string;
  items: EndpointSlice[];
  kind?: string;
  metadata?: ListMeta;
}
export interface ForZone {
  name: string;
}
export interface Endpoint {
  addresses: string[];
  conditions?: EndpointConditions;
  hints?: EndpointHints;
  hostname?: string;
  nodeName?: string;
  targetRef?: ObjectReference;
  topology?: {
    [key: string]: unknown;
  };
}
export interface EndpointConditions {
  ready?: boolean;
  serving?: boolean;
  terminating?: boolean;
}
export interface EndpointHints {
  forZones?: ForZone[];
}
export interface EndpointPort {
  appProtocol?: string;
  name?: string;
  port?: number;
  protocol?: string;
}
export interface EndpointSlice {
  addressType: string;
  apiVersion?: string;
  endpoints: Endpoint[];
  kind?: string;
  metadata?: ObjectMeta;
  ports?: EndpointPort[];
}
export interface EndpointSliceList {
  apiVersion?: string;
  items: EndpointSlice[];
  kind?: string;
  metadata?: ListMeta;
}
export interface ForZone {
  name: string;
}
export interface Event {
  action?: string;
  apiVersion?: string;
  deprecatedCount?: number;
  deprecatedFirstTimestamp?: Time;
  deprecatedLastTimestamp?: Time;
  deprecatedSource?: EventSource;
  eventTime: MicroTime;
  kind?: string;
  metadata?: ObjectMeta;
  note?: string;
  reason?: string;
  regarding?: ObjectReference;
  related?: ObjectReference;
  reportingController?: string;
  reportingInstance?: string;
  series?: EventSeries;
  type?: string;
}
export interface EventList {
  apiVersion?: string;
  items: Event[];
  kind?: string;
  metadata?: ListMeta;
}
export interface EventSeries {
  count: number;
  lastObservedTime: MicroTime;
}
export interface Event {
  action?: string;
  apiVersion?: string;
  deprecatedCount?: number;
  deprecatedFirstTimestamp?: Time;
  deprecatedLastTimestamp?: Time;
  deprecatedSource?: EventSource;
  eventTime: MicroTime;
  kind?: string;
  metadata?: ObjectMeta;
  note?: string;
  reason?: string;
  regarding?: ObjectReference;
  related?: ObjectReference;
  reportingController?: string;
  reportingInstance?: string;
  series?: EventSeries;
  type?: string;
}
export interface EventList {
  apiVersion?: string;
  items: Event[];
  kind?: string;
  metadata?: ListMeta;
}
export interface EventSeries {
  count: number;
  lastObservedTime: MicroTime;
}
export interface FlowDistinguisherMethod {
  type: string;
}
export interface FlowSchema {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: FlowSchemaSpec;
  status?: FlowSchemaStatus;
}
export interface FlowSchemaCondition {
  lastTransitionTime?: Time;
  message?: string;
  reason?: string;
  status?: string;
  type?: string;
}
export interface FlowSchemaList {
  apiVersion?: string;
  items: FlowSchema[];
  kind?: string;
  metadata?: ListMeta;
}
export interface FlowSchemaSpec {
  distinguisherMethod?: FlowDistinguisherMethod;
  matchingPrecedence?: number;
  priorityLevelConfiguration: PriorityLevelConfigurationReference;
  rules?: PolicyRulesWithSubjects[];
}
export interface FlowSchemaStatus {
  conditions?: FlowSchemaCondition[];
}
export interface GroupSubject {
  name: string;
}
export interface LimitResponse {
  queuing?: QueuingConfiguration;
  type: string;
}
export interface LimitedPriorityLevelConfiguration {
  assuredConcurrencyShares?: number;
  limitResponse?: LimitResponse;
}
export interface NonResourcePolicyRule {
  nonResourceURLs: string[];
  verbs: string[];
}
export interface PolicyRulesWithSubjects {
  nonResourceRules?: NonResourcePolicyRule[];
  resourceRules?: ResourcePolicyRule[];
  subjects: Subject[];
}
export interface PriorityLevelConfiguration {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: PriorityLevelConfigurationSpec;
  status?: PriorityLevelConfigurationStatus;
}
export interface PriorityLevelConfigurationCondition {
  lastTransitionTime?: Time;
  message?: string;
  reason?: string;
  status?: string;
  type?: string;
}
export interface PriorityLevelConfigurationList {
  apiVersion?: string;
  items: PriorityLevelConfiguration[];
  kind?: string;
  metadata?: ListMeta;
}
export interface PriorityLevelConfigurationReference {
  name: string;
}
export interface PriorityLevelConfigurationSpec {
  limited?: LimitedPriorityLevelConfiguration;
  type: string;
}
export interface PriorityLevelConfigurationStatus {
  conditions?: PriorityLevelConfigurationCondition[];
}
export interface QueuingConfiguration {
  handSize?: number;
  queueLengthLimit?: number;
  queues?: number;
}
export interface ResourcePolicyRule {
  apiGroups: string[];
  clusterScope?: boolean;
  namespaces?: string[];
  resources: string[];
  verbs: string[];
}
export interface ServiceAccountSubject {
  name: string;
  namespace: string;
}
export interface Subject {
  group?: GroupSubject;
  kind: string;
  serviceAccount?: ServiceAccountSubject;
  user?: UserSubject;
}
export interface UserSubject {
  name: string;
}
export interface HTTPIngressPath {
  backend: IngressBackend;
  path?: string;
  pathType: string;
}
export interface HTTPIngressRuleValue {
  paths: HTTPIngressPath[];
}
export interface IPBlock {
  cidr: string;
  except?: string[];
}
export interface Ingress {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: IngressSpec;
  status?: IngressStatus;
}
export interface IngressBackend {
  resource?: TypedLocalObjectReference;
  service?: IngressServiceBackend;
}
export interface IngressClass {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: IngressClassSpec;
}
export interface IngressClassList {
  apiVersion?: string;
  items: IngressClass[];
  kind?: string;
  metadata?: ListMeta;
}
export interface IngressClassParametersReference {
  apiGroup?: string;
  kind: string;
  name: string;
  namespace?: string;
  scope?: string;
}
export interface IngressClassSpec {
  controller?: string;
  parameters?: IngressClassParametersReference;
}
export interface IngressList {
  apiVersion?: string;
  items: Ingress[];
  kind?: string;
  metadata?: ListMeta;
}
export interface IngressRule {
  host?: string;
  http?: HTTPIngressRuleValue;
}
export interface IngressServiceBackend {
  name: string;
  port?: ServiceBackendPort;
}
export interface IngressSpec {
  defaultBackend?: IngressBackend;
  ingressClassName?: string;
  rules?: IngressRule[];
  tls?: IngressTLS[];
}
export interface IngressStatus {
  loadBalancer?: LoadBalancerStatus;
}
export interface IngressTLS {
  hosts?: string[];
  secretName?: string;
}
export interface NetworkPolicy {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: NetworkPolicySpec;
}
export interface NetworkPolicyEgressRule {
  ports?: NetworkPolicyPort[];
  to?: NetworkPolicyPeer[];
}
export interface NetworkPolicyIngressRule {
  from?: NetworkPolicyPeer[];
  ports?: NetworkPolicyPort[];
}
export interface NetworkPolicyList {
  apiVersion?: string;
  items: NetworkPolicy[];
  kind?: string;
  metadata?: ListMeta;
}
export interface NetworkPolicyPeer {
  ipBlock?: IPBlock;
  namespaceSelector?: LabelSelector;
  podSelector?: LabelSelector;
}
export interface NetworkPolicyPort {
  endPort?: number;
  port?: IntOrString;
  protocol?: string;
}
export interface NetworkPolicySpec {
  egress?: NetworkPolicyEgressRule[];
  ingress?: NetworkPolicyIngressRule[];
  podSelector: LabelSelector;
  policyTypes?: string[];
}
export interface ServiceBackendPort {
  name?: string;
  number?: number;
}
export interface Overhead {
  podFixed?: {
    [key: string]: unknown;
  };
}
export interface RuntimeClass {
  apiVersion?: string;
  handler: string;
  kind?: string;
  metadata?: ObjectMeta;
  overhead?: Overhead;
  scheduling?: Scheduling;
}
export interface RuntimeClassList {
  apiVersion?: string;
  items: RuntimeClass[];
  kind?: string;
  metadata?: ListMeta;
}
export interface Scheduling {
  nodeSelector?: {
    [key: string]: unknown;
  };
  tolerations?: Toleration[];
}
export interface Overhead {
  podFixed?: {
    [key: string]: unknown;
  };
}
export interface RuntimeClass {
  apiVersion?: string;
  handler: string;
  kind?: string;
  metadata?: ObjectMeta;
  overhead?: Overhead;
  scheduling?: Scheduling;
}
export interface RuntimeClassList {
  apiVersion?: string;
  items: RuntimeClass[];
  kind?: string;
  metadata?: ListMeta;
}
export interface Scheduling {
  nodeSelector?: {
    [key: string]: unknown;
  };
  tolerations?: Toleration[];
}
export interface Eviction {
  apiVersion?: string;
  deleteOptions?: DeleteOptions;
  kind?: string;
  metadata?: ObjectMeta;
}
export interface PodDisruptionBudget {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: PodDisruptionBudgetSpec;
  status?: PodDisruptionBudgetStatus;
}
export interface PodDisruptionBudgetList {
  apiVersion?: string;
  items: PodDisruptionBudget[];
  kind?: string;
  metadata?: ListMeta;
}
export interface PodDisruptionBudgetSpec {
  maxUnavailable?: IntOrString;
  minAvailable?: IntOrString;
  selector?: LabelSelector;
}
export interface PodDisruptionBudgetStatus {
  conditions?: Condition[];
  currentHealthy: number;
  desiredHealthy: number;
  disruptedPods?: {
    [key: string]: unknown;
  };
  disruptionsAllowed: number;
  expectedPods: number;
  observedGeneration?: number;
}
export interface AllowedCSIDriver {
  name: string;
}
export interface AllowedFlexVolume {
  driver: string;
}
export interface AllowedHostPath {
  pathPrefix?: string;
  readOnly?: boolean;
}
export interface FSGroupStrategyOptions {
  ranges?: IDRange[];
  rule?: string;
}
export interface HostPortRange {
  max: number;
  min: number;
}
export interface IDRange {
  max: number;
  min: number;
}
export interface PodDisruptionBudget {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: PodDisruptionBudgetSpec;
  status?: PodDisruptionBudgetStatus;
}
export interface PodDisruptionBudgetList {
  apiVersion?: string;
  items: PodDisruptionBudget[];
  kind?: string;
  metadata?: ListMeta;
}
export interface PodDisruptionBudgetSpec {
  maxUnavailable?: IntOrString;
  minAvailable?: IntOrString;
  selector?: LabelSelector;
}
export interface PodDisruptionBudgetStatus {
  conditions?: Condition[];
  currentHealthy: number;
  desiredHealthy: number;
  disruptedPods?: {
    [key: string]: unknown;
  };
  disruptionsAllowed: number;
  expectedPods: number;
  observedGeneration?: number;
}
export interface PodSecurityPolicy {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: PodSecurityPolicySpec;
}
export interface PodSecurityPolicyList {
  apiVersion?: string;
  items: PodSecurityPolicy[];
  kind?: string;
  metadata?: ListMeta;
}
export interface PodSecurityPolicySpec {
  allowPrivilegeEscalation?: boolean;
  allowedCSIDrivers?: AllowedCSIDriver[];
  allowedCapabilities?: string[];
  allowedFlexVolumes?: AllowedFlexVolume[];
  allowedHostPaths?: AllowedHostPath[];
  allowedProcMountTypes?: string[];
  allowedUnsafeSysctls?: string[];
  defaultAddCapabilities?: string[];
  defaultAllowPrivilegeEscalation?: boolean;
  forbiddenSysctls?: string[];
  fsGroup: FSGroupStrategyOptions;
  hostIPC?: boolean;
  hostNetwork?: boolean;
  hostPID?: boolean;
  hostPorts?: HostPortRange[];
  privileged?: boolean;
  readOnlyRootFilesystem?: boolean;
  requiredDropCapabilities?: string[];
  runAsGroup?: RunAsGroupStrategyOptions;
  runAsUser: RunAsUserStrategyOptions;
  runtimeClass?: RuntimeClassStrategyOptions;
  seLinux: SELinuxStrategyOptions;
  supplementalGroups: SupplementalGroupsStrategyOptions;
  volumes?: string[];
}
export interface RunAsGroupStrategyOptions {
  ranges?: IDRange[];
  rule: string;
}
export interface RunAsUserStrategyOptions {
  ranges?: IDRange[];
  rule: string;
}
export interface RuntimeClassStrategyOptions {
  allowedRuntimeClassNames: string[];
  defaultRuntimeClassName?: string;
}
export interface SELinuxStrategyOptions {
  rule: string;
  seLinuxOptions?: SELinuxOptions;
}
export interface SupplementalGroupsStrategyOptions {
  ranges?: IDRange[];
  rule?: string;
}
export interface AggregationRule {
  clusterRoleSelectors?: LabelSelector[];
}
export interface ClusterRole {
  aggregationRule?: AggregationRule;
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  rules?: PolicyRule[];
}
export interface ClusterRoleBinding {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  roleRef: RoleRef;
  subjects?: Subject[];
}
export interface ClusterRoleBindingList {
  apiVersion?: string;
  items: ClusterRoleBinding[];
  kind?: string;
  metadata?: ListMeta;
}
export interface ClusterRoleList {
  apiVersion?: string;
  items: ClusterRole[];
  kind?: string;
  metadata?: ListMeta;
}
export interface PolicyRule {
  apiGroups?: string[];
  nonResourceURLs?: string[];
  resourceNames?: string[];
  resources?: string[];
  verbs: string[];
}
export interface Role {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  rules?: PolicyRule[];
}
export interface RoleBinding {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  roleRef: RoleRef;
  subjects?: Subject[];
}
export interface RoleBindingList {
  apiVersion?: string;
  items: RoleBinding[];
  kind?: string;
  metadata?: ListMeta;
}
export interface RoleList {
  apiVersion?: string;
  items: Role[];
  kind?: string;
  metadata?: ListMeta;
}
export interface RoleRef {
  apiGroup: string;
  kind: string;
  name: string;
}
export interface Subject {
  apiGroup?: string;
  kind: string;
  name: string;
  namespace?: string;
}
export interface PriorityClass {
  apiVersion?: string;
  description?: string;
  globalDefault?: boolean;
  kind?: string;
  metadata?: ObjectMeta;
  preemptionPolicy?: string;
  value: number;
}
export interface PriorityClassList {
  apiVersion?: string;
  items: PriorityClass[];
  kind?: string;
  metadata?: ListMeta;
}
export interface CSIDriver {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec: CSIDriverSpec;
}
export interface CSIDriverList {
  apiVersion?: string;
  items: CSIDriver[];
  kind?: string;
  metadata?: ListMeta;
}
export interface CSIDriverSpec {
  attachRequired?: boolean;
  fsGroupPolicy?: string;
  podInfoOnMount?: boolean;
  requiresRepublish?: boolean;
  storageCapacity?: boolean;
  tokenRequests?: TokenRequest[];
  volumeLifecycleModes?: string[];
}
export interface CSINode {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec: CSINodeSpec;
}
export interface CSINodeDriver {
  allocatable?: VolumeNodeResources;
  name: string;
  nodeID: string;
  topologyKeys?: string[];
}
export interface CSINodeList {
  apiVersion?: string;
  items: CSINode[];
  kind?: string;
  metadata?: ListMeta;
}
export interface CSINodeSpec {
  drivers: CSINodeDriver[];
}
export interface StorageClass {
  allowVolumeExpansion?: boolean;
  allowedTopologies?: TopologySelectorTerm[];
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  mountOptions?: string[];
  parameters?: {
    [key: string]: unknown;
  };
  provisioner: string;
  reclaimPolicy?: string;
  volumeBindingMode?: string;
}
export interface StorageClassList {
  apiVersion?: string;
  items: StorageClass[];
  kind?: string;
  metadata?: ListMeta;
}
export interface TokenRequest {
  audience: string;
  expirationSeconds?: number;
}
export interface VolumeAttachment {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec: VolumeAttachmentSpec;
  status?: VolumeAttachmentStatus;
}
export interface VolumeAttachmentList {
  apiVersion?: string;
  items: VolumeAttachment[];
  kind?: string;
  metadata?: ListMeta;
}
export interface VolumeAttachmentSource {
  inlineVolumeSpec?: PersistentVolumeSpec;
  persistentVolumeName?: string;
}
export interface VolumeAttachmentSpec {
  attacher: string;
  nodeName: string;
  source: VolumeAttachmentSource;
}
export interface VolumeAttachmentStatus {
  attachError?: VolumeError;
  attached: boolean;
  attachmentMetadata?: {
    [key: string]: unknown;
  };
  detachError?: VolumeError;
}
export interface VolumeError {
  message?: string;
  time?: Time;
}
export interface VolumeNodeResources {
  count?: number;
}
export interface CSIStorageCapacity {
  apiVersion?: string;
  capacity?: Quantity;
  kind?: string;
  maximumVolumeSize?: Quantity;
  metadata?: ObjectMeta;
  nodeTopology?: LabelSelector;
  storageClassName: string;
}
export interface CSIStorageCapacityList {
  apiVersion?: string;
  items: CSIStorageCapacity[];
  kind?: string;
  metadata?: ListMeta;
}
export interface CustomResourceColumnDefinition {
  description?: string;
  format?: string;
  jsonPath: string;
  name: string;
  priority?: number;
  type: string;
}
export interface CustomResourceConversion {
  strategy: string;
  webhook?: WebhookConversion;
}
export interface CustomResourceDefinition {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec: CustomResourceDefinitionSpec;
  status?: CustomResourceDefinitionStatus;
}
export interface CustomResourceDefinitionCondition {
  lastTransitionTime?: Time;
  message?: string;
  reason?: string;
  status: string;
  type: string;
}
export interface CustomResourceDefinitionList {
  apiVersion?: string;
  items: CustomResourceDefinition[];
  kind?: string;
  metadata?: ListMeta;
}
export interface CustomResourceDefinitionNames {
  categories?: string[];
  kind: string;
  listKind?: string;
  plural: string;
  shortNames?: string[];
  singular?: string;
}
export interface CustomResourceDefinitionSpec {
  conversion?: CustomResourceConversion;
  group: string;
  names: CustomResourceDefinitionNames;
  preserveUnknownFields?: boolean;
  scope: string;
  versions: CustomResourceDefinitionVersion[];
}
export interface CustomResourceDefinitionStatus {
  acceptedNames?: CustomResourceDefinitionNames;
  conditions?: CustomResourceDefinitionCondition[];
  storedVersions?: string[];
}
export interface CustomResourceDefinitionVersion {
  additionalPrinterColumns?: CustomResourceColumnDefinition[];
  deprecated?: boolean;
  deprecationWarning?: string;
  name: string;
  schema?: CustomResourceValidation;
  served: boolean;
  storage: boolean;
  subresources?: CustomResourceSubresources;
}
export interface CustomResourceSubresourceScale {
  labelSelectorPath?: string;
  specReplicasPath: string;
  statusReplicasPath: string;
}
export type CustomResourceSubresourceStatus = {
  [key: string]: unknown;
};
export interface CustomResourceSubresources {
  scale?: CustomResourceSubresourceScale;
  status?: CustomResourceSubresourceStatus;
}
export interface CustomResourceValidation {
  openAPIV3Schema?: JSONSchemaProps;
}
export interface ExternalDocumentation {
  description?: string;
  url?: string;
}
export type JSON = any;
export interface JSONSchemaProps {
  $ref?: string;
  $schema?: string;
  additionalItems?: JSONSchemaPropsOrBool;
  additionalProperties?: JSONSchemaPropsOrBool;
  allOf?: JSONSchemaProps[];
  anyOf?: JSONSchemaProps[];
  default?: JSON;
  definitions?: {
    [key: string]: unknown;
  };
  dependencies?: {
    [key: string]: unknown;
  };
  description?: string;
  enum?: JSON[];
  example?: JSON;
  exclusiveMaximum?: boolean;
  exclusiveMinimum?: boolean;
  externalDocs?: ExternalDocumentation;
  format?: string;
  id?: string;
  items?: JSONSchemaPropsOrArray;
  maxItems?: number;
  maxLength?: number;
  maxProperties?: number;
  maximum?: number;
  minItems?: number;
  minLength?: number;
  minProperties?: number;
  minimum?: number;
  multipleOf?: number;
  not?: JSONSchemaProps;
  nullable?: boolean;
  oneOf?: JSONSchemaProps[];
  pattern?: string;
  patternProperties?: {
    [key: string]: unknown;
  };
  properties?: {
    [key: string]: unknown;
  };
  required?: string[];
  title?: string;
  type?: string;
  uniqueItems?: boolean;
  "x-kubernetes-embedded-resource"?: boolean;
  "x-kubernetes-int-or-string"?: boolean;
  "x-kubernetes-list-map-keys"?: string[];
  "x-kubernetes-list-type"?: string;
  "x-kubernetes-map-type"?: string;
  "x-kubernetes-preserve-unknown-fields"?: boolean;
}
export type JSONSchemaPropsOrArray = any;
export type JSONSchemaPropsOrBool = any;
export type JSONSchemaPropsOrStringArray = any;
export interface ServiceReference {
  name: string;
  namespace: string;
  path?: string;
  port?: number;
}
export interface WebhookClientConfig {
  caBundle?: string;
  service?: ServiceReference;
  url?: string;
}
export interface WebhookConversion {
  clientConfig?: WebhookClientConfig;
  conversionReviewVersions: string[];
}
export type Quantity = string;
export interface APIGroup {
  apiVersion?: string;
  kind?: string;
  name: string;
  preferredVersion?: GroupVersionForDiscovery;
  serverAddressByClientCIDRs?: ServerAddressByClientCIDR[];
  versions: GroupVersionForDiscovery[];
}
export interface APIGroupList {
  apiVersion?: string;
  groups: APIGroup[];
  kind?: string;
}
export interface APIResource {
  categories?: string[];
  group?: string;
  kind: string;
  name: string;
  namespaced: boolean;
  shortNames?: string[];
  singularName: string;
  storageVersionHash?: string;
  verbs: string[];
  version?: string;
}
export interface APIResourceList {
  apiVersion?: string;
  groupVersion: string;
  kind?: string;
  resources: APIResource[];
}
export interface APIVersions {
  apiVersion?: string;
  kind?: string;
  serverAddressByClientCIDRs: ServerAddressByClientCIDR[];
  versions: string[];
}
export interface Condition {
  lastTransitionTime: Time;
  message: string;
  observedGeneration?: number;
  reason: string;
  status: string;
  type: string;
}
export interface DeleteOptions {
  apiVersion?: string;
  dryRun?: string[];
  gracePeriodSeconds?: number;
  kind?: string;
  orphanDependents?: boolean;
  preconditions?: Preconditions;
  propagationPolicy?: string;
}
export type FieldsV1 = {
  [key: string]: unknown;
};
export interface GroupVersionForDiscovery {
  groupVersion: string;
  version: string;
}
export interface LabelSelector {
  matchExpressions?: LabelSelectorRequirement[];
  matchLabels?: {
    [key: string]: unknown;
  };
}
export interface LabelSelectorRequirement {
  key: string;
  operator: string;
  values?: string[];
}
export interface ListMeta {
  continue?: string;
  remainingItemCount?: number;
  resourceVersion?: string;
  selfLink?: string;
}
export interface ManagedFieldsEntry {
  apiVersion?: string;
  fieldsType?: string;
  fieldsV1?: FieldsV1;
  manager?: string;
  operation?: string;
  subresource?: string;
  time?: Time;
}
export type MicroTime = string;
export interface ObjectMeta {
  annotations?: {
    [key: string]: unknown;
  };
  clusterName?: string;
  creationTimestamp?: Time;
  deletionGracePeriodSeconds?: number;
  deletionTimestamp?: Time;
  finalizers?: string[];
  generateName?: string;
  generation?: number;
  labels?: {
    [key: string]: unknown;
  };
  managedFields?: ManagedFieldsEntry[];
  name?: string;
  namespace?: string;
  ownerReferences?: OwnerReference[];
  resourceVersion?: string;
  selfLink?: string;
  uid?: string;
}
export interface OwnerReference {
  apiVersion: string;
  blockOwnerDeletion?: boolean;
  controller?: boolean;
  kind: string;
  name: string;
  uid: string;
}
export type Patch = {
  [key: string]: unknown;
};
export interface Preconditions {
  resourceVersion?: string;
  uid?: string;
}
export interface ServerAddressByClientCIDR {
  clientCIDR: string;
  serverAddress: string;
}
export interface Status {
  apiVersion?: string;
  code?: number;
  details?: StatusDetails;
  kind?: string;
  message?: string;
  metadata?: ListMeta;
  reason?: string;
  status?: string;
}
export interface StatusCause {
  field?: string;
  message?: string;
  reason?: string;
}
export interface StatusDetails {
  causes?: StatusCause[];
  group?: string;
  kind?: string;
  name?: string;
  retryAfterSeconds?: number;
  uid?: string;
}
export type Time = string;
export interface WatchEvent {
  object: RawExtension;
  type: string;
}
export type RawExtension = {
  [key: string]: unknown;
};
export type IntOrString = string;
export interface Info {
  buildDate: string;
  compiler: string;
  gitCommit: string;
  gitTreeState: string;
  gitVersion: string;
  goVersion: string;
  major: string;
  minor: string;
  platform: string;
}
export interface APIService {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: APIServiceSpec;
  status?: APIServiceStatus;
}
export interface APIServiceCondition {
  lastTransitionTime?: Time;
  message?: string;
  reason?: string;
  status: string;
  type: string;
}
export interface APIServiceList {
  apiVersion?: string;
  items: APIService[];
  kind?: string;
  metadata?: ListMeta;
}
export interface APIServiceSpec {
  caBundle?: string;
  group?: string;
  groupPriorityMinimum: number;
  insecureSkipTLSVerify?: boolean;
  service?: ServiceReference;
  version?: string;
  versionPriority: number;
}
export interface APIServiceStatus {
  conditions?: APIServiceCondition[];
}
export interface ServiceReference {
  name?: string;
  namespace?: string;
  port?: number;
}
export interface GetServiceAccountIssuerOpenIDConfigurationRequest {}
export interface GetCoreAPIVersionsRequest {}
export interface GetCoreV1APIResourcesRequest {}
export interface ListCoreV1ComponentStatusRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface ReadCoreV1ComponentStatusRequest {
  pretty?: string;
  name: string;
}
export interface ListCoreV1ConfigMapForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface ListCoreV1EndpointsForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface ListCoreV1EventForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface ListCoreV1LimitRangeForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface ListCoreV1NamespaceRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface CreateCoreV1NamespaceRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  body: Namespace;
}
export interface CreateCoreV1NamespacedBindingRequest {
  dryRun?: string;
  fieldManager?: string;
  pretty?: string;
  namespace: string;
  body: Binding;
}
export interface ListCoreV1NamespacedConfigMapRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateCoreV1NamespacedConfigMapRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: ConfigMap;
}
export interface DeleteCoreV1CollectionNamespacedConfigMapRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadCoreV1NamespacedConfigMapRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceCoreV1NamespacedConfigMapRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: ConfigMap;
}
export interface DeleteCoreV1NamespacedConfigMapRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchCoreV1NamespacedConfigMapRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ListCoreV1NamespacedEndpointsRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateCoreV1NamespacedEndpointsRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: Endpoints;
}
export interface DeleteCoreV1CollectionNamespacedEndpointsRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadCoreV1NamespacedEndpointsRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceCoreV1NamespacedEndpointsRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: Endpoints;
}
export interface DeleteCoreV1NamespacedEndpointsRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchCoreV1NamespacedEndpointsRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ListCoreV1NamespacedEventRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateCoreV1NamespacedEventRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: Event;
}
export interface DeleteCoreV1CollectionNamespacedEventRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadCoreV1NamespacedEventRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceCoreV1NamespacedEventRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: Event;
}
export interface DeleteCoreV1NamespacedEventRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchCoreV1NamespacedEventRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ListCoreV1NamespacedLimitRangeRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateCoreV1NamespacedLimitRangeRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: LimitRange;
}
export interface DeleteCoreV1CollectionNamespacedLimitRangeRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadCoreV1NamespacedLimitRangeRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceCoreV1NamespacedLimitRangeRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: LimitRange;
}
export interface DeleteCoreV1NamespacedLimitRangeRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchCoreV1NamespacedLimitRangeRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ListCoreV1NamespacedPersistentVolumeClaimRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateCoreV1NamespacedPersistentVolumeClaimRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: PersistentVolumeClaim;
}
export interface DeleteCoreV1CollectionNamespacedPersistentVolumeClaimRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadCoreV1NamespacedPersistentVolumeClaimRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceCoreV1NamespacedPersistentVolumeClaimRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: PersistentVolumeClaim;
}
export interface DeleteCoreV1NamespacedPersistentVolumeClaimRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchCoreV1NamespacedPersistentVolumeClaimRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ReadCoreV1NamespacedPersistentVolumeClaimStatusRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceCoreV1NamespacedPersistentVolumeClaimStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: PersistentVolumeClaim;
}
export interface PatchCoreV1NamespacedPersistentVolumeClaimStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ListCoreV1NamespacedPodRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateCoreV1NamespacedPodRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: Pod;
}
export interface DeleteCoreV1CollectionNamespacedPodRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadCoreV1NamespacedPodRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceCoreV1NamespacedPodRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: Pod;
}
export interface DeleteCoreV1NamespacedPodRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchCoreV1NamespacedPodRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ConnectCoreV1GetNamespacedPodAttachRequest {
  container?: string;
  stderr?: boolean;
  stdin?: boolean;
  stdout?: boolean;
  tty?: boolean;
  name: string;
  namespace: string;
}
export interface ConnectCoreV1PostNamespacedPodAttachRequest {
  container?: string;
  stderr?: boolean;
  stdin?: boolean;
  stdout?: boolean;
  tty?: boolean;
  name: string;
  namespace: string;
}
export interface CreateCoreV1NamespacedPodBindingRequest {
  dryRun?: string;
  fieldManager?: string;
  pretty?: string;
  name: string;
  namespace: string;
  body: Binding;
}
export interface CreateCoreV1NamespacedPodEvictionRequest {
  dryRun?: string;
  fieldManager?: string;
  pretty?: string;
  name: string;
  namespace: string;
  body: Eviction;
}
export interface ConnectCoreV1GetNamespacedPodExecRequest {
  command?: string;
  container?: string;
  stderr?: boolean;
  stdin?: boolean;
  stdout?: boolean;
  tty?: boolean;
  name: string;
  namespace: string;
}
export interface ConnectCoreV1PostNamespacedPodExecRequest {
  command?: string;
  container?: string;
  stderr?: boolean;
  stdin?: boolean;
  stdout?: boolean;
  tty?: boolean;
  name: string;
  namespace: string;
}
export interface ReadCoreV1NamespacedPodLogRequest {
  container?: string;
  follow?: boolean;
  insecureSkipTLSVerifyBackend?: boolean;
  limitBytes?: number;
  pretty?: string;
  previous?: boolean;
  sinceSeconds?: number;
  tailLines?: number;
  timestamps?: boolean;
  name: string;
  namespace: string;
}
export interface ConnectCoreV1GetNamespacedPodPortforwardRequest {
  ports?: number;
  name: string;
  namespace: string;
}
export interface ConnectCoreV1PostNamespacedPodPortforwardRequest {
  ports?: number;
  name: string;
  namespace: string;
}
export interface ConnectCoreV1GetNamespacedPodProxyRequest {
  path?: string;
  name: string;
  namespace: string;
}
export interface ConnectCoreV1PostNamespacedPodProxyRequest {
  path?: string;
  name: string;
  namespace: string;
}
export interface ConnectCoreV1PutNamespacedPodProxyRequest {
  path?: string;
  name: string;
  namespace: string;
}
export interface ConnectCoreV1DeleteNamespacedPodProxyRequest {
  path?: string;
  name: string;
  namespace: string;
}
export interface ConnectCoreV1OptionsNamespacedPodProxyRequest {
  path?: string;
  name: string;
  namespace: string;
}
export interface ConnectCoreV1HeadNamespacedPodProxyRequest {
  path?: string;
  name: string;
  namespace: string;
}
export interface ConnectCoreV1PatchNamespacedPodProxyRequest {
  path?: string;
  name: string;
  namespace: string;
}
export interface ConnectCoreV1GetNamespacedPodProxyWithPathRequest {
  path?: string;
  name: string;
  namespace: string;
  path: string;
}
export interface ConnectCoreV1PostNamespacedPodProxyWithPathRequest {
  path?: string;
  name: string;
  namespace: string;
  path: string;
}
export interface ConnectCoreV1PutNamespacedPodProxyWithPathRequest {
  path?: string;
  name: string;
  namespace: string;
  path: string;
}
export interface ConnectCoreV1DeleteNamespacedPodProxyWithPathRequest {
  path?: string;
  name: string;
  namespace: string;
  path: string;
}
export interface ConnectCoreV1OptionsNamespacedPodProxyWithPathRequest {
  path?: string;
  name: string;
  namespace: string;
  path: string;
}
export interface ConnectCoreV1HeadNamespacedPodProxyWithPathRequest {
  path?: string;
  name: string;
  namespace: string;
  path: string;
}
export interface ConnectCoreV1PatchNamespacedPodProxyWithPathRequest {
  path?: string;
  name: string;
  namespace: string;
  path: string;
}
export interface ReadCoreV1NamespacedPodStatusRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceCoreV1NamespacedPodStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: Pod;
}
export interface PatchCoreV1NamespacedPodStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ListCoreV1NamespacedPodTemplateRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateCoreV1NamespacedPodTemplateRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: PodTemplate;
}
export interface DeleteCoreV1CollectionNamespacedPodTemplateRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadCoreV1NamespacedPodTemplateRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceCoreV1NamespacedPodTemplateRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: PodTemplate;
}
export interface DeleteCoreV1NamespacedPodTemplateRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchCoreV1NamespacedPodTemplateRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ListCoreV1NamespacedReplicationControllerRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateCoreV1NamespacedReplicationControllerRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: ReplicationController;
}
export interface DeleteCoreV1CollectionNamespacedReplicationControllerRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadCoreV1NamespacedReplicationControllerRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceCoreV1NamespacedReplicationControllerRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: ReplicationController;
}
export interface DeleteCoreV1NamespacedReplicationControllerRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchCoreV1NamespacedReplicationControllerRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ReadCoreV1NamespacedReplicationControllerScaleRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceCoreV1NamespacedReplicationControllerScaleRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: Scale;
}
export interface PatchCoreV1NamespacedReplicationControllerScaleRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ReadCoreV1NamespacedReplicationControllerStatusRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceCoreV1NamespacedReplicationControllerStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: ReplicationController;
}
export interface PatchCoreV1NamespacedReplicationControllerStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ListCoreV1NamespacedResourceQuotaRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateCoreV1NamespacedResourceQuotaRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: ResourceQuota;
}
export interface DeleteCoreV1CollectionNamespacedResourceQuotaRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadCoreV1NamespacedResourceQuotaRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceCoreV1NamespacedResourceQuotaRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: ResourceQuota;
}
export interface DeleteCoreV1NamespacedResourceQuotaRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchCoreV1NamespacedResourceQuotaRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ReadCoreV1NamespacedResourceQuotaStatusRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceCoreV1NamespacedResourceQuotaStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: ResourceQuota;
}
export interface PatchCoreV1NamespacedResourceQuotaStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ListCoreV1NamespacedSecretRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateCoreV1NamespacedSecretRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: Secret;
}
export interface DeleteCoreV1CollectionNamespacedSecretRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadCoreV1NamespacedSecretRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceCoreV1NamespacedSecretRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: Secret;
}
export interface DeleteCoreV1NamespacedSecretRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchCoreV1NamespacedSecretRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ListCoreV1NamespacedServiceAccountRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateCoreV1NamespacedServiceAccountRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: ServiceAccount;
}
export interface DeleteCoreV1CollectionNamespacedServiceAccountRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadCoreV1NamespacedServiceAccountRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceCoreV1NamespacedServiceAccountRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: ServiceAccount;
}
export interface DeleteCoreV1NamespacedServiceAccountRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchCoreV1NamespacedServiceAccountRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface CreateCoreV1NamespacedServiceAccountTokenRequest {
  dryRun?: string;
  fieldManager?: string;
  pretty?: string;
  name: string;
  namespace: string;
  body: TokenRequest;
}
export interface ListCoreV1NamespacedServiceRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateCoreV1NamespacedServiceRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: Service;
}
export interface ReadCoreV1NamespacedServiceRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceCoreV1NamespacedServiceRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: Service;
}
export interface DeleteCoreV1NamespacedServiceRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchCoreV1NamespacedServiceRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ConnectCoreV1GetNamespacedServiceProxyRequest {
  path?: string;
  name: string;
  namespace: string;
}
export interface ConnectCoreV1PostNamespacedServiceProxyRequest {
  path?: string;
  name: string;
  namespace: string;
}
export interface ConnectCoreV1PutNamespacedServiceProxyRequest {
  path?: string;
  name: string;
  namespace: string;
}
export interface ConnectCoreV1DeleteNamespacedServiceProxyRequest {
  path?: string;
  name: string;
  namespace: string;
}
export interface ConnectCoreV1OptionsNamespacedServiceProxyRequest {
  path?: string;
  name: string;
  namespace: string;
}
export interface ConnectCoreV1HeadNamespacedServiceProxyRequest {
  path?: string;
  name: string;
  namespace: string;
}
export interface ConnectCoreV1PatchNamespacedServiceProxyRequest {
  path?: string;
  name: string;
  namespace: string;
}
export interface ConnectCoreV1GetNamespacedServiceProxyWithPathRequest {
  path?: string;
  name: string;
  namespace: string;
  path: string;
}
export interface ConnectCoreV1PostNamespacedServiceProxyWithPathRequest {
  path?: string;
  name: string;
  namespace: string;
  path: string;
}
export interface ConnectCoreV1PutNamespacedServiceProxyWithPathRequest {
  path?: string;
  name: string;
  namespace: string;
  path: string;
}
export interface ConnectCoreV1DeleteNamespacedServiceProxyWithPathRequest {
  path?: string;
  name: string;
  namespace: string;
  path: string;
}
export interface ConnectCoreV1OptionsNamespacedServiceProxyWithPathRequest {
  path?: string;
  name: string;
  namespace: string;
  path: string;
}
export interface ConnectCoreV1HeadNamespacedServiceProxyWithPathRequest {
  path?: string;
  name: string;
  namespace: string;
  path: string;
}
export interface ConnectCoreV1PatchNamespacedServiceProxyWithPathRequest {
  path?: string;
  name: string;
  namespace: string;
  path: string;
}
export interface ReadCoreV1NamespacedServiceStatusRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceCoreV1NamespacedServiceStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: Service;
}
export interface PatchCoreV1NamespacedServiceStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ReadCoreV1NamespaceRequest {
  pretty?: string;
  name: string;
}
export interface ReplaceCoreV1NamespaceRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  body: Namespace;
}
export interface DeleteCoreV1NamespaceRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
}
export interface PatchCoreV1NamespaceRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  body: Patch;
}
export interface ReplaceCoreV1NamespaceFinalizeRequest {
  dryRun?: string;
  fieldManager?: string;
  pretty?: string;
  name: string;
  body: Namespace;
}
export interface ReadCoreV1NamespaceStatusRequest {
  pretty?: string;
  name: string;
}
export interface ReplaceCoreV1NamespaceStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  body: Namespace;
}
export interface PatchCoreV1NamespaceStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  body: Patch;
}
export interface ListCoreV1NodeRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface CreateCoreV1NodeRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  body: Node;
}
export interface DeleteCoreV1CollectionNodeRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
}
export interface ReadCoreV1NodeRequest {
  pretty?: string;
  name: string;
}
export interface ReplaceCoreV1NodeRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  body: Node;
}
export interface DeleteCoreV1NodeRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
}
export interface PatchCoreV1NodeRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  body: Patch;
}
export interface ConnectCoreV1GetNodeProxyRequest {
  path?: string;
  name: string;
}
export interface ConnectCoreV1PostNodeProxyRequest {
  path?: string;
  name: string;
}
export interface ConnectCoreV1PutNodeProxyRequest {
  path?: string;
  name: string;
}
export interface ConnectCoreV1DeleteNodeProxyRequest {
  path?: string;
  name: string;
}
export interface ConnectCoreV1OptionsNodeProxyRequest {
  path?: string;
  name: string;
}
export interface ConnectCoreV1HeadNodeProxyRequest {
  path?: string;
  name: string;
}
export interface ConnectCoreV1PatchNodeProxyRequest {
  path?: string;
  name: string;
}
export interface ConnectCoreV1GetNodeProxyWithPathRequest {
  path?: string;
  name: string;
  path: string;
}
export interface ConnectCoreV1PostNodeProxyWithPathRequest {
  path?: string;
  name: string;
  path: string;
}
export interface ConnectCoreV1PutNodeProxyWithPathRequest {
  path?: string;
  name: string;
  path: string;
}
export interface ConnectCoreV1DeleteNodeProxyWithPathRequest {
  path?: string;
  name: string;
  path: string;
}
export interface ConnectCoreV1OptionsNodeProxyWithPathRequest {
  path?: string;
  name: string;
  path: string;
}
export interface ConnectCoreV1HeadNodeProxyWithPathRequest {
  path?: string;
  name: string;
  path: string;
}
export interface ConnectCoreV1PatchNodeProxyWithPathRequest {
  path?: string;
  name: string;
  path: string;
}
export interface ReadCoreV1NodeStatusRequest {
  pretty?: string;
  name: string;
}
export interface ReplaceCoreV1NodeStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  body: Node;
}
export interface PatchCoreV1NodeStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  body: Patch;
}
export interface ListCoreV1PersistentVolumeClaimForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface ListCoreV1PersistentVolumeRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface CreateCoreV1PersistentVolumeRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  body: PersistentVolume;
}
export interface DeleteCoreV1CollectionPersistentVolumeRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
}
export interface ReadCoreV1PersistentVolumeRequest {
  pretty?: string;
  name: string;
}
export interface ReplaceCoreV1PersistentVolumeRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  body: PersistentVolume;
}
export interface DeleteCoreV1PersistentVolumeRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
}
export interface PatchCoreV1PersistentVolumeRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  body: Patch;
}
export interface ReadCoreV1PersistentVolumeStatusRequest {
  pretty?: string;
  name: string;
}
export interface ReplaceCoreV1PersistentVolumeStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  body: PersistentVolume;
}
export interface PatchCoreV1PersistentVolumeStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  body: Patch;
}
export interface ListCoreV1PodForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface ListCoreV1PodTemplateForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface ListCoreV1ReplicationControllerForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface ListCoreV1ResourceQuotaForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface ListCoreV1SecretForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface ListCoreV1ServiceAccountForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface ListCoreV1ServiceForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchCoreV1ConfigMapListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchCoreV1EndpointsListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchCoreV1EventListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchCoreV1LimitRangeListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchCoreV1NamespaceListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchCoreV1NamespacedConfigMapListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchCoreV1NamespacedConfigMapRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface WatchCoreV1NamespacedEndpointsListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchCoreV1NamespacedEndpointsRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface WatchCoreV1NamespacedEventListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchCoreV1NamespacedEventRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface WatchCoreV1NamespacedLimitRangeListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchCoreV1NamespacedLimitRangeRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface WatchCoreV1NamespacedPersistentVolumeClaimListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchCoreV1NamespacedPersistentVolumeClaimRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface WatchCoreV1NamespacedPodListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchCoreV1NamespacedPodRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface WatchCoreV1NamespacedPodTemplateListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchCoreV1NamespacedPodTemplateRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface WatchCoreV1NamespacedReplicationControllerListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchCoreV1NamespacedReplicationControllerRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface WatchCoreV1NamespacedResourceQuotaListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchCoreV1NamespacedResourceQuotaRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface WatchCoreV1NamespacedSecretListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchCoreV1NamespacedSecretRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface WatchCoreV1NamespacedServiceAccountListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchCoreV1NamespacedServiceAccountRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface WatchCoreV1NamespacedServiceListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchCoreV1NamespacedServiceRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface WatchCoreV1NamespaceRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
}
export interface WatchCoreV1NodeListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchCoreV1NodeRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
}
export interface WatchCoreV1PersistentVolumeClaimListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchCoreV1PersistentVolumeListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchCoreV1PersistentVolumeRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
}
export interface WatchCoreV1PodListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchCoreV1PodTemplateListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchCoreV1ReplicationControllerListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchCoreV1ResourceQuotaListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchCoreV1SecretListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchCoreV1ServiceAccountListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchCoreV1ServiceListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface GetAPIVersionsRequest {}
export interface GetAdmissionregistrationAPIGroupRequest {}
export interface GetAdmissionregistrationV1APIResourcesRequest {}
export interface ListAdmissionregistrationV1MutatingWebhookConfigurationRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface CreateAdmissionregistrationV1MutatingWebhookConfigurationRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  body: MutatingWebhookConfiguration;
}
export interface DeleteAdmissionregistrationV1CollectionMutatingWebhookConfigurationRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
}
export interface ReadAdmissionregistrationV1MutatingWebhookConfigurationRequest {
  pretty?: string;
  name: string;
}
export interface ReplaceAdmissionregistrationV1MutatingWebhookConfigurationRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  body: MutatingWebhookConfiguration;
}
export interface DeleteAdmissionregistrationV1MutatingWebhookConfigurationRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
}
export interface PatchAdmissionregistrationV1MutatingWebhookConfigurationRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  body: Patch;
}
export interface ListAdmissionregistrationV1ValidatingWebhookConfigurationRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface CreateAdmissionregistrationV1ValidatingWebhookConfigurationRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  body: ValidatingWebhookConfiguration;
}
export interface DeleteAdmissionregistrationV1CollectionValidatingWebhookConfigurationRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
}
export interface ReadAdmissionregistrationV1ValidatingWebhookConfigurationRequest {
  pretty?: string;
  name: string;
}
export interface ReplaceAdmissionregistrationV1ValidatingWebhookConfigurationRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  body: ValidatingWebhookConfiguration;
}
export interface DeleteAdmissionregistrationV1ValidatingWebhookConfigurationRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
}
export interface PatchAdmissionregistrationV1ValidatingWebhookConfigurationRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  body: Patch;
}
export interface WatchAdmissionregistrationV1MutatingWebhookConfigurationListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchAdmissionregistrationV1MutatingWebhookConfigurationRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
}
export interface WatchAdmissionregistrationV1ValidatingWebhookConfigurationListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchAdmissionregistrationV1ValidatingWebhookConfigurationRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
}
export interface GetApiextensionsAPIGroupRequest {}
export interface GetApiextensionsV1APIResourcesRequest {}
export interface ListApiextensionsV1CustomResourceDefinitionRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface CreateApiextensionsV1CustomResourceDefinitionRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  body: CustomResourceDefinition;
}
export interface DeleteApiextensionsV1CollectionCustomResourceDefinitionRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
}
export interface ReadApiextensionsV1CustomResourceDefinitionRequest {
  pretty?: string;
  name: string;
}
export interface ReplaceApiextensionsV1CustomResourceDefinitionRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  body: CustomResourceDefinition;
}
export interface DeleteApiextensionsV1CustomResourceDefinitionRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
}
export interface PatchApiextensionsV1CustomResourceDefinitionRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  body: Patch;
}
export interface ReadApiextensionsV1CustomResourceDefinitionStatusRequest {
  pretty?: string;
  name: string;
}
export interface ReplaceApiextensionsV1CustomResourceDefinitionStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  body: CustomResourceDefinition;
}
export interface PatchApiextensionsV1CustomResourceDefinitionStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  body: Patch;
}
export interface WatchApiextensionsV1CustomResourceDefinitionListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchApiextensionsV1CustomResourceDefinitionRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
}
export interface GetApiregistrationAPIGroupRequest {}
export interface GetApiregistrationV1APIResourcesRequest {}
export interface ListApiregistrationV1APIServiceRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface CreateApiregistrationV1APIServiceRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  body: APIService;
}
export interface DeleteApiregistrationV1CollectionAPIServiceRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
}
export interface ReadApiregistrationV1APIServiceRequest {
  pretty?: string;
  name: string;
}
export interface ReplaceApiregistrationV1APIServiceRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  body: APIService;
}
export interface DeleteApiregistrationV1APIServiceRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
}
export interface PatchApiregistrationV1APIServiceRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  body: Patch;
}
export interface ReadApiregistrationV1APIServiceStatusRequest {
  pretty?: string;
  name: string;
}
export interface ReplaceApiregistrationV1APIServiceStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  body: APIService;
}
export interface PatchApiregistrationV1APIServiceStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  body: Patch;
}
export interface WatchApiregistrationV1APIServiceListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchApiregistrationV1APIServiceRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
}
export interface GetAppsAPIGroupRequest {}
export interface GetAppsV1APIResourcesRequest {}
export interface ListAppsV1ControllerRevisionForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface ListAppsV1DaemonSetForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface ListAppsV1DeploymentForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface ListAppsV1NamespacedControllerRevisionRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateAppsV1NamespacedControllerRevisionRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: ControllerRevision;
}
export interface DeleteAppsV1CollectionNamespacedControllerRevisionRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadAppsV1NamespacedControllerRevisionRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceAppsV1NamespacedControllerRevisionRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: ControllerRevision;
}
export interface DeleteAppsV1NamespacedControllerRevisionRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchAppsV1NamespacedControllerRevisionRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ListAppsV1NamespacedDaemonSetRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateAppsV1NamespacedDaemonSetRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: DaemonSet;
}
export interface DeleteAppsV1CollectionNamespacedDaemonSetRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadAppsV1NamespacedDaemonSetRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceAppsV1NamespacedDaemonSetRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: DaemonSet;
}
export interface DeleteAppsV1NamespacedDaemonSetRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchAppsV1NamespacedDaemonSetRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ReadAppsV1NamespacedDaemonSetStatusRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceAppsV1NamespacedDaemonSetStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: DaemonSet;
}
export interface PatchAppsV1NamespacedDaemonSetStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ListAppsV1NamespacedDeploymentRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateAppsV1NamespacedDeploymentRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: Deployment;
}
export interface DeleteAppsV1CollectionNamespacedDeploymentRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadAppsV1NamespacedDeploymentRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceAppsV1NamespacedDeploymentRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: Deployment;
}
export interface DeleteAppsV1NamespacedDeploymentRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchAppsV1NamespacedDeploymentRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ReadAppsV1NamespacedDeploymentScaleRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceAppsV1NamespacedDeploymentScaleRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: Scale;
}
export interface PatchAppsV1NamespacedDeploymentScaleRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ReadAppsV1NamespacedDeploymentStatusRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceAppsV1NamespacedDeploymentStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: Deployment;
}
export interface PatchAppsV1NamespacedDeploymentStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ListAppsV1NamespacedReplicaSetRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateAppsV1NamespacedReplicaSetRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: ReplicaSet;
}
export interface DeleteAppsV1CollectionNamespacedReplicaSetRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadAppsV1NamespacedReplicaSetRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceAppsV1NamespacedReplicaSetRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: ReplicaSet;
}
export interface DeleteAppsV1NamespacedReplicaSetRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchAppsV1NamespacedReplicaSetRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ReadAppsV1NamespacedReplicaSetScaleRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceAppsV1NamespacedReplicaSetScaleRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: Scale;
}
export interface PatchAppsV1NamespacedReplicaSetScaleRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ReadAppsV1NamespacedReplicaSetStatusRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceAppsV1NamespacedReplicaSetStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: ReplicaSet;
}
export interface PatchAppsV1NamespacedReplicaSetStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ListAppsV1NamespacedStatefulSetRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateAppsV1NamespacedStatefulSetRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: StatefulSet;
}
export interface DeleteAppsV1CollectionNamespacedStatefulSetRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadAppsV1NamespacedStatefulSetRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceAppsV1NamespacedStatefulSetRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: StatefulSet;
}
export interface DeleteAppsV1NamespacedStatefulSetRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchAppsV1NamespacedStatefulSetRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ReadAppsV1NamespacedStatefulSetScaleRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceAppsV1NamespacedStatefulSetScaleRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: Scale;
}
export interface PatchAppsV1NamespacedStatefulSetScaleRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ReadAppsV1NamespacedStatefulSetStatusRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceAppsV1NamespacedStatefulSetStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: StatefulSet;
}
export interface PatchAppsV1NamespacedStatefulSetStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ListAppsV1ReplicaSetForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface ListAppsV1StatefulSetForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchAppsV1ControllerRevisionListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchAppsV1DaemonSetListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchAppsV1DeploymentListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchAppsV1NamespacedControllerRevisionListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchAppsV1NamespacedControllerRevisionRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface WatchAppsV1NamespacedDaemonSetListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchAppsV1NamespacedDaemonSetRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface WatchAppsV1NamespacedDeploymentListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchAppsV1NamespacedDeploymentRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface WatchAppsV1NamespacedReplicaSetListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchAppsV1NamespacedReplicaSetRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface WatchAppsV1NamespacedStatefulSetListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchAppsV1NamespacedStatefulSetRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface WatchAppsV1ReplicaSetListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchAppsV1StatefulSetListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface GetAuthenticationAPIGroupRequest {}
export interface GetAuthenticationV1APIResourcesRequest {}
export interface CreateAuthenticationV1TokenReviewRequest {
  dryRun?: string;
  fieldManager?: string;
  pretty?: string;
  body: TokenReview;
}
export interface GetAuthorizationAPIGroupRequest {}
export interface GetAuthorizationV1APIResourcesRequest {}
export interface CreateAuthorizationV1NamespacedLocalSubjectAccessReviewRequest {
  dryRun?: string;
  fieldManager?: string;
  pretty?: string;
  namespace: string;
  body: LocalSubjectAccessReview;
}
export interface CreateAuthorizationV1SelfSubjectAccessReviewRequest {
  dryRun?: string;
  fieldManager?: string;
  pretty?: string;
  body: SelfSubjectAccessReview;
}
export interface CreateAuthorizationV1SelfSubjectRulesReviewRequest {
  dryRun?: string;
  fieldManager?: string;
  pretty?: string;
  body: SelfSubjectRulesReview;
}
export interface CreateAuthorizationV1SubjectAccessReviewRequest {
  dryRun?: string;
  fieldManager?: string;
  pretty?: string;
  body: SubjectAccessReview;
}
export interface GetAutoscalingAPIGroupRequest {}
export interface GetAutoscalingV1APIResourcesRequest {}
export interface ListAutoscalingV1HorizontalPodAutoscalerForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface ListAutoscalingV1NamespacedHorizontalPodAutoscalerRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateAutoscalingV1NamespacedHorizontalPodAutoscalerRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: HorizontalPodAutoscaler;
}
export interface DeleteAutoscalingV1CollectionNamespacedHorizontalPodAutoscalerRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadAutoscalingV1NamespacedHorizontalPodAutoscalerRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceAutoscalingV1NamespacedHorizontalPodAutoscalerRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: HorizontalPodAutoscaler;
}
export interface DeleteAutoscalingV1NamespacedHorizontalPodAutoscalerRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchAutoscalingV1NamespacedHorizontalPodAutoscalerRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ReadAutoscalingV1NamespacedHorizontalPodAutoscalerStatusRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceAutoscalingV1NamespacedHorizontalPodAutoscalerStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: HorizontalPodAutoscaler;
}
export interface PatchAutoscalingV1NamespacedHorizontalPodAutoscalerStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface WatchAutoscalingV1HorizontalPodAutoscalerListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchAutoscalingV1NamespacedHorizontalPodAutoscalerListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchAutoscalingV1NamespacedHorizontalPodAutoscalerRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface GetAutoscalingV2beta1APIResourcesRequest {}
export interface ListAutoscalingV2beta1HorizontalPodAutoscalerForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface ListAutoscalingV2beta1NamespacedHorizontalPodAutoscalerRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateAutoscalingV2beta1NamespacedHorizontalPodAutoscalerRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: HorizontalPodAutoscaler;
}
export interface DeleteAutoscalingV2beta1CollectionNamespacedHorizontalPodAutoscalerRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadAutoscalingV2beta1NamespacedHorizontalPodAutoscalerRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceAutoscalingV2beta1NamespacedHorizontalPodAutoscalerRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: HorizontalPodAutoscaler;
}
export interface DeleteAutoscalingV2beta1NamespacedHorizontalPodAutoscalerRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchAutoscalingV2beta1NamespacedHorizontalPodAutoscalerRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ReadAutoscalingV2beta1NamespacedHorizontalPodAutoscalerStatusRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceAutoscalingV2beta1NamespacedHorizontalPodAutoscalerStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: HorizontalPodAutoscaler;
}
export interface PatchAutoscalingV2beta1NamespacedHorizontalPodAutoscalerStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface WatchAutoscalingV2beta1HorizontalPodAutoscalerListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchAutoscalingV2beta1NamespacedHorizontalPodAutoscalerListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchAutoscalingV2beta1NamespacedHorizontalPodAutoscalerRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface GetAutoscalingV2beta2APIResourcesRequest {}
export interface ListAutoscalingV2beta2HorizontalPodAutoscalerForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface ListAutoscalingV2beta2NamespacedHorizontalPodAutoscalerRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateAutoscalingV2beta2NamespacedHorizontalPodAutoscalerRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: HorizontalPodAutoscaler;
}
export interface DeleteAutoscalingV2beta2CollectionNamespacedHorizontalPodAutoscalerRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadAutoscalingV2beta2NamespacedHorizontalPodAutoscalerRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceAutoscalingV2beta2NamespacedHorizontalPodAutoscalerRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: HorizontalPodAutoscaler;
}
export interface DeleteAutoscalingV2beta2NamespacedHorizontalPodAutoscalerRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchAutoscalingV2beta2NamespacedHorizontalPodAutoscalerRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ReadAutoscalingV2beta2NamespacedHorizontalPodAutoscalerStatusRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceAutoscalingV2beta2NamespacedHorizontalPodAutoscalerStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: HorizontalPodAutoscaler;
}
export interface PatchAutoscalingV2beta2NamespacedHorizontalPodAutoscalerStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface WatchAutoscalingV2beta2HorizontalPodAutoscalerListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchAutoscalingV2beta2NamespacedHorizontalPodAutoscalerListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchAutoscalingV2beta2NamespacedHorizontalPodAutoscalerRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface GetBatchAPIGroupRequest {}
export interface GetBatchV1APIResourcesRequest {}
export interface ListBatchV1CronJobForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface ListBatchV1JobForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface ListBatchV1NamespacedCronJobRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateBatchV1NamespacedCronJobRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: CronJob;
}
export interface DeleteBatchV1CollectionNamespacedCronJobRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadBatchV1NamespacedCronJobRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceBatchV1NamespacedCronJobRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: CronJob;
}
export interface DeleteBatchV1NamespacedCronJobRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchBatchV1NamespacedCronJobRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ReadBatchV1NamespacedCronJobStatusRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceBatchV1NamespacedCronJobStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: CronJob;
}
export interface PatchBatchV1NamespacedCronJobStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ListBatchV1NamespacedJobRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateBatchV1NamespacedJobRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: Job;
}
export interface DeleteBatchV1CollectionNamespacedJobRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadBatchV1NamespacedJobRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceBatchV1NamespacedJobRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: Job;
}
export interface DeleteBatchV1NamespacedJobRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchBatchV1NamespacedJobRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ReadBatchV1NamespacedJobStatusRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceBatchV1NamespacedJobStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: Job;
}
export interface PatchBatchV1NamespacedJobStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface WatchBatchV1CronJobListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchBatchV1JobListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchBatchV1NamespacedCronJobListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchBatchV1NamespacedCronJobRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface WatchBatchV1NamespacedJobListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchBatchV1NamespacedJobRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface GetBatchV1beta1APIResourcesRequest {}
export interface ListBatchV1beta1CronJobForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface ListBatchV1beta1NamespacedCronJobRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateBatchV1beta1NamespacedCronJobRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: CronJob;
}
export interface DeleteBatchV1beta1CollectionNamespacedCronJobRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadBatchV1beta1NamespacedCronJobRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceBatchV1beta1NamespacedCronJobRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: CronJob;
}
export interface DeleteBatchV1beta1NamespacedCronJobRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchBatchV1beta1NamespacedCronJobRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ReadBatchV1beta1NamespacedCronJobStatusRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceBatchV1beta1NamespacedCronJobStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: CronJob;
}
export interface PatchBatchV1beta1NamespacedCronJobStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface WatchBatchV1beta1CronJobListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchBatchV1beta1NamespacedCronJobListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchBatchV1beta1NamespacedCronJobRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface GetCertificatesAPIGroupRequest {}
export interface GetCertificatesV1APIResourcesRequest {}
export interface ListCertificatesV1CertificateSigningRequestRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface CreateCertificatesV1CertificateSigningRequestRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  body: CertificateSigningRequest;
}
export interface DeleteCertificatesV1CollectionCertificateSigningRequestRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
}
export interface ReadCertificatesV1CertificateSigningRequestRequest {
  pretty?: string;
  name: string;
}
export interface ReplaceCertificatesV1CertificateSigningRequestRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  body: CertificateSigningRequest;
}
export interface DeleteCertificatesV1CertificateSigningRequestRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
}
export interface PatchCertificatesV1CertificateSigningRequestRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  body: Patch;
}
export interface ReadCertificatesV1CertificateSigningRequestApprovalRequest {
  pretty?: string;
  name: string;
}
export interface ReplaceCertificatesV1CertificateSigningRequestApprovalRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  body: CertificateSigningRequest;
}
export interface PatchCertificatesV1CertificateSigningRequestApprovalRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  body: Patch;
}
export interface ReadCertificatesV1CertificateSigningRequestStatusRequest {
  pretty?: string;
  name: string;
}
export interface ReplaceCertificatesV1CertificateSigningRequestStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  body: CertificateSigningRequest;
}
export interface PatchCertificatesV1CertificateSigningRequestStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  body: Patch;
}
export interface WatchCertificatesV1CertificateSigningRequestListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchCertificatesV1CertificateSigningRequestRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
}
export interface GetCoordinationAPIGroupRequest {}
export interface GetCoordinationV1APIResourcesRequest {}
export interface ListCoordinationV1LeaseForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface ListCoordinationV1NamespacedLeaseRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateCoordinationV1NamespacedLeaseRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: Lease;
}
export interface DeleteCoordinationV1CollectionNamespacedLeaseRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadCoordinationV1NamespacedLeaseRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceCoordinationV1NamespacedLeaseRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: Lease;
}
export interface DeleteCoordinationV1NamespacedLeaseRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchCoordinationV1NamespacedLeaseRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface WatchCoordinationV1LeaseListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchCoordinationV1NamespacedLeaseListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchCoordinationV1NamespacedLeaseRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface GetDiscoveryAPIGroupRequest {}
export interface GetDiscoveryV1APIResourcesRequest {}
export interface ListDiscoveryV1EndpointSliceForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface ListDiscoveryV1NamespacedEndpointSliceRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateDiscoveryV1NamespacedEndpointSliceRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: EndpointSlice;
}
export interface DeleteDiscoveryV1CollectionNamespacedEndpointSliceRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadDiscoveryV1NamespacedEndpointSliceRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceDiscoveryV1NamespacedEndpointSliceRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: EndpointSlice;
}
export interface DeleteDiscoveryV1NamespacedEndpointSliceRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchDiscoveryV1NamespacedEndpointSliceRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface WatchDiscoveryV1EndpointSliceListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchDiscoveryV1NamespacedEndpointSliceListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchDiscoveryV1NamespacedEndpointSliceRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface GetDiscoveryV1beta1APIResourcesRequest {}
export interface ListDiscoveryV1beta1EndpointSliceForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface ListDiscoveryV1beta1NamespacedEndpointSliceRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateDiscoveryV1beta1NamespacedEndpointSliceRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: EndpointSlice;
}
export interface DeleteDiscoveryV1beta1CollectionNamespacedEndpointSliceRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadDiscoveryV1beta1NamespacedEndpointSliceRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceDiscoveryV1beta1NamespacedEndpointSliceRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: EndpointSlice;
}
export interface DeleteDiscoveryV1beta1NamespacedEndpointSliceRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchDiscoveryV1beta1NamespacedEndpointSliceRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface WatchDiscoveryV1beta1EndpointSliceListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchDiscoveryV1beta1NamespacedEndpointSliceListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchDiscoveryV1beta1NamespacedEndpointSliceRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface GetEventsAPIGroupRequest {}
export interface GetEventsV1APIResourcesRequest {}
export interface ListEventsV1EventForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface ListEventsV1NamespacedEventRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateEventsV1NamespacedEventRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: Event;
}
export interface DeleteEventsV1CollectionNamespacedEventRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadEventsV1NamespacedEventRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceEventsV1NamespacedEventRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: Event;
}
export interface DeleteEventsV1NamespacedEventRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchEventsV1NamespacedEventRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface WatchEventsV1EventListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchEventsV1NamespacedEventListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchEventsV1NamespacedEventRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface GetEventsV1beta1APIResourcesRequest {}
export interface ListEventsV1beta1EventForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface ListEventsV1beta1NamespacedEventRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateEventsV1beta1NamespacedEventRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: Event;
}
export interface DeleteEventsV1beta1CollectionNamespacedEventRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadEventsV1beta1NamespacedEventRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceEventsV1beta1NamespacedEventRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: Event;
}
export interface DeleteEventsV1beta1NamespacedEventRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchEventsV1beta1NamespacedEventRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface WatchEventsV1beta1EventListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchEventsV1beta1NamespacedEventListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchEventsV1beta1NamespacedEventRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface GetFlowcontrolApiserverAPIGroupRequest {}
export interface GetFlowcontrolApiserverV1beta1APIResourcesRequest {}
export interface ListFlowcontrolApiserverV1beta1FlowSchemaRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface CreateFlowcontrolApiserverV1beta1FlowSchemaRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  body: FlowSchema;
}
export interface DeleteFlowcontrolApiserverV1beta1CollectionFlowSchemaRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
}
export interface ReadFlowcontrolApiserverV1beta1FlowSchemaRequest {
  pretty?: string;
  name: string;
}
export interface ReplaceFlowcontrolApiserverV1beta1FlowSchemaRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  body: FlowSchema;
}
export interface DeleteFlowcontrolApiserverV1beta1FlowSchemaRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
}
export interface PatchFlowcontrolApiserverV1beta1FlowSchemaRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  body: Patch;
}
export interface ReadFlowcontrolApiserverV1beta1FlowSchemaStatusRequest {
  pretty?: string;
  name: string;
}
export interface ReplaceFlowcontrolApiserverV1beta1FlowSchemaStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  body: FlowSchema;
}
export interface PatchFlowcontrolApiserverV1beta1FlowSchemaStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  body: Patch;
}
export interface ListFlowcontrolApiserverV1beta1PriorityLevelConfigurationRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface CreateFlowcontrolApiserverV1beta1PriorityLevelConfigurationRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  body: PriorityLevelConfiguration;
}
export interface DeleteFlowcontrolApiserverV1beta1CollectionPriorityLevelConfigurationRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
}
export interface ReadFlowcontrolApiserverV1beta1PriorityLevelConfigurationRequest {
  pretty?: string;
  name: string;
}
export interface ReplaceFlowcontrolApiserverV1beta1PriorityLevelConfigurationRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  body: PriorityLevelConfiguration;
}
export interface DeleteFlowcontrolApiserverV1beta1PriorityLevelConfigurationRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
}
export interface PatchFlowcontrolApiserverV1beta1PriorityLevelConfigurationRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  body: Patch;
}
export interface ReadFlowcontrolApiserverV1beta1PriorityLevelConfigurationStatusRequest {
  pretty?: string;
  name: string;
}
export interface ReplaceFlowcontrolApiserverV1beta1PriorityLevelConfigurationStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  body: PriorityLevelConfiguration;
}
export interface PatchFlowcontrolApiserverV1beta1PriorityLevelConfigurationStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  body: Patch;
}
export interface WatchFlowcontrolApiserverV1beta1FlowSchemaListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchFlowcontrolApiserverV1beta1FlowSchemaRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
}
export interface WatchFlowcontrolApiserverV1beta1PriorityLevelConfigurationListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchFlowcontrolApiserverV1beta1PriorityLevelConfigurationRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
}
export interface GetNetworkingAPIGroupRequest {}
export interface GetNetworkingV1APIResourcesRequest {}
export interface ListNetworkingV1IngressClassRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface CreateNetworkingV1IngressClassRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  body: IngressClass;
}
export interface DeleteNetworkingV1CollectionIngressClassRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
}
export interface ReadNetworkingV1IngressClassRequest {
  pretty?: string;
  name: string;
}
export interface ReplaceNetworkingV1IngressClassRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  body: IngressClass;
}
export interface DeleteNetworkingV1IngressClassRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
}
export interface PatchNetworkingV1IngressClassRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  body: Patch;
}
export interface ListNetworkingV1IngressForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface ListNetworkingV1NamespacedIngressRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateNetworkingV1NamespacedIngressRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: Ingress;
}
export interface DeleteNetworkingV1CollectionNamespacedIngressRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadNetworkingV1NamespacedIngressRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceNetworkingV1NamespacedIngressRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: Ingress;
}
export interface DeleteNetworkingV1NamespacedIngressRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchNetworkingV1NamespacedIngressRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ReadNetworkingV1NamespacedIngressStatusRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceNetworkingV1NamespacedIngressStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: Ingress;
}
export interface PatchNetworkingV1NamespacedIngressStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ListNetworkingV1NamespacedNetworkPolicyRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateNetworkingV1NamespacedNetworkPolicyRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: NetworkPolicy;
}
export interface DeleteNetworkingV1CollectionNamespacedNetworkPolicyRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadNetworkingV1NamespacedNetworkPolicyRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceNetworkingV1NamespacedNetworkPolicyRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: NetworkPolicy;
}
export interface DeleteNetworkingV1NamespacedNetworkPolicyRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchNetworkingV1NamespacedNetworkPolicyRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ListNetworkingV1NetworkPolicyForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchNetworkingV1IngressClassListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchNetworkingV1IngressClassRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
}
export interface WatchNetworkingV1IngressListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchNetworkingV1NamespacedIngressListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchNetworkingV1NamespacedIngressRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface WatchNetworkingV1NamespacedNetworkPolicyListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchNetworkingV1NamespacedNetworkPolicyRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface WatchNetworkingV1NetworkPolicyListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface GetNodeAPIGroupRequest {}
export interface GetNodeV1APIResourcesRequest {}
export interface ListNodeV1RuntimeClassRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface CreateNodeV1RuntimeClassRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  body: RuntimeClass;
}
export interface DeleteNodeV1CollectionRuntimeClassRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
}
export interface ReadNodeV1RuntimeClassRequest {
  pretty?: string;
  name: string;
}
export interface ReplaceNodeV1RuntimeClassRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  body: RuntimeClass;
}
export interface DeleteNodeV1RuntimeClassRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
}
export interface PatchNodeV1RuntimeClassRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  body: Patch;
}
export interface WatchNodeV1RuntimeClassListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchNodeV1RuntimeClassRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
}
export interface GetNodeV1beta1APIResourcesRequest {}
export interface ListNodeV1beta1RuntimeClassRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface CreateNodeV1beta1RuntimeClassRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  body: RuntimeClass;
}
export interface DeleteNodeV1beta1CollectionRuntimeClassRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
}
export interface ReadNodeV1beta1RuntimeClassRequest {
  pretty?: string;
  name: string;
}
export interface ReplaceNodeV1beta1RuntimeClassRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  body: RuntimeClass;
}
export interface DeleteNodeV1beta1RuntimeClassRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
}
export interface PatchNodeV1beta1RuntimeClassRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  body: Patch;
}
export interface WatchNodeV1beta1RuntimeClassListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchNodeV1beta1RuntimeClassRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
}
export interface GetPolicyAPIGroupRequest {}
export interface GetPolicyV1APIResourcesRequest {}
export interface ListPolicyV1NamespacedPodDisruptionBudgetRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreatePolicyV1NamespacedPodDisruptionBudgetRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: PodDisruptionBudget;
}
export interface DeletePolicyV1CollectionNamespacedPodDisruptionBudgetRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadPolicyV1NamespacedPodDisruptionBudgetRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplacePolicyV1NamespacedPodDisruptionBudgetRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: PodDisruptionBudget;
}
export interface DeletePolicyV1NamespacedPodDisruptionBudgetRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchPolicyV1NamespacedPodDisruptionBudgetRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ReadPolicyV1NamespacedPodDisruptionBudgetStatusRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplacePolicyV1NamespacedPodDisruptionBudgetStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: PodDisruptionBudget;
}
export interface PatchPolicyV1NamespacedPodDisruptionBudgetStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ListPolicyV1PodDisruptionBudgetForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchPolicyV1NamespacedPodDisruptionBudgetListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchPolicyV1NamespacedPodDisruptionBudgetRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface WatchPolicyV1PodDisruptionBudgetListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface GetPolicyV1beta1APIResourcesRequest {}
export interface ListPolicyV1beta1NamespacedPodDisruptionBudgetRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreatePolicyV1beta1NamespacedPodDisruptionBudgetRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: PodDisruptionBudget;
}
export interface DeletePolicyV1beta1CollectionNamespacedPodDisruptionBudgetRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadPolicyV1beta1NamespacedPodDisruptionBudgetRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplacePolicyV1beta1NamespacedPodDisruptionBudgetRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: PodDisruptionBudget;
}
export interface DeletePolicyV1beta1NamespacedPodDisruptionBudgetRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchPolicyV1beta1NamespacedPodDisruptionBudgetRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ReadPolicyV1beta1NamespacedPodDisruptionBudgetStatusRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplacePolicyV1beta1NamespacedPodDisruptionBudgetStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: PodDisruptionBudget;
}
export interface PatchPolicyV1beta1NamespacedPodDisruptionBudgetStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ListPolicyV1beta1PodDisruptionBudgetForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface ListPolicyV1beta1PodSecurityPolicyRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface CreatePolicyV1beta1PodSecurityPolicyRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  body: PodSecurityPolicy;
}
export interface DeletePolicyV1beta1CollectionPodSecurityPolicyRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
}
export interface ReadPolicyV1beta1PodSecurityPolicyRequest {
  pretty?: string;
  name: string;
}
export interface ReplacePolicyV1beta1PodSecurityPolicyRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  body: PodSecurityPolicy;
}
export interface DeletePolicyV1beta1PodSecurityPolicyRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
}
export interface PatchPolicyV1beta1PodSecurityPolicyRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  body: Patch;
}
export interface WatchPolicyV1beta1NamespacedPodDisruptionBudgetListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchPolicyV1beta1NamespacedPodDisruptionBudgetRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface WatchPolicyV1beta1PodDisruptionBudgetListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchPolicyV1beta1PodSecurityPolicyListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchPolicyV1beta1PodSecurityPolicyRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
}
export interface GetRbacAuthorizationAPIGroupRequest {}
export interface GetRbacAuthorizationV1APIResourcesRequest {}
export interface ListRbacAuthorizationV1ClusterRoleBindingRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface CreateRbacAuthorizationV1ClusterRoleBindingRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  body: ClusterRoleBinding;
}
export interface DeleteRbacAuthorizationV1CollectionClusterRoleBindingRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
}
export interface ReadRbacAuthorizationV1ClusterRoleBindingRequest {
  pretty?: string;
  name: string;
}
export interface ReplaceRbacAuthorizationV1ClusterRoleBindingRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  body: ClusterRoleBinding;
}
export interface DeleteRbacAuthorizationV1ClusterRoleBindingRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
}
export interface PatchRbacAuthorizationV1ClusterRoleBindingRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  body: Patch;
}
export interface ListRbacAuthorizationV1ClusterRoleRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface CreateRbacAuthorizationV1ClusterRoleRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  body: ClusterRole;
}
export interface DeleteRbacAuthorizationV1CollectionClusterRoleRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
}
export interface ReadRbacAuthorizationV1ClusterRoleRequest {
  pretty?: string;
  name: string;
}
export interface ReplaceRbacAuthorizationV1ClusterRoleRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  body: ClusterRole;
}
export interface DeleteRbacAuthorizationV1ClusterRoleRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
}
export interface PatchRbacAuthorizationV1ClusterRoleRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  body: Patch;
}
export interface ListRbacAuthorizationV1NamespacedRoleBindingRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateRbacAuthorizationV1NamespacedRoleBindingRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: RoleBinding;
}
export interface DeleteRbacAuthorizationV1CollectionNamespacedRoleBindingRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadRbacAuthorizationV1NamespacedRoleBindingRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceRbacAuthorizationV1NamespacedRoleBindingRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: RoleBinding;
}
export interface DeleteRbacAuthorizationV1NamespacedRoleBindingRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchRbacAuthorizationV1NamespacedRoleBindingRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ListRbacAuthorizationV1NamespacedRoleRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateRbacAuthorizationV1NamespacedRoleRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: Role;
}
export interface DeleteRbacAuthorizationV1CollectionNamespacedRoleRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadRbacAuthorizationV1NamespacedRoleRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceRbacAuthorizationV1NamespacedRoleRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: Role;
}
export interface DeleteRbacAuthorizationV1NamespacedRoleRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchRbacAuthorizationV1NamespacedRoleRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ListRbacAuthorizationV1RoleBindingForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface ListRbacAuthorizationV1RoleForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchRbacAuthorizationV1ClusterRoleBindingListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchRbacAuthorizationV1ClusterRoleBindingRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
}
export interface WatchRbacAuthorizationV1ClusterRoleListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchRbacAuthorizationV1ClusterRoleRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
}
export interface WatchRbacAuthorizationV1NamespacedRoleBindingListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchRbacAuthorizationV1NamespacedRoleBindingRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface WatchRbacAuthorizationV1NamespacedRoleListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchRbacAuthorizationV1NamespacedRoleRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface WatchRbacAuthorizationV1RoleBindingListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchRbacAuthorizationV1RoleListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface GetSchedulingAPIGroupRequest {}
export interface GetSchedulingV1APIResourcesRequest {}
export interface ListSchedulingV1PriorityClassRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface CreateSchedulingV1PriorityClassRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  body: PriorityClass;
}
export interface DeleteSchedulingV1CollectionPriorityClassRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
}
export interface ReadSchedulingV1PriorityClassRequest {
  pretty?: string;
  name: string;
}
export interface ReplaceSchedulingV1PriorityClassRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  body: PriorityClass;
}
export interface DeleteSchedulingV1PriorityClassRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
}
export interface PatchSchedulingV1PriorityClassRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  body: Patch;
}
export interface WatchSchedulingV1PriorityClassListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchSchedulingV1PriorityClassRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
}
export interface GetStorageAPIGroupRequest {}
export interface GetStorageV1APIResourcesRequest {}
export interface ListStorageV1CSIDriverRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface CreateStorageV1CSIDriverRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  body: CSIDriver;
}
export interface DeleteStorageV1CollectionCSIDriverRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
}
export interface ReadStorageV1CSIDriverRequest {
  pretty?: string;
  name: string;
}
export interface ReplaceStorageV1CSIDriverRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  body: CSIDriver;
}
export interface DeleteStorageV1CSIDriverRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
}
export interface PatchStorageV1CSIDriverRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  body: Patch;
}
export interface ListStorageV1CSINodeRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface CreateStorageV1CSINodeRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  body: CSINode;
}
export interface DeleteStorageV1CollectionCSINodeRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
}
export interface ReadStorageV1CSINodeRequest {
  pretty?: string;
  name: string;
}
export interface ReplaceStorageV1CSINodeRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  body: CSINode;
}
export interface DeleteStorageV1CSINodeRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
}
export interface PatchStorageV1CSINodeRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  body: Patch;
}
export interface ListStorageV1StorageClassRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface CreateStorageV1StorageClassRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  body: StorageClass;
}
export interface DeleteStorageV1CollectionStorageClassRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
}
export interface ReadStorageV1StorageClassRequest {
  pretty?: string;
  name: string;
}
export interface ReplaceStorageV1StorageClassRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  body: StorageClass;
}
export interface DeleteStorageV1StorageClassRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
}
export interface PatchStorageV1StorageClassRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  body: Patch;
}
export interface ListStorageV1VolumeAttachmentRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface CreateStorageV1VolumeAttachmentRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  body: VolumeAttachment;
}
export interface DeleteStorageV1CollectionVolumeAttachmentRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
}
export interface ReadStorageV1VolumeAttachmentRequest {
  pretty?: string;
  name: string;
}
export interface ReplaceStorageV1VolumeAttachmentRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  body: VolumeAttachment;
}
export interface DeleteStorageV1VolumeAttachmentRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
}
export interface PatchStorageV1VolumeAttachmentRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  body: Patch;
}
export interface ReadStorageV1VolumeAttachmentStatusRequest {
  pretty?: string;
  name: string;
}
export interface ReplaceStorageV1VolumeAttachmentStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  body: VolumeAttachment;
}
export interface PatchStorageV1VolumeAttachmentStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  body: Patch;
}
export interface WatchStorageV1CSIDriverListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchStorageV1CSIDriverRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
}
export interface WatchStorageV1CSINodeListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchStorageV1CSINodeRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
}
export interface WatchStorageV1StorageClassListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchStorageV1StorageClassRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
}
export interface WatchStorageV1VolumeAttachmentListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchStorageV1VolumeAttachmentRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
}
export interface GetStorageV1beta1APIResourcesRequest {}
export interface ListStorageV1beta1CSIStorageCapacityForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface ListStorageV1beta1NamespacedCSIStorageCapacityRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateStorageV1beta1NamespacedCSIStorageCapacityRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: CSIStorageCapacity;
}
export interface DeleteStorageV1beta1CollectionNamespacedCSIStorageCapacityRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadStorageV1beta1NamespacedCSIStorageCapacityRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceStorageV1beta1NamespacedCSIStorageCapacityRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: CSIStorageCapacity;
}
export interface DeleteStorageV1beta1NamespacedCSIStorageCapacityRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchStorageV1beta1NamespacedCSIStorageCapacityRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface WatchStorageV1beta1CSIStorageCapacityListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchStorageV1beta1NamespacedCSIStorageCapacityListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchStorageV1beta1NamespacedCSIStorageCapacityRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface LogFileListHandlerRequest {}
export interface LogFileHandlerRequest {
  logpath: string;
}
export interface GetServiceAccountIssuerOpenIDKeysetRequest {}
export interface GetCodeVersionRequest {}
export class KubernetesClient extends APIClient {
  constructor(options: APIClientOptions) {
    super(options);
  }
  async getSwaggerJSON() {
    const path = "/openapi/v2";
    return this.get(path);
  }
  async getServiceAccountIssuerOpenIDConfiguration(params: GetServiceAccountIssuerOpenIDConfigurationRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/.well-known/openid-configuration/`;
    return await this.get<string>(path, null, null, opts);
  }
  async getCoreAPIVersions(params: GetCoreAPIVersionsRequest, opts?: APIClientRequestOpts): Promise<APIVersions> {
    const path = `/api/`;
    return await this.get<APIVersions>(path, null, null, opts);
  }
  async getCoreV1APIResources(params: GetCoreV1APIResourcesRequest, opts?: APIClientRequestOpts): Promise<APIResourceList> {
    const path = `/api/v1/`;
    return await this.get<APIResourceList>(path, null, null, opts);
  }
  async listCoreV1ComponentStatus(params: ListCoreV1ComponentStatusRequest, opts?: APIClientRequestOpts): Promise<ComponentStatusList> {
    const path = `/api/v1/componentstatuses`;
    return await this.get<ComponentStatusList>(path, null, null, opts);
  }
  async readCoreV1ComponentStatus(params: ReadCoreV1ComponentStatusRequest, opts?: APIClientRequestOpts): Promise<ComponentStatus> {
    const path = `/api/v1/componentstatuses/${params.name}`;
    return await this.get<ComponentStatus>(path, null, null, opts);
  }
  async listCoreV1ConfigMapForAllNamespaces(params: ListCoreV1ConfigMapForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<ConfigMapList> {
    const path = `/api/v1/configmaps`;
    return await this.get<ConfigMapList>(path, null, null, opts);
  }
  async listCoreV1EndpointsForAllNamespaces(params: ListCoreV1EndpointsForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<EndpointsList> {
    const path = `/api/v1/endpoints`;
    return await this.get<EndpointsList>(path, null, null, opts);
  }
  async listCoreV1EventForAllNamespaces(params: ListCoreV1EventForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<EventList> {
    const path = `/api/v1/events`;
    return await this.get<EventList>(path, null, null, opts);
  }
  async listCoreV1LimitRangeForAllNamespaces(params: ListCoreV1LimitRangeForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<LimitRangeList> {
    const path = `/api/v1/limitranges`;
    return await this.get<LimitRangeList>(path, null, null, opts);
  }
  async listCoreV1Namespace(params: ListCoreV1NamespaceRequest, opts?: APIClientRequestOpts): Promise<NamespaceList> {
    const path = `/api/v1/namespaces`;
    return await this.get<NamespaceList>(path, params.query, null, opts);
  }
  async createCoreV1Namespace(params: CreateCoreV1NamespaceRequest, opts?: APIClientRequestOpts): Promise<Namespace> {
    const path = `/api/v1/namespaces`;
    return await this.post<Namespace>(path, params.query, params.body, opts);
  }
  async createCoreV1NamespacedBinding(params: CreateCoreV1NamespacedBindingRequest, opts?: APIClientRequestOpts): Promise<Binding> {
    const path = `/api/v1/namespaces/${params.namespace}/bindings`;
    return await this.post<Binding>(path, null, params.body, opts);
  }
  async listCoreV1NamespacedConfigMap(params: ListCoreV1NamespacedConfigMapRequest, opts?: APIClientRequestOpts): Promise<ConfigMapList> {
    const path = `/api/v1/namespaces/${params.namespace}/configmaps`;
    return await this.get<ConfigMapList>(path, params.query, null, opts);
  }
  async createCoreV1NamespacedConfigMap(params: CreateCoreV1NamespacedConfigMapRequest, opts?: APIClientRequestOpts): Promise<ConfigMap> {
    const path = `/api/v1/namespaces/${params.namespace}/configmaps`;
    return await this.post<ConfigMap>(path, params.query, params.body, opts);
  }
  async deleteCoreV1CollectionNamespacedConfigMap(params: DeleteCoreV1CollectionNamespacedConfigMapRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/api/v1/namespaces/${params.namespace}/configmaps`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readCoreV1NamespacedConfigMap(params: ReadCoreV1NamespacedConfigMapRequest, opts?: APIClientRequestOpts): Promise<ConfigMap> {
    const path = `/api/v1/namespaces/${params.namespace}/configmaps/${params.name}`;
    return await this.get<ConfigMap>(path, null, null, opts);
  }
  async replaceCoreV1NamespacedConfigMap(params: ReplaceCoreV1NamespacedConfigMapRequest, opts?: APIClientRequestOpts): Promise<ConfigMap> {
    const path = `/api/v1/namespaces/${params.namespace}/configmaps/${params.name}`;
    return await this.put<ConfigMap>(path, params.query, params.body, opts);
  }
  async deleteCoreV1NamespacedConfigMap(params: DeleteCoreV1NamespacedConfigMapRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/api/v1/namespaces/${params.namespace}/configmaps/${params.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchCoreV1NamespacedConfigMap(params: PatchCoreV1NamespacedConfigMapRequest, opts?: APIClientRequestOpts): Promise<ConfigMap> {
    const path = `/api/v1/namespaces/${params.namespace}/configmaps/${params.name}`;
    return await this.patch<ConfigMap>(path, params.query, params.body, opts);
  }
  async listCoreV1NamespacedEndpoints(params: ListCoreV1NamespacedEndpointsRequest, opts?: APIClientRequestOpts): Promise<EndpointsList> {
    const path = `/api/v1/namespaces/${params.namespace}/endpoints`;
    return await this.get<EndpointsList>(path, params.query, null, opts);
  }
  async createCoreV1NamespacedEndpoints(params: CreateCoreV1NamespacedEndpointsRequest, opts?: APIClientRequestOpts): Promise<Endpoints> {
    const path = `/api/v1/namespaces/${params.namespace}/endpoints`;
    return await this.post<Endpoints>(path, params.query, params.body, opts);
  }
  async deleteCoreV1CollectionNamespacedEndpoints(params: DeleteCoreV1CollectionNamespacedEndpointsRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/api/v1/namespaces/${params.namespace}/endpoints`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readCoreV1NamespacedEndpoints(params: ReadCoreV1NamespacedEndpointsRequest, opts?: APIClientRequestOpts): Promise<Endpoints> {
    const path = `/api/v1/namespaces/${params.namespace}/endpoints/${params.name}`;
    return await this.get<Endpoints>(path, null, null, opts);
  }
  async replaceCoreV1NamespacedEndpoints(params: ReplaceCoreV1NamespacedEndpointsRequest, opts?: APIClientRequestOpts): Promise<Endpoints> {
    const path = `/api/v1/namespaces/${params.namespace}/endpoints/${params.name}`;
    return await this.put<Endpoints>(path, params.query, params.body, opts);
  }
  async deleteCoreV1NamespacedEndpoints(params: DeleteCoreV1NamespacedEndpointsRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/api/v1/namespaces/${params.namespace}/endpoints/${params.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchCoreV1NamespacedEndpoints(params: PatchCoreV1NamespacedEndpointsRequest, opts?: APIClientRequestOpts): Promise<Endpoints> {
    const path = `/api/v1/namespaces/${params.namespace}/endpoints/${params.name}`;
    return await this.patch<Endpoints>(path, params.query, params.body, opts);
  }
  async listCoreV1NamespacedEvent(params: ListCoreV1NamespacedEventRequest, opts?: APIClientRequestOpts): Promise<EventList> {
    const path = `/api/v1/namespaces/${params.namespace}/events`;
    return await this.get<EventList>(path, params.query, null, opts);
  }
  async createCoreV1NamespacedEvent(params: CreateCoreV1NamespacedEventRequest, opts?: APIClientRequestOpts): Promise<Event> {
    const path = `/api/v1/namespaces/${params.namespace}/events`;
    return await this.post<Event>(path, params.query, params.body, opts);
  }
  async deleteCoreV1CollectionNamespacedEvent(params: DeleteCoreV1CollectionNamespacedEventRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/api/v1/namespaces/${params.namespace}/events`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readCoreV1NamespacedEvent(params: ReadCoreV1NamespacedEventRequest, opts?: APIClientRequestOpts): Promise<Event> {
    const path = `/api/v1/namespaces/${params.namespace}/events/${params.name}`;
    return await this.get<Event>(path, null, null, opts);
  }
  async replaceCoreV1NamespacedEvent(params: ReplaceCoreV1NamespacedEventRequest, opts?: APIClientRequestOpts): Promise<Event> {
    const path = `/api/v1/namespaces/${params.namespace}/events/${params.name}`;
    return await this.put<Event>(path, params.query, params.body, opts);
  }
  async deleteCoreV1NamespacedEvent(params: DeleteCoreV1NamespacedEventRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/api/v1/namespaces/${params.namespace}/events/${params.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchCoreV1NamespacedEvent(params: PatchCoreV1NamespacedEventRequest, opts?: APIClientRequestOpts): Promise<Event> {
    const path = `/api/v1/namespaces/${params.namespace}/events/${params.name}`;
    return await this.patch<Event>(path, params.query, params.body, opts);
  }
  async listCoreV1NamespacedLimitRange(params: ListCoreV1NamespacedLimitRangeRequest, opts?: APIClientRequestOpts): Promise<LimitRangeList> {
    const path = `/api/v1/namespaces/${params.namespace}/limitranges`;
    return await this.get<LimitRangeList>(path, params.query, null, opts);
  }
  async createCoreV1NamespacedLimitRange(params: CreateCoreV1NamespacedLimitRangeRequest, opts?: APIClientRequestOpts): Promise<LimitRange> {
    const path = `/api/v1/namespaces/${params.namespace}/limitranges`;
    return await this.post<LimitRange>(path, params.query, params.body, opts);
  }
  async deleteCoreV1CollectionNamespacedLimitRange(params: DeleteCoreV1CollectionNamespacedLimitRangeRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/api/v1/namespaces/${params.namespace}/limitranges`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readCoreV1NamespacedLimitRange(params: ReadCoreV1NamespacedLimitRangeRequest, opts?: APIClientRequestOpts): Promise<LimitRange> {
    const path = `/api/v1/namespaces/${params.namespace}/limitranges/${params.name}`;
    return await this.get<LimitRange>(path, null, null, opts);
  }
  async replaceCoreV1NamespacedLimitRange(params: ReplaceCoreV1NamespacedLimitRangeRequest, opts?: APIClientRequestOpts): Promise<LimitRange> {
    const path = `/api/v1/namespaces/${params.namespace}/limitranges/${params.name}`;
    return await this.put<LimitRange>(path, params.query, params.body, opts);
  }
  async deleteCoreV1NamespacedLimitRange(params: DeleteCoreV1NamespacedLimitRangeRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/api/v1/namespaces/${params.namespace}/limitranges/${params.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchCoreV1NamespacedLimitRange(params: PatchCoreV1NamespacedLimitRangeRequest, opts?: APIClientRequestOpts): Promise<LimitRange> {
    const path = `/api/v1/namespaces/${params.namespace}/limitranges/${params.name}`;
    return await this.patch<LimitRange>(path, params.query, params.body, opts);
  }
  async listCoreV1NamespacedPersistentVolumeClaim(params: ListCoreV1NamespacedPersistentVolumeClaimRequest, opts?: APIClientRequestOpts): Promise<PersistentVolumeClaimList> {
    const path = `/api/v1/namespaces/${params.namespace}/persistentvolumeclaims`;
    return await this.get<PersistentVolumeClaimList>(path, params.query, null, opts);
  }
  async createCoreV1NamespacedPersistentVolumeClaim(params: CreateCoreV1NamespacedPersistentVolumeClaimRequest, opts?: APIClientRequestOpts): Promise<PersistentVolumeClaim> {
    const path = `/api/v1/namespaces/${params.namespace}/persistentvolumeclaims`;
    return await this.post<PersistentVolumeClaim>(path, params.query, params.body, opts);
  }
  async deleteCoreV1CollectionNamespacedPersistentVolumeClaim(params: DeleteCoreV1CollectionNamespacedPersistentVolumeClaimRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/api/v1/namespaces/${params.namespace}/persistentvolumeclaims`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readCoreV1NamespacedPersistentVolumeClaim(params: ReadCoreV1NamespacedPersistentVolumeClaimRequest, opts?: APIClientRequestOpts): Promise<PersistentVolumeClaim> {
    const path = `/api/v1/namespaces/${params.namespace}/persistentvolumeclaims/${params.name}`;
    return await this.get<PersistentVolumeClaim>(path, null, null, opts);
  }
  async replaceCoreV1NamespacedPersistentVolumeClaim(params: ReplaceCoreV1NamespacedPersistentVolumeClaimRequest, opts?: APIClientRequestOpts): Promise<PersistentVolumeClaim> {
    const path = `/api/v1/namespaces/${params.namespace}/persistentvolumeclaims/${params.name}`;
    return await this.put<PersistentVolumeClaim>(path, params.query, params.body, opts);
  }
  async deleteCoreV1NamespacedPersistentVolumeClaim(params: DeleteCoreV1NamespacedPersistentVolumeClaimRequest, opts?: APIClientRequestOpts): Promise<PersistentVolumeClaim> {
    const path = `/api/v1/namespaces/${params.namespace}/persistentvolumeclaims/${params.name}`;
    return await this.delete<PersistentVolumeClaim>(path, params.query, null, opts);
  }
  async patchCoreV1NamespacedPersistentVolumeClaim(params: PatchCoreV1NamespacedPersistentVolumeClaimRequest, opts?: APIClientRequestOpts): Promise<PersistentVolumeClaim> {
    const path = `/api/v1/namespaces/${params.namespace}/persistentvolumeclaims/${params.name}`;
    return await this.patch<PersistentVolumeClaim>(path, params.query, params.body, opts);
  }
  async readCoreV1NamespacedPersistentVolumeClaimStatus(params: ReadCoreV1NamespacedPersistentVolumeClaimStatusRequest, opts?: APIClientRequestOpts): Promise<PersistentVolumeClaim> {
    const path = `/api/v1/namespaces/${params.namespace}/persistentvolumeclaims/${params.name}/status`;
    return await this.get<PersistentVolumeClaim>(path, null, null, opts);
  }
  async replaceCoreV1NamespacedPersistentVolumeClaimStatus(params: ReplaceCoreV1NamespacedPersistentVolumeClaimStatusRequest, opts?: APIClientRequestOpts): Promise<PersistentVolumeClaim> {
    const path = `/api/v1/namespaces/${params.namespace}/persistentvolumeclaims/${params.name}/status`;
    return await this.put<PersistentVolumeClaim>(path, params.query, params.body, opts);
  }
  async patchCoreV1NamespacedPersistentVolumeClaimStatus(params: PatchCoreV1NamespacedPersistentVolumeClaimStatusRequest, opts?: APIClientRequestOpts): Promise<PersistentVolumeClaim> {
    const path = `/api/v1/namespaces/${params.namespace}/persistentvolumeclaims/${params.name}/status`;
    return await this.patch<PersistentVolumeClaim>(path, params.query, params.body, opts);
  }
  async listCoreV1NamespacedPod(params: ListCoreV1NamespacedPodRequest, opts?: APIClientRequestOpts): Promise<PodList> {
    const path = `/api/v1/namespaces/${params.namespace}/pods`;
    return await this.get<PodList>(path, params.query, null, opts);
  }
  async createCoreV1NamespacedPod(params: CreateCoreV1NamespacedPodRequest, opts?: APIClientRequestOpts): Promise<Pod> {
    const path = `/api/v1/namespaces/${params.namespace}/pods`;
    return await this.post<Pod>(path, params.query, params.body, opts);
  }
  async deleteCoreV1CollectionNamespacedPod(params: DeleteCoreV1CollectionNamespacedPodRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/api/v1/namespaces/${params.namespace}/pods`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readCoreV1NamespacedPod(params: ReadCoreV1NamespacedPodRequest, opts?: APIClientRequestOpts): Promise<Pod> {
    const path = `/api/v1/namespaces/${params.namespace}/pods/${params.name}`;
    return await this.get<Pod>(path, null, null, opts);
  }
  async replaceCoreV1NamespacedPod(params: ReplaceCoreV1NamespacedPodRequest, opts?: APIClientRequestOpts): Promise<Pod> {
    const path = `/api/v1/namespaces/${params.namespace}/pods/${params.name}`;
    return await this.put<Pod>(path, params.query, params.body, opts);
  }
  async deleteCoreV1NamespacedPod(params: DeleteCoreV1NamespacedPodRequest, opts?: APIClientRequestOpts): Promise<Pod> {
    const path = `/api/v1/namespaces/${params.namespace}/pods/${params.name}`;
    return await this.delete<Pod>(path, params.query, null, opts);
  }
  async patchCoreV1NamespacedPod(params: PatchCoreV1NamespacedPodRequest, opts?: APIClientRequestOpts): Promise<Pod> {
    const path = `/api/v1/namespaces/${params.namespace}/pods/${params.name}`;
    return await this.patch<Pod>(path, params.query, params.body, opts);
  }
  async connectCoreV1GetNamespacedPodAttach(params: ConnectCoreV1GetNamespacedPodAttachRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/namespaces/${params.namespace}/pods/${params.name}/attach`;
    return await this.get<string>(path, null, null, opts);
  }
  async connectCoreV1PostNamespacedPodAttach(params: ConnectCoreV1PostNamespacedPodAttachRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/namespaces/${params.namespace}/pods/${params.name}/attach`;
    return await this.post<string>(path, null, null, opts);
  }
  async createCoreV1NamespacedPodBinding(params: CreateCoreV1NamespacedPodBindingRequest, opts?: APIClientRequestOpts): Promise<Binding> {
    const path = `/api/v1/namespaces/${params.namespace}/pods/${params.name}/binding`;
    return await this.post<Binding>(path, null, params.body, opts);
  }
  async createCoreV1NamespacedPodEviction(params: CreateCoreV1NamespacedPodEvictionRequest, opts?: APIClientRequestOpts): Promise<Eviction> {
    const path = `/api/v1/namespaces/${params.namespace}/pods/${params.name}/eviction`;
    return await this.post<Eviction>(path, null, params.body, opts);
  }
  async connectCoreV1GetNamespacedPodExec(params: ConnectCoreV1GetNamespacedPodExecRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/namespaces/${params.namespace}/pods/${params.name}/exec`;
    return await this.get<string>(path, null, null, opts);
  }
  async connectCoreV1PostNamespacedPodExec(params: ConnectCoreV1PostNamespacedPodExecRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/namespaces/${params.namespace}/pods/${params.name}/exec`;
    return await this.post<string>(path, null, null, opts);
  }
  async readCoreV1NamespacedPodLog(params: ReadCoreV1NamespacedPodLogRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/namespaces/${params.namespace}/pods/${params.name}/log`;
    return await this.get<string>(path, null, null, opts);
  }
  async connectCoreV1GetNamespacedPodPortforward(params: ConnectCoreV1GetNamespacedPodPortforwardRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/namespaces/${params.namespace}/pods/${params.name}/portforward`;
    return await this.get<string>(path, null, null, opts);
  }
  async connectCoreV1PostNamespacedPodPortforward(params: ConnectCoreV1PostNamespacedPodPortforwardRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/namespaces/${params.namespace}/pods/${params.name}/portforward`;
    return await this.post<string>(path, null, null, opts);
  }
  async connectCoreV1GetNamespacedPodProxy(params: ConnectCoreV1GetNamespacedPodProxyRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/namespaces/${params.namespace}/pods/${params.name}/proxy`;
    return await this.get<string>(path, null, null, opts);
  }
  async connectCoreV1PostNamespacedPodProxy(params: ConnectCoreV1PostNamespacedPodProxyRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/namespaces/${params.namespace}/pods/${params.name}/proxy`;
    return await this.post<string>(path, null, null, opts);
  }
  async connectCoreV1PutNamespacedPodProxy(params: ConnectCoreV1PutNamespacedPodProxyRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/namespaces/${params.namespace}/pods/${params.name}/proxy`;
    return await this.put<string>(path, null, null, opts);
  }
  async connectCoreV1DeleteNamespacedPodProxy(params: ConnectCoreV1DeleteNamespacedPodProxyRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/namespaces/${params.namespace}/pods/${params.name}/proxy`;
    return await this.delete<string>(path, null, null, opts);
  }
  async connectCoreV1OptionsNamespacedPodProxy(params: ConnectCoreV1OptionsNamespacedPodProxyRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/namespaces/${params.namespace}/pods/${params.name}/proxy`;
    return await this.options<string>(path, null, null, opts);
  }
  async connectCoreV1HeadNamespacedPodProxy(params: ConnectCoreV1HeadNamespacedPodProxyRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/namespaces/${params.namespace}/pods/${params.name}/proxy`;
    return await this.head<string>(path, null, null, opts);
  }
  async connectCoreV1PatchNamespacedPodProxy(params: ConnectCoreV1PatchNamespacedPodProxyRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/namespaces/${params.namespace}/pods/${params.name}/proxy`;
    return await this.patch<string>(path, null, null, opts);
  }
  async connectCoreV1GetNamespacedPodProxyWithPath(params: ConnectCoreV1GetNamespacedPodProxyWithPathRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/namespaces/${params.namespace}/pods/${params.name}/proxy/${params.path}`;
    return await this.get<string>(path, null, null, opts);
  }
  async connectCoreV1PostNamespacedPodProxyWithPath(params: ConnectCoreV1PostNamespacedPodProxyWithPathRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/namespaces/${params.namespace}/pods/${params.name}/proxy/${params.path}`;
    return await this.post<string>(path, null, null, opts);
  }
  async connectCoreV1PutNamespacedPodProxyWithPath(params: ConnectCoreV1PutNamespacedPodProxyWithPathRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/namespaces/${params.namespace}/pods/${params.name}/proxy/${params.path}`;
    return await this.put<string>(path, null, null, opts);
  }
  async connectCoreV1DeleteNamespacedPodProxyWithPath(params: ConnectCoreV1DeleteNamespacedPodProxyWithPathRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/namespaces/${params.namespace}/pods/${params.name}/proxy/${params.path}`;
    return await this.delete<string>(path, null, null, opts);
  }
  async connectCoreV1OptionsNamespacedPodProxyWithPath(params: ConnectCoreV1OptionsNamespacedPodProxyWithPathRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/namespaces/${params.namespace}/pods/${params.name}/proxy/${params.path}`;
    return await this.options<string>(path, null, null, opts);
  }
  async connectCoreV1HeadNamespacedPodProxyWithPath(params: ConnectCoreV1HeadNamespacedPodProxyWithPathRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/namespaces/${params.namespace}/pods/${params.name}/proxy/${params.path}`;
    return await this.head<string>(path, null, null, opts);
  }
  async connectCoreV1PatchNamespacedPodProxyWithPath(params: ConnectCoreV1PatchNamespacedPodProxyWithPathRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/namespaces/${params.namespace}/pods/${params.name}/proxy/${params.path}`;
    return await this.patch<string>(path, null, null, opts);
  }
  async readCoreV1NamespacedPodStatus(params: ReadCoreV1NamespacedPodStatusRequest, opts?: APIClientRequestOpts): Promise<Pod> {
    const path = `/api/v1/namespaces/${params.namespace}/pods/${params.name}/status`;
    return await this.get<Pod>(path, null, null, opts);
  }
  async replaceCoreV1NamespacedPodStatus(params: ReplaceCoreV1NamespacedPodStatusRequest, opts?: APIClientRequestOpts): Promise<Pod> {
    const path = `/api/v1/namespaces/${params.namespace}/pods/${params.name}/status`;
    return await this.put<Pod>(path, params.query, params.body, opts);
  }
  async patchCoreV1NamespacedPodStatus(params: PatchCoreV1NamespacedPodStatusRequest, opts?: APIClientRequestOpts): Promise<Pod> {
    const path = `/api/v1/namespaces/${params.namespace}/pods/${params.name}/status`;
    return await this.patch<Pod>(path, params.query, params.body, opts);
  }
  async listCoreV1NamespacedPodTemplate(params: ListCoreV1NamespacedPodTemplateRequest, opts?: APIClientRequestOpts): Promise<PodTemplateList> {
    const path = `/api/v1/namespaces/${params.namespace}/podtemplates`;
    return await this.get<PodTemplateList>(path, params.query, null, opts);
  }
  async createCoreV1NamespacedPodTemplate(params: CreateCoreV1NamespacedPodTemplateRequest, opts?: APIClientRequestOpts): Promise<PodTemplate> {
    const path = `/api/v1/namespaces/${params.namespace}/podtemplates`;
    return await this.post<PodTemplate>(path, params.query, params.body, opts);
  }
  async deleteCoreV1CollectionNamespacedPodTemplate(params: DeleteCoreV1CollectionNamespacedPodTemplateRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/api/v1/namespaces/${params.namespace}/podtemplates`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readCoreV1NamespacedPodTemplate(params: ReadCoreV1NamespacedPodTemplateRequest, opts?: APIClientRequestOpts): Promise<PodTemplate> {
    const path = `/api/v1/namespaces/${params.namespace}/podtemplates/${params.name}`;
    return await this.get<PodTemplate>(path, null, null, opts);
  }
  async replaceCoreV1NamespacedPodTemplate(params: ReplaceCoreV1NamespacedPodTemplateRequest, opts?: APIClientRequestOpts): Promise<PodTemplate> {
    const path = `/api/v1/namespaces/${params.namespace}/podtemplates/${params.name}`;
    return await this.put<PodTemplate>(path, params.query, params.body, opts);
  }
  async deleteCoreV1NamespacedPodTemplate(params: DeleteCoreV1NamespacedPodTemplateRequest, opts?: APIClientRequestOpts): Promise<PodTemplate> {
    const path = `/api/v1/namespaces/${params.namespace}/podtemplates/${params.name}`;
    return await this.delete<PodTemplate>(path, params.query, null, opts);
  }
  async patchCoreV1NamespacedPodTemplate(params: PatchCoreV1NamespacedPodTemplateRequest, opts?: APIClientRequestOpts): Promise<PodTemplate> {
    const path = `/api/v1/namespaces/${params.namespace}/podtemplates/${params.name}`;
    return await this.patch<PodTemplate>(path, params.query, params.body, opts);
  }
  async listCoreV1NamespacedReplicationController(params: ListCoreV1NamespacedReplicationControllerRequest, opts?: APIClientRequestOpts): Promise<ReplicationControllerList> {
    const path = `/api/v1/namespaces/${params.namespace}/replicationcontrollers`;
    return await this.get<ReplicationControllerList>(path, params.query, null, opts);
  }
  async createCoreV1NamespacedReplicationController(params: CreateCoreV1NamespacedReplicationControllerRequest, opts?: APIClientRequestOpts): Promise<ReplicationController> {
    const path = `/api/v1/namespaces/${params.namespace}/replicationcontrollers`;
    return await this.post<ReplicationController>(path, params.query, params.body, opts);
  }
  async deleteCoreV1CollectionNamespacedReplicationController(params: DeleteCoreV1CollectionNamespacedReplicationControllerRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/api/v1/namespaces/${params.namespace}/replicationcontrollers`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readCoreV1NamespacedReplicationController(params: ReadCoreV1NamespacedReplicationControllerRequest, opts?: APIClientRequestOpts): Promise<ReplicationController> {
    const path = `/api/v1/namespaces/${params.namespace}/replicationcontrollers/${params.name}`;
    return await this.get<ReplicationController>(path, null, null, opts);
  }
  async replaceCoreV1NamespacedReplicationController(params: ReplaceCoreV1NamespacedReplicationControllerRequest, opts?: APIClientRequestOpts): Promise<ReplicationController> {
    const path = `/api/v1/namespaces/${params.namespace}/replicationcontrollers/${params.name}`;
    return await this.put<ReplicationController>(path, params.query, params.body, opts);
  }
  async deleteCoreV1NamespacedReplicationController(params: DeleteCoreV1NamespacedReplicationControllerRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/api/v1/namespaces/${params.namespace}/replicationcontrollers/${params.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchCoreV1NamespacedReplicationController(params: PatchCoreV1NamespacedReplicationControllerRequest, opts?: APIClientRequestOpts): Promise<ReplicationController> {
    const path = `/api/v1/namespaces/${params.namespace}/replicationcontrollers/${params.name}`;
    return await this.patch<ReplicationController>(path, params.query, params.body, opts);
  }
  async readCoreV1NamespacedReplicationControllerScale(params: ReadCoreV1NamespacedReplicationControllerScaleRequest, opts?: APIClientRequestOpts): Promise<Scale> {
    const path = `/api/v1/namespaces/${params.namespace}/replicationcontrollers/${params.name}/scale`;
    return await this.get<Scale>(path, null, null, opts);
  }
  async replaceCoreV1NamespacedReplicationControllerScale(params: ReplaceCoreV1NamespacedReplicationControllerScaleRequest, opts?: APIClientRequestOpts): Promise<Scale> {
    const path = `/api/v1/namespaces/${params.namespace}/replicationcontrollers/${params.name}/scale`;
    return await this.put<Scale>(path, params.query, params.body, opts);
  }
  async patchCoreV1NamespacedReplicationControllerScale(params: PatchCoreV1NamespacedReplicationControllerScaleRequest, opts?: APIClientRequestOpts): Promise<Scale> {
    const path = `/api/v1/namespaces/${params.namespace}/replicationcontrollers/${params.name}/scale`;
    return await this.patch<Scale>(path, params.query, params.body, opts);
  }
  async readCoreV1NamespacedReplicationControllerStatus(params: ReadCoreV1NamespacedReplicationControllerStatusRequest, opts?: APIClientRequestOpts): Promise<ReplicationController> {
    const path = `/api/v1/namespaces/${params.namespace}/replicationcontrollers/${params.name}/status`;
    return await this.get<ReplicationController>(path, null, null, opts);
  }
  async replaceCoreV1NamespacedReplicationControllerStatus(params: ReplaceCoreV1NamespacedReplicationControllerStatusRequest, opts?: APIClientRequestOpts): Promise<ReplicationController> {
    const path = `/api/v1/namespaces/${params.namespace}/replicationcontrollers/${params.name}/status`;
    return await this.put<ReplicationController>(path, params.query, params.body, opts);
  }
  async patchCoreV1NamespacedReplicationControllerStatus(params: PatchCoreV1NamespacedReplicationControllerStatusRequest, opts?: APIClientRequestOpts): Promise<ReplicationController> {
    const path = `/api/v1/namespaces/${params.namespace}/replicationcontrollers/${params.name}/status`;
    return await this.patch<ReplicationController>(path, params.query, params.body, opts);
  }
  async listCoreV1NamespacedResourceQuota(params: ListCoreV1NamespacedResourceQuotaRequest, opts?: APIClientRequestOpts): Promise<ResourceQuotaList> {
    const path = `/api/v1/namespaces/${params.namespace}/resourcequotas`;
    return await this.get<ResourceQuotaList>(path, params.query, null, opts);
  }
  async createCoreV1NamespacedResourceQuota(params: CreateCoreV1NamespacedResourceQuotaRequest, opts?: APIClientRequestOpts): Promise<ResourceQuota> {
    const path = `/api/v1/namespaces/${params.namespace}/resourcequotas`;
    return await this.post<ResourceQuota>(path, params.query, params.body, opts);
  }
  async deleteCoreV1CollectionNamespacedResourceQuota(params: DeleteCoreV1CollectionNamespacedResourceQuotaRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/api/v1/namespaces/${params.namespace}/resourcequotas`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readCoreV1NamespacedResourceQuota(params: ReadCoreV1NamespacedResourceQuotaRequest, opts?: APIClientRequestOpts): Promise<ResourceQuota> {
    const path = `/api/v1/namespaces/${params.namespace}/resourcequotas/${params.name}`;
    return await this.get<ResourceQuota>(path, null, null, opts);
  }
  async replaceCoreV1NamespacedResourceQuota(params: ReplaceCoreV1NamespacedResourceQuotaRequest, opts?: APIClientRequestOpts): Promise<ResourceQuota> {
    const path = `/api/v1/namespaces/${params.namespace}/resourcequotas/${params.name}`;
    return await this.put<ResourceQuota>(path, params.query, params.body, opts);
  }
  async deleteCoreV1NamespacedResourceQuota(params: DeleteCoreV1NamespacedResourceQuotaRequest, opts?: APIClientRequestOpts): Promise<ResourceQuota> {
    const path = `/api/v1/namespaces/${params.namespace}/resourcequotas/${params.name}`;
    return await this.delete<ResourceQuota>(path, params.query, null, opts);
  }
  async patchCoreV1NamespacedResourceQuota(params: PatchCoreV1NamespacedResourceQuotaRequest, opts?: APIClientRequestOpts): Promise<ResourceQuota> {
    const path = `/api/v1/namespaces/${params.namespace}/resourcequotas/${params.name}`;
    return await this.patch<ResourceQuota>(path, params.query, params.body, opts);
  }
  async readCoreV1NamespacedResourceQuotaStatus(params: ReadCoreV1NamespacedResourceQuotaStatusRequest, opts?: APIClientRequestOpts): Promise<ResourceQuota> {
    const path = `/api/v1/namespaces/${params.namespace}/resourcequotas/${params.name}/status`;
    return await this.get<ResourceQuota>(path, null, null, opts);
  }
  async replaceCoreV1NamespacedResourceQuotaStatus(params: ReplaceCoreV1NamespacedResourceQuotaStatusRequest, opts?: APIClientRequestOpts): Promise<ResourceQuota> {
    const path = `/api/v1/namespaces/${params.namespace}/resourcequotas/${params.name}/status`;
    return await this.put<ResourceQuota>(path, params.query, params.body, opts);
  }
  async patchCoreV1NamespacedResourceQuotaStatus(params: PatchCoreV1NamespacedResourceQuotaStatusRequest, opts?: APIClientRequestOpts): Promise<ResourceQuota> {
    const path = `/api/v1/namespaces/${params.namespace}/resourcequotas/${params.name}/status`;
    return await this.patch<ResourceQuota>(path, params.query, params.body, opts);
  }
  async listCoreV1NamespacedSecret(params: ListCoreV1NamespacedSecretRequest, opts?: APIClientRequestOpts): Promise<SecretList> {
    const path = `/api/v1/namespaces/${params.namespace}/secrets`;
    return await this.get<SecretList>(path, params.query, null, opts);
  }
  async createCoreV1NamespacedSecret(params: CreateCoreV1NamespacedSecretRequest, opts?: APIClientRequestOpts): Promise<Secret> {
    const path = `/api/v1/namespaces/${params.namespace}/secrets`;
    return await this.post<Secret>(path, params.query, params.body, opts);
  }
  async deleteCoreV1CollectionNamespacedSecret(params: DeleteCoreV1CollectionNamespacedSecretRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/api/v1/namespaces/${params.namespace}/secrets`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readCoreV1NamespacedSecret(params: ReadCoreV1NamespacedSecretRequest, opts?: APIClientRequestOpts): Promise<Secret> {
    const path = `/api/v1/namespaces/${params.namespace}/secrets/${params.name}`;
    return await this.get<Secret>(path, null, null, opts);
  }
  async replaceCoreV1NamespacedSecret(params: ReplaceCoreV1NamespacedSecretRequest, opts?: APIClientRequestOpts): Promise<Secret> {
    const path = `/api/v1/namespaces/${params.namespace}/secrets/${params.name}`;
    return await this.put<Secret>(path, params.query, params.body, opts);
  }
  async deleteCoreV1NamespacedSecret(params: DeleteCoreV1NamespacedSecretRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/api/v1/namespaces/${params.namespace}/secrets/${params.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchCoreV1NamespacedSecret(params: PatchCoreV1NamespacedSecretRequest, opts?: APIClientRequestOpts): Promise<Secret> {
    const path = `/api/v1/namespaces/${params.namespace}/secrets/${params.name}`;
    return await this.patch<Secret>(path, params.query, params.body, opts);
  }
  async listCoreV1NamespacedServiceAccount(params: ListCoreV1NamespacedServiceAccountRequest, opts?: APIClientRequestOpts): Promise<ServiceAccountList> {
    const path = `/api/v1/namespaces/${params.namespace}/serviceaccounts`;
    return await this.get<ServiceAccountList>(path, params.query, null, opts);
  }
  async createCoreV1NamespacedServiceAccount(params: CreateCoreV1NamespacedServiceAccountRequest, opts?: APIClientRequestOpts): Promise<ServiceAccount> {
    const path = `/api/v1/namespaces/${params.namespace}/serviceaccounts`;
    return await this.post<ServiceAccount>(path, params.query, params.body, opts);
  }
  async deleteCoreV1CollectionNamespacedServiceAccount(params: DeleteCoreV1CollectionNamespacedServiceAccountRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/api/v1/namespaces/${params.namespace}/serviceaccounts`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readCoreV1NamespacedServiceAccount(params: ReadCoreV1NamespacedServiceAccountRequest, opts?: APIClientRequestOpts): Promise<ServiceAccount> {
    const path = `/api/v1/namespaces/${params.namespace}/serviceaccounts/${params.name}`;
    return await this.get<ServiceAccount>(path, null, null, opts);
  }
  async replaceCoreV1NamespacedServiceAccount(params: ReplaceCoreV1NamespacedServiceAccountRequest, opts?: APIClientRequestOpts): Promise<ServiceAccount> {
    const path = `/api/v1/namespaces/${params.namespace}/serviceaccounts/${params.name}`;
    return await this.put<ServiceAccount>(path, params.query, params.body, opts);
  }
  async deleteCoreV1NamespacedServiceAccount(params: DeleteCoreV1NamespacedServiceAccountRequest, opts?: APIClientRequestOpts): Promise<ServiceAccount> {
    const path = `/api/v1/namespaces/${params.namespace}/serviceaccounts/${params.name}`;
    return await this.delete<ServiceAccount>(path, params.query, null, opts);
  }
  async patchCoreV1NamespacedServiceAccount(params: PatchCoreV1NamespacedServiceAccountRequest, opts?: APIClientRequestOpts): Promise<ServiceAccount> {
    const path = `/api/v1/namespaces/${params.namespace}/serviceaccounts/${params.name}`;
    return await this.patch<ServiceAccount>(path, params.query, params.body, opts);
  }
  async createCoreV1NamespacedServiceAccountToken(params: CreateCoreV1NamespacedServiceAccountTokenRequest, opts?: APIClientRequestOpts): Promise<TokenRequest> {
    const path = `/api/v1/namespaces/${params.namespace}/serviceaccounts/${params.name}/token`;
    return await this.post<TokenRequest>(path, null, params.body, opts);
  }
  async listCoreV1NamespacedService(params: ListCoreV1NamespacedServiceRequest, opts?: APIClientRequestOpts): Promise<ServiceList> {
    const path = `/api/v1/namespaces/${params.namespace}/services`;
    return await this.get<ServiceList>(path, params.query, null, opts);
  }
  async createCoreV1NamespacedService(params: CreateCoreV1NamespacedServiceRequest, opts?: APIClientRequestOpts): Promise<Service> {
    const path = `/api/v1/namespaces/${params.namespace}/services`;
    return await this.post<Service>(path, params.query, params.body, opts);
  }
  async readCoreV1NamespacedService(params: ReadCoreV1NamespacedServiceRequest, opts?: APIClientRequestOpts): Promise<Service> {
    const path = `/api/v1/namespaces/${params.namespace}/services/${params.name}`;
    return await this.get<Service>(path, null, null, opts);
  }
  async replaceCoreV1NamespacedService(params: ReplaceCoreV1NamespacedServiceRequest, opts?: APIClientRequestOpts): Promise<Service> {
    const path = `/api/v1/namespaces/${params.namespace}/services/${params.name}`;
    return await this.put<Service>(path, params.query, params.body, opts);
  }
  async deleteCoreV1NamespacedService(params: DeleteCoreV1NamespacedServiceRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/api/v1/namespaces/${params.namespace}/services/${params.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchCoreV1NamespacedService(params: PatchCoreV1NamespacedServiceRequest, opts?: APIClientRequestOpts): Promise<Service> {
    const path = `/api/v1/namespaces/${params.namespace}/services/${params.name}`;
    return await this.patch<Service>(path, params.query, params.body, opts);
  }
  async connectCoreV1GetNamespacedServiceProxy(params: ConnectCoreV1GetNamespacedServiceProxyRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/namespaces/${params.namespace}/services/${params.name}/proxy`;
    return await this.get<string>(path, null, null, opts);
  }
  async connectCoreV1PostNamespacedServiceProxy(params: ConnectCoreV1PostNamespacedServiceProxyRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/namespaces/${params.namespace}/services/${params.name}/proxy`;
    return await this.post<string>(path, null, null, opts);
  }
  async connectCoreV1PutNamespacedServiceProxy(params: ConnectCoreV1PutNamespacedServiceProxyRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/namespaces/${params.namespace}/services/${params.name}/proxy`;
    return await this.put<string>(path, null, null, opts);
  }
  async connectCoreV1DeleteNamespacedServiceProxy(params: ConnectCoreV1DeleteNamespacedServiceProxyRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/namespaces/${params.namespace}/services/${params.name}/proxy`;
    return await this.delete<string>(path, null, null, opts);
  }
  async connectCoreV1OptionsNamespacedServiceProxy(params: ConnectCoreV1OptionsNamespacedServiceProxyRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/namespaces/${params.namespace}/services/${params.name}/proxy`;
    return await this.options<string>(path, null, null, opts);
  }
  async connectCoreV1HeadNamespacedServiceProxy(params: ConnectCoreV1HeadNamespacedServiceProxyRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/namespaces/${params.namespace}/services/${params.name}/proxy`;
    return await this.head<string>(path, null, null, opts);
  }
  async connectCoreV1PatchNamespacedServiceProxy(params: ConnectCoreV1PatchNamespacedServiceProxyRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/namespaces/${params.namespace}/services/${params.name}/proxy`;
    return await this.patch<string>(path, null, null, opts);
  }
  async connectCoreV1GetNamespacedServiceProxyWithPath(params: ConnectCoreV1GetNamespacedServiceProxyWithPathRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/namespaces/${params.namespace}/services/${params.name}/proxy/${params.path}`;
    return await this.get<string>(path, null, null, opts);
  }
  async connectCoreV1PostNamespacedServiceProxyWithPath(params: ConnectCoreV1PostNamespacedServiceProxyWithPathRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/namespaces/${params.namespace}/services/${params.name}/proxy/${params.path}`;
    return await this.post<string>(path, null, null, opts);
  }
  async connectCoreV1PutNamespacedServiceProxyWithPath(params: ConnectCoreV1PutNamespacedServiceProxyWithPathRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/namespaces/${params.namespace}/services/${params.name}/proxy/${params.path}`;
    return await this.put<string>(path, null, null, opts);
  }
  async connectCoreV1DeleteNamespacedServiceProxyWithPath(params: ConnectCoreV1DeleteNamespacedServiceProxyWithPathRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/namespaces/${params.namespace}/services/${params.name}/proxy/${params.path}`;
    return await this.delete<string>(path, null, null, opts);
  }
  async connectCoreV1OptionsNamespacedServiceProxyWithPath(params: ConnectCoreV1OptionsNamespacedServiceProxyWithPathRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/namespaces/${params.namespace}/services/${params.name}/proxy/${params.path}`;
    return await this.options<string>(path, null, null, opts);
  }
  async connectCoreV1HeadNamespacedServiceProxyWithPath(params: ConnectCoreV1HeadNamespacedServiceProxyWithPathRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/namespaces/${params.namespace}/services/${params.name}/proxy/${params.path}`;
    return await this.head<string>(path, null, null, opts);
  }
  async connectCoreV1PatchNamespacedServiceProxyWithPath(params: ConnectCoreV1PatchNamespacedServiceProxyWithPathRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/namespaces/${params.namespace}/services/${params.name}/proxy/${params.path}`;
    return await this.patch<string>(path, null, null, opts);
  }
  async readCoreV1NamespacedServiceStatus(params: ReadCoreV1NamespacedServiceStatusRequest, opts?: APIClientRequestOpts): Promise<Service> {
    const path = `/api/v1/namespaces/${params.namespace}/services/${params.name}/status`;
    return await this.get<Service>(path, null, null, opts);
  }
  async replaceCoreV1NamespacedServiceStatus(params: ReplaceCoreV1NamespacedServiceStatusRequest, opts?: APIClientRequestOpts): Promise<Service> {
    const path = `/api/v1/namespaces/${params.namespace}/services/${params.name}/status`;
    return await this.put<Service>(path, params.query, params.body, opts);
  }
  async patchCoreV1NamespacedServiceStatus(params: PatchCoreV1NamespacedServiceStatusRequest, opts?: APIClientRequestOpts): Promise<Service> {
    const path = `/api/v1/namespaces/${params.namespace}/services/${params.name}/status`;
    return await this.patch<Service>(path, params.query, params.body, opts);
  }
  async readCoreV1Namespace(params: ReadCoreV1NamespaceRequest, opts?: APIClientRequestOpts): Promise<Namespace> {
    const path = `/api/v1/namespaces/${params.name}`;
    return await this.get<Namespace>(path, null, null, opts);
  }
  async replaceCoreV1Namespace(params: ReplaceCoreV1NamespaceRequest, opts?: APIClientRequestOpts): Promise<Namespace> {
    const path = `/api/v1/namespaces/${params.name}`;
    return await this.put<Namespace>(path, params.query, params.body, opts);
  }
  async deleteCoreV1Namespace(params: DeleteCoreV1NamespaceRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/api/v1/namespaces/${params.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchCoreV1Namespace(params: PatchCoreV1NamespaceRequest, opts?: APIClientRequestOpts): Promise<Namespace> {
    const path = `/api/v1/namespaces/${params.name}`;
    return await this.patch<Namespace>(path, params.query, params.body, opts);
  }
  async replaceCoreV1NamespaceFinalize(params: ReplaceCoreV1NamespaceFinalizeRequest, opts?: APIClientRequestOpts): Promise<Namespace> {
    const path = `/api/v1/namespaces/${params.name}/finalize`;
    return await this.put<Namespace>(path, null, params.body, opts);
  }
  async readCoreV1NamespaceStatus(params: ReadCoreV1NamespaceStatusRequest, opts?: APIClientRequestOpts): Promise<Namespace> {
    const path = `/api/v1/namespaces/${params.name}/status`;
    return await this.get<Namespace>(path, null, null, opts);
  }
  async replaceCoreV1NamespaceStatus(params: ReplaceCoreV1NamespaceStatusRequest, opts?: APIClientRequestOpts): Promise<Namespace> {
    const path = `/api/v1/namespaces/${params.name}/status`;
    return await this.put<Namespace>(path, params.query, params.body, opts);
  }
  async patchCoreV1NamespaceStatus(params: PatchCoreV1NamespaceStatusRequest, opts?: APIClientRequestOpts): Promise<Namespace> {
    const path = `/api/v1/namespaces/${params.name}/status`;
    return await this.patch<Namespace>(path, params.query, params.body, opts);
  }
  async listCoreV1Node(params: ListCoreV1NodeRequest, opts?: APIClientRequestOpts): Promise<NodeList> {
    const path = `/api/v1/nodes`;
    return await this.get<NodeList>(path, params.query, null, opts);
  }
  async createCoreV1Node(params: CreateCoreV1NodeRequest, opts?: APIClientRequestOpts): Promise<Node> {
    const path = `/api/v1/nodes`;
    return await this.post<Node>(path, params.query, params.body, opts);
  }
  async deleteCoreV1CollectionNode(params: DeleteCoreV1CollectionNodeRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/api/v1/nodes`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readCoreV1Node(params: ReadCoreV1NodeRequest, opts?: APIClientRequestOpts): Promise<Node> {
    const path = `/api/v1/nodes/${params.name}`;
    return await this.get<Node>(path, null, null, opts);
  }
  async replaceCoreV1Node(params: ReplaceCoreV1NodeRequest, opts?: APIClientRequestOpts): Promise<Node> {
    const path = `/api/v1/nodes/${params.name}`;
    return await this.put<Node>(path, params.query, params.body, opts);
  }
  async deleteCoreV1Node(params: DeleteCoreV1NodeRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/api/v1/nodes/${params.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchCoreV1Node(params: PatchCoreV1NodeRequest, opts?: APIClientRequestOpts): Promise<Node> {
    const path = `/api/v1/nodes/${params.name}`;
    return await this.patch<Node>(path, params.query, params.body, opts);
  }
  async connectCoreV1GetNodeProxy(params: ConnectCoreV1GetNodeProxyRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/nodes/${params.name}/proxy`;
    return await this.get<string>(path, null, null, opts);
  }
  async connectCoreV1PostNodeProxy(params: ConnectCoreV1PostNodeProxyRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/nodes/${params.name}/proxy`;
    return await this.post<string>(path, null, null, opts);
  }
  async connectCoreV1PutNodeProxy(params: ConnectCoreV1PutNodeProxyRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/nodes/${params.name}/proxy`;
    return await this.put<string>(path, null, null, opts);
  }
  async connectCoreV1DeleteNodeProxy(params: ConnectCoreV1DeleteNodeProxyRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/nodes/${params.name}/proxy`;
    return await this.delete<string>(path, null, null, opts);
  }
  async connectCoreV1OptionsNodeProxy(params: ConnectCoreV1OptionsNodeProxyRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/nodes/${params.name}/proxy`;
    return await this.options<string>(path, null, null, opts);
  }
  async connectCoreV1HeadNodeProxy(params: ConnectCoreV1HeadNodeProxyRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/nodes/${params.name}/proxy`;
    return await this.head<string>(path, null, null, opts);
  }
  async connectCoreV1PatchNodeProxy(params: ConnectCoreV1PatchNodeProxyRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/nodes/${params.name}/proxy`;
    return await this.patch<string>(path, null, null, opts);
  }
  async connectCoreV1GetNodeProxyWithPath(params: ConnectCoreV1GetNodeProxyWithPathRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/nodes/${params.name}/proxy/${params.path}`;
    return await this.get<string>(path, null, null, opts);
  }
  async connectCoreV1PostNodeProxyWithPath(params: ConnectCoreV1PostNodeProxyWithPathRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/nodes/${params.name}/proxy/${params.path}`;
    return await this.post<string>(path, null, null, opts);
  }
  async connectCoreV1PutNodeProxyWithPath(params: ConnectCoreV1PutNodeProxyWithPathRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/nodes/${params.name}/proxy/${params.path}`;
    return await this.put<string>(path, null, null, opts);
  }
  async connectCoreV1DeleteNodeProxyWithPath(params: ConnectCoreV1DeleteNodeProxyWithPathRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/nodes/${params.name}/proxy/${params.path}`;
    return await this.delete<string>(path, null, null, opts);
  }
  async connectCoreV1OptionsNodeProxyWithPath(params: ConnectCoreV1OptionsNodeProxyWithPathRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/nodes/${params.name}/proxy/${params.path}`;
    return await this.options<string>(path, null, null, opts);
  }
  async connectCoreV1HeadNodeProxyWithPath(params: ConnectCoreV1HeadNodeProxyWithPathRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/nodes/${params.name}/proxy/${params.path}`;
    return await this.head<string>(path, null, null, opts);
  }
  async connectCoreV1PatchNodeProxyWithPath(params: ConnectCoreV1PatchNodeProxyWithPathRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/nodes/${params.name}/proxy/${params.path}`;
    return await this.patch<string>(path, null, null, opts);
  }
  async readCoreV1NodeStatus(params: ReadCoreV1NodeStatusRequest, opts?: APIClientRequestOpts): Promise<Node> {
    const path = `/api/v1/nodes/${params.name}/status`;
    return await this.get<Node>(path, null, null, opts);
  }
  async replaceCoreV1NodeStatus(params: ReplaceCoreV1NodeStatusRequest, opts?: APIClientRequestOpts): Promise<Node> {
    const path = `/api/v1/nodes/${params.name}/status`;
    return await this.put<Node>(path, params.query, params.body, opts);
  }
  async patchCoreV1NodeStatus(params: PatchCoreV1NodeStatusRequest, opts?: APIClientRequestOpts): Promise<Node> {
    const path = `/api/v1/nodes/${params.name}/status`;
    return await this.patch<Node>(path, params.query, params.body, opts);
  }
  async listCoreV1PersistentVolumeClaimForAllNamespaces(params: ListCoreV1PersistentVolumeClaimForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<PersistentVolumeClaimList> {
    const path = `/api/v1/persistentvolumeclaims`;
    return await this.get<PersistentVolumeClaimList>(path, null, null, opts);
  }
  async listCoreV1PersistentVolume(params: ListCoreV1PersistentVolumeRequest, opts?: APIClientRequestOpts): Promise<PersistentVolumeList> {
    const path = `/api/v1/persistentvolumes`;
    return await this.get<PersistentVolumeList>(path, params.query, null, opts);
  }
  async createCoreV1PersistentVolume(params: CreateCoreV1PersistentVolumeRequest, opts?: APIClientRequestOpts): Promise<PersistentVolume> {
    const path = `/api/v1/persistentvolumes`;
    return await this.post<PersistentVolume>(path, params.query, params.body, opts);
  }
  async deleteCoreV1CollectionPersistentVolume(params: DeleteCoreV1CollectionPersistentVolumeRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/api/v1/persistentvolumes`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readCoreV1PersistentVolume(params: ReadCoreV1PersistentVolumeRequest, opts?: APIClientRequestOpts): Promise<PersistentVolume> {
    const path = `/api/v1/persistentvolumes/${params.name}`;
    return await this.get<PersistentVolume>(path, null, null, opts);
  }
  async replaceCoreV1PersistentVolume(params: ReplaceCoreV1PersistentVolumeRequest, opts?: APIClientRequestOpts): Promise<PersistentVolume> {
    const path = `/api/v1/persistentvolumes/${params.name}`;
    return await this.put<PersistentVolume>(path, params.query, params.body, opts);
  }
  async deleteCoreV1PersistentVolume(params: DeleteCoreV1PersistentVolumeRequest, opts?: APIClientRequestOpts): Promise<PersistentVolume> {
    const path = `/api/v1/persistentvolumes/${params.name}`;
    return await this.delete<PersistentVolume>(path, params.query, null, opts);
  }
  async patchCoreV1PersistentVolume(params: PatchCoreV1PersistentVolumeRequest, opts?: APIClientRequestOpts): Promise<PersistentVolume> {
    const path = `/api/v1/persistentvolumes/${params.name}`;
    return await this.patch<PersistentVolume>(path, params.query, params.body, opts);
  }
  async readCoreV1PersistentVolumeStatus(params: ReadCoreV1PersistentVolumeStatusRequest, opts?: APIClientRequestOpts): Promise<PersistentVolume> {
    const path = `/api/v1/persistentvolumes/${params.name}/status`;
    return await this.get<PersistentVolume>(path, null, null, opts);
  }
  async replaceCoreV1PersistentVolumeStatus(params: ReplaceCoreV1PersistentVolumeStatusRequest, opts?: APIClientRequestOpts): Promise<PersistentVolume> {
    const path = `/api/v1/persistentvolumes/${params.name}/status`;
    return await this.put<PersistentVolume>(path, params.query, params.body, opts);
  }
  async patchCoreV1PersistentVolumeStatus(params: PatchCoreV1PersistentVolumeStatusRequest, opts?: APIClientRequestOpts): Promise<PersistentVolume> {
    const path = `/api/v1/persistentvolumes/${params.name}/status`;
    return await this.patch<PersistentVolume>(path, params.query, params.body, opts);
  }
  async listCoreV1PodForAllNamespaces(params: ListCoreV1PodForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<PodList> {
    const path = `/api/v1/pods`;
    return await this.get<PodList>(path, null, null, opts);
  }
  async listCoreV1PodTemplateForAllNamespaces(params: ListCoreV1PodTemplateForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<PodTemplateList> {
    const path = `/api/v1/podtemplates`;
    return await this.get<PodTemplateList>(path, null, null, opts);
  }
  async listCoreV1ReplicationControllerForAllNamespaces(params: ListCoreV1ReplicationControllerForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<ReplicationControllerList> {
    const path = `/api/v1/replicationcontrollers`;
    return await this.get<ReplicationControllerList>(path, null, null, opts);
  }
  async listCoreV1ResourceQuotaForAllNamespaces(params: ListCoreV1ResourceQuotaForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<ResourceQuotaList> {
    const path = `/api/v1/resourcequotas`;
    return await this.get<ResourceQuotaList>(path, null, null, opts);
  }
  async listCoreV1SecretForAllNamespaces(params: ListCoreV1SecretForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<SecretList> {
    const path = `/api/v1/secrets`;
    return await this.get<SecretList>(path, null, null, opts);
  }
  async listCoreV1ServiceAccountForAllNamespaces(params: ListCoreV1ServiceAccountForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<ServiceAccountList> {
    const path = `/api/v1/serviceaccounts`;
    return await this.get<ServiceAccountList>(path, null, null, opts);
  }
  async listCoreV1ServiceForAllNamespaces(params: ListCoreV1ServiceForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<ServiceList> {
    const path = `/api/v1/services`;
    return await this.get<ServiceList>(path, null, null, opts);
  }
  async watchCoreV1ConfigMapListForAllNamespaces(params: WatchCoreV1ConfigMapListForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/configmaps`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1EndpointsListForAllNamespaces(params: WatchCoreV1EndpointsListForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/endpoints`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1EventListForAllNamespaces(params: WatchCoreV1EventListForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/events`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1LimitRangeListForAllNamespaces(params: WatchCoreV1LimitRangeListForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/limitranges`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1NamespaceList(params: WatchCoreV1NamespaceListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/namespaces`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1NamespacedConfigMapList(params: WatchCoreV1NamespacedConfigMapListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/namespaces/${params.namespace}/configmaps`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1NamespacedConfigMap(params: WatchCoreV1NamespacedConfigMapRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/namespaces/${params.namespace}/configmaps/${params.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1NamespacedEndpointsList(params: WatchCoreV1NamespacedEndpointsListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/namespaces/${params.namespace}/endpoints`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1NamespacedEndpoints(params: WatchCoreV1NamespacedEndpointsRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/namespaces/${params.namespace}/endpoints/${params.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1NamespacedEventList(params: WatchCoreV1NamespacedEventListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/namespaces/${params.namespace}/events`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1NamespacedEvent(params: WatchCoreV1NamespacedEventRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/namespaces/${params.namespace}/events/${params.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1NamespacedLimitRangeList(params: WatchCoreV1NamespacedLimitRangeListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/namespaces/${params.namespace}/limitranges`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1NamespacedLimitRange(params: WatchCoreV1NamespacedLimitRangeRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/namespaces/${params.namespace}/limitranges/${params.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1NamespacedPersistentVolumeClaimList(params: WatchCoreV1NamespacedPersistentVolumeClaimListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/namespaces/${params.namespace}/persistentvolumeclaims`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1NamespacedPersistentVolumeClaim(params: WatchCoreV1NamespacedPersistentVolumeClaimRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/namespaces/${params.namespace}/persistentvolumeclaims/${params.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1NamespacedPodList(params: WatchCoreV1NamespacedPodListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/namespaces/${params.namespace}/pods`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1NamespacedPod(params: WatchCoreV1NamespacedPodRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/namespaces/${params.namespace}/pods/${params.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1NamespacedPodTemplateList(params: WatchCoreV1NamespacedPodTemplateListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/namespaces/${params.namespace}/podtemplates`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1NamespacedPodTemplate(params: WatchCoreV1NamespacedPodTemplateRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/namespaces/${params.namespace}/podtemplates/${params.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1NamespacedReplicationControllerList(params: WatchCoreV1NamespacedReplicationControllerListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/namespaces/${params.namespace}/replicationcontrollers`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1NamespacedReplicationController(params: WatchCoreV1NamespacedReplicationControllerRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/namespaces/${params.namespace}/replicationcontrollers/${params.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1NamespacedResourceQuotaList(params: WatchCoreV1NamespacedResourceQuotaListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/namespaces/${params.namespace}/resourcequotas`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1NamespacedResourceQuota(params: WatchCoreV1NamespacedResourceQuotaRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/namespaces/${params.namespace}/resourcequotas/${params.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1NamespacedSecretList(params: WatchCoreV1NamespacedSecretListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/namespaces/${params.namespace}/secrets`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1NamespacedSecret(params: WatchCoreV1NamespacedSecretRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/namespaces/${params.namespace}/secrets/${params.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1NamespacedServiceAccountList(params: WatchCoreV1NamespacedServiceAccountListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/namespaces/${params.namespace}/serviceaccounts`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1NamespacedServiceAccount(params: WatchCoreV1NamespacedServiceAccountRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/namespaces/${params.namespace}/serviceaccounts/${params.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1NamespacedServiceList(params: WatchCoreV1NamespacedServiceListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/namespaces/${params.namespace}/services`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1NamespacedService(params: WatchCoreV1NamespacedServiceRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/namespaces/${params.namespace}/services/${params.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1Namespace(params: WatchCoreV1NamespaceRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/namespaces/${params.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1NodeList(params: WatchCoreV1NodeListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/nodes`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1Node(params: WatchCoreV1NodeRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/nodes/${params.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1PersistentVolumeClaimListForAllNamespaces(params: WatchCoreV1PersistentVolumeClaimListForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/persistentvolumeclaims`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1PersistentVolumeList(params: WatchCoreV1PersistentVolumeListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/persistentvolumes`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1PersistentVolume(params: WatchCoreV1PersistentVolumeRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/persistentvolumes/${params.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1PodListForAllNamespaces(params: WatchCoreV1PodListForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/pods`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1PodTemplateListForAllNamespaces(params: WatchCoreV1PodTemplateListForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/podtemplates`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1ReplicationControllerListForAllNamespaces(params: WatchCoreV1ReplicationControllerListForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/replicationcontrollers`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1ResourceQuotaListForAllNamespaces(params: WatchCoreV1ResourceQuotaListForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/resourcequotas`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1SecretListForAllNamespaces(params: WatchCoreV1SecretListForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/secrets`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1ServiceAccountListForAllNamespaces(params: WatchCoreV1ServiceAccountListForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/serviceaccounts`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1ServiceListForAllNamespaces(params: WatchCoreV1ServiceListForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/services`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async getAPIVersions(params: GetAPIVersionsRequest, opts?: APIClientRequestOpts): Promise<APIGroupList> {
    const path = `/apis/`;
    return await this.get<APIGroupList>(path, null, null, opts);
  }
  async getAdmissionregistrationAPIGroup(params: GetAdmissionregistrationAPIGroupRequest, opts?: APIClientRequestOpts): Promise<APIGroup> {
    const path = `/apis/admissionregistration.k8s.io/`;
    return await this.get<APIGroup>(path, null, null, opts);
  }
  async getAdmissionregistrationV1APIResources(params: GetAdmissionregistrationV1APIResourcesRequest, opts?: APIClientRequestOpts): Promise<APIResourceList> {
    const path = `/apis/admissionregistration.k8s.io/v1/`;
    return await this.get<APIResourceList>(path, null, null, opts);
  }
  async listAdmissionregistrationV1MutatingWebhookConfiguration(params: ListAdmissionregistrationV1MutatingWebhookConfigurationRequest, opts?: APIClientRequestOpts): Promise<MutatingWebhookConfigurationList> {
    const path = `/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations`;
    return await this.get<MutatingWebhookConfigurationList>(path, params.query, null, opts);
  }
  async createAdmissionregistrationV1MutatingWebhookConfiguration(params: CreateAdmissionregistrationV1MutatingWebhookConfigurationRequest, opts?: APIClientRequestOpts): Promise<MutatingWebhookConfiguration> {
    const path = `/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations`;
    return await this.post<MutatingWebhookConfiguration>(path, params.query, params.body, opts);
  }
  async deleteAdmissionregistrationV1CollectionMutatingWebhookConfiguration(params: DeleteAdmissionregistrationV1CollectionMutatingWebhookConfigurationRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readAdmissionregistrationV1MutatingWebhookConfiguration(params: ReadAdmissionregistrationV1MutatingWebhookConfigurationRequest, opts?: APIClientRequestOpts): Promise<MutatingWebhookConfiguration> {
    const path = `/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/${params.name}`;
    return await this.get<MutatingWebhookConfiguration>(path, null, null, opts);
  }
  async replaceAdmissionregistrationV1MutatingWebhookConfiguration(params: ReplaceAdmissionregistrationV1MutatingWebhookConfigurationRequest, opts?: APIClientRequestOpts): Promise<MutatingWebhookConfiguration> {
    const path = `/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/${params.name}`;
    return await this.put<MutatingWebhookConfiguration>(path, params.query, params.body, opts);
  }
  async deleteAdmissionregistrationV1MutatingWebhookConfiguration(params: DeleteAdmissionregistrationV1MutatingWebhookConfigurationRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/${params.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchAdmissionregistrationV1MutatingWebhookConfiguration(params: PatchAdmissionregistrationV1MutatingWebhookConfigurationRequest, opts?: APIClientRequestOpts): Promise<MutatingWebhookConfiguration> {
    const path = `/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/${params.name}`;
    return await this.patch<MutatingWebhookConfiguration>(path, params.query, params.body, opts);
  }
  async listAdmissionregistrationV1ValidatingWebhookConfiguration(params: ListAdmissionregistrationV1ValidatingWebhookConfigurationRequest, opts?: APIClientRequestOpts): Promise<ValidatingWebhookConfigurationList> {
    const path = `/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations`;
    return await this.get<ValidatingWebhookConfigurationList>(path, params.query, null, opts);
  }
  async createAdmissionregistrationV1ValidatingWebhookConfiguration(params: CreateAdmissionregistrationV1ValidatingWebhookConfigurationRequest, opts?: APIClientRequestOpts): Promise<ValidatingWebhookConfiguration> {
    const path = `/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations`;
    return await this.post<ValidatingWebhookConfiguration>(path, params.query, params.body, opts);
  }
  async deleteAdmissionregistrationV1CollectionValidatingWebhookConfiguration(params: DeleteAdmissionregistrationV1CollectionValidatingWebhookConfigurationRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readAdmissionregistrationV1ValidatingWebhookConfiguration(params: ReadAdmissionregistrationV1ValidatingWebhookConfigurationRequest, opts?: APIClientRequestOpts): Promise<ValidatingWebhookConfiguration> {
    const path = `/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/${params.name}`;
    return await this.get<ValidatingWebhookConfiguration>(path, null, null, opts);
  }
  async replaceAdmissionregistrationV1ValidatingWebhookConfiguration(params: ReplaceAdmissionregistrationV1ValidatingWebhookConfigurationRequest, opts?: APIClientRequestOpts): Promise<ValidatingWebhookConfiguration> {
    const path = `/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/${params.name}`;
    return await this.put<ValidatingWebhookConfiguration>(path, params.query, params.body, opts);
  }
  async deleteAdmissionregistrationV1ValidatingWebhookConfiguration(params: DeleteAdmissionregistrationV1ValidatingWebhookConfigurationRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/${params.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchAdmissionregistrationV1ValidatingWebhookConfiguration(params: PatchAdmissionregistrationV1ValidatingWebhookConfigurationRequest, opts?: APIClientRequestOpts): Promise<ValidatingWebhookConfiguration> {
    const path = `/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/${params.name}`;
    return await this.patch<ValidatingWebhookConfiguration>(path, params.query, params.body, opts);
  }
  async watchAdmissionregistrationV1MutatingWebhookConfigurationList(params: WatchAdmissionregistrationV1MutatingWebhookConfigurationListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/admissionregistration.k8s.io/v1/watch/mutatingwebhookconfigurations`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchAdmissionregistrationV1MutatingWebhookConfiguration(params: WatchAdmissionregistrationV1MutatingWebhookConfigurationRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/admissionregistration.k8s.io/v1/watch/mutatingwebhookconfigurations/${params.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchAdmissionregistrationV1ValidatingWebhookConfigurationList(params: WatchAdmissionregistrationV1ValidatingWebhookConfigurationListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/admissionregistration.k8s.io/v1/watch/validatingwebhookconfigurations`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchAdmissionregistrationV1ValidatingWebhookConfiguration(params: WatchAdmissionregistrationV1ValidatingWebhookConfigurationRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/admissionregistration.k8s.io/v1/watch/validatingwebhookconfigurations/${params.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async getApiextensionsAPIGroup(params: GetApiextensionsAPIGroupRequest, opts?: APIClientRequestOpts): Promise<APIGroup> {
    const path = `/apis/apiextensions.k8s.io/`;
    return await this.get<APIGroup>(path, null, null, opts);
  }
  async getApiextensionsV1APIResources(params: GetApiextensionsV1APIResourcesRequest, opts?: APIClientRequestOpts): Promise<APIResourceList> {
    const path = `/apis/apiextensions.k8s.io/v1/`;
    return await this.get<APIResourceList>(path, null, null, opts);
  }
  async listApiextensionsV1CustomResourceDefinition(params: ListApiextensionsV1CustomResourceDefinitionRequest, opts?: APIClientRequestOpts): Promise<CustomResourceDefinitionList> {
    const path = `/apis/apiextensions.k8s.io/v1/customresourcedefinitions`;
    return await this.get<CustomResourceDefinitionList>(path, params.query, null, opts);
  }
  async createApiextensionsV1CustomResourceDefinition(params: CreateApiextensionsV1CustomResourceDefinitionRequest, opts?: APIClientRequestOpts): Promise<CustomResourceDefinition> {
    const path = `/apis/apiextensions.k8s.io/v1/customresourcedefinitions`;
    return await this.post<CustomResourceDefinition>(path, params.query, params.body, opts);
  }
  async deleteApiextensionsV1CollectionCustomResourceDefinition(params: DeleteApiextensionsV1CollectionCustomResourceDefinitionRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/apiextensions.k8s.io/v1/customresourcedefinitions`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readApiextensionsV1CustomResourceDefinition(params: ReadApiextensionsV1CustomResourceDefinitionRequest, opts?: APIClientRequestOpts): Promise<CustomResourceDefinition> {
    const path = `/apis/apiextensions.k8s.io/v1/customresourcedefinitions/${params.name}`;
    return await this.get<CustomResourceDefinition>(path, null, null, opts);
  }
  async replaceApiextensionsV1CustomResourceDefinition(params: ReplaceApiextensionsV1CustomResourceDefinitionRequest, opts?: APIClientRequestOpts): Promise<CustomResourceDefinition> {
    const path = `/apis/apiextensions.k8s.io/v1/customresourcedefinitions/${params.name}`;
    return await this.put<CustomResourceDefinition>(path, params.query, params.body, opts);
  }
  async deleteApiextensionsV1CustomResourceDefinition(params: DeleteApiextensionsV1CustomResourceDefinitionRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/apiextensions.k8s.io/v1/customresourcedefinitions/${params.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchApiextensionsV1CustomResourceDefinition(params: PatchApiextensionsV1CustomResourceDefinitionRequest, opts?: APIClientRequestOpts): Promise<CustomResourceDefinition> {
    const path = `/apis/apiextensions.k8s.io/v1/customresourcedefinitions/${params.name}`;
    return await this.patch<CustomResourceDefinition>(path, params.query, params.body, opts);
  }
  async readApiextensionsV1CustomResourceDefinitionStatus(params: ReadApiextensionsV1CustomResourceDefinitionStatusRequest, opts?: APIClientRequestOpts): Promise<CustomResourceDefinition> {
    const path = `/apis/apiextensions.k8s.io/v1/customresourcedefinitions/${params.name}/status`;
    return await this.get<CustomResourceDefinition>(path, null, null, opts);
  }
  async replaceApiextensionsV1CustomResourceDefinitionStatus(params: ReplaceApiextensionsV1CustomResourceDefinitionStatusRequest, opts?: APIClientRequestOpts): Promise<CustomResourceDefinition> {
    const path = `/apis/apiextensions.k8s.io/v1/customresourcedefinitions/${params.name}/status`;
    return await this.put<CustomResourceDefinition>(path, params.query, params.body, opts);
  }
  async patchApiextensionsV1CustomResourceDefinitionStatus(params: PatchApiextensionsV1CustomResourceDefinitionStatusRequest, opts?: APIClientRequestOpts): Promise<CustomResourceDefinition> {
    const path = `/apis/apiextensions.k8s.io/v1/customresourcedefinitions/${params.name}/status`;
    return await this.patch<CustomResourceDefinition>(path, params.query, params.body, opts);
  }
  async watchApiextensionsV1CustomResourceDefinitionList(params: WatchApiextensionsV1CustomResourceDefinitionListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/apiextensions.k8s.io/v1/watch/customresourcedefinitions`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchApiextensionsV1CustomResourceDefinition(params: WatchApiextensionsV1CustomResourceDefinitionRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/apiextensions.k8s.io/v1/watch/customresourcedefinitions/${params.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async getApiregistrationAPIGroup(params: GetApiregistrationAPIGroupRequest, opts?: APIClientRequestOpts): Promise<APIGroup> {
    const path = `/apis/apiregistration.k8s.io/`;
    return await this.get<APIGroup>(path, null, null, opts);
  }
  async getApiregistrationV1APIResources(params: GetApiregistrationV1APIResourcesRequest, opts?: APIClientRequestOpts): Promise<APIResourceList> {
    const path = `/apis/apiregistration.k8s.io/v1/`;
    return await this.get<APIResourceList>(path, null, null, opts);
  }
  async listApiregistrationV1APIService(params: ListApiregistrationV1APIServiceRequest, opts?: APIClientRequestOpts): Promise<APIServiceList> {
    const path = `/apis/apiregistration.k8s.io/v1/apiservices`;
    return await this.get<APIServiceList>(path, params.query, null, opts);
  }
  async createApiregistrationV1APIService(params: CreateApiregistrationV1APIServiceRequest, opts?: APIClientRequestOpts): Promise<APIService> {
    const path = `/apis/apiregistration.k8s.io/v1/apiservices`;
    return await this.post<APIService>(path, params.query, params.body, opts);
  }
  async deleteApiregistrationV1CollectionAPIService(params: DeleteApiregistrationV1CollectionAPIServiceRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/apiregistration.k8s.io/v1/apiservices`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readApiregistrationV1APIService(params: ReadApiregistrationV1APIServiceRequest, opts?: APIClientRequestOpts): Promise<APIService> {
    const path = `/apis/apiregistration.k8s.io/v1/apiservices/${params.name}`;
    return await this.get<APIService>(path, null, null, opts);
  }
  async replaceApiregistrationV1APIService(params: ReplaceApiregistrationV1APIServiceRequest, opts?: APIClientRequestOpts): Promise<APIService> {
    const path = `/apis/apiregistration.k8s.io/v1/apiservices/${params.name}`;
    return await this.put<APIService>(path, params.query, params.body, opts);
  }
  async deleteApiregistrationV1APIService(params: DeleteApiregistrationV1APIServiceRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/apiregistration.k8s.io/v1/apiservices/${params.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchApiregistrationV1APIService(params: PatchApiregistrationV1APIServiceRequest, opts?: APIClientRequestOpts): Promise<APIService> {
    const path = `/apis/apiregistration.k8s.io/v1/apiservices/${params.name}`;
    return await this.patch<APIService>(path, params.query, params.body, opts);
  }
  async readApiregistrationV1APIServiceStatus(params: ReadApiregistrationV1APIServiceStatusRequest, opts?: APIClientRequestOpts): Promise<APIService> {
    const path = `/apis/apiregistration.k8s.io/v1/apiservices/${params.name}/status`;
    return await this.get<APIService>(path, null, null, opts);
  }
  async replaceApiregistrationV1APIServiceStatus(params: ReplaceApiregistrationV1APIServiceStatusRequest, opts?: APIClientRequestOpts): Promise<APIService> {
    const path = `/apis/apiregistration.k8s.io/v1/apiservices/${params.name}/status`;
    return await this.put<APIService>(path, params.query, params.body, opts);
  }
  async patchApiregistrationV1APIServiceStatus(params: PatchApiregistrationV1APIServiceStatusRequest, opts?: APIClientRequestOpts): Promise<APIService> {
    const path = `/apis/apiregistration.k8s.io/v1/apiservices/${params.name}/status`;
    return await this.patch<APIService>(path, params.query, params.body, opts);
  }
  async watchApiregistrationV1APIServiceList(params: WatchApiregistrationV1APIServiceListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/apiregistration.k8s.io/v1/watch/apiservices`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchApiregistrationV1APIService(params: WatchApiregistrationV1APIServiceRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/apiregistration.k8s.io/v1/watch/apiservices/${params.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async getAppsAPIGroup(params: GetAppsAPIGroupRequest, opts?: APIClientRequestOpts): Promise<APIGroup> {
    const path = `/apis/apps/`;
    return await this.get<APIGroup>(path, null, null, opts);
  }
  async getAppsV1APIResources(params: GetAppsV1APIResourcesRequest, opts?: APIClientRequestOpts): Promise<APIResourceList> {
    const path = `/apis/apps/v1/`;
    return await this.get<APIResourceList>(path, null, null, opts);
  }
  async listAppsV1ControllerRevisionForAllNamespaces(params: ListAppsV1ControllerRevisionForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<ControllerRevisionList> {
    const path = `/apis/apps/v1/controllerrevisions`;
    return await this.get<ControllerRevisionList>(path, null, null, opts);
  }
  async listAppsV1DaemonSetForAllNamespaces(params: ListAppsV1DaemonSetForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<DaemonSetList> {
    const path = `/apis/apps/v1/daemonsets`;
    return await this.get<DaemonSetList>(path, null, null, opts);
  }
  async listAppsV1DeploymentForAllNamespaces(params: ListAppsV1DeploymentForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<DeploymentList> {
    const path = `/apis/apps/v1/deployments`;
    return await this.get<DeploymentList>(path, null, null, opts);
  }
  async listAppsV1NamespacedControllerRevision(params: ListAppsV1NamespacedControllerRevisionRequest, opts?: APIClientRequestOpts): Promise<ControllerRevisionList> {
    const path = `/apis/apps/v1/namespaces/${params.namespace}/controllerrevisions`;
    return await this.get<ControllerRevisionList>(path, params.query, null, opts);
  }
  async createAppsV1NamespacedControllerRevision(params: CreateAppsV1NamespacedControllerRevisionRequest, opts?: APIClientRequestOpts): Promise<ControllerRevision> {
    const path = `/apis/apps/v1/namespaces/${params.namespace}/controllerrevisions`;
    return await this.post<ControllerRevision>(path, params.query, params.body, opts);
  }
  async deleteAppsV1CollectionNamespacedControllerRevision(params: DeleteAppsV1CollectionNamespacedControllerRevisionRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/apps/v1/namespaces/${params.namespace}/controllerrevisions`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readAppsV1NamespacedControllerRevision(params: ReadAppsV1NamespacedControllerRevisionRequest, opts?: APIClientRequestOpts): Promise<ControllerRevision> {
    const path = `/apis/apps/v1/namespaces/${params.namespace}/controllerrevisions/${params.name}`;
    return await this.get<ControllerRevision>(path, null, null, opts);
  }
  async replaceAppsV1NamespacedControllerRevision(params: ReplaceAppsV1NamespacedControllerRevisionRequest, opts?: APIClientRequestOpts): Promise<ControllerRevision> {
    const path = `/apis/apps/v1/namespaces/${params.namespace}/controllerrevisions/${params.name}`;
    return await this.put<ControllerRevision>(path, params.query, params.body, opts);
  }
  async deleteAppsV1NamespacedControllerRevision(params: DeleteAppsV1NamespacedControllerRevisionRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/apps/v1/namespaces/${params.namespace}/controllerrevisions/${params.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchAppsV1NamespacedControllerRevision(params: PatchAppsV1NamespacedControllerRevisionRequest, opts?: APIClientRequestOpts): Promise<ControllerRevision> {
    const path = `/apis/apps/v1/namespaces/${params.namespace}/controllerrevisions/${params.name}`;
    return await this.patch<ControllerRevision>(path, params.query, params.body, opts);
  }
  async listAppsV1NamespacedDaemonSet(params: ListAppsV1NamespacedDaemonSetRequest, opts?: APIClientRequestOpts): Promise<DaemonSetList> {
    const path = `/apis/apps/v1/namespaces/${params.namespace}/daemonsets`;
    return await this.get<DaemonSetList>(path, params.query, null, opts);
  }
  async createAppsV1NamespacedDaemonSet(params: CreateAppsV1NamespacedDaemonSetRequest, opts?: APIClientRequestOpts): Promise<DaemonSet> {
    const path = `/apis/apps/v1/namespaces/${params.namespace}/daemonsets`;
    return await this.post<DaemonSet>(path, params.query, params.body, opts);
  }
  async deleteAppsV1CollectionNamespacedDaemonSet(params: DeleteAppsV1CollectionNamespacedDaemonSetRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/apps/v1/namespaces/${params.namespace}/daemonsets`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readAppsV1NamespacedDaemonSet(params: ReadAppsV1NamespacedDaemonSetRequest, opts?: APIClientRequestOpts): Promise<DaemonSet> {
    const path = `/apis/apps/v1/namespaces/${params.namespace}/daemonsets/${params.name}`;
    return await this.get<DaemonSet>(path, null, null, opts);
  }
  async replaceAppsV1NamespacedDaemonSet(params: ReplaceAppsV1NamespacedDaemonSetRequest, opts?: APIClientRequestOpts): Promise<DaemonSet> {
    const path = `/apis/apps/v1/namespaces/${params.namespace}/daemonsets/${params.name}`;
    return await this.put<DaemonSet>(path, params.query, params.body, opts);
  }
  async deleteAppsV1NamespacedDaemonSet(params: DeleteAppsV1NamespacedDaemonSetRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/apps/v1/namespaces/${params.namespace}/daemonsets/${params.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchAppsV1NamespacedDaemonSet(params: PatchAppsV1NamespacedDaemonSetRequest, opts?: APIClientRequestOpts): Promise<DaemonSet> {
    const path = `/apis/apps/v1/namespaces/${params.namespace}/daemonsets/${params.name}`;
    return await this.patch<DaemonSet>(path, params.query, params.body, opts);
  }
  async readAppsV1NamespacedDaemonSetStatus(params: ReadAppsV1NamespacedDaemonSetStatusRequest, opts?: APIClientRequestOpts): Promise<DaemonSet> {
    const path = `/apis/apps/v1/namespaces/${params.namespace}/daemonsets/${params.name}/status`;
    return await this.get<DaemonSet>(path, null, null, opts);
  }
  async replaceAppsV1NamespacedDaemonSetStatus(params: ReplaceAppsV1NamespacedDaemonSetStatusRequest, opts?: APIClientRequestOpts): Promise<DaemonSet> {
    const path = `/apis/apps/v1/namespaces/${params.namespace}/daemonsets/${params.name}/status`;
    return await this.put<DaemonSet>(path, params.query, params.body, opts);
  }
  async patchAppsV1NamespacedDaemonSetStatus(params: PatchAppsV1NamespacedDaemonSetStatusRequest, opts?: APIClientRequestOpts): Promise<DaemonSet> {
    const path = `/apis/apps/v1/namespaces/${params.namespace}/daemonsets/${params.name}/status`;
    return await this.patch<DaemonSet>(path, params.query, params.body, opts);
  }
  async listAppsV1NamespacedDeployment(params: ListAppsV1NamespacedDeploymentRequest, opts?: APIClientRequestOpts): Promise<DeploymentList> {
    const path = `/apis/apps/v1/namespaces/${params.namespace}/deployments`;
    return await this.get<DeploymentList>(path, params.query, null, opts);
  }
  async createAppsV1NamespacedDeployment(params: CreateAppsV1NamespacedDeploymentRequest, opts?: APIClientRequestOpts): Promise<Deployment> {
    const path = `/apis/apps/v1/namespaces/${params.namespace}/deployments`;
    return await this.post<Deployment>(path, params.query, params.body, opts);
  }
  async deleteAppsV1CollectionNamespacedDeployment(params: DeleteAppsV1CollectionNamespacedDeploymentRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/apps/v1/namespaces/${params.namespace}/deployments`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readAppsV1NamespacedDeployment(params: ReadAppsV1NamespacedDeploymentRequest, opts?: APIClientRequestOpts): Promise<Deployment> {
    const path = `/apis/apps/v1/namespaces/${params.namespace}/deployments/${params.name}`;
    return await this.get<Deployment>(path, null, null, opts);
  }
  async replaceAppsV1NamespacedDeployment(params: ReplaceAppsV1NamespacedDeploymentRequest, opts?: APIClientRequestOpts): Promise<Deployment> {
    const path = `/apis/apps/v1/namespaces/${params.namespace}/deployments/${params.name}`;
    return await this.put<Deployment>(path, params.query, params.body, opts);
  }
  async deleteAppsV1NamespacedDeployment(params: DeleteAppsV1NamespacedDeploymentRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/apps/v1/namespaces/${params.namespace}/deployments/${params.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchAppsV1NamespacedDeployment(params: PatchAppsV1NamespacedDeploymentRequest, opts?: APIClientRequestOpts): Promise<Deployment> {
    const path = `/apis/apps/v1/namespaces/${params.namespace}/deployments/${params.name}`;
    return await this.patch<Deployment>(path, params.query, params.body, opts);
  }
  async readAppsV1NamespacedDeploymentScale(params: ReadAppsV1NamespacedDeploymentScaleRequest, opts?: APIClientRequestOpts): Promise<Scale> {
    const path = `/apis/apps/v1/namespaces/${params.namespace}/deployments/${params.name}/scale`;
    return await this.get<Scale>(path, null, null, opts);
  }
  async replaceAppsV1NamespacedDeploymentScale(params: ReplaceAppsV1NamespacedDeploymentScaleRequest, opts?: APIClientRequestOpts): Promise<Scale> {
    const path = `/apis/apps/v1/namespaces/${params.namespace}/deployments/${params.name}/scale`;
    return await this.put<Scale>(path, params.query, params.body, opts);
  }
  async patchAppsV1NamespacedDeploymentScale(params: PatchAppsV1NamespacedDeploymentScaleRequest, opts?: APIClientRequestOpts): Promise<Scale> {
    const path = `/apis/apps/v1/namespaces/${params.namespace}/deployments/${params.name}/scale`;
    return await this.patch<Scale>(path, params.query, params.body, opts);
  }
  async readAppsV1NamespacedDeploymentStatus(params: ReadAppsV1NamespacedDeploymentStatusRequest, opts?: APIClientRequestOpts): Promise<Deployment> {
    const path = `/apis/apps/v1/namespaces/${params.namespace}/deployments/${params.name}/status`;
    return await this.get<Deployment>(path, null, null, opts);
  }
  async replaceAppsV1NamespacedDeploymentStatus(params: ReplaceAppsV1NamespacedDeploymentStatusRequest, opts?: APIClientRequestOpts): Promise<Deployment> {
    const path = `/apis/apps/v1/namespaces/${params.namespace}/deployments/${params.name}/status`;
    return await this.put<Deployment>(path, params.query, params.body, opts);
  }
  async patchAppsV1NamespacedDeploymentStatus(params: PatchAppsV1NamespacedDeploymentStatusRequest, opts?: APIClientRequestOpts): Promise<Deployment> {
    const path = `/apis/apps/v1/namespaces/${params.namespace}/deployments/${params.name}/status`;
    return await this.patch<Deployment>(path, params.query, params.body, opts);
  }
  async listAppsV1NamespacedReplicaSet(params: ListAppsV1NamespacedReplicaSetRequest, opts?: APIClientRequestOpts): Promise<ReplicaSetList> {
    const path = `/apis/apps/v1/namespaces/${params.namespace}/replicasets`;
    return await this.get<ReplicaSetList>(path, params.query, null, opts);
  }
  async createAppsV1NamespacedReplicaSet(params: CreateAppsV1NamespacedReplicaSetRequest, opts?: APIClientRequestOpts): Promise<ReplicaSet> {
    const path = `/apis/apps/v1/namespaces/${params.namespace}/replicasets`;
    return await this.post<ReplicaSet>(path, params.query, params.body, opts);
  }
  async deleteAppsV1CollectionNamespacedReplicaSet(params: DeleteAppsV1CollectionNamespacedReplicaSetRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/apps/v1/namespaces/${params.namespace}/replicasets`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readAppsV1NamespacedReplicaSet(params: ReadAppsV1NamespacedReplicaSetRequest, opts?: APIClientRequestOpts): Promise<ReplicaSet> {
    const path = `/apis/apps/v1/namespaces/${params.namespace}/replicasets/${params.name}`;
    return await this.get<ReplicaSet>(path, null, null, opts);
  }
  async replaceAppsV1NamespacedReplicaSet(params: ReplaceAppsV1NamespacedReplicaSetRequest, opts?: APIClientRequestOpts): Promise<ReplicaSet> {
    const path = `/apis/apps/v1/namespaces/${params.namespace}/replicasets/${params.name}`;
    return await this.put<ReplicaSet>(path, params.query, params.body, opts);
  }
  async deleteAppsV1NamespacedReplicaSet(params: DeleteAppsV1NamespacedReplicaSetRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/apps/v1/namespaces/${params.namespace}/replicasets/${params.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchAppsV1NamespacedReplicaSet(params: PatchAppsV1NamespacedReplicaSetRequest, opts?: APIClientRequestOpts): Promise<ReplicaSet> {
    const path = `/apis/apps/v1/namespaces/${params.namespace}/replicasets/${params.name}`;
    return await this.patch<ReplicaSet>(path, params.query, params.body, opts);
  }
  async readAppsV1NamespacedReplicaSetScale(params: ReadAppsV1NamespacedReplicaSetScaleRequest, opts?: APIClientRequestOpts): Promise<Scale> {
    const path = `/apis/apps/v1/namespaces/${params.namespace}/replicasets/${params.name}/scale`;
    return await this.get<Scale>(path, null, null, opts);
  }
  async replaceAppsV1NamespacedReplicaSetScale(params: ReplaceAppsV1NamespacedReplicaSetScaleRequest, opts?: APIClientRequestOpts): Promise<Scale> {
    const path = `/apis/apps/v1/namespaces/${params.namespace}/replicasets/${params.name}/scale`;
    return await this.put<Scale>(path, params.query, params.body, opts);
  }
  async patchAppsV1NamespacedReplicaSetScale(params: PatchAppsV1NamespacedReplicaSetScaleRequest, opts?: APIClientRequestOpts): Promise<Scale> {
    const path = `/apis/apps/v1/namespaces/${params.namespace}/replicasets/${params.name}/scale`;
    return await this.patch<Scale>(path, params.query, params.body, opts);
  }
  async readAppsV1NamespacedReplicaSetStatus(params: ReadAppsV1NamespacedReplicaSetStatusRequest, opts?: APIClientRequestOpts): Promise<ReplicaSet> {
    const path = `/apis/apps/v1/namespaces/${params.namespace}/replicasets/${params.name}/status`;
    return await this.get<ReplicaSet>(path, null, null, opts);
  }
  async replaceAppsV1NamespacedReplicaSetStatus(params: ReplaceAppsV1NamespacedReplicaSetStatusRequest, opts?: APIClientRequestOpts): Promise<ReplicaSet> {
    const path = `/apis/apps/v1/namespaces/${params.namespace}/replicasets/${params.name}/status`;
    return await this.put<ReplicaSet>(path, params.query, params.body, opts);
  }
  async patchAppsV1NamespacedReplicaSetStatus(params: PatchAppsV1NamespacedReplicaSetStatusRequest, opts?: APIClientRequestOpts): Promise<ReplicaSet> {
    const path = `/apis/apps/v1/namespaces/${params.namespace}/replicasets/${params.name}/status`;
    return await this.patch<ReplicaSet>(path, params.query, params.body, opts);
  }
  async listAppsV1NamespacedStatefulSet(params: ListAppsV1NamespacedStatefulSetRequest, opts?: APIClientRequestOpts): Promise<StatefulSetList> {
    const path = `/apis/apps/v1/namespaces/${params.namespace}/statefulsets`;
    return await this.get<StatefulSetList>(path, params.query, null, opts);
  }
  async createAppsV1NamespacedStatefulSet(params: CreateAppsV1NamespacedStatefulSetRequest, opts?: APIClientRequestOpts): Promise<StatefulSet> {
    const path = `/apis/apps/v1/namespaces/${params.namespace}/statefulsets`;
    return await this.post<StatefulSet>(path, params.query, params.body, opts);
  }
  async deleteAppsV1CollectionNamespacedStatefulSet(params: DeleteAppsV1CollectionNamespacedStatefulSetRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/apps/v1/namespaces/${params.namespace}/statefulsets`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readAppsV1NamespacedStatefulSet(params: ReadAppsV1NamespacedStatefulSetRequest, opts?: APIClientRequestOpts): Promise<StatefulSet> {
    const path = `/apis/apps/v1/namespaces/${params.namespace}/statefulsets/${params.name}`;
    return await this.get<StatefulSet>(path, null, null, opts);
  }
  async replaceAppsV1NamespacedStatefulSet(params: ReplaceAppsV1NamespacedStatefulSetRequest, opts?: APIClientRequestOpts): Promise<StatefulSet> {
    const path = `/apis/apps/v1/namespaces/${params.namespace}/statefulsets/${params.name}`;
    return await this.put<StatefulSet>(path, params.query, params.body, opts);
  }
  async deleteAppsV1NamespacedStatefulSet(params: DeleteAppsV1NamespacedStatefulSetRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/apps/v1/namespaces/${params.namespace}/statefulsets/${params.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchAppsV1NamespacedStatefulSet(params: PatchAppsV1NamespacedStatefulSetRequest, opts?: APIClientRequestOpts): Promise<StatefulSet> {
    const path = `/apis/apps/v1/namespaces/${params.namespace}/statefulsets/${params.name}`;
    return await this.patch<StatefulSet>(path, params.query, params.body, opts);
  }
  async readAppsV1NamespacedStatefulSetScale(params: ReadAppsV1NamespacedStatefulSetScaleRequest, opts?: APIClientRequestOpts): Promise<Scale> {
    const path = `/apis/apps/v1/namespaces/${params.namespace}/statefulsets/${params.name}/scale`;
    return await this.get<Scale>(path, null, null, opts);
  }
  async replaceAppsV1NamespacedStatefulSetScale(params: ReplaceAppsV1NamespacedStatefulSetScaleRequest, opts?: APIClientRequestOpts): Promise<Scale> {
    const path = `/apis/apps/v1/namespaces/${params.namespace}/statefulsets/${params.name}/scale`;
    return await this.put<Scale>(path, params.query, params.body, opts);
  }
  async patchAppsV1NamespacedStatefulSetScale(params: PatchAppsV1NamespacedStatefulSetScaleRequest, opts?: APIClientRequestOpts): Promise<Scale> {
    const path = `/apis/apps/v1/namespaces/${params.namespace}/statefulsets/${params.name}/scale`;
    return await this.patch<Scale>(path, params.query, params.body, opts);
  }
  async readAppsV1NamespacedStatefulSetStatus(params: ReadAppsV1NamespacedStatefulSetStatusRequest, opts?: APIClientRequestOpts): Promise<StatefulSet> {
    const path = `/apis/apps/v1/namespaces/${params.namespace}/statefulsets/${params.name}/status`;
    return await this.get<StatefulSet>(path, null, null, opts);
  }
  async replaceAppsV1NamespacedStatefulSetStatus(params: ReplaceAppsV1NamespacedStatefulSetStatusRequest, opts?: APIClientRequestOpts): Promise<StatefulSet> {
    const path = `/apis/apps/v1/namespaces/${params.namespace}/statefulsets/${params.name}/status`;
    return await this.put<StatefulSet>(path, params.query, params.body, opts);
  }
  async patchAppsV1NamespacedStatefulSetStatus(params: PatchAppsV1NamespacedStatefulSetStatusRequest, opts?: APIClientRequestOpts): Promise<StatefulSet> {
    const path = `/apis/apps/v1/namespaces/${params.namespace}/statefulsets/${params.name}/status`;
    return await this.patch<StatefulSet>(path, params.query, params.body, opts);
  }
  async listAppsV1ReplicaSetForAllNamespaces(params: ListAppsV1ReplicaSetForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<ReplicaSetList> {
    const path = `/apis/apps/v1/replicasets`;
    return await this.get<ReplicaSetList>(path, null, null, opts);
  }
  async listAppsV1StatefulSetForAllNamespaces(params: ListAppsV1StatefulSetForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<StatefulSetList> {
    const path = `/apis/apps/v1/statefulsets`;
    return await this.get<StatefulSetList>(path, null, null, opts);
  }
  async watchAppsV1ControllerRevisionListForAllNamespaces(params: WatchAppsV1ControllerRevisionListForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/apps/v1/watch/controllerrevisions`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchAppsV1DaemonSetListForAllNamespaces(params: WatchAppsV1DaemonSetListForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/apps/v1/watch/daemonsets`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchAppsV1DeploymentListForAllNamespaces(params: WatchAppsV1DeploymentListForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/apps/v1/watch/deployments`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchAppsV1NamespacedControllerRevisionList(params: WatchAppsV1NamespacedControllerRevisionListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/apps/v1/watch/namespaces/${params.namespace}/controllerrevisions`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchAppsV1NamespacedControllerRevision(params: WatchAppsV1NamespacedControllerRevisionRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/apps/v1/watch/namespaces/${params.namespace}/controllerrevisions/${params.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchAppsV1NamespacedDaemonSetList(params: WatchAppsV1NamespacedDaemonSetListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/apps/v1/watch/namespaces/${params.namespace}/daemonsets`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchAppsV1NamespacedDaemonSet(params: WatchAppsV1NamespacedDaemonSetRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/apps/v1/watch/namespaces/${params.namespace}/daemonsets/${params.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchAppsV1NamespacedDeploymentList(params: WatchAppsV1NamespacedDeploymentListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/apps/v1/watch/namespaces/${params.namespace}/deployments`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchAppsV1NamespacedDeployment(params: WatchAppsV1NamespacedDeploymentRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/apps/v1/watch/namespaces/${params.namespace}/deployments/${params.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchAppsV1NamespacedReplicaSetList(params: WatchAppsV1NamespacedReplicaSetListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/apps/v1/watch/namespaces/${params.namespace}/replicasets`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchAppsV1NamespacedReplicaSet(params: WatchAppsV1NamespacedReplicaSetRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/apps/v1/watch/namespaces/${params.namespace}/replicasets/${params.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchAppsV1NamespacedStatefulSetList(params: WatchAppsV1NamespacedStatefulSetListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/apps/v1/watch/namespaces/${params.namespace}/statefulsets`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchAppsV1NamespacedStatefulSet(params: WatchAppsV1NamespacedStatefulSetRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/apps/v1/watch/namespaces/${params.namespace}/statefulsets/${params.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchAppsV1ReplicaSetListForAllNamespaces(params: WatchAppsV1ReplicaSetListForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/apps/v1/watch/replicasets`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchAppsV1StatefulSetListForAllNamespaces(params: WatchAppsV1StatefulSetListForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/apps/v1/watch/statefulsets`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async getAuthenticationAPIGroup(params: GetAuthenticationAPIGroupRequest, opts?: APIClientRequestOpts): Promise<APIGroup> {
    const path = `/apis/authentication.k8s.io/`;
    return await this.get<APIGroup>(path, null, null, opts);
  }
  async getAuthenticationV1APIResources(params: GetAuthenticationV1APIResourcesRequest, opts?: APIClientRequestOpts): Promise<APIResourceList> {
    const path = `/apis/authentication.k8s.io/v1/`;
    return await this.get<APIResourceList>(path, null, null, opts);
  }
  async createAuthenticationV1TokenReview(params: CreateAuthenticationV1TokenReviewRequest, opts?: APIClientRequestOpts): Promise<TokenReview> {
    const path = `/apis/authentication.k8s.io/v1/tokenreviews`;
    return await this.post<TokenReview>(path, null, params.body, opts);
  }
  async getAuthorizationAPIGroup(params: GetAuthorizationAPIGroupRequest, opts?: APIClientRequestOpts): Promise<APIGroup> {
    const path = `/apis/authorization.k8s.io/`;
    return await this.get<APIGroup>(path, null, null, opts);
  }
  async getAuthorizationV1APIResources(params: GetAuthorizationV1APIResourcesRequest, opts?: APIClientRequestOpts): Promise<APIResourceList> {
    const path = `/apis/authorization.k8s.io/v1/`;
    return await this.get<APIResourceList>(path, null, null, opts);
  }
  async createAuthorizationV1NamespacedLocalSubjectAccessReview(params: CreateAuthorizationV1NamespacedLocalSubjectAccessReviewRequest, opts?: APIClientRequestOpts): Promise<LocalSubjectAccessReview> {
    const path = `/apis/authorization.k8s.io/v1/namespaces/${params.namespace}/localsubjectaccessreviews`;
    return await this.post<LocalSubjectAccessReview>(path, null, params.body, opts);
  }
  async createAuthorizationV1SelfSubjectAccessReview(params: CreateAuthorizationV1SelfSubjectAccessReviewRequest, opts?: APIClientRequestOpts): Promise<SelfSubjectAccessReview> {
    const path = `/apis/authorization.k8s.io/v1/selfsubjectaccessreviews`;
    return await this.post<SelfSubjectAccessReview>(path, null, params.body, opts);
  }
  async createAuthorizationV1SelfSubjectRulesReview(params: CreateAuthorizationV1SelfSubjectRulesReviewRequest, opts?: APIClientRequestOpts): Promise<SelfSubjectRulesReview> {
    const path = `/apis/authorization.k8s.io/v1/selfsubjectrulesreviews`;
    return await this.post<SelfSubjectRulesReview>(path, null, params.body, opts);
  }
  async createAuthorizationV1SubjectAccessReview(params: CreateAuthorizationV1SubjectAccessReviewRequest, opts?: APIClientRequestOpts): Promise<SubjectAccessReview> {
    const path = `/apis/authorization.k8s.io/v1/subjectaccessreviews`;
    return await this.post<SubjectAccessReview>(path, null, params.body, opts);
  }
  async getAutoscalingAPIGroup(params: GetAutoscalingAPIGroupRequest, opts?: APIClientRequestOpts): Promise<APIGroup> {
    const path = `/apis/autoscaling/`;
    return await this.get<APIGroup>(path, null, null, opts);
  }
  async getAutoscalingV1APIResources(params: GetAutoscalingV1APIResourcesRequest, opts?: APIClientRequestOpts): Promise<APIResourceList> {
    const path = `/apis/autoscaling/v1/`;
    return await this.get<APIResourceList>(path, null, null, opts);
  }
  async listAutoscalingV1HorizontalPodAutoscalerForAllNamespaces(params: ListAutoscalingV1HorizontalPodAutoscalerForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<HorizontalPodAutoscalerList> {
    const path = `/apis/autoscaling/v1/horizontalpodautoscalers`;
    return await this.get<HorizontalPodAutoscalerList>(path, null, null, opts);
  }
  async listAutoscalingV1NamespacedHorizontalPodAutoscaler(params: ListAutoscalingV1NamespacedHorizontalPodAutoscalerRequest, opts?: APIClientRequestOpts): Promise<HorizontalPodAutoscalerList> {
    const path = `/apis/autoscaling/v1/namespaces/${params.namespace}/horizontalpodautoscalers`;
    return await this.get<HorizontalPodAutoscalerList>(path, params.query, null, opts);
  }
  async createAutoscalingV1NamespacedHorizontalPodAutoscaler(params: CreateAutoscalingV1NamespacedHorizontalPodAutoscalerRequest, opts?: APIClientRequestOpts): Promise<HorizontalPodAutoscaler> {
    const path = `/apis/autoscaling/v1/namespaces/${params.namespace}/horizontalpodautoscalers`;
    return await this.post<HorizontalPodAutoscaler>(path, params.query, params.body, opts);
  }
  async deleteAutoscalingV1CollectionNamespacedHorizontalPodAutoscaler(params: DeleteAutoscalingV1CollectionNamespacedHorizontalPodAutoscalerRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/autoscaling/v1/namespaces/${params.namespace}/horizontalpodautoscalers`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readAutoscalingV1NamespacedHorizontalPodAutoscaler(params: ReadAutoscalingV1NamespacedHorizontalPodAutoscalerRequest, opts?: APIClientRequestOpts): Promise<HorizontalPodAutoscaler> {
    const path = `/apis/autoscaling/v1/namespaces/${params.namespace}/horizontalpodautoscalers/${params.name}`;
    return await this.get<HorizontalPodAutoscaler>(path, null, null, opts);
  }
  async replaceAutoscalingV1NamespacedHorizontalPodAutoscaler(params: ReplaceAutoscalingV1NamespacedHorizontalPodAutoscalerRequest, opts?: APIClientRequestOpts): Promise<HorizontalPodAutoscaler> {
    const path = `/apis/autoscaling/v1/namespaces/${params.namespace}/horizontalpodautoscalers/${params.name}`;
    return await this.put<HorizontalPodAutoscaler>(path, params.query, params.body, opts);
  }
  async deleteAutoscalingV1NamespacedHorizontalPodAutoscaler(params: DeleteAutoscalingV1NamespacedHorizontalPodAutoscalerRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/autoscaling/v1/namespaces/${params.namespace}/horizontalpodautoscalers/${params.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchAutoscalingV1NamespacedHorizontalPodAutoscaler(params: PatchAutoscalingV1NamespacedHorizontalPodAutoscalerRequest, opts?: APIClientRequestOpts): Promise<HorizontalPodAutoscaler> {
    const path = `/apis/autoscaling/v1/namespaces/${params.namespace}/horizontalpodautoscalers/${params.name}`;
    return await this.patch<HorizontalPodAutoscaler>(path, params.query, params.body, opts);
  }
  async readAutoscalingV1NamespacedHorizontalPodAutoscalerStatus(params: ReadAutoscalingV1NamespacedHorizontalPodAutoscalerStatusRequest, opts?: APIClientRequestOpts): Promise<HorizontalPodAutoscaler> {
    const path = `/apis/autoscaling/v1/namespaces/${params.namespace}/horizontalpodautoscalers/${params.name}/status`;
    return await this.get<HorizontalPodAutoscaler>(path, null, null, opts);
  }
  async replaceAutoscalingV1NamespacedHorizontalPodAutoscalerStatus(params: ReplaceAutoscalingV1NamespacedHorizontalPodAutoscalerStatusRequest, opts?: APIClientRequestOpts): Promise<HorizontalPodAutoscaler> {
    const path = `/apis/autoscaling/v1/namespaces/${params.namespace}/horizontalpodautoscalers/${params.name}/status`;
    return await this.put<HorizontalPodAutoscaler>(path, params.query, params.body, opts);
  }
  async patchAutoscalingV1NamespacedHorizontalPodAutoscalerStatus(params: PatchAutoscalingV1NamespacedHorizontalPodAutoscalerStatusRequest, opts?: APIClientRequestOpts): Promise<HorizontalPodAutoscaler> {
    const path = `/apis/autoscaling/v1/namespaces/${params.namespace}/horizontalpodautoscalers/${params.name}/status`;
    return await this.patch<HorizontalPodAutoscaler>(path, params.query, params.body, opts);
  }
  async watchAutoscalingV1HorizontalPodAutoscalerListForAllNamespaces(params: WatchAutoscalingV1HorizontalPodAutoscalerListForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/autoscaling/v1/watch/horizontalpodautoscalers`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchAutoscalingV1NamespacedHorizontalPodAutoscalerList(params: WatchAutoscalingV1NamespacedHorizontalPodAutoscalerListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/autoscaling/v1/watch/namespaces/${params.namespace}/horizontalpodautoscalers`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchAutoscalingV1NamespacedHorizontalPodAutoscaler(params: WatchAutoscalingV1NamespacedHorizontalPodAutoscalerRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/autoscaling/v1/watch/namespaces/${params.namespace}/horizontalpodautoscalers/${params.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async getAutoscalingV2beta1APIResources(params: GetAutoscalingV2beta1APIResourcesRequest, opts?: APIClientRequestOpts): Promise<APIResourceList> {
    const path = `/apis/autoscaling/v2beta1/`;
    return await this.get<APIResourceList>(path, null, null, opts);
  }
  async listAutoscalingV2beta1HorizontalPodAutoscalerForAllNamespaces(params: ListAutoscalingV2beta1HorizontalPodAutoscalerForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<HorizontalPodAutoscalerList> {
    const path = `/apis/autoscaling/v2beta1/horizontalpodautoscalers`;
    return await this.get<HorizontalPodAutoscalerList>(path, null, null, opts);
  }
  async listAutoscalingV2beta1NamespacedHorizontalPodAutoscaler(params: ListAutoscalingV2beta1NamespacedHorizontalPodAutoscalerRequest, opts?: APIClientRequestOpts): Promise<HorizontalPodAutoscalerList> {
    const path = `/apis/autoscaling/v2beta1/namespaces/${params.namespace}/horizontalpodautoscalers`;
    return await this.get<HorizontalPodAutoscalerList>(path, params.query, null, opts);
  }
  async createAutoscalingV2beta1NamespacedHorizontalPodAutoscaler(params: CreateAutoscalingV2beta1NamespacedHorizontalPodAutoscalerRequest, opts?: APIClientRequestOpts): Promise<HorizontalPodAutoscaler> {
    const path = `/apis/autoscaling/v2beta1/namespaces/${params.namespace}/horizontalpodautoscalers`;
    return await this.post<HorizontalPodAutoscaler>(path, params.query, params.body, opts);
  }
  async deleteAutoscalingV2beta1CollectionNamespacedHorizontalPodAutoscaler(params: DeleteAutoscalingV2beta1CollectionNamespacedHorizontalPodAutoscalerRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/autoscaling/v2beta1/namespaces/${params.namespace}/horizontalpodautoscalers`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readAutoscalingV2beta1NamespacedHorizontalPodAutoscaler(params: ReadAutoscalingV2beta1NamespacedHorizontalPodAutoscalerRequest, opts?: APIClientRequestOpts): Promise<HorizontalPodAutoscaler> {
    const path = `/apis/autoscaling/v2beta1/namespaces/${params.namespace}/horizontalpodautoscalers/${params.name}`;
    return await this.get<HorizontalPodAutoscaler>(path, null, null, opts);
  }
  async replaceAutoscalingV2beta1NamespacedHorizontalPodAutoscaler(params: ReplaceAutoscalingV2beta1NamespacedHorizontalPodAutoscalerRequest, opts?: APIClientRequestOpts): Promise<HorizontalPodAutoscaler> {
    const path = `/apis/autoscaling/v2beta1/namespaces/${params.namespace}/horizontalpodautoscalers/${params.name}`;
    return await this.put<HorizontalPodAutoscaler>(path, params.query, params.body, opts);
  }
  async deleteAutoscalingV2beta1NamespacedHorizontalPodAutoscaler(params: DeleteAutoscalingV2beta1NamespacedHorizontalPodAutoscalerRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/autoscaling/v2beta1/namespaces/${params.namespace}/horizontalpodautoscalers/${params.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchAutoscalingV2beta1NamespacedHorizontalPodAutoscaler(params: PatchAutoscalingV2beta1NamespacedHorizontalPodAutoscalerRequest, opts?: APIClientRequestOpts): Promise<HorizontalPodAutoscaler> {
    const path = `/apis/autoscaling/v2beta1/namespaces/${params.namespace}/horizontalpodautoscalers/${params.name}`;
    return await this.patch<HorizontalPodAutoscaler>(path, params.query, params.body, opts);
  }
  async readAutoscalingV2beta1NamespacedHorizontalPodAutoscalerStatus(params: ReadAutoscalingV2beta1NamespacedHorizontalPodAutoscalerStatusRequest, opts?: APIClientRequestOpts): Promise<HorizontalPodAutoscaler> {
    const path = `/apis/autoscaling/v2beta1/namespaces/${params.namespace}/horizontalpodautoscalers/${params.name}/status`;
    return await this.get<HorizontalPodAutoscaler>(path, null, null, opts);
  }
  async replaceAutoscalingV2beta1NamespacedHorizontalPodAutoscalerStatus(params: ReplaceAutoscalingV2beta1NamespacedHorizontalPodAutoscalerStatusRequest, opts?: APIClientRequestOpts): Promise<HorizontalPodAutoscaler> {
    const path = `/apis/autoscaling/v2beta1/namespaces/${params.namespace}/horizontalpodautoscalers/${params.name}/status`;
    return await this.put<HorizontalPodAutoscaler>(path, params.query, params.body, opts);
  }
  async patchAutoscalingV2beta1NamespacedHorizontalPodAutoscalerStatus(params: PatchAutoscalingV2beta1NamespacedHorizontalPodAutoscalerStatusRequest, opts?: APIClientRequestOpts): Promise<HorizontalPodAutoscaler> {
    const path = `/apis/autoscaling/v2beta1/namespaces/${params.namespace}/horizontalpodautoscalers/${params.name}/status`;
    return await this.patch<HorizontalPodAutoscaler>(path, params.query, params.body, opts);
  }
  async watchAutoscalingV2beta1HorizontalPodAutoscalerListForAllNamespaces(params: WatchAutoscalingV2beta1HorizontalPodAutoscalerListForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/autoscaling/v2beta1/watch/horizontalpodautoscalers`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchAutoscalingV2beta1NamespacedHorizontalPodAutoscalerList(params: WatchAutoscalingV2beta1NamespacedHorizontalPodAutoscalerListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/autoscaling/v2beta1/watch/namespaces/${params.namespace}/horizontalpodautoscalers`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchAutoscalingV2beta1NamespacedHorizontalPodAutoscaler(params: WatchAutoscalingV2beta1NamespacedHorizontalPodAutoscalerRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/autoscaling/v2beta1/watch/namespaces/${params.namespace}/horizontalpodautoscalers/${params.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async getAutoscalingV2beta2APIResources(params: GetAutoscalingV2beta2APIResourcesRequest, opts?: APIClientRequestOpts): Promise<APIResourceList> {
    const path = `/apis/autoscaling/v2beta2/`;
    return await this.get<APIResourceList>(path, null, null, opts);
  }
  async listAutoscalingV2beta2HorizontalPodAutoscalerForAllNamespaces(params: ListAutoscalingV2beta2HorizontalPodAutoscalerForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<HorizontalPodAutoscalerList> {
    const path = `/apis/autoscaling/v2beta2/horizontalpodautoscalers`;
    return await this.get<HorizontalPodAutoscalerList>(path, null, null, opts);
  }
  async listAutoscalingV2beta2NamespacedHorizontalPodAutoscaler(params: ListAutoscalingV2beta2NamespacedHorizontalPodAutoscalerRequest, opts?: APIClientRequestOpts): Promise<HorizontalPodAutoscalerList> {
    const path = `/apis/autoscaling/v2beta2/namespaces/${params.namespace}/horizontalpodautoscalers`;
    return await this.get<HorizontalPodAutoscalerList>(path, params.query, null, opts);
  }
  async createAutoscalingV2beta2NamespacedHorizontalPodAutoscaler(params: CreateAutoscalingV2beta2NamespacedHorizontalPodAutoscalerRequest, opts?: APIClientRequestOpts): Promise<HorizontalPodAutoscaler> {
    const path = `/apis/autoscaling/v2beta2/namespaces/${params.namespace}/horizontalpodautoscalers`;
    return await this.post<HorizontalPodAutoscaler>(path, params.query, params.body, opts);
  }
  async deleteAutoscalingV2beta2CollectionNamespacedHorizontalPodAutoscaler(params: DeleteAutoscalingV2beta2CollectionNamespacedHorizontalPodAutoscalerRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/autoscaling/v2beta2/namespaces/${params.namespace}/horizontalpodautoscalers`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readAutoscalingV2beta2NamespacedHorizontalPodAutoscaler(params: ReadAutoscalingV2beta2NamespacedHorizontalPodAutoscalerRequest, opts?: APIClientRequestOpts): Promise<HorizontalPodAutoscaler> {
    const path = `/apis/autoscaling/v2beta2/namespaces/${params.namespace}/horizontalpodautoscalers/${params.name}`;
    return await this.get<HorizontalPodAutoscaler>(path, null, null, opts);
  }
  async replaceAutoscalingV2beta2NamespacedHorizontalPodAutoscaler(params: ReplaceAutoscalingV2beta2NamespacedHorizontalPodAutoscalerRequest, opts?: APIClientRequestOpts): Promise<HorizontalPodAutoscaler> {
    const path = `/apis/autoscaling/v2beta2/namespaces/${params.namespace}/horizontalpodautoscalers/${params.name}`;
    return await this.put<HorizontalPodAutoscaler>(path, params.query, params.body, opts);
  }
  async deleteAutoscalingV2beta2NamespacedHorizontalPodAutoscaler(params: DeleteAutoscalingV2beta2NamespacedHorizontalPodAutoscalerRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/autoscaling/v2beta2/namespaces/${params.namespace}/horizontalpodautoscalers/${params.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchAutoscalingV2beta2NamespacedHorizontalPodAutoscaler(params: PatchAutoscalingV2beta2NamespacedHorizontalPodAutoscalerRequest, opts?: APIClientRequestOpts): Promise<HorizontalPodAutoscaler> {
    const path = `/apis/autoscaling/v2beta2/namespaces/${params.namespace}/horizontalpodautoscalers/${params.name}`;
    return await this.patch<HorizontalPodAutoscaler>(path, params.query, params.body, opts);
  }
  async readAutoscalingV2beta2NamespacedHorizontalPodAutoscalerStatus(params: ReadAutoscalingV2beta2NamespacedHorizontalPodAutoscalerStatusRequest, opts?: APIClientRequestOpts): Promise<HorizontalPodAutoscaler> {
    const path = `/apis/autoscaling/v2beta2/namespaces/${params.namespace}/horizontalpodautoscalers/${params.name}/status`;
    return await this.get<HorizontalPodAutoscaler>(path, null, null, opts);
  }
  async replaceAutoscalingV2beta2NamespacedHorizontalPodAutoscalerStatus(params: ReplaceAutoscalingV2beta2NamespacedHorizontalPodAutoscalerStatusRequest, opts?: APIClientRequestOpts): Promise<HorizontalPodAutoscaler> {
    const path = `/apis/autoscaling/v2beta2/namespaces/${params.namespace}/horizontalpodautoscalers/${params.name}/status`;
    return await this.put<HorizontalPodAutoscaler>(path, params.query, params.body, opts);
  }
  async patchAutoscalingV2beta2NamespacedHorizontalPodAutoscalerStatus(params: PatchAutoscalingV2beta2NamespacedHorizontalPodAutoscalerStatusRequest, opts?: APIClientRequestOpts): Promise<HorizontalPodAutoscaler> {
    const path = `/apis/autoscaling/v2beta2/namespaces/${params.namespace}/horizontalpodautoscalers/${params.name}/status`;
    return await this.patch<HorizontalPodAutoscaler>(path, params.query, params.body, opts);
  }
  async watchAutoscalingV2beta2HorizontalPodAutoscalerListForAllNamespaces(params: WatchAutoscalingV2beta2HorizontalPodAutoscalerListForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/autoscaling/v2beta2/watch/horizontalpodautoscalers`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchAutoscalingV2beta2NamespacedHorizontalPodAutoscalerList(params: WatchAutoscalingV2beta2NamespacedHorizontalPodAutoscalerListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/autoscaling/v2beta2/watch/namespaces/${params.namespace}/horizontalpodautoscalers`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchAutoscalingV2beta2NamespacedHorizontalPodAutoscaler(params: WatchAutoscalingV2beta2NamespacedHorizontalPodAutoscalerRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/autoscaling/v2beta2/watch/namespaces/${params.namespace}/horizontalpodautoscalers/${params.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async getBatchAPIGroup(params: GetBatchAPIGroupRequest, opts?: APIClientRequestOpts): Promise<APIGroup> {
    const path = `/apis/batch/`;
    return await this.get<APIGroup>(path, null, null, opts);
  }
  async getBatchV1APIResources(params: GetBatchV1APIResourcesRequest, opts?: APIClientRequestOpts): Promise<APIResourceList> {
    const path = `/apis/batch/v1/`;
    return await this.get<APIResourceList>(path, null, null, opts);
  }
  async listBatchV1CronJobForAllNamespaces(params: ListBatchV1CronJobForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<CronJobList> {
    const path = `/apis/batch/v1/cronjobs`;
    return await this.get<CronJobList>(path, null, null, opts);
  }
  async listBatchV1JobForAllNamespaces(params: ListBatchV1JobForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<JobList> {
    const path = `/apis/batch/v1/jobs`;
    return await this.get<JobList>(path, null, null, opts);
  }
  async listBatchV1NamespacedCronJob(params: ListBatchV1NamespacedCronJobRequest, opts?: APIClientRequestOpts): Promise<CronJobList> {
    const path = `/apis/batch/v1/namespaces/${params.namespace}/cronjobs`;
    return await this.get<CronJobList>(path, params.query, null, opts);
  }
  async createBatchV1NamespacedCronJob(params: CreateBatchV1NamespacedCronJobRequest, opts?: APIClientRequestOpts): Promise<CronJob> {
    const path = `/apis/batch/v1/namespaces/${params.namespace}/cronjobs`;
    return await this.post<CronJob>(path, params.query, params.body, opts);
  }
  async deleteBatchV1CollectionNamespacedCronJob(params: DeleteBatchV1CollectionNamespacedCronJobRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/batch/v1/namespaces/${params.namespace}/cronjobs`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readBatchV1NamespacedCronJob(params: ReadBatchV1NamespacedCronJobRequest, opts?: APIClientRequestOpts): Promise<CronJob> {
    const path = `/apis/batch/v1/namespaces/${params.namespace}/cronjobs/${params.name}`;
    return await this.get<CronJob>(path, null, null, opts);
  }
  async replaceBatchV1NamespacedCronJob(params: ReplaceBatchV1NamespacedCronJobRequest, opts?: APIClientRequestOpts): Promise<CronJob> {
    const path = `/apis/batch/v1/namespaces/${params.namespace}/cronjobs/${params.name}`;
    return await this.put<CronJob>(path, params.query, params.body, opts);
  }
  async deleteBatchV1NamespacedCronJob(params: DeleteBatchV1NamespacedCronJobRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/batch/v1/namespaces/${params.namespace}/cronjobs/${params.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchBatchV1NamespacedCronJob(params: PatchBatchV1NamespacedCronJobRequest, opts?: APIClientRequestOpts): Promise<CronJob> {
    const path = `/apis/batch/v1/namespaces/${params.namespace}/cronjobs/${params.name}`;
    return await this.patch<CronJob>(path, params.query, params.body, opts);
  }
  async readBatchV1NamespacedCronJobStatus(params: ReadBatchV1NamespacedCronJobStatusRequest, opts?: APIClientRequestOpts): Promise<CronJob> {
    const path = `/apis/batch/v1/namespaces/${params.namespace}/cronjobs/${params.name}/status`;
    return await this.get<CronJob>(path, null, null, opts);
  }
  async replaceBatchV1NamespacedCronJobStatus(params: ReplaceBatchV1NamespacedCronJobStatusRequest, opts?: APIClientRequestOpts): Promise<CronJob> {
    const path = `/apis/batch/v1/namespaces/${params.namespace}/cronjobs/${params.name}/status`;
    return await this.put<CronJob>(path, params.query, params.body, opts);
  }
  async patchBatchV1NamespacedCronJobStatus(params: PatchBatchV1NamespacedCronJobStatusRequest, opts?: APIClientRequestOpts): Promise<CronJob> {
    const path = `/apis/batch/v1/namespaces/${params.namespace}/cronjobs/${params.name}/status`;
    return await this.patch<CronJob>(path, params.query, params.body, opts);
  }
  async listBatchV1NamespacedJob(params: ListBatchV1NamespacedJobRequest, opts?: APIClientRequestOpts): Promise<JobList> {
    const path = `/apis/batch/v1/namespaces/${params.namespace}/jobs`;
    return await this.get<JobList>(path, params.query, null, opts);
  }
  async createBatchV1NamespacedJob(params: CreateBatchV1NamespacedJobRequest, opts?: APIClientRequestOpts): Promise<Job> {
    const path = `/apis/batch/v1/namespaces/${params.namespace}/jobs`;
    return await this.post<Job>(path, params.query, params.body, opts);
  }
  async deleteBatchV1CollectionNamespacedJob(params: DeleteBatchV1CollectionNamespacedJobRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/batch/v1/namespaces/${params.namespace}/jobs`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readBatchV1NamespacedJob(params: ReadBatchV1NamespacedJobRequest, opts?: APIClientRequestOpts): Promise<Job> {
    const path = `/apis/batch/v1/namespaces/${params.namespace}/jobs/${params.name}`;
    return await this.get<Job>(path, null, null, opts);
  }
  async replaceBatchV1NamespacedJob(params: ReplaceBatchV1NamespacedJobRequest, opts?: APIClientRequestOpts): Promise<Job> {
    const path = `/apis/batch/v1/namespaces/${params.namespace}/jobs/${params.name}`;
    return await this.put<Job>(path, params.query, params.body, opts);
  }
  async deleteBatchV1NamespacedJob(params: DeleteBatchV1NamespacedJobRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/batch/v1/namespaces/${params.namespace}/jobs/${params.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchBatchV1NamespacedJob(params: PatchBatchV1NamespacedJobRequest, opts?: APIClientRequestOpts): Promise<Job> {
    const path = `/apis/batch/v1/namespaces/${params.namespace}/jobs/${params.name}`;
    return await this.patch<Job>(path, params.query, params.body, opts);
  }
  async readBatchV1NamespacedJobStatus(params: ReadBatchV1NamespacedJobStatusRequest, opts?: APIClientRequestOpts): Promise<Job> {
    const path = `/apis/batch/v1/namespaces/${params.namespace}/jobs/${params.name}/status`;
    return await this.get<Job>(path, null, null, opts);
  }
  async replaceBatchV1NamespacedJobStatus(params: ReplaceBatchV1NamespacedJobStatusRequest, opts?: APIClientRequestOpts): Promise<Job> {
    const path = `/apis/batch/v1/namespaces/${params.namespace}/jobs/${params.name}/status`;
    return await this.put<Job>(path, params.query, params.body, opts);
  }
  async patchBatchV1NamespacedJobStatus(params: PatchBatchV1NamespacedJobStatusRequest, opts?: APIClientRequestOpts): Promise<Job> {
    const path = `/apis/batch/v1/namespaces/${params.namespace}/jobs/${params.name}/status`;
    return await this.patch<Job>(path, params.query, params.body, opts);
  }
  async watchBatchV1CronJobListForAllNamespaces(params: WatchBatchV1CronJobListForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/batch/v1/watch/cronjobs`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchBatchV1JobListForAllNamespaces(params: WatchBatchV1JobListForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/batch/v1/watch/jobs`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchBatchV1NamespacedCronJobList(params: WatchBatchV1NamespacedCronJobListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/batch/v1/watch/namespaces/${params.namespace}/cronjobs`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchBatchV1NamespacedCronJob(params: WatchBatchV1NamespacedCronJobRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/batch/v1/watch/namespaces/${params.namespace}/cronjobs/${params.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchBatchV1NamespacedJobList(params: WatchBatchV1NamespacedJobListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/batch/v1/watch/namespaces/${params.namespace}/jobs`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchBatchV1NamespacedJob(params: WatchBatchV1NamespacedJobRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/batch/v1/watch/namespaces/${params.namespace}/jobs/${params.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async getBatchV1beta1APIResources(params: GetBatchV1beta1APIResourcesRequest, opts?: APIClientRequestOpts): Promise<APIResourceList> {
    const path = `/apis/batch/v1beta1/`;
    return await this.get<APIResourceList>(path, null, null, opts);
  }
  async listBatchV1beta1CronJobForAllNamespaces(params: ListBatchV1beta1CronJobForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<CronJobList> {
    const path = `/apis/batch/v1beta1/cronjobs`;
    return await this.get<CronJobList>(path, null, null, opts);
  }
  async listBatchV1beta1NamespacedCronJob(params: ListBatchV1beta1NamespacedCronJobRequest, opts?: APIClientRequestOpts): Promise<CronJobList> {
    const path = `/apis/batch/v1beta1/namespaces/${params.namespace}/cronjobs`;
    return await this.get<CronJobList>(path, params.query, null, opts);
  }
  async createBatchV1beta1NamespacedCronJob(params: CreateBatchV1beta1NamespacedCronJobRequest, opts?: APIClientRequestOpts): Promise<CronJob> {
    const path = `/apis/batch/v1beta1/namespaces/${params.namespace}/cronjobs`;
    return await this.post<CronJob>(path, params.query, params.body, opts);
  }
  async deleteBatchV1beta1CollectionNamespacedCronJob(params: DeleteBatchV1beta1CollectionNamespacedCronJobRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/batch/v1beta1/namespaces/${params.namespace}/cronjobs`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readBatchV1beta1NamespacedCronJob(params: ReadBatchV1beta1NamespacedCronJobRequest, opts?: APIClientRequestOpts): Promise<CronJob> {
    const path = `/apis/batch/v1beta1/namespaces/${params.namespace}/cronjobs/${params.name}`;
    return await this.get<CronJob>(path, null, null, opts);
  }
  async replaceBatchV1beta1NamespacedCronJob(params: ReplaceBatchV1beta1NamespacedCronJobRequest, opts?: APIClientRequestOpts): Promise<CronJob> {
    const path = `/apis/batch/v1beta1/namespaces/${params.namespace}/cronjobs/${params.name}`;
    return await this.put<CronJob>(path, params.query, params.body, opts);
  }
  async deleteBatchV1beta1NamespacedCronJob(params: DeleteBatchV1beta1NamespacedCronJobRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/batch/v1beta1/namespaces/${params.namespace}/cronjobs/${params.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchBatchV1beta1NamespacedCronJob(params: PatchBatchV1beta1NamespacedCronJobRequest, opts?: APIClientRequestOpts): Promise<CronJob> {
    const path = `/apis/batch/v1beta1/namespaces/${params.namespace}/cronjobs/${params.name}`;
    return await this.patch<CronJob>(path, params.query, params.body, opts);
  }
  async readBatchV1beta1NamespacedCronJobStatus(params: ReadBatchV1beta1NamespacedCronJobStatusRequest, opts?: APIClientRequestOpts): Promise<CronJob> {
    const path = `/apis/batch/v1beta1/namespaces/${params.namespace}/cronjobs/${params.name}/status`;
    return await this.get<CronJob>(path, null, null, opts);
  }
  async replaceBatchV1beta1NamespacedCronJobStatus(params: ReplaceBatchV1beta1NamespacedCronJobStatusRequest, opts?: APIClientRequestOpts): Promise<CronJob> {
    const path = `/apis/batch/v1beta1/namespaces/${params.namespace}/cronjobs/${params.name}/status`;
    return await this.put<CronJob>(path, params.query, params.body, opts);
  }
  async patchBatchV1beta1NamespacedCronJobStatus(params: PatchBatchV1beta1NamespacedCronJobStatusRequest, opts?: APIClientRequestOpts): Promise<CronJob> {
    const path = `/apis/batch/v1beta1/namespaces/${params.namespace}/cronjobs/${params.name}/status`;
    return await this.patch<CronJob>(path, params.query, params.body, opts);
  }
  async watchBatchV1beta1CronJobListForAllNamespaces(params: WatchBatchV1beta1CronJobListForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/batch/v1beta1/watch/cronjobs`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchBatchV1beta1NamespacedCronJobList(params: WatchBatchV1beta1NamespacedCronJobListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/batch/v1beta1/watch/namespaces/${params.namespace}/cronjobs`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchBatchV1beta1NamespacedCronJob(params: WatchBatchV1beta1NamespacedCronJobRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/batch/v1beta1/watch/namespaces/${params.namespace}/cronjobs/${params.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async getCertificatesAPIGroup(params: GetCertificatesAPIGroupRequest, opts?: APIClientRequestOpts): Promise<APIGroup> {
    const path = `/apis/certificates.k8s.io/`;
    return await this.get<APIGroup>(path, null, null, opts);
  }
  async getCertificatesV1APIResources(params: GetCertificatesV1APIResourcesRequest, opts?: APIClientRequestOpts): Promise<APIResourceList> {
    const path = `/apis/certificates.k8s.io/v1/`;
    return await this.get<APIResourceList>(path, null, null, opts);
  }
  async listCertificatesV1CertificateSigningRequest(params: ListCertificatesV1CertificateSigningRequestRequest, opts?: APIClientRequestOpts): Promise<CertificateSigningRequestList> {
    const path = `/apis/certificates.k8s.io/v1/certificatesigningrequests`;
    return await this.get<CertificateSigningRequestList>(path, params.query, null, opts);
  }
  async createCertificatesV1CertificateSigningRequest(params: CreateCertificatesV1CertificateSigningRequestRequest, opts?: APIClientRequestOpts): Promise<CertificateSigningRequest> {
    const path = `/apis/certificates.k8s.io/v1/certificatesigningrequests`;
    return await this.post<CertificateSigningRequest>(path, params.query, params.body, opts);
  }
  async deleteCertificatesV1CollectionCertificateSigningRequest(params: DeleteCertificatesV1CollectionCertificateSigningRequestRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/certificates.k8s.io/v1/certificatesigningrequests`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readCertificatesV1CertificateSigningRequest(params: ReadCertificatesV1CertificateSigningRequestRequest, opts?: APIClientRequestOpts): Promise<CertificateSigningRequest> {
    const path = `/apis/certificates.k8s.io/v1/certificatesigningrequests/${params.name}`;
    return await this.get<CertificateSigningRequest>(path, null, null, opts);
  }
  async replaceCertificatesV1CertificateSigningRequest(params: ReplaceCertificatesV1CertificateSigningRequestRequest, opts?: APIClientRequestOpts): Promise<CertificateSigningRequest> {
    const path = `/apis/certificates.k8s.io/v1/certificatesigningrequests/${params.name}`;
    return await this.put<CertificateSigningRequest>(path, params.query, params.body, opts);
  }
  async deleteCertificatesV1CertificateSigningRequest(params: DeleteCertificatesV1CertificateSigningRequestRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/certificates.k8s.io/v1/certificatesigningrequests/${params.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchCertificatesV1CertificateSigningRequest(params: PatchCertificatesV1CertificateSigningRequestRequest, opts?: APIClientRequestOpts): Promise<CertificateSigningRequest> {
    const path = `/apis/certificates.k8s.io/v1/certificatesigningrequests/${params.name}`;
    return await this.patch<CertificateSigningRequest>(path, params.query, params.body, opts);
  }
  async readCertificatesV1CertificateSigningRequestApproval(params: ReadCertificatesV1CertificateSigningRequestApprovalRequest, opts?: APIClientRequestOpts): Promise<CertificateSigningRequest> {
    const path = `/apis/certificates.k8s.io/v1/certificatesigningrequests/${params.name}/approval`;
    return await this.get<CertificateSigningRequest>(path, null, null, opts);
  }
  async replaceCertificatesV1CertificateSigningRequestApproval(params: ReplaceCertificatesV1CertificateSigningRequestApprovalRequest, opts?: APIClientRequestOpts): Promise<CertificateSigningRequest> {
    const path = `/apis/certificates.k8s.io/v1/certificatesigningrequests/${params.name}/approval`;
    return await this.put<CertificateSigningRequest>(path, params.query, params.body, opts);
  }
  async patchCertificatesV1CertificateSigningRequestApproval(params: PatchCertificatesV1CertificateSigningRequestApprovalRequest, opts?: APIClientRequestOpts): Promise<CertificateSigningRequest> {
    const path = `/apis/certificates.k8s.io/v1/certificatesigningrequests/${params.name}/approval`;
    return await this.patch<CertificateSigningRequest>(path, params.query, params.body, opts);
  }
  async readCertificatesV1CertificateSigningRequestStatus(params: ReadCertificatesV1CertificateSigningRequestStatusRequest, opts?: APIClientRequestOpts): Promise<CertificateSigningRequest> {
    const path = `/apis/certificates.k8s.io/v1/certificatesigningrequests/${params.name}/status`;
    return await this.get<CertificateSigningRequest>(path, null, null, opts);
  }
  async replaceCertificatesV1CertificateSigningRequestStatus(params: ReplaceCertificatesV1CertificateSigningRequestStatusRequest, opts?: APIClientRequestOpts): Promise<CertificateSigningRequest> {
    const path = `/apis/certificates.k8s.io/v1/certificatesigningrequests/${params.name}/status`;
    return await this.put<CertificateSigningRequest>(path, params.query, params.body, opts);
  }
  async patchCertificatesV1CertificateSigningRequestStatus(params: PatchCertificatesV1CertificateSigningRequestStatusRequest, opts?: APIClientRequestOpts): Promise<CertificateSigningRequest> {
    const path = `/apis/certificates.k8s.io/v1/certificatesigningrequests/${params.name}/status`;
    return await this.patch<CertificateSigningRequest>(path, params.query, params.body, opts);
  }
  async watchCertificatesV1CertificateSigningRequestList(params: WatchCertificatesV1CertificateSigningRequestListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/certificates.k8s.io/v1/watch/certificatesigningrequests`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCertificatesV1CertificateSigningRequest(params: WatchCertificatesV1CertificateSigningRequestRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/certificates.k8s.io/v1/watch/certificatesigningrequests/${params.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async getCoordinationAPIGroup(params: GetCoordinationAPIGroupRequest, opts?: APIClientRequestOpts): Promise<APIGroup> {
    const path = `/apis/coordination.k8s.io/`;
    return await this.get<APIGroup>(path, null, null, opts);
  }
  async getCoordinationV1APIResources(params: GetCoordinationV1APIResourcesRequest, opts?: APIClientRequestOpts): Promise<APIResourceList> {
    const path = `/apis/coordination.k8s.io/v1/`;
    return await this.get<APIResourceList>(path, null, null, opts);
  }
  async listCoordinationV1LeaseForAllNamespaces(params: ListCoordinationV1LeaseForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<LeaseList> {
    const path = `/apis/coordination.k8s.io/v1/leases`;
    return await this.get<LeaseList>(path, null, null, opts);
  }
  async listCoordinationV1NamespacedLease(params: ListCoordinationV1NamespacedLeaseRequest, opts?: APIClientRequestOpts): Promise<LeaseList> {
    const path = `/apis/coordination.k8s.io/v1/namespaces/${params.namespace}/leases`;
    return await this.get<LeaseList>(path, params.query, null, opts);
  }
  async createCoordinationV1NamespacedLease(params: CreateCoordinationV1NamespacedLeaseRequest, opts?: APIClientRequestOpts): Promise<Lease> {
    const path = `/apis/coordination.k8s.io/v1/namespaces/${params.namespace}/leases`;
    return await this.post<Lease>(path, params.query, params.body, opts);
  }
  async deleteCoordinationV1CollectionNamespacedLease(params: DeleteCoordinationV1CollectionNamespacedLeaseRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/coordination.k8s.io/v1/namespaces/${params.namespace}/leases`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readCoordinationV1NamespacedLease(params: ReadCoordinationV1NamespacedLeaseRequest, opts?: APIClientRequestOpts): Promise<Lease> {
    const path = `/apis/coordination.k8s.io/v1/namespaces/${params.namespace}/leases/${params.name}`;
    return await this.get<Lease>(path, null, null, opts);
  }
  async replaceCoordinationV1NamespacedLease(params: ReplaceCoordinationV1NamespacedLeaseRequest, opts?: APIClientRequestOpts): Promise<Lease> {
    const path = `/apis/coordination.k8s.io/v1/namespaces/${params.namespace}/leases/${params.name}`;
    return await this.put<Lease>(path, params.query, params.body, opts);
  }
  async deleteCoordinationV1NamespacedLease(params: DeleteCoordinationV1NamespacedLeaseRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/coordination.k8s.io/v1/namespaces/${params.namespace}/leases/${params.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchCoordinationV1NamespacedLease(params: PatchCoordinationV1NamespacedLeaseRequest, opts?: APIClientRequestOpts): Promise<Lease> {
    const path = `/apis/coordination.k8s.io/v1/namespaces/${params.namespace}/leases/${params.name}`;
    return await this.patch<Lease>(path, params.query, params.body, opts);
  }
  async watchCoordinationV1LeaseListForAllNamespaces(params: WatchCoordinationV1LeaseListForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/coordination.k8s.io/v1/watch/leases`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoordinationV1NamespacedLeaseList(params: WatchCoordinationV1NamespacedLeaseListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/coordination.k8s.io/v1/watch/namespaces/${params.namespace}/leases`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoordinationV1NamespacedLease(params: WatchCoordinationV1NamespacedLeaseRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/coordination.k8s.io/v1/watch/namespaces/${params.namespace}/leases/${params.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async getDiscoveryAPIGroup(params: GetDiscoveryAPIGroupRequest, opts?: APIClientRequestOpts): Promise<APIGroup> {
    const path = `/apis/discovery.k8s.io/`;
    return await this.get<APIGroup>(path, null, null, opts);
  }
  async getDiscoveryV1APIResources(params: GetDiscoveryV1APIResourcesRequest, opts?: APIClientRequestOpts): Promise<APIResourceList> {
    const path = `/apis/discovery.k8s.io/v1/`;
    return await this.get<APIResourceList>(path, null, null, opts);
  }
  async listDiscoveryV1EndpointSliceForAllNamespaces(params: ListDiscoveryV1EndpointSliceForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<EndpointSliceList> {
    const path = `/apis/discovery.k8s.io/v1/endpointslices`;
    return await this.get<EndpointSliceList>(path, null, null, opts);
  }
  async listDiscoveryV1NamespacedEndpointSlice(params: ListDiscoveryV1NamespacedEndpointSliceRequest, opts?: APIClientRequestOpts): Promise<EndpointSliceList> {
    const path = `/apis/discovery.k8s.io/v1/namespaces/${params.namespace}/endpointslices`;
    return await this.get<EndpointSliceList>(path, params.query, null, opts);
  }
  async createDiscoveryV1NamespacedEndpointSlice(params: CreateDiscoveryV1NamespacedEndpointSliceRequest, opts?: APIClientRequestOpts): Promise<EndpointSlice> {
    const path = `/apis/discovery.k8s.io/v1/namespaces/${params.namespace}/endpointslices`;
    return await this.post<EndpointSlice>(path, params.query, params.body, opts);
  }
  async deleteDiscoveryV1CollectionNamespacedEndpointSlice(params: DeleteDiscoveryV1CollectionNamespacedEndpointSliceRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/discovery.k8s.io/v1/namespaces/${params.namespace}/endpointslices`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readDiscoveryV1NamespacedEndpointSlice(params: ReadDiscoveryV1NamespacedEndpointSliceRequest, opts?: APIClientRequestOpts): Promise<EndpointSlice> {
    const path = `/apis/discovery.k8s.io/v1/namespaces/${params.namespace}/endpointslices/${params.name}`;
    return await this.get<EndpointSlice>(path, null, null, opts);
  }
  async replaceDiscoveryV1NamespacedEndpointSlice(params: ReplaceDiscoveryV1NamespacedEndpointSliceRequest, opts?: APIClientRequestOpts): Promise<EndpointSlice> {
    const path = `/apis/discovery.k8s.io/v1/namespaces/${params.namespace}/endpointslices/${params.name}`;
    return await this.put<EndpointSlice>(path, params.query, params.body, opts);
  }
  async deleteDiscoveryV1NamespacedEndpointSlice(params: DeleteDiscoveryV1NamespacedEndpointSliceRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/discovery.k8s.io/v1/namespaces/${params.namespace}/endpointslices/${params.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchDiscoveryV1NamespacedEndpointSlice(params: PatchDiscoveryV1NamespacedEndpointSliceRequest, opts?: APIClientRequestOpts): Promise<EndpointSlice> {
    const path = `/apis/discovery.k8s.io/v1/namespaces/${params.namespace}/endpointslices/${params.name}`;
    return await this.patch<EndpointSlice>(path, params.query, params.body, opts);
  }
  async watchDiscoveryV1EndpointSliceListForAllNamespaces(params: WatchDiscoveryV1EndpointSliceListForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/discovery.k8s.io/v1/watch/endpointslices`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchDiscoveryV1NamespacedEndpointSliceList(params: WatchDiscoveryV1NamespacedEndpointSliceListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/discovery.k8s.io/v1/watch/namespaces/${params.namespace}/endpointslices`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchDiscoveryV1NamespacedEndpointSlice(params: WatchDiscoveryV1NamespacedEndpointSliceRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/discovery.k8s.io/v1/watch/namespaces/${params.namespace}/endpointslices/${params.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async getDiscoveryV1beta1APIResources(params: GetDiscoveryV1beta1APIResourcesRequest, opts?: APIClientRequestOpts): Promise<APIResourceList> {
    const path = `/apis/discovery.k8s.io/v1beta1/`;
    return await this.get<APIResourceList>(path, null, null, opts);
  }
  async listDiscoveryV1beta1EndpointSliceForAllNamespaces(params: ListDiscoveryV1beta1EndpointSliceForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<EndpointSliceList> {
    const path = `/apis/discovery.k8s.io/v1beta1/endpointslices`;
    return await this.get<EndpointSliceList>(path, null, null, opts);
  }
  async listDiscoveryV1beta1NamespacedEndpointSlice(params: ListDiscoveryV1beta1NamespacedEndpointSliceRequest, opts?: APIClientRequestOpts): Promise<EndpointSliceList> {
    const path = `/apis/discovery.k8s.io/v1beta1/namespaces/${params.namespace}/endpointslices`;
    return await this.get<EndpointSliceList>(path, params.query, null, opts);
  }
  async createDiscoveryV1beta1NamespacedEndpointSlice(params: CreateDiscoveryV1beta1NamespacedEndpointSliceRequest, opts?: APIClientRequestOpts): Promise<EndpointSlice> {
    const path = `/apis/discovery.k8s.io/v1beta1/namespaces/${params.namespace}/endpointslices`;
    return await this.post<EndpointSlice>(path, params.query, params.body, opts);
  }
  async deleteDiscoveryV1beta1CollectionNamespacedEndpointSlice(params: DeleteDiscoveryV1beta1CollectionNamespacedEndpointSliceRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/discovery.k8s.io/v1beta1/namespaces/${params.namespace}/endpointslices`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readDiscoveryV1beta1NamespacedEndpointSlice(params: ReadDiscoveryV1beta1NamespacedEndpointSliceRequest, opts?: APIClientRequestOpts): Promise<EndpointSlice> {
    const path = `/apis/discovery.k8s.io/v1beta1/namespaces/${params.namespace}/endpointslices/${params.name}`;
    return await this.get<EndpointSlice>(path, null, null, opts);
  }
  async replaceDiscoveryV1beta1NamespacedEndpointSlice(params: ReplaceDiscoveryV1beta1NamespacedEndpointSliceRequest, opts?: APIClientRequestOpts): Promise<EndpointSlice> {
    const path = `/apis/discovery.k8s.io/v1beta1/namespaces/${params.namespace}/endpointslices/${params.name}`;
    return await this.put<EndpointSlice>(path, params.query, params.body, opts);
  }
  async deleteDiscoveryV1beta1NamespacedEndpointSlice(params: DeleteDiscoveryV1beta1NamespacedEndpointSliceRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/discovery.k8s.io/v1beta1/namespaces/${params.namespace}/endpointslices/${params.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchDiscoveryV1beta1NamespacedEndpointSlice(params: PatchDiscoveryV1beta1NamespacedEndpointSliceRequest, opts?: APIClientRequestOpts): Promise<EndpointSlice> {
    const path = `/apis/discovery.k8s.io/v1beta1/namespaces/${params.namespace}/endpointslices/${params.name}`;
    return await this.patch<EndpointSlice>(path, params.query, params.body, opts);
  }
  async watchDiscoveryV1beta1EndpointSliceListForAllNamespaces(params: WatchDiscoveryV1beta1EndpointSliceListForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/discovery.k8s.io/v1beta1/watch/endpointslices`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchDiscoveryV1beta1NamespacedEndpointSliceList(params: WatchDiscoveryV1beta1NamespacedEndpointSliceListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/discovery.k8s.io/v1beta1/watch/namespaces/${params.namespace}/endpointslices`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchDiscoveryV1beta1NamespacedEndpointSlice(params: WatchDiscoveryV1beta1NamespacedEndpointSliceRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/discovery.k8s.io/v1beta1/watch/namespaces/${params.namespace}/endpointslices/${params.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async getEventsAPIGroup(params: GetEventsAPIGroupRequest, opts?: APIClientRequestOpts): Promise<APIGroup> {
    const path = `/apis/events.k8s.io/`;
    return await this.get<APIGroup>(path, null, null, opts);
  }
  async getEventsV1APIResources(params: GetEventsV1APIResourcesRequest, opts?: APIClientRequestOpts): Promise<APIResourceList> {
    const path = `/apis/events.k8s.io/v1/`;
    return await this.get<APIResourceList>(path, null, null, opts);
  }
  async listEventsV1EventForAllNamespaces(params: ListEventsV1EventForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<EventList> {
    const path = `/apis/events.k8s.io/v1/events`;
    return await this.get<EventList>(path, null, null, opts);
  }
  async listEventsV1NamespacedEvent(params: ListEventsV1NamespacedEventRequest, opts?: APIClientRequestOpts): Promise<EventList> {
    const path = `/apis/events.k8s.io/v1/namespaces/${params.namespace}/events`;
    return await this.get<EventList>(path, params.query, null, opts);
  }
  async createEventsV1NamespacedEvent(params: CreateEventsV1NamespacedEventRequest, opts?: APIClientRequestOpts): Promise<Event> {
    const path = `/apis/events.k8s.io/v1/namespaces/${params.namespace}/events`;
    return await this.post<Event>(path, params.query, params.body, opts);
  }
  async deleteEventsV1CollectionNamespacedEvent(params: DeleteEventsV1CollectionNamespacedEventRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/events.k8s.io/v1/namespaces/${params.namespace}/events`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readEventsV1NamespacedEvent(params: ReadEventsV1NamespacedEventRequest, opts?: APIClientRequestOpts): Promise<Event> {
    const path = `/apis/events.k8s.io/v1/namespaces/${params.namespace}/events/${params.name}`;
    return await this.get<Event>(path, null, null, opts);
  }
  async replaceEventsV1NamespacedEvent(params: ReplaceEventsV1NamespacedEventRequest, opts?: APIClientRequestOpts): Promise<Event> {
    const path = `/apis/events.k8s.io/v1/namespaces/${params.namespace}/events/${params.name}`;
    return await this.put<Event>(path, params.query, params.body, opts);
  }
  async deleteEventsV1NamespacedEvent(params: DeleteEventsV1NamespacedEventRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/events.k8s.io/v1/namespaces/${params.namespace}/events/${params.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchEventsV1NamespacedEvent(params: PatchEventsV1NamespacedEventRequest, opts?: APIClientRequestOpts): Promise<Event> {
    const path = `/apis/events.k8s.io/v1/namespaces/${params.namespace}/events/${params.name}`;
    return await this.patch<Event>(path, params.query, params.body, opts);
  }
  async watchEventsV1EventListForAllNamespaces(params: WatchEventsV1EventListForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/events.k8s.io/v1/watch/events`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchEventsV1NamespacedEventList(params: WatchEventsV1NamespacedEventListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/events.k8s.io/v1/watch/namespaces/${params.namespace}/events`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchEventsV1NamespacedEvent(params: WatchEventsV1NamespacedEventRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/events.k8s.io/v1/watch/namespaces/${params.namespace}/events/${params.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async getEventsV1beta1APIResources(params: GetEventsV1beta1APIResourcesRequest, opts?: APIClientRequestOpts): Promise<APIResourceList> {
    const path = `/apis/events.k8s.io/v1beta1/`;
    return await this.get<APIResourceList>(path, null, null, opts);
  }
  async listEventsV1beta1EventForAllNamespaces(params: ListEventsV1beta1EventForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<EventList> {
    const path = `/apis/events.k8s.io/v1beta1/events`;
    return await this.get<EventList>(path, null, null, opts);
  }
  async listEventsV1beta1NamespacedEvent(params: ListEventsV1beta1NamespacedEventRequest, opts?: APIClientRequestOpts): Promise<EventList> {
    const path = `/apis/events.k8s.io/v1beta1/namespaces/${params.namespace}/events`;
    return await this.get<EventList>(path, params.query, null, opts);
  }
  async createEventsV1beta1NamespacedEvent(params: CreateEventsV1beta1NamespacedEventRequest, opts?: APIClientRequestOpts): Promise<Event> {
    const path = `/apis/events.k8s.io/v1beta1/namespaces/${params.namespace}/events`;
    return await this.post<Event>(path, params.query, params.body, opts);
  }
  async deleteEventsV1beta1CollectionNamespacedEvent(params: DeleteEventsV1beta1CollectionNamespacedEventRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/events.k8s.io/v1beta1/namespaces/${params.namespace}/events`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readEventsV1beta1NamespacedEvent(params: ReadEventsV1beta1NamespacedEventRequest, opts?: APIClientRequestOpts): Promise<Event> {
    const path = `/apis/events.k8s.io/v1beta1/namespaces/${params.namespace}/events/${params.name}`;
    return await this.get<Event>(path, null, null, opts);
  }
  async replaceEventsV1beta1NamespacedEvent(params: ReplaceEventsV1beta1NamespacedEventRequest, opts?: APIClientRequestOpts): Promise<Event> {
    const path = `/apis/events.k8s.io/v1beta1/namespaces/${params.namespace}/events/${params.name}`;
    return await this.put<Event>(path, params.query, params.body, opts);
  }
  async deleteEventsV1beta1NamespacedEvent(params: DeleteEventsV1beta1NamespacedEventRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/events.k8s.io/v1beta1/namespaces/${params.namespace}/events/${params.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchEventsV1beta1NamespacedEvent(params: PatchEventsV1beta1NamespacedEventRequest, opts?: APIClientRequestOpts): Promise<Event> {
    const path = `/apis/events.k8s.io/v1beta1/namespaces/${params.namespace}/events/${params.name}`;
    return await this.patch<Event>(path, params.query, params.body, opts);
  }
  async watchEventsV1beta1EventListForAllNamespaces(params: WatchEventsV1beta1EventListForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/events.k8s.io/v1beta1/watch/events`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchEventsV1beta1NamespacedEventList(params: WatchEventsV1beta1NamespacedEventListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/events.k8s.io/v1beta1/watch/namespaces/${params.namespace}/events`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchEventsV1beta1NamespacedEvent(params: WatchEventsV1beta1NamespacedEventRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/events.k8s.io/v1beta1/watch/namespaces/${params.namespace}/events/${params.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async getFlowcontrolApiserverAPIGroup(params: GetFlowcontrolApiserverAPIGroupRequest, opts?: APIClientRequestOpts): Promise<APIGroup> {
    const path = `/apis/flowcontrol.apiserver.k8s.io/`;
    return await this.get<APIGroup>(path, null, null, opts);
  }
  async getFlowcontrolApiserverV1beta1APIResources(params: GetFlowcontrolApiserverV1beta1APIResourcesRequest, opts?: APIClientRequestOpts): Promise<APIResourceList> {
    const path = `/apis/flowcontrol.apiserver.k8s.io/v1beta1/`;
    return await this.get<APIResourceList>(path, null, null, opts);
  }
  async listFlowcontrolApiserverV1beta1FlowSchema(params: ListFlowcontrolApiserverV1beta1FlowSchemaRequest, opts?: APIClientRequestOpts): Promise<FlowSchemaList> {
    const path = `/apis/flowcontrol.apiserver.k8s.io/v1beta1/flowschemas`;
    return await this.get<FlowSchemaList>(path, params.query, null, opts);
  }
  async createFlowcontrolApiserverV1beta1FlowSchema(params: CreateFlowcontrolApiserverV1beta1FlowSchemaRequest, opts?: APIClientRequestOpts): Promise<FlowSchema> {
    const path = `/apis/flowcontrol.apiserver.k8s.io/v1beta1/flowschemas`;
    return await this.post<FlowSchema>(path, params.query, params.body, opts);
  }
  async deleteFlowcontrolApiserverV1beta1CollectionFlowSchema(params: DeleteFlowcontrolApiserverV1beta1CollectionFlowSchemaRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/flowcontrol.apiserver.k8s.io/v1beta1/flowschemas`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readFlowcontrolApiserverV1beta1FlowSchema(params: ReadFlowcontrolApiserverV1beta1FlowSchemaRequest, opts?: APIClientRequestOpts): Promise<FlowSchema> {
    const path = `/apis/flowcontrol.apiserver.k8s.io/v1beta1/flowschemas/${params.name}`;
    return await this.get<FlowSchema>(path, null, null, opts);
  }
  async replaceFlowcontrolApiserverV1beta1FlowSchema(params: ReplaceFlowcontrolApiserverV1beta1FlowSchemaRequest, opts?: APIClientRequestOpts): Promise<FlowSchema> {
    const path = `/apis/flowcontrol.apiserver.k8s.io/v1beta1/flowschemas/${params.name}`;
    return await this.put<FlowSchema>(path, params.query, params.body, opts);
  }
  async deleteFlowcontrolApiserverV1beta1FlowSchema(params: DeleteFlowcontrolApiserverV1beta1FlowSchemaRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/flowcontrol.apiserver.k8s.io/v1beta1/flowschemas/${params.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchFlowcontrolApiserverV1beta1FlowSchema(params: PatchFlowcontrolApiserverV1beta1FlowSchemaRequest, opts?: APIClientRequestOpts): Promise<FlowSchema> {
    const path = `/apis/flowcontrol.apiserver.k8s.io/v1beta1/flowschemas/${params.name}`;
    return await this.patch<FlowSchema>(path, params.query, params.body, opts);
  }
  async readFlowcontrolApiserverV1beta1FlowSchemaStatus(params: ReadFlowcontrolApiserverV1beta1FlowSchemaStatusRequest, opts?: APIClientRequestOpts): Promise<FlowSchema> {
    const path = `/apis/flowcontrol.apiserver.k8s.io/v1beta1/flowschemas/${params.name}/status`;
    return await this.get<FlowSchema>(path, null, null, opts);
  }
  async replaceFlowcontrolApiserverV1beta1FlowSchemaStatus(params: ReplaceFlowcontrolApiserverV1beta1FlowSchemaStatusRequest, opts?: APIClientRequestOpts): Promise<FlowSchema> {
    const path = `/apis/flowcontrol.apiserver.k8s.io/v1beta1/flowschemas/${params.name}/status`;
    return await this.put<FlowSchema>(path, params.query, params.body, opts);
  }
  async patchFlowcontrolApiserverV1beta1FlowSchemaStatus(params: PatchFlowcontrolApiserverV1beta1FlowSchemaStatusRequest, opts?: APIClientRequestOpts): Promise<FlowSchema> {
    const path = `/apis/flowcontrol.apiserver.k8s.io/v1beta1/flowschemas/${params.name}/status`;
    return await this.patch<FlowSchema>(path, params.query, params.body, opts);
  }
  async listFlowcontrolApiserverV1beta1PriorityLevelConfiguration(params: ListFlowcontrolApiserverV1beta1PriorityLevelConfigurationRequest, opts?: APIClientRequestOpts): Promise<PriorityLevelConfigurationList> {
    const path = `/apis/flowcontrol.apiserver.k8s.io/v1beta1/prioritylevelconfigurations`;
    return await this.get<PriorityLevelConfigurationList>(path, params.query, null, opts);
  }
  async createFlowcontrolApiserverV1beta1PriorityLevelConfiguration(params: CreateFlowcontrolApiserverV1beta1PriorityLevelConfigurationRequest, opts?: APIClientRequestOpts): Promise<PriorityLevelConfiguration> {
    const path = `/apis/flowcontrol.apiserver.k8s.io/v1beta1/prioritylevelconfigurations`;
    return await this.post<PriorityLevelConfiguration>(path, params.query, params.body, opts);
  }
  async deleteFlowcontrolApiserverV1beta1CollectionPriorityLevelConfiguration(params: DeleteFlowcontrolApiserverV1beta1CollectionPriorityLevelConfigurationRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/flowcontrol.apiserver.k8s.io/v1beta1/prioritylevelconfigurations`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readFlowcontrolApiserverV1beta1PriorityLevelConfiguration(params: ReadFlowcontrolApiserverV1beta1PriorityLevelConfigurationRequest, opts?: APIClientRequestOpts): Promise<PriorityLevelConfiguration> {
    const path = `/apis/flowcontrol.apiserver.k8s.io/v1beta1/prioritylevelconfigurations/${params.name}`;
    return await this.get<PriorityLevelConfiguration>(path, null, null, opts);
  }
  async replaceFlowcontrolApiserverV1beta1PriorityLevelConfiguration(params: ReplaceFlowcontrolApiserverV1beta1PriorityLevelConfigurationRequest, opts?: APIClientRequestOpts): Promise<PriorityLevelConfiguration> {
    const path = `/apis/flowcontrol.apiserver.k8s.io/v1beta1/prioritylevelconfigurations/${params.name}`;
    return await this.put<PriorityLevelConfiguration>(path, params.query, params.body, opts);
  }
  async deleteFlowcontrolApiserverV1beta1PriorityLevelConfiguration(params: DeleteFlowcontrolApiserverV1beta1PriorityLevelConfigurationRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/flowcontrol.apiserver.k8s.io/v1beta1/prioritylevelconfigurations/${params.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchFlowcontrolApiserverV1beta1PriorityLevelConfiguration(params: PatchFlowcontrolApiserverV1beta1PriorityLevelConfigurationRequest, opts?: APIClientRequestOpts): Promise<PriorityLevelConfiguration> {
    const path = `/apis/flowcontrol.apiserver.k8s.io/v1beta1/prioritylevelconfigurations/${params.name}`;
    return await this.patch<PriorityLevelConfiguration>(path, params.query, params.body, opts);
  }
  async readFlowcontrolApiserverV1beta1PriorityLevelConfigurationStatus(params: ReadFlowcontrolApiserverV1beta1PriorityLevelConfigurationStatusRequest, opts?: APIClientRequestOpts): Promise<PriorityLevelConfiguration> {
    const path = `/apis/flowcontrol.apiserver.k8s.io/v1beta1/prioritylevelconfigurations/${params.name}/status`;
    return await this.get<PriorityLevelConfiguration>(path, null, null, opts);
  }
  async replaceFlowcontrolApiserverV1beta1PriorityLevelConfigurationStatus(params: ReplaceFlowcontrolApiserverV1beta1PriorityLevelConfigurationStatusRequest, opts?: APIClientRequestOpts): Promise<PriorityLevelConfiguration> {
    const path = `/apis/flowcontrol.apiserver.k8s.io/v1beta1/prioritylevelconfigurations/${params.name}/status`;
    return await this.put<PriorityLevelConfiguration>(path, params.query, params.body, opts);
  }
  async patchFlowcontrolApiserverV1beta1PriorityLevelConfigurationStatus(params: PatchFlowcontrolApiserverV1beta1PriorityLevelConfigurationStatusRequest, opts?: APIClientRequestOpts): Promise<PriorityLevelConfiguration> {
    const path = `/apis/flowcontrol.apiserver.k8s.io/v1beta1/prioritylevelconfigurations/${params.name}/status`;
    return await this.patch<PriorityLevelConfiguration>(path, params.query, params.body, opts);
  }
  async watchFlowcontrolApiserverV1beta1FlowSchemaList(params: WatchFlowcontrolApiserverV1beta1FlowSchemaListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/flowcontrol.apiserver.k8s.io/v1beta1/watch/flowschemas`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchFlowcontrolApiserverV1beta1FlowSchema(params: WatchFlowcontrolApiserverV1beta1FlowSchemaRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/flowcontrol.apiserver.k8s.io/v1beta1/watch/flowschemas/${params.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchFlowcontrolApiserverV1beta1PriorityLevelConfigurationList(params: WatchFlowcontrolApiserverV1beta1PriorityLevelConfigurationListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/flowcontrol.apiserver.k8s.io/v1beta1/watch/prioritylevelconfigurations`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchFlowcontrolApiserverV1beta1PriorityLevelConfiguration(params: WatchFlowcontrolApiserverV1beta1PriorityLevelConfigurationRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/flowcontrol.apiserver.k8s.io/v1beta1/watch/prioritylevelconfigurations/${params.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async getNetworkingAPIGroup(params: GetNetworkingAPIGroupRequest, opts?: APIClientRequestOpts): Promise<APIGroup> {
    const path = `/apis/networking.k8s.io/`;
    return await this.get<APIGroup>(path, null, null, opts);
  }
  async getNetworkingV1APIResources(params: GetNetworkingV1APIResourcesRequest, opts?: APIClientRequestOpts): Promise<APIResourceList> {
    const path = `/apis/networking.k8s.io/v1/`;
    return await this.get<APIResourceList>(path, null, null, opts);
  }
  async listNetworkingV1IngressClass(params: ListNetworkingV1IngressClassRequest, opts?: APIClientRequestOpts): Promise<IngressClassList> {
    const path = `/apis/networking.k8s.io/v1/ingressclasses`;
    return await this.get<IngressClassList>(path, params.query, null, opts);
  }
  async createNetworkingV1IngressClass(params: CreateNetworkingV1IngressClassRequest, opts?: APIClientRequestOpts): Promise<IngressClass> {
    const path = `/apis/networking.k8s.io/v1/ingressclasses`;
    return await this.post<IngressClass>(path, params.query, params.body, opts);
  }
  async deleteNetworkingV1CollectionIngressClass(params: DeleteNetworkingV1CollectionIngressClassRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/networking.k8s.io/v1/ingressclasses`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readNetworkingV1IngressClass(params: ReadNetworkingV1IngressClassRequest, opts?: APIClientRequestOpts): Promise<IngressClass> {
    const path = `/apis/networking.k8s.io/v1/ingressclasses/${params.name}`;
    return await this.get<IngressClass>(path, null, null, opts);
  }
  async replaceNetworkingV1IngressClass(params: ReplaceNetworkingV1IngressClassRequest, opts?: APIClientRequestOpts): Promise<IngressClass> {
    const path = `/apis/networking.k8s.io/v1/ingressclasses/${params.name}`;
    return await this.put<IngressClass>(path, params.query, params.body, opts);
  }
  async deleteNetworkingV1IngressClass(params: DeleteNetworkingV1IngressClassRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/networking.k8s.io/v1/ingressclasses/${params.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchNetworkingV1IngressClass(params: PatchNetworkingV1IngressClassRequest, opts?: APIClientRequestOpts): Promise<IngressClass> {
    const path = `/apis/networking.k8s.io/v1/ingressclasses/${params.name}`;
    return await this.patch<IngressClass>(path, params.query, params.body, opts);
  }
  async listNetworkingV1IngressForAllNamespaces(params: ListNetworkingV1IngressForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<IngressList> {
    const path = `/apis/networking.k8s.io/v1/ingresses`;
    return await this.get<IngressList>(path, null, null, opts);
  }
  async listNetworkingV1NamespacedIngress(params: ListNetworkingV1NamespacedIngressRequest, opts?: APIClientRequestOpts): Promise<IngressList> {
    const path = `/apis/networking.k8s.io/v1/namespaces/${params.namespace}/ingresses`;
    return await this.get<IngressList>(path, params.query, null, opts);
  }
  async createNetworkingV1NamespacedIngress(params: CreateNetworkingV1NamespacedIngressRequest, opts?: APIClientRequestOpts): Promise<Ingress> {
    const path = `/apis/networking.k8s.io/v1/namespaces/${params.namespace}/ingresses`;
    return await this.post<Ingress>(path, params.query, params.body, opts);
  }
  async deleteNetworkingV1CollectionNamespacedIngress(params: DeleteNetworkingV1CollectionNamespacedIngressRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/networking.k8s.io/v1/namespaces/${params.namespace}/ingresses`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readNetworkingV1NamespacedIngress(params: ReadNetworkingV1NamespacedIngressRequest, opts?: APIClientRequestOpts): Promise<Ingress> {
    const path = `/apis/networking.k8s.io/v1/namespaces/${params.namespace}/ingresses/${params.name}`;
    return await this.get<Ingress>(path, null, null, opts);
  }
  async replaceNetworkingV1NamespacedIngress(params: ReplaceNetworkingV1NamespacedIngressRequest, opts?: APIClientRequestOpts): Promise<Ingress> {
    const path = `/apis/networking.k8s.io/v1/namespaces/${params.namespace}/ingresses/${params.name}`;
    return await this.put<Ingress>(path, params.query, params.body, opts);
  }
  async deleteNetworkingV1NamespacedIngress(params: DeleteNetworkingV1NamespacedIngressRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/networking.k8s.io/v1/namespaces/${params.namespace}/ingresses/${params.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchNetworkingV1NamespacedIngress(params: PatchNetworkingV1NamespacedIngressRequest, opts?: APIClientRequestOpts): Promise<Ingress> {
    const path = `/apis/networking.k8s.io/v1/namespaces/${params.namespace}/ingresses/${params.name}`;
    return await this.patch<Ingress>(path, params.query, params.body, opts);
  }
  async readNetworkingV1NamespacedIngressStatus(params: ReadNetworkingV1NamespacedIngressStatusRequest, opts?: APIClientRequestOpts): Promise<Ingress> {
    const path = `/apis/networking.k8s.io/v1/namespaces/${params.namespace}/ingresses/${params.name}/status`;
    return await this.get<Ingress>(path, null, null, opts);
  }
  async replaceNetworkingV1NamespacedIngressStatus(params: ReplaceNetworkingV1NamespacedIngressStatusRequest, opts?: APIClientRequestOpts): Promise<Ingress> {
    const path = `/apis/networking.k8s.io/v1/namespaces/${params.namespace}/ingresses/${params.name}/status`;
    return await this.put<Ingress>(path, params.query, params.body, opts);
  }
  async patchNetworkingV1NamespacedIngressStatus(params: PatchNetworkingV1NamespacedIngressStatusRequest, opts?: APIClientRequestOpts): Promise<Ingress> {
    const path = `/apis/networking.k8s.io/v1/namespaces/${params.namespace}/ingresses/${params.name}/status`;
    return await this.patch<Ingress>(path, params.query, params.body, opts);
  }
  async listNetworkingV1NamespacedNetworkPolicy(params: ListNetworkingV1NamespacedNetworkPolicyRequest, opts?: APIClientRequestOpts): Promise<NetworkPolicyList> {
    const path = `/apis/networking.k8s.io/v1/namespaces/${params.namespace}/networkpolicies`;
    return await this.get<NetworkPolicyList>(path, params.query, null, opts);
  }
  async createNetworkingV1NamespacedNetworkPolicy(params: CreateNetworkingV1NamespacedNetworkPolicyRequest, opts?: APIClientRequestOpts): Promise<NetworkPolicy> {
    const path = `/apis/networking.k8s.io/v1/namespaces/${params.namespace}/networkpolicies`;
    return await this.post<NetworkPolicy>(path, params.query, params.body, opts);
  }
  async deleteNetworkingV1CollectionNamespacedNetworkPolicy(params: DeleteNetworkingV1CollectionNamespacedNetworkPolicyRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/networking.k8s.io/v1/namespaces/${params.namespace}/networkpolicies`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readNetworkingV1NamespacedNetworkPolicy(params: ReadNetworkingV1NamespacedNetworkPolicyRequest, opts?: APIClientRequestOpts): Promise<NetworkPolicy> {
    const path = `/apis/networking.k8s.io/v1/namespaces/${params.namespace}/networkpolicies/${params.name}`;
    return await this.get<NetworkPolicy>(path, null, null, opts);
  }
  async replaceNetworkingV1NamespacedNetworkPolicy(params: ReplaceNetworkingV1NamespacedNetworkPolicyRequest, opts?: APIClientRequestOpts): Promise<NetworkPolicy> {
    const path = `/apis/networking.k8s.io/v1/namespaces/${params.namespace}/networkpolicies/${params.name}`;
    return await this.put<NetworkPolicy>(path, params.query, params.body, opts);
  }
  async deleteNetworkingV1NamespacedNetworkPolicy(params: DeleteNetworkingV1NamespacedNetworkPolicyRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/networking.k8s.io/v1/namespaces/${params.namespace}/networkpolicies/${params.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchNetworkingV1NamespacedNetworkPolicy(params: PatchNetworkingV1NamespacedNetworkPolicyRequest, opts?: APIClientRequestOpts): Promise<NetworkPolicy> {
    const path = `/apis/networking.k8s.io/v1/namespaces/${params.namespace}/networkpolicies/${params.name}`;
    return await this.patch<NetworkPolicy>(path, params.query, params.body, opts);
  }
  async listNetworkingV1NetworkPolicyForAllNamespaces(params: ListNetworkingV1NetworkPolicyForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<NetworkPolicyList> {
    const path = `/apis/networking.k8s.io/v1/networkpolicies`;
    return await this.get<NetworkPolicyList>(path, null, null, opts);
  }
  async watchNetworkingV1IngressClassList(params: WatchNetworkingV1IngressClassListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/networking.k8s.io/v1/watch/ingressclasses`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchNetworkingV1IngressClass(params: WatchNetworkingV1IngressClassRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/networking.k8s.io/v1/watch/ingressclasses/${params.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchNetworkingV1IngressListForAllNamespaces(params: WatchNetworkingV1IngressListForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/networking.k8s.io/v1/watch/ingresses`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchNetworkingV1NamespacedIngressList(params: WatchNetworkingV1NamespacedIngressListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/networking.k8s.io/v1/watch/namespaces/${params.namespace}/ingresses`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchNetworkingV1NamespacedIngress(params: WatchNetworkingV1NamespacedIngressRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/networking.k8s.io/v1/watch/namespaces/${params.namespace}/ingresses/${params.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchNetworkingV1NamespacedNetworkPolicyList(params: WatchNetworkingV1NamespacedNetworkPolicyListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/networking.k8s.io/v1/watch/namespaces/${params.namespace}/networkpolicies`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchNetworkingV1NamespacedNetworkPolicy(params: WatchNetworkingV1NamespacedNetworkPolicyRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/networking.k8s.io/v1/watch/namespaces/${params.namespace}/networkpolicies/${params.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchNetworkingV1NetworkPolicyListForAllNamespaces(params: WatchNetworkingV1NetworkPolicyListForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/networking.k8s.io/v1/watch/networkpolicies`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async getNodeAPIGroup(params: GetNodeAPIGroupRequest, opts?: APIClientRequestOpts): Promise<APIGroup> {
    const path = `/apis/node.k8s.io/`;
    return await this.get<APIGroup>(path, null, null, opts);
  }
  async getNodeV1APIResources(params: GetNodeV1APIResourcesRequest, opts?: APIClientRequestOpts): Promise<APIResourceList> {
    const path = `/apis/node.k8s.io/v1/`;
    return await this.get<APIResourceList>(path, null, null, opts);
  }
  async listNodeV1RuntimeClass(params: ListNodeV1RuntimeClassRequest, opts?: APIClientRequestOpts): Promise<RuntimeClassList> {
    const path = `/apis/node.k8s.io/v1/runtimeclasses`;
    return await this.get<RuntimeClassList>(path, params.query, null, opts);
  }
  async createNodeV1RuntimeClass(params: CreateNodeV1RuntimeClassRequest, opts?: APIClientRequestOpts): Promise<RuntimeClass> {
    const path = `/apis/node.k8s.io/v1/runtimeclasses`;
    return await this.post<RuntimeClass>(path, params.query, params.body, opts);
  }
  async deleteNodeV1CollectionRuntimeClass(params: DeleteNodeV1CollectionRuntimeClassRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/node.k8s.io/v1/runtimeclasses`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readNodeV1RuntimeClass(params: ReadNodeV1RuntimeClassRequest, opts?: APIClientRequestOpts): Promise<RuntimeClass> {
    const path = `/apis/node.k8s.io/v1/runtimeclasses/${params.name}`;
    return await this.get<RuntimeClass>(path, null, null, opts);
  }
  async replaceNodeV1RuntimeClass(params: ReplaceNodeV1RuntimeClassRequest, opts?: APIClientRequestOpts): Promise<RuntimeClass> {
    const path = `/apis/node.k8s.io/v1/runtimeclasses/${params.name}`;
    return await this.put<RuntimeClass>(path, params.query, params.body, opts);
  }
  async deleteNodeV1RuntimeClass(params: DeleteNodeV1RuntimeClassRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/node.k8s.io/v1/runtimeclasses/${params.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchNodeV1RuntimeClass(params: PatchNodeV1RuntimeClassRequest, opts?: APIClientRequestOpts): Promise<RuntimeClass> {
    const path = `/apis/node.k8s.io/v1/runtimeclasses/${params.name}`;
    return await this.patch<RuntimeClass>(path, params.query, params.body, opts);
  }
  async watchNodeV1RuntimeClassList(params: WatchNodeV1RuntimeClassListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/node.k8s.io/v1/watch/runtimeclasses`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchNodeV1RuntimeClass(params: WatchNodeV1RuntimeClassRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/node.k8s.io/v1/watch/runtimeclasses/${params.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async getNodeV1beta1APIResources(params: GetNodeV1beta1APIResourcesRequest, opts?: APIClientRequestOpts): Promise<APIResourceList> {
    const path = `/apis/node.k8s.io/v1beta1/`;
    return await this.get<APIResourceList>(path, null, null, opts);
  }
  async listNodeV1beta1RuntimeClass(params: ListNodeV1beta1RuntimeClassRequest, opts?: APIClientRequestOpts): Promise<RuntimeClassList> {
    const path = `/apis/node.k8s.io/v1beta1/runtimeclasses`;
    return await this.get<RuntimeClassList>(path, params.query, null, opts);
  }
  async createNodeV1beta1RuntimeClass(params: CreateNodeV1beta1RuntimeClassRequest, opts?: APIClientRequestOpts): Promise<RuntimeClass> {
    const path = `/apis/node.k8s.io/v1beta1/runtimeclasses`;
    return await this.post<RuntimeClass>(path, params.query, params.body, opts);
  }
  async deleteNodeV1beta1CollectionRuntimeClass(params: DeleteNodeV1beta1CollectionRuntimeClassRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/node.k8s.io/v1beta1/runtimeclasses`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readNodeV1beta1RuntimeClass(params: ReadNodeV1beta1RuntimeClassRequest, opts?: APIClientRequestOpts): Promise<RuntimeClass> {
    const path = `/apis/node.k8s.io/v1beta1/runtimeclasses/${params.name}`;
    return await this.get<RuntimeClass>(path, null, null, opts);
  }
  async replaceNodeV1beta1RuntimeClass(params: ReplaceNodeV1beta1RuntimeClassRequest, opts?: APIClientRequestOpts): Promise<RuntimeClass> {
    const path = `/apis/node.k8s.io/v1beta1/runtimeclasses/${params.name}`;
    return await this.put<RuntimeClass>(path, params.query, params.body, opts);
  }
  async deleteNodeV1beta1RuntimeClass(params: DeleteNodeV1beta1RuntimeClassRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/node.k8s.io/v1beta1/runtimeclasses/${params.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchNodeV1beta1RuntimeClass(params: PatchNodeV1beta1RuntimeClassRequest, opts?: APIClientRequestOpts): Promise<RuntimeClass> {
    const path = `/apis/node.k8s.io/v1beta1/runtimeclasses/${params.name}`;
    return await this.patch<RuntimeClass>(path, params.query, params.body, opts);
  }
  async watchNodeV1beta1RuntimeClassList(params: WatchNodeV1beta1RuntimeClassListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/node.k8s.io/v1beta1/watch/runtimeclasses`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchNodeV1beta1RuntimeClass(params: WatchNodeV1beta1RuntimeClassRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/node.k8s.io/v1beta1/watch/runtimeclasses/${params.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async getPolicyAPIGroup(params: GetPolicyAPIGroupRequest, opts?: APIClientRequestOpts): Promise<APIGroup> {
    const path = `/apis/policy/`;
    return await this.get<APIGroup>(path, null, null, opts);
  }
  async getPolicyV1APIResources(params: GetPolicyV1APIResourcesRequest, opts?: APIClientRequestOpts): Promise<APIResourceList> {
    const path = `/apis/policy/v1/`;
    return await this.get<APIResourceList>(path, null, null, opts);
  }
  async listPolicyV1NamespacedPodDisruptionBudget(params: ListPolicyV1NamespacedPodDisruptionBudgetRequest, opts?: APIClientRequestOpts): Promise<PodDisruptionBudgetList> {
    const path = `/apis/policy/v1/namespaces/${params.namespace}/poddisruptionbudgets`;
    return await this.get<PodDisruptionBudgetList>(path, params.query, null, opts);
  }
  async createPolicyV1NamespacedPodDisruptionBudget(params: CreatePolicyV1NamespacedPodDisruptionBudgetRequest, opts?: APIClientRequestOpts): Promise<PodDisruptionBudget> {
    const path = `/apis/policy/v1/namespaces/${params.namespace}/poddisruptionbudgets`;
    return await this.post<PodDisruptionBudget>(path, params.query, params.body, opts);
  }
  async deletePolicyV1CollectionNamespacedPodDisruptionBudget(params: DeletePolicyV1CollectionNamespacedPodDisruptionBudgetRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/policy/v1/namespaces/${params.namespace}/poddisruptionbudgets`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readPolicyV1NamespacedPodDisruptionBudget(params: ReadPolicyV1NamespacedPodDisruptionBudgetRequest, opts?: APIClientRequestOpts): Promise<PodDisruptionBudget> {
    const path = `/apis/policy/v1/namespaces/${params.namespace}/poddisruptionbudgets/${params.name}`;
    return await this.get<PodDisruptionBudget>(path, null, null, opts);
  }
  async replacePolicyV1NamespacedPodDisruptionBudget(params: ReplacePolicyV1NamespacedPodDisruptionBudgetRequest, opts?: APIClientRequestOpts): Promise<PodDisruptionBudget> {
    const path = `/apis/policy/v1/namespaces/${params.namespace}/poddisruptionbudgets/${params.name}`;
    return await this.put<PodDisruptionBudget>(path, params.query, params.body, opts);
  }
  async deletePolicyV1NamespacedPodDisruptionBudget(params: DeletePolicyV1NamespacedPodDisruptionBudgetRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/policy/v1/namespaces/${params.namespace}/poddisruptionbudgets/${params.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchPolicyV1NamespacedPodDisruptionBudget(params: PatchPolicyV1NamespacedPodDisruptionBudgetRequest, opts?: APIClientRequestOpts): Promise<PodDisruptionBudget> {
    const path = `/apis/policy/v1/namespaces/${params.namespace}/poddisruptionbudgets/${params.name}`;
    return await this.patch<PodDisruptionBudget>(path, params.query, params.body, opts);
  }
  async readPolicyV1NamespacedPodDisruptionBudgetStatus(params: ReadPolicyV1NamespacedPodDisruptionBudgetStatusRequest, opts?: APIClientRequestOpts): Promise<PodDisruptionBudget> {
    const path = `/apis/policy/v1/namespaces/${params.namespace}/poddisruptionbudgets/${params.name}/status`;
    return await this.get<PodDisruptionBudget>(path, null, null, opts);
  }
  async replacePolicyV1NamespacedPodDisruptionBudgetStatus(params: ReplacePolicyV1NamespacedPodDisruptionBudgetStatusRequest, opts?: APIClientRequestOpts): Promise<PodDisruptionBudget> {
    const path = `/apis/policy/v1/namespaces/${params.namespace}/poddisruptionbudgets/${params.name}/status`;
    return await this.put<PodDisruptionBudget>(path, params.query, params.body, opts);
  }
  async patchPolicyV1NamespacedPodDisruptionBudgetStatus(params: PatchPolicyV1NamespacedPodDisruptionBudgetStatusRequest, opts?: APIClientRequestOpts): Promise<PodDisruptionBudget> {
    const path = `/apis/policy/v1/namespaces/${params.namespace}/poddisruptionbudgets/${params.name}/status`;
    return await this.patch<PodDisruptionBudget>(path, params.query, params.body, opts);
  }
  async listPolicyV1PodDisruptionBudgetForAllNamespaces(params: ListPolicyV1PodDisruptionBudgetForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<PodDisruptionBudgetList> {
    const path = `/apis/policy/v1/poddisruptionbudgets`;
    return await this.get<PodDisruptionBudgetList>(path, null, null, opts);
  }
  async watchPolicyV1NamespacedPodDisruptionBudgetList(params: WatchPolicyV1NamespacedPodDisruptionBudgetListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/policy/v1/watch/namespaces/${params.namespace}/poddisruptionbudgets`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchPolicyV1NamespacedPodDisruptionBudget(params: WatchPolicyV1NamespacedPodDisruptionBudgetRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/policy/v1/watch/namespaces/${params.namespace}/poddisruptionbudgets/${params.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchPolicyV1PodDisruptionBudgetListForAllNamespaces(params: WatchPolicyV1PodDisruptionBudgetListForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/policy/v1/watch/poddisruptionbudgets`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async getPolicyV1beta1APIResources(params: GetPolicyV1beta1APIResourcesRequest, opts?: APIClientRequestOpts): Promise<APIResourceList> {
    const path = `/apis/policy/v1beta1/`;
    return await this.get<APIResourceList>(path, null, null, opts);
  }
  async listPolicyV1beta1NamespacedPodDisruptionBudget(params: ListPolicyV1beta1NamespacedPodDisruptionBudgetRequest, opts?: APIClientRequestOpts): Promise<PodDisruptionBudgetList> {
    const path = `/apis/policy/v1beta1/namespaces/${params.namespace}/poddisruptionbudgets`;
    return await this.get<PodDisruptionBudgetList>(path, params.query, null, opts);
  }
  async createPolicyV1beta1NamespacedPodDisruptionBudget(params: CreatePolicyV1beta1NamespacedPodDisruptionBudgetRequest, opts?: APIClientRequestOpts): Promise<PodDisruptionBudget> {
    const path = `/apis/policy/v1beta1/namespaces/${params.namespace}/poddisruptionbudgets`;
    return await this.post<PodDisruptionBudget>(path, params.query, params.body, opts);
  }
  async deletePolicyV1beta1CollectionNamespacedPodDisruptionBudget(params: DeletePolicyV1beta1CollectionNamespacedPodDisruptionBudgetRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/policy/v1beta1/namespaces/${params.namespace}/poddisruptionbudgets`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readPolicyV1beta1NamespacedPodDisruptionBudget(params: ReadPolicyV1beta1NamespacedPodDisruptionBudgetRequest, opts?: APIClientRequestOpts): Promise<PodDisruptionBudget> {
    const path = `/apis/policy/v1beta1/namespaces/${params.namespace}/poddisruptionbudgets/${params.name}`;
    return await this.get<PodDisruptionBudget>(path, null, null, opts);
  }
  async replacePolicyV1beta1NamespacedPodDisruptionBudget(params: ReplacePolicyV1beta1NamespacedPodDisruptionBudgetRequest, opts?: APIClientRequestOpts): Promise<PodDisruptionBudget> {
    const path = `/apis/policy/v1beta1/namespaces/${params.namespace}/poddisruptionbudgets/${params.name}`;
    return await this.put<PodDisruptionBudget>(path, params.query, params.body, opts);
  }
  async deletePolicyV1beta1NamespacedPodDisruptionBudget(params: DeletePolicyV1beta1NamespacedPodDisruptionBudgetRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/policy/v1beta1/namespaces/${params.namespace}/poddisruptionbudgets/${params.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchPolicyV1beta1NamespacedPodDisruptionBudget(params: PatchPolicyV1beta1NamespacedPodDisruptionBudgetRequest, opts?: APIClientRequestOpts): Promise<PodDisruptionBudget> {
    const path = `/apis/policy/v1beta1/namespaces/${params.namespace}/poddisruptionbudgets/${params.name}`;
    return await this.patch<PodDisruptionBudget>(path, params.query, params.body, opts);
  }
  async readPolicyV1beta1NamespacedPodDisruptionBudgetStatus(params: ReadPolicyV1beta1NamespacedPodDisruptionBudgetStatusRequest, opts?: APIClientRequestOpts): Promise<PodDisruptionBudget> {
    const path = `/apis/policy/v1beta1/namespaces/${params.namespace}/poddisruptionbudgets/${params.name}/status`;
    return await this.get<PodDisruptionBudget>(path, null, null, opts);
  }
  async replacePolicyV1beta1NamespacedPodDisruptionBudgetStatus(params: ReplacePolicyV1beta1NamespacedPodDisruptionBudgetStatusRequest, opts?: APIClientRequestOpts): Promise<PodDisruptionBudget> {
    const path = `/apis/policy/v1beta1/namespaces/${params.namespace}/poddisruptionbudgets/${params.name}/status`;
    return await this.put<PodDisruptionBudget>(path, params.query, params.body, opts);
  }
  async patchPolicyV1beta1NamespacedPodDisruptionBudgetStatus(params: PatchPolicyV1beta1NamespacedPodDisruptionBudgetStatusRequest, opts?: APIClientRequestOpts): Promise<PodDisruptionBudget> {
    const path = `/apis/policy/v1beta1/namespaces/${params.namespace}/poddisruptionbudgets/${params.name}/status`;
    return await this.patch<PodDisruptionBudget>(path, params.query, params.body, opts);
  }
  async listPolicyV1beta1PodDisruptionBudgetForAllNamespaces(params: ListPolicyV1beta1PodDisruptionBudgetForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<PodDisruptionBudgetList> {
    const path = `/apis/policy/v1beta1/poddisruptionbudgets`;
    return await this.get<PodDisruptionBudgetList>(path, null, null, opts);
  }
  async listPolicyV1beta1PodSecurityPolicy(params: ListPolicyV1beta1PodSecurityPolicyRequest, opts?: APIClientRequestOpts): Promise<PodSecurityPolicyList> {
    const path = `/apis/policy/v1beta1/podsecuritypolicies`;
    return await this.get<PodSecurityPolicyList>(path, params.query, null, opts);
  }
  async createPolicyV1beta1PodSecurityPolicy(params: CreatePolicyV1beta1PodSecurityPolicyRequest, opts?: APIClientRequestOpts): Promise<PodSecurityPolicy> {
    const path = `/apis/policy/v1beta1/podsecuritypolicies`;
    return await this.post<PodSecurityPolicy>(path, params.query, params.body, opts);
  }
  async deletePolicyV1beta1CollectionPodSecurityPolicy(params: DeletePolicyV1beta1CollectionPodSecurityPolicyRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/policy/v1beta1/podsecuritypolicies`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readPolicyV1beta1PodSecurityPolicy(params: ReadPolicyV1beta1PodSecurityPolicyRequest, opts?: APIClientRequestOpts): Promise<PodSecurityPolicy> {
    const path = `/apis/policy/v1beta1/podsecuritypolicies/${params.name}`;
    return await this.get<PodSecurityPolicy>(path, null, null, opts);
  }
  async replacePolicyV1beta1PodSecurityPolicy(params: ReplacePolicyV1beta1PodSecurityPolicyRequest, opts?: APIClientRequestOpts): Promise<PodSecurityPolicy> {
    const path = `/apis/policy/v1beta1/podsecuritypolicies/${params.name}`;
    return await this.put<PodSecurityPolicy>(path, params.query, params.body, opts);
  }
  async deletePolicyV1beta1PodSecurityPolicy(params: DeletePolicyV1beta1PodSecurityPolicyRequest, opts?: APIClientRequestOpts): Promise<PodSecurityPolicy> {
    const path = `/apis/policy/v1beta1/podsecuritypolicies/${params.name}`;
    return await this.delete<PodSecurityPolicy>(path, params.query, null, opts);
  }
  async patchPolicyV1beta1PodSecurityPolicy(params: PatchPolicyV1beta1PodSecurityPolicyRequest, opts?: APIClientRequestOpts): Promise<PodSecurityPolicy> {
    const path = `/apis/policy/v1beta1/podsecuritypolicies/${params.name}`;
    return await this.patch<PodSecurityPolicy>(path, params.query, params.body, opts);
  }
  async watchPolicyV1beta1NamespacedPodDisruptionBudgetList(params: WatchPolicyV1beta1NamespacedPodDisruptionBudgetListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/policy/v1beta1/watch/namespaces/${params.namespace}/poddisruptionbudgets`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchPolicyV1beta1NamespacedPodDisruptionBudget(params: WatchPolicyV1beta1NamespacedPodDisruptionBudgetRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/policy/v1beta1/watch/namespaces/${params.namespace}/poddisruptionbudgets/${params.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchPolicyV1beta1PodDisruptionBudgetListForAllNamespaces(params: WatchPolicyV1beta1PodDisruptionBudgetListForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/policy/v1beta1/watch/poddisruptionbudgets`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchPolicyV1beta1PodSecurityPolicyList(params: WatchPolicyV1beta1PodSecurityPolicyListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/policy/v1beta1/watch/podsecuritypolicies`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchPolicyV1beta1PodSecurityPolicy(params: WatchPolicyV1beta1PodSecurityPolicyRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/policy/v1beta1/watch/podsecuritypolicies/${params.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async getRbacAuthorizationAPIGroup(params: GetRbacAuthorizationAPIGroupRequest, opts?: APIClientRequestOpts): Promise<APIGroup> {
    const path = `/apis/rbac.authorization.k8s.io/`;
    return await this.get<APIGroup>(path, null, null, opts);
  }
  async getRbacAuthorizationV1APIResources(params: GetRbacAuthorizationV1APIResourcesRequest, opts?: APIClientRequestOpts): Promise<APIResourceList> {
    const path = `/apis/rbac.authorization.k8s.io/v1/`;
    return await this.get<APIResourceList>(path, null, null, opts);
  }
  async listRbacAuthorizationV1ClusterRoleBinding(params: ListRbacAuthorizationV1ClusterRoleBindingRequest, opts?: APIClientRequestOpts): Promise<ClusterRoleBindingList> {
    const path = `/apis/rbac.authorization.k8s.io/v1/clusterrolebindings`;
    return await this.get<ClusterRoleBindingList>(path, params.query, null, opts);
  }
  async createRbacAuthorizationV1ClusterRoleBinding(params: CreateRbacAuthorizationV1ClusterRoleBindingRequest, opts?: APIClientRequestOpts): Promise<ClusterRoleBinding> {
    const path = `/apis/rbac.authorization.k8s.io/v1/clusterrolebindings`;
    return await this.post<ClusterRoleBinding>(path, params.query, params.body, opts);
  }
  async deleteRbacAuthorizationV1CollectionClusterRoleBinding(params: DeleteRbacAuthorizationV1CollectionClusterRoleBindingRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/rbac.authorization.k8s.io/v1/clusterrolebindings`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readRbacAuthorizationV1ClusterRoleBinding(params: ReadRbacAuthorizationV1ClusterRoleBindingRequest, opts?: APIClientRequestOpts): Promise<ClusterRoleBinding> {
    const path = `/apis/rbac.authorization.k8s.io/v1/clusterrolebindings/${params.name}`;
    return await this.get<ClusterRoleBinding>(path, null, null, opts);
  }
  async replaceRbacAuthorizationV1ClusterRoleBinding(params: ReplaceRbacAuthorizationV1ClusterRoleBindingRequest, opts?: APIClientRequestOpts): Promise<ClusterRoleBinding> {
    const path = `/apis/rbac.authorization.k8s.io/v1/clusterrolebindings/${params.name}`;
    return await this.put<ClusterRoleBinding>(path, params.query, params.body, opts);
  }
  async deleteRbacAuthorizationV1ClusterRoleBinding(params: DeleteRbacAuthorizationV1ClusterRoleBindingRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/rbac.authorization.k8s.io/v1/clusterrolebindings/${params.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchRbacAuthorizationV1ClusterRoleBinding(params: PatchRbacAuthorizationV1ClusterRoleBindingRequest, opts?: APIClientRequestOpts): Promise<ClusterRoleBinding> {
    const path = `/apis/rbac.authorization.k8s.io/v1/clusterrolebindings/${params.name}`;
    return await this.patch<ClusterRoleBinding>(path, params.query, params.body, opts);
  }
  async listRbacAuthorizationV1ClusterRole(params: ListRbacAuthorizationV1ClusterRoleRequest, opts?: APIClientRequestOpts): Promise<ClusterRoleList> {
    const path = `/apis/rbac.authorization.k8s.io/v1/clusterroles`;
    return await this.get<ClusterRoleList>(path, params.query, null, opts);
  }
  async createRbacAuthorizationV1ClusterRole(params: CreateRbacAuthorizationV1ClusterRoleRequest, opts?: APIClientRequestOpts): Promise<ClusterRole> {
    const path = `/apis/rbac.authorization.k8s.io/v1/clusterroles`;
    return await this.post<ClusterRole>(path, params.query, params.body, opts);
  }
  async deleteRbacAuthorizationV1CollectionClusterRole(params: DeleteRbacAuthorizationV1CollectionClusterRoleRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/rbac.authorization.k8s.io/v1/clusterroles`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readRbacAuthorizationV1ClusterRole(params: ReadRbacAuthorizationV1ClusterRoleRequest, opts?: APIClientRequestOpts): Promise<ClusterRole> {
    const path = `/apis/rbac.authorization.k8s.io/v1/clusterroles/${params.name}`;
    return await this.get<ClusterRole>(path, null, null, opts);
  }
  async replaceRbacAuthorizationV1ClusterRole(params: ReplaceRbacAuthorizationV1ClusterRoleRequest, opts?: APIClientRequestOpts): Promise<ClusterRole> {
    const path = `/apis/rbac.authorization.k8s.io/v1/clusterroles/${params.name}`;
    return await this.put<ClusterRole>(path, params.query, params.body, opts);
  }
  async deleteRbacAuthorizationV1ClusterRole(params: DeleteRbacAuthorizationV1ClusterRoleRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/rbac.authorization.k8s.io/v1/clusterroles/${params.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchRbacAuthorizationV1ClusterRole(params: PatchRbacAuthorizationV1ClusterRoleRequest, opts?: APIClientRequestOpts): Promise<ClusterRole> {
    const path = `/apis/rbac.authorization.k8s.io/v1/clusterroles/${params.name}`;
    return await this.patch<ClusterRole>(path, params.query, params.body, opts);
  }
  async listRbacAuthorizationV1NamespacedRoleBinding(params: ListRbacAuthorizationV1NamespacedRoleBindingRequest, opts?: APIClientRequestOpts): Promise<RoleBindingList> {
    const path = `/apis/rbac.authorization.k8s.io/v1/namespaces/${params.namespace}/rolebindings`;
    return await this.get<RoleBindingList>(path, params.query, null, opts);
  }
  async createRbacAuthorizationV1NamespacedRoleBinding(params: CreateRbacAuthorizationV1NamespacedRoleBindingRequest, opts?: APIClientRequestOpts): Promise<RoleBinding> {
    const path = `/apis/rbac.authorization.k8s.io/v1/namespaces/${params.namespace}/rolebindings`;
    return await this.post<RoleBinding>(path, params.query, params.body, opts);
  }
  async deleteRbacAuthorizationV1CollectionNamespacedRoleBinding(params: DeleteRbacAuthorizationV1CollectionNamespacedRoleBindingRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/rbac.authorization.k8s.io/v1/namespaces/${params.namespace}/rolebindings`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readRbacAuthorizationV1NamespacedRoleBinding(params: ReadRbacAuthorizationV1NamespacedRoleBindingRequest, opts?: APIClientRequestOpts): Promise<RoleBinding> {
    const path = `/apis/rbac.authorization.k8s.io/v1/namespaces/${params.namespace}/rolebindings/${params.name}`;
    return await this.get<RoleBinding>(path, null, null, opts);
  }
  async replaceRbacAuthorizationV1NamespacedRoleBinding(params: ReplaceRbacAuthorizationV1NamespacedRoleBindingRequest, opts?: APIClientRequestOpts): Promise<RoleBinding> {
    const path = `/apis/rbac.authorization.k8s.io/v1/namespaces/${params.namespace}/rolebindings/${params.name}`;
    return await this.put<RoleBinding>(path, params.query, params.body, opts);
  }
  async deleteRbacAuthorizationV1NamespacedRoleBinding(params: DeleteRbacAuthorizationV1NamespacedRoleBindingRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/rbac.authorization.k8s.io/v1/namespaces/${params.namespace}/rolebindings/${params.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchRbacAuthorizationV1NamespacedRoleBinding(params: PatchRbacAuthorizationV1NamespacedRoleBindingRequest, opts?: APIClientRequestOpts): Promise<RoleBinding> {
    const path = `/apis/rbac.authorization.k8s.io/v1/namespaces/${params.namespace}/rolebindings/${params.name}`;
    return await this.patch<RoleBinding>(path, params.query, params.body, opts);
  }
  async listRbacAuthorizationV1NamespacedRole(params: ListRbacAuthorizationV1NamespacedRoleRequest, opts?: APIClientRequestOpts): Promise<RoleList> {
    const path = `/apis/rbac.authorization.k8s.io/v1/namespaces/${params.namespace}/roles`;
    return await this.get<RoleList>(path, params.query, null, opts);
  }
  async createRbacAuthorizationV1NamespacedRole(params: CreateRbacAuthorizationV1NamespacedRoleRequest, opts?: APIClientRequestOpts): Promise<Role> {
    const path = `/apis/rbac.authorization.k8s.io/v1/namespaces/${params.namespace}/roles`;
    return await this.post<Role>(path, params.query, params.body, opts);
  }
  async deleteRbacAuthorizationV1CollectionNamespacedRole(params: DeleteRbacAuthorizationV1CollectionNamespacedRoleRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/rbac.authorization.k8s.io/v1/namespaces/${params.namespace}/roles`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readRbacAuthorizationV1NamespacedRole(params: ReadRbacAuthorizationV1NamespacedRoleRequest, opts?: APIClientRequestOpts): Promise<Role> {
    const path = `/apis/rbac.authorization.k8s.io/v1/namespaces/${params.namespace}/roles/${params.name}`;
    return await this.get<Role>(path, null, null, opts);
  }
  async replaceRbacAuthorizationV1NamespacedRole(params: ReplaceRbacAuthorizationV1NamespacedRoleRequest, opts?: APIClientRequestOpts): Promise<Role> {
    const path = `/apis/rbac.authorization.k8s.io/v1/namespaces/${params.namespace}/roles/${params.name}`;
    return await this.put<Role>(path, params.query, params.body, opts);
  }
  async deleteRbacAuthorizationV1NamespacedRole(params: DeleteRbacAuthorizationV1NamespacedRoleRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/rbac.authorization.k8s.io/v1/namespaces/${params.namespace}/roles/${params.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchRbacAuthorizationV1NamespacedRole(params: PatchRbacAuthorizationV1NamespacedRoleRequest, opts?: APIClientRequestOpts): Promise<Role> {
    const path = `/apis/rbac.authorization.k8s.io/v1/namespaces/${params.namespace}/roles/${params.name}`;
    return await this.patch<Role>(path, params.query, params.body, opts);
  }
  async listRbacAuthorizationV1RoleBindingForAllNamespaces(params: ListRbacAuthorizationV1RoleBindingForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<RoleBindingList> {
    const path = `/apis/rbac.authorization.k8s.io/v1/rolebindings`;
    return await this.get<RoleBindingList>(path, null, null, opts);
  }
  async listRbacAuthorizationV1RoleForAllNamespaces(params: ListRbacAuthorizationV1RoleForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<RoleList> {
    const path = `/apis/rbac.authorization.k8s.io/v1/roles`;
    return await this.get<RoleList>(path, null, null, opts);
  }
  async watchRbacAuthorizationV1ClusterRoleBindingList(params: WatchRbacAuthorizationV1ClusterRoleBindingListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/rbac.authorization.k8s.io/v1/watch/clusterrolebindings`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchRbacAuthorizationV1ClusterRoleBinding(params: WatchRbacAuthorizationV1ClusterRoleBindingRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/rbac.authorization.k8s.io/v1/watch/clusterrolebindings/${params.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchRbacAuthorizationV1ClusterRoleList(params: WatchRbacAuthorizationV1ClusterRoleListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/rbac.authorization.k8s.io/v1/watch/clusterroles`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchRbacAuthorizationV1ClusterRole(params: WatchRbacAuthorizationV1ClusterRoleRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/rbac.authorization.k8s.io/v1/watch/clusterroles/${params.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchRbacAuthorizationV1NamespacedRoleBindingList(params: WatchRbacAuthorizationV1NamespacedRoleBindingListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/rbac.authorization.k8s.io/v1/watch/namespaces/${params.namespace}/rolebindings`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchRbacAuthorizationV1NamespacedRoleBinding(params: WatchRbacAuthorizationV1NamespacedRoleBindingRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/rbac.authorization.k8s.io/v1/watch/namespaces/${params.namespace}/rolebindings/${params.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchRbacAuthorizationV1NamespacedRoleList(params: WatchRbacAuthorizationV1NamespacedRoleListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/rbac.authorization.k8s.io/v1/watch/namespaces/${params.namespace}/roles`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchRbacAuthorizationV1NamespacedRole(params: WatchRbacAuthorizationV1NamespacedRoleRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/rbac.authorization.k8s.io/v1/watch/namespaces/${params.namespace}/roles/${params.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchRbacAuthorizationV1RoleBindingListForAllNamespaces(params: WatchRbacAuthorizationV1RoleBindingListForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/rbac.authorization.k8s.io/v1/watch/rolebindings`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchRbacAuthorizationV1RoleListForAllNamespaces(params: WatchRbacAuthorizationV1RoleListForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/rbac.authorization.k8s.io/v1/watch/roles`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async getSchedulingAPIGroup(params: GetSchedulingAPIGroupRequest, opts?: APIClientRequestOpts): Promise<APIGroup> {
    const path = `/apis/scheduling.k8s.io/`;
    return await this.get<APIGroup>(path, null, null, opts);
  }
  async getSchedulingV1APIResources(params: GetSchedulingV1APIResourcesRequest, opts?: APIClientRequestOpts): Promise<APIResourceList> {
    const path = `/apis/scheduling.k8s.io/v1/`;
    return await this.get<APIResourceList>(path, null, null, opts);
  }
  async listSchedulingV1PriorityClass(params: ListSchedulingV1PriorityClassRequest, opts?: APIClientRequestOpts): Promise<PriorityClassList> {
    const path = `/apis/scheduling.k8s.io/v1/priorityclasses`;
    return await this.get<PriorityClassList>(path, params.query, null, opts);
  }
  async createSchedulingV1PriorityClass(params: CreateSchedulingV1PriorityClassRequest, opts?: APIClientRequestOpts): Promise<PriorityClass> {
    const path = `/apis/scheduling.k8s.io/v1/priorityclasses`;
    return await this.post<PriorityClass>(path, params.query, params.body, opts);
  }
  async deleteSchedulingV1CollectionPriorityClass(params: DeleteSchedulingV1CollectionPriorityClassRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/scheduling.k8s.io/v1/priorityclasses`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readSchedulingV1PriorityClass(params: ReadSchedulingV1PriorityClassRequest, opts?: APIClientRequestOpts): Promise<PriorityClass> {
    const path = `/apis/scheduling.k8s.io/v1/priorityclasses/${params.name}`;
    return await this.get<PriorityClass>(path, null, null, opts);
  }
  async replaceSchedulingV1PriorityClass(params: ReplaceSchedulingV1PriorityClassRequest, opts?: APIClientRequestOpts): Promise<PriorityClass> {
    const path = `/apis/scheduling.k8s.io/v1/priorityclasses/${params.name}`;
    return await this.put<PriorityClass>(path, params.query, params.body, opts);
  }
  async deleteSchedulingV1PriorityClass(params: DeleteSchedulingV1PriorityClassRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/scheduling.k8s.io/v1/priorityclasses/${params.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchSchedulingV1PriorityClass(params: PatchSchedulingV1PriorityClassRequest, opts?: APIClientRequestOpts): Promise<PriorityClass> {
    const path = `/apis/scheduling.k8s.io/v1/priorityclasses/${params.name}`;
    return await this.patch<PriorityClass>(path, params.query, params.body, opts);
  }
  async watchSchedulingV1PriorityClassList(params: WatchSchedulingV1PriorityClassListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/scheduling.k8s.io/v1/watch/priorityclasses`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchSchedulingV1PriorityClass(params: WatchSchedulingV1PriorityClassRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/scheduling.k8s.io/v1/watch/priorityclasses/${params.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async getStorageAPIGroup(params: GetStorageAPIGroupRequest, opts?: APIClientRequestOpts): Promise<APIGroup> {
    const path = `/apis/storage.k8s.io/`;
    return await this.get<APIGroup>(path, null, null, opts);
  }
  async getStorageV1APIResources(params: GetStorageV1APIResourcesRequest, opts?: APIClientRequestOpts): Promise<APIResourceList> {
    const path = `/apis/storage.k8s.io/v1/`;
    return await this.get<APIResourceList>(path, null, null, opts);
  }
  async listStorageV1CSIDriver(params: ListStorageV1CSIDriverRequest, opts?: APIClientRequestOpts): Promise<CSIDriverList> {
    const path = `/apis/storage.k8s.io/v1/csidrivers`;
    return await this.get<CSIDriverList>(path, params.query, null, opts);
  }
  async createStorageV1CSIDriver(params: CreateStorageV1CSIDriverRequest, opts?: APIClientRequestOpts): Promise<CSIDriver> {
    const path = `/apis/storage.k8s.io/v1/csidrivers`;
    return await this.post<CSIDriver>(path, params.query, params.body, opts);
  }
  async deleteStorageV1CollectionCSIDriver(params: DeleteStorageV1CollectionCSIDriverRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/storage.k8s.io/v1/csidrivers`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readStorageV1CSIDriver(params: ReadStorageV1CSIDriverRequest, opts?: APIClientRequestOpts): Promise<CSIDriver> {
    const path = `/apis/storage.k8s.io/v1/csidrivers/${params.name}`;
    return await this.get<CSIDriver>(path, null, null, opts);
  }
  async replaceStorageV1CSIDriver(params: ReplaceStorageV1CSIDriverRequest, opts?: APIClientRequestOpts): Promise<CSIDriver> {
    const path = `/apis/storage.k8s.io/v1/csidrivers/${params.name}`;
    return await this.put<CSIDriver>(path, params.query, params.body, opts);
  }
  async deleteStorageV1CSIDriver(params: DeleteStorageV1CSIDriverRequest, opts?: APIClientRequestOpts): Promise<CSIDriver> {
    const path = `/apis/storage.k8s.io/v1/csidrivers/${params.name}`;
    return await this.delete<CSIDriver>(path, params.query, null, opts);
  }
  async patchStorageV1CSIDriver(params: PatchStorageV1CSIDriverRequest, opts?: APIClientRequestOpts): Promise<CSIDriver> {
    const path = `/apis/storage.k8s.io/v1/csidrivers/${params.name}`;
    return await this.patch<CSIDriver>(path, params.query, params.body, opts);
  }
  async listStorageV1CSINode(params: ListStorageV1CSINodeRequest, opts?: APIClientRequestOpts): Promise<CSINodeList> {
    const path = `/apis/storage.k8s.io/v1/csinodes`;
    return await this.get<CSINodeList>(path, params.query, null, opts);
  }
  async createStorageV1CSINode(params: CreateStorageV1CSINodeRequest, opts?: APIClientRequestOpts): Promise<CSINode> {
    const path = `/apis/storage.k8s.io/v1/csinodes`;
    return await this.post<CSINode>(path, params.query, params.body, opts);
  }
  async deleteStorageV1CollectionCSINode(params: DeleteStorageV1CollectionCSINodeRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/storage.k8s.io/v1/csinodes`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readStorageV1CSINode(params: ReadStorageV1CSINodeRequest, opts?: APIClientRequestOpts): Promise<CSINode> {
    const path = `/apis/storage.k8s.io/v1/csinodes/${params.name}`;
    return await this.get<CSINode>(path, null, null, opts);
  }
  async replaceStorageV1CSINode(params: ReplaceStorageV1CSINodeRequest, opts?: APIClientRequestOpts): Promise<CSINode> {
    const path = `/apis/storage.k8s.io/v1/csinodes/${params.name}`;
    return await this.put<CSINode>(path, params.query, params.body, opts);
  }
  async deleteStorageV1CSINode(params: DeleteStorageV1CSINodeRequest, opts?: APIClientRequestOpts): Promise<CSINode> {
    const path = `/apis/storage.k8s.io/v1/csinodes/${params.name}`;
    return await this.delete<CSINode>(path, params.query, null, opts);
  }
  async patchStorageV1CSINode(params: PatchStorageV1CSINodeRequest, opts?: APIClientRequestOpts): Promise<CSINode> {
    const path = `/apis/storage.k8s.io/v1/csinodes/${params.name}`;
    return await this.patch<CSINode>(path, params.query, params.body, opts);
  }
  async listStorageV1StorageClass(params: ListStorageV1StorageClassRequest, opts?: APIClientRequestOpts): Promise<StorageClassList> {
    const path = `/apis/storage.k8s.io/v1/storageclasses`;
    return await this.get<StorageClassList>(path, params.query, null, opts);
  }
  async createStorageV1StorageClass(params: CreateStorageV1StorageClassRequest, opts?: APIClientRequestOpts): Promise<StorageClass> {
    const path = `/apis/storage.k8s.io/v1/storageclasses`;
    return await this.post<StorageClass>(path, params.query, params.body, opts);
  }
  async deleteStorageV1CollectionStorageClass(params: DeleteStorageV1CollectionStorageClassRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/storage.k8s.io/v1/storageclasses`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readStorageV1StorageClass(params: ReadStorageV1StorageClassRequest, opts?: APIClientRequestOpts): Promise<StorageClass> {
    const path = `/apis/storage.k8s.io/v1/storageclasses/${params.name}`;
    return await this.get<StorageClass>(path, null, null, opts);
  }
  async replaceStorageV1StorageClass(params: ReplaceStorageV1StorageClassRequest, opts?: APIClientRequestOpts): Promise<StorageClass> {
    const path = `/apis/storage.k8s.io/v1/storageclasses/${params.name}`;
    return await this.put<StorageClass>(path, params.query, params.body, opts);
  }
  async deleteStorageV1StorageClass(params: DeleteStorageV1StorageClassRequest, opts?: APIClientRequestOpts): Promise<StorageClass> {
    const path = `/apis/storage.k8s.io/v1/storageclasses/${params.name}`;
    return await this.delete<StorageClass>(path, params.query, null, opts);
  }
  async patchStorageV1StorageClass(params: PatchStorageV1StorageClassRequest, opts?: APIClientRequestOpts): Promise<StorageClass> {
    const path = `/apis/storage.k8s.io/v1/storageclasses/${params.name}`;
    return await this.patch<StorageClass>(path, params.query, params.body, opts);
  }
  async listStorageV1VolumeAttachment(params: ListStorageV1VolumeAttachmentRequest, opts?: APIClientRequestOpts): Promise<VolumeAttachmentList> {
    const path = `/apis/storage.k8s.io/v1/volumeattachments`;
    return await this.get<VolumeAttachmentList>(path, params.query, null, opts);
  }
  async createStorageV1VolumeAttachment(params: CreateStorageV1VolumeAttachmentRequest, opts?: APIClientRequestOpts): Promise<VolumeAttachment> {
    const path = `/apis/storage.k8s.io/v1/volumeattachments`;
    return await this.post<VolumeAttachment>(path, params.query, params.body, opts);
  }
  async deleteStorageV1CollectionVolumeAttachment(params: DeleteStorageV1CollectionVolumeAttachmentRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/storage.k8s.io/v1/volumeattachments`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readStorageV1VolumeAttachment(params: ReadStorageV1VolumeAttachmentRequest, opts?: APIClientRequestOpts): Promise<VolumeAttachment> {
    const path = `/apis/storage.k8s.io/v1/volumeattachments/${params.name}`;
    return await this.get<VolumeAttachment>(path, null, null, opts);
  }
  async replaceStorageV1VolumeAttachment(params: ReplaceStorageV1VolumeAttachmentRequest, opts?: APIClientRequestOpts): Promise<VolumeAttachment> {
    const path = `/apis/storage.k8s.io/v1/volumeattachments/${params.name}`;
    return await this.put<VolumeAttachment>(path, params.query, params.body, opts);
  }
  async deleteStorageV1VolumeAttachment(params: DeleteStorageV1VolumeAttachmentRequest, opts?: APIClientRequestOpts): Promise<VolumeAttachment> {
    const path = `/apis/storage.k8s.io/v1/volumeattachments/${params.name}`;
    return await this.delete<VolumeAttachment>(path, params.query, null, opts);
  }
  async patchStorageV1VolumeAttachment(params: PatchStorageV1VolumeAttachmentRequest, opts?: APIClientRequestOpts): Promise<VolumeAttachment> {
    const path = `/apis/storage.k8s.io/v1/volumeattachments/${params.name}`;
    return await this.patch<VolumeAttachment>(path, params.query, params.body, opts);
  }
  async readStorageV1VolumeAttachmentStatus(params: ReadStorageV1VolumeAttachmentStatusRequest, opts?: APIClientRequestOpts): Promise<VolumeAttachment> {
    const path = `/apis/storage.k8s.io/v1/volumeattachments/${params.name}/status`;
    return await this.get<VolumeAttachment>(path, null, null, opts);
  }
  async replaceStorageV1VolumeAttachmentStatus(params: ReplaceStorageV1VolumeAttachmentStatusRequest, opts?: APIClientRequestOpts): Promise<VolumeAttachment> {
    const path = `/apis/storage.k8s.io/v1/volumeattachments/${params.name}/status`;
    return await this.put<VolumeAttachment>(path, params.query, params.body, opts);
  }
  async patchStorageV1VolumeAttachmentStatus(params: PatchStorageV1VolumeAttachmentStatusRequest, opts?: APIClientRequestOpts): Promise<VolumeAttachment> {
    const path = `/apis/storage.k8s.io/v1/volumeattachments/${params.name}/status`;
    return await this.patch<VolumeAttachment>(path, params.query, params.body, opts);
  }
  async watchStorageV1CSIDriverList(params: WatchStorageV1CSIDriverListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/storage.k8s.io/v1/watch/csidrivers`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchStorageV1CSIDriver(params: WatchStorageV1CSIDriverRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/storage.k8s.io/v1/watch/csidrivers/${params.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchStorageV1CSINodeList(params: WatchStorageV1CSINodeListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/storage.k8s.io/v1/watch/csinodes`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchStorageV1CSINode(params: WatchStorageV1CSINodeRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/storage.k8s.io/v1/watch/csinodes/${params.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchStorageV1StorageClassList(params: WatchStorageV1StorageClassListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/storage.k8s.io/v1/watch/storageclasses`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchStorageV1StorageClass(params: WatchStorageV1StorageClassRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/storage.k8s.io/v1/watch/storageclasses/${params.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchStorageV1VolumeAttachmentList(params: WatchStorageV1VolumeAttachmentListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/storage.k8s.io/v1/watch/volumeattachments`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchStorageV1VolumeAttachment(params: WatchStorageV1VolumeAttachmentRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/storage.k8s.io/v1/watch/volumeattachments/${params.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async getStorageV1beta1APIResources(params: GetStorageV1beta1APIResourcesRequest, opts?: APIClientRequestOpts): Promise<APIResourceList> {
    const path = `/apis/storage.k8s.io/v1beta1/`;
    return await this.get<APIResourceList>(path, null, null, opts);
  }
  async listStorageV1beta1CSIStorageCapacityForAllNamespaces(params: ListStorageV1beta1CSIStorageCapacityForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<CSIStorageCapacityList> {
    const path = `/apis/storage.k8s.io/v1beta1/csistoragecapacities`;
    return await this.get<CSIStorageCapacityList>(path, null, null, opts);
  }
  async listStorageV1beta1NamespacedCSIStorageCapacity(params: ListStorageV1beta1NamespacedCSIStorageCapacityRequest, opts?: APIClientRequestOpts): Promise<CSIStorageCapacityList> {
    const path = `/apis/storage.k8s.io/v1beta1/namespaces/${params.namespace}/csistoragecapacities`;
    return await this.get<CSIStorageCapacityList>(path, params.query, null, opts);
  }
  async createStorageV1beta1NamespacedCSIStorageCapacity(params: CreateStorageV1beta1NamespacedCSIStorageCapacityRequest, opts?: APIClientRequestOpts): Promise<CSIStorageCapacity> {
    const path = `/apis/storage.k8s.io/v1beta1/namespaces/${params.namespace}/csistoragecapacities`;
    return await this.post<CSIStorageCapacity>(path, params.query, params.body, opts);
  }
  async deleteStorageV1beta1CollectionNamespacedCSIStorageCapacity(params: DeleteStorageV1beta1CollectionNamespacedCSIStorageCapacityRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/storage.k8s.io/v1beta1/namespaces/${params.namespace}/csistoragecapacities`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readStorageV1beta1NamespacedCSIStorageCapacity(params: ReadStorageV1beta1NamespacedCSIStorageCapacityRequest, opts?: APIClientRequestOpts): Promise<CSIStorageCapacity> {
    const path = `/apis/storage.k8s.io/v1beta1/namespaces/${params.namespace}/csistoragecapacities/${params.name}`;
    return await this.get<CSIStorageCapacity>(path, null, null, opts);
  }
  async replaceStorageV1beta1NamespacedCSIStorageCapacity(params: ReplaceStorageV1beta1NamespacedCSIStorageCapacityRequest, opts?: APIClientRequestOpts): Promise<CSIStorageCapacity> {
    const path = `/apis/storage.k8s.io/v1beta1/namespaces/${params.namespace}/csistoragecapacities/${params.name}`;
    return await this.put<CSIStorageCapacity>(path, params.query, params.body, opts);
  }
  async deleteStorageV1beta1NamespacedCSIStorageCapacity(params: DeleteStorageV1beta1NamespacedCSIStorageCapacityRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/storage.k8s.io/v1beta1/namespaces/${params.namespace}/csistoragecapacities/${params.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchStorageV1beta1NamespacedCSIStorageCapacity(params: PatchStorageV1beta1NamespacedCSIStorageCapacityRequest, opts?: APIClientRequestOpts): Promise<CSIStorageCapacity> {
    const path = `/apis/storage.k8s.io/v1beta1/namespaces/${params.namespace}/csistoragecapacities/${params.name}`;
    return await this.patch<CSIStorageCapacity>(path, params.query, params.body, opts);
  }
  async watchStorageV1beta1CSIStorageCapacityListForAllNamespaces(params: WatchStorageV1beta1CSIStorageCapacityListForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/storage.k8s.io/v1beta1/watch/csistoragecapacities`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchStorageV1beta1NamespacedCSIStorageCapacityList(params: WatchStorageV1beta1NamespacedCSIStorageCapacityListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/storage.k8s.io/v1beta1/watch/namespaces/${params.namespace}/csistoragecapacities`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchStorageV1beta1NamespacedCSIStorageCapacity(params: WatchStorageV1beta1NamespacedCSIStorageCapacityRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/storage.k8s.io/v1beta1/watch/namespaces/${params.namespace}/csistoragecapacities/${params.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async logFileListHandler(params: LogFileListHandlerRequest, opts?: APIClientRequestOpts): Promise<any> {
    const path = `/logs/`;
    return await this.get<any>(path, null, null, opts);
  }
  async logFileHandler(params: LogFileHandlerRequest, opts?: APIClientRequestOpts): Promise<any> {
    const path = `/logs/${params.logpath}`;
    return await this.get<any>(path, null, null, opts);
  }
  async getServiceAccountIssuerOpenIDKeyset(params: GetServiceAccountIssuerOpenIDKeysetRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/openid/v1/jwks/`;
    return await this.get<string>(path, null, null, opts);
  }
  async getCodeVersion(params: GetCodeVersionRequest, opts?: APIClientRequestOpts): Promise<Info> {
    const path = `/version/`;
    return await this.get<Info>(path, null, null, opts);
  }
}