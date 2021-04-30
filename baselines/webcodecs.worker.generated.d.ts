/////////////////////////////
/// webcodecs.worker APIs
/////////////////////////////

interface AudioDecoderConfig {
    codec: string;
    description?: BufferSource;
    numberOfChannels: number;
    sampleRate: number;
}

interface AudioDecoderInit {
    error: WebCodecsErrorCallback;
    output: AudioFrameOutputCallback;
}

interface AudioDecoderSupport {
    config: AudioDecoderConfig;
    supported: boolean;
}

interface AudioEncoderConfig {
    bitrate?: number;
    codec: string;
    numberOfChannels: number;
    sampleRate: number;
}

interface AudioEncoderInit {
    error: WebCodecsErrorCallback;
    output: EncodedAudioChunkOutputCallback;
}

interface AudioEncoderSupport {
    config: AudioEncoderConfig;
    supported: boolean;
}

interface AudioFrameInit {
    buffer: AudioBuffer;
    timestamp: number;
}

interface AvcEncoderConfig {
    format?: AvcBitstreamFormat;
}

interface EncodedAudioChunkInit {
    data: BufferSource;
    timestamp: number;
    type: EncodedAudioChunkType;
}

interface EncodedAudioChunkMetadata {
    decoderConfig?: AudioDecoderConfig;
}

interface EncodedVideoChunkInit {
    data: BufferSource;
    duration?: number;
    timestamp: number;
    type: EncodedVideoChunkType;
}

interface EncodedVideoChunkMetadata {
    decoderConfig?: VideoDecoderConfig;
    temporalLayerId?: number;
}

interface ImageDecodeOptions {
    completeFramesOnly?: boolean;
    frameIndex?: number;
}

interface ImageDecodeResult {
    complete: boolean;
    image: VideoFrame;
}

interface ImageDecoderInit {
    colorSpaceConversion?: ColorSpaceConversion;
    data: ImageBufferSource;
    desiredHeight?: number;
    desiredWidth?: number;
    preferAnimation?: boolean;
    premultiplyAlpha?: PremultiplyAlpha;
    type: string;
}

interface PlaneInit {
    data?: BufferSource;
    offset?: number;
    src?: BufferSource;
    stride: number;
}

interface PlaneLayout {
    offset?: number;
    stride?: number;
}

interface VideoDecoderConfig {
    codec: string;
    codedHeight?: number;
    codedWidth?: number;
    cropHeight?: number;
    cropLeft?: number;
    cropTop?: number;
    cropWidth?: number;
    description?: BufferSource;
    displayHeight?: number;
    displayWidth?: number;
    hardwareAcceleration?: HardwarePreference;
    visibleRegion?: VideoFrameRegion;
}

interface VideoDecoderInit {
    error: WebCodecsErrorCallback;
    output: VideoFrameOutputCallback;
}

interface VideoDecoderSupport {
    config: VideoDecoderConfig;
    supported: boolean;
}

interface VideoEncoderConfig {
    alpha?: AlphaOption;
    avc?: AvcEncoderConfig;
    bitrate?: number;
    codec: string;
    displayHeight?: number;
    displayWidth?: number;
    framerate?: number;
    hardwareAcceleration?: HardwarePreference;
    height: number;
    scalabilityMode?: string;
    width: number;
}

interface VideoEncoderEncodeOptions {
    keyFrame?: boolean | null;
}

interface VideoEncoderInit {
    error: WebCodecsErrorCallback;
    output: EncodedVideoChunkOutputCallback;
}

interface VideoEncoderSupport {
    config: VideoEncoderConfig;
    supported: boolean;
}

interface VideoFrameInit {
    alpha?: AlphaOption;
    duration?: number;
    timestamp?: number;
}

interface VideoFramePlaneInit {
    codedHeight: number;
    codedWidth: number;
    cropHeight?: number;
    cropLeft?: number;
    cropTop?: number;
    cropWidth?: number;
    displayHeight?: number;
    displayWidth?: number;
    duration?: number;
    timestamp: number;
    visibleRegion?: VideoFrameRegion;
}

interface VideoFrameReadIntoOptions {
    layout?: PlaneLayout[];
    region?: VideoFrameRegion;
}

interface VideoFrameRegion {
    height: number;
    left: number;
    top: number;
    width: number;
}

interface AudioDecoder {
    readonly decodeQueueSize: number;
    readonly state: CodecState;
    close(): void;
    configure(config: AudioDecoderConfig): void;
    decode(chunk: EncodedAudioChunk): void;
    flush(): Promise<void>;
    reset(): void;
}

declare var AudioDecoder: {
    prototype: AudioDecoder;
    new(init: AudioDecoderInit): AudioDecoder;
    isConfigSupported(config: AudioDecoderConfig): Promise<AudioDecoderSupport>;
};

