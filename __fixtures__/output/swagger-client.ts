import { APIClient, APIClientRequestOpts, APIClientOptions } from "@interweb/fetch-api-client";
/* io.k8s.api.admissionregistration.v1.MutatingWebhook */
/* MutatingWebhook describes an admission webhook and the resources and operations it applies to. */
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
/* io.k8s.api.admissionregistration.v1.MutatingWebhookConfiguration */
/* MutatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and may change the object. */
export interface MutatingWebhookConfiguration {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  webhooks?: MutatingWebhook[];
}
/* io.k8s.api.admissionregistration.v1.MutatingWebhookConfigurationList */
/* MutatingWebhookConfigurationList is a list of MutatingWebhookConfiguration. */
export interface MutatingWebhookConfigurationList {
  apiVersion?: string;
  items: MutatingWebhookConfiguration[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.admissionregistration.v1.RuleWithOperations */
/* RuleWithOperations is a tuple of Operations and Resources. It is recommended to make sure that all the tuple expansions are valid. */
export interface RuleWithOperations {
  apiGroups?: string[];
  apiVersions?: string[];
  operations?: string[];
  resources?: string[];
  scope?: string;
}
/* io.k8s.api.admissionregistration.v1.ServiceReference */
/* ServiceReference holds a reference to Service.legacy.k8s.io */
export interface AdmissionServiceReference {
  name: string;
  namespace: string;
  path?: string;
  port?: number;
}
/* io.k8s.api.admissionregistration.v1.ValidatingWebhook */
/* ValidatingWebhook describes an admission webhook and the resources and operations it applies to. */
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
/* io.k8s.api.admissionregistration.v1.ValidatingWebhookConfiguration */
/* ValidatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and object without changing it. */
export interface ValidatingWebhookConfiguration {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  webhooks?: ValidatingWebhook[];
}
/* io.k8s.api.admissionregistration.v1.ValidatingWebhookConfigurationList */
/* ValidatingWebhookConfigurationList is a list of ValidatingWebhookConfiguration. */
export interface ValidatingWebhookConfigurationList {
  apiVersion?: string;
  items: ValidatingWebhookConfiguration[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.admissionregistration.v1.WebhookClientConfig */
/* WebhookClientConfig contains the information to make a TLS connection with the webhook */
export interface WebhookClientConfig {
  caBundle?: string;
  service?: AdmissionServiceReference;
  url?: string;
}
/* io.k8s.api.apps.v1.ControllerRevision */
/* ControllerRevision implements an immutable snapshot of state data. Clients are responsible for serializing and deserializing the objects that contain their internal state. Once a ControllerRevision has been successfully created, it can not be updated. The API Server will fail validation of all requests that attempt to mutate the Data field. ControllerRevisions may, however, be deleted. Note that, due to its use by both the DaemonSet and StatefulSet controllers for update and rollback, this object is beta. However, it may be subject to name and representation changes in future releases, and clients should not depend on its stability. It is primarily for internal use by controllers. */
export interface ControllerRevision {
  apiVersion?: string;
  data?: RawExtension;
  kind?: string;
  metadata?: ObjectMeta;
  revision: number;
}
/* io.k8s.api.apps.v1.ControllerRevisionList */
/* ControllerRevisionList is a resource containing a list of ControllerRevision objects. */
export interface ControllerRevisionList {
  apiVersion?: string;
  items: ControllerRevision[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.apps.v1.DaemonSet */
/* DaemonSet represents the configuration of a daemon set. */
export interface DaemonSet {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: DaemonSetSpec;
  status?: DaemonSetStatus;
}
/* io.k8s.api.apps.v1.DaemonSetCondition */
/* DaemonSetCondition describes the state of a DaemonSet at a certain point. */
export interface DaemonSetCondition {
  lastTransitionTime?: Time;
  message?: string;
  reason?: string;
  status: string;
  type: string;
}
/* io.k8s.api.apps.v1.DaemonSetList */
/* DaemonSetList is a collection of daemon sets. */
export interface DaemonSetList {
  apiVersion?: string;
  items: DaemonSet[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.apps.v1.DaemonSetSpec */
/* DaemonSetSpec is the specification of a daemon set. */
export interface DaemonSetSpec {
  minReadySeconds?: number;
  revisionHistoryLimit?: number;
  selector: LabelSelector;
  template: PodTemplateSpec;
  updateStrategy?: DaemonSetUpdateStrategy;
}
/* io.k8s.api.apps.v1.DaemonSetStatus */
/* DaemonSetStatus represents the current status of a daemon set. */
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
/* io.k8s.api.apps.v1.DaemonSetUpdateStrategy */
/* DaemonSetUpdateStrategy is a struct used to control the update strategy for a DaemonSet. */
export interface DaemonSetUpdateStrategy {
  rollingUpdate?: RollingUpdateDaemonSet;
  type?: string;
}
/* io.k8s.api.apps.v1.Deployment */
/* Deployment enables declarative updates for Pods and ReplicaSets. */
export interface Deployment {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: DeploymentSpec;
  status?: DeploymentStatus;
}
/* io.k8s.api.apps.v1.DeploymentCondition */
/* DeploymentCondition describes the state of a deployment at a certain point. */
export interface DeploymentCondition {
  lastTransitionTime?: Time;
  lastUpdateTime?: Time;
  message?: string;
  reason?: string;
  status: string;
  type: string;
}
/* io.k8s.api.apps.v1.DeploymentList */
/* DeploymentList is a list of Deployments. */
export interface DeploymentList {
  apiVersion?: string;
  items: Deployment[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.apps.v1.DeploymentSpec */
/* DeploymentSpec is the specification of the desired behavior of the Deployment. */
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
/* io.k8s.api.apps.v1.DeploymentStatus */
/* DeploymentStatus is the most recently observed status of the Deployment. */
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
/* io.k8s.api.apps.v1.DeploymentStrategy */
/* DeploymentStrategy describes how to replace existing pods with new ones. */
export interface DeploymentStrategy {
  rollingUpdate?: RollingUpdateDeployment;
  type?: string;
}
/* io.k8s.api.apps.v1.ReplicaSet */
/* ReplicaSet ensures that a specified number of pod replicas are running at any given time. */
export interface ReplicaSet {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: ReplicaSetSpec;
  status?: ReplicaSetStatus;
}
/* io.k8s.api.apps.v1.ReplicaSetCondition */
/* ReplicaSetCondition describes the state of a replica set at a certain point. */
export interface ReplicaSetCondition {
  lastTransitionTime?: Time;
  message?: string;
  reason?: string;
  status: string;
  type: string;
}
/* io.k8s.api.apps.v1.ReplicaSetList */
/* ReplicaSetList is a collection of ReplicaSets. */
export interface ReplicaSetList {
  apiVersion?: string;
  items: ReplicaSet[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.apps.v1.ReplicaSetSpec */
/* ReplicaSetSpec is the specification of a ReplicaSet. */
export interface ReplicaSetSpec {
  minReadySeconds?: number;
  replicas?: number;
  selector: LabelSelector;
  template?: PodTemplateSpec;
}
/* io.k8s.api.apps.v1.ReplicaSetStatus */
/* ReplicaSetStatus represents the current status of a ReplicaSet. */
export interface ReplicaSetStatus {
  availableReplicas?: number;
  conditions?: ReplicaSetCondition[];
  fullyLabeledReplicas?: number;
  observedGeneration?: number;
  readyReplicas?: number;
  replicas: number;
}
/* io.k8s.api.apps.v1.RollingUpdateDaemonSet */
/* Spec to control the desired behavior of daemon set rolling update. */
export interface RollingUpdateDaemonSet {
  maxSurge?: IntOrString;
  maxUnavailable?: IntOrString;
}
/* io.k8s.api.apps.v1.RollingUpdateDeployment */
/* Spec to control the desired behavior of rolling update. */
export interface RollingUpdateDeployment {
  maxSurge?: IntOrString;
  maxUnavailable?: IntOrString;
}
/* io.k8s.api.apps.v1.RollingUpdateStatefulSetStrategy */
/* RollingUpdateStatefulSetStrategy is used to communicate parameter for RollingUpdateStatefulSetStrategyType. */
export interface RollingUpdateStatefulSetStrategy {
  partition?: number;
}
/* io.k8s.api.apps.v1.StatefulSet */
/* StatefulSet represents a set of pods with consistent identities. Identities are defined as:
 - Network: A single stable DNS and hostname.
 - Storage: As many VolumeClaims as requested.
The StatefulSet guarantees that a given network identity will always map to the same storage identity. */
export interface StatefulSet {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: StatefulSetSpec;
  status?: StatefulSetStatus;
}
/* io.k8s.api.apps.v1.StatefulSetCondition */
/* StatefulSetCondition describes the state of a statefulset at a certain point. */
export interface StatefulSetCondition {
  lastTransitionTime?: Time;
  message?: string;
  reason?: string;
  status: string;
  type: string;
}
/* io.k8s.api.apps.v1.StatefulSetList */
/* StatefulSetList is a collection of StatefulSets. */
export interface StatefulSetList {
  apiVersion?: string;
  items: StatefulSet[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.apps.v1.StatefulSetSpec */
/* A StatefulSetSpec is the specification of a StatefulSet. */
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
/* io.k8s.api.apps.v1.StatefulSetStatus */
/* StatefulSetStatus represents the current state of a StatefulSet. */
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
/* io.k8s.api.apps.v1.StatefulSetUpdateStrategy */
/* StatefulSetUpdateStrategy indicates the strategy that the StatefulSet controller will use to perform updates. It includes any additional parameters necessary to perform the update for the indicated strategy. */
export interface StatefulSetUpdateStrategy {
  rollingUpdate?: RollingUpdateStatefulSetStrategy;
  type?: string;
}
/* io.k8s.api.authentication.v1.BoundObjectReference */
/* BoundObjectReference is a reference to an object that a token is bound to. */
export interface BoundObjectReference {
  apiVersion?: string;
  kind?: string;
  name?: string;
  uid?: string;
}
/* io.k8s.api.authentication.v1.TokenRequest */
/* TokenRequest requests a token for a given service account. */
export interface TokenRequest {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec: TokenRequestSpec;
  status?: TokenRequestStatus;
}
/* io.k8s.api.authentication.v1.TokenRequestSpec */
/* TokenRequestSpec contains client provided parameters of a token request. */
export interface TokenRequestSpec {
  audiences: string[];
  boundObjectRef?: BoundObjectReference;
  expirationSeconds?: number;
}
/* io.k8s.api.authentication.v1.TokenRequestStatus */
/* TokenRequestStatus is the result of a token request. */
export interface TokenRequestStatus {
  expirationTimestamp: Time;
  token: string;
}
/* io.k8s.api.authentication.v1.TokenReview */
/* TokenReview attempts to authenticate a token to a known user. Note: TokenReview requests may be cached by the webhook token authenticator plugin in the kube-apiserver. */
export interface TokenReview {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec: TokenReviewSpec;
  status?: TokenReviewStatus;
}
/* io.k8s.api.authentication.v1.TokenReviewSpec */
/* TokenReviewSpec is a description of the token authentication request. */
export interface TokenReviewSpec {
  audiences?: string[];
  token?: string;
}
/* io.k8s.api.authentication.v1.TokenReviewStatus */
/* TokenReviewStatus is the result of the token authentication request. */
export interface TokenReviewStatus {
  audiences?: string[];
  authenticated?: boolean;
  error?: string;
  user?: UserInfo;
}
/* io.k8s.api.authentication.v1.UserInfo */
/* UserInfo holds the information about the user needed to implement the user.Info interface. */
export interface UserInfo {
  extra?: {
    [key: string]: unknown;
  };
  groups?: string[];
  uid?: string;
  username?: string;
}
/* io.k8s.api.authorization.v1.LocalSubjectAccessReview */
/* LocalSubjectAccessReview checks whether or not a user or group can perform an action in a given namespace. Having a namespace scoped resource makes it much easier to grant namespace scoped policy that includes permissions checking. */
export interface LocalSubjectAccessReview {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec: SubjectAccessReviewSpec;
  status?: SubjectAccessReviewStatus;
}
/* io.k8s.api.authorization.v1.NonResourceAttributes */
/* NonResourceAttributes includes the authorization attributes available for non-resource requests to the Authorizer interface */
export interface NonResourceAttributes {
  path?: string;
  verb?: string;
}
/* io.k8s.api.authorization.v1.NonResourceRule */
/* NonResourceRule holds information that describes a rule for the non-resource */
export interface NonResourceRule {
  nonResourceURLs?: string[];
  verbs: string[];
}
/* io.k8s.api.authorization.v1.ResourceAttributes */
/* ResourceAttributes includes the authorization attributes available for resource requests to the Authorizer interface */
export interface ResourceAttributes {
  group?: string;
  name?: string;
  namespace?: string;
  resource?: string;
  subresource?: string;
  verb?: string;
  version?: string;
}
/* io.k8s.api.authorization.v1.ResourceRule */
/* ResourceRule is the list of actions the subject is allowed to perform on resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete. */
export interface ResourceRule {
  apiGroups?: string[];
  resourceNames?: string[];
  resources?: string[];
  verbs: string[];
}
/* io.k8s.api.authorization.v1.SelfSubjectAccessReview */
/* SelfSubjectAccessReview checks whether or the current user can perform an action.  Not filling in a spec.namespace means "in all namespaces".  Self is a special case, because users should always be able to check whether they can perform an action */
export interface SelfSubjectAccessReview {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec: SelfSubjectAccessReviewSpec;
  status?: SubjectAccessReviewStatus;
}
/* io.k8s.api.authorization.v1.SelfSubjectAccessReviewSpec */
/* SelfSubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set */
export interface SelfSubjectAccessReviewSpec {
  nonResourceAttributes?: NonResourceAttributes;
  resourceAttributes?: ResourceAttributes;
}
/* io.k8s.api.authorization.v1.SelfSubjectRulesReview */
/* SelfSubjectRulesReview enumerates the set of actions the current user can perform within a namespace. The returned list of actions may be incomplete depending on the server's authorization mode, and any errors experienced during the evaluation. SelfSubjectRulesReview should be used by UIs to show/hide actions, or to quickly let an end user reason about their permissions. It should NOT Be used by external systems to drive authorization decisions as this raises confused deputy, cache lifetime/revocation, and correctness concerns. SubjectAccessReview, and LocalAccessReview are the correct way to defer authorization decisions to the API server. */
export interface SelfSubjectRulesReview {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec: SelfSubjectRulesReviewSpec;
  status?: SubjectRulesReviewStatus;
}
/* io.k8s.api.authorization.v1.SelfSubjectRulesReviewSpec */
/* SelfSubjectRulesReviewSpec defines the specification for SelfSubjectRulesReview. */
export interface SelfSubjectRulesReviewSpec {
  namespace?: string;
}
/* io.k8s.api.authorization.v1.SubjectAccessReview */
/* SubjectAccessReview checks whether or not a user or group can perform an action. */
export interface SubjectAccessReview {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec: SubjectAccessReviewSpec;
  status?: SubjectAccessReviewStatus;
}
/* io.k8s.api.authorization.v1.SubjectAccessReviewSpec */
/* SubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set */
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
/* io.k8s.api.authorization.v1.SubjectAccessReviewStatus */
/* SubjectAccessReviewStatus */
export interface SubjectAccessReviewStatus {
  allowed: boolean;
  denied?: boolean;
  evaluationError?: string;
  reason?: string;
}
/* io.k8s.api.authorization.v1.SubjectRulesReviewStatus */
/* SubjectRulesReviewStatus contains the result of a rules check. This check can be incomplete depending on the set of authorizers the server is configured with and any errors experienced during evaluation. Because authorization rules are additive, if a rule appears in a list it's safe to assume the subject has that permission, even if that list is incomplete. */
export interface SubjectRulesReviewStatus {
  evaluationError?: string;
  incomplete: boolean;
  nonResourceRules: NonResourceRule[];
  resourceRules: ResourceRule[];
}
/* io.k8s.api.autoscaling.v1.CrossVersionObjectReference */
/* CrossVersionObjectReference contains enough information to let you identify the referred resource. */
export interface CrossVersionObjectReference {
  apiVersion?: string;
  kind: string;
  name: string;
}
/* io.k8s.api.autoscaling.v1.HorizontalPodAutoscaler */
/* configuration of a horizontal pod autoscaler. */
export interface HorizontalPodAutoscaler {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: HorizontalPodAutoscalerSpec;
  status?: HorizontalPodAutoscalerStatus;
}
/* io.k8s.api.autoscaling.v1.HorizontalPodAutoscalerList */
/* list of horizontal pod autoscaler objects. */
export interface HorizontalPodAutoscalerList {
  apiVersion?: string;
  items: HorizontalPodAutoscaler[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.autoscaling.v1.HorizontalPodAutoscalerSpec */
/* specification of a horizontal pod autoscaler. */
export interface HorizontalPodAutoscalerSpec {
  maxReplicas: number;
  minReplicas?: number;
  scaleTargetRef: CrossVersionObjectReference;
  targetCPUUtilizationPercentage?: number;
}
/* io.k8s.api.autoscaling.v1.HorizontalPodAutoscalerStatus */
/* current status of a horizontal pod autoscaler */
export interface HorizontalPodAutoscalerStatus {
  currentCPUUtilizationPercentage?: number;
  currentReplicas: number;
  desiredReplicas: number;
  lastScaleTime?: Time;
  observedGeneration?: number;
}
/* io.k8s.api.autoscaling.v1.Scale */
/* Scale represents a scaling request for a resource. */
export interface Scale {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: ScaleSpec;
  status?: ScaleStatus;
}
/* io.k8s.api.autoscaling.v1.ScaleSpec */
/* ScaleSpec describes the attributes of a scale subresource. */
export interface ScaleSpec {
  replicas?: number;
}
/* io.k8s.api.autoscaling.v1.ScaleStatus */
/* ScaleStatus represents the current status of a scale subresource. */
export interface ScaleStatus {
  replicas: number;
  selector?: string;
}
/* io.k8s.api.autoscaling.v2beta2.ContainerResourceMetricSource */
/* ContainerResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set. */
export interface ContainerResourceMetricSource {
  container: string;
  name: string;
  target: MetricTarget;
}
/* io.k8s.api.autoscaling.v2beta2.ContainerResourceMetricStatus */
/* ContainerResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing a single container in each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source. */
export interface ContainerResourceMetricStatus {
  container: string;
  current: MetricValueStatus;
  name: string;
}
/* io.k8s.api.autoscaling.v2beta2.CrossVersionObjectReference */
/* CrossVersionObjectReference contains enough information to let you identify the referred resource. */
export interface CrossVersionObjectReference {
  apiVersion?: string;
  kind: string;
  name: string;
}
/* io.k8s.api.autoscaling.v2beta2.ExternalMetricSource */
/* ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster). */
export interface ExternalMetricSource {
  metric: MetricIdentifier;
  target: MetricTarget;
}
/* io.k8s.api.autoscaling.v2beta2.ExternalMetricStatus */
/* ExternalMetricStatus indicates the current value of a global metric not associated with any Kubernetes object. */
export interface ExternalMetricStatus {
  current: MetricValueStatus;
  metric: MetricIdentifier;
}
/* io.k8s.api.autoscaling.v2beta2.HPAScalingPolicy */
/* HPAScalingPolicy is a single policy which must hold true for a specified past interval. */
export interface HPAScalingPolicy {
  periodSeconds: number;
  type: string;
  value: number;
}
/* io.k8s.api.autoscaling.v2beta2.HPAScalingRules */
/* HPAScalingRules configures the scaling behavior for one direction. These Rules are applied after calculating DesiredReplicas from metrics for the HPA. They can limit the scaling velocity by specifying scaling policies. They can prevent flapping by specifying the stabilization window, so that the number of replicas is not set instantly, instead, the safest value from the stabilization window is chosen. */
export interface HPAScalingRules {
  policies?: HPAScalingPolicy[];
  selectPolicy?: string;
  stabilizationWindowSeconds?: number;
}
/* io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscaler */
/* HorizontalPodAutoscaler is the configuration for a horizontal pod autoscaler, which automatically manages the replica count of any resource implementing the scale subresource based on the metrics specified. */
export interface HorizontalPodAutoscaler {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: HorizontalPodAutoscalerSpec;
  status?: HorizontalPodAutoscalerStatus;
}
/* io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscalerBehavior */
/* HorizontalPodAutoscalerBehavior configures the scaling behavior of the target in both Up and Down directions (scaleUp and scaleDown fields respectively). */
export interface HorizontalPodAutoscalerBehavior {
  scaleDown?: HPAScalingRules;
  scaleUp?: HPAScalingRules;
}
/* io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscalerCondition */
/* HorizontalPodAutoscalerCondition describes the state of a HorizontalPodAutoscaler at a certain point. */
export interface HorizontalPodAutoscalerCondition {
  lastTransitionTime?: Time;
  message?: string;
  reason?: string;
  status: string;
  type: string;
}
/* io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscalerList */
/* HorizontalPodAutoscalerList is a list of horizontal pod autoscaler objects. */
export interface HorizontalPodAutoscalerList {
  apiVersion?: string;
  items: HorizontalPodAutoscaler[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscalerSpec */
/* HorizontalPodAutoscalerSpec describes the desired functionality of the HorizontalPodAutoscaler. */
export interface HorizontalPodAutoscalerSpec {
  behavior?: HorizontalPodAutoscalerBehavior;
  maxReplicas: number;
  metrics?: MetricSpec[];
  minReplicas?: number;
  scaleTargetRef: CrossVersionObjectReference;
}
/* io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscalerStatus */
/* HorizontalPodAutoscalerStatus describes the current status of a horizontal pod autoscaler. */
export interface HorizontalPodAutoscalerStatus {
  conditions: HorizontalPodAutoscalerCondition[];
  currentMetrics?: MetricStatus[];
  currentReplicas: number;
  desiredReplicas: number;
  lastScaleTime?: Time;
  observedGeneration?: number;
}
/* io.k8s.api.autoscaling.v2beta2.MetricIdentifier */
/* MetricIdentifier defines the name and optionally selector for a metric */
export interface MetricIdentifier {
  name: string;
  selector?: LabelSelector;
}
/* io.k8s.api.autoscaling.v2beta2.MetricSpec */
/* MetricSpec specifies how to scale based on a single metric (only `type` and one other matching field should be set at once). */
export interface MetricSpec {
  containerResource?: ContainerResourceMetricSource;
  external?: ExternalMetricSource;
  object?: ObjectMetricSource;
  pods?: PodsMetricSource;
  resource?: ResourceMetricSource;
  type: string;
}
/* io.k8s.api.autoscaling.v2beta2.MetricStatus */
/* MetricStatus describes the last-read state of a single metric. */
export interface MetricStatus {
  containerResource?: ContainerResourceMetricStatus;
  external?: ExternalMetricStatus;
  object?: ObjectMetricStatus;
  pods?: PodsMetricStatus;
  resource?: ResourceMetricStatus;
  type: string;
}
/* io.k8s.api.autoscaling.v2beta2.MetricTarget */
/* MetricTarget defines the target value, average value, or average utilization of a specific metric */
export interface MetricTarget {
  averageUtilization?: number;
  averageValue?: Quantity;
  type: string;
  value?: Quantity;
}
/* io.k8s.api.autoscaling.v2beta2.MetricValueStatus */
/* MetricValueStatus holds the current value for a metric */
export interface MetricValueStatus {
  averageUtilization?: number;
  averageValue?: Quantity;
  value?: Quantity;
}
/* io.k8s.api.autoscaling.v2beta2.ObjectMetricSource */
/* ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object). */
export interface ObjectMetricSource {
  describedObject: CrossVersionObjectReference;
  metric: MetricIdentifier;
  target: MetricTarget;
}
/* io.k8s.api.autoscaling.v2beta2.ObjectMetricStatus */
/* ObjectMetricStatus indicates the current value of a metric describing a kubernetes object (for example, hits-per-second on an Ingress object). */
export interface ObjectMetricStatus {
  current: MetricValueStatus;
  describedObject: CrossVersionObjectReference;
  metric: MetricIdentifier;
}
/* io.k8s.api.autoscaling.v2beta2.PodsMetricSource */
/* PodsMetricSource indicates how to scale on a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value. */
export interface PodsMetricSource {
  metric: MetricIdentifier;
  target: MetricTarget;
}
/* io.k8s.api.autoscaling.v2beta2.PodsMetricStatus */
/* PodsMetricStatus indicates the current value of a metric describing each pod in the current scale target (for example, transactions-processed-per-second). */
export interface PodsMetricStatus {
  current: MetricValueStatus;
  metric: MetricIdentifier;
}
/* io.k8s.api.autoscaling.v2beta2.ResourceMetricSource */
/* ResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set. */
export interface ResourceMetricSource {
  name: string;
  target: MetricTarget;
}
/* io.k8s.api.autoscaling.v2beta2.ResourceMetricStatus */
/* ResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source. */
export interface ResourceMetricStatus {
  current: MetricValueStatus;
  name: string;
}
/* io.k8s.api.batch.v1.CronJob */
/* CronJob represents the configuration of a single cron job. */
export interface CronJob {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: CronJobSpec;
  status?: CronJobStatus;
}
/* io.k8s.api.batch.v1.CronJobList */
/* CronJobList is a collection of cron jobs. */
export interface CronJobList {
  apiVersion?: string;
  items: CronJob[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.batch.v1.CronJobSpec */
/* CronJobSpec describes how the job execution will look like and when it will actually run. */
export interface CronJobSpec {
  concurrencyPolicy?: string;
  failedJobsHistoryLimit?: number;
  jobTemplate: JobTemplateSpec;
  schedule: string;
  startingDeadlineSeconds?: number;
  successfulJobsHistoryLimit?: number;
  suspend?: boolean;
}
/* io.k8s.api.batch.v1.CronJobStatus */
/* CronJobStatus represents the current state of a cron job. */
export interface CronJobStatus {
  active?: ObjectReference[];
  lastScheduleTime?: Time;
  lastSuccessfulTime?: Time;
}
/* io.k8s.api.batch.v1.Job */
/* Job represents the configuration of a single job. */
export interface Job {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: JobSpec;
  status?: JobStatus;
}
/* io.k8s.api.batch.v1.JobCondition */
/* JobCondition describes current state of a job. */
export interface JobCondition {
  lastProbeTime?: Time;
  lastTransitionTime?: Time;
  message?: string;
  reason?: string;
  status: string;
  type: string;
}
/* io.k8s.api.batch.v1.JobList */
/* JobList is a collection of jobs. */
export interface JobList {
  apiVersion?: string;
  items: Job[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.batch.v1.JobSpec */
/* JobSpec describes how the job execution will look like. */
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
/* io.k8s.api.batch.v1.JobStatus */
/* JobStatus represents the current state of a Job. */
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
/* io.k8s.api.batch.v1.JobTemplateSpec */
/* JobTemplateSpec describes the data a Job should have when created from a template */
export interface JobTemplateSpec {
  metadata?: ObjectMeta;
  spec?: JobSpec;
}
/* io.k8s.api.batch.v1.UncountedTerminatedPods */
/* UncountedTerminatedPods holds UIDs of Pods that have terminated but haven't been accounted in Job status counters. */
export interface UncountedTerminatedPods {
  failed?: string[];
  succeeded?: string[];
}
/* io.k8s.api.certificates.v1.CertificateSigningRequest */
/* CertificateSigningRequest objects provide a mechanism to obtain x509 certificates by submitting a certificate signing request, and having it asynchronously approved and issued.

Kubelets use this API to obtain:
 1. client certificates to authenticate to kube-apiserver (with the "kubernetes.io/kube-apiserver-client-kubelet" signerName).
 2. serving certificates for TLS endpoints kube-apiserver can connect to securely (with the "kubernetes.io/kubelet-serving" signerName).

This API can be used to request client certificates to authenticate to kube-apiserver (with the "kubernetes.io/kube-apiserver-client" signerName), or to obtain certificates from custom non-Kubernetes signers. */
export interface CertificateSigningRequest {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec: CertificateSigningRequestSpec;
  status?: CertificateSigningRequestStatus;
}
/* io.k8s.api.certificates.v1.CertificateSigningRequestCondition */
/* CertificateSigningRequestCondition describes a condition of a CertificateSigningRequest object */
export interface CertificateSigningRequestCondition {
  lastTransitionTime?: Time;
  lastUpdateTime?: Time;
  message?: string;
  reason?: string;
  status: string;
  type: string;
}
/* io.k8s.api.certificates.v1.CertificateSigningRequestList */
/* CertificateSigningRequestList is a collection of CertificateSigningRequest objects */
export interface CertificateSigningRequestList {
  apiVersion?: string;
  items: CertificateSigningRequest[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.certificates.v1.CertificateSigningRequestSpec */
/* CertificateSigningRequestSpec contains the certificate request. */
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
/* io.k8s.api.certificates.v1.CertificateSigningRequestStatus */
/* CertificateSigningRequestStatus contains conditions used to indicate approved/denied/failed status of the request, and the issued certificate. */
export interface CertificateSigningRequestStatus {
  certificate?: string;
  conditions?: CertificateSigningRequestCondition[];
}
/* io.k8s.api.coordination.v1.Lease */
/* Lease defines a lease concept. */
export interface Lease {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: LeaseSpec;
}
/* io.k8s.api.coordination.v1.LeaseList */
/* LeaseList is a list of Lease objects. */
export interface LeaseList {
  apiVersion?: string;
  items: Lease[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.coordination.v1.LeaseSpec */
/* LeaseSpec is a specification of a Lease. */
export interface LeaseSpec {
  acquireTime?: MicroTime;
  holderIdentity?: string;
  leaseDurationSeconds?: number;
  leaseTransitions?: number;
  renewTime?: MicroTime;
}
/* io.k8s.api.core.v1.AWSElasticBlockStoreVolumeSource */
/* Represents a Persistent Disk resource in AWS.

An AWS EBS disk must exist before mounting to a container. The disk must also be in the same AWS zone as the kubelet. An AWS EBS disk can only be mounted as read/write once. AWS EBS volumes support ownership management and SELinux relabeling. */
export interface AWSElasticBlockStoreVolumeSource {
  fsType?: string;
  partition?: number;
  readOnly?: boolean;
  volumeID: string;
}
/* io.k8s.api.core.v1.Affinity */
/* Affinity is a group of affinity scheduling rules. */
export interface Affinity {
  nodeAffinity?: NodeAffinity;
  podAffinity?: PodAffinity;
  podAntiAffinity?: PodAntiAffinity;
}
/* io.k8s.api.core.v1.AttachedVolume */
/* AttachedVolume describes a volume attached to a node */
export interface AttachedVolume {
  devicePath: string;
  name: string;
}
/* io.k8s.api.core.v1.AzureDiskVolumeSource */
/* AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod. */
export interface AzureDiskVolumeSource {
  cachingMode?: string;
  diskName: string;
  diskURI: string;
  fsType?: string;
  kind?: string;
  readOnly?: boolean;
}
/* io.k8s.api.core.v1.AzureFilePersistentVolumeSource */
/* AzureFile represents an Azure File Service mount on the host and bind mount to the pod. */
export interface AzureFilePersistentVolumeSource {
  readOnly?: boolean;
  secretName: string;
  secretNamespace?: string;
  shareName: string;
}
/* io.k8s.api.core.v1.AzureFileVolumeSource */
/* AzureFile represents an Azure File Service mount on the host and bind mount to the pod. */
export interface AzureFileVolumeSource {
  readOnly?: boolean;
  secretName: string;
  shareName: string;
}
/* io.k8s.api.core.v1.Binding */
/* Binding ties one object to another; for example, a pod is bound to a node by a scheduler. Deprecated in 1.7, please use the bindings subresource of pods instead. */
export interface Binding {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  target: ObjectReference;
}
/* io.k8s.api.core.v1.CSIPersistentVolumeSource */
/* Represents storage that is managed by an external CSI volume driver (Beta feature) */
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
/* io.k8s.api.core.v1.CSIVolumeSource */
/* Represents a source location of a volume to mount, managed by an external CSI driver */
export interface CSIVolumeSource {
  driver: string;
  fsType?: string;
  nodePublishSecretRef?: LocalObjectReference;
  readOnly?: boolean;
  volumeAttributes?: {
    [key: string]: unknown;
  };
}
/* io.k8s.api.core.v1.Capabilities */
/* Adds and removes POSIX capabilities from running containers. */
export interface Capabilities {
  add?: string[];
  drop?: string[];
}
/* io.k8s.api.core.v1.CephFSPersistentVolumeSource */
/* Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling. */
export interface CephFSPersistentVolumeSource {
  monitors: string[];
  path?: string;
  readOnly?: boolean;
  secretFile?: string;
  secretRef?: SecretReference;
  user?: string;
}
/* io.k8s.api.core.v1.CephFSVolumeSource */
/* Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling. */
export interface CephFSVolumeSource {
  monitors: string[];
  path?: string;
  readOnly?: boolean;
  secretFile?: string;
  secretRef?: LocalObjectReference;
  user?: string;
}
/* io.k8s.api.core.v1.CinderPersistentVolumeSource */
/* Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling. */
export interface CinderPersistentVolumeSource {
  fsType?: string;
  readOnly?: boolean;
  secretRef?: SecretReference;
  volumeID: string;
}
/* io.k8s.api.core.v1.CinderVolumeSource */
/* Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling. */
export interface CinderVolumeSource {
  fsType?: string;
  readOnly?: boolean;
  secretRef?: LocalObjectReference;
  volumeID: string;
}
/* io.k8s.api.core.v1.ClientIPConfig */
/* ClientIPConfig represents the configurations of Client IP based session affinity. */
export interface ClientIPConfig {
  timeoutSeconds?: number;
}
/* io.k8s.api.core.v1.ComponentCondition */
/* Information about the condition of a component. */
export interface ComponentCondition {
  error?: string;
  message?: string;
  status: string;
  type: string;
}
/* io.k8s.api.core.v1.ComponentStatus */
/* ComponentStatus (and ComponentStatusList) holds the cluster validation info. Deprecated: This API is deprecated in v1.19+ */
export interface ComponentStatus {
  apiVersion?: string;
  conditions?: ComponentCondition[];
  kind?: string;
  metadata?: ObjectMeta;
}
/* io.k8s.api.core.v1.ComponentStatusList */
/* Status of all the conditions for the component as a list of ComponentStatus objects. Deprecated: This API is deprecated in v1.19+ */
export interface ComponentStatusList {
  apiVersion?: string;
  items: ComponentStatus[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.core.v1.ConfigMap */
/* ConfigMap holds configuration data for pods to consume. */
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
/* io.k8s.api.core.v1.ConfigMapEnvSource */
/* ConfigMapEnvSource selects a ConfigMap to populate the environment variables with.

The contents of the target ConfigMap's Data field will represent the key-value pairs as environment variables. */
export interface ConfigMapEnvSource {
  name?: string;
  optional?: boolean;
}
/* io.k8s.api.core.v1.ConfigMapKeySelector */
/* Selects a key from a ConfigMap. */
export interface ConfigMapKeySelector {
  key: string;
  name?: string;
  optional?: boolean;
}
/* io.k8s.api.core.v1.ConfigMapList */
/* ConfigMapList is a resource containing a list of ConfigMap objects. */
export interface ConfigMapList {
  apiVersion?: string;
  items: ConfigMap[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.core.v1.ConfigMapNodeConfigSource */
/* ConfigMapNodeConfigSource contains the information to reference a ConfigMap as a config source for the Node. This API is deprecated since 1.22: https://git.k8s.io/enhancements/keps/sig-node/281-dynamic-kubelet-configuration */
export interface ConfigMapNodeConfigSource {
  kubeletConfigKey: string;
  name: string;
  namespace: string;
  resourceVersion?: string;
  uid?: string;
}
/* io.k8s.api.core.v1.ConfigMapProjection */
/* Adapts a ConfigMap into a projected volume.

The contents of the target ConfigMap's Data field will be presented in a projected volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. Note that this is identical to a configmap volume source without the default mode. */
export interface ConfigMapProjection {
  items?: KeyToPath[];
  name?: string;
  optional?: boolean;
}
/* io.k8s.api.core.v1.ConfigMapVolumeSource */
/* Adapts a ConfigMap into a volume.

The contents of the target ConfigMap's Data field will be presented in a volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. ConfigMap volumes support ownership management and SELinux relabeling. */
export interface ConfigMapVolumeSource {
  defaultMode?: number;
  items?: KeyToPath[];
  name?: string;
  optional?: boolean;
}
/* io.k8s.api.core.v1.Container */
/* A single application container that you want to run within a pod. */
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
/* io.k8s.api.core.v1.ContainerImage */
/* Describe a container image */
export interface ContainerImage {
  names?: string[];
  sizeBytes?: number;
}
/* io.k8s.api.core.v1.ContainerPort */
/* ContainerPort represents a network port in a single container. */
export interface ContainerPort {
  containerPort: number;
  hostIP?: string;
  hostPort?: number;
  name?: string;
  protocol?: string;
}
/* io.k8s.api.core.v1.ContainerState */
/* ContainerState holds a possible state of container. Only one of its members may be specified. If none of them is specified, the default one is ContainerStateWaiting. */
export interface ContainerState {
  running?: ContainerStateRunning;
  terminated?: ContainerStateTerminated;
  waiting?: ContainerStateWaiting;
}
/* io.k8s.api.core.v1.ContainerStateRunning */
/* ContainerStateRunning is a running state of a container. */
export interface ContainerStateRunning {
  startedAt?: Time;
}
/* io.k8s.api.core.v1.ContainerStateTerminated */
/* ContainerStateTerminated is a terminated state of a container. */
export interface ContainerStateTerminated {
  containerID?: string;
  exitCode: number;
  finishedAt?: Time;
  message?: string;
  reason?: string;
  signal?: number;
  startedAt?: Time;
}
/* io.k8s.api.core.v1.ContainerStateWaiting */
/* ContainerStateWaiting is a waiting state of a container. */
export interface ContainerStateWaiting {
  message?: string;
  reason?: string;
}
/* io.k8s.api.core.v1.ContainerStatus */
/* ContainerStatus contains details for the current status of this container. */
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
/* io.k8s.api.core.v1.DaemonEndpoint */
/* DaemonEndpoint contains information about a single Daemon endpoint. */
export interface DaemonEndpoint {
  Port: number;
}
/* io.k8s.api.core.v1.DownwardAPIProjection */
/* Represents downward API info for projecting into a projected volume. Note that this is identical to a downwardAPI volume source without the default mode. */
export interface DownwardAPIProjection {
  items?: DownwardAPIVolumeFile[];
}
/* io.k8s.api.core.v1.DownwardAPIVolumeFile */
/* DownwardAPIVolumeFile represents information to create the file containing the pod field */
export interface DownwardAPIVolumeFile {
  fieldRef?: ObjectFieldSelector;
  mode?: number;
  path: string;
  resourceFieldRef?: ResourceFieldSelector;
}
/* io.k8s.api.core.v1.DownwardAPIVolumeSource */
/* DownwardAPIVolumeSource represents a volume containing downward API info. Downward API volumes support ownership management and SELinux relabeling. */
export interface DownwardAPIVolumeSource {
  defaultMode?: number;
  items?: DownwardAPIVolumeFile[];
}
/* io.k8s.api.core.v1.EmptyDirVolumeSource */
/* Represents an empty directory for a pod. Empty directory volumes support ownership management and SELinux relabeling. */
export interface EmptyDirVolumeSource {
  medium?: string;
  sizeLimit?: Quantity;
}
/* io.k8s.api.core.v1.EndpointAddress */
/* EndpointAddress is a tuple that describes single IP address. */
export interface EndpointAddress {
  hostname?: string;
  ip: string;
  nodeName?: string;
  targetRef?: ObjectReference;
}
/* io.k8s.api.core.v1.EndpointPort */
/* EndpointPort is a tuple that describes a single port. */
export interface EndpointPort {
  appProtocol?: string;
  name?: string;
  port: number;
  protocol?: string;
}
/* io.k8s.api.core.v1.EndpointSubset */
/* EndpointSubset is a group of addresses with a common set of ports. The expanded set of endpoints is the Cartesian product of Addresses x Ports. For example, given:
  {
    Addresses: [{"ip": "10.10.1.1"}, {"ip": "10.10.2.2"}],
    Ports:     [{"name": "a", "port": 8675}, {"name": "b", "port": 309}]
  }
The resulting set of endpoints can be viewed as:
    a: [ 10.10.1.1:8675, 10.10.2.2:8675 ],
    b: [ 10.10.1.1:309, 10.10.2.2:309 ] */
export interface EndpointSubset {
  addresses?: EndpointAddress[];
  notReadyAddresses?: EndpointAddress[];
  ports?: EndpointPort[];
}
/* io.k8s.api.core.v1.Endpoints */
/* Endpoints is a collection of endpoints that implement the actual service. Example:
  Name: "mysvc",
  Subsets: [
    {
      Addresses: [{"ip": "10.10.1.1"}, {"ip": "10.10.2.2"}],
      Ports: [{"name": "a", "port": 8675}, {"name": "b", "port": 309}]
    },
    {
      Addresses: [{"ip": "10.10.3.3"}],
      Ports: [{"name": "a", "port": 93}, {"name": "b", "port": 76}]
    },
 ] */
export interface Endpoints {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  subsets?: EndpointSubset[];
}
/* io.k8s.api.core.v1.EndpointsList */
/* EndpointsList is a list of endpoints. */
export interface EndpointsList {
  apiVersion?: string;
  items: Endpoints[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.core.v1.EnvFromSource */
/* EnvFromSource represents the source of a set of ConfigMaps */
export interface EnvFromSource {
  configMapRef?: ConfigMapEnvSource;
  prefix?: string;
  secretRef?: SecretEnvSource;
}
/* io.k8s.api.core.v1.EnvVar */
/* EnvVar represents an environment variable present in a Container. */
export interface EnvVar {
  name: string;
  value?: string;
  valueFrom?: EnvVarSource;
}
/* io.k8s.api.core.v1.EnvVarSource */
/* EnvVarSource represents a source for the value of an EnvVar. */
export interface EnvVarSource {
  configMapKeyRef?: ConfigMapKeySelector;
  fieldRef?: ObjectFieldSelector;
  resourceFieldRef?: ResourceFieldSelector;
  secretKeyRef?: SecretKeySelector;
}
/* io.k8s.api.core.v1.EphemeralContainer */
/* An EphemeralContainer is a container that may be added temporarily to an existing pod for user-initiated activities such as debugging. Ephemeral containers have no resource or scheduling guarantees, and they will not be restarted when they exit or when a pod is removed or restarted. If an ephemeral container causes a pod to exceed its resource allocation, the pod may be evicted. Ephemeral containers may not be added by directly updating the pod spec. They must be added via the pod's ephemeralcontainers subresource, and they will appear in the pod spec once added. This is an alpha feature enabled by the EphemeralContainers feature flag. */
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
/* io.k8s.api.core.v1.EphemeralVolumeSource */
/* Represents an ephemeral volume that is handled by a normal storage driver. */
export interface EphemeralVolumeSource {
  volumeClaimTemplate?: PersistentVolumeClaimTemplate;
}
/* io.k8s.api.core.v1.Event */
/* Event is a report of an event somewhere in the cluster.  Events have a limited retention time and triggers and messages may evolve with time.  Event consumers should not rely on the timing of an event with a given Reason reflecting a consistent underlying trigger, or the continued existence of events with that Reason.  Events should be treated as informative, best-effort, supplemental data. */
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
/* io.k8s.api.core.v1.EventList */
/* EventList is a list of events. */
export interface EventList {
  apiVersion?: string;
  items: Event[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.core.v1.EventSeries */
/* EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time. */
export interface EventSeries {
  count?: number;
  lastObservedTime?: MicroTime;
}
/* io.k8s.api.core.v1.EventSource */
/* EventSource contains information for an event. */
export interface EventSource {
  component?: string;
  host?: string;
}
/* io.k8s.api.core.v1.ExecAction */
/* ExecAction describes a "run in container" action. */
export interface ExecAction {
  command?: string[];
}
/* io.k8s.api.core.v1.FCVolumeSource */
/* Represents a Fibre Channel volume. Fibre Channel volumes can only be mounted as read/write once. Fibre Channel volumes support ownership management and SELinux relabeling. */
export interface FCVolumeSource {
  fsType?: string;
  lun?: number;
  readOnly?: boolean;
  targetWWNs?: string[];
  wwids?: string[];
}
/* io.k8s.api.core.v1.FlexPersistentVolumeSource */
/* FlexPersistentVolumeSource represents a generic persistent volume resource that is provisioned/attached using an exec based plugin. */
export interface FlexPersistentVolumeSource {
  driver: string;
  fsType?: string;
  options?: {
    [key: string]: unknown;
  };
  readOnly?: boolean;
  secretRef?: SecretReference;
}
/* io.k8s.api.core.v1.FlexVolumeSource */
/* FlexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin. */
export interface FlexVolumeSource {
  driver: string;
  fsType?: string;
  options?: {
    [key: string]: unknown;
  };
  readOnly?: boolean;
  secretRef?: LocalObjectReference;
}
/* io.k8s.api.core.v1.FlockerVolumeSource */
/* Represents a Flocker volume mounted by the Flocker agent. One and only one of datasetName and datasetUUID should be set. Flocker volumes do not support ownership management or SELinux relabeling. */
export interface FlockerVolumeSource {
  datasetName?: string;
  datasetUUID?: string;
}
/* io.k8s.api.core.v1.GCEPersistentDiskVolumeSource */
/* Represents a Persistent Disk resource in Google Compute Engine.

A GCE PD must exist before mounting to a container. The disk must also be in the same GCE project and zone as the kubelet. A GCE PD can only be mounted as read/write once or read-only many times. GCE PDs support ownership management and SELinux relabeling. */
export interface GCEPersistentDiskVolumeSource {
  fsType?: string;
  partition?: number;
  pdName: string;
  readOnly?: boolean;
}
/* io.k8s.api.core.v1.GitRepoVolumeSource */
/* Represents a volume that is populated with the contents of a git repository. Git repo volumes do not support ownership management. Git repo volumes support SELinux relabeling.

DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container. */
export interface GitRepoVolumeSource {
  directory?: string;
  repository: string;
  revision?: string;
}
/* io.k8s.api.core.v1.GlusterfsPersistentVolumeSource */
/* Represents a Glusterfs mount that lasts the lifetime of a pod. Glusterfs volumes do not support ownership management or SELinux relabeling. */
export interface GlusterfsPersistentVolumeSource {
  endpoints: string;
  endpointsNamespace?: string;
  path: string;
  readOnly?: boolean;
}
/* io.k8s.api.core.v1.GlusterfsVolumeSource */
/* Represents a Glusterfs mount that lasts the lifetime of a pod. Glusterfs volumes do not support ownership management or SELinux relabeling. */
export interface GlusterfsVolumeSource {
  endpoints: string;
  path: string;
  readOnly?: boolean;
}
/* io.k8s.api.core.v1.HTTPGetAction */
/* HTTPGetAction describes an action based on HTTP Get requests. */
export interface HTTPGetAction {
  host?: string;
  httpHeaders?: HTTPHeader[];
  path?: string;
  port: IntOrString;
  scheme?: string;
}
/* io.k8s.api.core.v1.HTTPHeader */
/* HTTPHeader describes a custom header to be used in HTTP probes */
export interface HTTPHeader {
  name: string;
  value: string;
}
/* io.k8s.api.core.v1.Handler */
/* Handler defines a specific action that should be taken */
export interface Handler {
  exec?: ExecAction;
  httpGet?: HTTPGetAction;
  tcpSocket?: TCPSocketAction;
}
/* io.k8s.api.core.v1.HostAlias */
/* HostAlias holds the mapping between IP and hostnames that will be injected as an entry in the pod's hosts file. */
export interface HostAlias {
  hostnames?: string[];
  ip?: string;
}
/* io.k8s.api.core.v1.HostPathVolumeSource */
/* Represents a host path mapped into a pod. Host path volumes do not support ownership management or SELinux relabeling. */
export interface HostPathVolumeSource {
  path: string;
  type?: string;
}
/* io.k8s.api.core.v1.ISCSIPersistentVolumeSource */
/* ISCSIPersistentVolumeSource represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling. */
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
/* io.k8s.api.core.v1.ISCSIVolumeSource */
/* Represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling. */
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
/* io.k8s.api.core.v1.KeyToPath */
/* Maps a string key to a path within a volume. */
export interface KeyToPath {
  key: string;
  mode?: number;
  path: string;
}
/* io.k8s.api.core.v1.Lifecycle */
/* Lifecycle describes actions that the management system should take in response to container lifecycle events. For the PostStart and PreStop lifecycle handlers, management of the container blocks until the action is complete, unless the container process fails, in which case the handler is aborted. */
export interface Lifecycle {
  postStart?: Handler;
  preStop?: Handler;
}
/* io.k8s.api.core.v1.LimitRange */
/* LimitRange sets resource usage limits for each kind of resource in a Namespace. */
export interface LimitRange {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: LimitRangeSpec;
}
/* io.k8s.api.core.v1.LimitRangeItem */
/* LimitRangeItem defines a min/max usage limit for any resource that matches on kind. */
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
/* io.k8s.api.core.v1.LimitRangeList */
/* LimitRangeList is a list of LimitRange items. */
export interface LimitRangeList {
  apiVersion?: string;
  items: LimitRange[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.core.v1.LimitRangeSpec */
/* LimitRangeSpec defines a min/max usage limit for resources that match on kind. */
export interface LimitRangeSpec {
  limits: LimitRangeItem[];
}
/* io.k8s.api.core.v1.LoadBalancerIngress */
/* LoadBalancerIngress represents the status of a load-balancer ingress point: traffic intended for the service should be sent to an ingress point. */
export interface LoadBalancerIngress {
  hostname?: string;
  ip?: string;
  ports?: PortStatus[];
}
/* io.k8s.api.core.v1.LoadBalancerStatus */
/* LoadBalancerStatus represents the status of a load-balancer. */
export interface LoadBalancerStatus {
  ingress?: LoadBalancerIngress[];
}
/* io.k8s.api.core.v1.LocalObjectReference */
/* LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace. */
export interface LocalObjectReference {
  name?: string;
}
/* io.k8s.api.core.v1.LocalVolumeSource */
/* Local represents directly-attached storage with node affinity (Beta feature) */
export interface LocalVolumeSource {
  fsType?: string;
  path: string;
}
/* io.k8s.api.core.v1.NFSVolumeSource */
/* Represents an NFS mount that lasts the lifetime of a pod. NFS volumes do not support ownership management or SELinux relabeling. */
export interface NFSVolumeSource {
  path: string;
  readOnly?: boolean;
  server: string;
}
/* io.k8s.api.core.v1.Namespace */
/* Namespace provides a scope for Names. Use of multiple namespaces is optional. */
export interface Namespace {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: NamespaceSpec;
  status?: NamespaceStatus;
}
/* io.k8s.api.core.v1.NamespaceCondition */
/* NamespaceCondition contains details about state of namespace. */
export interface NamespaceCondition {
  lastTransitionTime?: Time;
  message?: string;
  reason?: string;
  status: string;
  type: string;
}
/* io.k8s.api.core.v1.NamespaceList */
/* NamespaceList is a list of Namespaces. */
export interface NamespaceList {
  apiVersion?: string;
  items: Namespace[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.core.v1.NamespaceSpec */
/* NamespaceSpec describes the attributes on a Namespace. */
export interface NamespaceSpec {
  finalizers?: string[];
}
/* io.k8s.api.core.v1.NamespaceStatus */
/* NamespaceStatus is information about the current status of a Namespace. */
export interface NamespaceStatus {
  conditions?: NamespaceCondition[];
  phase?: string;
}
/* io.k8s.api.core.v1.Node */
/* Node is a worker node in Kubernetes. Each node will have a unique identifier in the cache (i.e. in etcd). */
export interface Node {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: NodeSpec;
  status?: NodeStatus;
}
/* io.k8s.api.core.v1.NodeAddress */
/* NodeAddress contains information for the node's address. */
export interface NodeAddress {
  address: string;
  type: string;
}
/* io.k8s.api.core.v1.NodeAffinity */
/* Node affinity is a group of node affinity scheduling rules. */
export interface NodeAffinity {
  preferredDuringSchedulingIgnoredDuringExecution?: PreferredSchedulingTerm[];
  requiredDuringSchedulingIgnoredDuringExecution?: NodeSelector;
}
/* io.k8s.api.core.v1.NodeCondition */
/* NodeCondition contains condition information for a node. */
export interface NodeCondition {
  lastHeartbeatTime?: Time;
  lastTransitionTime?: Time;
  message?: string;
  reason?: string;
  status: string;
  type: string;
}
/* io.k8s.api.core.v1.NodeConfigSource */
/* NodeConfigSource specifies a source of node configuration. Exactly one subfield (excluding metadata) must be non-nil. This API is deprecated since 1.22 */
export interface NodeConfigSource {
  configMap?: ConfigMapNodeConfigSource;
}
/* io.k8s.api.core.v1.NodeConfigStatus */
/* NodeConfigStatus describes the status of the config assigned by Node.Spec.ConfigSource. */
export interface NodeConfigStatus {
  active?: NodeConfigSource;
  assigned?: NodeConfigSource;
  error?: string;
  lastKnownGood?: NodeConfigSource;
}
/* io.k8s.api.core.v1.NodeDaemonEndpoints */
/* NodeDaemonEndpoints lists ports opened by daemons running on the Node. */
export interface NodeDaemonEndpoints {
  kubeletEndpoint?: DaemonEndpoint;
}
/* io.k8s.api.core.v1.NodeList */
/* NodeList is the whole list of all Nodes which have been registered with master. */
export interface NodeList {
  apiVersion?: string;
  items: Node[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.core.v1.NodeSelector */
/* A node selector represents the union of the results of one or more label queries over a set of nodes; that is, it represents the OR of the selectors represented by the node selector terms. */
export interface NodeSelector {
  nodeSelectorTerms: NodeSelectorTerm[];
}
/* io.k8s.api.core.v1.NodeSelectorRequirement */
/* A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values. */
export interface NodeSelectorRequirement {
  key: string;
  operator: string;
  values?: string[];
}
/* io.k8s.api.core.v1.NodeSelectorTerm */
/* A null or empty node selector term matches no objects. The requirements of them are ANDed. The TopologySelectorTerm type implements a subset of the NodeSelectorTerm. */
export interface NodeSelectorTerm {
  matchExpressions?: NodeSelectorRequirement[];
  matchFields?: NodeSelectorRequirement[];
}
/* io.k8s.api.core.v1.NodeSpec */
/* NodeSpec describes the attributes that a node is created with. */
export interface NodeSpec {
  configSource?: NodeConfigSource;
  externalID?: string;
  podCIDR?: string;
  podCIDRs?: string[];
  providerID?: string;
  taints?: Taint[];
  unschedulable?: boolean;
}
/* io.k8s.api.core.v1.NodeStatus */
/* NodeStatus is information about the current status of a node. */
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
/* io.k8s.api.core.v1.NodeSystemInfo */
/* NodeSystemInfo is a set of ids/uuids to uniquely identify the node. */
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
/* io.k8s.api.core.v1.ObjectFieldSelector */
/* ObjectFieldSelector selects an APIVersioned field of an object. */
export interface ObjectFieldSelector {
  apiVersion?: string;
  fieldPath: string;
}
/* io.k8s.api.core.v1.ObjectReference */
/* ObjectReference contains enough information to let you inspect or modify the referred object. */
export interface ObjectReference {
  apiVersion?: string;
  fieldPath?: string;
  kind?: string;
  name?: string;
  namespace?: string;
  resourceVersion?: string;
  uid?: string;
}
/* io.k8s.api.core.v1.PersistentVolume */
/* PersistentVolume (PV) is a storage resource provisioned by an administrator. It is analogous to a node. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes */
export interface PersistentVolume {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: PersistentVolumeSpec;
  status?: PersistentVolumeStatus;
}
/* io.k8s.api.core.v1.PersistentVolumeClaim */
/* PersistentVolumeClaim is a user's request for and claim to a persistent volume */
export interface PersistentVolumeClaim {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: PersistentVolumeClaimSpec;
  status?: PersistentVolumeClaimStatus;
}
/* io.k8s.api.core.v1.PersistentVolumeClaimCondition */
/* PersistentVolumeClaimCondition contails details about state of pvc */
export interface PersistentVolumeClaimCondition {
  lastProbeTime?: Time;
  lastTransitionTime?: Time;
  message?: string;
  reason?: string;
  status: string;
  type: string;
}
/* io.k8s.api.core.v1.PersistentVolumeClaimList */
/* PersistentVolumeClaimList is a list of PersistentVolumeClaim items. */
export interface PersistentVolumeClaimList {
  apiVersion?: string;
  items: PersistentVolumeClaim[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.core.v1.PersistentVolumeClaimSpec */
/* PersistentVolumeClaimSpec describes the common attributes of storage devices and allows a Source for provider-specific attributes */
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
/* io.k8s.api.core.v1.PersistentVolumeClaimStatus */
/* PersistentVolumeClaimStatus is the current status of a persistent volume claim. */
export interface PersistentVolumeClaimStatus {
  accessModes?: string[];
  capacity?: {
    [key: string]: unknown;
  };
  conditions?: PersistentVolumeClaimCondition[];
  phase?: string;
}
/* io.k8s.api.core.v1.PersistentVolumeClaimTemplate */
/* PersistentVolumeClaimTemplate is used to produce PersistentVolumeClaim objects as part of an EphemeralVolumeSource. */
export interface PersistentVolumeClaimTemplate {
  metadata?: ObjectMeta;
  spec: PersistentVolumeClaimSpec;
}
/* io.k8s.api.core.v1.PersistentVolumeClaimVolumeSource */
/* PersistentVolumeClaimVolumeSource references the user's PVC in the same namespace. This volume finds the bound PV and mounts that volume for the pod. A PersistentVolumeClaimVolumeSource is, essentially, a wrapper around another type of volume that is owned by someone else (the system). */
export interface PersistentVolumeClaimVolumeSource {
  claimName: string;
  readOnly?: boolean;
}
/* io.k8s.api.core.v1.PersistentVolumeList */
/* PersistentVolumeList is a list of PersistentVolume items. */
export interface PersistentVolumeList {
  apiVersion?: string;
  items: PersistentVolume[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.core.v1.PersistentVolumeSpec */
/* PersistentVolumeSpec is the specification of a persistent volume. */
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
/* io.k8s.api.core.v1.PersistentVolumeStatus */
/* PersistentVolumeStatus is the current status of a persistent volume. */
export interface PersistentVolumeStatus {
  message?: string;
  phase?: string;
  reason?: string;
}
/* io.k8s.api.core.v1.PhotonPersistentDiskVolumeSource */
/* Represents a Photon Controller persistent disk resource. */
export interface PhotonPersistentDiskVolumeSource {
  fsType?: string;
  pdID: string;
}
/* io.k8s.api.core.v1.Pod */
/* Pod is a collection of containers that can run on a host. This resource is created by clients and scheduled onto hosts. */
export interface Pod {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: PodSpec;
  status?: PodStatus;
}
/* io.k8s.api.core.v1.PodAffinity */
/* Pod affinity is a group of inter pod affinity scheduling rules. */
export interface PodAffinity {
  preferredDuringSchedulingIgnoredDuringExecution?: WeightedPodAffinityTerm[];
  requiredDuringSchedulingIgnoredDuringExecution?: PodAffinityTerm[];
}
/* io.k8s.api.core.v1.PodAffinityTerm */
/* Defines a set of pods (namely those matching the labelSelector relative to the given namespace(s)) that this pod should be co-located (affinity) or not co-located (anti-affinity) with, where co-located is defined as running on a node whose value of the label with key <topologyKey> matches that of any node on which a pod of the set of pods is running */
export interface PodAffinityTerm {
  labelSelector?: LabelSelector;
  namespaceSelector?: LabelSelector;
  namespaces?: string[];
  topologyKey: string;
}
/* io.k8s.api.core.v1.PodAntiAffinity */
/* Pod anti affinity is a group of inter pod anti affinity scheduling rules. */
export interface PodAntiAffinity {
  preferredDuringSchedulingIgnoredDuringExecution?: WeightedPodAffinityTerm[];
  requiredDuringSchedulingIgnoredDuringExecution?: PodAffinityTerm[];
}
/* io.k8s.api.core.v1.PodCondition */
/* PodCondition contains details for the current condition of this pod. */
export interface PodCondition {
  lastProbeTime?: Time;
  lastTransitionTime?: Time;
  message?: string;
  reason?: string;
  status: string;
  type: string;
}
/* io.k8s.api.core.v1.PodDNSConfig */
/* PodDNSConfig defines the DNS parameters of a pod in addition to those generated from DNSPolicy. */
export interface PodDNSConfig {
  nameservers?: string[];
  options?: PodDNSConfigOption[];
  searches?: string[];
}
/* io.k8s.api.core.v1.PodDNSConfigOption */
/* PodDNSConfigOption defines DNS resolver options of a pod. */
export interface PodDNSConfigOption {
  name?: string;
  value?: string;
}
/* io.k8s.api.core.v1.PodIP */
/* IP address information for entries in the (plural) PodIPs field. Each entry includes:
   IP: An IP address allocated to the pod. Routable at least within the cluster. */
export interface PodIP {
  ip?: string;
}
/* io.k8s.api.core.v1.PodList */
/* PodList is a list of Pods. */
export interface PodList {
  apiVersion?: string;
  items: Pod[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.core.v1.PodReadinessGate */
/* PodReadinessGate contains the reference to a pod condition */
export interface PodReadinessGate {
  conditionType: string;
}
/* io.k8s.api.core.v1.PodSecurityContext */
/* PodSecurityContext holds pod-level security attributes and common container settings. Some fields are also present in container.securityContext.  Field values of container.securityContext take precedence over field values of PodSecurityContext. */
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
/* io.k8s.api.core.v1.PodSpec */
/* PodSpec is a description of a pod. */
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
/* io.k8s.api.core.v1.PodStatus */
/* PodStatus represents information about the status of a pod. Status may trail the actual state of a system, especially if the node that hosts the pod cannot contact the control plane. */
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
/* io.k8s.api.core.v1.PodTemplate */
/* PodTemplate describes a template for creating copies of a predefined pod. */
export interface PodTemplate {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  template?: PodTemplateSpec;
}
/* io.k8s.api.core.v1.PodTemplateList */
/* PodTemplateList is a list of PodTemplates. */
export interface PodTemplateList {
  apiVersion?: string;
  items: PodTemplate[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.core.v1.PodTemplateSpec */
/* PodTemplateSpec describes the data a pod should have when created from a template */
export interface PodTemplateSpec {
  metadata?: ObjectMeta;
  spec?: PodSpec;
}
export interface PortStatus {
  error?: string;
  port: number;
  protocol: string;
}
/* io.k8s.api.core.v1.PortworxVolumeSource */
/* PortworxVolumeSource represents a Portworx volume resource. */
export interface PortworxVolumeSource {
  fsType?: string;
  readOnly?: boolean;
  volumeID: string;
}
/* io.k8s.api.core.v1.PreferredSchedulingTerm */
/* An empty preferred scheduling term matches all objects with implicit weight 0 (i.e. it's a no-op). A null preferred scheduling term matches no objects (i.e. is also a no-op). */
export interface PreferredSchedulingTerm {
  preference: NodeSelectorTerm;
  weight: number;
}
/* io.k8s.api.core.v1.Probe */
/* Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. */
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
/* io.k8s.api.core.v1.ProjectedVolumeSource */
/* Represents a projected volume source */
export interface ProjectedVolumeSource {
  defaultMode?: number;
  sources?: VolumeProjection[];
}
/* io.k8s.api.core.v1.QuobyteVolumeSource */
/* Represents a Quobyte mount that lasts the lifetime of a pod. Quobyte volumes do not support ownership management or SELinux relabeling. */
export interface QuobyteVolumeSource {
  group?: string;
  readOnly?: boolean;
  registry: string;
  tenant?: string;
  user?: string;
  volume: string;
}
/* io.k8s.api.core.v1.RBDPersistentVolumeSource */
/* Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling. */
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
/* io.k8s.api.core.v1.RBDVolumeSource */
/* Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling. */
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
/* io.k8s.api.core.v1.ReplicationController */
/* ReplicationController represents the configuration of a replication controller. */
export interface ReplicationController {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: ReplicationControllerSpec;
  status?: ReplicationControllerStatus;
}
/* io.k8s.api.core.v1.ReplicationControllerCondition */
/* ReplicationControllerCondition describes the state of a replication controller at a certain point. */
export interface ReplicationControllerCondition {
  lastTransitionTime?: Time;
  message?: string;
  reason?: string;
  status: string;
  type: string;
}
/* io.k8s.api.core.v1.ReplicationControllerList */
/* ReplicationControllerList is a collection of replication controllers. */
export interface ReplicationControllerList {
  apiVersion?: string;
  items: ReplicationController[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.core.v1.ReplicationControllerSpec */
/* ReplicationControllerSpec is the specification of a replication controller. */
export interface ReplicationControllerSpec {
  minReadySeconds?: number;
  replicas?: number;
  selector?: {
    [key: string]: unknown;
  };
  template?: PodTemplateSpec;
}
/* io.k8s.api.core.v1.ReplicationControllerStatus */
/* ReplicationControllerStatus represents the current status of a replication controller. */
export interface ReplicationControllerStatus {
  availableReplicas?: number;
  conditions?: ReplicationControllerCondition[];
  fullyLabeledReplicas?: number;
  observedGeneration?: number;
  readyReplicas?: number;
  replicas: number;
}
/* io.k8s.api.core.v1.ResourceFieldSelector */
/* ResourceFieldSelector represents container resources (cpu, memory) and their output format */
export interface ResourceFieldSelector {
  containerName?: string;
  divisor?: Quantity;
  resource: string;
}
/* io.k8s.api.core.v1.ResourceQuota */
/* ResourceQuota sets aggregate quota restrictions enforced per namespace */
export interface ResourceQuota {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: ResourceQuotaSpec;
  status?: ResourceQuotaStatus;
}
/* io.k8s.api.core.v1.ResourceQuotaList */
/* ResourceQuotaList is a list of ResourceQuota items. */
export interface ResourceQuotaList {
  apiVersion?: string;
  items: ResourceQuota[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.core.v1.ResourceQuotaSpec */
/* ResourceQuotaSpec defines the desired hard limits to enforce for Quota. */
export interface ResourceQuotaSpec {
  hard?: {
    [key: string]: unknown;
  };
  scopeSelector?: ScopeSelector;
  scopes?: string[];
}
/* io.k8s.api.core.v1.ResourceQuotaStatus */
/* ResourceQuotaStatus defines the enforced hard limits and observed use. */
export interface ResourceQuotaStatus {
  hard?: {
    [key: string]: unknown;
  };
  used?: {
    [key: string]: unknown;
  };
}
/* io.k8s.api.core.v1.ResourceRequirements */
/* ResourceRequirements describes the compute resource requirements. */
export interface ResourceRequirements {
  limits?: {
    [key: string]: unknown;
  };
  requests?: {
    [key: string]: unknown;
  };
}
/* io.k8s.api.core.v1.SELinuxOptions */
/* SELinuxOptions are the labels to be applied to the container */
export interface SELinuxOptions {
  level?: string;
  role?: string;
  type?: string;
  user?: string;
}
/* io.k8s.api.core.v1.ScaleIOPersistentVolumeSource */
/* ScaleIOPersistentVolumeSource represents a persistent ScaleIO volume */
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
/* io.k8s.api.core.v1.ScaleIOVolumeSource */
/* ScaleIOVolumeSource represents a persistent ScaleIO volume */
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
/* io.k8s.api.core.v1.ScopeSelector */
/* A scope selector represents the AND of the selectors represented by the scoped-resource selector requirements. */
export interface ScopeSelector {
  matchExpressions?: ScopedResourceSelectorRequirement[];
}
/* io.k8s.api.core.v1.ScopedResourceSelectorRequirement */
/* A scoped-resource selector requirement is a selector that contains values, a scope name, and an operator that relates the scope name and values. */
export interface ScopedResourceSelectorRequirement {
  operator: string;
  scopeName: string;
  values?: string[];
}
/* io.k8s.api.core.v1.SeccompProfile */
/* SeccompProfile defines a pod/container's seccomp profile settings. Only one profile source may be set. */
export interface SeccompProfile {
  localhostProfile?: string;
  type: string;
}
/* io.k8s.api.core.v1.Secret */
/* Secret holds secret data of a certain type. The total bytes of the values in the Data field must be less than MaxSecretSize bytes. */
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
/* io.k8s.api.core.v1.SecretEnvSource */
/* SecretEnvSource selects a Secret to populate the environment variables with.

The contents of the target Secret's Data field will represent the key-value pairs as environment variables. */
export interface SecretEnvSource {
  name?: string;
  optional?: boolean;
}
/* io.k8s.api.core.v1.SecretKeySelector */
/* SecretKeySelector selects a key of a Secret. */
export interface SecretKeySelector {
  key: string;
  name?: string;
  optional?: boolean;
}
/* io.k8s.api.core.v1.SecretList */
/* SecretList is a list of Secret. */
export interface SecretList {
  apiVersion?: string;
  items: Secret[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.core.v1.SecretProjection */
/* Adapts a secret into a projected volume.

The contents of the target Secret's Data field will be presented in a projected volume as files using the keys in the Data field as the file names. Note that this is identical to a secret volume source without the default mode. */
export interface SecretProjection {
  items?: KeyToPath[];
  name?: string;
  optional?: boolean;
}
/* io.k8s.api.core.v1.SecretReference */
/* SecretReference represents a Secret Reference. It has enough information to retrieve secret in any namespace */
export interface SecretReference {
  name?: string;
  namespace?: string;
}
/* io.k8s.api.core.v1.SecretVolumeSource */
/* Adapts a Secret into a volume.

The contents of the target Secret's Data field will be presented in a volume as files using the keys in the Data field as the file names. Secret volumes support ownership management and SELinux relabeling. */
export interface SecretVolumeSource {
  defaultMode?: number;
  items?: KeyToPath[];
  optional?: boolean;
  secretName?: string;
}
/* io.k8s.api.core.v1.SecurityContext */
/* SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext.  When both are set, the values in SecurityContext take precedence. */
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
/* io.k8s.api.core.v1.Service */
/* Service is a named abstraction of software service (for example, mysql) consisting of local port (for example 3306) that the proxy listens on, and the selector that determines which pods will answer requests sent through the proxy. */
export interface Service {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: ServiceSpec;
  status?: ServiceStatus;
}
/* io.k8s.api.core.v1.ServiceAccount */
/* ServiceAccount binds together: * a name, understood by users, and perhaps by peripheral systems, for an identity * a principal that can be authenticated and authorized * a set of secrets */
export interface ServiceAccount {
  apiVersion?: string;
  automountServiceAccountToken?: boolean;
  imagePullSecrets?: LocalObjectReference[];
  kind?: string;
  metadata?: ObjectMeta;
  secrets?: ObjectReference[];
}
/* io.k8s.api.core.v1.ServiceAccountList */
/* ServiceAccountList is a list of ServiceAccount objects */
export interface ServiceAccountList {
  apiVersion?: string;
  items: ServiceAccount[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.core.v1.ServiceAccountTokenProjection */
/* ServiceAccountTokenProjection represents a projected service account token volume. This projection can be used to insert a service account token into the pods runtime filesystem for use against APIs (Kubernetes API Server or otherwise). */
export interface ServiceAccountTokenProjection {
  audience?: string;
  expirationSeconds?: number;
  path: string;
}
/* io.k8s.api.core.v1.ServiceList */
/* ServiceList holds a list of services. */
export interface ServiceList {
  apiVersion?: string;
  items: Service[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.core.v1.ServicePort */
/* ServicePort contains information on service's port. */
export interface ServicePort {
  appProtocol?: string;
  name?: string;
  nodePort?: number;
  port: number;
  protocol?: string;
  targetPort?: IntOrString;
}
/* io.k8s.api.core.v1.ServiceSpec */
/* ServiceSpec describes the attributes that a user creates on a service. */
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
/* io.k8s.api.core.v1.ServiceStatus */
/* ServiceStatus represents the current status of a service. */
export interface ServiceStatus {
  conditions?: Condition[];
  loadBalancer?: LoadBalancerStatus;
}
/* io.k8s.api.core.v1.SessionAffinityConfig */
/* SessionAffinityConfig represents the configurations of session affinity. */
export interface SessionAffinityConfig {
  clientIP?: ClientIPConfig;
}
/* io.k8s.api.core.v1.StorageOSPersistentVolumeSource */
/* Represents a StorageOS persistent volume resource. */
export interface StorageOSPersistentVolumeSource {
  fsType?: string;
  readOnly?: boolean;
  secretRef?: ObjectReference;
  volumeName?: string;
  volumeNamespace?: string;
}
/* io.k8s.api.core.v1.StorageOSVolumeSource */
/* Represents a StorageOS persistent volume resource. */
export interface StorageOSVolumeSource {
  fsType?: string;
  readOnly?: boolean;
  secretRef?: LocalObjectReference;
  volumeName?: string;
  volumeNamespace?: string;
}
/* io.k8s.api.core.v1.Sysctl */
/* Sysctl defines a kernel parameter to be set */
export interface Sysctl {
  name: string;
  value: string;
}
/* io.k8s.api.core.v1.TCPSocketAction */
/* TCPSocketAction describes an action based on opening a socket */
export interface TCPSocketAction {
  host?: string;
  port: IntOrString;
}
/* io.k8s.api.core.v1.Taint */
/* The node this Taint is attached to has the "effect" on any pod that does not tolerate the Taint. */
export interface Taint {
  effect: string;
  key: string;
  timeAdded?: Time;
  value?: string;
}
/* io.k8s.api.core.v1.Toleration */
/* The pod this Toleration is attached to tolerates any taint that matches the triple <key,value,effect> using the matching operator <operator>. */
export interface Toleration {
  effect?: string;
  key?: string;
  operator?: string;
  tolerationSeconds?: number;
  value?: string;
}
/* io.k8s.api.core.v1.TopologySelectorLabelRequirement */
/* A topology selector requirement is a selector that matches given label. This is an alpha feature and may change in the future. */
export interface TopologySelectorLabelRequirement {
  key: string;
  values: string[];
}
/* io.k8s.api.core.v1.TopologySelectorTerm */
/* A topology selector term represents the result of label queries. A null or empty topology selector term matches no objects. The requirements of them are ANDed. It provides a subset of functionality as NodeSelectorTerm. This is an alpha feature and may change in the future. */
export interface TopologySelectorTerm {
  matchLabelExpressions?: TopologySelectorLabelRequirement[];
}
/* io.k8s.api.core.v1.TopologySpreadConstraint */
/* TopologySpreadConstraint specifies how to spread matching pods among the given topology. */
export interface TopologySpreadConstraint {
  labelSelector?: LabelSelector;
  maxSkew: number;
  topologyKey: string;
  whenUnsatisfiable: string;
}
/* io.k8s.api.core.v1.TypedLocalObjectReference */
/* TypedLocalObjectReference contains enough information to let you locate the typed referenced object inside the same namespace. */
export interface TypedLocalObjectReference {
  apiGroup?: string;
  kind: string;
  name: string;
}
/* io.k8s.api.core.v1.Volume */
/* Volume represents a named volume in a pod that may be accessed by any container in the pod. */
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
/* io.k8s.api.core.v1.VolumeDevice */
/* volumeDevice describes a mapping of a raw block device within a container. */
export interface VolumeDevice {
  devicePath: string;
  name: string;
}
/* io.k8s.api.core.v1.VolumeMount */
/* VolumeMount describes a mounting of a Volume within a container. */
export interface VolumeMount {
  mountPath: string;
  mountPropagation?: string;
  name: string;
  readOnly?: boolean;
  subPath?: string;
  subPathExpr?: string;
}
/* io.k8s.api.core.v1.VolumeNodeAffinity */
/* VolumeNodeAffinity defines constraints that limit what nodes this volume can be accessed from. */
export interface VolumeNodeAffinity {
  required?: NodeSelector;
}
/* io.k8s.api.core.v1.VolumeProjection */
/* Projection that may be projected along with other supported volume types */
export interface VolumeProjection {
  configMap?: ConfigMapProjection;
  downwardAPI?: DownwardAPIProjection;
  secret?: SecretProjection;
  serviceAccountToken?: ServiceAccountTokenProjection;
}
/* io.k8s.api.core.v1.VsphereVirtualDiskVolumeSource */
/* Represents a vSphere volume resource. */
export interface VsphereVirtualDiskVolumeSource {
  fsType?: string;
  storagePolicyID?: string;
  storagePolicyName?: string;
  volumePath: string;
}
/* io.k8s.api.core.v1.WeightedPodAffinityTerm */
/* The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s) */
export interface WeightedPodAffinityTerm {
  podAffinityTerm: PodAffinityTerm;
  weight: number;
}
/* io.k8s.api.core.v1.WindowsSecurityContextOptions */
/* WindowsSecurityContextOptions contain Windows-specific options and credentials. */
export interface WindowsSecurityContextOptions {
  gmsaCredentialSpec?: string;
  gmsaCredentialSpecName?: string;
  hostProcess?: boolean;
  runAsUserName?: string;
}
/* io.k8s.api.discovery.v1.Endpoint */
/* Endpoint represents a single logical "backend" implementing a service. */
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
/* io.k8s.api.discovery.v1.EndpointConditions */
/* EndpointConditions represents the current condition of an endpoint. */
export interface EndpointConditions {
  ready?: boolean;
  serving?: boolean;
  terminating?: boolean;
}
/* io.k8s.api.discovery.v1.EndpointHints */
/* EndpointHints provides hints describing how an endpoint should be consumed. */
export interface EndpointHints {
  forZones?: ForZone[];
}
/* io.k8s.api.discovery.v1.EndpointPort */
/* EndpointPort represents a Port used by an EndpointSlice */
export interface DiscoveryEndpointPort {
  appProtocol?: string;
  name?: string;
  port?: number;
  protocol?: string;
}
/* io.k8s.api.discovery.v1.EndpointSlice */
/* EndpointSlice represents a subset of the endpoints that implement a service. For a given service there may be multiple EndpointSlice objects, selected by labels, which must be joined to produce the full set of endpoints. */
export interface EndpointSlice {
  addressType: string;
  apiVersion?: string;
  endpoints: Endpoint[];
  kind?: string;
  metadata?: ObjectMeta;
  ports?: DiscoveryEndpointPort[];
}
/* io.k8s.api.discovery.v1.EndpointSliceList */
/* EndpointSliceList represents a list of endpoint slices */
export interface EndpointSliceList {
  apiVersion?: string;
  items: EndpointSlice[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.discovery.v1.ForZone */
/* ForZone provides information about which zones should consume this endpoint. */
export interface ForZone {
  name: string;
}
/* io.k8s.api.events.v1.EventList */
/* EventList is a list of Event objects. */
export interface EventList {
  apiVersion?: string;
  items: Event[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.networking.v1.HTTPIngressPath */
/* HTTPIngressPath associates a path with a backend. Incoming urls matching the path are forwarded to the backend. */
export interface HTTPIngressPath {
  backend: IngressBackend;
  path?: string;
  pathType: string;
}
/* io.k8s.api.networking.v1.HTTPIngressRuleValue */
/* HTTPIngressRuleValue is a list of http selectors pointing to backends. In the example: http://<host>/<path>?<searchpart> -> backend where where parts of the url correspond to RFC 3986, this resource will be used to match against everything after the last '/' and before the first '?' or '#'. */
export interface HTTPIngressRuleValue {
  paths: HTTPIngressPath[];
}
/* io.k8s.api.networking.v1.IPBlock */
/* IPBlock describes a particular CIDR (Ex. "192.168.1.1/24","2001:db9::/64") that is allowed to the pods matched by a NetworkPolicySpec's podSelector. The except entry describes CIDRs that should not be included within this rule. */
export interface IPBlock {
  cidr: string;
  except?: string[];
}
/* io.k8s.api.networking.v1.Ingress */
/* Ingress is a collection of rules that allow inbound connections to reach the endpoints defined by a backend. An Ingress can be configured to give services externally-reachable urls, load balance traffic, terminate SSL, offer name based virtual hosting etc. */
export interface Ingress {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: IngressSpec;
  status?: IngressStatus;
}
/* io.k8s.api.networking.v1.IngressBackend */
/* IngressBackend describes all endpoints for a given service and port. */
export interface IngressBackend {
  resource?: TypedLocalObjectReference;
  service?: IngressServiceBackend;
}
/* io.k8s.api.networking.v1.IngressClass */
/* IngressClass represents the class of the Ingress, referenced by the Ingress Spec. The `ingressclass.kubernetes.io/is-default-class` annotation can be used to indicate that an IngressClass should be considered default. When a single IngressClass resource has this annotation set to true, new Ingress resources without a class specified will be assigned this default class. */
export interface IngressClass {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: IngressClassSpec;
}
/* io.k8s.api.networking.v1.IngressClassList */
/* IngressClassList is a collection of IngressClasses. */
export interface IngressClassList {
  apiVersion?: string;
  items: IngressClass[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.networking.v1.IngressClassParametersReference */
/* IngressClassParametersReference identifies an API object. This can be used to specify a cluster or namespace-scoped resource. */
export interface IngressClassParametersReference {
  apiGroup?: string;
  kind: string;
  name: string;
  namespace?: string;
  scope?: string;
}
/* io.k8s.api.networking.v1.IngressClassSpec */
/* IngressClassSpec provides information about the class of an Ingress. */
export interface IngressClassSpec {
  controller?: string;
  parameters?: IngressClassParametersReference;
}
/* io.k8s.api.networking.v1.IngressList */
/* IngressList is a collection of Ingress. */
export interface IngressList {
  apiVersion?: string;
  items: Ingress[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.networking.v1.IngressRule */
/* IngressRule represents the rules mapping the paths under a specified host to the related backend services. Incoming requests are first evaluated for a host match, then routed to the backend associated with the matching IngressRuleValue. */
export interface IngressRule {
  host?: string;
  http?: HTTPIngressRuleValue;
}
/* io.k8s.api.networking.v1.IngressServiceBackend */
/* IngressServiceBackend references a Kubernetes Service as a Backend. */
export interface IngressServiceBackend {
  name: string;
  port?: ServiceBackendPort;
}
/* io.k8s.api.networking.v1.IngressSpec */
/* IngressSpec describes the Ingress the user wishes to exist. */
export interface IngressSpec {
  defaultBackend?: IngressBackend;
  ingressClassName?: string;
  rules?: IngressRule[];
  tls?: IngressTLS[];
}
/* io.k8s.api.networking.v1.IngressStatus */
/* IngressStatus describe the current state of the Ingress. */
export interface IngressStatus {
  loadBalancer?: LoadBalancerStatus;
}
/* io.k8s.api.networking.v1.IngressTLS */
/* IngressTLS describes the transport layer security associated with an Ingress. */
export interface IngressTLS {
  hosts?: string[];
  secretName?: string;
}
/* io.k8s.api.networking.v1.NetworkPolicy */
/* NetworkPolicy describes what network traffic is allowed for a set of Pods */
export interface NetworkPolicy {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: NetworkPolicySpec;
}
/* io.k8s.api.networking.v1.NetworkPolicyEgressRule */
/* NetworkPolicyEgressRule describes a particular set of traffic that is allowed out of pods matched by a NetworkPolicySpec's podSelector. The traffic must match both ports and to. This type is beta-level in 1.8 */
export interface NetworkPolicyEgressRule {
  ports?: NetworkPolicyPort[];
  to?: NetworkPolicyPeer[];
}
/* io.k8s.api.networking.v1.NetworkPolicyIngressRule */
/* NetworkPolicyIngressRule describes a particular set of traffic that is allowed to the pods matched by a NetworkPolicySpec's podSelector. The traffic must match both ports and from. */
export interface NetworkPolicyIngressRule {
  from?: NetworkPolicyPeer[];
  ports?: NetworkPolicyPort[];
}
/* io.k8s.api.networking.v1.NetworkPolicyList */
/* NetworkPolicyList is a list of NetworkPolicy objects. */
export interface NetworkPolicyList {
  apiVersion?: string;
  items: NetworkPolicy[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.networking.v1.NetworkPolicyPeer */
/* NetworkPolicyPeer describes a peer to allow traffic to/from. Only certain combinations of fields are allowed */
export interface NetworkPolicyPeer {
  ipBlock?: IPBlock;
  namespaceSelector?: LabelSelector;
  podSelector?: LabelSelector;
}
/* io.k8s.api.networking.v1.NetworkPolicyPort */
/* NetworkPolicyPort describes a port to allow traffic on */
export interface NetworkPolicyPort {
  endPort?: number;
  port?: IntOrString;
  protocol?: string;
}
/* io.k8s.api.networking.v1.NetworkPolicySpec */
/* NetworkPolicySpec provides the specification of a NetworkPolicy */
export interface NetworkPolicySpec {
  egress?: NetworkPolicyEgressRule[];
  ingress?: NetworkPolicyIngressRule[];
  podSelector: LabelSelector;
  policyTypes?: string[];
}
/* io.k8s.api.networking.v1.ServiceBackendPort */
/* ServiceBackendPort is the service port being referenced. */
export interface ServiceBackendPort {
  name?: string;
  number?: number;
}
/* io.k8s.api.node.v1.Overhead */
/* Overhead structure represents the resource overhead associated with running a pod. */
export interface Overhead {
  podFixed?: {
    [key: string]: unknown;
  };
}
/* io.k8s.api.node.v1.RuntimeClass */
/* RuntimeClass defines a class of container runtime supported in the cluster. The RuntimeClass is used to determine which container runtime is used to run all containers in a pod. RuntimeClasses are manually defined by a user or cluster provisioner, and referenced in the PodSpec. The Kubelet is responsible for resolving the RuntimeClassName reference before running the pod.  For more details, see https://kubernetes.io/docs/concepts/containers/runtime-class/ */
export interface RuntimeClass {
  apiVersion?: string;
  handler: string;
  kind?: string;
  metadata?: ObjectMeta;
  overhead?: Overhead;
  scheduling?: Scheduling;
}
/* io.k8s.api.node.v1.RuntimeClassList */
/* RuntimeClassList is a list of RuntimeClass objects. */
export interface RuntimeClassList {
  apiVersion?: string;
  items: RuntimeClass[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.node.v1.Scheduling */
/* Scheduling specifies the scheduling constraints for nodes supporting a RuntimeClass. */
export interface Scheduling {
  nodeSelector?: {
    [key: string]: unknown;
  };
  tolerations?: Toleration[];
}
/* io.k8s.api.policy.v1.Eviction */
/* Eviction evicts a pod from its node subject to certain policies and safety constraints. This is a subresource of Pod.  A request to cause such an eviction is created by POSTing to .../pods/<pod name>/evictions. */
export interface Eviction {
  apiVersion?: string;
  deleteOptions?: DeleteOptions;
  kind?: string;
  metadata?: ObjectMeta;
}
/* io.k8s.api.policy.v1.PodDisruptionBudget */
/* PodDisruptionBudget is an object to define the max disruption that can be caused to a collection of pods */
export interface PodDisruptionBudget {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: PodDisruptionBudgetSpec;
  status?: PodDisruptionBudgetStatus;
}
/* io.k8s.api.policy.v1.PodDisruptionBudgetList */
/* PodDisruptionBudgetList is a collection of PodDisruptionBudgets. */
export interface PodDisruptionBudgetList {
  apiVersion?: string;
  items: PodDisruptionBudget[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.policy.v1.PodDisruptionBudgetSpec */
/* PodDisruptionBudgetSpec is a description of a PodDisruptionBudget. */
export interface PodDisruptionBudgetSpec {
  maxUnavailable?: IntOrString;
  minAvailable?: IntOrString;
  selector?: LabelSelector;
}
/* io.k8s.api.policy.v1.PodDisruptionBudgetStatus */
/* PodDisruptionBudgetStatus represents information about the status of a PodDisruptionBudget. Status may trail the actual state of a system. */
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
/* io.k8s.api.rbac.v1.AggregationRule */
/* AggregationRule describes how to locate ClusterRoles to aggregate into the ClusterRole */
export interface AggregationRule {
  clusterRoleSelectors?: LabelSelector[];
}
/* io.k8s.api.rbac.v1.ClusterRole */
/* ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding. */
export interface ClusterRole {
  aggregationRule?: AggregationRule;
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  rules?: PolicyRule[];
}
/* io.k8s.api.rbac.v1.ClusterRoleBinding */
/* ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject. */
export interface ClusterRoleBinding {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  roleRef: RoleRef;
  subjects?: Subject[];
}
/* io.k8s.api.rbac.v1.ClusterRoleBindingList */
/* ClusterRoleBindingList is a collection of ClusterRoleBindings */
export interface ClusterRoleBindingList {
  apiVersion?: string;
  items: ClusterRoleBinding[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.rbac.v1.ClusterRoleList */
/* ClusterRoleList is a collection of ClusterRoles */
export interface ClusterRoleList {
  apiVersion?: string;
  items: ClusterRole[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.rbac.v1.PolicyRule */
/* PolicyRule holds information that describes a policy rule, but does not contain information about who the rule applies to or which namespace the rule applies to. */
export interface PolicyRule {
  apiGroups?: string[];
  nonResourceURLs?: string[];
  resourceNames?: string[];
  resources?: string[];
  verbs: string[];
}
/* io.k8s.api.rbac.v1.Role */
/* Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding. */
export interface Role {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  rules?: PolicyRule[];
}
/* io.k8s.api.rbac.v1.RoleBinding */
/* RoleBinding references a role, but does not contain it.  It can reference a Role in the same namespace or a ClusterRole in the global namespace. It adds who information via Subjects and namespace information by which namespace it exists in.  RoleBindings in a given namespace only have effect in that namespace. */
export interface RoleBinding {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  roleRef: RoleRef;
  subjects?: Subject[];
}
/* io.k8s.api.rbac.v1.RoleBindingList */
/* RoleBindingList is a collection of RoleBindings */
export interface RoleBindingList {
  apiVersion?: string;
  items: RoleBinding[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.rbac.v1.RoleList */
/* RoleList is a collection of Roles */
export interface RoleList {
  apiVersion?: string;
  items: Role[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.rbac.v1.RoleRef */
/* RoleRef contains information that points to the role being used */
export interface RoleRef {
  apiGroup: string;
  kind: string;
  name: string;
}
/* io.k8s.api.rbac.v1.Subject */
/* Subject contains a reference to the object or user identities a role binding applies to.  This can either hold a direct API object reference, or a value for non-objects such as user and group names. */
export interface Subject {
  apiGroup?: string;
  kind: string;
  name: string;
  namespace?: string;
}
/* io.k8s.api.scheduling.v1.PriorityClass */
/* PriorityClass defines mapping from a priority class name to the priority integer value. The value can be any valid integer. */
export interface PriorityClass {
  apiVersion?: string;
  description?: string;
  globalDefault?: boolean;
  kind?: string;
  metadata?: ObjectMeta;
  preemptionPolicy?: string;
  value: number;
}
/* io.k8s.api.scheduling.v1.PriorityClassList */
/* PriorityClassList is a collection of priority classes. */
export interface PriorityClassList {
  apiVersion?: string;
  items: PriorityClass[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.storage.v1.CSIDriver */
/* CSIDriver captures information about a Container Storage Interface (CSI) volume driver deployed on the cluster. Kubernetes attach detach controller uses this object to determine whether attach is required. Kubelet uses this object to determine whether pod information needs to be passed on mount. CSIDriver objects are non-namespaced. */
export interface CSIDriver {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec: CSIDriverSpec;
}
/* io.k8s.api.storage.v1.CSIDriverList */
/* CSIDriverList is a collection of CSIDriver objects. */
export interface CSIDriverList {
  apiVersion?: string;
  items: CSIDriver[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.storage.v1.CSIDriverSpec */
/* CSIDriverSpec is the specification of a CSIDriver. */
export interface CSIDriverSpec {
  attachRequired?: boolean;
  fsGroupPolicy?: string;
  podInfoOnMount?: boolean;
  requiresRepublish?: boolean;
  storageCapacity?: boolean;
  tokenRequests?: TokenRequest[];
  volumeLifecycleModes?: string[];
}
/* io.k8s.api.storage.v1.CSINode */
/* CSINode holds information about all CSI drivers installed on a node. CSI drivers do not need to create the CSINode object directly. As long as they use the node-driver-registrar sidecar container, the kubelet will automatically populate the CSINode object for the CSI driver as part of kubelet plugin registration. CSINode has the same name as a node. If the object is missing, it means either there are no CSI Drivers available on the node, or the Kubelet version is low enough that it doesn't create this object. CSINode has an OwnerReference that points to the corresponding node object. */
export interface CSINode {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec: CSINodeSpec;
}
/* io.k8s.api.storage.v1.CSINodeDriver */
/* CSINodeDriver holds information about the specification of one CSI driver installed on a node */
export interface CSINodeDriver {
  allocatable?: VolumeNodeResources;
  name: string;
  nodeID: string;
  topologyKeys?: string[];
}
/* io.k8s.api.storage.v1.CSINodeList */
/* CSINodeList is a collection of CSINode objects. */
export interface CSINodeList {
  apiVersion?: string;
  items: CSINode[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.storage.v1.CSINodeSpec */
/* CSINodeSpec holds information about the specification of all CSI drivers installed on a node */
export interface CSINodeSpec {
  drivers: CSINodeDriver[];
}
/* io.k8s.api.storage.v1.StorageClass */
/* StorageClass describes the parameters for a class of storage for which PersistentVolumes can be dynamically provisioned.

StorageClasses are non-namespaced; the name of the storage class according to etcd is in ObjectMeta.Name. */
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
/* io.k8s.api.storage.v1.StorageClassList */
/* StorageClassList is a collection of storage classes. */
export interface StorageClassList {
  apiVersion?: string;
  items: StorageClass[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.storage.v1.TokenRequest */
/* TokenRequest contains parameters of a service account token. */
export interface TokenRequest {
  audience: string;
  expirationSeconds?: number;
}
/* io.k8s.api.storage.v1.VolumeAttachment */
/* VolumeAttachment captures the intent to attach or detach the specified volume to/from the specified node.

VolumeAttachment objects are non-namespaced. */
export interface VolumeAttachment {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec: VolumeAttachmentSpec;
  status?: VolumeAttachmentStatus;
}
/* io.k8s.api.storage.v1.VolumeAttachmentList */
/* VolumeAttachmentList is a collection of VolumeAttachment objects. */
export interface VolumeAttachmentList {
  apiVersion?: string;
  items: VolumeAttachment[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.storage.v1.VolumeAttachmentSource */
/* VolumeAttachmentSource represents a volume that should be attached. Right now only PersistenVolumes can be attached via external attacher, in future we may allow also inline volumes in pods. Exactly one member can be set. */
export interface VolumeAttachmentSource {
  inlineVolumeSpec?: PersistentVolumeSpec;
  persistentVolumeName?: string;
}
/* io.k8s.api.storage.v1.VolumeAttachmentSpec */
/* VolumeAttachmentSpec is the specification of a VolumeAttachment request. */
export interface VolumeAttachmentSpec {
  attacher: string;
  nodeName: string;
  source: VolumeAttachmentSource;
}
/* io.k8s.api.storage.v1.VolumeAttachmentStatus */
/* VolumeAttachmentStatus is the status of a VolumeAttachment request. */
export interface VolumeAttachmentStatus {
  attachError?: VolumeError;
  attached: boolean;
  attachmentMetadata?: {
    [key: string]: unknown;
  };
  detachError?: VolumeError;
}
/* io.k8s.api.storage.v1.VolumeError */
/* VolumeError captures an error encountered during a volume operation. */
export interface VolumeError {
  message?: string;
  time?: Time;
}
/* io.k8s.api.storage.v1.VolumeNodeResources */
/* VolumeNodeResources is a set of resource limits for scheduling of volumes. */
export interface VolumeNodeResources {
  count?: number;
}
/* io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceColumnDefinition */
/* CustomResourceColumnDefinition specifies a column for server side printing. */
export interface CustomResourceColumnDefinition {
  description?: string;
  format?: string;
  jsonPath: string;
  name: string;
  priority?: number;
  type: string;
}
/* io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceConversion */
/* CustomResourceConversion describes how to convert different versions of a CR. */
export interface CustomResourceConversion {
  strategy: string;
  webhook?: WebhookConversion;
}
/* io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition */
/* CustomResourceDefinition represents a resource that should be exposed on the API server.  Its name MUST be in the format <.spec.name>.<.spec.group>. */
export interface CustomResourceDefinition {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec: CustomResourceDefinitionSpec;
  status?: CustomResourceDefinitionStatus;
}
/* io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionCondition */
/* CustomResourceDefinitionCondition contains details for the current condition of this pod. */
export interface CustomResourceDefinitionCondition {
  lastTransitionTime?: Time;
  message?: string;
  reason?: string;
  status: string;
  type: string;
}
/* io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionList */
/* CustomResourceDefinitionList is a list of CustomResourceDefinition objects. */
export interface CustomResourceDefinitionList {
  apiVersion?: string;
  items: CustomResourceDefinition[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionNames */
/* CustomResourceDefinitionNames indicates the names to serve this CustomResourceDefinition */
export interface CustomResourceDefinitionNames {
  categories?: string[];
  kind: string;
  listKind?: string;
  plural: string;
  shortNames?: string[];
  singular?: string;
}
/* io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionSpec */
/* CustomResourceDefinitionSpec describes how a user wants their resource to appear */
export interface CustomResourceDefinitionSpec {
  conversion?: CustomResourceConversion;
  group: string;
  names: CustomResourceDefinitionNames;
  preserveUnknownFields?: boolean;
  scope: string;
  versions: CustomResourceDefinitionVersion[];
}
/* io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionStatus */
/* CustomResourceDefinitionStatus indicates the state of the CustomResourceDefinition */
export interface CustomResourceDefinitionStatus {
  acceptedNames?: CustomResourceDefinitionNames;
  conditions?: CustomResourceDefinitionCondition[];
  storedVersions?: string[];
}
/* io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionVersion */
/* CustomResourceDefinitionVersion describes a version for CRD. */
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
/* io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceSubresourceScale */
/* CustomResourceSubresourceScale defines how to serve the scale subresource for CustomResources. */
export interface CustomResourceSubresourceScale {
  labelSelectorPath?: string;
  specReplicasPath: string;
  statusReplicasPath: string;
}
/* io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceSubresourceStatus */
/* CustomResourceSubresourceStatus defines how to serve the status subresource for CustomResources. Status is represented by the `.status` JSON path inside of a CustomResource. When set, * exposes a /status subresource for the custom resource * PUT requests to the /status subresource take a custom resource object, and ignore changes to anything except the status stanza * PUT/POST/PATCH requests to the custom resource ignore changes to the status stanza */
export type CustomResourceSubresourceStatus = {
  [key: string]: unknown;
};
/* io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceSubresources */
/* CustomResourceSubresources defines the status and scale subresources for CustomResources. */
export interface CustomResourceSubresources {
  scale?: CustomResourceSubresourceScale;
  status?: CustomResourceSubresourceStatus;
}
/* io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceValidation */
/* CustomResourceValidation is a list of validation methods for CustomResources. */
export interface CustomResourceValidation {
  openAPIV3Schema?: JSONSchemaProps;
}
/* io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.ExternalDocumentation */
/* ExternalDocumentation allows referencing an external resource for extended documentation. */
export interface ExternalDocumentation {
  description?: string;
  url?: string;
}
/* io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSON */
/* JSON represents any valid JSON value. These types are supported: bool, int64, float64, string, []interface{}, map[string]interface{} and nil. */
export type JSON = any;
/* io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaProps */
/* JSONSchemaProps is a JSON-Schema following Specification Draft 4 (http://json-schema.org/). */
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
/* io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaPropsOrArray */
/* JSONSchemaPropsOrArray represents a value that can either be a JSONSchemaProps or an array of JSONSchemaProps. Mainly here for serialization purposes. */
export type JSONSchemaPropsOrArray = any;
/* io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaPropsOrBool */
/* JSONSchemaPropsOrBool represents JSONSchemaProps or a boolean value. Defaults to true for the boolean property. */
export type JSONSchemaPropsOrBool = any;
/* io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaPropsOrStringArray */
/* JSONSchemaPropsOrStringArray represents a JSONSchemaProps or a string array. */
export type JSONSchemaPropsOrStringArray = any;
/* io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.ServiceReference */
/* ServiceReference holds a reference to Service.legacy.k8s.io */
export interface ApiExtServiceReference {
  name: string;
  namespace: string;
  path?: string;
  port?: number;
}
/* io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.WebhookClientConfig */
/* WebhookClientConfig contains the information to make a TLS connection with the webhook. */
export interface ApiExtWebhookClientConfig {
  caBundle?: string;
  service?: ApiExtServiceReference;
  url?: string;
}
/* io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.WebhookConversion */
/* WebhookConversion describes how to call a conversion webhook */
export interface WebhookConversion {
  clientConfig?: ApiExtWebhookClientConfig;
  conversionReviewVersions: string[];
}
/* io.k8s.apimachinery.pkg.api.resource.Quantity */
/* Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors.

The serialization format is:

<quantity>        ::= <signedNumber><suffix>
  (Note that <suffix> may be empty, from the "" case in <decimalSI>.)
<digit>           ::= 0 | 1 | ... | 9 <digits>          ::= <digit> | <digit><digits> <number>          ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign>            ::= "+" | "-" <signedNumber>    ::= <number> | <sign><number> <suffix>          ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI>        ::= Ki | Mi | Gi | Ti | Pi | Ei
  (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html)
<decimalSI>       ::= m | "" | k | M | G | T | P | E
  (Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.)
<decimalExponent> ::= "e" <signedNumber> | "E" <signedNumber>

No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities.

When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized.

Before serializing, Quantity will be put in "canonical form". This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that:
  a. No precision is lost
  b. No fractional digits will be emitted
  c. The exponent (or suffix) is as large as possible.
The sign will be omitted unless the number is negative.

Examples:
  1.5 will be serialized as "1500m"
  1.5Gi will be serialized as "1536Mi"

Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise.

Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.)

This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation. */
export type Quantity = string;
/* io.k8s.apimachinery.pkg.apis.meta.v1.APIGroup */
/* APIGroup contains the name, the supported versions, and the preferred version of a group. */
export interface APIGroup {
  apiVersion?: string;
  kind?: string;
  name: string;
  preferredVersion?: GroupVersionForDiscovery;
  serverAddressByClientCIDRs?: ServerAddressByClientCIDR[];
  versions: GroupVersionForDiscovery[];
}
/* io.k8s.apimachinery.pkg.apis.meta.v1.APIGroupList */
/* APIGroupList is a list of APIGroup, to allow clients to discover the API at /apis. */
export interface APIGroupList {
  apiVersion?: string;
  groups: APIGroup[];
  kind?: string;
}
/* io.k8s.apimachinery.pkg.apis.meta.v1.APIResource */
/* APIResource specifies the name of a resource and whether it is namespaced. */
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
/* io.k8s.apimachinery.pkg.apis.meta.v1.APIResourceList */
/* APIResourceList is a list of APIResource, it is used to expose the name of the resources supported in a specific group and version, and if the resource is namespaced. */
export interface APIResourceList {
  apiVersion?: string;
  groupVersion: string;
  kind?: string;
  resources: APIResource[];
}
/* io.k8s.apimachinery.pkg.apis.meta.v1.APIVersions */
/* APIVersions lists the versions that are available, to allow clients to discover the API at /api, which is the root path of the legacy v1 API. */
export interface APIVersions {
  apiVersion?: string;
  kind?: string;
  serverAddressByClientCIDRs: ServerAddressByClientCIDR[];
  versions: string[];
}
/* io.k8s.apimachinery.pkg.apis.meta.v1.Condition */
/* Condition contains details for one aspect of the current state of this API Resource. */
export interface Condition {
  lastTransitionTime: Time;
  message: string;
  observedGeneration?: number;
  reason: string;
  status: string;
  type: string;
}
/* io.k8s.apimachinery.pkg.apis.meta.v1.DeleteOptions */
/* DeleteOptions may be provided when deleting an API object. */
export interface DeleteOptions {
  apiVersion?: string;
  dryRun?: string[];
  gracePeriodSeconds?: number;
  kind?: string;
  orphanDependents?: boolean;
  preconditions?: Preconditions;
  propagationPolicy?: string;
}
/* io.k8s.apimachinery.pkg.apis.meta.v1.FieldsV1 */
/* FieldsV1 stores a set of fields in a data structure like a Trie, in JSON format.

Each key is either a '.' representing the field itself, and will always map to an empty set, or a string representing a sub-field or item. The string will follow one of these four formats: 'f:<name>', where <name> is the name of a field in a struct, or key in a map 'v:<value>', where <value> is the exact json formatted value of a list item 'i:<index>', where <index> is position of a item in a list 'k:<keys>', where <keys> is a map of  a list item's key fields to their unique values If a key maps to an empty Fields value, the field that key represents is part of the set.

The exact format is defined in sigs.k8s.io/structured-merge-diff */
export type FieldsV1 = {
  [key: string]: unknown;
};
/* io.k8s.apimachinery.pkg.apis.meta.v1.GroupVersionForDiscovery */
/* GroupVersion contains the "group/version" and "version" string of a version. It is made a struct to keep extensibility. */
export interface GroupVersionForDiscovery {
  groupVersion: string;
  version: string;
}
/* io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector */
/* A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects. */
export interface LabelSelector {
  matchExpressions?: LabelSelectorRequirement[];
  matchLabels?: {
    [key: string]: unknown;
  };
}
/* io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement */
/* A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values. */
export interface LabelSelectorRequirement {
  key: string;
  operator: string;
  values?: string[];
}
/* io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta */
/* ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
export interface ListMeta {
  continue?: string;
  remainingItemCount?: number;
  resourceVersion?: string;
  selfLink?: string;
}
/* io.k8s.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry */
/* ManagedFieldsEntry is a workflow-id, a FieldSet and the group version of the resource that the fieldset applies to. */
export interface ManagedFieldsEntry {
  apiVersion?: string;
  fieldsType?: string;
  fieldsV1?: FieldsV1;
  manager?: string;
  operation?: string;
  subresource?: string;
  time?: Time;
}
/* io.k8s.apimachinery.pkg.apis.meta.v1.MicroTime */
/* MicroTime is version of Time with microsecond level precision. */
export type MicroTime = string;
/* io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta */
/* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
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
/* io.k8s.apimachinery.pkg.apis.meta.v1.OwnerReference */
/* OwnerReference contains enough information to let you identify an owning object. An owning object must be in the same namespace as the dependent, or be cluster-scoped, so there is no namespace field. */
export interface OwnerReference {
  apiVersion: string;
  blockOwnerDeletion?: boolean;
  controller?: boolean;
  kind: string;
  name: string;
  uid: string;
}
/* io.k8s.apimachinery.pkg.apis.meta.v1.Patch */
/* Patch is provided to give a concrete name and type to the Kubernetes PATCH request body. */
export type Patch = {
  [key: string]: unknown;
};
/* io.k8s.apimachinery.pkg.apis.meta.v1.Preconditions */
/* Preconditions must be fulfilled before an operation (update, delete, etc.) is carried out. */
export interface Preconditions {
  resourceVersion?: string;
  uid?: string;
}
/* io.k8s.apimachinery.pkg.apis.meta.v1.ServerAddressByClientCIDR */
/* ServerAddressByClientCIDR helps the client to determine the server address that they should use, depending on the clientCIDR that they match. */
export interface ServerAddressByClientCIDR {
  clientCIDR: string;
  serverAddress: string;
}
/* io.k8s.apimachinery.pkg.apis.meta.v1.Status */
/* Status is a return value for calls that don't return other objects. */
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
/* io.k8s.apimachinery.pkg.apis.meta.v1.StatusCause */
/* StatusCause provides more information about an api.Status failure, including cases when multiple errors are encountered. */
export interface StatusCause {
  field?: string;
  message?: string;
  reason?: string;
}
/* io.k8s.apimachinery.pkg.apis.meta.v1.StatusDetails */
/* StatusDetails is a set of additional properties that MAY be set by the server to provide additional information about a response. The Reason field of a Status object defines what attributes will be set. Clients must ignore fields that do not match the defined type of each attribute, and should assume that any attribute may be empty, invalid, or under defined. */
export interface StatusDetails {
  causes?: StatusCause[];
  group?: string;
  kind?: string;
  name?: string;
  retryAfterSeconds?: number;
  uid?: string;
}
/* io.k8s.apimachinery.pkg.apis.meta.v1.Time */
/* Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
export type Time = string;
/* io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent */
/* Event represents a single event to a watched resource. */
export interface WatchEvent {
  object: RawExtension;
  type: string;
}
/* io.k8s.apimachinery.pkg.runtime.RawExtension */
/* RawExtension is used to hold extensions in external versions.

To use this, make a field which has RawExtension as its type in your external, versioned struct, and Object in your internal struct. You also need to register your various plugin types.

// Internal package: type MyAPIObject struct {
	runtime.TypeMeta `json:",inline"`
	MyPlugin runtime.Object `json:"myPlugin"`
} type PluginA struct {
	AOption string `json:"aOption"`
}

// External package: type MyAPIObject struct {
	runtime.TypeMeta `json:",inline"`
	MyPlugin runtime.RawExtension `json:"myPlugin"`
} type PluginA struct {
	AOption string `json:"aOption"`
}

// On the wire, the JSON will look something like this: {
	"kind":"MyAPIObject",
	"apiVersion":"v1",
	"myPlugin": {
		"kind":"PluginA",
		"aOption":"foo",
	},
}

So what happens? Decode first uses json or yaml to unmarshal the serialized data into your external MyAPIObject. That causes the raw JSON to be stored, but not unpacked. The next step is to copy (using pkg/conversion) into the internal struct. The runtime package's DefaultScheme has conversion functions installed which will unpack the JSON stored in RawExtension, turning it into the correct object type, and storing it in the Object. (TODO: In the case where the object is of an unknown type, a runtime.Unknown object will be created and stored.) */
export type RawExtension = {
  [key: string]: unknown;
};
/* io.k8s.apimachinery.pkg.util.intstr.IntOrString */
/* IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number. */
export type IntOrString = string;
/* io.k8s.apimachinery.pkg.version.Info */
/* Info contains versioning information. how we'll want to distribute that information. */
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
/* io.k8s.kube-aggregator.pkg.apis.apiregistration.v1.APIService */
/* APIService represents a server for a particular GroupVersion. Name must be "version.group". */
export interface APIService {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: APIServiceSpec;
  status?: APIServiceStatus;
}
/* io.k8s.kube-aggregator.pkg.apis.apiregistration.v1.APIServiceCondition */
/* APIServiceCondition describes the state of an APIService at a particular point */
export interface APIServiceCondition {
  lastTransitionTime?: Time;
  message?: string;
  reason?: string;
  status: string;
  type: string;
}
/* io.k8s.kube-aggregator.pkg.apis.apiregistration.v1.APIServiceList */
/* APIServiceList is a list of APIService objects. */
export interface APIServiceList {
  apiVersion?: string;
  items: APIService[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.kube-aggregator.pkg.apis.apiregistration.v1.APIServiceSpec */
/* APIServiceSpec contains information for locating and communicating with a server. Only https is supported, though you are able to disable certificate verification. */
export interface APIServiceSpec {
  caBundle?: string;
  group?: string;
  groupPriorityMinimum: number;
  insecureSkipTLSVerify?: boolean;
  service?: ServiceReference;
  version?: string;
  versionPriority: number;
}
/* io.k8s.kube-aggregator.pkg.apis.apiregistration.v1.APIServiceStatus */
/* APIServiceStatus contains derived information about an API server */
export interface APIServiceStatus {
  conditions?: APIServiceCondition[];
}
/* io.k8s.kube-aggregator.pkg.apis.apiregistration.v1.ServiceReference */
/* ServiceReference holds a reference to Service.legacy.k8s.io */
export interface ServiceReference {
  name?: string;
  namespace?: string;
  port?: number;
}
export interface GetServiceAccountIssuerOpenIDConfigurationRequest {}
export interface GetCoreAPIVersionsRequest {}
export interface GetCoreV1APIResourcesRequest {}
export interface ListCoreV1ComponentStatusRequest {
  query: {
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
  };
}
export interface ReadCoreV1ComponentStatusRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
  };
}
export interface ListCoreV1ConfigMapForAllNamespacesRequest {
  query: {
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
  };
}
export interface ListCoreV1EndpointsForAllNamespacesRequest {
  query: {
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
  };
}
export interface ListCoreV1EventForAllNamespacesRequest {
  query: {
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
  };
}
export interface ListCoreV1LimitRangeForAllNamespacesRequest {
  query: {
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
  };
}
export interface ListCoreV1NamespaceRequest {
  query: {
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
  };
}
export interface CreateCoreV1NamespaceRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  body: Namespace;
}
export interface CreateCoreV1NamespacedBindingRequest {
  query: {
    dryRun?: string;
    fieldManager?: string;
    pretty?: string;
  };
  path: {
    namespace: string;
  };
  body: Binding;
}
export interface ListCoreV1NamespacedConfigMapRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface CreateCoreV1NamespacedConfigMapRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    namespace: string;
  };
  body: ConfigMap;
}
export interface DeleteCoreV1CollectionNamespacedConfigMapRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface ReadCoreV1NamespacedConfigMapRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ReplaceCoreV1NamespacedConfigMapRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: ConfigMap;
}
export interface DeleteCoreV1NamespacedConfigMapRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface PatchCoreV1NamespacedConfigMapRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Patch;
}
export interface ListCoreV1NamespacedEndpointsRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface CreateCoreV1NamespacedEndpointsRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    namespace: string;
  };
  body: Endpoints;
}
export interface DeleteCoreV1CollectionNamespacedEndpointsRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface ReadCoreV1NamespacedEndpointsRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ReplaceCoreV1NamespacedEndpointsRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Endpoints;
}
export interface DeleteCoreV1NamespacedEndpointsRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface PatchCoreV1NamespacedEndpointsRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Patch;
}
export interface ListCoreV1NamespacedEventRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface CreateCoreV1NamespacedEventRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    namespace: string;
  };
  body: Event;
}
export interface DeleteCoreV1CollectionNamespacedEventRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface ReadCoreV1NamespacedEventRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ReplaceCoreV1NamespacedEventRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Event;
}
export interface DeleteCoreV1NamespacedEventRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface PatchCoreV1NamespacedEventRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Patch;
}
export interface ListCoreV1NamespacedLimitRangeRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface CreateCoreV1NamespacedLimitRangeRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    namespace: string;
  };
  body: LimitRange;
}
export interface DeleteCoreV1CollectionNamespacedLimitRangeRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface ReadCoreV1NamespacedLimitRangeRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ReplaceCoreV1NamespacedLimitRangeRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: LimitRange;
}
export interface DeleteCoreV1NamespacedLimitRangeRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface PatchCoreV1NamespacedLimitRangeRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Patch;
}
export interface ListCoreV1NamespacedPersistentVolumeClaimRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface CreateCoreV1NamespacedPersistentVolumeClaimRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    namespace: string;
  };
  body: PersistentVolumeClaim;
}
export interface DeleteCoreV1CollectionNamespacedPersistentVolumeClaimRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface ReadCoreV1NamespacedPersistentVolumeClaimRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ReplaceCoreV1NamespacedPersistentVolumeClaimRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: PersistentVolumeClaim;
}
export interface DeleteCoreV1NamespacedPersistentVolumeClaimRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface PatchCoreV1NamespacedPersistentVolumeClaimRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Patch;
}
export interface ReadCoreV1NamespacedPersistentVolumeClaimStatusRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ReplaceCoreV1NamespacedPersistentVolumeClaimStatusRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: PersistentVolumeClaim;
}
export interface PatchCoreV1NamespacedPersistentVolumeClaimStatusRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Patch;
}
export interface ListCoreV1NamespacedPodRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface CreateCoreV1NamespacedPodRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    namespace: string;
  };
  body: Pod;
}
export interface DeleteCoreV1CollectionNamespacedPodRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface ReadCoreV1NamespacedPodRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ReplaceCoreV1NamespacedPodRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Pod;
}
export interface DeleteCoreV1NamespacedPodRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface PatchCoreV1NamespacedPodRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Patch;
}
export interface ConnectCoreV1GetNamespacedPodAttachRequest {
  query: {
    container?: string;
    stderr?: boolean;
    stdin?: boolean;
    stdout?: boolean;
    tty?: boolean;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ConnectCoreV1PostNamespacedPodAttachRequest {
  query: {
    container?: string;
    stderr?: boolean;
    stdin?: boolean;
    stdout?: boolean;
    tty?: boolean;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface CreateCoreV1NamespacedPodBindingRequest {
  query: {
    dryRun?: string;
    fieldManager?: string;
    pretty?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Binding;
}
export interface CreateCoreV1NamespacedPodEvictionRequest {
  query: {
    dryRun?: string;
    fieldManager?: string;
    pretty?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Eviction;
}
export interface ConnectCoreV1GetNamespacedPodExecRequest {
  query: {
    command?: string;
    container?: string;
    stderr?: boolean;
    stdin?: boolean;
    stdout?: boolean;
    tty?: boolean;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ConnectCoreV1PostNamespacedPodExecRequest {
  query: {
    command?: string;
    container?: string;
    stderr?: boolean;
    stdin?: boolean;
    stdout?: boolean;
    tty?: boolean;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ReadCoreV1NamespacedPodLogRequest {
  query: {
    container?: string;
    follow?: boolean;
    insecureSkipTLSVerifyBackend?: boolean;
    limitBytes?: number;
    pretty?: string;
    previous?: boolean;
    sinceSeconds?: number;
    tailLines?: number;
    timestamps?: boolean;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ConnectCoreV1GetNamespacedPodPortforwardRequest {
  query: {
    ports?: number;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ConnectCoreV1PostNamespacedPodPortforwardRequest {
  query: {
    ports?: number;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ConnectCoreV1GetNamespacedPodProxyRequest {
  query: {
    path?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ConnectCoreV1PostNamespacedPodProxyRequest {
  query: {
    path?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ConnectCoreV1PutNamespacedPodProxyRequest {
  query: {
    path?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ConnectCoreV1DeleteNamespacedPodProxyRequest {
  query: {
    path?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ConnectCoreV1PatchNamespacedPodProxyRequest {
  query: {
    path?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ConnectCoreV1GetNamespacedPodProxyWithPathRequest {
  query: {
    path?: string;
  };
  path: {
    name: string;
    namespace: string;
    path: string;
  };
}
export interface ConnectCoreV1PostNamespacedPodProxyWithPathRequest {
  query: {
    path?: string;
  };
  path: {
    name: string;
    namespace: string;
    path: string;
  };
}
export interface ConnectCoreV1PutNamespacedPodProxyWithPathRequest {
  query: {
    path?: string;
  };
  path: {
    name: string;
    namespace: string;
    path: string;
  };
}
export interface ConnectCoreV1DeleteNamespacedPodProxyWithPathRequest {
  query: {
    path?: string;
  };
  path: {
    name: string;
    namespace: string;
    path: string;
  };
}
export interface ConnectCoreV1PatchNamespacedPodProxyWithPathRequest {
  query: {
    path?: string;
  };
  path: {
    name: string;
    namespace: string;
    path: string;
  };
}
export interface ReadCoreV1NamespacedPodStatusRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ReplaceCoreV1NamespacedPodStatusRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Pod;
}
export interface PatchCoreV1NamespacedPodStatusRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Patch;
}
export interface ListCoreV1NamespacedPodTemplateRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface CreateCoreV1NamespacedPodTemplateRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    namespace: string;
  };
  body: PodTemplate;
}
export interface DeleteCoreV1CollectionNamespacedPodTemplateRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface ReadCoreV1NamespacedPodTemplateRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ReplaceCoreV1NamespacedPodTemplateRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: PodTemplate;
}
export interface DeleteCoreV1NamespacedPodTemplateRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface PatchCoreV1NamespacedPodTemplateRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Patch;
}
export interface ListCoreV1NamespacedReplicationControllerRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface CreateCoreV1NamespacedReplicationControllerRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    namespace: string;
  };
  body: ReplicationController;
}
export interface DeleteCoreV1CollectionNamespacedReplicationControllerRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface ReadCoreV1NamespacedReplicationControllerRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ReplaceCoreV1NamespacedReplicationControllerRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: ReplicationController;
}
export interface DeleteCoreV1NamespacedReplicationControllerRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface PatchCoreV1NamespacedReplicationControllerRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Patch;
}
export interface ReadCoreV1NamespacedReplicationControllerScaleRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ReplaceCoreV1NamespacedReplicationControllerScaleRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Scale;
}
export interface PatchCoreV1NamespacedReplicationControllerScaleRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Patch;
}
export interface ReadCoreV1NamespacedReplicationControllerStatusRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ReplaceCoreV1NamespacedReplicationControllerStatusRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: ReplicationController;
}
export interface PatchCoreV1NamespacedReplicationControllerStatusRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Patch;
}
export interface ListCoreV1NamespacedResourceQuotaRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface CreateCoreV1NamespacedResourceQuotaRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    namespace: string;
  };
  body: ResourceQuota;
}
export interface DeleteCoreV1CollectionNamespacedResourceQuotaRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface ReadCoreV1NamespacedResourceQuotaRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ReplaceCoreV1NamespacedResourceQuotaRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: ResourceQuota;
}
export interface DeleteCoreV1NamespacedResourceQuotaRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface PatchCoreV1NamespacedResourceQuotaRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Patch;
}
export interface ReadCoreV1NamespacedResourceQuotaStatusRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ReplaceCoreV1NamespacedResourceQuotaStatusRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: ResourceQuota;
}
export interface PatchCoreV1NamespacedResourceQuotaStatusRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Patch;
}
export interface ListCoreV1NamespacedSecretRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface CreateCoreV1NamespacedSecretRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    namespace: string;
  };
  body: Secret;
}
export interface DeleteCoreV1CollectionNamespacedSecretRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface ReadCoreV1NamespacedSecretRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ReplaceCoreV1NamespacedSecretRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Secret;
}
export interface DeleteCoreV1NamespacedSecretRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface PatchCoreV1NamespacedSecretRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Patch;
}
export interface ListCoreV1NamespacedServiceAccountRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface CreateCoreV1NamespacedServiceAccountRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    namespace: string;
  };
  body: ServiceAccount;
}
export interface DeleteCoreV1CollectionNamespacedServiceAccountRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface ReadCoreV1NamespacedServiceAccountRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ReplaceCoreV1NamespacedServiceAccountRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: ServiceAccount;
}
export interface DeleteCoreV1NamespacedServiceAccountRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface PatchCoreV1NamespacedServiceAccountRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Patch;
}
export interface CreateCoreV1NamespacedServiceAccountTokenRequest {
  query: {
    dryRun?: string;
    fieldManager?: string;
    pretty?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: TokenRequest;
}
export interface ListCoreV1NamespacedServiceRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface CreateCoreV1NamespacedServiceRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    namespace: string;
  };
  body: Service;
}
export interface ReadCoreV1NamespacedServiceRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ReplaceCoreV1NamespacedServiceRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Service;
}
export interface DeleteCoreV1NamespacedServiceRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface PatchCoreV1NamespacedServiceRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Patch;
}
export interface ConnectCoreV1GetNamespacedServiceProxyRequest {
  query: {
    path?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ConnectCoreV1PostNamespacedServiceProxyRequest {
  query: {
    path?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ConnectCoreV1PutNamespacedServiceProxyRequest {
  query: {
    path?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ConnectCoreV1DeleteNamespacedServiceProxyRequest {
  query: {
    path?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ConnectCoreV1PatchNamespacedServiceProxyRequest {
  query: {
    path?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ConnectCoreV1GetNamespacedServiceProxyWithPathRequest {
  query: {
    path?: string;
  };
  path: {
    name: string;
    namespace: string;
    path: string;
  };
}
export interface ConnectCoreV1PostNamespacedServiceProxyWithPathRequest {
  query: {
    path?: string;
  };
  path: {
    name: string;
    namespace: string;
    path: string;
  };
}
export interface ConnectCoreV1PutNamespacedServiceProxyWithPathRequest {
  query: {
    path?: string;
  };
  path: {
    name: string;
    namespace: string;
    path: string;
  };
}
export interface ConnectCoreV1DeleteNamespacedServiceProxyWithPathRequest {
  query: {
    path?: string;
  };
  path: {
    name: string;
    namespace: string;
    path: string;
  };
}
export interface ConnectCoreV1PatchNamespacedServiceProxyWithPathRequest {
  query: {
    path?: string;
  };
  path: {
    name: string;
    namespace: string;
    path: string;
  };
}
export interface ReadCoreV1NamespacedServiceStatusRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ReplaceCoreV1NamespacedServiceStatusRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Service;
}
export interface PatchCoreV1NamespacedServiceStatusRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Patch;
}
export interface ReadCoreV1NamespaceRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
  };
}
export interface ReplaceCoreV1NamespaceRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
  };
  body: Namespace;
}
export interface DeleteCoreV1NamespaceRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
  };
  path: {
    name: string;
  };
}
export interface PatchCoreV1NamespaceRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
  };
  body: Patch;
}
export interface ReplaceCoreV1NamespaceFinalizeRequest {
  query: {
    dryRun?: string;
    fieldManager?: string;
    pretty?: string;
  };
  path: {
    name: string;
  };
  body: Namespace;
}
export interface ReadCoreV1NamespaceStatusRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
  };
}
export interface ReplaceCoreV1NamespaceStatusRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
  };
  body: Namespace;
}
export interface PatchCoreV1NamespaceStatusRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
  };
  body: Patch;
}
export interface ListCoreV1NodeRequest {
  query: {
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
  };
}
export interface CreateCoreV1NodeRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  body: Node;
}
export interface DeleteCoreV1CollectionNodeRequest {
  query: {
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
  };
}
export interface ReadCoreV1NodeRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
  };
}
export interface ReplaceCoreV1NodeRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
  };
  body: Node;
}
export interface DeleteCoreV1NodeRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
  };
  path: {
    name: string;
  };
}
export interface PatchCoreV1NodeRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
  };
  body: Patch;
}
export interface ConnectCoreV1GetNodeProxyRequest {
  query: {
    path?: string;
  };
  path: {
    name: string;
  };
}
export interface ConnectCoreV1PostNodeProxyRequest {
  query: {
    path?: string;
  };
  path: {
    name: string;
  };
}
export interface ConnectCoreV1PutNodeProxyRequest {
  query: {
    path?: string;
  };
  path: {
    name: string;
  };
}
export interface ConnectCoreV1DeleteNodeProxyRequest {
  query: {
    path?: string;
  };
  path: {
    name: string;
  };
}
export interface ConnectCoreV1PatchNodeProxyRequest {
  query: {
    path?: string;
  };
  path: {
    name: string;
  };
}
export interface ConnectCoreV1GetNodeProxyWithPathRequest {
  query: {
    path?: string;
  };
  path: {
    name: string;
    path: string;
  };
}
export interface ConnectCoreV1PostNodeProxyWithPathRequest {
  query: {
    path?: string;
  };
  path: {
    name: string;
    path: string;
  };
}
export interface ConnectCoreV1PutNodeProxyWithPathRequest {
  query: {
    path?: string;
  };
  path: {
    name: string;
    path: string;
  };
}
export interface ConnectCoreV1DeleteNodeProxyWithPathRequest {
  query: {
    path?: string;
  };
  path: {
    name: string;
    path: string;
  };
}
export interface ConnectCoreV1PatchNodeProxyWithPathRequest {
  query: {
    path?: string;
  };
  path: {
    name: string;
    path: string;
  };
}
export interface ReadCoreV1NodeStatusRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
  };
}
export interface ReplaceCoreV1NodeStatusRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
  };
  body: Node;
}
export interface PatchCoreV1NodeStatusRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
  };
  body: Patch;
}
export interface ListCoreV1PersistentVolumeClaimForAllNamespacesRequest {
  query: {
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
  };
}
export interface ListCoreV1PersistentVolumeRequest {
  query: {
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
  };
}
export interface CreateCoreV1PersistentVolumeRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  body: PersistentVolume;
}
export interface DeleteCoreV1CollectionPersistentVolumeRequest {
  query: {
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
  };
}
export interface ReadCoreV1PersistentVolumeRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
  };
}
export interface ReplaceCoreV1PersistentVolumeRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
  };
  body: PersistentVolume;
}
export interface DeleteCoreV1PersistentVolumeRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
  };
  path: {
    name: string;
  };
}
export interface PatchCoreV1PersistentVolumeRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
  };
  body: Patch;
}
export interface ReadCoreV1PersistentVolumeStatusRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
  };
}
export interface ReplaceCoreV1PersistentVolumeStatusRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
  };
  body: PersistentVolume;
}
export interface PatchCoreV1PersistentVolumeStatusRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
  };
  body: Patch;
}
export interface ListCoreV1PodForAllNamespacesRequest {
  query: {
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
  };
}
export interface ListCoreV1PodTemplateForAllNamespacesRequest {
  query: {
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
  };
}
export interface ListCoreV1ReplicationControllerForAllNamespacesRequest {
  query: {
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
  };
}
export interface ListCoreV1ResourceQuotaForAllNamespacesRequest {
  query: {
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
  };
}
export interface ListCoreV1SecretForAllNamespacesRequest {
  query: {
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
  };
}
export interface ListCoreV1ServiceAccountForAllNamespacesRequest {
  query: {
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
  };
}
export interface ListCoreV1ServiceForAllNamespacesRequest {
  query: {
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
  };
}
export interface WatchCoreV1ConfigMapListForAllNamespacesRequest {
  query: {
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
  };
}
export interface WatchCoreV1EndpointsListForAllNamespacesRequest {
  query: {
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
  };
}
export interface WatchCoreV1EventListForAllNamespacesRequest {
  query: {
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
  };
}
export interface WatchCoreV1LimitRangeListForAllNamespacesRequest {
  query: {
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
  };
}
export interface WatchCoreV1NamespaceListRequest {
  query: {
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
  };
}
export interface WatchCoreV1NamespacedConfigMapListRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface WatchCoreV1NamespacedConfigMapRequest {
  query: {
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
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface WatchCoreV1NamespacedEndpointsListRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface WatchCoreV1NamespacedEndpointsRequest {
  query: {
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
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface WatchCoreV1NamespacedEventListRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface WatchCoreV1NamespacedEventRequest {
  query: {
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
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface WatchCoreV1NamespacedLimitRangeListRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface WatchCoreV1NamespacedLimitRangeRequest {
  query: {
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
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface WatchCoreV1NamespacedPersistentVolumeClaimListRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface WatchCoreV1NamespacedPersistentVolumeClaimRequest {
  query: {
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
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface WatchCoreV1NamespacedPodListRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface WatchCoreV1NamespacedPodRequest {
  query: {
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
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface WatchCoreV1NamespacedPodTemplateListRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface WatchCoreV1NamespacedPodTemplateRequest {
  query: {
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
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface WatchCoreV1NamespacedReplicationControllerListRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface WatchCoreV1NamespacedReplicationControllerRequest {
  query: {
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
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface WatchCoreV1NamespacedResourceQuotaListRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface WatchCoreV1NamespacedResourceQuotaRequest {
  query: {
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
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface WatchCoreV1NamespacedSecretListRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface WatchCoreV1NamespacedSecretRequest {
  query: {
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
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface WatchCoreV1NamespacedServiceAccountListRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface WatchCoreV1NamespacedServiceAccountRequest {
  query: {
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
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface WatchCoreV1NamespacedServiceListRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface WatchCoreV1NamespacedServiceRequest {
  query: {
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
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface WatchCoreV1NamespaceRequest {
  query: {
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
  };
  path: {
    name: string;
  };
}
export interface WatchCoreV1NodeListRequest {
  query: {
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
  };
}
export interface WatchCoreV1NodeRequest {
  query: {
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
  };
  path: {
    name: string;
  };
}
export interface WatchCoreV1PersistentVolumeClaimListForAllNamespacesRequest {
  query: {
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
  };
}
export interface WatchCoreV1PersistentVolumeListRequest {
  query: {
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
  };
}
export interface WatchCoreV1PersistentVolumeRequest {
  query: {
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
  };
  path: {
    name: string;
  };
}
export interface WatchCoreV1PodListForAllNamespacesRequest {
  query: {
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
  };
}
export interface WatchCoreV1PodTemplateListForAllNamespacesRequest {
  query: {
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
  };
}
export interface WatchCoreV1ReplicationControllerListForAllNamespacesRequest {
  query: {
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
  };
}
export interface WatchCoreV1ResourceQuotaListForAllNamespacesRequest {
  query: {
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
  };
}
export interface WatchCoreV1SecretListForAllNamespacesRequest {
  query: {
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
  };
}
export interface WatchCoreV1ServiceAccountListForAllNamespacesRequest {
  query: {
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
  };
}
export interface WatchCoreV1ServiceListForAllNamespacesRequest {
  query: {
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
  };
}
export interface GetAPIVersionsRequest {}
export interface GetAdmissionregistrationAPIGroupRequest {}
export interface GetAdmissionregistrationV1APIResourcesRequest {}
export interface ListAdmissionregistrationV1MutatingWebhookConfigurationRequest {
  query: {
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
  };
}
export interface CreateAdmissionregistrationV1MutatingWebhookConfigurationRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  body: MutatingWebhookConfiguration;
}
export interface DeleteAdmissionregistrationV1CollectionMutatingWebhookConfigurationRequest {
  query: {
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
  };
}
export interface ReadAdmissionregistrationV1MutatingWebhookConfigurationRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
  };
}
export interface ReplaceAdmissionregistrationV1MutatingWebhookConfigurationRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
  };
  body: MutatingWebhookConfiguration;
}
export interface DeleteAdmissionregistrationV1MutatingWebhookConfigurationRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
  };
  path: {
    name: string;
  };
}
export interface PatchAdmissionregistrationV1MutatingWebhookConfigurationRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
  };
  body: Patch;
}
export interface ListAdmissionregistrationV1ValidatingWebhookConfigurationRequest {
  query: {
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
  };
}
export interface CreateAdmissionregistrationV1ValidatingWebhookConfigurationRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  body: ValidatingWebhookConfiguration;
}
export interface DeleteAdmissionregistrationV1CollectionValidatingWebhookConfigurationRequest {
  query: {
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
  };
}
export interface ReadAdmissionregistrationV1ValidatingWebhookConfigurationRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
  };
}
export interface ReplaceAdmissionregistrationV1ValidatingWebhookConfigurationRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
  };
  body: ValidatingWebhookConfiguration;
}
export interface DeleteAdmissionregistrationV1ValidatingWebhookConfigurationRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
  };
  path: {
    name: string;
  };
}
export interface PatchAdmissionregistrationV1ValidatingWebhookConfigurationRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
  };
  body: Patch;
}
export interface WatchAdmissionregistrationV1MutatingWebhookConfigurationListRequest {
  query: {
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
  };
}
export interface WatchAdmissionregistrationV1MutatingWebhookConfigurationRequest {
  query: {
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
  };
  path: {
    name: string;
  };
}
export interface WatchAdmissionregistrationV1ValidatingWebhookConfigurationListRequest {
  query: {
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
  };
}
export interface WatchAdmissionregistrationV1ValidatingWebhookConfigurationRequest {
  query: {
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
  };
  path: {
    name: string;
  };
}
export interface GetApiextensionsAPIGroupRequest {}
export interface GetApiextensionsV1APIResourcesRequest {}
export interface ListApiextensionsV1CustomResourceDefinitionRequest {
  query: {
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
  };
}
export interface CreateApiextensionsV1CustomResourceDefinitionRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  body: CustomResourceDefinition;
}
export interface DeleteApiextensionsV1CollectionCustomResourceDefinitionRequest {
  query: {
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
  };
}
export interface ReadApiextensionsV1CustomResourceDefinitionRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
  };
}
export interface ReplaceApiextensionsV1CustomResourceDefinitionRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
  };
  body: CustomResourceDefinition;
}
export interface DeleteApiextensionsV1CustomResourceDefinitionRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
  };
  path: {
    name: string;
  };
}
export interface PatchApiextensionsV1CustomResourceDefinitionRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
  };
  body: Patch;
}
export interface ReadApiextensionsV1CustomResourceDefinitionStatusRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
  };
}
export interface ReplaceApiextensionsV1CustomResourceDefinitionStatusRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
  };
  body: CustomResourceDefinition;
}
export interface PatchApiextensionsV1CustomResourceDefinitionStatusRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
  };
  body: Patch;
}
export interface WatchApiextensionsV1CustomResourceDefinitionListRequest {
  query: {
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
  };
}
export interface WatchApiextensionsV1CustomResourceDefinitionRequest {
  query: {
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
  };
  path: {
    name: string;
  };
}
export interface GetApiregistrationAPIGroupRequest {}
export interface GetApiregistrationV1APIResourcesRequest {}
export interface ListApiregistrationV1APIServiceRequest {
  query: {
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
  };
}
export interface CreateApiregistrationV1APIServiceRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  body: APIService;
}
export interface DeleteApiregistrationV1CollectionAPIServiceRequest {
  query: {
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
  };
}
export interface ReadApiregistrationV1APIServiceRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
  };
}
export interface ReplaceApiregistrationV1APIServiceRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
  };
  body: APIService;
}
export interface DeleteApiregistrationV1APIServiceRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
  };
  path: {
    name: string;
  };
}
export interface PatchApiregistrationV1APIServiceRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
  };
  body: Patch;
}
export interface ReadApiregistrationV1APIServiceStatusRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
  };
}
export interface ReplaceApiregistrationV1APIServiceStatusRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
  };
  body: APIService;
}
export interface PatchApiregistrationV1APIServiceStatusRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
  };
  body: Patch;
}
export interface WatchApiregistrationV1APIServiceListRequest {
  query: {
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
  };
}
export interface WatchApiregistrationV1APIServiceRequest {
  query: {
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
  };
  path: {
    name: string;
  };
}
export interface GetAppsAPIGroupRequest {}
export interface GetAppsV1APIResourcesRequest {}
export interface ListAppsV1ControllerRevisionForAllNamespacesRequest {
  query: {
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
  };
}
export interface ListAppsV1DaemonSetForAllNamespacesRequest {
  query: {
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
  };
}
export interface ListAppsV1DeploymentForAllNamespacesRequest {
  query: {
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
  };
}
export interface ListAppsV1NamespacedControllerRevisionRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface CreateAppsV1NamespacedControllerRevisionRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    namespace: string;
  };
  body: ControllerRevision;
}
export interface DeleteAppsV1CollectionNamespacedControllerRevisionRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface ReadAppsV1NamespacedControllerRevisionRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ReplaceAppsV1NamespacedControllerRevisionRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: ControllerRevision;
}
export interface DeleteAppsV1NamespacedControllerRevisionRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface PatchAppsV1NamespacedControllerRevisionRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Patch;
}
export interface ListAppsV1NamespacedDaemonSetRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface CreateAppsV1NamespacedDaemonSetRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    namespace: string;
  };
  body: DaemonSet;
}
export interface DeleteAppsV1CollectionNamespacedDaemonSetRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface ReadAppsV1NamespacedDaemonSetRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ReplaceAppsV1NamespacedDaemonSetRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: DaemonSet;
}
export interface DeleteAppsV1NamespacedDaemonSetRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface PatchAppsV1NamespacedDaemonSetRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Patch;
}
export interface ReadAppsV1NamespacedDaemonSetStatusRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ReplaceAppsV1NamespacedDaemonSetStatusRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: DaemonSet;
}
export interface PatchAppsV1NamespacedDaemonSetStatusRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Patch;
}
export interface ListAppsV1NamespacedDeploymentRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface CreateAppsV1NamespacedDeploymentRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    namespace: string;
  };
  body: Deployment;
}
export interface DeleteAppsV1CollectionNamespacedDeploymentRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface ReadAppsV1NamespacedDeploymentRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ReplaceAppsV1NamespacedDeploymentRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Deployment;
}
export interface DeleteAppsV1NamespacedDeploymentRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface PatchAppsV1NamespacedDeploymentRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Patch;
}
export interface ReadAppsV1NamespacedDeploymentScaleRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ReplaceAppsV1NamespacedDeploymentScaleRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Scale;
}
export interface PatchAppsV1NamespacedDeploymentScaleRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Patch;
}
export interface ReadAppsV1NamespacedDeploymentStatusRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ReplaceAppsV1NamespacedDeploymentStatusRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Deployment;
}
export interface PatchAppsV1NamespacedDeploymentStatusRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Patch;
}
export interface ListAppsV1NamespacedReplicaSetRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface CreateAppsV1NamespacedReplicaSetRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    namespace: string;
  };
  body: ReplicaSet;
}
export interface DeleteAppsV1CollectionNamespacedReplicaSetRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface ReadAppsV1NamespacedReplicaSetRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ReplaceAppsV1NamespacedReplicaSetRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: ReplicaSet;
}
export interface DeleteAppsV1NamespacedReplicaSetRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface PatchAppsV1NamespacedReplicaSetRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Patch;
}
export interface ReadAppsV1NamespacedReplicaSetScaleRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ReplaceAppsV1NamespacedReplicaSetScaleRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Scale;
}
export interface PatchAppsV1NamespacedReplicaSetScaleRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Patch;
}
export interface ReadAppsV1NamespacedReplicaSetStatusRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ReplaceAppsV1NamespacedReplicaSetStatusRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: ReplicaSet;
}
export interface PatchAppsV1NamespacedReplicaSetStatusRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Patch;
}
export interface ListAppsV1NamespacedStatefulSetRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface CreateAppsV1NamespacedStatefulSetRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    namespace: string;
  };
  body: StatefulSet;
}
export interface DeleteAppsV1CollectionNamespacedStatefulSetRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface ReadAppsV1NamespacedStatefulSetRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ReplaceAppsV1NamespacedStatefulSetRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: StatefulSet;
}
export interface DeleteAppsV1NamespacedStatefulSetRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface PatchAppsV1NamespacedStatefulSetRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Patch;
}
export interface ReadAppsV1NamespacedStatefulSetScaleRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ReplaceAppsV1NamespacedStatefulSetScaleRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Scale;
}
export interface PatchAppsV1NamespacedStatefulSetScaleRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Patch;
}
export interface ReadAppsV1NamespacedStatefulSetStatusRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ReplaceAppsV1NamespacedStatefulSetStatusRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: StatefulSet;
}
export interface PatchAppsV1NamespacedStatefulSetStatusRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Patch;
}
export interface ListAppsV1ReplicaSetForAllNamespacesRequest {
  query: {
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
  };
}
export interface ListAppsV1StatefulSetForAllNamespacesRequest {
  query: {
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
  };
}
export interface WatchAppsV1ControllerRevisionListForAllNamespacesRequest {
  query: {
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
  };
}
export interface WatchAppsV1DaemonSetListForAllNamespacesRequest {
  query: {
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
  };
}
export interface WatchAppsV1DeploymentListForAllNamespacesRequest {
  query: {
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
  };
}
export interface WatchAppsV1NamespacedControllerRevisionListRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface WatchAppsV1NamespacedControllerRevisionRequest {
  query: {
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
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface WatchAppsV1NamespacedDaemonSetListRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface WatchAppsV1NamespacedDaemonSetRequest {
  query: {
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
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface WatchAppsV1NamespacedDeploymentListRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface WatchAppsV1NamespacedDeploymentRequest {
  query: {
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
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface WatchAppsV1NamespacedReplicaSetListRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface WatchAppsV1NamespacedReplicaSetRequest {
  query: {
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
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface WatchAppsV1NamespacedStatefulSetListRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface WatchAppsV1NamespacedStatefulSetRequest {
  query: {
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
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface WatchAppsV1ReplicaSetListForAllNamespacesRequest {
  query: {
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
  };
}
export interface WatchAppsV1StatefulSetListForAllNamespacesRequest {
  query: {
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
  };
}
export interface GetAuthenticationAPIGroupRequest {}
export interface GetAuthenticationV1APIResourcesRequest {}
export interface CreateAuthenticationV1TokenReviewRequest {
  query: {
    dryRun?: string;
    fieldManager?: string;
    pretty?: string;
  };
  body: TokenReview;
}
export interface GetAuthorizationAPIGroupRequest {}
export interface GetAuthorizationV1APIResourcesRequest {}
export interface CreateAuthorizationV1NamespacedLocalSubjectAccessReviewRequest {
  query: {
    dryRun?: string;
    fieldManager?: string;
    pretty?: string;
  };
  path: {
    namespace: string;
  };
  body: LocalSubjectAccessReview;
}
export interface CreateAuthorizationV1SelfSubjectAccessReviewRequest {
  query: {
    dryRun?: string;
    fieldManager?: string;
    pretty?: string;
  };
  body: SelfSubjectAccessReview;
}
export interface CreateAuthorizationV1SelfSubjectRulesReviewRequest {
  query: {
    dryRun?: string;
    fieldManager?: string;
    pretty?: string;
  };
  body: SelfSubjectRulesReview;
}
export interface CreateAuthorizationV1SubjectAccessReviewRequest {
  query: {
    dryRun?: string;
    fieldManager?: string;
    pretty?: string;
  };
  body: SubjectAccessReview;
}
export interface GetAutoscalingAPIGroupRequest {}
export interface GetAutoscalingV1APIResourcesRequest {}
export interface ListAutoscalingV1HorizontalPodAutoscalerForAllNamespacesRequest {
  query: {
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
  };
}
export interface ListAutoscalingV1NamespacedHorizontalPodAutoscalerRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface CreateAutoscalingV1NamespacedHorizontalPodAutoscalerRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    namespace: string;
  };
  body: HorizontalPodAutoscaler;
}
export interface DeleteAutoscalingV1CollectionNamespacedHorizontalPodAutoscalerRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface ReadAutoscalingV1NamespacedHorizontalPodAutoscalerRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ReplaceAutoscalingV1NamespacedHorizontalPodAutoscalerRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: HorizontalPodAutoscaler;
}
export interface DeleteAutoscalingV1NamespacedHorizontalPodAutoscalerRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface PatchAutoscalingV1NamespacedHorizontalPodAutoscalerRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Patch;
}
export interface ReadAutoscalingV1NamespacedHorizontalPodAutoscalerStatusRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ReplaceAutoscalingV1NamespacedHorizontalPodAutoscalerStatusRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: HorizontalPodAutoscaler;
}
export interface PatchAutoscalingV1NamespacedHorizontalPodAutoscalerStatusRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Patch;
}
export interface WatchAutoscalingV1HorizontalPodAutoscalerListForAllNamespacesRequest {
  query: {
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
  };
}
export interface WatchAutoscalingV1NamespacedHorizontalPodAutoscalerListRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface WatchAutoscalingV1NamespacedHorizontalPodAutoscalerRequest {
  query: {
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
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface GetAutoscalingV2beta2APIResourcesRequest {}
export interface ListAutoscalingV2beta2HorizontalPodAutoscalerForAllNamespacesRequest {
  query: {
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
  };
}
export interface ListAutoscalingV2beta2NamespacedHorizontalPodAutoscalerRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface CreateAutoscalingV2beta2NamespacedHorizontalPodAutoscalerRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    namespace: string;
  };
  body: HorizontalPodAutoscaler;
}
export interface DeleteAutoscalingV2beta2CollectionNamespacedHorizontalPodAutoscalerRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface ReadAutoscalingV2beta2NamespacedHorizontalPodAutoscalerRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ReplaceAutoscalingV2beta2NamespacedHorizontalPodAutoscalerRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: HorizontalPodAutoscaler;
}
export interface DeleteAutoscalingV2beta2NamespacedHorizontalPodAutoscalerRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface PatchAutoscalingV2beta2NamespacedHorizontalPodAutoscalerRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Patch;
}
export interface ReadAutoscalingV2beta2NamespacedHorizontalPodAutoscalerStatusRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ReplaceAutoscalingV2beta2NamespacedHorizontalPodAutoscalerStatusRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: HorizontalPodAutoscaler;
}
export interface PatchAutoscalingV2beta2NamespacedHorizontalPodAutoscalerStatusRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Patch;
}
export interface WatchAutoscalingV2beta2HorizontalPodAutoscalerListForAllNamespacesRequest {
  query: {
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
  };
}
export interface WatchAutoscalingV2beta2NamespacedHorizontalPodAutoscalerListRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface WatchAutoscalingV2beta2NamespacedHorizontalPodAutoscalerRequest {
  query: {
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
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface GetBatchAPIGroupRequest {}
export interface GetBatchV1APIResourcesRequest {}
export interface ListBatchV1CronJobForAllNamespacesRequest {
  query: {
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
  };
}
export interface ListBatchV1JobForAllNamespacesRequest {
  query: {
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
  };
}
export interface ListBatchV1NamespacedCronJobRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface CreateBatchV1NamespacedCronJobRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    namespace: string;
  };
  body: CronJob;
}
export interface DeleteBatchV1CollectionNamespacedCronJobRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface ReadBatchV1NamespacedCronJobRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ReplaceBatchV1NamespacedCronJobRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: CronJob;
}
export interface DeleteBatchV1NamespacedCronJobRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface PatchBatchV1NamespacedCronJobRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Patch;
}
export interface ReadBatchV1NamespacedCronJobStatusRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ReplaceBatchV1NamespacedCronJobStatusRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: CronJob;
}
export interface PatchBatchV1NamespacedCronJobStatusRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Patch;
}
export interface ListBatchV1NamespacedJobRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface CreateBatchV1NamespacedJobRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    namespace: string;
  };
  body: Job;
}
export interface DeleteBatchV1CollectionNamespacedJobRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface ReadBatchV1NamespacedJobRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ReplaceBatchV1NamespacedJobRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Job;
}
export interface DeleteBatchV1NamespacedJobRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface PatchBatchV1NamespacedJobRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Patch;
}
export interface ReadBatchV1NamespacedJobStatusRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ReplaceBatchV1NamespacedJobStatusRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Job;
}
export interface PatchBatchV1NamespacedJobStatusRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Patch;
}
export interface WatchBatchV1CronJobListForAllNamespacesRequest {
  query: {
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
  };
}
export interface WatchBatchV1JobListForAllNamespacesRequest {
  query: {
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
  };
}
export interface WatchBatchV1NamespacedCronJobListRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface WatchBatchV1NamespacedCronJobRequest {
  query: {
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
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface WatchBatchV1NamespacedJobListRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface WatchBatchV1NamespacedJobRequest {
  query: {
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
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface GetCertificatesAPIGroupRequest {}
export interface GetCertificatesV1APIResourcesRequest {}
export interface ListCertificatesV1CertificateSigningRequestRequest {
  query: {
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
  };
}
export interface CreateCertificatesV1CertificateSigningRequestRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  body: CertificateSigningRequest;
}
export interface DeleteCertificatesV1CollectionCertificateSigningRequestRequest {
  query: {
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
  };
}
export interface ReadCertificatesV1CertificateSigningRequestRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
  };
}
export interface ReplaceCertificatesV1CertificateSigningRequestRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
  };
  body: CertificateSigningRequest;
}
export interface DeleteCertificatesV1CertificateSigningRequestRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
  };
  path: {
    name: string;
  };
}
export interface PatchCertificatesV1CertificateSigningRequestRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
  };
  body: Patch;
}
export interface ReadCertificatesV1CertificateSigningRequestApprovalRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
  };
}
export interface ReplaceCertificatesV1CertificateSigningRequestApprovalRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
  };
  body: CertificateSigningRequest;
}
export interface PatchCertificatesV1CertificateSigningRequestApprovalRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
  };
  body: Patch;
}
export interface ReadCertificatesV1CertificateSigningRequestStatusRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
  };
}
export interface ReplaceCertificatesV1CertificateSigningRequestStatusRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
  };
  body: CertificateSigningRequest;
}
export interface PatchCertificatesV1CertificateSigningRequestStatusRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
  };
  body: Patch;
}
export interface WatchCertificatesV1CertificateSigningRequestListRequest {
  query: {
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
  };
}
export interface WatchCertificatesV1CertificateSigningRequestRequest {
  query: {
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
  };
  path: {
    name: string;
  };
}
export interface GetCoordinationAPIGroupRequest {}
export interface GetCoordinationV1APIResourcesRequest {}
export interface ListCoordinationV1LeaseForAllNamespacesRequest {
  query: {
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
  };
}
export interface ListCoordinationV1NamespacedLeaseRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface CreateCoordinationV1NamespacedLeaseRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    namespace: string;
  };
  body: Lease;
}
export interface DeleteCoordinationV1CollectionNamespacedLeaseRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface ReadCoordinationV1NamespacedLeaseRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ReplaceCoordinationV1NamespacedLeaseRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Lease;
}
export interface DeleteCoordinationV1NamespacedLeaseRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface PatchCoordinationV1NamespacedLeaseRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Patch;
}
export interface WatchCoordinationV1LeaseListForAllNamespacesRequest {
  query: {
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
  };
}
export interface WatchCoordinationV1NamespacedLeaseListRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface WatchCoordinationV1NamespacedLeaseRequest {
  query: {
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
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface GetDiscoveryAPIGroupRequest {}
export interface GetDiscoveryV1APIResourcesRequest {}
export interface ListDiscoveryV1EndpointSliceForAllNamespacesRequest {
  query: {
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
  };
}
export interface ListDiscoveryV1NamespacedEndpointSliceRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface CreateDiscoveryV1NamespacedEndpointSliceRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    namespace: string;
  };
  body: EndpointSlice;
}
export interface DeleteDiscoveryV1CollectionNamespacedEndpointSliceRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface ReadDiscoveryV1NamespacedEndpointSliceRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ReplaceDiscoveryV1NamespacedEndpointSliceRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: EndpointSlice;
}
export interface DeleteDiscoveryV1NamespacedEndpointSliceRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface PatchDiscoveryV1NamespacedEndpointSliceRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Patch;
}
export interface WatchDiscoveryV1EndpointSliceListForAllNamespacesRequest {
  query: {
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
  };
}
export interface WatchDiscoveryV1NamespacedEndpointSliceListRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface WatchDiscoveryV1NamespacedEndpointSliceRequest {
  query: {
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
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface GetEventsAPIGroupRequest {}
export interface GetEventsV1APIResourcesRequest {}
export interface ListEventsV1EventForAllNamespacesRequest {
  query: {
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
  };
}
export interface ListEventsV1NamespacedEventRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface CreateEventsV1NamespacedEventRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    namespace: string;
  };
  body: Event;
}
export interface DeleteEventsV1CollectionNamespacedEventRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface ReadEventsV1NamespacedEventRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ReplaceEventsV1NamespacedEventRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Event;
}
export interface DeleteEventsV1NamespacedEventRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface PatchEventsV1NamespacedEventRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Patch;
}
export interface WatchEventsV1EventListForAllNamespacesRequest {
  query: {
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
  };
}
export interface WatchEventsV1NamespacedEventListRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface WatchEventsV1NamespacedEventRequest {
  query: {
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
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface GetFlowcontrolApiserverAPIGroupRequest {}
export interface GetNetworkingAPIGroupRequest {}
export interface GetNetworkingV1APIResourcesRequest {}
export interface ListNetworkingV1IngressClassRequest {
  query: {
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
  };
}
export interface CreateNetworkingV1IngressClassRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  body: IngressClass;
}
export interface DeleteNetworkingV1CollectionIngressClassRequest {
  query: {
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
  };
}
export interface ReadNetworkingV1IngressClassRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
  };
}
export interface ReplaceNetworkingV1IngressClassRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
  };
  body: IngressClass;
}
export interface DeleteNetworkingV1IngressClassRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
  };
  path: {
    name: string;
  };
}
export interface PatchNetworkingV1IngressClassRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
  };
  body: Patch;
}
export interface ListNetworkingV1IngressForAllNamespacesRequest {
  query: {
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
  };
}
export interface ListNetworkingV1NamespacedIngressRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface CreateNetworkingV1NamespacedIngressRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    namespace: string;
  };
  body: Ingress;
}
export interface DeleteNetworkingV1CollectionNamespacedIngressRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface ReadNetworkingV1NamespacedIngressRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ReplaceNetworkingV1NamespacedIngressRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Ingress;
}
export interface DeleteNetworkingV1NamespacedIngressRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface PatchNetworkingV1NamespacedIngressRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Patch;
}
export interface ReadNetworkingV1NamespacedIngressStatusRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ReplaceNetworkingV1NamespacedIngressStatusRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Ingress;
}
export interface PatchNetworkingV1NamespacedIngressStatusRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Patch;
}
export interface ListNetworkingV1NamespacedNetworkPolicyRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface CreateNetworkingV1NamespacedNetworkPolicyRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    namespace: string;
  };
  body: NetworkPolicy;
}
export interface DeleteNetworkingV1CollectionNamespacedNetworkPolicyRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface ReadNetworkingV1NamespacedNetworkPolicyRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ReplaceNetworkingV1NamespacedNetworkPolicyRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: NetworkPolicy;
}
export interface DeleteNetworkingV1NamespacedNetworkPolicyRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface PatchNetworkingV1NamespacedNetworkPolicyRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Patch;
}
export interface ListNetworkingV1NetworkPolicyForAllNamespacesRequest {
  query: {
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
  };
}
export interface WatchNetworkingV1IngressClassListRequest {
  query: {
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
  };
}
export interface WatchNetworkingV1IngressClassRequest {
  query: {
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
  };
  path: {
    name: string;
  };
}
export interface WatchNetworkingV1IngressListForAllNamespacesRequest {
  query: {
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
  };
}
export interface WatchNetworkingV1NamespacedIngressListRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface WatchNetworkingV1NamespacedIngressRequest {
  query: {
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
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface WatchNetworkingV1NamespacedNetworkPolicyListRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface WatchNetworkingV1NamespacedNetworkPolicyRequest {
  query: {
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
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface WatchNetworkingV1NetworkPolicyListForAllNamespacesRequest {
  query: {
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
  };
}
export interface GetNodeAPIGroupRequest {}
export interface GetNodeV1APIResourcesRequest {}
export interface ListNodeV1RuntimeClassRequest {
  query: {
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
  };
}
export interface CreateNodeV1RuntimeClassRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  body: RuntimeClass;
}
export interface DeleteNodeV1CollectionRuntimeClassRequest {
  query: {
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
  };
}
export interface ReadNodeV1RuntimeClassRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
  };
}
export interface ReplaceNodeV1RuntimeClassRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
  };
  body: RuntimeClass;
}
export interface DeleteNodeV1RuntimeClassRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
  };
  path: {
    name: string;
  };
}
export interface PatchNodeV1RuntimeClassRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
  };
  body: Patch;
}
export interface WatchNodeV1RuntimeClassListRequest {
  query: {
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
  };
}
export interface WatchNodeV1RuntimeClassRequest {
  query: {
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
  };
  path: {
    name: string;
  };
}
export interface GetPolicyAPIGroupRequest {}
export interface GetPolicyV1APIResourcesRequest {}
export interface ListPolicyV1NamespacedPodDisruptionBudgetRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface CreatePolicyV1NamespacedPodDisruptionBudgetRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    namespace: string;
  };
  body: PodDisruptionBudget;
}
export interface DeletePolicyV1CollectionNamespacedPodDisruptionBudgetRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface ReadPolicyV1NamespacedPodDisruptionBudgetRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ReplacePolicyV1NamespacedPodDisruptionBudgetRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: PodDisruptionBudget;
}
export interface DeletePolicyV1NamespacedPodDisruptionBudgetRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface PatchPolicyV1NamespacedPodDisruptionBudgetRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Patch;
}
export interface ReadPolicyV1NamespacedPodDisruptionBudgetStatusRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ReplacePolicyV1NamespacedPodDisruptionBudgetStatusRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: PodDisruptionBudget;
}
export interface PatchPolicyV1NamespacedPodDisruptionBudgetStatusRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Patch;
}
export interface ListPolicyV1PodDisruptionBudgetForAllNamespacesRequest {
  query: {
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
  };
}
export interface WatchPolicyV1NamespacedPodDisruptionBudgetListRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface WatchPolicyV1NamespacedPodDisruptionBudgetRequest {
  query: {
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
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface WatchPolicyV1PodDisruptionBudgetListForAllNamespacesRequest {
  query: {
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
  };
}
export interface GetRbacAuthorizationAPIGroupRequest {}
export interface GetRbacAuthorizationV1APIResourcesRequest {}
export interface ListRbacAuthorizationV1ClusterRoleBindingRequest {
  query: {
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
  };
}
export interface CreateRbacAuthorizationV1ClusterRoleBindingRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  body: ClusterRoleBinding;
}
export interface DeleteRbacAuthorizationV1CollectionClusterRoleBindingRequest {
  query: {
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
  };
}
export interface ReadRbacAuthorizationV1ClusterRoleBindingRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
  };
}
export interface ReplaceRbacAuthorizationV1ClusterRoleBindingRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
  };
  body: ClusterRoleBinding;
}
export interface DeleteRbacAuthorizationV1ClusterRoleBindingRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
  };
  path: {
    name: string;
  };
}
export interface PatchRbacAuthorizationV1ClusterRoleBindingRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
  };
  body: Patch;
}
export interface ListRbacAuthorizationV1ClusterRoleRequest {
  query: {
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
  };
}
export interface CreateRbacAuthorizationV1ClusterRoleRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  body: ClusterRole;
}
export interface DeleteRbacAuthorizationV1CollectionClusterRoleRequest {
  query: {
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
  };
}
export interface ReadRbacAuthorizationV1ClusterRoleRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
  };
}
export interface ReplaceRbacAuthorizationV1ClusterRoleRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
  };
  body: ClusterRole;
}
export interface DeleteRbacAuthorizationV1ClusterRoleRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
  };
  path: {
    name: string;
  };
}
export interface PatchRbacAuthorizationV1ClusterRoleRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
  };
  body: Patch;
}
export interface ListRbacAuthorizationV1NamespacedRoleBindingRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface CreateRbacAuthorizationV1NamespacedRoleBindingRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    namespace: string;
  };
  body: RoleBinding;
}
export interface DeleteRbacAuthorizationV1CollectionNamespacedRoleBindingRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface ReadRbacAuthorizationV1NamespacedRoleBindingRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ReplaceRbacAuthorizationV1NamespacedRoleBindingRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: RoleBinding;
}
export interface DeleteRbacAuthorizationV1NamespacedRoleBindingRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface PatchRbacAuthorizationV1NamespacedRoleBindingRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Patch;
}
export interface ListRbacAuthorizationV1NamespacedRoleRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface CreateRbacAuthorizationV1NamespacedRoleRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    namespace: string;
  };
  body: Role;
}
export interface DeleteRbacAuthorizationV1CollectionNamespacedRoleRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface ReadRbacAuthorizationV1NamespacedRoleRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface ReplaceRbacAuthorizationV1NamespacedRoleRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Role;
}
export interface DeleteRbacAuthorizationV1NamespacedRoleRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface PatchRbacAuthorizationV1NamespacedRoleRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
    namespace: string;
  };
  body: Patch;
}
export interface ListRbacAuthorizationV1RoleBindingForAllNamespacesRequest {
  query: {
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
  };
}
export interface ListRbacAuthorizationV1RoleForAllNamespacesRequest {
  query: {
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
  };
}
export interface WatchRbacAuthorizationV1ClusterRoleBindingListRequest {
  query: {
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
  };
}
export interface WatchRbacAuthorizationV1ClusterRoleBindingRequest {
  query: {
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
  };
  path: {
    name: string;
  };
}
export interface WatchRbacAuthorizationV1ClusterRoleListRequest {
  query: {
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
  };
}
export interface WatchRbacAuthorizationV1ClusterRoleRequest {
  query: {
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
  };
  path: {
    name: string;
  };
}
export interface WatchRbacAuthorizationV1NamespacedRoleBindingListRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface WatchRbacAuthorizationV1NamespacedRoleBindingRequest {
  query: {
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
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface WatchRbacAuthorizationV1NamespacedRoleListRequest {
  query: {
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
  };
  path: {
    namespace: string;
  };
}
export interface WatchRbacAuthorizationV1NamespacedRoleRequest {
  query: {
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
  };
  path: {
    name: string;
    namespace: string;
  };
}
export interface WatchRbacAuthorizationV1RoleBindingListForAllNamespacesRequest {
  query: {
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
  };
}
export interface WatchRbacAuthorizationV1RoleListForAllNamespacesRequest {
  query: {
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
  };
}
export interface GetSchedulingAPIGroupRequest {}
export interface GetSchedulingV1APIResourcesRequest {}
export interface ListSchedulingV1PriorityClassRequest {
  query: {
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
  };
}
export interface CreateSchedulingV1PriorityClassRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  body: PriorityClass;
}
export interface DeleteSchedulingV1CollectionPriorityClassRequest {
  query: {
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
  };
}
export interface ReadSchedulingV1PriorityClassRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
  };
}
export interface ReplaceSchedulingV1PriorityClassRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
  };
  body: PriorityClass;
}
export interface DeleteSchedulingV1PriorityClassRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
  };
  path: {
    name: string;
  };
}
export interface PatchSchedulingV1PriorityClassRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
  };
  body: Patch;
}
export interface WatchSchedulingV1PriorityClassListRequest {
  query: {
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
  };
}
export interface WatchSchedulingV1PriorityClassRequest {
  query: {
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
  };
  path: {
    name: string;
  };
}
export interface GetStorageAPIGroupRequest {}
export interface GetStorageV1APIResourcesRequest {}
export interface ListStorageV1CSIDriverRequest {
  query: {
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
  };
}
export interface CreateStorageV1CSIDriverRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  body: CSIDriver;
}
export interface DeleteStorageV1CollectionCSIDriverRequest {
  query: {
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
  };
}
export interface ReadStorageV1CSIDriverRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
  };
}
export interface ReplaceStorageV1CSIDriverRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
  };
  body: CSIDriver;
}
export interface DeleteStorageV1CSIDriverRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
  };
  path: {
    name: string;
  };
}
export interface PatchStorageV1CSIDriverRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
  };
  body: Patch;
}
export interface ListStorageV1CSINodeRequest {
  query: {
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
  };
}
export interface CreateStorageV1CSINodeRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  body: CSINode;
}
export interface DeleteStorageV1CollectionCSINodeRequest {
  query: {
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
  };
}
export interface ReadStorageV1CSINodeRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
  };
}
export interface ReplaceStorageV1CSINodeRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
  };
  body: CSINode;
}
export interface DeleteStorageV1CSINodeRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
  };
  path: {
    name: string;
  };
}
export interface PatchStorageV1CSINodeRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
  };
  body: Patch;
}
export interface ListStorageV1StorageClassRequest {
  query: {
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
  };
}
export interface CreateStorageV1StorageClassRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  body: StorageClass;
}
export interface DeleteStorageV1CollectionStorageClassRequest {
  query: {
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
  };
}
export interface ReadStorageV1StorageClassRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
  };
}
export interface ReplaceStorageV1StorageClassRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
  };
  body: StorageClass;
}
export interface DeleteStorageV1StorageClassRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
  };
  path: {
    name: string;
  };
}
export interface PatchStorageV1StorageClassRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
  };
  body: Patch;
}
export interface ListStorageV1VolumeAttachmentRequest {
  query: {
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
  };
}
export interface CreateStorageV1VolumeAttachmentRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  body: VolumeAttachment;
}
export interface DeleteStorageV1CollectionVolumeAttachmentRequest {
  query: {
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
  };
}
export interface ReadStorageV1VolumeAttachmentRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
  };
}
export interface ReplaceStorageV1VolumeAttachmentRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
  };
  body: VolumeAttachment;
}
export interface DeleteStorageV1VolumeAttachmentRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
  };
  path: {
    name: string;
  };
}
export interface PatchStorageV1VolumeAttachmentRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
  };
  body: Patch;
}
export interface ReadStorageV1VolumeAttachmentStatusRequest {
  query: {
    pretty?: string;
  };
  path: {
    name: string;
  };
}
export interface ReplaceStorageV1VolumeAttachmentStatusRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
  };
  path: {
    name: string;
  };
  body: VolumeAttachment;
}
export interface PatchStorageV1VolumeAttachmentStatusRequest {
  query: {
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
  };
  path: {
    name: string;
  };
  body: Patch;
}
export interface WatchStorageV1CSIDriverListRequest {
  query: {
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
  };
}
export interface WatchStorageV1CSIDriverRequest {
  query: {
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
  };
  path: {
    name: string;
  };
}
export interface WatchStorageV1CSINodeListRequest {
  query: {
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
  };
}
export interface WatchStorageV1CSINodeRequest {
  query: {
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
  };
  path: {
    name: string;
  };
}
export interface WatchStorageV1StorageClassListRequest {
  query: {
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
  };
}
export interface WatchStorageV1StorageClassRequest {
  query: {
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
  };
  path: {
    name: string;
  };
}
export interface WatchStorageV1VolumeAttachmentListRequest {
  query: {
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
  };
}
export interface WatchStorageV1VolumeAttachmentRequest {
  query: {
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
  };
  path: {
    name: string;
  };
}
export interface LogFileListHandlerRequest {}
export interface LogFileHandlerRequest {
  path: {
    logpath: string;
  };
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
    const path = `/api/v1/componentstatuses/${params.path.name}`;
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
    const path = `/api/v1/namespaces/${params.path.namespace}/bindings`;
    return await this.post<Binding>(path, null, params.body, opts);
  }
  async listCoreV1NamespacedConfigMap(params: ListCoreV1NamespacedConfigMapRequest, opts?: APIClientRequestOpts): Promise<ConfigMapList> {
    const path = `/api/v1/namespaces/${params.path.namespace}/configmaps`;
    return await this.get<ConfigMapList>(path, params.query, null, opts);
  }
  async createCoreV1NamespacedConfigMap(params: CreateCoreV1NamespacedConfigMapRequest, opts?: APIClientRequestOpts): Promise<ConfigMap> {
    const path = `/api/v1/namespaces/${params.path.namespace}/configmaps`;
    return await this.post<ConfigMap>(path, params.query, params.body, opts);
  }
  async deleteCoreV1CollectionNamespacedConfigMap(params: DeleteCoreV1CollectionNamespacedConfigMapRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/api/v1/namespaces/${params.path.namespace}/configmaps`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readCoreV1NamespacedConfigMap(params: ReadCoreV1NamespacedConfigMapRequest, opts?: APIClientRequestOpts): Promise<ConfigMap> {
    const path = `/api/v1/namespaces/${params.path.namespace}/configmaps/${params.path.name}`;
    return await this.get<ConfigMap>(path, null, null, opts);
  }
  async replaceCoreV1NamespacedConfigMap(params: ReplaceCoreV1NamespacedConfigMapRequest, opts?: APIClientRequestOpts): Promise<ConfigMap> {
    const path = `/api/v1/namespaces/${params.path.namespace}/configmaps/${params.path.name}`;
    return await this.put<ConfigMap>(path, params.query, params.body, opts);
  }
  async deleteCoreV1NamespacedConfigMap(params: DeleteCoreV1NamespacedConfigMapRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/api/v1/namespaces/${params.path.namespace}/configmaps/${params.path.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchCoreV1NamespacedConfigMap(params: PatchCoreV1NamespacedConfigMapRequest, opts?: APIClientRequestOpts): Promise<ConfigMap> {
    const path = `/api/v1/namespaces/${params.path.namespace}/configmaps/${params.path.name}`;
    return await this.patch<ConfigMap>(path, params.query, params.body, opts);
  }
  async listCoreV1NamespacedEndpoints(params: ListCoreV1NamespacedEndpointsRequest, opts?: APIClientRequestOpts): Promise<EndpointsList> {
    const path = `/api/v1/namespaces/${params.path.namespace}/endpoints`;
    return await this.get<EndpointsList>(path, params.query, null, opts);
  }
  async createCoreV1NamespacedEndpoints(params: CreateCoreV1NamespacedEndpointsRequest, opts?: APIClientRequestOpts): Promise<Endpoints> {
    const path = `/api/v1/namespaces/${params.path.namespace}/endpoints`;
    return await this.post<Endpoints>(path, params.query, params.body, opts);
  }
  async deleteCoreV1CollectionNamespacedEndpoints(params: DeleteCoreV1CollectionNamespacedEndpointsRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/api/v1/namespaces/${params.path.namespace}/endpoints`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readCoreV1NamespacedEndpoints(params: ReadCoreV1NamespacedEndpointsRequest, opts?: APIClientRequestOpts): Promise<Endpoints> {
    const path = `/api/v1/namespaces/${params.path.namespace}/endpoints/${params.path.name}`;
    return await this.get<Endpoints>(path, null, null, opts);
  }
  async replaceCoreV1NamespacedEndpoints(params: ReplaceCoreV1NamespacedEndpointsRequest, opts?: APIClientRequestOpts): Promise<Endpoints> {
    const path = `/api/v1/namespaces/${params.path.namespace}/endpoints/${params.path.name}`;
    return await this.put<Endpoints>(path, params.query, params.body, opts);
  }
  async deleteCoreV1NamespacedEndpoints(params: DeleteCoreV1NamespacedEndpointsRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/api/v1/namespaces/${params.path.namespace}/endpoints/${params.path.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchCoreV1NamespacedEndpoints(params: PatchCoreV1NamespacedEndpointsRequest, opts?: APIClientRequestOpts): Promise<Endpoints> {
    const path = `/api/v1/namespaces/${params.path.namespace}/endpoints/${params.path.name}`;
    return await this.patch<Endpoints>(path, params.query, params.body, opts);
  }
  async listCoreV1NamespacedEvent(params: ListCoreV1NamespacedEventRequest, opts?: APIClientRequestOpts): Promise<EventList> {
    const path = `/api/v1/namespaces/${params.path.namespace}/events`;
    return await this.get<EventList>(path, params.query, null, opts);
  }
  async createCoreV1NamespacedEvent(params: CreateCoreV1NamespacedEventRequest, opts?: APIClientRequestOpts): Promise<Event> {
    const path = `/api/v1/namespaces/${params.path.namespace}/events`;
    return await this.post<Event>(path, params.query, params.body, opts);
  }
  async deleteCoreV1CollectionNamespacedEvent(params: DeleteCoreV1CollectionNamespacedEventRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/api/v1/namespaces/${params.path.namespace}/events`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readCoreV1NamespacedEvent(params: ReadCoreV1NamespacedEventRequest, opts?: APIClientRequestOpts): Promise<Event> {
    const path = `/api/v1/namespaces/${params.path.namespace}/events/${params.path.name}`;
    return await this.get<Event>(path, null, null, opts);
  }
  async replaceCoreV1NamespacedEvent(params: ReplaceCoreV1NamespacedEventRequest, opts?: APIClientRequestOpts): Promise<Event> {
    const path = `/api/v1/namespaces/${params.path.namespace}/events/${params.path.name}`;
    return await this.put<Event>(path, params.query, params.body, opts);
  }
  async deleteCoreV1NamespacedEvent(params: DeleteCoreV1NamespacedEventRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/api/v1/namespaces/${params.path.namespace}/events/${params.path.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchCoreV1NamespacedEvent(params: PatchCoreV1NamespacedEventRequest, opts?: APIClientRequestOpts): Promise<Event> {
    const path = `/api/v1/namespaces/${params.path.namespace}/events/${params.path.name}`;
    return await this.patch<Event>(path, params.query, params.body, opts);
  }
  async listCoreV1NamespacedLimitRange(params: ListCoreV1NamespacedLimitRangeRequest, opts?: APIClientRequestOpts): Promise<LimitRangeList> {
    const path = `/api/v1/namespaces/${params.path.namespace}/limitranges`;
    return await this.get<LimitRangeList>(path, params.query, null, opts);
  }
  async createCoreV1NamespacedLimitRange(params: CreateCoreV1NamespacedLimitRangeRequest, opts?: APIClientRequestOpts): Promise<LimitRange> {
    const path = `/api/v1/namespaces/${params.path.namespace}/limitranges`;
    return await this.post<LimitRange>(path, params.query, params.body, opts);
  }
  async deleteCoreV1CollectionNamespacedLimitRange(params: DeleteCoreV1CollectionNamespacedLimitRangeRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/api/v1/namespaces/${params.path.namespace}/limitranges`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readCoreV1NamespacedLimitRange(params: ReadCoreV1NamespacedLimitRangeRequest, opts?: APIClientRequestOpts): Promise<LimitRange> {
    const path = `/api/v1/namespaces/${params.path.namespace}/limitranges/${params.path.name}`;
    return await this.get<LimitRange>(path, null, null, opts);
  }
  async replaceCoreV1NamespacedLimitRange(params: ReplaceCoreV1NamespacedLimitRangeRequest, opts?: APIClientRequestOpts): Promise<LimitRange> {
    const path = `/api/v1/namespaces/${params.path.namespace}/limitranges/${params.path.name}`;
    return await this.put<LimitRange>(path, params.query, params.body, opts);
  }
  async deleteCoreV1NamespacedLimitRange(params: DeleteCoreV1NamespacedLimitRangeRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/api/v1/namespaces/${params.path.namespace}/limitranges/${params.path.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchCoreV1NamespacedLimitRange(params: PatchCoreV1NamespacedLimitRangeRequest, opts?: APIClientRequestOpts): Promise<LimitRange> {
    const path = `/api/v1/namespaces/${params.path.namespace}/limitranges/${params.path.name}`;
    return await this.patch<LimitRange>(path, params.query, params.body, opts);
  }
  async listCoreV1NamespacedPersistentVolumeClaim(params: ListCoreV1NamespacedPersistentVolumeClaimRequest, opts?: APIClientRequestOpts): Promise<PersistentVolumeClaimList> {
    const path = `/api/v1/namespaces/${params.path.namespace}/persistentvolumeclaims`;
    return await this.get<PersistentVolumeClaimList>(path, params.query, null, opts);
  }
  async createCoreV1NamespacedPersistentVolumeClaim(params: CreateCoreV1NamespacedPersistentVolumeClaimRequest, opts?: APIClientRequestOpts): Promise<PersistentVolumeClaim> {
    const path = `/api/v1/namespaces/${params.path.namespace}/persistentvolumeclaims`;
    return await this.post<PersistentVolumeClaim>(path, params.query, params.body, opts);
  }
  async deleteCoreV1CollectionNamespacedPersistentVolumeClaim(params: DeleteCoreV1CollectionNamespacedPersistentVolumeClaimRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/api/v1/namespaces/${params.path.namespace}/persistentvolumeclaims`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readCoreV1NamespacedPersistentVolumeClaim(params: ReadCoreV1NamespacedPersistentVolumeClaimRequest, opts?: APIClientRequestOpts): Promise<PersistentVolumeClaim> {
    const path = `/api/v1/namespaces/${params.path.namespace}/persistentvolumeclaims/${params.path.name}`;
    return await this.get<PersistentVolumeClaim>(path, null, null, opts);
  }
  async replaceCoreV1NamespacedPersistentVolumeClaim(params: ReplaceCoreV1NamespacedPersistentVolumeClaimRequest, opts?: APIClientRequestOpts): Promise<PersistentVolumeClaim> {
    const path = `/api/v1/namespaces/${params.path.namespace}/persistentvolumeclaims/${params.path.name}`;
    return await this.put<PersistentVolumeClaim>(path, params.query, params.body, opts);
  }
  async deleteCoreV1NamespacedPersistentVolumeClaim(params: DeleteCoreV1NamespacedPersistentVolumeClaimRequest, opts?: APIClientRequestOpts): Promise<PersistentVolumeClaim> {
    const path = `/api/v1/namespaces/${params.path.namespace}/persistentvolumeclaims/${params.path.name}`;
    return await this.delete<PersistentVolumeClaim>(path, params.query, null, opts);
  }
  async patchCoreV1NamespacedPersistentVolumeClaim(params: PatchCoreV1NamespacedPersistentVolumeClaimRequest, opts?: APIClientRequestOpts): Promise<PersistentVolumeClaim> {
    const path = `/api/v1/namespaces/${params.path.namespace}/persistentvolumeclaims/${params.path.name}`;
    return await this.patch<PersistentVolumeClaim>(path, params.query, params.body, opts);
  }
  async readCoreV1NamespacedPersistentVolumeClaimStatus(params: ReadCoreV1NamespacedPersistentVolumeClaimStatusRequest, opts?: APIClientRequestOpts): Promise<PersistentVolumeClaim> {
    const path = `/api/v1/namespaces/${params.path.namespace}/persistentvolumeclaims/${params.path.name}/status`;
    return await this.get<PersistentVolumeClaim>(path, null, null, opts);
  }
  async replaceCoreV1NamespacedPersistentVolumeClaimStatus(params: ReplaceCoreV1NamespacedPersistentVolumeClaimStatusRequest, opts?: APIClientRequestOpts): Promise<PersistentVolumeClaim> {
    const path = `/api/v1/namespaces/${params.path.namespace}/persistentvolumeclaims/${params.path.name}/status`;
    return await this.put<PersistentVolumeClaim>(path, params.query, params.body, opts);
  }
  async patchCoreV1NamespacedPersistentVolumeClaimStatus(params: PatchCoreV1NamespacedPersistentVolumeClaimStatusRequest, opts?: APIClientRequestOpts): Promise<PersistentVolumeClaim> {
    const path = `/api/v1/namespaces/${params.path.namespace}/persistentvolumeclaims/${params.path.name}/status`;
    return await this.patch<PersistentVolumeClaim>(path, params.query, params.body, opts);
  }
  async listCoreV1NamespacedPod(params: ListCoreV1NamespacedPodRequest, opts?: APIClientRequestOpts): Promise<PodList> {
    const path = `/api/v1/namespaces/${params.path.namespace}/pods`;
    return await this.get<PodList>(path, params.query, null, opts);
  }
  async createCoreV1NamespacedPod(params: CreateCoreV1NamespacedPodRequest, opts?: APIClientRequestOpts): Promise<Pod> {
    const path = `/api/v1/namespaces/${params.path.namespace}/pods`;
    return await this.post<Pod>(path, params.query, params.body, opts);
  }
  async deleteCoreV1CollectionNamespacedPod(params: DeleteCoreV1CollectionNamespacedPodRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/api/v1/namespaces/${params.path.namespace}/pods`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readCoreV1NamespacedPod(params: ReadCoreV1NamespacedPodRequest, opts?: APIClientRequestOpts): Promise<Pod> {
    const path = `/api/v1/namespaces/${params.path.namespace}/pods/${params.path.name}`;
    return await this.get<Pod>(path, null, null, opts);
  }
  async replaceCoreV1NamespacedPod(params: ReplaceCoreV1NamespacedPodRequest, opts?: APIClientRequestOpts): Promise<Pod> {
    const path = `/api/v1/namespaces/${params.path.namespace}/pods/${params.path.name}`;
    return await this.put<Pod>(path, params.query, params.body, opts);
  }
  async deleteCoreV1NamespacedPod(params: DeleteCoreV1NamespacedPodRequest, opts?: APIClientRequestOpts): Promise<Pod> {
    const path = `/api/v1/namespaces/${params.path.namespace}/pods/${params.path.name}`;
    return await this.delete<Pod>(path, params.query, null, opts);
  }
  async patchCoreV1NamespacedPod(params: PatchCoreV1NamespacedPodRequest, opts?: APIClientRequestOpts): Promise<Pod> {
    const path = `/api/v1/namespaces/${params.path.namespace}/pods/${params.path.name}`;
    return await this.patch<Pod>(path, params.query, params.body, opts);
  }
  async connectCoreV1GetNamespacedPodAttach(params: ConnectCoreV1GetNamespacedPodAttachRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/namespaces/${params.path.namespace}/pods/${params.path.name}/attach`;
    return await this.get<string>(path, null, null, opts);
  }
  async connectCoreV1PostNamespacedPodAttach(params: ConnectCoreV1PostNamespacedPodAttachRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/namespaces/${params.path.namespace}/pods/${params.path.name}/attach`;
    return await this.post<string>(path, null, null, opts);
  }
  async createCoreV1NamespacedPodBinding(params: CreateCoreV1NamespacedPodBindingRequest, opts?: APIClientRequestOpts): Promise<Binding> {
    const path = `/api/v1/namespaces/${params.path.namespace}/pods/${params.path.name}/binding`;
    return await this.post<Binding>(path, null, params.body, opts);
  }
  async createCoreV1NamespacedPodEviction(params: CreateCoreV1NamespacedPodEvictionRequest, opts?: APIClientRequestOpts): Promise<Eviction> {
    const path = `/api/v1/namespaces/${params.path.namespace}/pods/${params.path.name}/eviction`;
    return await this.post<Eviction>(path, null, params.body, opts);
  }
  async connectCoreV1GetNamespacedPodExec(params: ConnectCoreV1GetNamespacedPodExecRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/namespaces/${params.path.namespace}/pods/${params.path.name}/exec`;
    return await this.get<string>(path, null, null, opts);
  }
  async connectCoreV1PostNamespacedPodExec(params: ConnectCoreV1PostNamespacedPodExecRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/namespaces/${params.path.namespace}/pods/${params.path.name}/exec`;
    return await this.post<string>(path, null, null, opts);
  }
  async readCoreV1NamespacedPodLog(params: ReadCoreV1NamespacedPodLogRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/namespaces/${params.path.namespace}/pods/${params.path.name}/log`;
    return await this.get<string>(path, null, null, opts);
  }
  async connectCoreV1GetNamespacedPodPortforward(params: ConnectCoreV1GetNamespacedPodPortforwardRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/namespaces/${params.path.namespace}/pods/${params.path.name}/portforward`;
    return await this.get<string>(path, null, null, opts);
  }
  async connectCoreV1PostNamespacedPodPortforward(params: ConnectCoreV1PostNamespacedPodPortforwardRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/namespaces/${params.path.namespace}/pods/${params.path.name}/portforward`;
    return await this.post<string>(path, null, null, opts);
  }
  async connectCoreV1GetNamespacedPodProxy(params: ConnectCoreV1GetNamespacedPodProxyRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/namespaces/${params.path.namespace}/pods/${params.path.name}/proxy`;
    return await this.get<string>(path, null, null, opts);
  }
  async connectCoreV1PostNamespacedPodProxy(params: ConnectCoreV1PostNamespacedPodProxyRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/namespaces/${params.path.namespace}/pods/${params.path.name}/proxy`;
    return await this.post<string>(path, null, null, opts);
  }
  async connectCoreV1PutNamespacedPodProxy(params: ConnectCoreV1PutNamespacedPodProxyRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/namespaces/${params.path.namespace}/pods/${params.path.name}/proxy`;
    return await this.put<string>(path, null, null, opts);
  }
  async connectCoreV1DeleteNamespacedPodProxy(params: ConnectCoreV1DeleteNamespacedPodProxyRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/namespaces/${params.path.namespace}/pods/${params.path.name}/proxy`;
    return await this.delete<string>(path, null, null, opts);
  }
  async connectCoreV1PatchNamespacedPodProxy(params: ConnectCoreV1PatchNamespacedPodProxyRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/namespaces/${params.path.namespace}/pods/${params.path.name}/proxy`;
    return await this.patch<string>(path, null, null, opts);
  }
  async connectCoreV1GetNamespacedPodProxyWithPath(params: ConnectCoreV1GetNamespacedPodProxyWithPathRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/namespaces/${params.path.namespace}/pods/${params.path.name}/proxy/${params.path.path}`;
    return await this.get<string>(path, null, null, opts);
  }
  async connectCoreV1PostNamespacedPodProxyWithPath(params: ConnectCoreV1PostNamespacedPodProxyWithPathRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/namespaces/${params.path.namespace}/pods/${params.path.name}/proxy/${params.path.path}`;
    return await this.post<string>(path, null, null, opts);
  }
  async connectCoreV1PutNamespacedPodProxyWithPath(params: ConnectCoreV1PutNamespacedPodProxyWithPathRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/namespaces/${params.path.namespace}/pods/${params.path.name}/proxy/${params.path.path}`;
    return await this.put<string>(path, null, null, opts);
  }
  async connectCoreV1DeleteNamespacedPodProxyWithPath(params: ConnectCoreV1DeleteNamespacedPodProxyWithPathRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/namespaces/${params.path.namespace}/pods/${params.path.name}/proxy/${params.path.path}`;
    return await this.delete<string>(path, null, null, opts);
  }
  async connectCoreV1PatchNamespacedPodProxyWithPath(params: ConnectCoreV1PatchNamespacedPodProxyWithPathRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/namespaces/${params.path.namespace}/pods/${params.path.name}/proxy/${params.path.path}`;
    return await this.patch<string>(path, null, null, opts);
  }
  async readCoreV1NamespacedPodStatus(params: ReadCoreV1NamespacedPodStatusRequest, opts?: APIClientRequestOpts): Promise<Pod> {
    const path = `/api/v1/namespaces/${params.path.namespace}/pods/${params.path.name}/status`;
    return await this.get<Pod>(path, null, null, opts);
  }
  async replaceCoreV1NamespacedPodStatus(params: ReplaceCoreV1NamespacedPodStatusRequest, opts?: APIClientRequestOpts): Promise<Pod> {
    const path = `/api/v1/namespaces/${params.path.namespace}/pods/${params.path.name}/status`;
    return await this.put<Pod>(path, params.query, params.body, opts);
  }
  async patchCoreV1NamespacedPodStatus(params: PatchCoreV1NamespacedPodStatusRequest, opts?: APIClientRequestOpts): Promise<Pod> {
    const path = `/api/v1/namespaces/${params.path.namespace}/pods/${params.path.name}/status`;
    return await this.patch<Pod>(path, params.query, params.body, opts);
  }
  async listCoreV1NamespacedPodTemplate(params: ListCoreV1NamespacedPodTemplateRequest, opts?: APIClientRequestOpts): Promise<PodTemplateList> {
    const path = `/api/v1/namespaces/${params.path.namespace}/podtemplates`;
    return await this.get<PodTemplateList>(path, params.query, null, opts);
  }
  async createCoreV1NamespacedPodTemplate(params: CreateCoreV1NamespacedPodTemplateRequest, opts?: APIClientRequestOpts): Promise<PodTemplate> {
    const path = `/api/v1/namespaces/${params.path.namespace}/podtemplates`;
    return await this.post<PodTemplate>(path, params.query, params.body, opts);
  }
  async deleteCoreV1CollectionNamespacedPodTemplate(params: DeleteCoreV1CollectionNamespacedPodTemplateRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/api/v1/namespaces/${params.path.namespace}/podtemplates`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readCoreV1NamespacedPodTemplate(params: ReadCoreV1NamespacedPodTemplateRequest, opts?: APIClientRequestOpts): Promise<PodTemplate> {
    const path = `/api/v1/namespaces/${params.path.namespace}/podtemplates/${params.path.name}`;
    return await this.get<PodTemplate>(path, null, null, opts);
  }
  async replaceCoreV1NamespacedPodTemplate(params: ReplaceCoreV1NamespacedPodTemplateRequest, opts?: APIClientRequestOpts): Promise<PodTemplate> {
    const path = `/api/v1/namespaces/${params.path.namespace}/podtemplates/${params.path.name}`;
    return await this.put<PodTemplate>(path, params.query, params.body, opts);
  }
  async deleteCoreV1NamespacedPodTemplate(params: DeleteCoreV1NamespacedPodTemplateRequest, opts?: APIClientRequestOpts): Promise<PodTemplate> {
    const path = `/api/v1/namespaces/${params.path.namespace}/podtemplates/${params.path.name}`;
    return await this.delete<PodTemplate>(path, params.query, null, opts);
  }
  async patchCoreV1NamespacedPodTemplate(params: PatchCoreV1NamespacedPodTemplateRequest, opts?: APIClientRequestOpts): Promise<PodTemplate> {
    const path = `/api/v1/namespaces/${params.path.namespace}/podtemplates/${params.path.name}`;
    return await this.patch<PodTemplate>(path, params.query, params.body, opts);
  }
  async listCoreV1NamespacedReplicationController(params: ListCoreV1NamespacedReplicationControllerRequest, opts?: APIClientRequestOpts): Promise<ReplicationControllerList> {
    const path = `/api/v1/namespaces/${params.path.namespace}/replicationcontrollers`;
    return await this.get<ReplicationControllerList>(path, params.query, null, opts);
  }
  async createCoreV1NamespacedReplicationController(params: CreateCoreV1NamespacedReplicationControllerRequest, opts?: APIClientRequestOpts): Promise<ReplicationController> {
    const path = `/api/v1/namespaces/${params.path.namespace}/replicationcontrollers`;
    return await this.post<ReplicationController>(path, params.query, params.body, opts);
  }
  async deleteCoreV1CollectionNamespacedReplicationController(params: DeleteCoreV1CollectionNamespacedReplicationControllerRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/api/v1/namespaces/${params.path.namespace}/replicationcontrollers`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readCoreV1NamespacedReplicationController(params: ReadCoreV1NamespacedReplicationControllerRequest, opts?: APIClientRequestOpts): Promise<ReplicationController> {
    const path = `/api/v1/namespaces/${params.path.namespace}/replicationcontrollers/${params.path.name}`;
    return await this.get<ReplicationController>(path, null, null, opts);
  }
  async replaceCoreV1NamespacedReplicationController(params: ReplaceCoreV1NamespacedReplicationControllerRequest, opts?: APIClientRequestOpts): Promise<ReplicationController> {
    const path = `/api/v1/namespaces/${params.path.namespace}/replicationcontrollers/${params.path.name}`;
    return await this.put<ReplicationController>(path, params.query, params.body, opts);
  }
  async deleteCoreV1NamespacedReplicationController(params: DeleteCoreV1NamespacedReplicationControllerRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/api/v1/namespaces/${params.path.namespace}/replicationcontrollers/${params.path.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchCoreV1NamespacedReplicationController(params: PatchCoreV1NamespacedReplicationControllerRequest, opts?: APIClientRequestOpts): Promise<ReplicationController> {
    const path = `/api/v1/namespaces/${params.path.namespace}/replicationcontrollers/${params.path.name}`;
    return await this.patch<ReplicationController>(path, params.query, params.body, opts);
  }
  async readCoreV1NamespacedReplicationControllerScale(params: ReadCoreV1NamespacedReplicationControllerScaleRequest, opts?: APIClientRequestOpts): Promise<Scale> {
    const path = `/api/v1/namespaces/${params.path.namespace}/replicationcontrollers/${params.path.name}/scale`;
    return await this.get<Scale>(path, null, null, opts);
  }
  async replaceCoreV1NamespacedReplicationControllerScale(params: ReplaceCoreV1NamespacedReplicationControllerScaleRequest, opts?: APIClientRequestOpts): Promise<Scale> {
    const path = `/api/v1/namespaces/${params.path.namespace}/replicationcontrollers/${params.path.name}/scale`;
    return await this.put<Scale>(path, params.query, params.body, opts);
  }
  async patchCoreV1NamespacedReplicationControllerScale(params: PatchCoreV1NamespacedReplicationControllerScaleRequest, opts?: APIClientRequestOpts): Promise<Scale> {
    const path = `/api/v1/namespaces/${params.path.namespace}/replicationcontrollers/${params.path.name}/scale`;
    return await this.patch<Scale>(path, params.query, params.body, opts);
  }
  async readCoreV1NamespacedReplicationControllerStatus(params: ReadCoreV1NamespacedReplicationControllerStatusRequest, opts?: APIClientRequestOpts): Promise<ReplicationController> {
    const path = `/api/v1/namespaces/${params.path.namespace}/replicationcontrollers/${params.path.name}/status`;
    return await this.get<ReplicationController>(path, null, null, opts);
  }
  async replaceCoreV1NamespacedReplicationControllerStatus(params: ReplaceCoreV1NamespacedReplicationControllerStatusRequest, opts?: APIClientRequestOpts): Promise<ReplicationController> {
    const path = `/api/v1/namespaces/${params.path.namespace}/replicationcontrollers/${params.path.name}/status`;
    return await this.put<ReplicationController>(path, params.query, params.body, opts);
  }
  async patchCoreV1NamespacedReplicationControllerStatus(params: PatchCoreV1NamespacedReplicationControllerStatusRequest, opts?: APIClientRequestOpts): Promise<ReplicationController> {
    const path = `/api/v1/namespaces/${params.path.namespace}/replicationcontrollers/${params.path.name}/status`;
    return await this.patch<ReplicationController>(path, params.query, params.body, opts);
  }
  async listCoreV1NamespacedResourceQuota(params: ListCoreV1NamespacedResourceQuotaRequest, opts?: APIClientRequestOpts): Promise<ResourceQuotaList> {
    const path = `/api/v1/namespaces/${params.path.namespace}/resourcequotas`;
    return await this.get<ResourceQuotaList>(path, params.query, null, opts);
  }
  async createCoreV1NamespacedResourceQuota(params: CreateCoreV1NamespacedResourceQuotaRequest, opts?: APIClientRequestOpts): Promise<ResourceQuota> {
    const path = `/api/v1/namespaces/${params.path.namespace}/resourcequotas`;
    return await this.post<ResourceQuota>(path, params.query, params.body, opts);
  }
  async deleteCoreV1CollectionNamespacedResourceQuota(params: DeleteCoreV1CollectionNamespacedResourceQuotaRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/api/v1/namespaces/${params.path.namespace}/resourcequotas`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readCoreV1NamespacedResourceQuota(params: ReadCoreV1NamespacedResourceQuotaRequest, opts?: APIClientRequestOpts): Promise<ResourceQuota> {
    const path = `/api/v1/namespaces/${params.path.namespace}/resourcequotas/${params.path.name}`;
    return await this.get<ResourceQuota>(path, null, null, opts);
  }
  async replaceCoreV1NamespacedResourceQuota(params: ReplaceCoreV1NamespacedResourceQuotaRequest, opts?: APIClientRequestOpts): Promise<ResourceQuota> {
    const path = `/api/v1/namespaces/${params.path.namespace}/resourcequotas/${params.path.name}`;
    return await this.put<ResourceQuota>(path, params.query, params.body, opts);
  }
  async deleteCoreV1NamespacedResourceQuota(params: DeleteCoreV1NamespacedResourceQuotaRequest, opts?: APIClientRequestOpts): Promise<ResourceQuota> {
    const path = `/api/v1/namespaces/${params.path.namespace}/resourcequotas/${params.path.name}`;
    return await this.delete<ResourceQuota>(path, params.query, null, opts);
  }
  async patchCoreV1NamespacedResourceQuota(params: PatchCoreV1NamespacedResourceQuotaRequest, opts?: APIClientRequestOpts): Promise<ResourceQuota> {
    const path = `/api/v1/namespaces/${params.path.namespace}/resourcequotas/${params.path.name}`;
    return await this.patch<ResourceQuota>(path, params.query, params.body, opts);
  }
  async readCoreV1NamespacedResourceQuotaStatus(params: ReadCoreV1NamespacedResourceQuotaStatusRequest, opts?: APIClientRequestOpts): Promise<ResourceQuota> {
    const path = `/api/v1/namespaces/${params.path.namespace}/resourcequotas/${params.path.name}/status`;
    return await this.get<ResourceQuota>(path, null, null, opts);
  }
  async replaceCoreV1NamespacedResourceQuotaStatus(params: ReplaceCoreV1NamespacedResourceQuotaStatusRequest, opts?: APIClientRequestOpts): Promise<ResourceQuota> {
    const path = `/api/v1/namespaces/${params.path.namespace}/resourcequotas/${params.path.name}/status`;
    return await this.put<ResourceQuota>(path, params.query, params.body, opts);
  }
  async patchCoreV1NamespacedResourceQuotaStatus(params: PatchCoreV1NamespacedResourceQuotaStatusRequest, opts?: APIClientRequestOpts): Promise<ResourceQuota> {
    const path = `/api/v1/namespaces/${params.path.namespace}/resourcequotas/${params.path.name}/status`;
    return await this.patch<ResourceQuota>(path, params.query, params.body, opts);
  }
  async listCoreV1NamespacedSecret(params: ListCoreV1NamespacedSecretRequest, opts?: APIClientRequestOpts): Promise<SecretList> {
    const path = `/api/v1/namespaces/${params.path.namespace}/secrets`;
    return await this.get<SecretList>(path, params.query, null, opts);
  }
  async createCoreV1NamespacedSecret(params: CreateCoreV1NamespacedSecretRequest, opts?: APIClientRequestOpts): Promise<Secret> {
    const path = `/api/v1/namespaces/${params.path.namespace}/secrets`;
    return await this.post<Secret>(path, params.query, params.body, opts);
  }
  async deleteCoreV1CollectionNamespacedSecret(params: DeleteCoreV1CollectionNamespacedSecretRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/api/v1/namespaces/${params.path.namespace}/secrets`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readCoreV1NamespacedSecret(params: ReadCoreV1NamespacedSecretRequest, opts?: APIClientRequestOpts): Promise<Secret> {
    const path = `/api/v1/namespaces/${params.path.namespace}/secrets/${params.path.name}`;
    return await this.get<Secret>(path, null, null, opts);
  }
  async replaceCoreV1NamespacedSecret(params: ReplaceCoreV1NamespacedSecretRequest, opts?: APIClientRequestOpts): Promise<Secret> {
    const path = `/api/v1/namespaces/${params.path.namespace}/secrets/${params.path.name}`;
    return await this.put<Secret>(path, params.query, params.body, opts);
  }
  async deleteCoreV1NamespacedSecret(params: DeleteCoreV1NamespacedSecretRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/api/v1/namespaces/${params.path.namespace}/secrets/${params.path.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchCoreV1NamespacedSecret(params: PatchCoreV1NamespacedSecretRequest, opts?: APIClientRequestOpts): Promise<Secret> {
    const path = `/api/v1/namespaces/${params.path.namespace}/secrets/${params.path.name}`;
    return await this.patch<Secret>(path, params.query, params.body, opts);
  }
  async listCoreV1NamespacedServiceAccount(params: ListCoreV1NamespacedServiceAccountRequest, opts?: APIClientRequestOpts): Promise<ServiceAccountList> {
    const path = `/api/v1/namespaces/${params.path.namespace}/serviceaccounts`;
    return await this.get<ServiceAccountList>(path, params.query, null, opts);
  }
  async createCoreV1NamespacedServiceAccount(params: CreateCoreV1NamespacedServiceAccountRequest, opts?: APIClientRequestOpts): Promise<ServiceAccount> {
    const path = `/api/v1/namespaces/${params.path.namespace}/serviceaccounts`;
    return await this.post<ServiceAccount>(path, params.query, params.body, opts);
  }
  async deleteCoreV1CollectionNamespacedServiceAccount(params: DeleteCoreV1CollectionNamespacedServiceAccountRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/api/v1/namespaces/${params.path.namespace}/serviceaccounts`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readCoreV1NamespacedServiceAccount(params: ReadCoreV1NamespacedServiceAccountRequest, opts?: APIClientRequestOpts): Promise<ServiceAccount> {
    const path = `/api/v1/namespaces/${params.path.namespace}/serviceaccounts/${params.path.name}`;
    return await this.get<ServiceAccount>(path, null, null, opts);
  }
  async replaceCoreV1NamespacedServiceAccount(params: ReplaceCoreV1NamespacedServiceAccountRequest, opts?: APIClientRequestOpts): Promise<ServiceAccount> {
    const path = `/api/v1/namespaces/${params.path.namespace}/serviceaccounts/${params.path.name}`;
    return await this.put<ServiceAccount>(path, params.query, params.body, opts);
  }
  async deleteCoreV1NamespacedServiceAccount(params: DeleteCoreV1NamespacedServiceAccountRequest, opts?: APIClientRequestOpts): Promise<ServiceAccount> {
    const path = `/api/v1/namespaces/${params.path.namespace}/serviceaccounts/${params.path.name}`;
    return await this.delete<ServiceAccount>(path, params.query, null, opts);
  }
  async patchCoreV1NamespacedServiceAccount(params: PatchCoreV1NamespacedServiceAccountRequest, opts?: APIClientRequestOpts): Promise<ServiceAccount> {
    const path = `/api/v1/namespaces/${params.path.namespace}/serviceaccounts/${params.path.name}`;
    return await this.patch<ServiceAccount>(path, params.query, params.body, opts);
  }
  async createCoreV1NamespacedServiceAccountToken(params: CreateCoreV1NamespacedServiceAccountTokenRequest, opts?: APIClientRequestOpts): Promise<TokenRequest> {
    const path = `/api/v1/namespaces/${params.path.namespace}/serviceaccounts/${params.path.name}/token`;
    return await this.post<TokenRequest>(path, null, params.body, opts);
  }
  async listCoreV1NamespacedService(params: ListCoreV1NamespacedServiceRequest, opts?: APIClientRequestOpts): Promise<ServiceList> {
    const path = `/api/v1/namespaces/${params.path.namespace}/services`;
    return await this.get<ServiceList>(path, params.query, null, opts);
  }
  async createCoreV1NamespacedService(params: CreateCoreV1NamespacedServiceRequest, opts?: APIClientRequestOpts): Promise<Service> {
    const path = `/api/v1/namespaces/${params.path.namespace}/services`;
    return await this.post<Service>(path, params.query, params.body, opts);
  }
  async readCoreV1NamespacedService(params: ReadCoreV1NamespacedServiceRequest, opts?: APIClientRequestOpts): Promise<Service> {
    const path = `/api/v1/namespaces/${params.path.namespace}/services/${params.path.name}`;
    return await this.get<Service>(path, null, null, opts);
  }
  async replaceCoreV1NamespacedService(params: ReplaceCoreV1NamespacedServiceRequest, opts?: APIClientRequestOpts): Promise<Service> {
    const path = `/api/v1/namespaces/${params.path.namespace}/services/${params.path.name}`;
    return await this.put<Service>(path, params.query, params.body, opts);
  }
  async deleteCoreV1NamespacedService(params: DeleteCoreV1NamespacedServiceRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/api/v1/namespaces/${params.path.namespace}/services/${params.path.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchCoreV1NamespacedService(params: PatchCoreV1NamespacedServiceRequest, opts?: APIClientRequestOpts): Promise<Service> {
    const path = `/api/v1/namespaces/${params.path.namespace}/services/${params.path.name}`;
    return await this.patch<Service>(path, params.query, params.body, opts);
  }
  async connectCoreV1GetNamespacedServiceProxy(params: ConnectCoreV1GetNamespacedServiceProxyRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/namespaces/${params.path.namespace}/services/${params.path.name}/proxy`;
    return await this.get<string>(path, null, null, opts);
  }
  async connectCoreV1PostNamespacedServiceProxy(params: ConnectCoreV1PostNamespacedServiceProxyRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/namespaces/${params.path.namespace}/services/${params.path.name}/proxy`;
    return await this.post<string>(path, null, null, opts);
  }
  async connectCoreV1PutNamespacedServiceProxy(params: ConnectCoreV1PutNamespacedServiceProxyRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/namespaces/${params.path.namespace}/services/${params.path.name}/proxy`;
    return await this.put<string>(path, null, null, opts);
  }
  async connectCoreV1DeleteNamespacedServiceProxy(params: ConnectCoreV1DeleteNamespacedServiceProxyRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/namespaces/${params.path.namespace}/services/${params.path.name}/proxy`;
    return await this.delete<string>(path, null, null, opts);
  }
  async connectCoreV1PatchNamespacedServiceProxy(params: ConnectCoreV1PatchNamespacedServiceProxyRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/namespaces/${params.path.namespace}/services/${params.path.name}/proxy`;
    return await this.patch<string>(path, null, null, opts);
  }
  async connectCoreV1GetNamespacedServiceProxyWithPath(params: ConnectCoreV1GetNamespacedServiceProxyWithPathRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/namespaces/${params.path.namespace}/services/${params.path.name}/proxy/${params.path.path}`;
    return await this.get<string>(path, null, null, opts);
  }
  async connectCoreV1PostNamespacedServiceProxyWithPath(params: ConnectCoreV1PostNamespacedServiceProxyWithPathRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/namespaces/${params.path.namespace}/services/${params.path.name}/proxy/${params.path.path}`;
    return await this.post<string>(path, null, null, opts);
  }
  async connectCoreV1PutNamespacedServiceProxyWithPath(params: ConnectCoreV1PutNamespacedServiceProxyWithPathRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/namespaces/${params.path.namespace}/services/${params.path.name}/proxy/${params.path.path}`;
    return await this.put<string>(path, null, null, opts);
  }
  async connectCoreV1DeleteNamespacedServiceProxyWithPath(params: ConnectCoreV1DeleteNamespacedServiceProxyWithPathRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/namespaces/${params.path.namespace}/services/${params.path.name}/proxy/${params.path.path}`;
    return await this.delete<string>(path, null, null, opts);
  }
  async connectCoreV1PatchNamespacedServiceProxyWithPath(params: ConnectCoreV1PatchNamespacedServiceProxyWithPathRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/namespaces/${params.path.namespace}/services/${params.path.name}/proxy/${params.path.path}`;
    return await this.patch<string>(path, null, null, opts);
  }
  async readCoreV1NamespacedServiceStatus(params: ReadCoreV1NamespacedServiceStatusRequest, opts?: APIClientRequestOpts): Promise<Service> {
    const path = `/api/v1/namespaces/${params.path.namespace}/services/${params.path.name}/status`;
    return await this.get<Service>(path, null, null, opts);
  }
  async replaceCoreV1NamespacedServiceStatus(params: ReplaceCoreV1NamespacedServiceStatusRequest, opts?: APIClientRequestOpts): Promise<Service> {
    const path = `/api/v1/namespaces/${params.path.namespace}/services/${params.path.name}/status`;
    return await this.put<Service>(path, params.query, params.body, opts);
  }
  async patchCoreV1NamespacedServiceStatus(params: PatchCoreV1NamespacedServiceStatusRequest, opts?: APIClientRequestOpts): Promise<Service> {
    const path = `/api/v1/namespaces/${params.path.namespace}/services/${params.path.name}/status`;
    return await this.patch<Service>(path, params.query, params.body, opts);
  }
  async readCoreV1Namespace(params: ReadCoreV1NamespaceRequest, opts?: APIClientRequestOpts): Promise<Namespace> {
    const path = `/api/v1/namespaces/${params.path.name}`;
    return await this.get<Namespace>(path, null, null, opts);
  }
  async replaceCoreV1Namespace(params: ReplaceCoreV1NamespaceRequest, opts?: APIClientRequestOpts): Promise<Namespace> {
    const path = `/api/v1/namespaces/${params.path.name}`;
    return await this.put<Namespace>(path, params.query, params.body, opts);
  }
  async deleteCoreV1Namespace(params: DeleteCoreV1NamespaceRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/api/v1/namespaces/${params.path.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchCoreV1Namespace(params: PatchCoreV1NamespaceRequest, opts?: APIClientRequestOpts): Promise<Namespace> {
    const path = `/api/v1/namespaces/${params.path.name}`;
    return await this.patch<Namespace>(path, params.query, params.body, opts);
  }
  async replaceCoreV1NamespaceFinalize(params: ReplaceCoreV1NamespaceFinalizeRequest, opts?: APIClientRequestOpts): Promise<Namespace> {
    const path = `/api/v1/namespaces/${params.path.name}/finalize`;
    return await this.put<Namespace>(path, null, params.body, opts);
  }
  async readCoreV1NamespaceStatus(params: ReadCoreV1NamespaceStatusRequest, opts?: APIClientRequestOpts): Promise<Namespace> {
    const path = `/api/v1/namespaces/${params.path.name}/status`;
    return await this.get<Namespace>(path, null, null, opts);
  }
  async replaceCoreV1NamespaceStatus(params: ReplaceCoreV1NamespaceStatusRequest, opts?: APIClientRequestOpts): Promise<Namespace> {
    const path = `/api/v1/namespaces/${params.path.name}/status`;
    return await this.put<Namespace>(path, params.query, params.body, opts);
  }
  async patchCoreV1NamespaceStatus(params: PatchCoreV1NamespaceStatusRequest, opts?: APIClientRequestOpts): Promise<Namespace> {
    const path = `/api/v1/namespaces/${params.path.name}/status`;
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
    const path = `/api/v1/nodes/${params.path.name}`;
    return await this.get<Node>(path, null, null, opts);
  }
  async replaceCoreV1Node(params: ReplaceCoreV1NodeRequest, opts?: APIClientRequestOpts): Promise<Node> {
    const path = `/api/v1/nodes/${params.path.name}`;
    return await this.put<Node>(path, params.query, params.body, opts);
  }
  async deleteCoreV1Node(params: DeleteCoreV1NodeRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/api/v1/nodes/${params.path.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchCoreV1Node(params: PatchCoreV1NodeRequest, opts?: APIClientRequestOpts): Promise<Node> {
    const path = `/api/v1/nodes/${params.path.name}`;
    return await this.patch<Node>(path, params.query, params.body, opts);
  }
  async connectCoreV1GetNodeProxy(params: ConnectCoreV1GetNodeProxyRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/nodes/${params.path.name}/proxy`;
    return await this.get<string>(path, null, null, opts);
  }
  async connectCoreV1PostNodeProxy(params: ConnectCoreV1PostNodeProxyRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/nodes/${params.path.name}/proxy`;
    return await this.post<string>(path, null, null, opts);
  }
  async connectCoreV1PutNodeProxy(params: ConnectCoreV1PutNodeProxyRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/nodes/${params.path.name}/proxy`;
    return await this.put<string>(path, null, null, opts);
  }
  async connectCoreV1DeleteNodeProxy(params: ConnectCoreV1DeleteNodeProxyRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/nodes/${params.path.name}/proxy`;
    return await this.delete<string>(path, null, null, opts);
  }
  async connectCoreV1PatchNodeProxy(params: ConnectCoreV1PatchNodeProxyRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/nodes/${params.path.name}/proxy`;
    return await this.patch<string>(path, null, null, opts);
  }
  async connectCoreV1GetNodeProxyWithPath(params: ConnectCoreV1GetNodeProxyWithPathRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/nodes/${params.path.name}/proxy/${params.path.path}`;
    return await this.get<string>(path, null, null, opts);
  }
  async connectCoreV1PostNodeProxyWithPath(params: ConnectCoreV1PostNodeProxyWithPathRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/nodes/${params.path.name}/proxy/${params.path.path}`;
    return await this.post<string>(path, null, null, opts);
  }
  async connectCoreV1PutNodeProxyWithPath(params: ConnectCoreV1PutNodeProxyWithPathRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/nodes/${params.path.name}/proxy/${params.path.path}`;
    return await this.put<string>(path, null, null, opts);
  }
  async connectCoreV1DeleteNodeProxyWithPath(params: ConnectCoreV1DeleteNodeProxyWithPathRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/nodes/${params.path.name}/proxy/${params.path.path}`;
    return await this.delete<string>(path, null, null, opts);
  }
  async connectCoreV1PatchNodeProxyWithPath(params: ConnectCoreV1PatchNodeProxyWithPathRequest, opts?: APIClientRequestOpts): Promise<string> {
    const path = `/api/v1/nodes/${params.path.name}/proxy/${params.path.path}`;
    return await this.patch<string>(path, null, null, opts);
  }
  async readCoreV1NodeStatus(params: ReadCoreV1NodeStatusRequest, opts?: APIClientRequestOpts): Promise<Node> {
    const path = `/api/v1/nodes/${params.path.name}/status`;
    return await this.get<Node>(path, null, null, opts);
  }
  async replaceCoreV1NodeStatus(params: ReplaceCoreV1NodeStatusRequest, opts?: APIClientRequestOpts): Promise<Node> {
    const path = `/api/v1/nodes/${params.path.name}/status`;
    return await this.put<Node>(path, params.query, params.body, opts);
  }
  async patchCoreV1NodeStatus(params: PatchCoreV1NodeStatusRequest, opts?: APIClientRequestOpts): Promise<Node> {
    const path = `/api/v1/nodes/${params.path.name}/status`;
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
    const path = `/api/v1/persistentvolumes/${params.path.name}`;
    return await this.get<PersistentVolume>(path, null, null, opts);
  }
  async replaceCoreV1PersistentVolume(params: ReplaceCoreV1PersistentVolumeRequest, opts?: APIClientRequestOpts): Promise<PersistentVolume> {
    const path = `/api/v1/persistentvolumes/${params.path.name}`;
    return await this.put<PersistentVolume>(path, params.query, params.body, opts);
  }
  async deleteCoreV1PersistentVolume(params: DeleteCoreV1PersistentVolumeRequest, opts?: APIClientRequestOpts): Promise<PersistentVolume> {
    const path = `/api/v1/persistentvolumes/${params.path.name}`;
    return await this.delete<PersistentVolume>(path, params.query, null, opts);
  }
  async patchCoreV1PersistentVolume(params: PatchCoreV1PersistentVolumeRequest, opts?: APIClientRequestOpts): Promise<PersistentVolume> {
    const path = `/api/v1/persistentvolumes/${params.path.name}`;
    return await this.patch<PersistentVolume>(path, params.query, params.body, opts);
  }
  async readCoreV1PersistentVolumeStatus(params: ReadCoreV1PersistentVolumeStatusRequest, opts?: APIClientRequestOpts): Promise<PersistentVolume> {
    const path = `/api/v1/persistentvolumes/${params.path.name}/status`;
    return await this.get<PersistentVolume>(path, null, null, opts);
  }
  async replaceCoreV1PersistentVolumeStatus(params: ReplaceCoreV1PersistentVolumeStatusRequest, opts?: APIClientRequestOpts): Promise<PersistentVolume> {
    const path = `/api/v1/persistentvolumes/${params.path.name}/status`;
    return await this.put<PersistentVolume>(path, params.query, params.body, opts);
  }
  async patchCoreV1PersistentVolumeStatus(params: PatchCoreV1PersistentVolumeStatusRequest, opts?: APIClientRequestOpts): Promise<PersistentVolume> {
    const path = `/api/v1/persistentvolumes/${params.path.name}/status`;
    return await this.patch<PersistentVolume>(path, params.query, params.body, opts);
  }
  async getPods(params: ListCoreV1PodForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<PodList> {
    const path = `/api/v1/pods`;
    return await this.get<PodList>(path, null, null, opts);
  }
  async listPods(params: ListCoreV1PodForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<PodList> {
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
    const path = `/api/v1/watch/namespaces/${params.path.namespace}/configmaps`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1NamespacedConfigMap(params: WatchCoreV1NamespacedConfigMapRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/namespaces/${params.path.namespace}/configmaps/${params.path.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1NamespacedEndpointsList(params: WatchCoreV1NamespacedEndpointsListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/namespaces/${params.path.namespace}/endpoints`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1NamespacedEndpoints(params: WatchCoreV1NamespacedEndpointsRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/namespaces/${params.path.namespace}/endpoints/${params.path.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1NamespacedEventList(params: WatchCoreV1NamespacedEventListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/namespaces/${params.path.namespace}/events`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1NamespacedEvent(params: WatchCoreV1NamespacedEventRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/namespaces/${params.path.namespace}/events/${params.path.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1NamespacedLimitRangeList(params: WatchCoreV1NamespacedLimitRangeListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/namespaces/${params.path.namespace}/limitranges`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1NamespacedLimitRange(params: WatchCoreV1NamespacedLimitRangeRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/namespaces/${params.path.namespace}/limitranges/${params.path.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1NamespacedPersistentVolumeClaimList(params: WatchCoreV1NamespacedPersistentVolumeClaimListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/namespaces/${params.path.namespace}/persistentvolumeclaims`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1NamespacedPersistentVolumeClaim(params: WatchCoreV1NamespacedPersistentVolumeClaimRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/namespaces/${params.path.namespace}/persistentvolumeclaims/${params.path.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1NamespacedPodList(params: WatchCoreV1NamespacedPodListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/namespaces/${params.path.namespace}/pods`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1NamespacedPod(params: WatchCoreV1NamespacedPodRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/namespaces/${params.path.namespace}/pods/${params.path.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1NamespacedPodTemplateList(params: WatchCoreV1NamespacedPodTemplateListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/namespaces/${params.path.namespace}/podtemplates`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1NamespacedPodTemplate(params: WatchCoreV1NamespacedPodTemplateRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/namespaces/${params.path.namespace}/podtemplates/${params.path.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1NamespacedReplicationControllerList(params: WatchCoreV1NamespacedReplicationControllerListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/namespaces/${params.path.namespace}/replicationcontrollers`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1NamespacedReplicationController(params: WatchCoreV1NamespacedReplicationControllerRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/namespaces/${params.path.namespace}/replicationcontrollers/${params.path.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1NamespacedResourceQuotaList(params: WatchCoreV1NamespacedResourceQuotaListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/namespaces/${params.path.namespace}/resourcequotas`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1NamespacedResourceQuota(params: WatchCoreV1NamespacedResourceQuotaRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/namespaces/${params.path.namespace}/resourcequotas/${params.path.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1NamespacedSecretList(params: WatchCoreV1NamespacedSecretListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/namespaces/${params.path.namespace}/secrets`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1NamespacedSecret(params: WatchCoreV1NamespacedSecretRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/namespaces/${params.path.namespace}/secrets/${params.path.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1NamespacedServiceAccountList(params: WatchCoreV1NamespacedServiceAccountListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/namespaces/${params.path.namespace}/serviceaccounts`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1NamespacedServiceAccount(params: WatchCoreV1NamespacedServiceAccountRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/namespaces/${params.path.namespace}/serviceaccounts/${params.path.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1NamespacedServiceList(params: WatchCoreV1NamespacedServiceListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/namespaces/${params.path.namespace}/services`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1NamespacedService(params: WatchCoreV1NamespacedServiceRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/namespaces/${params.path.namespace}/services/${params.path.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1Namespace(params: WatchCoreV1NamespaceRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/namespaces/${params.path.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1NodeList(params: WatchCoreV1NodeListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/nodes`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoreV1Node(params: WatchCoreV1NodeRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/api/v1/watch/nodes/${params.path.name}`;
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
    const path = `/api/v1/watch/persistentvolumes/${params.path.name}`;
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
    const path = `/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/${params.path.name}`;
    return await this.get<MutatingWebhookConfiguration>(path, null, null, opts);
  }
  async replaceAdmissionregistrationV1MutatingWebhookConfiguration(params: ReplaceAdmissionregistrationV1MutatingWebhookConfigurationRequest, opts?: APIClientRequestOpts): Promise<MutatingWebhookConfiguration> {
    const path = `/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/${params.path.name}`;
    return await this.put<MutatingWebhookConfiguration>(path, params.query, params.body, opts);
  }
  async deleteAdmissionregistrationV1MutatingWebhookConfiguration(params: DeleteAdmissionregistrationV1MutatingWebhookConfigurationRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/${params.path.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchAdmissionregistrationV1MutatingWebhookConfiguration(params: PatchAdmissionregistrationV1MutatingWebhookConfigurationRequest, opts?: APIClientRequestOpts): Promise<MutatingWebhookConfiguration> {
    const path = `/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/${params.path.name}`;
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
    const path = `/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/${params.path.name}`;
    return await this.get<ValidatingWebhookConfiguration>(path, null, null, opts);
  }
  async replaceAdmissionregistrationV1ValidatingWebhookConfiguration(params: ReplaceAdmissionregistrationV1ValidatingWebhookConfigurationRequest, opts?: APIClientRequestOpts): Promise<ValidatingWebhookConfiguration> {
    const path = `/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/${params.path.name}`;
    return await this.put<ValidatingWebhookConfiguration>(path, params.query, params.body, opts);
  }
  async deleteAdmissionregistrationV1ValidatingWebhookConfiguration(params: DeleteAdmissionregistrationV1ValidatingWebhookConfigurationRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/${params.path.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchAdmissionregistrationV1ValidatingWebhookConfiguration(params: PatchAdmissionregistrationV1ValidatingWebhookConfigurationRequest, opts?: APIClientRequestOpts): Promise<ValidatingWebhookConfiguration> {
    const path = `/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/${params.path.name}`;
    return await this.patch<ValidatingWebhookConfiguration>(path, params.query, params.body, opts);
  }
  async watchAdmissionregistrationV1MutatingWebhookConfigurationList(params: WatchAdmissionregistrationV1MutatingWebhookConfigurationListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/admissionregistration.k8s.io/v1/watch/mutatingwebhookconfigurations`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchAdmissionregistrationV1MutatingWebhookConfiguration(params: WatchAdmissionregistrationV1MutatingWebhookConfigurationRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/admissionregistration.k8s.io/v1/watch/mutatingwebhookconfigurations/${params.path.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchAdmissionregistrationV1ValidatingWebhookConfigurationList(params: WatchAdmissionregistrationV1ValidatingWebhookConfigurationListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/admissionregistration.k8s.io/v1/watch/validatingwebhookconfigurations`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchAdmissionregistrationV1ValidatingWebhookConfiguration(params: WatchAdmissionregistrationV1ValidatingWebhookConfigurationRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/admissionregistration.k8s.io/v1/watch/validatingwebhookconfigurations/${params.path.name}`;
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
    const path = `/apis/apiextensions.k8s.io/v1/customresourcedefinitions/${params.path.name}`;
    return await this.get<CustomResourceDefinition>(path, null, null, opts);
  }
  async replaceApiextensionsV1CustomResourceDefinition(params: ReplaceApiextensionsV1CustomResourceDefinitionRequest, opts?: APIClientRequestOpts): Promise<CustomResourceDefinition> {
    const path = `/apis/apiextensions.k8s.io/v1/customresourcedefinitions/${params.path.name}`;
    return await this.put<CustomResourceDefinition>(path, params.query, params.body, opts);
  }
  async deleteApiextensionsV1CustomResourceDefinition(params: DeleteApiextensionsV1CustomResourceDefinitionRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/apiextensions.k8s.io/v1/customresourcedefinitions/${params.path.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchApiextensionsV1CustomResourceDefinition(params: PatchApiextensionsV1CustomResourceDefinitionRequest, opts?: APIClientRequestOpts): Promise<CustomResourceDefinition> {
    const path = `/apis/apiextensions.k8s.io/v1/customresourcedefinitions/${params.path.name}`;
    return await this.patch<CustomResourceDefinition>(path, params.query, params.body, opts);
  }
  async readApiextensionsV1CustomResourceDefinitionStatus(params: ReadApiextensionsV1CustomResourceDefinitionStatusRequest, opts?: APIClientRequestOpts): Promise<CustomResourceDefinition> {
    const path = `/apis/apiextensions.k8s.io/v1/customresourcedefinitions/${params.path.name}/status`;
    return await this.get<CustomResourceDefinition>(path, null, null, opts);
  }
  async replaceApiextensionsV1CustomResourceDefinitionStatus(params: ReplaceApiextensionsV1CustomResourceDefinitionStatusRequest, opts?: APIClientRequestOpts): Promise<CustomResourceDefinition> {
    const path = `/apis/apiextensions.k8s.io/v1/customresourcedefinitions/${params.path.name}/status`;
    return await this.put<CustomResourceDefinition>(path, params.query, params.body, opts);
  }
  async patchApiextensionsV1CustomResourceDefinitionStatus(params: PatchApiextensionsV1CustomResourceDefinitionStatusRequest, opts?: APIClientRequestOpts): Promise<CustomResourceDefinition> {
    const path = `/apis/apiextensions.k8s.io/v1/customresourcedefinitions/${params.path.name}/status`;
    return await this.patch<CustomResourceDefinition>(path, params.query, params.body, opts);
  }
  async watchApiextensionsV1CustomResourceDefinitionList(params: WatchApiextensionsV1CustomResourceDefinitionListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/apiextensions.k8s.io/v1/watch/customresourcedefinitions`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchApiextensionsV1CustomResourceDefinition(params: WatchApiextensionsV1CustomResourceDefinitionRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/apiextensions.k8s.io/v1/watch/customresourcedefinitions/${params.path.name}`;
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
    const path = `/apis/apiregistration.k8s.io/v1/apiservices/${params.path.name}`;
    return await this.get<APIService>(path, null, null, opts);
  }
  async replaceApiregistrationV1APIService(params: ReplaceApiregistrationV1APIServiceRequest, opts?: APIClientRequestOpts): Promise<APIService> {
    const path = `/apis/apiregistration.k8s.io/v1/apiservices/${params.path.name}`;
    return await this.put<APIService>(path, params.query, params.body, opts);
  }
  async deleteApiregistrationV1APIService(params: DeleteApiregistrationV1APIServiceRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/apiregistration.k8s.io/v1/apiservices/${params.path.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchApiregistrationV1APIService(params: PatchApiregistrationV1APIServiceRequest, opts?: APIClientRequestOpts): Promise<APIService> {
    const path = `/apis/apiregistration.k8s.io/v1/apiservices/${params.path.name}`;
    return await this.patch<APIService>(path, params.query, params.body, opts);
  }
  async readApiregistrationV1APIServiceStatus(params: ReadApiregistrationV1APIServiceStatusRequest, opts?: APIClientRequestOpts): Promise<APIService> {
    const path = `/apis/apiregistration.k8s.io/v1/apiservices/${params.path.name}/status`;
    return await this.get<APIService>(path, null, null, opts);
  }
  async replaceApiregistrationV1APIServiceStatus(params: ReplaceApiregistrationV1APIServiceStatusRequest, opts?: APIClientRequestOpts): Promise<APIService> {
    const path = `/apis/apiregistration.k8s.io/v1/apiservices/${params.path.name}/status`;
    return await this.put<APIService>(path, params.query, params.body, opts);
  }
  async patchApiregistrationV1APIServiceStatus(params: PatchApiregistrationV1APIServiceStatusRequest, opts?: APIClientRequestOpts): Promise<APIService> {
    const path = `/apis/apiregistration.k8s.io/v1/apiservices/${params.path.name}/status`;
    return await this.patch<APIService>(path, params.query, params.body, opts);
  }
  async watchApiregistrationV1APIServiceList(params: WatchApiregistrationV1APIServiceListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/apiregistration.k8s.io/v1/watch/apiservices`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchApiregistrationV1APIService(params: WatchApiregistrationV1APIServiceRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/apiregistration.k8s.io/v1/watch/apiservices/${params.path.name}`;
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
    const path = `/apis/apps/v1/namespaces/${params.path.namespace}/controllerrevisions`;
    return await this.get<ControllerRevisionList>(path, params.query, null, opts);
  }
  async createAppsV1NamespacedControllerRevision(params: CreateAppsV1NamespacedControllerRevisionRequest, opts?: APIClientRequestOpts): Promise<ControllerRevision> {
    const path = `/apis/apps/v1/namespaces/${params.path.namespace}/controllerrevisions`;
    return await this.post<ControllerRevision>(path, params.query, params.body, opts);
  }
  async deleteAppsV1CollectionNamespacedControllerRevision(params: DeleteAppsV1CollectionNamespacedControllerRevisionRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/apps/v1/namespaces/${params.path.namespace}/controllerrevisions`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readAppsV1NamespacedControllerRevision(params: ReadAppsV1NamespacedControllerRevisionRequest, opts?: APIClientRequestOpts): Promise<ControllerRevision> {
    const path = `/apis/apps/v1/namespaces/${params.path.namespace}/controllerrevisions/${params.path.name}`;
    return await this.get<ControllerRevision>(path, null, null, opts);
  }
  async replaceAppsV1NamespacedControllerRevision(params: ReplaceAppsV1NamespacedControllerRevisionRequest, opts?: APIClientRequestOpts): Promise<ControllerRevision> {
    const path = `/apis/apps/v1/namespaces/${params.path.namespace}/controllerrevisions/${params.path.name}`;
    return await this.put<ControllerRevision>(path, params.query, params.body, opts);
  }
  async deleteAppsV1NamespacedControllerRevision(params: DeleteAppsV1NamespacedControllerRevisionRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/apps/v1/namespaces/${params.path.namespace}/controllerrevisions/${params.path.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchAppsV1NamespacedControllerRevision(params: PatchAppsV1NamespacedControllerRevisionRequest, opts?: APIClientRequestOpts): Promise<ControllerRevision> {
    const path = `/apis/apps/v1/namespaces/${params.path.namespace}/controllerrevisions/${params.path.name}`;
    return await this.patch<ControllerRevision>(path, params.query, params.body, opts);
  }
  async listAppsV1NamespacedDaemonSet(params: ListAppsV1NamespacedDaemonSetRequest, opts?: APIClientRequestOpts): Promise<DaemonSetList> {
    const path = `/apis/apps/v1/namespaces/${params.path.namespace}/daemonsets`;
    return await this.get<DaemonSetList>(path, params.query, null, opts);
  }
  async createAppsV1NamespacedDaemonSet(params: CreateAppsV1NamespacedDaemonSetRequest, opts?: APIClientRequestOpts): Promise<DaemonSet> {
    const path = `/apis/apps/v1/namespaces/${params.path.namespace}/daemonsets`;
    return await this.post<DaemonSet>(path, params.query, params.body, opts);
  }
  async deleteAppsV1CollectionNamespacedDaemonSet(params: DeleteAppsV1CollectionNamespacedDaemonSetRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/apps/v1/namespaces/${params.path.namespace}/daemonsets`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readAppsV1NamespacedDaemonSet(params: ReadAppsV1NamespacedDaemonSetRequest, opts?: APIClientRequestOpts): Promise<DaemonSet> {
    const path = `/apis/apps/v1/namespaces/${params.path.namespace}/daemonsets/${params.path.name}`;
    return await this.get<DaemonSet>(path, null, null, opts);
  }
  async replaceAppsV1NamespacedDaemonSet(params: ReplaceAppsV1NamespacedDaemonSetRequest, opts?: APIClientRequestOpts): Promise<DaemonSet> {
    const path = `/apis/apps/v1/namespaces/${params.path.namespace}/daemonsets/${params.path.name}`;
    return await this.put<DaemonSet>(path, params.query, params.body, opts);
  }
  async deleteAppsV1NamespacedDaemonSet(params: DeleteAppsV1NamespacedDaemonSetRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/apps/v1/namespaces/${params.path.namespace}/daemonsets/${params.path.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchAppsV1NamespacedDaemonSet(params: PatchAppsV1NamespacedDaemonSetRequest, opts?: APIClientRequestOpts): Promise<DaemonSet> {
    const path = `/apis/apps/v1/namespaces/${params.path.namespace}/daemonsets/${params.path.name}`;
    return await this.patch<DaemonSet>(path, params.query, params.body, opts);
  }
  async readAppsV1NamespacedDaemonSetStatus(params: ReadAppsV1NamespacedDaemonSetStatusRequest, opts?: APIClientRequestOpts): Promise<DaemonSet> {
    const path = `/apis/apps/v1/namespaces/${params.path.namespace}/daemonsets/${params.path.name}/status`;
    return await this.get<DaemonSet>(path, null, null, opts);
  }
  async replaceAppsV1NamespacedDaemonSetStatus(params: ReplaceAppsV1NamespacedDaemonSetStatusRequest, opts?: APIClientRequestOpts): Promise<DaemonSet> {
    const path = `/apis/apps/v1/namespaces/${params.path.namespace}/daemonsets/${params.path.name}/status`;
    return await this.put<DaemonSet>(path, params.query, params.body, opts);
  }
  async patchAppsV1NamespacedDaemonSetStatus(params: PatchAppsV1NamespacedDaemonSetStatusRequest, opts?: APIClientRequestOpts): Promise<DaemonSet> {
    const path = `/apis/apps/v1/namespaces/${params.path.namespace}/daemonsets/${params.path.name}/status`;
    return await this.patch<DaemonSet>(path, params.query, params.body, opts);
  }
  async listAppsV1NamespacedDeployment(params: ListAppsV1NamespacedDeploymentRequest, opts?: APIClientRequestOpts): Promise<DeploymentList> {
    const path = `/apis/apps/v1/namespaces/${params.path.namespace}/deployments`;
    return await this.get<DeploymentList>(path, params.query, null, opts);
  }
  async createAppsV1NamespacedDeployment(params: CreateAppsV1NamespacedDeploymentRequest, opts?: APIClientRequestOpts): Promise<Deployment> {
    const path = `/apis/apps/v1/namespaces/${params.path.namespace}/deployments`;
    return await this.post<Deployment>(path, params.query, params.body, opts);
  }
  async deleteAppsV1CollectionNamespacedDeployment(params: DeleteAppsV1CollectionNamespacedDeploymentRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/apps/v1/namespaces/${params.path.namespace}/deployments`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readAppsV1NamespacedDeployment(params: ReadAppsV1NamespacedDeploymentRequest, opts?: APIClientRequestOpts): Promise<Deployment> {
    const path = `/apis/apps/v1/namespaces/${params.path.namespace}/deployments/${params.path.name}`;
    return await this.get<Deployment>(path, null, null, opts);
  }
  async replaceAppsV1NamespacedDeployment(params: ReplaceAppsV1NamespacedDeploymentRequest, opts?: APIClientRequestOpts): Promise<Deployment> {
    const path = `/apis/apps/v1/namespaces/${params.path.namespace}/deployments/${params.path.name}`;
    return await this.put<Deployment>(path, params.query, params.body, opts);
  }
  async deleteAppsV1NamespacedDeployment(params: DeleteAppsV1NamespacedDeploymentRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/apps/v1/namespaces/${params.path.namespace}/deployments/${params.path.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchAppsV1NamespacedDeployment(params: PatchAppsV1NamespacedDeploymentRequest, opts?: APIClientRequestOpts): Promise<Deployment> {
    const path = `/apis/apps/v1/namespaces/${params.path.namespace}/deployments/${params.path.name}`;
    return await this.patch<Deployment>(path, params.query, params.body, opts);
  }
  async readAppsV1NamespacedDeploymentScale(params: ReadAppsV1NamespacedDeploymentScaleRequest, opts?: APIClientRequestOpts): Promise<Scale> {
    const path = `/apis/apps/v1/namespaces/${params.path.namespace}/deployments/${params.path.name}/scale`;
    return await this.get<Scale>(path, null, null, opts);
  }
  async replaceAppsV1NamespacedDeploymentScale(params: ReplaceAppsV1NamespacedDeploymentScaleRequest, opts?: APIClientRequestOpts): Promise<Scale> {
    const path = `/apis/apps/v1/namespaces/${params.path.namespace}/deployments/${params.path.name}/scale`;
    return await this.put<Scale>(path, params.query, params.body, opts);
  }
  async patchAppsV1NamespacedDeploymentScale(params: PatchAppsV1NamespacedDeploymentScaleRequest, opts?: APIClientRequestOpts): Promise<Scale> {
    const path = `/apis/apps/v1/namespaces/${params.path.namespace}/deployments/${params.path.name}/scale`;
    return await this.patch<Scale>(path, params.query, params.body, opts);
  }
  async readAppsV1NamespacedDeploymentStatus(params: ReadAppsV1NamespacedDeploymentStatusRequest, opts?: APIClientRequestOpts): Promise<Deployment> {
    const path = `/apis/apps/v1/namespaces/${params.path.namespace}/deployments/${params.path.name}/status`;
    return await this.get<Deployment>(path, null, null, opts);
  }
  async replaceAppsV1NamespacedDeploymentStatus(params: ReplaceAppsV1NamespacedDeploymentStatusRequest, opts?: APIClientRequestOpts): Promise<Deployment> {
    const path = `/apis/apps/v1/namespaces/${params.path.namespace}/deployments/${params.path.name}/status`;
    return await this.put<Deployment>(path, params.query, params.body, opts);
  }
  async patchAppsV1NamespacedDeploymentStatus(params: PatchAppsV1NamespacedDeploymentStatusRequest, opts?: APIClientRequestOpts): Promise<Deployment> {
    const path = `/apis/apps/v1/namespaces/${params.path.namespace}/deployments/${params.path.name}/status`;
    return await this.patch<Deployment>(path, params.query, params.body, opts);
  }
  async listAppsV1NamespacedReplicaSet(params: ListAppsV1NamespacedReplicaSetRequest, opts?: APIClientRequestOpts): Promise<ReplicaSetList> {
    const path = `/apis/apps/v1/namespaces/${params.path.namespace}/replicasets`;
    return await this.get<ReplicaSetList>(path, params.query, null, opts);
  }
  async createAppsV1NamespacedReplicaSet(params: CreateAppsV1NamespacedReplicaSetRequest, opts?: APIClientRequestOpts): Promise<ReplicaSet> {
    const path = `/apis/apps/v1/namespaces/${params.path.namespace}/replicasets`;
    return await this.post<ReplicaSet>(path, params.query, params.body, opts);
  }
  async deleteAppsV1CollectionNamespacedReplicaSet(params: DeleteAppsV1CollectionNamespacedReplicaSetRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/apps/v1/namespaces/${params.path.namespace}/replicasets`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readAppsV1NamespacedReplicaSet(params: ReadAppsV1NamespacedReplicaSetRequest, opts?: APIClientRequestOpts): Promise<ReplicaSet> {
    const path = `/apis/apps/v1/namespaces/${params.path.namespace}/replicasets/${params.path.name}`;
    return await this.get<ReplicaSet>(path, null, null, opts);
  }
  async replaceAppsV1NamespacedReplicaSet(params: ReplaceAppsV1NamespacedReplicaSetRequest, opts?: APIClientRequestOpts): Promise<ReplicaSet> {
    const path = `/apis/apps/v1/namespaces/${params.path.namespace}/replicasets/${params.path.name}`;
    return await this.put<ReplicaSet>(path, params.query, params.body, opts);
  }
  async deleteAppsV1NamespacedReplicaSet(params: DeleteAppsV1NamespacedReplicaSetRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/apps/v1/namespaces/${params.path.namespace}/replicasets/${params.path.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchAppsV1NamespacedReplicaSet(params: PatchAppsV1NamespacedReplicaSetRequest, opts?: APIClientRequestOpts): Promise<ReplicaSet> {
    const path = `/apis/apps/v1/namespaces/${params.path.namespace}/replicasets/${params.path.name}`;
    return await this.patch<ReplicaSet>(path, params.query, params.body, opts);
  }
  async readAppsV1NamespacedReplicaSetScale(params: ReadAppsV1NamespacedReplicaSetScaleRequest, opts?: APIClientRequestOpts): Promise<Scale> {
    const path = `/apis/apps/v1/namespaces/${params.path.namespace}/replicasets/${params.path.name}/scale`;
    return await this.get<Scale>(path, null, null, opts);
  }
  async replaceAppsV1NamespacedReplicaSetScale(params: ReplaceAppsV1NamespacedReplicaSetScaleRequest, opts?: APIClientRequestOpts): Promise<Scale> {
    const path = `/apis/apps/v1/namespaces/${params.path.namespace}/replicasets/${params.path.name}/scale`;
    return await this.put<Scale>(path, params.query, params.body, opts);
  }
  async patchAppsV1NamespacedReplicaSetScale(params: PatchAppsV1NamespacedReplicaSetScaleRequest, opts?: APIClientRequestOpts): Promise<Scale> {
    const path = `/apis/apps/v1/namespaces/${params.path.namespace}/replicasets/${params.path.name}/scale`;
    return await this.patch<Scale>(path, params.query, params.body, opts);
  }
  async readAppsV1NamespacedReplicaSetStatus(params: ReadAppsV1NamespacedReplicaSetStatusRequest, opts?: APIClientRequestOpts): Promise<ReplicaSet> {
    const path = `/apis/apps/v1/namespaces/${params.path.namespace}/replicasets/${params.path.name}/status`;
    return await this.get<ReplicaSet>(path, null, null, opts);
  }
  async replaceAppsV1NamespacedReplicaSetStatus(params: ReplaceAppsV1NamespacedReplicaSetStatusRequest, opts?: APIClientRequestOpts): Promise<ReplicaSet> {
    const path = `/apis/apps/v1/namespaces/${params.path.namespace}/replicasets/${params.path.name}/status`;
    return await this.put<ReplicaSet>(path, params.query, params.body, opts);
  }
  async patchAppsV1NamespacedReplicaSetStatus(params: PatchAppsV1NamespacedReplicaSetStatusRequest, opts?: APIClientRequestOpts): Promise<ReplicaSet> {
    const path = `/apis/apps/v1/namespaces/${params.path.namespace}/replicasets/${params.path.name}/status`;
    return await this.patch<ReplicaSet>(path, params.query, params.body, opts);
  }
  async listAppsV1NamespacedStatefulSet(params: ListAppsV1NamespacedStatefulSetRequest, opts?: APIClientRequestOpts): Promise<StatefulSetList> {
    const path = `/apis/apps/v1/namespaces/${params.path.namespace}/statefulsets`;
    return await this.get<StatefulSetList>(path, params.query, null, opts);
  }
  async createAppsV1NamespacedStatefulSet(params: CreateAppsV1NamespacedStatefulSetRequest, opts?: APIClientRequestOpts): Promise<StatefulSet> {
    const path = `/apis/apps/v1/namespaces/${params.path.namespace}/statefulsets`;
    return await this.post<StatefulSet>(path, params.query, params.body, opts);
  }
  async deleteAppsV1CollectionNamespacedStatefulSet(params: DeleteAppsV1CollectionNamespacedStatefulSetRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/apps/v1/namespaces/${params.path.namespace}/statefulsets`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readAppsV1NamespacedStatefulSet(params: ReadAppsV1NamespacedStatefulSetRequest, opts?: APIClientRequestOpts): Promise<StatefulSet> {
    const path = `/apis/apps/v1/namespaces/${params.path.namespace}/statefulsets/${params.path.name}`;
    return await this.get<StatefulSet>(path, null, null, opts);
  }
  async replaceAppsV1NamespacedStatefulSet(params: ReplaceAppsV1NamespacedStatefulSetRequest, opts?: APIClientRequestOpts): Promise<StatefulSet> {
    const path = `/apis/apps/v1/namespaces/${params.path.namespace}/statefulsets/${params.path.name}`;
    return await this.put<StatefulSet>(path, params.query, params.body, opts);
  }
  async deleteAppsV1NamespacedStatefulSet(params: DeleteAppsV1NamespacedStatefulSetRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/apps/v1/namespaces/${params.path.namespace}/statefulsets/${params.path.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchAppsV1NamespacedStatefulSet(params: PatchAppsV1NamespacedStatefulSetRequest, opts?: APIClientRequestOpts): Promise<StatefulSet> {
    const path = `/apis/apps/v1/namespaces/${params.path.namespace}/statefulsets/${params.path.name}`;
    return await this.patch<StatefulSet>(path, params.query, params.body, opts);
  }
  async readAppsV1NamespacedStatefulSetScale(params: ReadAppsV1NamespacedStatefulSetScaleRequest, opts?: APIClientRequestOpts): Promise<Scale> {
    const path = `/apis/apps/v1/namespaces/${params.path.namespace}/statefulsets/${params.path.name}/scale`;
    return await this.get<Scale>(path, null, null, opts);
  }
  async replaceAppsV1NamespacedStatefulSetScale(params: ReplaceAppsV1NamespacedStatefulSetScaleRequest, opts?: APIClientRequestOpts): Promise<Scale> {
    const path = `/apis/apps/v1/namespaces/${params.path.namespace}/statefulsets/${params.path.name}/scale`;
    return await this.put<Scale>(path, params.query, params.body, opts);
  }
  async patchAppsV1NamespacedStatefulSetScale(params: PatchAppsV1NamespacedStatefulSetScaleRequest, opts?: APIClientRequestOpts): Promise<Scale> {
    const path = `/apis/apps/v1/namespaces/${params.path.namespace}/statefulsets/${params.path.name}/scale`;
    return await this.patch<Scale>(path, params.query, params.body, opts);
  }
  async readAppsV1NamespacedStatefulSetStatus(params: ReadAppsV1NamespacedStatefulSetStatusRequest, opts?: APIClientRequestOpts): Promise<StatefulSet> {
    const path = `/apis/apps/v1/namespaces/${params.path.namespace}/statefulsets/${params.path.name}/status`;
    return await this.get<StatefulSet>(path, null, null, opts);
  }
  async replaceAppsV1NamespacedStatefulSetStatus(params: ReplaceAppsV1NamespacedStatefulSetStatusRequest, opts?: APIClientRequestOpts): Promise<StatefulSet> {
    const path = `/apis/apps/v1/namespaces/${params.path.namespace}/statefulsets/${params.path.name}/status`;
    return await this.put<StatefulSet>(path, params.query, params.body, opts);
  }
  async patchAppsV1NamespacedStatefulSetStatus(params: PatchAppsV1NamespacedStatefulSetStatusRequest, opts?: APIClientRequestOpts): Promise<StatefulSet> {
    const path = `/apis/apps/v1/namespaces/${params.path.namespace}/statefulsets/${params.path.name}/status`;
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
    const path = `/apis/apps/v1/watch/namespaces/${params.path.namespace}/controllerrevisions`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchAppsV1NamespacedControllerRevision(params: WatchAppsV1NamespacedControllerRevisionRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/apps/v1/watch/namespaces/${params.path.namespace}/controllerrevisions/${params.path.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchAppsV1NamespacedDaemonSetList(params: WatchAppsV1NamespacedDaemonSetListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/apps/v1/watch/namespaces/${params.path.namespace}/daemonsets`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchAppsV1NamespacedDaemonSet(params: WatchAppsV1NamespacedDaemonSetRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/apps/v1/watch/namespaces/${params.path.namespace}/daemonsets/${params.path.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchAppsV1NamespacedDeploymentList(params: WatchAppsV1NamespacedDeploymentListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/apps/v1/watch/namespaces/${params.path.namespace}/deployments`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchAppsV1NamespacedDeployment(params: WatchAppsV1NamespacedDeploymentRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/apps/v1/watch/namespaces/${params.path.namespace}/deployments/${params.path.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchAppsV1NamespacedReplicaSetList(params: WatchAppsV1NamespacedReplicaSetListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/apps/v1/watch/namespaces/${params.path.namespace}/replicasets`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchAppsV1NamespacedReplicaSet(params: WatchAppsV1NamespacedReplicaSetRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/apps/v1/watch/namespaces/${params.path.namespace}/replicasets/${params.path.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchAppsV1NamespacedStatefulSetList(params: WatchAppsV1NamespacedStatefulSetListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/apps/v1/watch/namespaces/${params.path.namespace}/statefulsets`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchAppsV1NamespacedStatefulSet(params: WatchAppsV1NamespacedStatefulSetRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/apps/v1/watch/namespaces/${params.path.namespace}/statefulsets/${params.path.name}`;
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
    const path = `/apis/authorization.k8s.io/v1/namespaces/${params.path.namespace}/localsubjectaccessreviews`;
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
    const path = `/apis/autoscaling/v1/namespaces/${params.path.namespace}/horizontalpodautoscalers`;
    return await this.get<HorizontalPodAutoscalerList>(path, params.query, null, opts);
  }
  async createAutoscalingV1NamespacedHorizontalPodAutoscaler(params: CreateAutoscalingV1NamespacedHorizontalPodAutoscalerRequest, opts?: APIClientRequestOpts): Promise<HorizontalPodAutoscaler> {
    const path = `/apis/autoscaling/v1/namespaces/${params.path.namespace}/horizontalpodautoscalers`;
    return await this.post<HorizontalPodAutoscaler>(path, params.query, params.body, opts);
  }
  async deleteAutoscalingV1CollectionNamespacedHorizontalPodAutoscaler(params: DeleteAutoscalingV1CollectionNamespacedHorizontalPodAutoscalerRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/autoscaling/v1/namespaces/${params.path.namespace}/horizontalpodautoscalers`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readAutoscalingV1NamespacedHorizontalPodAutoscaler(params: ReadAutoscalingV1NamespacedHorizontalPodAutoscalerRequest, opts?: APIClientRequestOpts): Promise<HorizontalPodAutoscaler> {
    const path = `/apis/autoscaling/v1/namespaces/${params.path.namespace}/horizontalpodautoscalers/${params.path.name}`;
    return await this.get<HorizontalPodAutoscaler>(path, null, null, opts);
  }
  async replaceAutoscalingV1NamespacedHorizontalPodAutoscaler(params: ReplaceAutoscalingV1NamespacedHorizontalPodAutoscalerRequest, opts?: APIClientRequestOpts): Promise<HorizontalPodAutoscaler> {
    const path = `/apis/autoscaling/v1/namespaces/${params.path.namespace}/horizontalpodautoscalers/${params.path.name}`;
    return await this.put<HorizontalPodAutoscaler>(path, params.query, params.body, opts);
  }
  async deleteAutoscalingV1NamespacedHorizontalPodAutoscaler(params: DeleteAutoscalingV1NamespacedHorizontalPodAutoscalerRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/autoscaling/v1/namespaces/${params.path.namespace}/horizontalpodautoscalers/${params.path.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchAutoscalingV1NamespacedHorizontalPodAutoscaler(params: PatchAutoscalingV1NamespacedHorizontalPodAutoscalerRequest, opts?: APIClientRequestOpts): Promise<HorizontalPodAutoscaler> {
    const path = `/apis/autoscaling/v1/namespaces/${params.path.namespace}/horizontalpodautoscalers/${params.path.name}`;
    return await this.patch<HorizontalPodAutoscaler>(path, params.query, params.body, opts);
  }
  async readAutoscalingV1NamespacedHorizontalPodAutoscalerStatus(params: ReadAutoscalingV1NamespacedHorizontalPodAutoscalerStatusRequest, opts?: APIClientRequestOpts): Promise<HorizontalPodAutoscaler> {
    const path = `/apis/autoscaling/v1/namespaces/${params.path.namespace}/horizontalpodautoscalers/${params.path.name}/status`;
    return await this.get<HorizontalPodAutoscaler>(path, null, null, opts);
  }
  async replaceAutoscalingV1NamespacedHorizontalPodAutoscalerStatus(params: ReplaceAutoscalingV1NamespacedHorizontalPodAutoscalerStatusRequest, opts?: APIClientRequestOpts): Promise<HorizontalPodAutoscaler> {
    const path = `/apis/autoscaling/v1/namespaces/${params.path.namespace}/horizontalpodautoscalers/${params.path.name}/status`;
    return await this.put<HorizontalPodAutoscaler>(path, params.query, params.body, opts);
  }
  async patchAutoscalingV1NamespacedHorizontalPodAutoscalerStatus(params: PatchAutoscalingV1NamespacedHorizontalPodAutoscalerStatusRequest, opts?: APIClientRequestOpts): Promise<HorizontalPodAutoscaler> {
    const path = `/apis/autoscaling/v1/namespaces/${params.path.namespace}/horizontalpodautoscalers/${params.path.name}/status`;
    return await this.patch<HorizontalPodAutoscaler>(path, params.query, params.body, opts);
  }
  async watchAutoscalingV1HorizontalPodAutoscalerListForAllNamespaces(params: WatchAutoscalingV1HorizontalPodAutoscalerListForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/autoscaling/v1/watch/horizontalpodautoscalers`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchAutoscalingV1NamespacedHorizontalPodAutoscalerList(params: WatchAutoscalingV1NamespacedHorizontalPodAutoscalerListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/autoscaling/v1/watch/namespaces/${params.path.namespace}/horizontalpodautoscalers`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchAutoscalingV1NamespacedHorizontalPodAutoscaler(params: WatchAutoscalingV1NamespacedHorizontalPodAutoscalerRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/autoscaling/v1/watch/namespaces/${params.path.namespace}/horizontalpodautoscalers/${params.path.name}`;
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
    const path = `/apis/autoscaling/v2beta2/namespaces/${params.path.namespace}/horizontalpodautoscalers`;
    return await this.get<HorizontalPodAutoscalerList>(path, params.query, null, opts);
  }
  async createAutoscalingV2beta2NamespacedHorizontalPodAutoscaler(params: CreateAutoscalingV2beta2NamespacedHorizontalPodAutoscalerRequest, opts?: APIClientRequestOpts): Promise<HorizontalPodAutoscaler> {
    const path = `/apis/autoscaling/v2beta2/namespaces/${params.path.namespace}/horizontalpodautoscalers`;
    return await this.post<HorizontalPodAutoscaler>(path, params.query, params.body, opts);
  }
  async deleteAutoscalingV2beta2CollectionNamespacedHorizontalPodAutoscaler(params: DeleteAutoscalingV2beta2CollectionNamespacedHorizontalPodAutoscalerRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/autoscaling/v2beta2/namespaces/${params.path.namespace}/horizontalpodautoscalers`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readAutoscalingV2beta2NamespacedHorizontalPodAutoscaler(params: ReadAutoscalingV2beta2NamespacedHorizontalPodAutoscalerRequest, opts?: APIClientRequestOpts): Promise<HorizontalPodAutoscaler> {
    const path = `/apis/autoscaling/v2beta2/namespaces/${params.path.namespace}/horizontalpodautoscalers/${params.path.name}`;
    return await this.get<HorizontalPodAutoscaler>(path, null, null, opts);
  }
  async replaceAutoscalingV2beta2NamespacedHorizontalPodAutoscaler(params: ReplaceAutoscalingV2beta2NamespacedHorizontalPodAutoscalerRequest, opts?: APIClientRequestOpts): Promise<HorizontalPodAutoscaler> {
    const path = `/apis/autoscaling/v2beta2/namespaces/${params.path.namespace}/horizontalpodautoscalers/${params.path.name}`;
    return await this.put<HorizontalPodAutoscaler>(path, params.query, params.body, opts);
  }
  async deleteAutoscalingV2beta2NamespacedHorizontalPodAutoscaler(params: DeleteAutoscalingV2beta2NamespacedHorizontalPodAutoscalerRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/autoscaling/v2beta2/namespaces/${params.path.namespace}/horizontalpodautoscalers/${params.path.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchAutoscalingV2beta2NamespacedHorizontalPodAutoscaler(params: PatchAutoscalingV2beta2NamespacedHorizontalPodAutoscalerRequest, opts?: APIClientRequestOpts): Promise<HorizontalPodAutoscaler> {
    const path = `/apis/autoscaling/v2beta2/namespaces/${params.path.namespace}/horizontalpodautoscalers/${params.path.name}`;
    return await this.patch<HorizontalPodAutoscaler>(path, params.query, params.body, opts);
  }
  async readAutoscalingV2beta2NamespacedHorizontalPodAutoscalerStatus(params: ReadAutoscalingV2beta2NamespacedHorizontalPodAutoscalerStatusRequest, opts?: APIClientRequestOpts): Promise<HorizontalPodAutoscaler> {
    const path = `/apis/autoscaling/v2beta2/namespaces/${params.path.namespace}/horizontalpodautoscalers/${params.path.name}/status`;
    return await this.get<HorizontalPodAutoscaler>(path, null, null, opts);
  }
  async replaceAutoscalingV2beta2NamespacedHorizontalPodAutoscalerStatus(params: ReplaceAutoscalingV2beta2NamespacedHorizontalPodAutoscalerStatusRequest, opts?: APIClientRequestOpts): Promise<HorizontalPodAutoscaler> {
    const path = `/apis/autoscaling/v2beta2/namespaces/${params.path.namespace}/horizontalpodautoscalers/${params.path.name}/status`;
    return await this.put<HorizontalPodAutoscaler>(path, params.query, params.body, opts);
  }
  async patchAutoscalingV2beta2NamespacedHorizontalPodAutoscalerStatus(params: PatchAutoscalingV2beta2NamespacedHorizontalPodAutoscalerStatusRequest, opts?: APIClientRequestOpts): Promise<HorizontalPodAutoscaler> {
    const path = `/apis/autoscaling/v2beta2/namespaces/${params.path.namespace}/horizontalpodautoscalers/${params.path.name}/status`;
    return await this.patch<HorizontalPodAutoscaler>(path, params.query, params.body, opts);
  }
  async watchAutoscalingV2beta2HorizontalPodAutoscalerListForAllNamespaces(params: WatchAutoscalingV2beta2HorizontalPodAutoscalerListForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/autoscaling/v2beta2/watch/horizontalpodautoscalers`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchAutoscalingV2beta2NamespacedHorizontalPodAutoscalerList(params: WatchAutoscalingV2beta2NamespacedHorizontalPodAutoscalerListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/autoscaling/v2beta2/watch/namespaces/${params.path.namespace}/horizontalpodautoscalers`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchAutoscalingV2beta2NamespacedHorizontalPodAutoscaler(params: WatchAutoscalingV2beta2NamespacedHorizontalPodAutoscalerRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/autoscaling/v2beta2/watch/namespaces/${params.path.namespace}/horizontalpodautoscalers/${params.path.name}`;
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
    const path = `/apis/batch/v1/namespaces/${params.path.namespace}/cronjobs`;
    return await this.get<CronJobList>(path, params.query, null, opts);
  }
  async createBatchV1NamespacedCronJob(params: CreateBatchV1NamespacedCronJobRequest, opts?: APIClientRequestOpts): Promise<CronJob> {
    const path = `/apis/batch/v1/namespaces/${params.path.namespace}/cronjobs`;
    return await this.post<CronJob>(path, params.query, params.body, opts);
  }
  async deleteBatchV1CollectionNamespacedCronJob(params: DeleteBatchV1CollectionNamespacedCronJobRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/batch/v1/namespaces/${params.path.namespace}/cronjobs`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readBatchV1NamespacedCronJob(params: ReadBatchV1NamespacedCronJobRequest, opts?: APIClientRequestOpts): Promise<CronJob> {
    const path = `/apis/batch/v1/namespaces/${params.path.namespace}/cronjobs/${params.path.name}`;
    return await this.get<CronJob>(path, null, null, opts);
  }
  async replaceBatchV1NamespacedCronJob(params: ReplaceBatchV1NamespacedCronJobRequest, opts?: APIClientRequestOpts): Promise<CronJob> {
    const path = `/apis/batch/v1/namespaces/${params.path.namespace}/cronjobs/${params.path.name}`;
    return await this.put<CronJob>(path, params.query, params.body, opts);
  }
  async deleteBatchV1NamespacedCronJob(params: DeleteBatchV1NamespacedCronJobRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/batch/v1/namespaces/${params.path.namespace}/cronjobs/${params.path.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchBatchV1NamespacedCronJob(params: PatchBatchV1NamespacedCronJobRequest, opts?: APIClientRequestOpts): Promise<CronJob> {
    const path = `/apis/batch/v1/namespaces/${params.path.namespace}/cronjobs/${params.path.name}`;
    return await this.patch<CronJob>(path, params.query, params.body, opts);
  }
  async readBatchV1NamespacedCronJobStatus(params: ReadBatchV1NamespacedCronJobStatusRequest, opts?: APIClientRequestOpts): Promise<CronJob> {
    const path = `/apis/batch/v1/namespaces/${params.path.namespace}/cronjobs/${params.path.name}/status`;
    return await this.get<CronJob>(path, null, null, opts);
  }
  async replaceBatchV1NamespacedCronJobStatus(params: ReplaceBatchV1NamespacedCronJobStatusRequest, opts?: APIClientRequestOpts): Promise<CronJob> {
    const path = `/apis/batch/v1/namespaces/${params.path.namespace}/cronjobs/${params.path.name}/status`;
    return await this.put<CronJob>(path, params.query, params.body, opts);
  }
  async patchBatchV1NamespacedCronJobStatus(params: PatchBatchV1NamespacedCronJobStatusRequest, opts?: APIClientRequestOpts): Promise<CronJob> {
    const path = `/apis/batch/v1/namespaces/${params.path.namespace}/cronjobs/${params.path.name}/status`;
    return await this.patch<CronJob>(path, params.query, params.body, opts);
  }
  async listBatchV1NamespacedJob(params: ListBatchV1NamespacedJobRequest, opts?: APIClientRequestOpts): Promise<JobList> {
    const path = `/apis/batch/v1/namespaces/${params.path.namespace}/jobs`;
    return await this.get<JobList>(path, params.query, null, opts);
  }
  async createBatchV1NamespacedJob(params: CreateBatchV1NamespacedJobRequest, opts?: APIClientRequestOpts): Promise<Job> {
    const path = `/apis/batch/v1/namespaces/${params.path.namespace}/jobs`;
    return await this.post<Job>(path, params.query, params.body, opts);
  }
  async deleteBatchV1CollectionNamespacedJob(params: DeleteBatchV1CollectionNamespacedJobRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/batch/v1/namespaces/${params.path.namespace}/jobs`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readBatchV1NamespacedJob(params: ReadBatchV1NamespacedJobRequest, opts?: APIClientRequestOpts): Promise<Job> {
    const path = `/apis/batch/v1/namespaces/${params.path.namespace}/jobs/${params.path.name}`;
    return await this.get<Job>(path, null, null, opts);
  }
  async replaceBatchV1NamespacedJob(params: ReplaceBatchV1NamespacedJobRequest, opts?: APIClientRequestOpts): Promise<Job> {
    const path = `/apis/batch/v1/namespaces/${params.path.namespace}/jobs/${params.path.name}`;
    return await this.put<Job>(path, params.query, params.body, opts);
  }
  async deleteBatchV1NamespacedJob(params: DeleteBatchV1NamespacedJobRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/batch/v1/namespaces/${params.path.namespace}/jobs/${params.path.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchBatchV1NamespacedJob(params: PatchBatchV1NamespacedJobRequest, opts?: APIClientRequestOpts): Promise<Job> {
    const path = `/apis/batch/v1/namespaces/${params.path.namespace}/jobs/${params.path.name}`;
    return await this.patch<Job>(path, params.query, params.body, opts);
  }
  async readBatchV1NamespacedJobStatus(params: ReadBatchV1NamespacedJobStatusRequest, opts?: APIClientRequestOpts): Promise<Job> {
    const path = `/apis/batch/v1/namespaces/${params.path.namespace}/jobs/${params.path.name}/status`;
    return await this.get<Job>(path, null, null, opts);
  }
  async replaceBatchV1NamespacedJobStatus(params: ReplaceBatchV1NamespacedJobStatusRequest, opts?: APIClientRequestOpts): Promise<Job> {
    const path = `/apis/batch/v1/namespaces/${params.path.namespace}/jobs/${params.path.name}/status`;
    return await this.put<Job>(path, params.query, params.body, opts);
  }
  async patchBatchV1NamespacedJobStatus(params: PatchBatchV1NamespacedJobStatusRequest, opts?: APIClientRequestOpts): Promise<Job> {
    const path = `/apis/batch/v1/namespaces/${params.path.namespace}/jobs/${params.path.name}/status`;
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
    const path = `/apis/batch/v1/watch/namespaces/${params.path.namespace}/cronjobs`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchBatchV1NamespacedCronJob(params: WatchBatchV1NamespacedCronJobRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/batch/v1/watch/namespaces/${params.path.namespace}/cronjobs/${params.path.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchBatchV1NamespacedJobList(params: WatchBatchV1NamespacedJobListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/batch/v1/watch/namespaces/${params.path.namespace}/jobs`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchBatchV1NamespacedJob(params: WatchBatchV1NamespacedJobRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/batch/v1/watch/namespaces/${params.path.namespace}/jobs/${params.path.name}`;
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
    const path = `/apis/certificates.k8s.io/v1/certificatesigningrequests/${params.path.name}`;
    return await this.get<CertificateSigningRequest>(path, null, null, opts);
  }
  async replaceCertificatesV1CertificateSigningRequest(params: ReplaceCertificatesV1CertificateSigningRequestRequest, opts?: APIClientRequestOpts): Promise<CertificateSigningRequest> {
    const path = `/apis/certificates.k8s.io/v1/certificatesigningrequests/${params.path.name}`;
    return await this.put<CertificateSigningRequest>(path, params.query, params.body, opts);
  }
  async deleteCertificatesV1CertificateSigningRequest(params: DeleteCertificatesV1CertificateSigningRequestRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/certificates.k8s.io/v1/certificatesigningrequests/${params.path.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchCertificatesV1CertificateSigningRequest(params: PatchCertificatesV1CertificateSigningRequestRequest, opts?: APIClientRequestOpts): Promise<CertificateSigningRequest> {
    const path = `/apis/certificates.k8s.io/v1/certificatesigningrequests/${params.path.name}`;
    return await this.patch<CertificateSigningRequest>(path, params.query, params.body, opts);
  }
  async readCertificatesV1CertificateSigningRequestApproval(params: ReadCertificatesV1CertificateSigningRequestApprovalRequest, opts?: APIClientRequestOpts): Promise<CertificateSigningRequest> {
    const path = `/apis/certificates.k8s.io/v1/certificatesigningrequests/${params.path.name}/approval`;
    return await this.get<CertificateSigningRequest>(path, null, null, opts);
  }
  async replaceCertificatesV1CertificateSigningRequestApproval(params: ReplaceCertificatesV1CertificateSigningRequestApprovalRequest, opts?: APIClientRequestOpts): Promise<CertificateSigningRequest> {
    const path = `/apis/certificates.k8s.io/v1/certificatesigningrequests/${params.path.name}/approval`;
    return await this.put<CertificateSigningRequest>(path, params.query, params.body, opts);
  }
  async patchCertificatesV1CertificateSigningRequestApproval(params: PatchCertificatesV1CertificateSigningRequestApprovalRequest, opts?: APIClientRequestOpts): Promise<CertificateSigningRequest> {
    const path = `/apis/certificates.k8s.io/v1/certificatesigningrequests/${params.path.name}/approval`;
    return await this.patch<CertificateSigningRequest>(path, params.query, params.body, opts);
  }
  async readCertificatesV1CertificateSigningRequestStatus(params: ReadCertificatesV1CertificateSigningRequestStatusRequest, opts?: APIClientRequestOpts): Promise<CertificateSigningRequest> {
    const path = `/apis/certificates.k8s.io/v1/certificatesigningrequests/${params.path.name}/status`;
    return await this.get<CertificateSigningRequest>(path, null, null, opts);
  }
  async replaceCertificatesV1CertificateSigningRequestStatus(params: ReplaceCertificatesV1CertificateSigningRequestStatusRequest, opts?: APIClientRequestOpts): Promise<CertificateSigningRequest> {
    const path = `/apis/certificates.k8s.io/v1/certificatesigningrequests/${params.path.name}/status`;
    return await this.put<CertificateSigningRequest>(path, params.query, params.body, opts);
  }
  async patchCertificatesV1CertificateSigningRequestStatus(params: PatchCertificatesV1CertificateSigningRequestStatusRequest, opts?: APIClientRequestOpts): Promise<CertificateSigningRequest> {
    const path = `/apis/certificates.k8s.io/v1/certificatesigningrequests/${params.path.name}/status`;
    return await this.patch<CertificateSigningRequest>(path, params.query, params.body, opts);
  }
  async watchCertificatesV1CertificateSigningRequestList(params: WatchCertificatesV1CertificateSigningRequestListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/certificates.k8s.io/v1/watch/certificatesigningrequests`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCertificatesV1CertificateSigningRequest(params: WatchCertificatesV1CertificateSigningRequestRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/certificates.k8s.io/v1/watch/certificatesigningrequests/${params.path.name}`;
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
    const path = `/apis/coordination.k8s.io/v1/namespaces/${params.path.namespace}/leases`;
    return await this.get<LeaseList>(path, params.query, null, opts);
  }
  async createCoordinationV1NamespacedLease(params: CreateCoordinationV1NamespacedLeaseRequest, opts?: APIClientRequestOpts): Promise<Lease> {
    const path = `/apis/coordination.k8s.io/v1/namespaces/${params.path.namespace}/leases`;
    return await this.post<Lease>(path, params.query, params.body, opts);
  }
  async deleteCoordinationV1CollectionNamespacedLease(params: DeleteCoordinationV1CollectionNamespacedLeaseRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/coordination.k8s.io/v1/namespaces/${params.path.namespace}/leases`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readCoordinationV1NamespacedLease(params: ReadCoordinationV1NamespacedLeaseRequest, opts?: APIClientRequestOpts): Promise<Lease> {
    const path = `/apis/coordination.k8s.io/v1/namespaces/${params.path.namespace}/leases/${params.path.name}`;
    return await this.get<Lease>(path, null, null, opts);
  }
  async replaceCoordinationV1NamespacedLease(params: ReplaceCoordinationV1NamespacedLeaseRequest, opts?: APIClientRequestOpts): Promise<Lease> {
    const path = `/apis/coordination.k8s.io/v1/namespaces/${params.path.namespace}/leases/${params.path.name}`;
    return await this.put<Lease>(path, params.query, params.body, opts);
  }
  async deleteCoordinationV1NamespacedLease(params: DeleteCoordinationV1NamespacedLeaseRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/coordination.k8s.io/v1/namespaces/${params.path.namespace}/leases/${params.path.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchCoordinationV1NamespacedLease(params: PatchCoordinationV1NamespacedLeaseRequest, opts?: APIClientRequestOpts): Promise<Lease> {
    const path = `/apis/coordination.k8s.io/v1/namespaces/${params.path.namespace}/leases/${params.path.name}`;
    return await this.patch<Lease>(path, params.query, params.body, opts);
  }
  async watchCoordinationV1LeaseListForAllNamespaces(params: WatchCoordinationV1LeaseListForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/coordination.k8s.io/v1/watch/leases`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoordinationV1NamespacedLeaseList(params: WatchCoordinationV1NamespacedLeaseListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/coordination.k8s.io/v1/watch/namespaces/${params.path.namespace}/leases`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchCoordinationV1NamespacedLease(params: WatchCoordinationV1NamespacedLeaseRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/coordination.k8s.io/v1/watch/namespaces/${params.path.namespace}/leases/${params.path.name}`;
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
    const path = `/apis/discovery.k8s.io/v1/namespaces/${params.path.namespace}/endpointslices`;
    return await this.get<EndpointSliceList>(path, params.query, null, opts);
  }
  async createDiscoveryV1NamespacedEndpointSlice(params: CreateDiscoveryV1NamespacedEndpointSliceRequest, opts?: APIClientRequestOpts): Promise<EndpointSlice> {
    const path = `/apis/discovery.k8s.io/v1/namespaces/${params.path.namespace}/endpointslices`;
    return await this.post<EndpointSlice>(path, params.query, params.body, opts);
  }
  async deleteDiscoveryV1CollectionNamespacedEndpointSlice(params: DeleteDiscoveryV1CollectionNamespacedEndpointSliceRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/discovery.k8s.io/v1/namespaces/${params.path.namespace}/endpointslices`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readDiscoveryV1NamespacedEndpointSlice(params: ReadDiscoveryV1NamespacedEndpointSliceRequest, opts?: APIClientRequestOpts): Promise<EndpointSlice> {
    const path = `/apis/discovery.k8s.io/v1/namespaces/${params.path.namespace}/endpointslices/${params.path.name}`;
    return await this.get<EndpointSlice>(path, null, null, opts);
  }
  async replaceDiscoveryV1NamespacedEndpointSlice(params: ReplaceDiscoveryV1NamespacedEndpointSliceRequest, opts?: APIClientRequestOpts): Promise<EndpointSlice> {
    const path = `/apis/discovery.k8s.io/v1/namespaces/${params.path.namespace}/endpointslices/${params.path.name}`;
    return await this.put<EndpointSlice>(path, params.query, params.body, opts);
  }
  async deleteDiscoveryV1NamespacedEndpointSlice(params: DeleteDiscoveryV1NamespacedEndpointSliceRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/discovery.k8s.io/v1/namespaces/${params.path.namespace}/endpointslices/${params.path.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchDiscoveryV1NamespacedEndpointSlice(params: PatchDiscoveryV1NamespacedEndpointSliceRequest, opts?: APIClientRequestOpts): Promise<EndpointSlice> {
    const path = `/apis/discovery.k8s.io/v1/namespaces/${params.path.namespace}/endpointslices/${params.path.name}`;
    return await this.patch<EndpointSlice>(path, params.query, params.body, opts);
  }
  async watchDiscoveryV1EndpointSliceListForAllNamespaces(params: WatchDiscoveryV1EndpointSliceListForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/discovery.k8s.io/v1/watch/endpointslices`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchDiscoveryV1NamespacedEndpointSliceList(params: WatchDiscoveryV1NamespacedEndpointSliceListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/discovery.k8s.io/v1/watch/namespaces/${params.path.namespace}/endpointslices`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchDiscoveryV1NamespacedEndpointSlice(params: WatchDiscoveryV1NamespacedEndpointSliceRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/discovery.k8s.io/v1/watch/namespaces/${params.path.namespace}/endpointslices/${params.path.name}`;
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
    const path = `/apis/events.k8s.io/v1/namespaces/${params.path.namespace}/events`;
    return await this.get<EventList>(path, params.query, null, opts);
  }
  async createEventsV1NamespacedEvent(params: CreateEventsV1NamespacedEventRequest, opts?: APIClientRequestOpts): Promise<Event> {
    const path = `/apis/events.k8s.io/v1/namespaces/${params.path.namespace}/events`;
    return await this.post<Event>(path, params.query, params.body, opts);
  }
  async deleteEventsV1CollectionNamespacedEvent(params: DeleteEventsV1CollectionNamespacedEventRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/events.k8s.io/v1/namespaces/${params.path.namespace}/events`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readEventsV1NamespacedEvent(params: ReadEventsV1NamespacedEventRequest, opts?: APIClientRequestOpts): Promise<Event> {
    const path = `/apis/events.k8s.io/v1/namespaces/${params.path.namespace}/events/${params.path.name}`;
    return await this.get<Event>(path, null, null, opts);
  }
  async replaceEventsV1NamespacedEvent(params: ReplaceEventsV1NamespacedEventRequest, opts?: APIClientRequestOpts): Promise<Event> {
    const path = `/apis/events.k8s.io/v1/namespaces/${params.path.namespace}/events/${params.path.name}`;
    return await this.put<Event>(path, params.query, params.body, opts);
  }
  async deleteEventsV1NamespacedEvent(params: DeleteEventsV1NamespacedEventRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/events.k8s.io/v1/namespaces/${params.path.namespace}/events/${params.path.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchEventsV1NamespacedEvent(params: PatchEventsV1NamespacedEventRequest, opts?: APIClientRequestOpts): Promise<Event> {
    const path = `/apis/events.k8s.io/v1/namespaces/${params.path.namespace}/events/${params.path.name}`;
    return await this.patch<Event>(path, params.query, params.body, opts);
  }
  async watchEventsV1EventListForAllNamespaces(params: WatchEventsV1EventListForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/events.k8s.io/v1/watch/events`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchEventsV1NamespacedEventList(params: WatchEventsV1NamespacedEventListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/events.k8s.io/v1/watch/namespaces/${params.path.namespace}/events`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchEventsV1NamespacedEvent(params: WatchEventsV1NamespacedEventRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/events.k8s.io/v1/watch/namespaces/${params.path.namespace}/events/${params.path.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async getFlowcontrolApiserverAPIGroup(params: GetFlowcontrolApiserverAPIGroupRequest, opts?: APIClientRequestOpts): Promise<APIGroup> {
    const path = `/apis/flowcontrol.apiserver.k8s.io/`;
    return await this.get<APIGroup>(path, null, null, opts);
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
    const path = `/apis/networking.k8s.io/v1/ingressclasses/${params.path.name}`;
    return await this.get<IngressClass>(path, null, null, opts);
  }
  async replaceNetworkingV1IngressClass(params: ReplaceNetworkingV1IngressClassRequest, opts?: APIClientRequestOpts): Promise<IngressClass> {
    const path = `/apis/networking.k8s.io/v1/ingressclasses/${params.path.name}`;
    return await this.put<IngressClass>(path, params.query, params.body, opts);
  }
  async deleteNetworkingV1IngressClass(params: DeleteNetworkingV1IngressClassRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/networking.k8s.io/v1/ingressclasses/${params.path.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchNetworkingV1IngressClass(params: PatchNetworkingV1IngressClassRequest, opts?: APIClientRequestOpts): Promise<IngressClass> {
    const path = `/apis/networking.k8s.io/v1/ingressclasses/${params.path.name}`;
    return await this.patch<IngressClass>(path, params.query, params.body, opts);
  }
  async listNetworkingV1IngressForAllNamespaces(params: ListNetworkingV1IngressForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<IngressList> {
    const path = `/apis/networking.k8s.io/v1/ingresses`;
    return await this.get<IngressList>(path, null, null, opts);
  }
  async listNetworkingV1NamespacedIngress(params: ListNetworkingV1NamespacedIngressRequest, opts?: APIClientRequestOpts): Promise<IngressList> {
    const path = `/apis/networking.k8s.io/v1/namespaces/${params.path.namespace}/ingresses`;
    return await this.get<IngressList>(path, params.query, null, opts);
  }
  async createNetworkingV1NamespacedIngress(params: CreateNetworkingV1NamespacedIngressRequest, opts?: APIClientRequestOpts): Promise<Ingress> {
    const path = `/apis/networking.k8s.io/v1/namespaces/${params.path.namespace}/ingresses`;
    return await this.post<Ingress>(path, params.query, params.body, opts);
  }
  async deleteNetworkingV1CollectionNamespacedIngress(params: DeleteNetworkingV1CollectionNamespacedIngressRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/networking.k8s.io/v1/namespaces/${params.path.namespace}/ingresses`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readNetworkingV1NamespacedIngress(params: ReadNetworkingV1NamespacedIngressRequest, opts?: APIClientRequestOpts): Promise<Ingress> {
    const path = `/apis/networking.k8s.io/v1/namespaces/${params.path.namespace}/ingresses/${params.path.name}`;
    return await this.get<Ingress>(path, null, null, opts);
  }
  async replaceNetworkingV1NamespacedIngress(params: ReplaceNetworkingV1NamespacedIngressRequest, opts?: APIClientRequestOpts): Promise<Ingress> {
    const path = `/apis/networking.k8s.io/v1/namespaces/${params.path.namespace}/ingresses/${params.path.name}`;
    return await this.put<Ingress>(path, params.query, params.body, opts);
  }
  async deleteNetworkingV1NamespacedIngress(params: DeleteNetworkingV1NamespacedIngressRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/networking.k8s.io/v1/namespaces/${params.path.namespace}/ingresses/${params.path.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchNetworkingV1NamespacedIngress(params: PatchNetworkingV1NamespacedIngressRequest, opts?: APIClientRequestOpts): Promise<Ingress> {
    const path = `/apis/networking.k8s.io/v1/namespaces/${params.path.namespace}/ingresses/${params.path.name}`;
    return await this.patch<Ingress>(path, params.query, params.body, opts);
  }
  async readNetworkingV1NamespacedIngressStatus(params: ReadNetworkingV1NamespacedIngressStatusRequest, opts?: APIClientRequestOpts): Promise<Ingress> {
    const path = `/apis/networking.k8s.io/v1/namespaces/${params.path.namespace}/ingresses/${params.path.name}/status`;
    return await this.get<Ingress>(path, null, null, opts);
  }
  async replaceNetworkingV1NamespacedIngressStatus(params: ReplaceNetworkingV1NamespacedIngressStatusRequest, opts?: APIClientRequestOpts): Promise<Ingress> {
    const path = `/apis/networking.k8s.io/v1/namespaces/${params.path.namespace}/ingresses/${params.path.name}/status`;
    return await this.put<Ingress>(path, params.query, params.body, opts);
  }
  async patchNetworkingV1NamespacedIngressStatus(params: PatchNetworkingV1NamespacedIngressStatusRequest, opts?: APIClientRequestOpts): Promise<Ingress> {
    const path = `/apis/networking.k8s.io/v1/namespaces/${params.path.namespace}/ingresses/${params.path.name}/status`;
    return await this.patch<Ingress>(path, params.query, params.body, opts);
  }
  async listNetworkingV1NamespacedNetworkPolicy(params: ListNetworkingV1NamespacedNetworkPolicyRequest, opts?: APIClientRequestOpts): Promise<NetworkPolicyList> {
    const path = `/apis/networking.k8s.io/v1/namespaces/${params.path.namespace}/networkpolicies`;
    return await this.get<NetworkPolicyList>(path, params.query, null, opts);
  }
  async createNetworkingV1NamespacedNetworkPolicy(params: CreateNetworkingV1NamespacedNetworkPolicyRequest, opts?: APIClientRequestOpts): Promise<NetworkPolicy> {
    const path = `/apis/networking.k8s.io/v1/namespaces/${params.path.namespace}/networkpolicies`;
    return await this.post<NetworkPolicy>(path, params.query, params.body, opts);
  }
  async deleteNetworkingV1CollectionNamespacedNetworkPolicy(params: DeleteNetworkingV1CollectionNamespacedNetworkPolicyRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/networking.k8s.io/v1/namespaces/${params.path.namespace}/networkpolicies`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readNetworkingV1NamespacedNetworkPolicy(params: ReadNetworkingV1NamespacedNetworkPolicyRequest, opts?: APIClientRequestOpts): Promise<NetworkPolicy> {
    const path = `/apis/networking.k8s.io/v1/namespaces/${params.path.namespace}/networkpolicies/${params.path.name}`;
    return await this.get<NetworkPolicy>(path, null, null, opts);
  }
  async replaceNetworkingV1NamespacedNetworkPolicy(params: ReplaceNetworkingV1NamespacedNetworkPolicyRequest, opts?: APIClientRequestOpts): Promise<NetworkPolicy> {
    const path = `/apis/networking.k8s.io/v1/namespaces/${params.path.namespace}/networkpolicies/${params.path.name}`;
    return await this.put<NetworkPolicy>(path, params.query, params.body, opts);
  }
  async deleteNetworkingV1NamespacedNetworkPolicy(params: DeleteNetworkingV1NamespacedNetworkPolicyRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/networking.k8s.io/v1/namespaces/${params.path.namespace}/networkpolicies/${params.path.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchNetworkingV1NamespacedNetworkPolicy(params: PatchNetworkingV1NamespacedNetworkPolicyRequest, opts?: APIClientRequestOpts): Promise<NetworkPolicy> {
    const path = `/apis/networking.k8s.io/v1/namespaces/${params.path.namespace}/networkpolicies/${params.path.name}`;
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
    const path = `/apis/networking.k8s.io/v1/watch/ingressclasses/${params.path.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchNetworkingV1IngressListForAllNamespaces(params: WatchNetworkingV1IngressListForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/networking.k8s.io/v1/watch/ingresses`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchNetworkingV1NamespacedIngressList(params: WatchNetworkingV1NamespacedIngressListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/networking.k8s.io/v1/watch/namespaces/${params.path.namespace}/ingresses`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchNetworkingV1NamespacedIngress(params: WatchNetworkingV1NamespacedIngressRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/networking.k8s.io/v1/watch/namespaces/${params.path.namespace}/ingresses/${params.path.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchNetworkingV1NamespacedNetworkPolicyList(params: WatchNetworkingV1NamespacedNetworkPolicyListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/networking.k8s.io/v1/watch/namespaces/${params.path.namespace}/networkpolicies`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchNetworkingV1NamespacedNetworkPolicy(params: WatchNetworkingV1NamespacedNetworkPolicyRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/networking.k8s.io/v1/watch/namespaces/${params.path.namespace}/networkpolicies/${params.path.name}`;
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
    const path = `/apis/node.k8s.io/v1/runtimeclasses/${params.path.name}`;
    return await this.get<RuntimeClass>(path, null, null, opts);
  }
  async replaceNodeV1RuntimeClass(params: ReplaceNodeV1RuntimeClassRequest, opts?: APIClientRequestOpts): Promise<RuntimeClass> {
    const path = `/apis/node.k8s.io/v1/runtimeclasses/${params.path.name}`;
    return await this.put<RuntimeClass>(path, params.query, params.body, opts);
  }
  async deleteNodeV1RuntimeClass(params: DeleteNodeV1RuntimeClassRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/node.k8s.io/v1/runtimeclasses/${params.path.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchNodeV1RuntimeClass(params: PatchNodeV1RuntimeClassRequest, opts?: APIClientRequestOpts): Promise<RuntimeClass> {
    const path = `/apis/node.k8s.io/v1/runtimeclasses/${params.path.name}`;
    return await this.patch<RuntimeClass>(path, params.query, params.body, opts);
  }
  async watchNodeV1RuntimeClassList(params: WatchNodeV1RuntimeClassListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/node.k8s.io/v1/watch/runtimeclasses`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchNodeV1RuntimeClass(params: WatchNodeV1RuntimeClassRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/node.k8s.io/v1/watch/runtimeclasses/${params.path.name}`;
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
    const path = `/apis/policy/v1/namespaces/${params.path.namespace}/poddisruptionbudgets`;
    return await this.get<PodDisruptionBudgetList>(path, params.query, null, opts);
  }
  async createPolicyV1NamespacedPodDisruptionBudget(params: CreatePolicyV1NamespacedPodDisruptionBudgetRequest, opts?: APIClientRequestOpts): Promise<PodDisruptionBudget> {
    const path = `/apis/policy/v1/namespaces/${params.path.namespace}/poddisruptionbudgets`;
    return await this.post<PodDisruptionBudget>(path, params.query, params.body, opts);
  }
  async deletePolicyV1CollectionNamespacedPodDisruptionBudget(params: DeletePolicyV1CollectionNamespacedPodDisruptionBudgetRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/policy/v1/namespaces/${params.path.namespace}/poddisruptionbudgets`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readPolicyV1NamespacedPodDisruptionBudget(params: ReadPolicyV1NamespacedPodDisruptionBudgetRequest, opts?: APIClientRequestOpts): Promise<PodDisruptionBudget> {
    const path = `/apis/policy/v1/namespaces/${params.path.namespace}/poddisruptionbudgets/${params.path.name}`;
    return await this.get<PodDisruptionBudget>(path, null, null, opts);
  }
  async replacePolicyV1NamespacedPodDisruptionBudget(params: ReplacePolicyV1NamespacedPodDisruptionBudgetRequest, opts?: APIClientRequestOpts): Promise<PodDisruptionBudget> {
    const path = `/apis/policy/v1/namespaces/${params.path.namespace}/poddisruptionbudgets/${params.path.name}`;
    return await this.put<PodDisruptionBudget>(path, params.query, params.body, opts);
  }
  async deletePolicyV1NamespacedPodDisruptionBudget(params: DeletePolicyV1NamespacedPodDisruptionBudgetRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/policy/v1/namespaces/${params.path.namespace}/poddisruptionbudgets/${params.path.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchPolicyV1NamespacedPodDisruptionBudget(params: PatchPolicyV1NamespacedPodDisruptionBudgetRequest, opts?: APIClientRequestOpts): Promise<PodDisruptionBudget> {
    const path = `/apis/policy/v1/namespaces/${params.path.namespace}/poddisruptionbudgets/${params.path.name}`;
    return await this.patch<PodDisruptionBudget>(path, params.query, params.body, opts);
  }
  async readPolicyV1NamespacedPodDisruptionBudgetStatus(params: ReadPolicyV1NamespacedPodDisruptionBudgetStatusRequest, opts?: APIClientRequestOpts): Promise<PodDisruptionBudget> {
    const path = `/apis/policy/v1/namespaces/${params.path.namespace}/poddisruptionbudgets/${params.path.name}/status`;
    return await this.get<PodDisruptionBudget>(path, null, null, opts);
  }
  async replacePolicyV1NamespacedPodDisruptionBudgetStatus(params: ReplacePolicyV1NamespacedPodDisruptionBudgetStatusRequest, opts?: APIClientRequestOpts): Promise<PodDisruptionBudget> {
    const path = `/apis/policy/v1/namespaces/${params.path.namespace}/poddisruptionbudgets/${params.path.name}/status`;
    return await this.put<PodDisruptionBudget>(path, params.query, params.body, opts);
  }
  async patchPolicyV1NamespacedPodDisruptionBudgetStatus(params: PatchPolicyV1NamespacedPodDisruptionBudgetStatusRequest, opts?: APIClientRequestOpts): Promise<PodDisruptionBudget> {
    const path = `/apis/policy/v1/namespaces/${params.path.namespace}/poddisruptionbudgets/${params.path.name}/status`;
    return await this.patch<PodDisruptionBudget>(path, params.query, params.body, opts);
  }
  async listPolicyV1PodDisruptionBudgetForAllNamespaces(params: ListPolicyV1PodDisruptionBudgetForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<PodDisruptionBudgetList> {
    const path = `/apis/policy/v1/poddisruptionbudgets`;
    return await this.get<PodDisruptionBudgetList>(path, null, null, opts);
  }
  async watchPolicyV1NamespacedPodDisruptionBudgetList(params: WatchPolicyV1NamespacedPodDisruptionBudgetListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/policy/v1/watch/namespaces/${params.path.namespace}/poddisruptionbudgets`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchPolicyV1NamespacedPodDisruptionBudget(params: WatchPolicyV1NamespacedPodDisruptionBudgetRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/policy/v1/watch/namespaces/${params.path.namespace}/poddisruptionbudgets/${params.path.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchPolicyV1PodDisruptionBudgetListForAllNamespaces(params: WatchPolicyV1PodDisruptionBudgetListForAllNamespacesRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/policy/v1/watch/poddisruptionbudgets`;
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
    const path = `/apis/rbac.authorization.k8s.io/v1/clusterrolebindings/${params.path.name}`;
    return await this.get<ClusterRoleBinding>(path, null, null, opts);
  }
  async replaceRbacAuthorizationV1ClusterRoleBinding(params: ReplaceRbacAuthorizationV1ClusterRoleBindingRequest, opts?: APIClientRequestOpts): Promise<ClusterRoleBinding> {
    const path = `/apis/rbac.authorization.k8s.io/v1/clusterrolebindings/${params.path.name}`;
    return await this.put<ClusterRoleBinding>(path, params.query, params.body, opts);
  }
  async deleteRbacAuthorizationV1ClusterRoleBinding(params: DeleteRbacAuthorizationV1ClusterRoleBindingRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/rbac.authorization.k8s.io/v1/clusterrolebindings/${params.path.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchRbacAuthorizationV1ClusterRoleBinding(params: PatchRbacAuthorizationV1ClusterRoleBindingRequest, opts?: APIClientRequestOpts): Promise<ClusterRoleBinding> {
    const path = `/apis/rbac.authorization.k8s.io/v1/clusterrolebindings/${params.path.name}`;
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
    const path = `/apis/rbac.authorization.k8s.io/v1/clusterroles/${params.path.name}`;
    return await this.get<ClusterRole>(path, null, null, opts);
  }
  async replaceRbacAuthorizationV1ClusterRole(params: ReplaceRbacAuthorizationV1ClusterRoleRequest, opts?: APIClientRequestOpts): Promise<ClusterRole> {
    const path = `/apis/rbac.authorization.k8s.io/v1/clusterroles/${params.path.name}`;
    return await this.put<ClusterRole>(path, params.query, params.body, opts);
  }
  async deleteRbacAuthorizationV1ClusterRole(params: DeleteRbacAuthorizationV1ClusterRoleRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/rbac.authorization.k8s.io/v1/clusterroles/${params.path.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchRbacAuthorizationV1ClusterRole(params: PatchRbacAuthorizationV1ClusterRoleRequest, opts?: APIClientRequestOpts): Promise<ClusterRole> {
    const path = `/apis/rbac.authorization.k8s.io/v1/clusterroles/${params.path.name}`;
    return await this.patch<ClusterRole>(path, params.query, params.body, opts);
  }
  async listRbacAuthorizationV1NamespacedRoleBinding(params: ListRbacAuthorizationV1NamespacedRoleBindingRequest, opts?: APIClientRequestOpts): Promise<RoleBindingList> {
    const path = `/apis/rbac.authorization.k8s.io/v1/namespaces/${params.path.namespace}/rolebindings`;
    return await this.get<RoleBindingList>(path, params.query, null, opts);
  }
  async createRbacAuthorizationV1NamespacedRoleBinding(params: CreateRbacAuthorizationV1NamespacedRoleBindingRequest, opts?: APIClientRequestOpts): Promise<RoleBinding> {
    const path = `/apis/rbac.authorization.k8s.io/v1/namespaces/${params.path.namespace}/rolebindings`;
    return await this.post<RoleBinding>(path, params.query, params.body, opts);
  }
  async deleteRbacAuthorizationV1CollectionNamespacedRoleBinding(params: DeleteRbacAuthorizationV1CollectionNamespacedRoleBindingRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/rbac.authorization.k8s.io/v1/namespaces/${params.path.namespace}/rolebindings`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readRbacAuthorizationV1NamespacedRoleBinding(params: ReadRbacAuthorizationV1NamespacedRoleBindingRequest, opts?: APIClientRequestOpts): Promise<RoleBinding> {
    const path = `/apis/rbac.authorization.k8s.io/v1/namespaces/${params.path.namespace}/rolebindings/${params.path.name}`;
    return await this.get<RoleBinding>(path, null, null, opts);
  }
  async replaceRbacAuthorizationV1NamespacedRoleBinding(params: ReplaceRbacAuthorizationV1NamespacedRoleBindingRequest, opts?: APIClientRequestOpts): Promise<RoleBinding> {
    const path = `/apis/rbac.authorization.k8s.io/v1/namespaces/${params.path.namespace}/rolebindings/${params.path.name}`;
    return await this.put<RoleBinding>(path, params.query, params.body, opts);
  }
  async deleteRbacAuthorizationV1NamespacedRoleBinding(params: DeleteRbacAuthorizationV1NamespacedRoleBindingRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/rbac.authorization.k8s.io/v1/namespaces/${params.path.namespace}/rolebindings/${params.path.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchRbacAuthorizationV1NamespacedRoleBinding(params: PatchRbacAuthorizationV1NamespacedRoleBindingRequest, opts?: APIClientRequestOpts): Promise<RoleBinding> {
    const path = `/apis/rbac.authorization.k8s.io/v1/namespaces/${params.path.namespace}/rolebindings/${params.path.name}`;
    return await this.patch<RoleBinding>(path, params.query, params.body, opts);
  }
  async listRbacAuthorizationV1NamespacedRole(params: ListRbacAuthorizationV1NamespacedRoleRequest, opts?: APIClientRequestOpts): Promise<RoleList> {
    const path = `/apis/rbac.authorization.k8s.io/v1/namespaces/${params.path.namespace}/roles`;
    return await this.get<RoleList>(path, params.query, null, opts);
  }
  async createRbacAuthorizationV1NamespacedRole(params: CreateRbacAuthorizationV1NamespacedRoleRequest, opts?: APIClientRequestOpts): Promise<Role> {
    const path = `/apis/rbac.authorization.k8s.io/v1/namespaces/${params.path.namespace}/roles`;
    return await this.post<Role>(path, params.query, params.body, opts);
  }
  async deleteRbacAuthorizationV1CollectionNamespacedRole(params: DeleteRbacAuthorizationV1CollectionNamespacedRoleRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/rbac.authorization.k8s.io/v1/namespaces/${params.path.namespace}/roles`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async readRbacAuthorizationV1NamespacedRole(params: ReadRbacAuthorizationV1NamespacedRoleRequest, opts?: APIClientRequestOpts): Promise<Role> {
    const path = `/apis/rbac.authorization.k8s.io/v1/namespaces/${params.path.namespace}/roles/${params.path.name}`;
    return await this.get<Role>(path, null, null, opts);
  }
  async replaceRbacAuthorizationV1NamespacedRole(params: ReplaceRbacAuthorizationV1NamespacedRoleRequest, opts?: APIClientRequestOpts): Promise<Role> {
    const path = `/apis/rbac.authorization.k8s.io/v1/namespaces/${params.path.namespace}/roles/${params.path.name}`;
    return await this.put<Role>(path, params.query, params.body, opts);
  }
  async deleteRbacAuthorizationV1NamespacedRole(params: DeleteRbacAuthorizationV1NamespacedRoleRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/rbac.authorization.k8s.io/v1/namespaces/${params.path.namespace}/roles/${params.path.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchRbacAuthorizationV1NamespacedRole(params: PatchRbacAuthorizationV1NamespacedRoleRequest, opts?: APIClientRequestOpts): Promise<Role> {
    const path = `/apis/rbac.authorization.k8s.io/v1/namespaces/${params.path.namespace}/roles/${params.path.name}`;
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
    const path = `/apis/rbac.authorization.k8s.io/v1/watch/clusterrolebindings/${params.path.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchRbacAuthorizationV1ClusterRoleList(params: WatchRbacAuthorizationV1ClusterRoleListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/rbac.authorization.k8s.io/v1/watch/clusterroles`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchRbacAuthorizationV1ClusterRole(params: WatchRbacAuthorizationV1ClusterRoleRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/rbac.authorization.k8s.io/v1/watch/clusterroles/${params.path.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchRbacAuthorizationV1NamespacedRoleBindingList(params: WatchRbacAuthorizationV1NamespacedRoleBindingListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/rbac.authorization.k8s.io/v1/watch/namespaces/${params.path.namespace}/rolebindings`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchRbacAuthorizationV1NamespacedRoleBinding(params: WatchRbacAuthorizationV1NamespacedRoleBindingRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/rbac.authorization.k8s.io/v1/watch/namespaces/${params.path.namespace}/rolebindings/${params.path.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchRbacAuthorizationV1NamespacedRoleList(params: WatchRbacAuthorizationV1NamespacedRoleListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/rbac.authorization.k8s.io/v1/watch/namespaces/${params.path.namespace}/roles`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchRbacAuthorizationV1NamespacedRole(params: WatchRbacAuthorizationV1NamespacedRoleRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/rbac.authorization.k8s.io/v1/watch/namespaces/${params.path.namespace}/roles/${params.path.name}`;
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
    const path = `/apis/scheduling.k8s.io/v1/priorityclasses/${params.path.name}`;
    return await this.get<PriorityClass>(path, null, null, opts);
  }
  async replaceSchedulingV1PriorityClass(params: ReplaceSchedulingV1PriorityClassRequest, opts?: APIClientRequestOpts): Promise<PriorityClass> {
    const path = `/apis/scheduling.k8s.io/v1/priorityclasses/${params.path.name}`;
    return await this.put<PriorityClass>(path, params.query, params.body, opts);
  }
  async deleteSchedulingV1PriorityClass(params: DeleteSchedulingV1PriorityClassRequest, opts?: APIClientRequestOpts): Promise<Status> {
    const path = `/apis/scheduling.k8s.io/v1/priorityclasses/${params.path.name}`;
    return await this.delete<Status>(path, params.query, null, opts);
  }
  async patchSchedulingV1PriorityClass(params: PatchSchedulingV1PriorityClassRequest, opts?: APIClientRequestOpts): Promise<PriorityClass> {
    const path = `/apis/scheduling.k8s.io/v1/priorityclasses/${params.path.name}`;
    return await this.patch<PriorityClass>(path, params.query, params.body, opts);
  }
  async watchSchedulingV1PriorityClassList(params: WatchSchedulingV1PriorityClassListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/scheduling.k8s.io/v1/watch/priorityclasses`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchSchedulingV1PriorityClass(params: WatchSchedulingV1PriorityClassRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/scheduling.k8s.io/v1/watch/priorityclasses/${params.path.name}`;
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
    const path = `/apis/storage.k8s.io/v1/csidrivers/${params.path.name}`;
    return await this.get<CSIDriver>(path, null, null, opts);
  }
  async replaceStorageV1CSIDriver(params: ReplaceStorageV1CSIDriverRequest, opts?: APIClientRequestOpts): Promise<CSIDriver> {
    const path = `/apis/storage.k8s.io/v1/csidrivers/${params.path.name}`;
    return await this.put<CSIDriver>(path, params.query, params.body, opts);
  }
  async deleteStorageV1CSIDriver(params: DeleteStorageV1CSIDriverRequest, opts?: APIClientRequestOpts): Promise<CSIDriver> {
    const path = `/apis/storage.k8s.io/v1/csidrivers/${params.path.name}`;
    return await this.delete<CSIDriver>(path, params.query, null, opts);
  }
  async patchStorageV1CSIDriver(params: PatchStorageV1CSIDriverRequest, opts?: APIClientRequestOpts): Promise<CSIDriver> {
    const path = `/apis/storage.k8s.io/v1/csidrivers/${params.path.name}`;
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
    const path = `/apis/storage.k8s.io/v1/csinodes/${params.path.name}`;
    return await this.get<CSINode>(path, null, null, opts);
  }
  async replaceStorageV1CSINode(params: ReplaceStorageV1CSINodeRequest, opts?: APIClientRequestOpts): Promise<CSINode> {
    const path = `/apis/storage.k8s.io/v1/csinodes/${params.path.name}`;
    return await this.put<CSINode>(path, params.query, params.body, opts);
  }
  async deleteStorageV1CSINode(params: DeleteStorageV1CSINodeRequest, opts?: APIClientRequestOpts): Promise<CSINode> {
    const path = `/apis/storage.k8s.io/v1/csinodes/${params.path.name}`;
    return await this.delete<CSINode>(path, params.query, null, opts);
  }
  async patchStorageV1CSINode(params: PatchStorageV1CSINodeRequest, opts?: APIClientRequestOpts): Promise<CSINode> {
    const path = `/apis/storage.k8s.io/v1/csinodes/${params.path.name}`;
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
    const path = `/apis/storage.k8s.io/v1/storageclasses/${params.path.name}`;
    return await this.get<StorageClass>(path, null, null, opts);
  }
  async replaceStorageV1StorageClass(params: ReplaceStorageV1StorageClassRequest, opts?: APIClientRequestOpts): Promise<StorageClass> {
    const path = `/apis/storage.k8s.io/v1/storageclasses/${params.path.name}`;
    return await this.put<StorageClass>(path, params.query, params.body, opts);
  }
  async deleteStorageV1StorageClass(params: DeleteStorageV1StorageClassRequest, opts?: APIClientRequestOpts): Promise<StorageClass> {
    const path = `/apis/storage.k8s.io/v1/storageclasses/${params.path.name}`;
    return await this.delete<StorageClass>(path, params.query, null, opts);
  }
  async patchStorageV1StorageClass(params: PatchStorageV1StorageClassRequest, opts?: APIClientRequestOpts): Promise<StorageClass> {
    const path = `/apis/storage.k8s.io/v1/storageclasses/${params.path.name}`;
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
    const path = `/apis/storage.k8s.io/v1/volumeattachments/${params.path.name}`;
    return await this.get<VolumeAttachment>(path, null, null, opts);
  }
  async replaceStorageV1VolumeAttachment(params: ReplaceStorageV1VolumeAttachmentRequest, opts?: APIClientRequestOpts): Promise<VolumeAttachment> {
    const path = `/apis/storage.k8s.io/v1/volumeattachments/${params.path.name}`;
    return await this.put<VolumeAttachment>(path, params.query, params.body, opts);
  }
  async deleteStorageV1VolumeAttachment(params: DeleteStorageV1VolumeAttachmentRequest, opts?: APIClientRequestOpts): Promise<VolumeAttachment> {
    const path = `/apis/storage.k8s.io/v1/volumeattachments/${params.path.name}`;
    return await this.delete<VolumeAttachment>(path, params.query, null, opts);
  }
  async patchStorageV1VolumeAttachment(params: PatchStorageV1VolumeAttachmentRequest, opts?: APIClientRequestOpts): Promise<VolumeAttachment> {
    const path = `/apis/storage.k8s.io/v1/volumeattachments/${params.path.name}`;
    return await this.patch<VolumeAttachment>(path, params.query, params.body, opts);
  }
  async readStorageV1VolumeAttachmentStatus(params: ReadStorageV1VolumeAttachmentStatusRequest, opts?: APIClientRequestOpts): Promise<VolumeAttachment> {
    const path = `/apis/storage.k8s.io/v1/volumeattachments/${params.path.name}/status`;
    return await this.get<VolumeAttachment>(path, null, null, opts);
  }
  async replaceStorageV1VolumeAttachmentStatus(params: ReplaceStorageV1VolumeAttachmentStatusRequest, opts?: APIClientRequestOpts): Promise<VolumeAttachment> {
    const path = `/apis/storage.k8s.io/v1/volumeattachments/${params.path.name}/status`;
    return await this.put<VolumeAttachment>(path, params.query, params.body, opts);
  }
  async patchStorageV1VolumeAttachmentStatus(params: PatchStorageV1VolumeAttachmentStatusRequest, opts?: APIClientRequestOpts): Promise<VolumeAttachment> {
    const path = `/apis/storage.k8s.io/v1/volumeattachments/${params.path.name}/status`;
    return await this.patch<VolumeAttachment>(path, params.query, params.body, opts);
  }
  async watchStorageV1CSIDriverList(params: WatchStorageV1CSIDriverListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/storage.k8s.io/v1/watch/csidrivers`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchStorageV1CSIDriver(params: WatchStorageV1CSIDriverRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/storage.k8s.io/v1/watch/csidrivers/${params.path.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchStorageV1CSINodeList(params: WatchStorageV1CSINodeListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/storage.k8s.io/v1/watch/csinodes`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchStorageV1CSINode(params: WatchStorageV1CSINodeRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/storage.k8s.io/v1/watch/csinodes/${params.path.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchStorageV1StorageClassList(params: WatchStorageV1StorageClassListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/storage.k8s.io/v1/watch/storageclasses`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchStorageV1StorageClass(params: WatchStorageV1StorageClassRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/storage.k8s.io/v1/watch/storageclasses/${params.path.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchStorageV1VolumeAttachmentList(params: WatchStorageV1VolumeAttachmentListRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/storage.k8s.io/v1/watch/volumeattachments`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async watchStorageV1VolumeAttachment(params: WatchStorageV1VolumeAttachmentRequest, opts?: APIClientRequestOpts): Promise<WatchEvent> {
    const path = `/apis/storage.k8s.io/v1/watch/volumeattachments/${params.path.name}`;
    return await this.get<WatchEvent>(path, null, null, opts);
  }
  async logFileListHandler(params: LogFileListHandlerRequest, opts?: APIClientRequestOpts): Promise<any> {
    const path = `/logs/`;
    return await this.get<any>(path, null, null, opts);
  }
  async logFileHandler(params: LogFileHandlerRequest, opts?: APIClientRequestOpts): Promise<any> {
    const path = `/logs/${params.path.logpath}`;
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