interface AudioEncoder {
    readonly encodeQueueSize: number;
    readonly state: CodecState;
    close(): void;
    configure(config: AudioEncoderConfig): void;
    encode(frame: AudioFrame): void;
    flush(): Promise<void>;
    reset(): void;
}

declare var AudioEncoder: {
    prototype: AudioEncoder;
    new(init: AudioEncoderInit): AudioEncoder;
    isConfigSupported(config: AudioEncoderConfig): Promise<AudioEncoderSupport>;
};

interface AudioFrame {
    readonly buffer: AudioBuffer;
    readonly timestamp: number;
    clone(): AudioFrame;
    close(): void;
}

declare var AudioFrame: {
    prototype: AudioFrame;
    new(init: AudioFrameInit): AudioFrame;
};

interface EncodedAudioChunk {
    readonly data: ArrayBuffer;
    readonly timestamp: number;
    readonly type: EncodedAudioChunkType;
}

declare var EncodedAudioChunk: {
    prototype: EncodedAudioChunk;
    new(init: EncodedAudioChunkInit): EncodedAudioChunk;
};

interface EncodedVideoChunk {
    readonly data: ArrayBuffer;
    readonly duration: number | null;
    readonly timestamp: number;
    readonly type: EncodedVideoChunkType;
}

declare var EncodedVideoChunk: {
    prototype: EncodedVideoChunk;
    new(init: EncodedVideoChunkInit): EncodedVideoChunk;
};

interface ImageDecoder {
    readonly complete: boolean;
    readonly tracks: ImageTrackList;
    readonly type: string;
    close(): void;
    decode(options?: ImageDecodeOptions): Promise<ImageDecodeResult>;
    reset(): void;
}

declare var ImageDecoder: {
    prototype: ImageDecoder;
    new(init: ImageDecoderInit): ImageDecoder;
    isTypeSupported(type: string): Promise<boolean>;
};

interface ImageTrack {
    readonly animated: boolean;
    readonly frameCount: number;
    readonly repetitionCount: number;
    selected: boolean;
}

declare var ImageTrack: {
    prototype: ImageTrack;
    new(): ImageTrack;
};

interface ImageTrackList {
    readonly length: number;
    readonly ready: Promise<void>;
    readonly selectedIndex: number;
    readonly selectedTrack: ImageTrack | null;
    [index: number]: ImageTrack;
}

declare var ImageTrackList: {
    prototype: ImageTrackList;
    new(): ImageTrackList;
};

interface Plane {
    readonly length: number;
    readonly rows: number;
    readonly stride: number;
    readInto(dst: ArrayBufferView): void;
}

declare var Plane: {
    prototype: Plane;
    new(): Plane;
};

interface VideoDecoder {
    readonly decodeQueueSize: number;
    readonly state: CodecState;
    close(): void;
    configure(config: VideoDecoderConfig): void;
    decode(chunk: EncodedVideoChunk): void;
    flush(): Promise<void>;
    reset(): void;
}

declare var VideoDecoder: {
    prototype: VideoDecoder;
    new(init: VideoDecoderInit): VideoDecoder;
    isConfigSupported(config: VideoDecoderConfig): Promise<VideoDecoderSupport>;
};

interface VideoEncoder {
    readonly encodeQueueSize: number;
    readonly state: CodecState;
    close(): void;
    configure(config: VideoEncoderConfig): void;
    encode(frame: VideoFrame, options?: VideoEncoderEncodeOptions): void;
    flush(): Promise<void>;
    reset(): void;
}

declare var VideoEncoder: {
    prototype: VideoEncoder;
    new(init: VideoEncoderInit): VideoEncoder;
    isConfigSupported(config: VideoEncoderConfig): Promise<VideoEncoderSupport>;
};

interface VideoFrame {
    readonly codedHeight: number;
    readonly codedRegion: VideoFrameRegion;
    readonly codedWidth: number;
    readonly cropHeight: number;
    readonly cropLeft: number;
    readonly cropTop: number;
    readonly cropWidth: number;
    readonly displayHeight: number;
    readonly displayWidth: number;
    readonly duration: number | null;
    readonly format: VideoPixelFormat | null;
    readonly planes: ReadonlyArray<Plane> | null;
    readonly timestamp: number | null;
    readonly visibleRegion: VideoFrameRegion;
    allocationSize(options?: VideoFrameReadIntoOptions): number;
    clone(): VideoFrame;
    close(): void;
    readInto(destination: BufferSource, options?: VideoFrameReadIntoOptions): Promise<PlaneLayout[]>;
}

declare var VideoFrame: {
    prototype: VideoFrame;
    new(source: HTMLOrSVGImageElement | HTMLVideoElement | HTMLCanvasElement | ImageBitmap | OffscreenCanvas | VideoFrame, init?: VideoFrameInit): VideoFrame;
    new(format: VideoPixelFormat, planes: PlaneInit[], init: VideoFramePlaneInit): VideoFrame;
};

interface AudioFrameOutputCallback {
    (output: AudioFrame): void;
}

interface EncodedAudioChunkOutputCallback {
    (output: EncodedAudioChunk, metadata: EncodedAudioChunkMetadata): void;
}

interface EncodedVideoChunkOutputCallback {
    (chunk: EncodedVideoChunk, metadata: EncodedVideoChunkMetadata): void;
}

interface VideoFrameOutputCallback {
    (output: VideoFrame): void;
}

interface WebCodecsErrorCallback {
    (error: DOMException): void;
}

/**
 * Returns dedicatedWorkerGlobal's name, i.e. the value given to the Worker constructor. Primarily useful for debugging.
 */
declare var name: string;
declare var onmessage: ((this: DedicatedWorkerGlobalScope, ev: MessageEvent) => any) | null;
declare var onmessageerror: ((this: DedicatedWorkerGlobalScope, ev: MessageEvent) => any) | null;
/**
 * Aborts dedicatedWorkerGlobal.
 */
declare function close(): void;
/**
 * Clones message and transmits it to the Worker object associated with dedicatedWorkerGlobal. transfer can be passed as a list of objects that are to be transferred rather than cloned.
 */
declare function postMessage(message: any, transfer: Transferable[]): void;
declare function postMessage(message: any, options?: PostMessageOptions): void;
/**
 * Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.
 */
declare function dispatchEvent(event: Event): boolean;
/**
 * Returns workerGlobal's WorkerLocation object.
 */
declare var location: WorkerLocation;
declare var navigator: WorkerNavigator;
declare var onerror: ((this: DedicatedWorkerGlobalScope, ev: ErrorEvent) => any) | null;
declare var onlanguagechange: ((this: DedicatedWorkerGlobalScope, ev: Event) => any) | null;
declare var onoffline: ((this: DedicatedWorkerGlobalScope, ev: Event) => any) | null;
declare var ononline: ((this: DedicatedWorkerGlobalScope, ev: Event) => any) | null;
declare var onrejectionhandled: ((this: DedicatedWorkerGlobalScope, ev: PromiseRejectionEvent) => any) | null;
declare var onunhandledrejection: ((this: DedicatedWorkerGlobalScope, ev: PromiseRejectionEvent) => any) | null;
/**
 * Returns workerGlobal.
 */
declare var self: WorkerGlobalScope & typeof globalThis;
/**
 * Fetches each URL in urls, executes them one-by-one in the order they are passed, and then returns (or throws if something went amiss).
 */
declare function importScripts(...urls: string[]): void;
/**
 * Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.
 */
declare function dispatchEvent(event: Event): boolean;
declare var caches: CacheStorage;
declare var crypto: Crypto;
declare var indexedDB: IDBFactory;
declare var isSecureContext: boolean;
declare var origin: string;
declare var performance: Performance;
declare function atob(data: string): string;
declare function btoa(data: string): string;
declare function clearInterval(handle?: number): void;
declare function clearTimeout(handle?: number): void;
declare function createImageBitmap(image: ImageBitmapSource, options?: ImageBitmapOptions): Promise<ImageBitmap>;
declare function createImageBitmap(image: ImageBitmapSource, sx: number, sy: number, sw: number, sh: number, options?: ImageBitmapOptions): Promise<ImageBitmap>;
declare function fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;
declare function queueMicrotask(callback: VoidFunction): void;
declare function setInterval(handler: TimerHandler, timeout?: number, ...arguments: any[]): number;
declare function setTimeout(handler: TimerHandler, timeout?: number, ...arguments: any[]): number;
declare function cancelAnimationFrame(handle: number): void;
declare function requestAnimationFrame(callback: FrameRequestCallback): number;
declare function addEventListener<K extends keyof DedicatedWorkerGlobalScopeEventMap>(type: K, listener: (this: DedicatedWorkerGlobalScope, ev: DedicatedWorkerGlobalScopeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
declare function addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
declare function removeEventListener<K extends keyof DedicatedWorkerGlobalScopeEventMap>(type: K, listener: (this: DedicatedWorkerGlobalScope, ev: DedicatedWorkerGlobalScopeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
declare function removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
type ImageBufferSource = ArrayBuffer | ArrayBufferView | ReadableStream;
type VideoPixelFormat = string;
type AlphaOption = "discard" | "keep";
type AvcBitstreamFormat = "annexb" | "avc";
type CodecState = "closed" | "configured" | "unconfigured";
type EncodedAudioChunkType = "delta" | "key";
type EncodedVideoChunkType = "delta" | "key";
type HardwarePreference = "allow" | "deny" | "require";
