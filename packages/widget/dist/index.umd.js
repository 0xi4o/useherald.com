var __defProp = Object.defineProperty,
	__defProps = Object.defineProperties,
	__getOwnPropDescs = Object.getOwnPropertyDescriptors,
	__getOwnPropSymbols = Object.getOwnPropertySymbols,
	__hasOwnProp = Object.prototype.hasOwnProperty,
	__propIsEnum = Object.prototype.propertyIsEnumerable,
	__defNormalProp = (e, t, r) =>
		t in e
			? __defProp(e, t, {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: r,
			  })
			: (e[t] = r),
	__spreadValues = (e, t) => {
		for (var r in t || (t = {}))
			__hasOwnProp.call(t, r) && __defNormalProp(e, r, t[r]);
		if (__getOwnPropSymbols)
			for (var r of __getOwnPropSymbols(t))
				__propIsEnum.call(t, r) && __defNormalProp(e, r, t[r]);
		return e;
	},
	__spreadProps = (e, t) => __defProps(e, __getOwnPropDescs(t));
!(function (e, t) {
	'object' == typeof exports && 'undefined' != typeof module
		? t(exports, require('react'))
		: 'function' == typeof define && define.amd
		? define(['exports', 'react'], t)
		: t(
				((e =
					'undefined' != typeof globalThis ? globalThis : e || self)[
					'herald-widget'
				] = {}),
				e.React
		  );
})(this, function (e, t) {
	'use strict';
	function r(e) {
		return e && 'object' == typeof e && 'default' in e ? e : { default: e };
	}
	var n,
		a,
		o,
		i,
		s = r(t);
	function l() {
		return (l =
			Object.assign ||
			function (e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = arguments[t];
					for (var n in r)
						Object.prototype.hasOwnProperty.call(r, n) &&
							(e[n] = r[n]);
				}
				return e;
			}).apply(this, arguments);
	}
	function c(e, t) {
		if (null == e) return {};
		var r,
			n,
			a = {},
			o = Object.keys(e);
		for (n = 0; n < o.length; n++)
			(r = o[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
		return a;
	}
	function u(e, t) {
		(null == t || t > e.length) && (t = e.length);
		for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
		return n;
	}
	function p(e, t) {
		var r;
		if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
			if (
				Array.isArray(e) ||
				(r = (function (e, t) {
					if (e) {
						if ('string' == typeof e) return u(e, t);
						var r = Object.prototype.toString.call(e).slice(8, -1);
						return (
							'Object' === r &&
								e.constructor &&
								(r = e.constructor.name),
							'Map' === r || 'Set' === r
								? Array.from(e)
								: 'Arguments' === r ||
								  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
										r
								  )
								? u(e, t)
								: void 0
						);
					}
				})(e)) ||
				(t && e && 'number' == typeof e.length)
			) {
				r && (e = r);
				var n = 0;
				return function () {
					return n >= e.length
						? { done: !0 }
						: { done: !1, value: e[n++] };
				};
			}
			throw new TypeError(
				'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
			);
		}
		return (r = e[Symbol.iterator]()).next.bind(r);
	}
	function d(e, t) {
		if (e in t) {
			for (
				var r = t[e],
					n = arguments.length,
					a = new Array(n > 2 ? n - 2 : 0),
					o = 2;
				o < n;
				o++
			)
				a[o - 2] = arguments[o];
			return 'function' == typeof r ? r.apply(void 0, a) : r;
		}
		var i = new Error(
			'Tried to handle "' +
				e +
				'" but there is no handler defined. Only defined handlers are: ' +
				Object.keys(t)
					.map(function (e) {
						return '"' + e + '"';
					})
					.join(', ') +
				'.'
		);
		throw (Error.captureStackTrace && Error.captureStackTrace(i, d), i);
	}
	function f(e) {
		var t = e.props,
			r = e.slot,
			a = e.defaultTag,
			i = e.features,
			s = e.visible,
			u = void 0 === s || s,
			p = e.name;
		if (u) return h(t, r, a, p);
		var f = null != i ? i : n.None;
		if (f & n.Static) {
			var m = t.static,
				g = void 0 !== m && m,
				b = c(t, ['static']);
			if (g) return h(b, r, a, p);
		}
		if (f & n.RenderStrategy) {
			var v,
				y = t.unmount,
				w = void 0 === y || y,
				x = c(t, ['unmount']);
			return d(
				w ? o.Unmount : o.Hidden,
				(((v = {})[o.Unmount] = function () {
					return null;
				}),
				(v[o.Hidden] = function () {
					return h(
						l({}, x, { hidden: !0, style: { display: 'none' } }),
						r,
						a,
						p
					);
				}),
				v)
			);
		}
		return h(t, r, a, p);
	}
	function h(e, r, n, a) {
		var o;
		void 0 === r && (r = {});
		var i = g(e, ['unmount', 'static']),
			s = i.as,
			l = void 0 === s ? n : s,
			u = i.children,
			d = i.refName,
			f = void 0 === d ? 'ref' : d,
			h = c(i, ['as', 'children', 'refName']),
			m = void 0 !== e.ref ? (((o = {})[f] = e.ref), o) : {},
			b = 'function' == typeof u ? u(r) : u;
		if (
			(h.className &&
				'function' == typeof h.className &&
				(h.className = h.className(r)),
			l === t.Fragment && Object.keys(h).length > 0)
		) {
			if (!t.isValidElement(b) || (Array.isArray(b) && b.length > 1))
				throw new Error(
					[
						'Passing props on "Fragment"!',
						'',
						'The current component <' +
							a +
							' /> is rendering a "Fragment".',
						'However we need to passthrough the following props:',
						Object.keys(h)
							.map(function (e) {
								return '  - ' + e;
							})
							.join('\n'),
						'',
						'You can apply a few solutions:',
						[
							'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
							'Render a single element as the child so that we can forward the props onto that element.',
						]
							.map(function (e) {
								return '  - ' + e;
							})
							.join('\n'),
					].join('\n')
				);
			return t.cloneElement(
				b,
				Object.assign(
					{},
					(function (e, t, r) {
						for (
							var n,
								a = Object.assign({}, e),
								o = function () {
									var r,
										o = n.value;
									void 0 !== e[o] &&
										void 0 !== t[o] &&
										Object.assign(
											a,
											(((r = {})[o] = function (r) {
												r.defaultPrevented || e[o](r),
													r.defaultPrevented ||
														t[o](r);
											}),
											r)
										);
								},
								i = p(r);
							!(n = i()).done;

						)
							o();
						return a;
					})(
						(function (e) {
							var t = Object.assign({}, e);
							for (var r in t) void 0 === t[r] && delete t[r];
							return t;
						})(g(h, ['ref'])),
						b.props,
						['onClick']
					),
					m
				)
			);
		}
		return t.createElement(
			l,
			Object.assign({}, g(h, ['ref']), l !== t.Fragment && m),
			b
		);
	}
	function m(e) {
		var r;
		return Object.assign(t.forwardRef(e), {
			displayName: null != (r = e.displayName) ? r : e.name,
		});
	}
	function g(e, t) {
		void 0 === t && (t = []);
		for (var r, n = Object.assign({}, e), a = p(t); !(r = a()).done; ) {
			var o = r.value;
			o in n && delete n[o];
		}
		return n;
	}
	((a = n || (n = {}))[(a.None = 0)] = 'None'),
		(a[(a.RenderStrategy = 1)] = 'RenderStrategy'),
		(a[(a.Static = 2)] = 'Static'),
		((i = o || (o = {}))[(i.Unmount = 0)] = 'Unmount'),
		(i[(i.Hidden = 1)] = 'Hidden');
	var b = 'undefined' != typeof window ? t.useLayoutEffect : t.useEffect,
		v = { serverHandoffComplete: !1 };
	function y() {
		var e = t.useState(v.serverHandoffComplete),
			r = e[0],
			n = e[1];
		return (
			t.useEffect(
				function () {
					!0 !== r && n(!0);
				},
				[r]
			),
			t.useEffect(function () {
				!1 === v.serverHandoffComplete &&
					(v.serverHandoffComplete = !0);
			}, []),
			r
		);
	}
	var w,
		x,
		k =
			'undefined' != typeof globalThis
				? globalThis
				: 'undefined' != typeof window
				? window
				: 'undefined' != typeof global
				? global
				: 'undefined' != typeof self
				? self
				: {};
	function S() {
		for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
			r[n] = arguments[n];
		var a = t.useRef(r);
		return (
			t.useEffect(
				function () {
					a.current = r;
				},
				[r]
			),
			t.useCallback(
				function (e) {
					for (var t, r = p(a.current); !(t = r()).done; ) {
						var n = t.value;
						null != n &&
							('function' == typeof n ? n(e) : (n.current = e));
					}
				},
				[a]
			)
		);
	}
	function E(e) {
		for (
			var t, r, n = e.parentElement, a = null;
			n && !(n instanceof HTMLFieldSetElement);

		)
			n instanceof HTMLLegendElement && (a = n), (n = n.parentElement);
		var o =
			null !=
				(t =
					'' ===
					(null == (r = n) ? void 0 : r.getAttribute('disabled'))) &&
			t;
		return (
			(!o ||
				!(function (e) {
					if (!e) return !1;
					var t = e.previousElementSibling;
					for (; null !== t; ) {
						if (t instanceof HTMLLegendElement) return !1;
						t = t.previousElementSibling;
					}
					return !0;
				})(a)) &&
			o
		);
	}
	((x = w || (w = {})).Space = ' '),
		(x.Enter = 'Enter'),
		(x.Escape = 'Escape'),
		(x.Backspace = 'Backspace'),
		(x.ArrowLeft = 'ArrowLeft'),
		(x.ArrowUp = 'ArrowUp'),
		(x.ArrowRight = 'ArrowRight'),
		(x.ArrowDown = 'ArrowDown'),
		(x.Home = 'Home'),
		(x.End = 'End'),
		(x.PageUp = 'PageUp'),
		(x.PageDown = 'PageDown'),
		(x.Tab = 'Tab');
	var q = 0;
	function D() {
		return ++q;
	}
	function T() {
		var e = y(),
			r = t.useState(e ? D : null),
			n = r[0],
			a = r[1];
		return (
			b(
				function () {
					null === n && a(D());
				},
				[n]
			),
			null != n ? '' + n : void 0
		);
	}
	function A(e, r, n) {
		var a = t.useRef(r);
		(a.current = r),
			t.useEffect(
				function () {
					function t(e) {
						a.current.call(window, e);
					}
					return (
						window.addEventListener(e, t, n),
						function () {
							return window.removeEventListener(e, t, n);
						}
					);
				},
				[e, n]
			);
	}
	var L,
		C,
		_,
		O,
		B,
		N,
		P,
		I,
		R = [
			'[contentEditable=true]',
			'[tabindex]',
			'a[href]',
			'area[href]',
			'button:not([disabled])',
			'iframe',
			'input:not([disabled])',
			'select:not([disabled])',
			'textarea:not([disabled])',
		]
			.map(function (e) {
				return e + ":not([tabindex='-1'])";
			})
			.join(',');
	function j(e) {
		return (
			void 0 === e && (e = document.body),
			null == e ? [] : Array.from(e.querySelectorAll(R))
		);
	}
	function M(e, t) {
		var r = Array.isArray(e) ? e : j(e),
			n = document.activeElement,
			a = (function () {
				if (t & (L.First | L.Next)) return B.Next;
				if (t & (L.Previous | L.Last)) return B.Previous;
				throw new Error(
					'Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last'
				);
			})(),
			o = (function () {
				if (t & L.First) return 0;
				if (t & L.Previous) return Math.max(0, r.indexOf(n)) - 1;
				if (t & L.Next) return Math.max(0, r.indexOf(n)) + 1;
				if (t & L.Last) return r.length - 1;
				throw new Error(
					'Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last'
				);
			})(),
			i = t & L.NoScroll ? { preventScroll: !0 } : {},
			s = 0,
			l = r.length,
			c = void 0;
		do {
			var u;
			if (s >= l || s + l <= 0) return _.Error;
			var p = o + s;
			if (t & L.WrapAround) p = (p + l) % l;
			else {
				if (p < 0) return _.Underflow;
				if (p >= l) return _.Overflow;
			}
			null == (u = c = r[p]) || u.focus(i), (s += a);
		} while (c !== document.activeElement);
		return (
			c.hasAttribute('tabindex') || c.setAttribute('tabindex', '0'),
			_.Success
		);
	}
	((C = L || (L = {}))[(C.First = 1)] = 'First'),
		(C[(C.Previous = 2)] = 'Previous'),
		(C[(C.Next = 4)] = 'Next'),
		(C[(C.Last = 8)] = 'Last'),
		(C[(C.WrapAround = 16)] = 'WrapAround'),
		(C[(C.NoScroll = 32)] = 'NoScroll'),
		((O = _ || (_ = {}))[(O.Error = 0)] = 'Error'),
		(O[(O.Overflow = 1)] = 'Overflow'),
		(O[(O.Success = 2)] = 'Success'),
		(O[(O.Underflow = 3)] = 'Underflow'),
		((N = B || (B = {}))[(N.Previous = -1)] = 'Previous'),
		(N[(N.Next = 1)] = 'Next'),
		((I = P || (P = {}))[(I.Strict = 0)] = 'Strict'),
		(I[(I.Loose = 1)] = 'Loose');
	var F,
		V,
		U,
		H,
		G,
		W,
		z,
		$ = t.createContext(null);
	function J() {
		return t.useContext($);
	}
	function Y(e) {
		var t = e.value,
			r = e.children;
		return s.default.createElement($.Provider, { value: t }, r);
	}
	function X(e) {
		var t;
		if (e.type) return e.type;
		var r = null != (t = e.as) ? t : 'button';
		return 'string' == typeof r && 'button' === r.toLowerCase()
			? 'button'
			: void 0;
	}
	function Z() {
		var e = [],
			t = {
				requestAnimationFrame: (function (e) {
					function t() {
						return e.apply(this, arguments);
					}
					return (
						(t.toString = function () {
							return e.toString();
						}),
						t
					);
				})(function () {
					var e = requestAnimationFrame.apply(void 0, arguments);
					t.add(function () {
						return cancelAnimationFrame(e);
					});
				}),
				nextFrame: function () {
					for (
						var e = arguments.length, r = new Array(e), n = 0;
						n < e;
						n++
					)
						r[n] = arguments[n];
					t.requestAnimationFrame(function () {
						t.requestAnimationFrame.apply(t, r);
					});
				},
				setTimeout: (function (e) {
					function t() {
						return e.apply(this, arguments);
					}
					return (
						(t.toString = function () {
							return e.toString();
						}),
						t
					);
				})(function () {
					var e = setTimeout.apply(void 0, arguments);
					t.add(function () {
						return clearTimeout(e);
					});
				}),
				add: function (t) {
					e.push(t);
				},
				dispose: function () {
					for (var t, r = p(e.splice(0)); !(t = r()).done; ) {
						(0, t.value)();
					}
				},
			};
		return t;
	}
	($.displayName = 'OpenClosedContext'),
		((V = F || (F = {}))[(V.Open = 0)] = 'Open'),
		(V[(V.Closed = 1)] = 'Closed'),
		((G = H || (H = {}))[(G.Open = 0)] = 'Open'),
		(G[(G.Closed = 1)] = 'Closed'),
		((z = W || (W = {}))[(z.TogglePopover = 0)] = 'TogglePopover'),
		(z[(z.ClosePopover = 1)] = 'ClosePopover'),
		(z[(z.SetButton = 2)] = 'SetButton'),
		(z[(z.SetButtonId = 3)] = 'SetButtonId'),
		(z[(z.SetPanel = 4)] = 'SetPanel'),
		(z[(z.SetPanelId = 5)] = 'SetPanelId');
	var Q =
			(((U = {})[W.TogglePopover] = function (e) {
				var t;
				return l({}, e, {
					popoverState: d(
						e.popoverState,
						((t = {}),
						(t[H.Open] = H.Closed),
						(t[H.Closed] = H.Open),
						t)
					),
				});
			}),
			(U[W.ClosePopover] = function (e) {
				return e.popoverState === H.Closed
					? e
					: l({}, e, { popoverState: H.Closed });
			}),
			(U[W.SetButton] = function (e, t) {
				return e.button === t.button
					? e
					: l({}, e, { button: t.button });
			}),
			(U[W.SetButtonId] = function (e, t) {
				return e.buttonId === t.buttonId
					? e
					: l({}, e, { buttonId: t.buttonId });
			}),
			(U[W.SetPanel] = function (e, t) {
				return e.panel === t.panel ? e : l({}, e, { panel: t.panel });
			}),
			(U[W.SetPanelId] = function (e, t) {
				return e.panelId === t.panelId
					? e
					: l({}, e, { panelId: t.panelId });
			}),
			U),
		K = t.createContext(null);
	function ee(e) {
		var r = t.useContext(K);
		if (null === r) {
			var n = new Error(
				'<' +
					e +
					' /> is missing a parent <' +
					se.name +
					' /> component.'
			);
			throw (
				(Error.captureStackTrace && Error.captureStackTrace(n, ee), n)
			);
		}
		return r;
	}
	K.displayName = 'PopoverContext';
	var te = t.createContext(null);
	function re(e) {
		var r = t.useContext(te);
		if (null === r) {
			var n = new Error(
				'<' +
					e +
					' /> is missing a parent <' +
					se.name +
					' /> component.'
			);
			throw (
				(Error.captureStackTrace && Error.captureStackTrace(n, re), n)
			);
		}
		return r;
	}
	te.displayName = 'PopoverAPIContext';
	var ne = t.createContext(null);
	function ae() {
		return t.useContext(ne);
	}
	ne.displayName = 'PopoverGroupContext';
	var oe = t.createContext(null);
	function ie(e, t) {
		return d(t.type, Q, e, t);
	}
	oe.displayName = 'PopoverPanelContext';
	function se(e) {
		var r,
			n = 'headlessui-popover-button-' + T(),
			a = 'headlessui-popover-panel-' + T(),
			o = t.useReducer(ie, {
				popoverState: H.Closed,
				button: null,
				buttonId: n,
				panel: null,
				panelId: a,
			}),
			i = o[0],
			l = i.popoverState,
			c = i.button,
			u = i.panel,
			p = o[1];
		t.useEffect(
			function () {
				return p({ type: W.SetButtonId, buttonId: n });
			},
			[n, p]
		),
			t.useEffect(
				function () {
					return p({ type: W.SetPanelId, panelId: a });
				},
				[a, p]
			);
		var h = t.useMemo(
				function () {
					return {
						buttonId: n,
						panelId: a,
						close: function () {
							return p({ type: W.ClosePopover });
						},
					};
				},
				[n, a, p]
			),
			m = ae(),
			g = null == m ? void 0 : m.registerPopover,
			b = t.useCallback(
				function () {
					var e;
					return null !=
						(e = null == m ? void 0 : m.isFocusWithinPopoverGroup())
						? e
						: (null == c
								? void 0
								: c.contains(document.activeElement)) ||
								(null == u
									? void 0
									: u.contains(document.activeElement));
				},
				[m, c, u]
			);
		t.useEffect(
			function () {
				return null == g ? void 0 : g(h);
			},
			[g, h]
		),
			A(
				'focus',
				function () {
					l === H.Open &&
						(b() || (c && u && p({ type: W.ClosePopover })));
				},
				!0
			),
			A('mousedown', function (e) {
				var t,
					r,
					n,
					a = e.target;
				l === H.Open &&
					((null == c ? void 0 : c.contains(a)) ||
						(null == u ? void 0 : u.contains(a)) ||
						(p({ type: W.ClosePopover }),
						(t = a),
						void 0 === (r = P.Loose) && (r = P.Strict),
						(t !== document.body &&
							d(
								r,
								(((n = {})[P.Strict] = function () {
									return t.matches(R);
								}),
								(n[P.Loose] = function () {
									for (var e = t; null !== e; ) {
										if (e.matches(R)) return !0;
										e = e.parentElement;
									}
									return !1;
								}),
								n)
							)) ||
							(e.preventDefault(), null == c || c.focus())));
			});
		var v = t.useCallback(
				function (e) {
					p({ type: W.ClosePopover });
					var t = e
						? e instanceof HTMLElement
							? e
							: e.current instanceof HTMLElement
							? e.current
							: c
						: c;
					null == t || t.focus();
				},
				[p, c]
			),
			y = t.useMemo(
				function () {
					return { close: v };
				},
				[v]
			),
			w = t.useMemo(
				function () {
					return { open: l === H.Open, close: v };
				},
				[l, v]
			);
		return s.default.createElement(
			K.Provider,
			{ value: o },
			s.default.createElement(
				te.Provider,
				{ value: y },
				s.default.createElement(
					Y,
					{
						value: d(
							l,
							((r = {}),
							(r[H.Open] = F.Open),
							(r[H.Closed] = F.Closed),
							r)
						),
					},
					f({ props: e, slot: w, defaultTag: 'div', name: 'Popover' })
				)
			)
		);
	}
	var le,
		ce,
		ue = m(function e(r, n) {
			var a = ee([se.name, e.name].join('.')),
				o = a[0],
				i = a[1],
				s = t.useRef(null),
				c = ae(),
				u = null == c ? void 0 : c.closeOthers,
				p = t.useContext(oe),
				d = null !== p && p === o.panelId,
				h = S(
					s,
					n,
					d
						? null
						: function (e) {
								return i({ type: W.SetButton, button: e });
						  }
				),
				m = S(s, n),
				g = t.useRef(null),
				v = t.useRef(
					'undefined' == typeof window ? null : document.activeElement
				);
			A(
				'focus',
				function () {
					(v.current = g.current),
						(g.current = document.activeElement);
				},
				!0
			);
			var y = t.useCallback(
					function (e) {
						var t;
						if (d) {
							if (o.popoverState === H.Closed) return;
							switch (e.key) {
								case w.Space:
								case w.Enter:
									e.preventDefault(),
										e.stopPropagation(),
										i({ type: W.ClosePopover }),
										null == (t = o.button) || t.focus();
							}
						} else
							switch (e.key) {
								case w.Space:
								case w.Enter:
									e.preventDefault(),
										e.stopPropagation(),
										o.popoverState === H.Closed &&
											(null == u || u(o.buttonId)),
										i({ type: W.TogglePopover });
									break;
								case w.Escape:
									if (o.popoverState !== H.Open)
										return null == u
											? void 0
											: u(o.buttonId);
									if (!s.current) return;
									if (
										!s.current.contains(
											document.activeElement
										)
									)
										return;
									i({ type: W.ClosePopover });
									break;
								case w.Tab:
									if (o.popoverState !== H.Open) return;
									if (!o.panel) return;
									if (!o.button) return;
									if (e.shiftKey) {
										var r;
										if (!v.current) return;
										if (
											null == (r = o.button)
												? void 0
												: r.contains(v.current)
										)
											return;
										if (o.panel.contains(v.current)) return;
										var n = j(),
											a = n.indexOf(v.current);
										if (n.indexOf(o.button) > a) return;
										e.preventDefault(),
											e.stopPropagation(),
											M(o.panel, L.Last);
									} else
										e.preventDefault(),
											e.stopPropagation(),
											M(o.panel, L.First);
							}
					},
					[i, o.popoverState, o.buttonId, o.button, o.panel, s, u, d]
				),
				x = t.useCallback(
					function (e) {
						var t;
						if (
							!d &&
							(e.key === w.Space && e.preventDefault(),
							o.popoverState === H.Open && o.panel && o.button)
						)
							switch (e.key) {
								case w.Tab:
									if (!v.current) return;
									if (
										null == (t = o.button)
											? void 0
											: t.contains(v.current)
									)
										return;
									if (o.panel.contains(v.current)) return;
									var r = j(),
										n = r.indexOf(v.current);
									if (r.indexOf(o.button) > n) return;
									e.preventDefault(),
										e.stopPropagation(),
										M(o.panel, L.Last);
							}
					},
					[o.popoverState, o.panel, o.button, d]
				),
				k = t.useCallback(
					function (e) {
						var t, n;
						E(e.currentTarget) ||
							r.disabled ||
							(d
								? (i({ type: W.ClosePopover }),
								  null == (t = o.button) || t.focus())
								: (o.popoverState === H.Closed &&
										(null == u || u(o.buttonId)),
								  null == (n = o.button) || n.focus(),
								  i({ type: W.TogglePopover })));
					},
					[i, o.button, o.popoverState, o.buttonId, r.disabled, u, d]
				),
				q = t.useMemo(
					function () {
						return { open: o.popoverState === H.Open };
					},
					[o]
				),
				D = (function (e, r) {
					var n = t.useState(function () {
							return X(e);
						}),
						a = n[0],
						o = n[1];
					return (
						b(
							function () {
								o(X(e));
							},
							[e.type, e.as]
						),
						b(
							function () {
								a ||
									(r.current &&
										r.current instanceof
											HTMLButtonElement &&
										!r.current.hasAttribute('type') &&
										o('button'));
							},
							[a, r]
						),
						a
					);
				})(r, s);
			return f({
				props: l(
					{},
					r,
					d
						? { ref: m, type: D, onKeyDown: y, onClick: k }
						: {
								ref: h,
								id: o.buttonId,
								type: D,
								'aria-expanded': r.disabled
									? void 0
									: o.popoverState === H.Open,
								'aria-controls': o.panel ? o.panelId : void 0,
								onKeyDown: y,
								onKeyUp: x,
								onClick: k,
						  }
				),
				slot: q,
				defaultTag: 'button',
				name: 'Popover.Button',
			});
		}),
		pe = n.RenderStrategy | n.Static,
		de = m(function e(r, n) {
			var a = ee([se.name, e.name].join('.')),
				o = a[0].popoverState,
				i = a[1],
				s = S(n),
				c = 'headlessui-popover-overlay-' + T(),
				u = J(),
				p = null !== u ? u === F.Open : o === H.Open,
				d = t.useCallback(
					function (e) {
						if (E(e.currentTarget)) return e.preventDefault();
						i({ type: W.ClosePopover });
					},
					[i]
				),
				h = t.useMemo(
					function () {
						return { open: o === H.Open };
					},
					[o]
				);
			return f({
				props: l({}, r, {
					ref: s,
					id: c,
					'aria-hidden': !0,
					onClick: d,
				}),
				slot: h,
				defaultTag: 'div',
				features: pe,
				visible: p,
				name: 'Popover.Overlay',
			});
		}),
		fe = n.RenderStrategy | n.Static,
		he = m(function e(r, n) {
			var a = r.focus,
				o = void 0 !== a && a,
				i = c(r, ['focus']),
				u = ee([se.name, e.name].join('.')),
				p = u[0],
				d = u[1],
				h = re([se.name, e.name].join('.')).close,
				m = t.useRef(null),
				g = S(m, n, function (e) {
					d({ type: W.SetPanel, panel: e });
				}),
				b = J(),
				v = null !== b ? b === F.Open : p.popoverState === H.Open,
				y = t.useCallback(
					function (e) {
						var t;
						switch (e.key) {
							case w.Escape:
								if (p.popoverState !== H.Open) return;
								if (!m.current) return;
								if (!m.current.contains(document.activeElement))
									return;
								e.preventDefault(),
									d({ type: W.ClosePopover }),
									null == (t = p.button) || t.focus();
						}
					},
					[p, m, d]
				);
			t.useEffect(
				function () {
					return function () {
						return d({ type: W.SetPanel, panel: null });
					};
				},
				[d]
			),
				t.useEffect(
					function () {
						var e;
						p.popoverState !== H.Closed ||
							(null != (e = r.unmount) && !e) ||
							d({ type: W.SetPanel, panel: null });
					},
					[p.popoverState, r.unmount, d]
				),
				t.useEffect(
					function () {
						if (o && p.popoverState === H.Open && m.current) {
							var e = document.activeElement;
							m.current.contains(e) || M(m.current, L.First);
						}
					},
					[o, m, p.popoverState]
				),
				A('keydown', function (e) {
					if (
						p.popoverState === H.Open &&
						m.current &&
						e.key === w.Tab &&
						document.activeElement &&
						m.current &&
						m.current.contains(document.activeElement)
					) {
						e.preventDefault();
						var t,
							r = M(m.current, e.shiftKey ? L.Previous : L.Next);
						if (r === _.Underflow)
							return null == (t = p.button) ? void 0 : t.focus();
						if (r === _.Overflow) {
							if (!p.button) return;
							var n = j(),
								a = n.indexOf(p.button);
							M(
								n.splice(a + 1).filter(function (e) {
									var t;
									return !(null == (t = m.current)
										? void 0
										: t.contains(e));
								}),
								L.First
							) === _.Error && M(document.body, L.First);
						}
					}
				}),
				A(
					'focus',
					function () {
						var e;
						o &&
							p.popoverState === H.Open &&
							m.current &&
							((null == (e = m.current)
								? void 0
								: e.contains(document.activeElement)) ||
								d({ type: W.ClosePopover }));
					},
					!0
				);
			var x = t.useMemo(
					function () {
						return { open: p.popoverState === H.Open, close: h };
					},
					[p, h]
				),
				k = { ref: g, id: p.panelId, onKeyDown: y };
			return s.default.createElement(
				oe.Provider,
				{ value: p.panelId },
				f({
					props: l({}, i, k),
					slot: x,
					defaultTag: 'div',
					features: fe,
					visible: v,
					name: 'Popover.Panel',
				})
			);
		});
	function me() {
		var e = t.useRef(!0);
		return (
			t.useEffect(function () {
				e.current = !1;
			}, []),
			e.current
		);
	}
	function ge(e) {
		for (
			var t,
				r = arguments.length,
				n = new Array(r > 1 ? r - 1 : 0),
				a = 1;
			a < r;
			a++
		)
			n[a - 1] = arguments[a];
		e && n.length > 0 && (t = e.classList).add.apply(t, n);
	}
	function be(e) {
		for (
			var t,
				r = arguments.length,
				n = new Array(r > 1 ? r - 1 : 0),
				a = 1;
			a < r;
			a++
		)
			n[a - 1] = arguments[a];
		e && n.length > 0 && (t = e.classList).remove.apply(t, n);
	}
	function ve(e, t, r, n, a, o) {
		var i,
			s,
			l = Z(),
			c =
				void 0 !== o
					? ((i = o),
					  (s = { called: !1 }),
					  function () {
							if (!s.called)
								return (
									(s.called = !0), i.apply(void 0, arguments)
								);
					  })
					: function () {};
		return (
			be.apply(void 0, [e].concat(a)),
			ge.apply(void 0, [e].concat(t, r)),
			l.nextFrame(function () {
				be.apply(void 0, [e].concat(r)),
					ge.apply(void 0, [e].concat(n)),
					l.add(
						(function (e, t) {
							var r = Z();
							if (!e) return r.dispose;
							var n = getComputedStyle(e),
								a = [
									n.transitionDuration,
									n.transitionDelay,
								].map(function (e) {
									var t = e
										.split(',')
										.filter(Boolean)
										.map(function (e) {
											return e.includes('ms')
												? parseFloat(e)
												: 1e3 * parseFloat(e);
										})
										.sort(function (e, t) {
											return t - e;
										})[0];
									return void 0 === t ? 0 : t;
								}),
								o = a[0],
								i = a[1];
							return (
								0 !== o
									? r.setTimeout(function () {
											t(le.Finished);
									  }, o + i)
									: t(le.Finished),
								r.add(function () {
									return t(le.Cancelled);
								}),
								r.dispose
							);
						})(e, function (r) {
							return (
								be.apply(void 0, [e].concat(n, t)),
								ge.apply(void 0, [e].concat(a)),
								c(r)
							);
						})
					);
			}),
			l.add(function () {
				return be.apply(void 0, [e].concat(t, r, n, a));
			}),
			l.add(function () {
				return c(le.Cancelled);
			}),
			l.dispose
		);
	}
	function ye(e) {
		return (
			void 0 === e && (e = ''),
			t.useMemo(
				function () {
					return e.split(' ').filter(function (e) {
						return e.trim().length > 1;
					});
				},
				[e]
			)
		);
	}
	(se.Button = ue),
		(se.Overlay = de),
		(se.Panel = he),
		(se.Group = function (e) {
			var r = t.useRef(null),
				n = t.useState([]),
				a = n[0],
				o = n[1],
				i = t.useCallback(
					function (e) {
						o(function (t) {
							var r = t.indexOf(e);
							if (-1 !== r) {
								var n = t.slice();
								return n.splice(r, 1), n;
							}
							return t;
						});
					},
					[o]
				),
				c = t.useCallback(
					function (e) {
						return (
							o(function (t) {
								return [].concat(t, [e]);
							}),
							function () {
								return i(e);
							}
						);
					},
					[o, i]
				),
				u = t.useCallback(
					function () {
						var e,
							t = document.activeElement;
						return (
							!!(null == (e = r.current)
								? void 0
								: e.contains(t)) ||
							a.some(function (e) {
								var r, n;
								return (
									(null ==
									(r = document.getElementById(e.buttonId))
										? void 0
										: r.contains(t)) ||
									(null ==
									(n = document.getElementById(e.panelId))
										? void 0
										: n.contains(t))
								);
							})
						);
					},
					[r, a]
				),
				d = t.useCallback(
					function (e) {
						for (var t, r = p(a); !(t = r()).done; ) {
							var n = t.value;
							n.buttonId !== e && n.close();
						}
					},
					[a]
				),
				h = t.useMemo(
					function () {
						return {
							registerPopover: c,
							unregisterPopover: i,
							isFocusWithinPopoverGroup: u,
							closeOthers: d,
						};
					},
					[c, i, u, d]
				),
				m = t.useMemo(function () {
					return {};
				}, []),
				g = { ref: r },
				b = e;
			return s.default.createElement(
				ne.Provider,
				{ value: h },
				f({
					props: l({}, b, g),
					slot: m,
					defaultTag: 'div',
					name: 'Popover.Group',
				})
			);
		}),
		((ce = le || (le = {})).Finished = 'finished'),
		(ce.Cancelled = 'cancelled');
	var we,
		xe,
		ke = t.createContext(null);
	(ke.displayName = 'TransitionContext'),
		((xe = we || (we = {})).Visible = 'visible'),
		(xe.Hidden = 'hidden');
	var Se = t.createContext(null);
	function Ee(e) {
		return 'children' in e
			? Ee(e.children)
			: e.current.filter(function (e) {
					return e.state === we.Visible;
			  }).length > 0;
	}
	function qe(e) {
		var r = t.useRef(e),
			n = t.useRef([]),
			a = (function () {
				var e = t.useRef(!1);
				return (
					t.useEffect(function () {
						return (
							(e.current = !0),
							function () {
								e.current = !1;
							}
						);
					}, []),
					e
				);
			})();
		t.useEffect(
			function () {
				r.current = e;
			},
			[e]
		);
		var i = t.useCallback(
				function (e, t) {
					var i;
					void 0 === t && (t = o.Hidden);
					var s = n.current.findIndex(function (t) {
						return t.id === e;
					});
					-1 !== s &&
						(d(
							t,
							(((i = {})[o.Unmount] = function () {
								n.current.splice(s, 1);
							}),
							(i[o.Hidden] = function () {
								n.current[s].state = we.Hidden;
							}),
							i)
						),
						!Ee(n) &&
							a.current &&
							(null == r.current || r.current()));
				},
				[r, a, n]
			),
			s = t.useCallback(
				function (e) {
					var t = n.current.find(function (t) {
						return t.id === e;
					});
					return (
						t
							? t.state !== we.Visible && (t.state = we.Visible)
							: n.current.push({ id: e, state: we.Visible }),
						function () {
							return i(e, o.Unmount);
						}
					);
				},
				[n, i]
			);
		return t.useMemo(
			function () {
				return { children: n, register: s, unregister: i };
			},
			[s, i, n]
		);
	}
	function De() {}
	Se.displayName = 'NestingContext';
	var Te = ['beforeEnter', 'afterEnter', 'beforeLeave', 'afterLeave'];
	function Ae(e) {
		for (var t, r = {}, n = p(Te); !(t = n()).done; ) {
			var a,
				o = t.value;
			r[o] = null != (a = e[o]) ? a : De;
		}
		return r;
	}
	var Le = n.RenderStrategy;
	function Ce(e) {
		var r,
			n = e.beforeEnter,
			a = e.afterEnter,
			i = e.beforeLeave,
			u = e.afterLeave,
			p = e.enter,
			h = e.enterFrom,
			m = e.enterTo,
			g = e.entered,
			v = e.leave,
			w = e.leaveFrom,
			x = e.leaveTo,
			k = c(e, [
				'beforeEnter',
				'afterEnter',
				'beforeLeave',
				'afterLeave',
				'enter',
				'enterFrom',
				'enterTo',
				'entered',
				'leave',
				'leaveFrom',
				'leaveTo',
			]),
			S = t.useRef(null),
			E = t.useState(we.Visible),
			q = E[0],
			D = E[1],
			A = k.unmount ? o.Unmount : o.Hidden,
			L = (function () {
				var e = t.useContext(ke);
				if (null === e)
					throw new Error(
						'A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.'
					);
				return e;
			})(),
			C = L.show,
			_ = L.appear,
			O = (function () {
				var e = t.useContext(Se);
				if (null === e)
					throw new Error(
						'A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.'
					);
				return e;
			})(),
			B = O.register,
			N = O.unregister,
			P = me(),
			I = T(),
			R = t.useRef(!1),
			j = qe(function () {
				R.current || (D(we.Hidden), N(I), $.current.afterLeave());
			});
		b(
			function () {
				if (I) return B(I);
			},
			[B, I]
		),
			b(
				function () {
					var e;
					A === o.Hidden &&
						I &&
						(C && q !== we.Visible
							? D(we.Visible)
							: d(
									q,
									(((e = {})[we.Hidden] = function () {
										return N(I);
									}),
									(e[we.Visible] = function () {
										return B(I);
									}),
									e)
							  ));
				},
				[q, I, B, N, C, A]
			);
		var M = ye(p),
			V = ye(h),
			U = ye(m),
			H = ye(g),
			G = ye(v),
			W = ye(w),
			z = ye(x),
			$ = (function (e) {
				var r = t.useRef(Ae(e));
				return (
					t.useEffect(
						function () {
							r.current = Ae(e);
						},
						[e]
					),
					r
				);
			})({
				beforeEnter: n,
				afterEnter: a,
				beforeLeave: i,
				afterLeave: u,
			}),
			J = y();
		t.useEffect(
			function () {
				if (J && q === we.Visible && null === S.current)
					throw new Error(
						'Did you forget to passthrough the `ref` to the actual DOM node?'
					);
			},
			[S, q, J]
		);
		var X = P && !_;
		b(
			function () {
				var e = S.current;
				if (e && !X)
					return (
						(R.current = !0),
						C && $.current.beforeEnter(),
						C || $.current.beforeLeave(),
						C
							? ve(e, M, V, U, H, function (e) {
									(R.current = !1),
										e === le.Finished &&
											$.current.afterEnter();
							  })
							: ve(e, G, W, z, H, function (e) {
									(R.current = !1),
										e === le.Finished &&
											(Ee(j) ||
												(D(we.Hidden),
												N(I),
												$.current.afterLeave()));
							  })
					);
			},
			[$, I, R, N, j, S, X, C, M, V, U, G, W, z]
		);
		var Z = { ref: S },
			Q = k;
		return s.default.createElement(
			Se.Provider,
			{ value: j },
			s.default.createElement(
				Y,
				{
					value: d(
						q,
						((r = {}),
						(r[we.Visible] = F.Open),
						(r[we.Hidden] = F.Closed),
						r)
					),
				},
				f({
					props: l({}, Q, Z),
					defaultTag: 'div',
					features: Le,
					visible: q === we.Visible,
					name: 'Transition.Child',
				})
			)
		);
	}
	function _e(e) {
		var r,
			n = e.show,
			a = e.appear,
			o = void 0 !== a && a,
			i = e.unmount,
			u = c(e, ['show', 'appear', 'unmount']),
			p = J();
		void 0 === n &&
			null !== p &&
			(n = d(p, (((r = {})[F.Open] = !0), (r[F.Closed] = !1), r)));
		if (![!0, !1].includes(n))
			throw new Error(
				'A <Transition /> is used but it is missing a `show={true | false}` prop.'
			);
		var h = t.useState(n ? we.Visible : we.Hidden),
			m = h[0],
			g = h[1],
			b = qe(function () {
				g(we.Hidden);
			}),
			v = me(),
			y = t.useMemo(
				function () {
					return { show: n, appear: o || !v };
				},
				[n, o, v]
			);
		t.useEffect(
			function () {
				n ? g(we.Visible) : Ee(b) || g(we.Hidden);
			},
			[n, b]
		);
		var w = { unmount: i };
		return s.default.createElement(
			Se.Provider,
			{ value: b },
			s.default.createElement(
				ke.Provider,
				{ value: y },
				f({
					props: l({}, w, {
						as: t.Fragment,
						children: s.default.createElement(
							Ce,
							Object.assign({}, w, u)
						),
					}),
					defaultTag: t.Fragment,
					features: Le,
					visible: m === we.Visible,
					name: 'Transition',
				})
			)
		);
	}
	function Oe(e, t) {
		if (t.length < e)
			throw new TypeError(
				e +
					' argument' +
					(e > 1 ? 's' : '') +
					' required, but only ' +
					t.length +
					' present'
			);
	}
	function Be(e) {
		Oe(1, arguments);
		var t = Object.prototype.toString.call(e);
		return e instanceof Date ||
			('object' == typeof e && '[object Date]' === t)
			? new Date(e.getTime())
			: 'number' == typeof e || '[object Number]' === t
			? new Date(e)
			: (('string' != typeof e && '[object String]' !== t) ||
					'undefined' == typeof console ||
					(console.warn(
						"Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"
					),
					console.warn(new Error().stack)),
			  new Date(NaN));
	}
	function Ne(e) {
		var t = new Date(
			Date.UTC(
				e.getFullYear(),
				e.getMonth(),
				e.getDate(),
				e.getHours(),
				e.getMinutes(),
				e.getSeconds(),
				e.getMilliseconds()
			)
		);
		return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
	}
	function Pe(e, t) {
		Oe(2, arguments);
		var r = Be(e),
			n = Be(t),
			a = r.getTime() - n.getTime();
		return a < 0 ? -1 : a > 0 ? 1 : a;
	}
	function Ie(e, t) {
		Oe(2, arguments);
		var r = Be(e),
			n = Be(t),
			a = r.getFullYear() - n.getFullYear(),
			o = r.getMonth() - n.getMonth();
		return 12 * a + o;
	}
	function Re(e, t) {
		return Oe(2, arguments), Be(e).getTime() - Be(t).getTime();
	}
	(_e.Child = function (e) {
		var r = null !== t.useContext(ke),
			n = null !== J();
		return !r && n
			? s.default.createElement(_e, Object.assign({}, e))
			: s.default.createElement(Ce, Object.assign({}, e));
	}),
		(_e.Root = _e);
	var je = {
		ceil: Math.ceil,
		round: Math.round,
		floor: Math.floor,
		trunc: function (e) {
			return e < 0 ? Math.ceil(e) : Math.floor(e);
		},
	};
	function Me(e) {
		return e ? je[e] : je.trunc;
	}
	function Fe(e) {
		Oe(1, arguments);
		var t = Be(e);
		return t.setHours(23, 59, 59, 999), t;
	}
	function Ve(e) {
		Oe(1, arguments);
		var t = Be(e),
			r = t.getMonth();
		return (
			t.setFullYear(t.getFullYear(), r + 1, 0),
			t.setHours(23, 59, 59, 999),
			t
		);
	}
	function Ue(e) {
		Oe(1, arguments);
		var t = Be(e);
		return Fe(t).getTime() === Ve(t).getTime();
	}
	function He(e, t) {
		Oe(2, arguments);
		var r,
			n = Be(e),
			a = Be(t),
			o = Pe(n, a),
			i = Math.abs(Ie(n, a));
		if (i < 1) r = 0;
		else {
			1 === n.getMonth() && n.getDate() > 27 && n.setDate(30),
				n.setMonth(n.getMonth() - o * i);
			var s = Pe(n, a) === -o;
			Ue(Be(e)) && 1 === i && 1 === Pe(e, a) && (s = !1),
				(r = o * (i - Number(s)));
		}
		return 0 === r ? 0 : r;
	}
	function Ge(e, t, r) {
		Oe(2, arguments);
		var n = Re(e, t) / 1e3;
		return Me(null == r ? void 0 : r.roundingMethod)(n);
	}
	var We = {
			lessThanXSeconds: {
				one: 'less than a second',
				other: 'less than {{count}} seconds',
			},
			xSeconds: { one: '1 second', other: '{{count}} seconds' },
			halfAMinute: 'half a minute',
			lessThanXMinutes: {
				one: 'less than a minute',
				other: 'less than {{count}} minutes',
			},
			xMinutes: { one: '1 minute', other: '{{count}} minutes' },
			aboutXHours: {
				one: 'about 1 hour',
				other: 'about {{count}} hours',
			},
			xHours: { one: '1 hour', other: '{{count}} hours' },
			xDays: { one: '1 day', other: '{{count}} days' },
			aboutXWeeks: {
				one: 'about 1 week',
				other: 'about {{count}} weeks',
			},
			xWeeks: { one: '1 week', other: '{{count}} weeks' },
			aboutXMonths: {
				one: 'about 1 month',
				other: 'about {{count}} months',
			},
			xMonths: { one: '1 month', other: '{{count}} months' },
			aboutXYears: {
				one: 'about 1 year',
				other: 'about {{count}} years',
			},
			xYears: { one: '1 year', other: '{{count}} years' },
			overXYears: { one: 'over 1 year', other: 'over {{count}} years' },
			almostXYears: {
				one: 'almost 1 year',
				other: 'almost {{count}} years',
			},
		},
		ze = function (e, t, r) {
			var n,
				a = We[e];
			return (
				(n =
					'string' == typeof a
						? a
						: 1 === t
						? a.one
						: a.other.replace('{{count}}', t.toString())),
				null != r && r.addSuffix
					? r.comparison && r.comparison > 0
						? 'in ' + n
						: n + ' ago'
					: n
			);
		};
	function $e(e) {
		return function () {
			var t =
					arguments.length > 0 && void 0 !== arguments[0]
						? arguments[0]
						: {},
				r = t.width ? String(t.width) : e.defaultWidth,
				n = e.formats[r] || e.formats[e.defaultWidth];
			return n;
		};
	}
	var Je = {
			date: $e({
				formats: {
					full: 'EEEE, MMMM do, y',
					long: 'MMMM do, y',
					medium: 'MMM d, y',
					short: 'MM/dd/yyyy',
				},
				defaultWidth: 'full',
			}),
			time: $e({
				formats: {
					full: 'h:mm:ss a zzzz',
					long: 'h:mm:ss a z',
					medium: 'h:mm:ss a',
					short: 'h:mm a',
				},
				defaultWidth: 'full',
			}),
			dateTime: $e({
				formats: {
					full: "{{date}} 'at' {{time}}",
					long: "{{date}} 'at' {{time}}",
					medium: '{{date}}, {{time}}',
					short: '{{date}}, {{time}}',
				},
				defaultWidth: 'full',
			}),
		},
		Ye = {
			lastWeek: "'last' eeee 'at' p",
			yesterday: "'yesterday at' p",
			today: "'today at' p",
			tomorrow: "'tomorrow at' p",
			nextWeek: "eeee 'at' p",
			other: 'P',
		};
	function Xe(e) {
		return function (t, r) {
			var n,
				a = r || {};
			if (
				'formatting' ===
					(a.context ? String(a.context) : 'standalone') &&
				e.formattingValues
			) {
				var o = e.defaultFormattingWidth || e.defaultWidth,
					i = a.width ? String(a.width) : o;
				n = e.formattingValues[i] || e.formattingValues[o];
			} else {
				var s = e.defaultWidth,
					l = a.width ? String(a.width) : e.defaultWidth;
				n = e.values[l] || e.values[s];
			}
			return n[e.argumentCallback ? e.argumentCallback(t) : t];
		};
	}
	function Ze(e) {
		return function (t) {
			var r =
					arguments.length > 1 && void 0 !== arguments[1]
						? arguments[1]
						: {},
				n = r.width,
				a =
					(n && e.matchPatterns[n]) ||
					e.matchPatterns[e.defaultMatchWidth],
				o = t.match(a);
			if (!o) return null;
			var i,
				s = o[0],
				l =
					(n && e.parsePatterns[n]) ||
					e.parsePatterns[e.defaultParseWidth],
				c = Array.isArray(l)
					? Ke(l, function (e) {
							return e.test(s);
					  })
					: Qe(l, function (e) {
							return e.test(s);
					  });
			(i = e.valueCallback ? e.valueCallback(c) : c),
				(i = r.valueCallback ? r.valueCallback(i) : i);
			var u = t.slice(s.length);
			return { value: i, rest: u };
		};
	}
	function Qe(e, t) {
		for (var r in e) if (e.hasOwnProperty(r) && t(e[r])) return r;
	}
	function Ke(e, t) {
		for (var r = 0; r < e.length; r++) if (t(e[r])) return r;
	}
	var et,
		tt = {
			code: 'en-US',
			formatDistance: ze,
			formatLong: Je,
			formatRelative: function (e, t, r, n) {
				return Ye[e];
			},
			localize: {
				ordinalNumber: function (e, t) {
					var r = Number(e),
						n = r % 100;
					if (n > 20 || n < 10)
						switch (n % 10) {
							case 1:
								return r + 'st';
							case 2:
								return r + 'nd';
							case 3:
								return r + 'rd';
						}
					return r + 'th';
				},
				era: Xe({
					values: {
						narrow: ['B', 'A'],
						abbreviated: ['BC', 'AD'],
						wide: ['Before Christ', 'Anno Domini'],
					},
					defaultWidth: 'wide',
				}),
				quarter: Xe({
					values: {
						narrow: ['1', '2', '3', '4'],
						abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
						wide: [
							'1st quarter',
							'2nd quarter',
							'3rd quarter',
							'4th quarter',
						],
					},
					defaultWidth: 'wide',
					argumentCallback: function (e) {
						return e - 1;
					},
				}),
				month: Xe({
					values: {
						narrow: [
							'J',
							'F',
							'M',
							'A',
							'M',
							'J',
							'J',
							'A',
							'S',
							'O',
							'N',
							'D',
						],
						abbreviated: [
							'Jan',
							'Feb',
							'Mar',
							'Apr',
							'May',
							'Jun',
							'Jul',
							'Aug',
							'Sep',
							'Oct',
							'Nov',
							'Dec',
						],
						wide: [
							'January',
							'February',
							'March',
							'April',
							'May',
							'June',
							'July',
							'August',
							'September',
							'October',
							'November',
							'December',
						],
					},
					defaultWidth: 'wide',
				}),
				day: Xe({
					values: {
						narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
						short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
						abbreviated: [
							'Sun',
							'Mon',
							'Tue',
							'Wed',
							'Thu',
							'Fri',
							'Sat',
						],
						wide: [
							'Sunday',
							'Monday',
							'Tuesday',
							'Wednesday',
							'Thursday',
							'Friday',
							'Saturday',
						],
					},
					defaultWidth: 'wide',
				}),
				dayPeriod: Xe({
					values: {
						narrow: {
							am: 'a',
							pm: 'p',
							midnight: 'mi',
							noon: 'n',
							morning: 'morning',
							afternoon: 'afternoon',
							evening: 'evening',
							night: 'night',
						},
						abbreviated: {
							am: 'AM',
							pm: 'PM',
							midnight: 'midnight',
							noon: 'noon',
							morning: 'morning',
							afternoon: 'afternoon',
							evening: 'evening',
							night: 'night',
						},
						wide: {
							am: 'a.m.',
							pm: 'p.m.',
							midnight: 'midnight',
							noon: 'noon',
							morning: 'morning',
							afternoon: 'afternoon',
							evening: 'evening',
							night: 'night',
						},
					},
					defaultWidth: 'wide',
					formattingValues: {
						narrow: {
							am: 'a',
							pm: 'p',
							midnight: 'mi',
							noon: 'n',
							morning: 'in the morning',
							afternoon: 'in the afternoon',
							evening: 'in the evening',
							night: 'at night',
						},
						abbreviated: {
							am: 'AM',
							pm: 'PM',
							midnight: 'midnight',
							noon: 'noon',
							morning: 'in the morning',
							afternoon: 'in the afternoon',
							evening: 'in the evening',
							night: 'at night',
						},
						wide: {
							am: 'a.m.',
							pm: 'p.m.',
							midnight: 'midnight',
							noon: 'noon',
							morning: 'in the morning',
							afternoon: 'in the afternoon',
							evening: 'in the evening',
							night: 'at night',
						},
					},
					defaultFormattingWidth: 'wide',
				}),
			},
			match: {
				ordinalNumber:
					((et = {
						matchPattern: /^(\d+)(th|st|nd|rd)?/i,
						parsePattern: /\d+/i,
						valueCallback: function (e) {
							return parseInt(e, 10);
						},
					}),
					function (e) {
						var t =
								arguments.length > 1 && void 0 !== arguments[1]
									? arguments[1]
									: {},
							r = e.match(et.matchPattern);
						if (!r) return null;
						var n = r[0],
							a = e.match(et.parsePattern);
						if (!a) return null;
						var o = et.valueCallback
							? et.valueCallback(a[0])
							: a[0];
						o = t.valueCallback ? t.valueCallback(o) : o;
						var i = e.slice(n.length);
						return { value: o, rest: i };
					}),
				era: Ze({
					matchPatterns: {
						narrow: /^(b|a)/i,
						abbreviated:
							/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
						wide: /^(before christ|before common era|anno domini|common era)/i,
					},
					defaultMatchWidth: 'wide',
					parsePatterns: { any: [/^b/i, /^(a|c)/i] },
					defaultParseWidth: 'any',
				}),
				quarter: Ze({
					matchPatterns: {
						narrow: /^[1234]/i,
						abbreviated: /^q[1234]/i,
						wide: /^[1234](th|st|nd|rd)? quarter/i,
					},
					defaultMatchWidth: 'wide',
					parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
					defaultParseWidth: 'any',
					valueCallback: function (e) {
						return e + 1;
					},
				}),
				month: Ze({
					matchPatterns: {
						narrow: /^[jfmasond]/i,
						abbreviated:
							/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
						wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
					},
					defaultMatchWidth: 'wide',
					parsePatterns: {
						narrow: [
							/^j/i,
							/^f/i,
							/^m/i,
							/^a/i,
							/^m/i,
							/^j/i,
							/^j/i,
							/^a/i,
							/^s/i,
							/^o/i,
							/^n/i,
							/^d/i,
						],
						any: [
							/^ja/i,
							/^f/i,
							/^mar/i,
							/^ap/i,
							/^may/i,
							/^jun/i,
							/^jul/i,
							/^au/i,
							/^s/i,
							/^o/i,
							/^n/i,
							/^d/i,
						],
					},
					defaultParseWidth: 'any',
				}),
				day: Ze({
					matchPatterns: {
						narrow: /^[smtwf]/i,
						short: /^(su|mo|tu|we|th|fr|sa)/i,
						abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
						wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
					},
					defaultMatchWidth: 'wide',
					parsePatterns: {
						narrow: [
							/^s/i,
							/^m/i,
							/^t/i,
							/^w/i,
							/^t/i,
							/^f/i,
							/^s/i,
						],
						any: [
							/^su/i,
							/^m/i,
							/^tu/i,
							/^w/i,
							/^th/i,
							/^f/i,
							/^sa/i,
						],
					},
					defaultParseWidth: 'any',
				}),
				dayPeriod: Ze({
					matchPatterns: {
						narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
						any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
					},
					defaultMatchWidth: 'any',
					parsePatterns: {
						any: {
							am: /^a/i,
							pm: /^p/i,
							midnight: /^mi/i,
							noon: /^no/i,
							morning: /morning/i,
							afternoon: /afternoon/i,
							evening: /evening/i,
							night: /night/i,
						},
					},
					defaultParseWidth: 'any',
				}),
			},
			options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
		};
	function rt(e) {
		return (function (e, t) {
			if (null == e)
				throw new TypeError(
					'assign requires that input parameter not be null or undefined'
				);
			for (var r in (t = t || {}))
				Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
			return e;
		})({}, e);
	}
	var nt = 1440,
		at = 43200;
	var ot,
		it,
		st,
		lt = {},
		ct = {},
		ut = {};
	(ot = ut),
		Object.defineProperty(ot, '__esModule', { value: !0 }),
		(ot.Doctype =
			ot.CDATA =
			ot.Tag =
			ot.Style =
			ot.Script =
			ot.Comment =
			ot.Directive =
			ot.Text =
			ot.Root =
			ot.isTag =
			ot.ElementType =
				void 0),
		((st = it = ot.ElementType || (ot.ElementType = {})).Root = 'root'),
		(st.Text = 'text'),
		(st.Directive = 'directive'),
		(st.Comment = 'comment'),
		(st.Script = 'script'),
		(st.Style = 'style'),
		(st.Tag = 'tag'),
		(st.CDATA = 'cdata'),
		(st.Doctype = 'doctype'),
		(ot.isTag = function (e) {
			return (
				e.type === it.Tag || e.type === it.Script || e.type === it.Style
			);
		}),
		(ot.Root = it.Root),
		(ot.Text = it.Text),
		(ot.Directive = it.Directive),
		(ot.Comment = it.Comment),
		(ot.Script = it.Script),
		(ot.Style = it.Style),
		(ot.Tag = it.Tag),
		(ot.CDATA = it.CDATA),
		(ot.Doctype = it.Doctype);
	var pt,
		dt = {},
		ft =
			(k && k.__extends) ||
			((pt = function (e, t) {
				return (pt =
					Object.setPrototypeOf ||
					({ __proto__: [] } instanceof Array &&
						function (e, t) {
							e.__proto__ = t;
						}) ||
					function (e, t) {
						for (var r in t)
							Object.prototype.hasOwnProperty.call(t, r) &&
								(e[r] = t[r]);
					})(e, t);
			}),
			function (e, t) {
				if ('function' != typeof t && null !== t)
					throw new TypeError(
						'Class extends value ' +
							String(t) +
							' is not a constructor or null'
					);
				function r() {
					this.constructor = e;
				}
				pt(e, t),
					(e.prototype =
						null === t
							? Object.create(t)
							: ((r.prototype = t.prototype), new r()));
			}),
		ht =
			(k && k.__assign) ||
			function () {
				return (ht =
					Object.assign ||
					function (e) {
						for (var t, r = 1, n = arguments.length; r < n; r++)
							for (var a in (t = arguments[r]))
								Object.prototype.hasOwnProperty.call(t, a) &&
									(e[a] = t[a]);
						return e;
					}).apply(this, arguments);
			};
	Object.defineProperty(dt, '__esModule', { value: !0 }),
		(dt.cloneNode =
			dt.hasChildren =
			dt.isDocument =
			dt.isDirective =
			dt.isComment =
			dt.isText =
			dt.isCDATA =
			dt.isTag =
			dt.Element =
			dt.Document =
			dt.NodeWithChildren =
			dt.ProcessingInstruction =
			dt.Comment =
			dt.Text =
			dt.DataNode =
			dt.Node =
				void 0);
	var mt = ut,
		bt = new Map([
			[mt.ElementType.Tag, 1],
			[mt.ElementType.Script, 1],
			[mt.ElementType.Style, 1],
			[mt.ElementType.Directive, 1],
			[mt.ElementType.Text, 3],
			[mt.ElementType.CDATA, 4],
			[mt.ElementType.Comment, 8],
			[mt.ElementType.Root, 9],
		]),
		vt = (function () {
			function e(e) {
				(this.type = e),
					(this.parent = null),
					(this.prev = null),
					(this.next = null),
					(this.startIndex = null),
					(this.endIndex = null);
			}
			return (
				Object.defineProperty(e.prototype, 'nodeType', {
					get: function () {
						var e;
						return null !== (e = bt.get(this.type)) && void 0 !== e
							? e
							: 1;
					},
					enumerable: !1,
					configurable: !0,
				}),
				Object.defineProperty(e.prototype, 'parentNode', {
					get: function () {
						return this.parent;
					},
					set: function (e) {
						this.parent = e;
					},
					enumerable: !1,
					configurable: !0,
				}),
				Object.defineProperty(e.prototype, 'previousSibling', {
					get: function () {
						return this.prev;
					},
					set: function (e) {
						this.prev = e;
					},
					enumerable: !1,
					configurable: !0,
				}),
				Object.defineProperty(e.prototype, 'nextSibling', {
					get: function () {
						return this.next;
					},
					set: function (e) {
						this.next = e;
					},
					enumerable: !1,
					configurable: !0,
				}),
				(e.prototype.cloneNode = function (e) {
					return void 0 === e && (e = !1), Ot(this, e);
				}),
				e
			);
		})();
	dt.Node = vt;
	var yt = (function (e) {
		function t(t, r) {
			var n = e.call(this, t) || this;
			return (n.data = r), n;
		}
		return (
			ft(t, e),
			Object.defineProperty(t.prototype, 'nodeValue', {
				get: function () {
					return this.data;
				},
				set: function (e) {
					this.data = e;
				},
				enumerable: !1,
				configurable: !0,
			}),
			t
		);
	})(vt);
	dt.DataNode = yt;
	var wt = (function (e) {
		function t(t) {
			return e.call(this, mt.ElementType.Text, t) || this;
		}
		return ft(t, e), t;
	})(yt);
	dt.Text = wt;
	var xt = (function (e) {
		function t(t) {
			return e.call(this, mt.ElementType.Comment, t) || this;
		}
		return ft(t, e), t;
	})(yt);
	dt.Comment = xt;
	var kt = (function (e) {
		function t(t, r) {
			var n = e.call(this, mt.ElementType.Directive, r) || this;
			return (n.name = t), n;
		}
		return ft(t, e), t;
	})(yt);
	dt.ProcessingInstruction = kt;
	var St = (function (e) {
		function t(t, r) {
			var n = e.call(this, t) || this;
			return (n.children = r), n;
		}
		return (
			ft(t, e),
			Object.defineProperty(t.prototype, 'firstChild', {
				get: function () {
					var e;
					return null !== (e = this.children[0]) && void 0 !== e
						? e
						: null;
				},
				enumerable: !1,
				configurable: !0,
			}),
			Object.defineProperty(t.prototype, 'lastChild', {
				get: function () {
					return this.children.length > 0
						? this.children[this.children.length - 1]
						: null;
				},
				enumerable: !1,
				configurable: !0,
			}),
			Object.defineProperty(t.prototype, 'childNodes', {
				get: function () {
					return this.children;
				},
				set: function (e) {
					this.children = e;
				},
				enumerable: !1,
				configurable: !0,
			}),
			t
		);
	})(vt);
	dt.NodeWithChildren = St;
	var Et = (function (e) {
		function t(t) {
			return e.call(this, mt.ElementType.Root, t) || this;
		}
		return ft(t, e), t;
	})(St);
	dt.Document = Et;
	var qt = (function (e) {
		function t(t, r, n, a) {
			void 0 === n && (n = []),
				void 0 === a &&
					(a =
						'script' === t
							? mt.ElementType.Script
							: 'style' === t
							? mt.ElementType.Style
							: mt.ElementType.Tag);
			var o = e.call(this, a, n) || this;
			return (o.name = t), (o.attribs = r), o;
		}
		return (
			ft(t, e),
			Object.defineProperty(t.prototype, 'tagName', {
				get: function () {
					return this.name;
				},
				set: function (e) {
					this.name = e;
				},
				enumerable: !1,
				configurable: !0,
			}),
			Object.defineProperty(t.prototype, 'attributes', {
				get: function () {
					var e = this;
					return Object.keys(this.attribs).map(function (t) {
						var r, n;
						return {
							name: t,
							value: e.attribs[t],
							namespace:
								null === (r = e['x-attribsNamespace']) ||
								void 0 === r
									? void 0
									: r[t],
							prefix:
								null === (n = e['x-attribsPrefix']) ||
								void 0 === n
									? void 0
									: n[t],
						};
					});
				},
				enumerable: !1,
				configurable: !0,
			}),
			t
		);
	})(St);
	function Dt(e) {
		return (0, mt.isTag)(e);
	}
	function Tt(e) {
		return e.type === mt.ElementType.CDATA;
	}
	function At(e) {
		return e.type === mt.ElementType.Text;
	}
	function Lt(e) {
		return e.type === mt.ElementType.Comment;
	}
	function Ct(e) {
		return e.type === mt.ElementType.Directive;
	}
	function _t(e) {
		return e.type === mt.ElementType.Root;
	}
	function Ot(e, t) {
		var r;
		if ((void 0 === t && (t = !1), At(e))) r = new wt(e.data);
		else if (Lt(e)) r = new xt(e.data);
		else if (Dt(e)) {
			var n = t ? Bt(e.children) : [],
				a = new qt(e.name, ht({}, e.attribs), n);
			n.forEach(function (e) {
				return (e.parent = a);
			}),
				e['x-attribsNamespace'] &&
					(a['x-attribsNamespace'] = ht({}, e['x-attribsNamespace'])),
				e['x-attribsPrefix'] &&
					(a['x-attribsPrefix'] = ht({}, e['x-attribsPrefix'])),
				(r = a);
		} else if (Tt(e)) {
			n = t ? Bt(e.children) : [];
			var o = new St(mt.ElementType.CDATA, n);
			n.forEach(function (e) {
				return (e.parent = o);
			}),
				(r = o);
		} else if (_t(e)) {
			n = t ? Bt(e.children) : [];
			var i = new Et(n);
			n.forEach(function (e) {
				return (e.parent = i);
			}),
				e['x-mode'] && (i['x-mode'] = e['x-mode']),
				(r = i);
		} else {
			if (!Ct(e)) throw new Error('Not implemented yet: ' + e.type);
			var s = new kt(e.name, e.data);
			null != e['x-name'] &&
				((s['x-name'] = e['x-name']),
				(s['x-publicId'] = e['x-publicId']),
				(s['x-systemId'] = e['x-systemId'])),
				(r = s);
		}
		return (r.startIndex = e.startIndex), (r.endIndex = e.endIndex), r;
	}
	function Bt(e) {
		for (
			var t = e.map(function (e) {
					return Ot(e, !0);
				}),
				r = 1;
			r < t.length;
			r++
		)
			(t[r].prev = t[r - 1]), (t[r - 1].next = t[r]);
		return t;
	}
	(dt.Element = qt),
		(dt.isTag = Dt),
		(dt.isCDATA = Tt),
		(dt.isText = At),
		(dt.isComment = Lt),
		(dt.isDirective = Ct),
		(dt.isDocument = _t),
		(dt.hasChildren = function (e) {
			return Object.prototype.hasOwnProperty.call(e, 'children');
		}),
		(dt.cloneNode = Ot),
		(function (e) {
			var t =
					(k && k.__createBinding) ||
					(Object.create
						? function (e, t, r, n) {
								void 0 === n && (n = r),
									Object.defineProperty(e, n, {
										enumerable: !0,
										get: function () {
											return t[r];
										},
									});
						  }
						: function (e, t, r, n) {
								void 0 === n && (n = r), (e[n] = t[r]);
						  }),
				r =
					(k && k.__exportStar) ||
					function (e, r) {
						for (var n in e)
							'default' === n ||
								Object.prototype.hasOwnProperty.call(r, n) ||
								t(r, e, n);
					};
			Object.defineProperty(e, '__esModule', { value: !0 }),
				(e.DomHandler = void 0);
			var n = ut,
				a = dt;
			r(dt, e);
			var o = /\s+/g,
				i = {
					normalizeWhitespace: !1,
					withStartIndices: !1,
					withEndIndices: !1,
					xmlMode: !1,
				},
				s = (function () {
					function e(e, t, r) {
						(this.dom = []),
							(this.root = new a.Document(this.dom)),
							(this.done = !1),
							(this.tagStack = [this.root]),
							(this.lastNode = null),
							(this.parser = null),
							'function' == typeof t && ((r = t), (t = i)),
							'object' == typeof e && ((t = e), (e = void 0)),
							(this.callback = null != e ? e : null),
							(this.options = null != t ? t : i),
							(this.elementCB = null != r ? r : null);
					}
					return (
						(e.prototype.onparserinit = function (e) {
							this.parser = e;
						}),
						(e.prototype.onreset = function () {
							(this.dom = []),
								(this.root = new a.Document(this.dom)),
								(this.done = !1),
								(this.tagStack = [this.root]),
								(this.lastNode = null),
								(this.parser = null);
						}),
						(e.prototype.onend = function () {
							this.done ||
								((this.done = !0),
								(this.parser = null),
								this.handleCallback(null));
						}),
						(e.prototype.onerror = function (e) {
							this.handleCallback(e);
						}),
						(e.prototype.onclosetag = function () {
							this.lastNode = null;
							var e = this.tagStack.pop();
							this.options.withEndIndices &&
								(e.endIndex = this.parser.endIndex),
								this.elementCB && this.elementCB(e);
						}),
						(e.prototype.onopentag = function (e, t) {
							var r = this.options.xmlMode
									? n.ElementType.Tag
									: void 0,
								o = new a.Element(e, t, void 0, r);
							this.addNode(o), this.tagStack.push(o);
						}),
						(e.prototype.ontext = function (e) {
							var t = this.options.normalizeWhitespace,
								r = this.lastNode;
							if (r && r.type === n.ElementType.Text)
								t
									? (r.data = (r.data + e).replace(o, ' '))
									: (r.data += e),
									this.options.withEndIndices &&
										(r.endIndex = this.parser.endIndex);
							else {
								t && (e = e.replace(o, ' '));
								var i = new a.Text(e);
								this.addNode(i), (this.lastNode = i);
							}
						}),
						(e.prototype.oncomment = function (e) {
							if (
								this.lastNode &&
								this.lastNode.type === n.ElementType.Comment
							)
								this.lastNode.data += e;
							else {
								var t = new a.Comment(e);
								this.addNode(t), (this.lastNode = t);
							}
						}),
						(e.prototype.oncommentend = function () {
							this.lastNode = null;
						}),
						(e.prototype.oncdatastart = function () {
							var e = new a.Text(''),
								t = new a.NodeWithChildren(
									n.ElementType.CDATA,
									[e]
								);
							this.addNode(t),
								(e.parent = t),
								(this.lastNode = e);
						}),
						(e.prototype.oncdataend = function () {
							this.lastNode = null;
						}),
						(e.prototype.onprocessinginstruction = function (e, t) {
							var r = new a.ProcessingInstruction(e, t);
							this.addNode(r);
						}),
						(e.prototype.handleCallback = function (e) {
							if ('function' == typeof this.callback)
								this.callback(e, this.dom);
							else if (e) throw e;
						}),
						(e.prototype.addNode = function (e) {
							var t = this.tagStack[this.tagStack.length - 1],
								r = t.children[t.children.length - 1];
							this.options.withStartIndices &&
								(e.startIndex = this.parser.startIndex),
								this.options.withEndIndices &&
									(e.endIndex = this.parser.endIndex),
								t.children.push(e),
								r && ((e.prev = r), (r.next = e)),
								(e.parent = t),
								(this.lastNode = null);
						}),
						e
					);
				})();
			(e.DomHandler = s), (e.default = s);
		})(ct);
	var Nt,
		Pt,
		It,
		Rt = {},
		jt = {},
		Mt = { exports: {} };
	(Pt = k),
		(It = function () {
			function e(t, r, n) {
				return (
					(this.id = ++e.highestId),
					(this.name = t),
					(this.symbols = r),
					(this.postprocess = n),
					this
				);
			}
			function t(e, t, r, n) {
				(this.rule = e),
					(this.dot = t),
					(this.reference = r),
					(this.data = []),
					(this.wantedBy = n),
					(this.isComplete = this.dot === e.symbols.length);
			}
			function r(e, t) {
				(this.grammar = e),
					(this.index = t),
					(this.states = []),
					(this.wants = {}),
					(this.scannable = []),
					(this.completed = {});
			}
			function n(e, t) {
				(this.rules = e), (this.start = t || this.rules[0].name);
				var r = (this.byName = {});
				this.rules.forEach(function (e) {
					r.hasOwnProperty(e.name) || (r[e.name] = []),
						r[e.name].push(e);
				});
			}
			function a() {
				this.reset('');
			}
			function o(e, t, o) {
				if (e instanceof n) {
					var i = e;
					o = t;
				} else i = n.fromCompiled(e, t);
				for (var s in ((this.grammar = i),
				(this.options = { keepHistory: !1, lexer: i.lexer || new a() }),
				o || {}))
					this.options[s] = o[s];
				(this.lexer = this.options.lexer), (this.lexerState = void 0);
				var l = new r(i, 0);
				(this.table = [l]),
					(l.wants[i.start] = []),
					l.predict(i.start),
					l.process(),
					(this.current = 0);
			}
			function i(e) {
				var t = typeof e;
				if ('string' === t) return e;
				if ('object' === t) {
					if (e.literal) return JSON.stringify(e.literal);
					if (e instanceof RegExp) return e.toString();
					if (e.type) return '%' + e.type;
					if (e.test) return '<' + String(e.test) + '>';
					throw new Error('Unknown symbol type: ' + e);
				}
			}
			return (
				(e.highestId = 0),
				(e.prototype.toString = function (e) {
					var t =
						void 0 === e
							? this.symbols.map(i).join(' ')
							: this.symbols.slice(0, e).map(i).join(' ') +
							  ' ● ' +
							  this.symbols.slice(e).map(i).join(' ');
					return this.name + ' → ' + t;
				}),
				(t.prototype.toString = function () {
					return (
						'{' +
						this.rule.toString(this.dot) +
						'}, from: ' +
						(this.reference || 0)
					);
				}),
				(t.prototype.nextState = function (e) {
					var r = new t(
						this.rule,
						this.dot + 1,
						this.reference,
						this.wantedBy
					);
					return (
						(r.left = this),
						(r.right = e),
						r.isComplete &&
							((r.data = r.build()), (r.right = void 0)),
						r
					);
				}),
				(t.prototype.build = function () {
					var e = [],
						t = this;
					do {
						e.push(t.right.data), (t = t.left);
					} while (t.left);
					return e.reverse(), e;
				}),
				(t.prototype.finish = function () {
					this.rule.postprocess &&
						(this.data = this.rule.postprocess(
							this.data,
							this.reference,
							o.fail
						));
				}),
				(r.prototype.process = function (e) {
					for (
						var t = this.states,
							r = this.wants,
							n = this.completed,
							a = 0;
						a < t.length;
						a++
					) {
						var i = t[a];
						if (i.isComplete) {
							if ((i.finish(), i.data !== o.fail)) {
								for (var s = i.wantedBy, l = s.length; l--; ) {
									var c = s[l];
									this.complete(c, i);
								}
								if (i.reference === this.index) {
									var u = i.rule.name;
									(this.completed[u] =
										this.completed[u] || []).push(i);
								}
							}
						} else {
							if (
								'string' != typeof (u = i.rule.symbols[i.dot])
							) {
								this.scannable.push(i);
								continue;
							}
							if (r[u]) {
								if ((r[u].push(i), n.hasOwnProperty(u))) {
									var p = n[u];
									for (l = 0; l < p.length; l++) {
										var d = p[l];
										this.complete(i, d);
									}
								}
							} else (r[u] = [i]), this.predict(u);
						}
					}
				}),
				(r.prototype.predict = function (e) {
					for (
						var r = this.grammar.byName[e] || [], n = 0;
						n < r.length;
						n++
					) {
						var a = r[n],
							o = this.wants[e],
							i = new t(a, 0, this.index, o);
						this.states.push(i);
					}
				}),
				(r.prototype.complete = function (e, t) {
					var r = e.nextState(t);
					this.states.push(r);
				}),
				(n.fromCompiled = function (t, r) {
					var a = t.Lexer;
					t.ParserStart && ((r = t.ParserStart), (t = t.ParserRules));
					var o = new n(
						(t = t.map(function (t) {
							return new e(t.name, t.symbols, t.postprocess);
						})),
						r
					);
					return (o.lexer = a), o;
				}),
				(a.prototype.reset = function (e, t) {
					(this.buffer = e),
						(this.index = 0),
						(this.line = t ? t.line : 1),
						(this.lastLineBreak = t ? -t.col : 0);
				}),
				(a.prototype.next = function () {
					if (this.index < this.buffer.length) {
						var e = this.buffer[this.index++];
						return (
							'\n' === e &&
								((this.line += 1),
								(this.lastLineBreak = this.index)),
							{ value: e }
						);
					}
				}),
				(a.prototype.save = function () {
					return {
						line: this.line,
						col: this.index - this.lastLineBreak,
					};
				}),
				(a.prototype.formatError = function (e, t) {
					var r = this.buffer;
					if ('string' == typeof r) {
						var n = r
							.split('\n')
							.slice(Math.max(0, this.line - 5), this.line);
						r.indexOf('\n', this.index);
						var a = this.index - this.lastLineBreak,
							o = String(this.line).length;
						return (
							(t +=
								' at line ' +
								this.line +
								' col ' +
								a +
								':\n\n'),
							(t += n
								.map(function (e, t) {
									return (
										i(this.line - n.length + t + 1, o) +
										' ' +
										e
									);
								}, this)
								.join('\n')),
							(t += '\n' + i('', o + a) + '^\n')
						);
					}
					return t + ' at index ' + (this.index - 1);
					function i(e, t) {
						var r = String(e);
						return Array(t - r.length + 1).join(' ') + r;
					}
				}),
				(o.fail = {}),
				(o.prototype.feed = function (e) {
					var t,
						n = this.lexer;
					for (n.reset(e, this.lexerState); ; ) {
						try {
							if (!(t = n.next())) break;
						} catch (g) {
							var o = new r(this.grammar, this.current + 1);
							throw (
								(this.table.push(o),
								((l = new Error(
									this.reportLexerError(g)
								)).offset = this.current),
								(l.token = g.token),
								l)
							);
						}
						var i = this.table[this.current];
						this.options.keepHistory ||
							delete this.table[this.current - 1];
						var s = this.current + 1;
						(o = new r(this.grammar, s)), this.table.push(o);
						for (
							var l,
								c = void 0 !== t.text ? t.text : t.value,
								u = n.constructor === a ? t.value : t,
								p = i.scannable,
								d = p.length;
							d--;

						) {
							var f = p[d],
								h = f.rule.symbols[f.dot];
							if (
								h.test
									? h.test(u)
									: h.type
									? h.type === t.type
									: h.literal === c
							) {
								var m = f.nextState({
									data: u,
									token: t,
									isToken: !0,
									reference: s - 1,
								});
								o.states.push(m);
							}
						}
						if ((o.process(), 0 === o.states.length))
							throw (
								(((l = new Error(this.reportError(t))).offset =
									this.current),
								(l.token = t),
								l)
							);
						this.options.keepHistory && (i.lexerState = n.save()),
							this.current++;
					}
					return (
						i && (this.lexerState = n.save()),
						(this.results = this.finish()),
						this
					);
				}),
				(o.prototype.reportLexerError = function (e) {
					var t,
						r,
						n = e.token;
					return (
						n
							? ((t =
									'input ' +
									JSON.stringify(n.text[0]) +
									' (lexer error)'),
							  (r = this.lexer.formatError(n, 'Syntax error')))
							: ((t = 'input (lexer error)'), (r = e.message)),
						this.reportErrorCommon(r, t)
					);
				}),
				(o.prototype.reportError = function (e) {
					var t =
							(e.type ? e.type + ' token: ' : '') +
							JSON.stringify(void 0 !== e.value ? e.value : e),
						r = this.lexer.formatError(e, 'Syntax error');
					return this.reportErrorCommon(r, t);
				}),
				(o.prototype.reportErrorCommon = function (e, t) {
					var r = [];
					r.push(e);
					var n = this.table.length - 2,
						a = this.table[n],
						o = a.states.filter(function (e) {
							var t = e.rule.symbols[e.dot];
							return t && 'string' != typeof t;
						});
					return (
						0 === o.length
							? (r.push(
									'Unexpected ' +
										t +
										'. I did not expect any more input. Here is the state of my parse table:\n'
							  ),
							  this.displayStateStack(a.states, r))
							: (r.push(
									'Unexpected ' +
										t +
										'. Instead, I was expecting to see one of the following:\n'
							  ),
							  o
									.map(function (e) {
										return (
											this.buildFirstStateStack(
												e,
												[]
											) || [e]
										);
									}, this)
									.forEach(function (e) {
										var t = e[0],
											n = t.rule.symbols[t.dot],
											a = this.getSymbolDisplay(n);
										r.push('A ' + a + ' based on:'),
											this.displayStateStack(e, r);
									}, this)),
						r.push(''),
						r.join('\n')
					);
				}),
				(o.prototype.displayStateStack = function (e, t) {
					for (var r, n = 0, a = 0; a < e.length; a++) {
						var o = e[a],
							i = o.rule.toString(o.dot);
						i === r
							? n++
							: (n > 0 &&
									t.push(
										'    ^ ' +
											n +
											' more lines identical to this'
									),
							  (n = 0),
							  t.push('    ' + i)),
							(r = i);
					}
				}),
				(o.prototype.getSymbolDisplay = function (e) {
					return (function (e) {
						var t = typeof e;
						if ('string' === t) return e;
						if ('object' === t) {
							if (e.literal) return JSON.stringify(e.literal);
							if (e instanceof RegExp)
								return 'character matching ' + e;
							if (e.type) return e.type + ' token';
							if (e.test)
								return 'token matching ' + String(e.test);
							throw new Error('Unknown symbol type: ' + e);
						}
					})(e);
				}),
				(o.prototype.buildFirstStateStack = function (e, t) {
					if (-1 !== t.indexOf(e)) return null;
					if (0 === e.wantedBy.length) return [e];
					var r = e.wantedBy[0],
						n = [e].concat(t),
						a = this.buildFirstStateStack(r, n);
					return null === a ? null : [e].concat(a);
				}),
				(o.prototype.save = function () {
					var e = this.table[this.current];
					return (e.lexerState = this.lexerState), e;
				}),
				(o.prototype.restore = function (e) {
					var t = e.index;
					(this.current = t),
						(this.table[t] = e),
						this.table.splice(t + 1),
						(this.lexerState = e.lexerState),
						(this.results = this.finish());
				}),
				(o.prototype.rewind = function (e) {
					if (!this.options.keepHistory)
						throw new Error(
							'set option `keepHistory` to enable rewinding'
						);
					this.restore(this.table[e]);
				}),
				(o.prototype.finish = function () {
					var e = [],
						t = this.grammar.start;
					return (
						this.table[this.table.length - 1].states.forEach(
							function (r) {
								r.rule.name === t &&
									r.dot === r.rule.symbols.length &&
									0 === r.reference &&
									r.data !== o.fail &&
									e.push(r);
							}
						),
						e.map(function (e) {
							return e.data;
						})
					);
				}),
				{ Parser: o, Grammar: n, Rule: e }
			);
		}),
		(Nt = Mt).exports ? (Nt.exports = It()) : (Pt.nearley = It());
	var Ft = { exports: {} };
	!(function (e) {
		!(function (t, r) {
			e.exports ? (e.exports = r()) : (t.moo = r());
		})(k, function () {
			var e = Object.prototype.hasOwnProperty,
				t = Object.prototype.toString,
				r = 'boolean' == typeof new RegExp().sticky;
			function n(e) {
				return e && '[object RegExp]' === t.call(e);
			}
			function a(e) {
				return e && 'object' == typeof e && !n(e) && !Array.isArray(e);
			}
			function o(e) {
				return '(' + e + ')';
			}
			function i(e) {
				return e.length
					? '(?:' +
							e
								.map(function (e) {
									return '(?:' + e + ')';
								})
								.join('|') +
							')'
					: '(?!)';
			}
			function s(e) {
				if ('string' == typeof e)
					return (
						'(?:' +
						(e.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') + ')')
					);
				if (n(e)) {
					if (e.ignoreCase)
						throw new Error('RegExp /i flag not allowed');
					if (e.global) throw new Error('RegExp /g flag is implied');
					if (e.sticky) throw new Error('RegExp /y flag is implied');
					if (e.multiline)
						throw new Error('RegExp /m flag is implied');
					return e.source;
				}
				throw new Error('Not a pattern: ' + e);
			}
			function l(t, r) {
				if ((a(r) || (r = { match: r }), r.include))
					throw new Error(
						'Matching rules cannot also include states'
					);
				var o = {
					defaultType: t,
					lineBreaks: !!r.error || !!r.fallback,
					pop: !1,
					next: null,
					push: null,
					error: !1,
					fallback: !1,
					value: null,
					type: null,
					shouldThrow: !1,
				};
				for (var i in r) e.call(r, i) && (o[i] = r[i]);
				if ('string' == typeof o.type && t !== o.type)
					throw new Error(
						"Type transform cannot be a string (type '" +
							o.type +
							"' for token '" +
							t +
							"')"
					);
				var s = o.match;
				return (
					(o.match = Array.isArray(s) ? s : s ? [s] : []),
					o.match.sort(function (e, t) {
						return n(e) && n(t)
							? 0
							: n(t)
							? -1
							: n(e)
							? 1
							: t.length - e.length;
					}),
					o
				);
			}
			function c(e) {
				return Array.isArray(e)
					? (function (e) {
							for (var t = [], r = 0; r < e.length; r++) {
								var n = e[r];
								if (n.include)
									for (
										var a = [].concat(n.include), o = 0;
										o < a.length;
										o++
									)
										t.push({ include: a[o] });
								else {
									if (!n.type)
										throw new Error(
											'Rule has no type: ' +
												JSON.stringify(n)
										);
									t.push(l(n.type, n));
								}
							}
							return t;
					  })(e)
					: (function (e) {
							for (
								var t = Object.getOwnPropertyNames(e),
									r = [],
									n = 0;
								n < t.length;
								n++
							) {
								var o = t[n],
									i = e[o],
									s = [].concat(i);
								if ('include' !== o) {
									var c = [];
									s.forEach(function (e) {
										a(e)
											? (c.length && r.push(l(o, c)),
											  r.push(l(o, e)),
											  (c = []))
											: c.push(e);
									}),
										c.length && r.push(l(o, c));
								} else
									for (var u = 0; u < s.length; u++)
										r.push({ include: s[u] });
							}
							return r;
					  })(e);
			}
			var u = l('error', { lineBreaks: !0, shouldThrow: !0 });
			function p(e, t) {
				for (
					var a = null,
						l = Object.create(null),
						c = !0,
						p = null,
						d = [],
						f = [],
						h = 0;
					h < e.length;
					h++
				)
					e[h].fallback && (c = !1);
				for (h = 0; h < e.length; h++) {
					var m = e[h];
					if (m.include)
						throw new Error(
							'Inheritance is not allowed in stateless lexers'
						);
					if (m.error || m.fallback) {
						if (a)
							throw !m.fallback == !a.fallback
								? new Error(
										'Multiple ' +
											(m.fallback
												? 'fallback'
												: 'error') +
											" rules not allowed (for token '" +
											m.defaultType +
											"')"
								  )
								: new Error(
										"fallback and error are mutually exclusive (for token '" +
											m.defaultType +
											"')"
								  );
						a = m;
					}
					var g = m.match.slice();
					if (c)
						for (
							;
							g.length &&
							'string' == typeof g[0] &&
							1 === g[0].length;

						) {
							l[g.shift().charCodeAt(0)] = m;
						}
					if (m.pop || m.push || m.next) {
						if (!t)
							throw new Error(
								"State-switching options are not allowed in stateless lexers (for token '" +
									m.defaultType +
									"')"
							);
						if (m.fallback)
							throw new Error(
								"State-switching options are not allowed on fallback tokens (for token '" +
									m.defaultType +
									"')"
							);
					}
					if (0 !== g.length) {
						(c = !1), d.push(m);
						for (var b = 0; b < g.length; b++) {
							var v = g[b];
							if (n(v))
								if (null === p) p = v.unicode;
								else if (p !== v.unicode && !1 === m.fallback)
									throw new Error(
										'If one rule is /u then all must be'
									);
						}
						var y = i(g.map(s)),
							w = new RegExp(y);
						if (w.test(''))
							throw new Error(
								'RegExp matches empty string: ' + w
							);
						if (new RegExp('|' + y).exec('').length - 1 > 0)
							throw new Error(
								'RegExp has capture groups: ' +
									w +
									'\nUse (?: … ) instead'
							);
						if (!m.lineBreaks && w.test('\n'))
							throw new Error(
								'Rule should declare lineBreaks: ' + w
							);
						f.push(o(y));
					}
				}
				var x = a && a.fallback,
					k = r && !x ? 'ym' : 'gm',
					S = r || x ? '' : '|';
				return (
					!0 === p && (k += 'u'),
					{
						regexp: new RegExp(i(f) + S, k),
						groups: d,
						fast: l,
						error: a || u,
					}
				);
			}
			function d(e, t, r) {
				var n = e && (e.push || e.next);
				if (n && !r[n])
					throw new Error(
						"Missing state '" +
							n +
							"' (in token '" +
							e.defaultType +
							"' of state '" +
							t +
							"')"
					);
				if (e && e.pop && 1 != +e.pop)
					throw new Error(
						"pop must be 1 (in token '" +
							e.defaultType +
							"' of state '" +
							t +
							"')"
					);
			}
			var f = function (e, t) {
				(this.startState = t),
					(this.states = e),
					(this.buffer = ''),
					(this.stack = []),
					this.reset();
			};
			(f.prototype.reset = function (e, t) {
				return (
					(this.buffer = e || ''),
					(this.index = 0),
					(this.line = t ? t.line : 1),
					(this.col = t ? t.col : 1),
					(this.queuedToken = t ? t.queuedToken : null),
					(this.queuedThrow = t ? t.queuedThrow : null),
					this.setState(t ? t.state : this.startState),
					(this.stack = t && t.stack ? t.stack.slice() : []),
					this
				);
			}),
				(f.prototype.save = function () {
					return {
						line: this.line,
						col: this.col,
						state: this.state,
						stack: this.stack.slice(),
						queuedToken: this.queuedToken,
						queuedThrow: this.queuedThrow,
					};
				}),
				(f.prototype.setState = function (e) {
					if (e && this.state !== e) {
						this.state = e;
						var t = this.states[e];
						(this.groups = t.groups),
							(this.error = t.error),
							(this.re = t.regexp),
							(this.fast = t.fast);
					}
				}),
				(f.prototype.popState = function () {
					this.setState(this.stack.pop());
				}),
				(f.prototype.pushState = function (e) {
					this.stack.push(this.state), this.setState(e);
				});
			var h = r
				? function (e, t) {
						return e.exec(t);
				  }
				: function (e, t) {
						var r = e.exec(t);
						return 0 === r[0].length ? null : r;
				  };
			function m() {
				return this.value;
			}
			if (
				((f.prototype._getGroup = function (e) {
					for (var t = this.groups.length, r = 0; r < t; r++)
						if (void 0 !== e[r + 1]) return this.groups[r];
					throw new Error('Cannot find token type for matched text');
				}),
				(f.prototype.next = function () {
					var e = this.index;
					if (this.queuedGroup) {
						var t = this._token(
							this.queuedGroup,
							this.queuedText,
							e
						);
						return (
							(this.queuedGroup = null), (this.queuedText = ''), t
						);
					}
					var r = this.buffer;
					if (e !== r.length) {
						if ((i = this.fast[r.charCodeAt(e)]))
							return this._token(i, r.charAt(e), e);
						var n = this.re;
						n.lastIndex = e;
						var a = h(n, r),
							o = this.error;
						if (null == a)
							return this._token(o, r.slice(e, r.length), e);
						var i = this._getGroup(a),
							s = a[0];
						return o.fallback && a.index !== e
							? ((this.queuedGroup = i),
							  (this.queuedText = s),
							  this._token(o, r.slice(e, a.index), e))
							: this._token(i, s, e);
					}
				}),
				(f.prototype._token = function (e, t, r) {
					var n = 0;
					if (e.lineBreaks) {
						var a = /\n/g,
							o = 1;
						if ('\n' === t) n = 1;
						else for (; a.exec(t); ) n++, (o = a.lastIndex);
					}
					var i = {
							type:
								('function' == typeof e.type && e.type(t)) ||
								e.defaultType,
							value:
								'function' == typeof e.value ? e.value(t) : t,
							text: t,
							toString: m,
							offset: r,
							lineBreaks: n,
							line: this.line,
							col: this.col,
						},
						s = t.length;
					if (
						((this.index += s),
						(this.line += n),
						0 !== n ? (this.col = s - o + 1) : (this.col += s),
						e.shouldThrow)
					)
						throw new Error(this.formatError(i, 'invalid syntax'));
					return (
						e.pop
							? this.popState()
							: e.push
							? this.pushState(e.push)
							: e.next && this.setState(e.next),
						i
					);
				}),
				'undefined' != typeof Symbol && Symbol.iterator)
			) {
				var g = function (e) {
					this.lexer = e;
				};
				(g.prototype.next = function () {
					var e = this.lexer.next();
					return { value: e, done: !e };
				}),
					(g.prototype[Symbol.iterator] = function () {
						return this;
					}),
					(f.prototype[Symbol.iterator] = function () {
						return new g(this);
					});
			}
			return (
				(f.prototype.formatError = function (e, t) {
					if (null == e) {
						var r = this.buffer.slice(this.index);
						e = {
							text: r,
							offset: this.index,
							lineBreaks: -1 === r.indexOf('\n') ? 0 : 1,
							line: this.line,
							col: this.col,
						};
					}
					var n = Math.max(0, e.offset - e.col + 1),
						a = e.lineBreaks ? e.text.indexOf('\n') : e.text.length,
						o = this.buffer.substring(n, e.offset + a);
					return (
						(t += ' at line ' + e.line + ' col ' + e.col + ':\n\n'),
						(t += '  ' + o + '\n'),
						(t += '  ' + Array(e.col).join(' ') + '^')
					);
				}),
				(f.prototype.clone = function () {
					return new f(this.states, this.state);
				}),
				(f.prototype.has = function (e) {
					return !0;
				}),
				{
					compile: function (e) {
						var t = p(c(e));
						return new f({ start: t }, 'start');
					},
					states: function (e, t) {
						var r = e.$all ? c(e.$all) : [];
						delete e.$all;
						var n = Object.getOwnPropertyNames(e);
						t || (t = n[0]);
						for (
							var a = Object.create(null), o = 0;
							o < n.length;
							o++
						) {
							a[(y = n[o])] = c(e[y]).concat(r);
						}
						for (o = 0; o < n.length; o++)
							for (
								var i = a[(y = n[o])],
									s = Object.create(null),
									l = 0;
								l < i.length;
								l++
							) {
								var u = i[l];
								if (u.include) {
									var h = [l, 1];
									if (u.include !== y && !s[u.include]) {
										s[u.include] = !0;
										var m = a[u.include];
										if (!m)
											throw new Error(
												"Cannot include nonexistent state '" +
													u.include +
													"' (in state '" +
													y +
													"')"
											);
										for (var g = 0; g < m.length; g++) {
											var b = m[g];
											-1 === i.indexOf(b) && h.push(b);
										}
									}
									i.splice.apply(i, h), l--;
								}
							}
						var v = Object.create(null);
						for (o = 0; o < n.length; o++) {
							var y;
							v[(y = n[o])] = p(a[y], !0);
						}
						for (o = 0; o < n.length; o++) {
							var w = n[o],
								x = v[w],
								k = x.groups;
							for (l = 0; l < k.length; l++) d(k[l], w, v);
							var S = Object.getOwnPropertyNames(x.fast);
							for (l = 0; l < S.length; l++)
								d(x.fast[S[l]], w, v);
						}
						return new f(v, t);
					},
					error: Object.freeze({ error: !0 }),
					fallback: Object.freeze({ fallback: !0 }),
					keywords: function (e) {
						for (
							var t = Object.create(null),
								r = Object.create(null),
								n = Object.getOwnPropertyNames(e),
								a = 0;
							a < n.length;
							a++
						) {
							var o = n[a],
								i = e[o];
							(Array.isArray(i) ? i : [i]).forEach(function (e) {
								if (
									((r[e.length] = r[e.length] || []).push(e),
									'string' != typeof e)
								)
									throw new Error(
										"keyword must be string (in keyword '" +
											o +
											"')"
									);
								t[e] = o;
							});
						}
						function s(e) {
							return JSON.stringify(e);
						}
						var l = '';
						for (var c in ((l += 'switch (value.length) {\n'), r)) {
							var u = r[c];
							(l += 'case ' + c + ':\n'),
								(l += 'switch (value) {\n'),
								u.forEach(function (e) {
									var r = t[e];
									l +=
										'case ' +
										s(e) +
										': return ' +
										s(r) +
										'\n';
								}),
								(l += '}\n');
						}
						return (l += '}\n'), Function('value', l);
					},
				}
			);
		});
	})(Ft),
		Object.defineProperty(jt, '__esModule', { value: !0 });
	var Vt = Mt.exports;
	function Ut(e) {
		if (e && e.__esModule) return e;
		var t = Object.create(null);
		return (
			e &&
				Object.keys(e).forEach(function (r) {
					if ('default' !== r) {
						var n = Object.getOwnPropertyDescriptor(e, r);
						Object.defineProperty(
							t,
							r,
							n.get
								? n
								: {
										enumerable: !0,
										get: function () {
											return e[r];
										},
								  }
						);
					}
				}),
			(t.default = e),
			Object.freeze(t)
		);
	}
	function Ht(e) {
		return e[0];
	}
	const Gt = Ut(Ft.exports).compile({
		ws: { match: /[ \t\r\n\f]+/, lineBreaks: !0 },
		idn: { match: /[a-zA-Z_-][a-zA-Z0-9_-]*/ },
		hashToken: { match: /#[a-zA-Z0-9_-]+/, value: (e) => e.slice(1) },
		str1: {
			match: /'(?:\\['\\]|[^\n'\\])*'/,
			value: (e) => e.slice(1, -1),
		},
		str2: {
			match: /"(?:\\["\\]|[^\n"\\])*"/,
			value: (e) => e.slice(1, -1),
		},
		asterisk: '*',
		fullstop: '.',
		comma: ',',
		lbr: '[',
		rbr: ']',
		eq: '=',
		gt: '>',
		vbar: '|',
		plus: '+',
		tilde: '~',
		caret: '^',
		dollar: '$',
	});
	function Wt(e) {
		return e[0].value;
	}
	function zt(e) {
		return e[1];
	}
	function $t([e, t, r], [n, a, o]) {
		return [e + n, t + a, r + o];
	}
	const Jt = {
		Lexer: Gt,
		ParserRules: [
			{
				name: 'main',
				symbols: ['_', 'listSelector', '_'],
				postprocess: zt,
			},
			{
				name: 'mainNoList',
				symbols: ['_', 'complexSelector', '_'],
				postprocess: zt,
			},
			{
				name: 'listSelector',
				symbols: ['complexSelector'],
				postprocess: ([e]) => ({ type: 'list', list: [e] }),
			},
			{
				name: 'listSelector',
				symbols: [
					'listSelector',
					'_',
					Gt.has('comma') ? { type: 'comma' } : comma,
					'_',
					'complexSelector',
				],
				postprocess: ([e, , , , t]) => ({
					type: 'list',
					list: [...e.list, t],
				}),
			},
			{
				name: 'complexSelector',
				symbols: ['compoundSelector'],
				postprocess: Ht,
			},
			{
				name: 'complexSelector',
				symbols: ['complexSelector', '__', 'compoundSelector'],
				postprocess: ([e, , t]) => ({
					type: 'compound',
					list: [
						...t.list,
						{
							type: 'combinator',
							combinator: ' ',
							left: e,
							specificity: e.specificity,
						},
					],
					specificity: $t(e.specificity, t.specificity),
				}),
			},
			{
				name: 'complexSelector',
				symbols: [
					'complexSelector',
					'_',
					'combinator',
					'_',
					'compoundSelector',
				],
				postprocess: ([e, , t, , r]) => ({
					type: 'compound',
					list: [
						...r.list,
						{
							type: 'combinator',
							combinator: t,
							left: e,
							specificity: e.specificity,
						},
					],
					specificity: $t(e.specificity, r.specificity),
				}),
			},
			{
				name: 'combinator',
				symbols: [Gt.has('gt') ? { type: 'gt' } : gt],
				postprocess: () => '>',
			},
			{
				name: 'combinator',
				symbols: [Gt.has('plus') ? { type: 'plus' } : plus],
				postprocess: () => '+',
			},
			{
				name: 'combinator',
				symbols: [Gt.has('tilde') ? { type: 'tilde' } : tilde],
				postprocess: () => '~',
			},
			{
				name: 'combinator',
				symbols: [
					Gt.has('vbar') ? { type: 'vbar' } : vbar,
					Gt.has('vbar') ? { type: 'vbar' } : vbar,
				],
				postprocess: () => '||',
			},
			{
				name: 'compoundSelector',
				symbols: ['typeSelector'],
				postprocess: ([e]) => ({
					type: 'compound',
					list: [e],
					specificity: e.specificity,
				}),
			},
			{
				name: 'compoundSelector',
				symbols: ['subclassSelector'],
				postprocess: ([e]) => ({
					type: 'compound',
					list: [e],
					specificity: e.specificity,
				}),
			},
			{
				name: 'compoundSelector',
				symbols: ['compoundSelector', 'subclassSelector'],
				postprocess: ([e, t]) => ({
					type: 'compound',
					list: [...e.list, t],
					specificity: $t(e.specificity, t.specificity),
				}),
			},
			{
				name: 'subclassSelector',
				symbols: ['idSelector'],
				postprocess: Ht,
			},
			{
				name: 'subclassSelector',
				symbols: ['classSelector'],
				postprocess: Ht,
			},
			{
				name: 'subclassSelector',
				symbols: ['attrSelector'],
				postprocess: Ht,
			},
			{
				name: 'attrSelector',
				symbols: ['attrPresenceSelector'],
				postprocess: Ht,
			},
			{
				name: 'attrSelector',
				symbols: ['attrValueSelector'],
				postprocess: Ht,
			},
			{ name: 'typeSelector', symbols: ['tagSelector'], postprocess: Ht },
			{ name: 'typeSelector', symbols: ['uniSelector'], postprocess: Ht },
			{
				name: 'attrPresenceSelector',
				symbols: [
					Gt.has('lbr') ? { type: 'lbr' } : lbr,
					'_',
					'wqname',
					'_',
					Gt.has('rbr') ? { type: 'rbr' } : rbr,
				],
				postprocess: ([, , e]) => ({
					type: 'attrPresence',
					name: e.name,
					namespace: e.namespace,
					specificity: [0, 1, 0],
				}),
			},
			{
				name: 'attrValueSelector',
				symbols: [
					Gt.has('lbr') ? { type: 'lbr' } : lbr,
					'_',
					'wqname',
					'_',
					'attrMatcher',
					'_',
					'attrValue',
					'_',
					Gt.has('rbr') ? { type: 'rbr' } : rbr,
				],
				postprocess: ([, , e, , t, , r]) => ({
					type: 'attrValue',
					name: e.name,
					namespace: e.namespace,
					matcher: t,
					value: r.value,
					modifier: r.modifier,
					specificity: [0, 1, 0],
				}),
			},
			{
				name: 'attrMatcher',
				symbols: [Gt.has('eq') ? { type: 'eq' } : eq],
				postprocess: () => '=',
			},
			{
				name: 'attrMatcher',
				symbols: [
					Gt.has('tilde') ? { type: 'tilde' } : tilde,
					Gt.has('eq') ? { type: 'eq' } : eq,
				],
				postprocess: () => '~=',
			},
			{
				name: 'attrMatcher',
				symbols: [
					Gt.has('vbar') ? { type: 'vbar' } : vbar,
					Gt.has('eq') ? { type: 'eq' } : eq,
				],
				postprocess: () => '|=',
			},
			{
				name: 'attrMatcher',
				symbols: [
					Gt.has('caret') ? { type: 'caret' } : caret,
					Gt.has('eq') ? { type: 'eq' } : eq,
				],
				postprocess: () => '^=',
			},
			{
				name: 'attrMatcher',
				symbols: [
					Gt.has('dollar') ? { type: 'dollar' } : dollar,
					Gt.has('eq') ? { type: 'eq' } : eq,
				],
				postprocess: () => '$=',
			},
			{
				name: 'attrMatcher',
				symbols: [
					Gt.has('asterisk') ? { type: 'asterisk' } : asterisk,
					Gt.has('eq') ? { type: 'eq' } : eq,
				],
				postprocess: () => '*=',
			},
			{
				name: 'attrValue',
				symbols: ['str'],
				postprocess: ([e]) => ({ value: e, modifier: null }),
			},
			{
				name: 'attrValue',
				symbols: ['idn'],
				postprocess: ([e]) => ({ value: e, modifier: null }),
			},
			{
				name: 'attrValue',
				symbols: ['str', '_', 'attrModifier'],
				postprocess: ([e, , t]) => ({ value: e, modifier: t }),
			},
			{
				name: 'attrValue',
				symbols: ['idn', '__', 'attrModifier'],
				postprocess: ([e, , t]) => ({ value: e, modifier: t }),
			},
			{
				name: 'attrModifier',
				symbols: [{ literal: 'i' }],
				postprocess: () => 'i',
			},
			{
				name: 'attrModifier',
				symbols: [{ literal: 'I' }],
				postprocess: () => 'i',
			},
			{
				name: 'attrModifier',
				symbols: [{ literal: 's' }],
				postprocess: () => 's',
			},
			{
				name: 'attrModifier',
				symbols: [{ literal: 'S' }],
				postprocess: () => 's',
			},
			{
				name: 'idSelector',
				symbols: [
					Gt.has('hashToken') ? { type: 'hashToken' } : hashToken,
				],
				postprocess: ([{ value: e }]) => ({
					type: 'id',
					name: e,
					specificity: [1, 0, 0],
				}),
			},
			{
				name: 'classSelector',
				symbols: [
					Gt.has('fullstop') ? { type: 'fullstop' } : fullstop,
					'idn',
				],
				postprocess: ([, e]) => ({
					type: 'class',
					name: e,
					specificity: [0, 1, 0],
				}),
			},
			{
				name: 'tagSelector',
				symbols: ['wqname'],
				postprocess: ([e]) => ({
					type: 'tag',
					name: e.name,
					namespace: e.namespace,
					specificity: [0, 0, 1],
				}),
			},
			{
				name: 'uniSelector',
				symbols: [Gt.has('asterisk') ? { type: 'asterisk' } : asterisk],
				postprocess: () => ({
					type: 'universal',
					namespace: null,
					specificity: [0, 0, 0],
				}),
			},
			{
				name: 'uniSelector',
				symbols: [
					'ns',
					Gt.has('asterisk') ? { type: 'asterisk' } : asterisk,
				],
				postprocess: ([e]) => ({
					type: 'universal',
					namespace: e,
					specificity: [0, 0, 0],
				}),
			},
			{
				name: 'wqname',
				symbols: ['idn'],
				postprocess: ([e]) => ({ name: e, namespace: null }),
			},
			{
				name: 'wqname',
				symbols: ['ns', 'idn'],
				postprocess: ([e, t]) => ({ name: t, namespace: e }),
			},
			{
				name: 'ns',
				symbols: [Gt.has('vbar') ? { type: 'vbar' } : vbar],
				postprocess: () => '',
			},
			{
				name: 'ns',
				symbols: ['idn', Gt.has('vbar') ? { type: 'vbar' } : vbar],
				postprocess: Ht,
			},
			{
				name: 'str',
				symbols: [Gt.has('str1') ? { type: 'str1' } : str1],
				postprocess: Wt,
			},
			{
				name: 'str',
				symbols: [Gt.has('str2') ? { type: 'str2' } : str2],
				postprocess: Wt,
			},
			{
				name: 'idn',
				symbols: [Gt.has('idn') ? { type: 'idn' } : idn],
				postprocess: Wt,
			},
			{
				name: '_$ebnf$1',
				symbols: [Gt.has('ws') ? { type: 'ws' } : ws],
				postprocess: Ht,
			},
			{ name: '_$ebnf$1', symbols: [], postprocess: () => null },
			{ name: '_', symbols: ['_$ebnf$1'], postprocess: () => null },
			{
				name: '__',
				symbols: [Gt.has('ws') ? { type: 'ws' } : ws],
				postprocess: () => null,
			},
		],
		ParserStart: 'main',
	};
	var Yt = Object.freeze({ __proto__: null });
	const Xt = __spreadProps(__spreadValues({}, Jt), {
		ParserStart: 'mainNoList',
	});
	function Zt(e, t) {
		const r = new Vt.Parser(Vt.Grammar.fromCompiled(e));
		if ((r.feed(t), 0 === r.results.length))
			throw new Error(
				'Failed to parse - input string might be incomplete.'
			);
		return r.results[0];
	}
	function Qt(e) {
		if (!e.type) throw new Error('This is not an AST node.');
		switch (e.type) {
			case 'universal':
				return Kt(e.namespace) + '*';
			case 'tag':
				return Kt(e.namespace) + e.name;
			case 'class':
				return '.' + e.name;
			case 'id':
				return '#' + e.name;
			case 'attrPresence':
				return `[${Kt(e.namespace)}${e.name}]`;
			case 'attrValue':
				return `[${Kt(
					e.namespace
				)}${e.name}${e.matcher}${((t = e.value), -1 === t.indexOf('"') ? `"${t}"` : -1 === t.indexOf("'") ? `'${t}'` : `"${t.replace('"', '\\"')}"`)}${e.modifier ? e.modifier : ''}]`;
			case 'combinator':
				return Qt(e.left) + e.combinator;
			case 'compound':
				return e.list.reduce(
					(e, t) => ('combinator' === t.type ? Qt(t) + e : e + Qt(t)),
					''
				);
			case 'list':
				return e.list.map(Qt).join(',');
		}
		var t;
	}
	function Kt(e) {
		return e || '' === e ? e + '|' : '';
	}
	function er(e) {
		switch (e.type) {
			case 'universal':
			case 'tag':
				return [1];
			case 'id':
				return [2];
			case 'class':
				return [3, e.name];
			case 'attrPresence':
				return [4, Qt(e)];
			case 'attrValue':
				return [5, Qt(e)];
			case 'combinator':
				return [15, Qt(e)];
		}
	}
	function tr(e, t) {
		if (!Array.isArray(e) || !Array.isArray(t))
			throw new Error('Arguments must be arrays.');
		const r = e.length < t.length ? e.length : t.length;
		for (let n = 0; n < r; n++)
			if (e[n] !== t[n]) return e[n] < t[n] ? -1 : 1;
		return e.length - t.length;
	}
	(jt.Ast = Yt),
		(jt.compareSelectors = function (e, t) {
			return tr(e.specificity, t.specificity);
		}),
		(jt.compareSpecificity = function (e, t) {
			return tr(e, t);
		}),
		(jt.normalize = function e(t) {
			if (!t.type) throw new Error('This is not an AST node.');
			switch (t.type) {
				case 'compound':
					t.list.forEach(e), t.list.sort((e, t) => tr(er(e), er(t)));
					break;
				case 'combinator':
					e(t.left);
					break;
				case 'list':
					t.list.forEach(e),
						t.list.sort((e, t) => (Qt(e) < Qt(t) ? -1 : 1));
			}
			return t;
		}),
		(jt.parse = function (e) {
			return Zt(Jt, e);
		}),
		(jt.parse1 = function (e) {
			return Zt(Xt, e);
		}),
		(jt.serialize = Qt),
		Object.defineProperty(Rt, '__esModule', { value: !0 });
	var rr = jt;
	function nr(e) {
		if (e && e.__esModule) return e;
		var t = Object.create(null);
		return (
			e &&
				Object.keys(e).forEach(function (r) {
					if ('default' !== r) {
						var n = Object.getOwnPropertyDescriptor(e, r);
						Object.defineProperty(
							t,
							r,
							n.get
								? n
								: {
										enumerable: !0,
										get: function () {
											return e[r];
										},
								  }
						);
					}
				}),
			(t.default = e),
			Object.freeze(t)
		);
	}
	var ar = nr(rr),
		or = Object.freeze({ __proto__: null }),
		ir = Object.freeze({ __proto__: null });
	const sr = [
			['├─', '│ '],
			['└─', '  '],
		],
		lr = [
			['┠─', '┃ '],
			['┖─', '  '],
		],
		cr = [
			['╟─', '║ '],
			['╙─', '  '],
		];
	function ur(e, t = lr) {
		return (function (e, t) {
			return t
				.map((t, r, { length: n }) =>
					(function (e, t, r = !0) {
						const n = e[r ? 1 : 0];
						return n[0] + t.split('\n').join('\n' + n[1]);
					})(e, t, r === n - 1)
				)
				.join('\n');
		})(
			t,
			e.map((e) =>
				(function (e) {
					switch (e.type) {
						case 'terminal': {
							const t = e.valueContainer;
							return `◁ #${t.index} ${JSON.stringify(
								t.specificity
							)} ${t.value}`;
						}
						case 'tagName':
							return `◻ Tag name\n${ur(e.variants, cr)}`;
						case 'attrValue':
							return `▣ Attr value: ${e.name}\n${ur(
								e.matchers,
								cr
							)}`;
						case 'attrPresence':
							return `◨ Attr presence: ${e.name}\n${ur(e.cont)}`;
						case 'pushElement':
							return `◉ Push element: ${e.combinator}\n${ur(
								e.cont,
								sr
							)}`;
						case 'popElement':
							return `◌ Pop element\n${ur(e.cont, sr)}`;
						case 'variant':
							return `◇ = ${e.value}\n${ur(e.cont)}`;
						case 'matcher':
							return `◈ ${e.matcher} "${e.value}"${
								e.modifier || ''
							}\n${ur(e.cont)}`;
					}
				})(e)
			)
		);
	}
	var pr = Object.freeze({
		__proto__: null,
		treeify: (e) => '▽\n' + ur(e, sr),
	});
	function dr(e) {
		return fr(e), ar.normalize(e), e;
	}
	function fr(e) {
		const t = [];
		e.list.forEach((e) => {
			switch (e.type) {
				case 'class':
					t.push({
						matcher: '~=',
						modifier: null,
						name: 'class',
						namespace: null,
						specificity: e.specificity,
						type: 'attrValue',
						value: e.name,
					});
					break;
				case 'id':
					t.push({
						matcher: '=',
						modifier: null,
						name: 'id',
						namespace: null,
						specificity: e.specificity,
						type: 'attrValue',
						value: e.name,
					});
					break;
				case 'combinator':
					fr(e.left), t.push(e);
					break;
				case 'universal':
					break;
				default:
					t.push(e);
			}
		}),
			(e.list = t);
	}
	function hr(e) {
		const t = [];
		for (; e.length; ) {
			const r = Sr(e, (e) => !0, br),
				{ matches: n, nonmatches: a, empty: o } = gr(e, r);
			(e = a), n.length && t.push(vr(r, n)), o.length && t.push(...mr(o));
		}
		return t;
	}
	function mr(e) {
		const t = [];
		for (const r of e) {
			const e = r.terminal;
			if ('terminal' === e.type) t.push(e);
			else {
				const { matches: r, rest: n } = Er(
					e.cont,
					(e) => 'terminal' === e.type
				);
				r.forEach((e) => t.push(e)),
					n.length && ((e.cont = n), t.push(e));
			}
		}
		return t;
	}
	function gr(e, t) {
		const r = [],
			n = [],
			a = [];
		for (const o of e) {
			const e = o.ast.list;
			if (e.length) {
				(e.some((e) => br(e) === t) ? r : n).push(o);
			} else a.push(o);
		}
		return { matches: r, nonmatches: n, empty: a };
	}
	function br(e) {
		switch (e.type) {
			case 'attrPresence':
				return `attrPresence ${e.name}`;
			case 'attrValue':
				return `attrValue ${e.name}`;
			case 'combinator':
				return `combinator ${e.combinator}`;
			default:
				return e.type;
		}
	}
	function vr(e, t) {
		if ('tag' === e)
			return (function (e) {
				const t = xr(
					e,
					(e) => 'tag' === e.type,
					(e) => e.name
				);
				return {
					type: 'tagName',
					variants: Object.entries(t).map(([e, t]) => ({
						type: 'variant',
						value: e,
						cont: hr(t.items),
					})),
				};
			})(t);
		if (e.startsWith('attrValue '))
			return (function (e, t) {
				const r = xr(
						t,
						(t) => 'attrValue' === t.type && t.name === e,
						(e) => `${e.matcher} ${e.modifier || ''} ${e.value}`
					),
					n = [];
				for (const a of Object.values(r)) {
					const e = a.oneSimpleSelector,
						t = yr(e),
						r = hr(a.items);
					n.push({
						type: 'matcher',
						matcher: e.matcher,
						modifier: e.modifier,
						value: e.value,
						predicate: t,
						cont: r,
					});
				}
				return { type: 'attrValue', name: e, matchers: n };
			})(e.substring(10), t);
		if (e.startsWith('attrPresence '))
			return (function (e, t) {
				for (const r of t)
					kr(r, (t) => 'attrPresence' === t.type && t.name === e);
				return { type: 'attrPresence', name: e, cont: hr(t) };
			})(e.substring(13), t);
		if ('combinator >' === e) return wr('>', t);
		if ('combinator +' === e) return wr('+', t);
		throw new Error(`Unsupported selector kind: ${e}`);
	}
	function yr(e) {
		if ('i' === e.modifier) {
			const t = e.value.toLowerCase();
			switch (e.matcher) {
				case '=':
					return (e) => t === e.toLowerCase();
				case '~=':
					return (e) =>
						e
							.toLowerCase()
							.split(/[ \t]+/)
							.includes(t);
				case '^=':
					return (e) => e.toLowerCase().startsWith(t);
				case '$=':
					return (e) => e.toLowerCase().endsWith(t);
				case '*=':
					return (e) => e.toLowerCase().includes(t);
				case '|=':
					return (e) => {
						const r = e.toLowerCase();
						return (
							t === r || (r.startsWith(t) && '-' === r[t.length])
						);
					};
			}
		} else {
			const t = e.value;
			switch (e.matcher) {
				case '=':
					return (e) => t === e;
				case '~=':
					return (e) => e.split(/[ \t]+/).includes(t);
				case '^=':
					return (e) => e.startsWith(t);
				case '$=':
					return (e) => e.endsWith(t);
				case '*=':
					return (e) => e.includes(t);
				case '|=':
					return (e) =>
						t === e || (e.startsWith(t) && '-' === e[t.length]);
			}
		}
	}
	function wr(e, t) {
		const r = xr(
				t,
				(t) => 'combinator' === t.type && t.combinator === e,
				(e) => ar.serialize(e.left)
			),
			n = [];
		for (const a of Object.values(r)) {
			const e = hr(a.items),
				t = a.oneSimpleSelector.left;
			n.push({ ast: t, terminal: { type: 'popElement', cont: e } });
		}
		return { type: 'pushElement', combinator: e, cont: hr(n) };
	}
	function xr(e, t, r) {
		const n = {};
		for (; e.length; ) {
			const a = Sr(e, t, r),
				o = (e) => t(e) && r(e) === a,
				i = (e) => e.ast.list.some(o),
				{ matches: s, rest: l } = qr(e, i);
			let c = null;
			for (const e of s) {
				const t = kr(e, o);
				c || (c = t);
			}
			if (null == c) throw new Error('No simple selector is found.');
			(n[a] = { oneSimpleSelector: c, items: s }), (e = l);
		}
		return n;
	}
	function kr(e, t) {
		const r = e.ast.list,
			n = new Array(r.length);
		let a = -1;
		for (let i = r.length; i-- > 0; ) t(r[i]) && ((n[i] = !0), (a = i));
		if (-1 == a)
			throw new Error("Couldn't find the required simple selector.");
		const o = r[a];
		return (e.ast.list = r.filter((e, t) => !n[t])), o;
	}
	function Sr(e, t, r) {
		const n = {};
		for (const i of e) {
			const e = {};
			for (const n of i.ast.list.filter(t)) e[r(n)] = !0;
			for (const t of Object.keys(e)) n[t] ? n[t]++ : (n[t] = 1);
		}
		let a = '',
			o = 0;
		for (const i of Object.entries(n)) i[1] > o && ((a = i[0]), (o = i[1]));
		return a;
	}
	function Er(e, t) {
		const r = [],
			n = [];
		for (const a of e) t(a) ? r.push(a) : n.push(a);
		return { matches: r, rest: n };
	}
	function qr(e, t) {
		const r = [],
			n = [];
		for (const a of e) t(a) ? r.push(a) : n.push(a);
		return { matches: r, rest: n };
	}
	function Dr(e, t) {
		const r = rr.compareSpecificity(t.specificity, e.specificity);
		return r > 0 || (0 === r && t.index < e.index);
	}
	function Tr(e, t) {
		const r = rr.compareSpecificity(t.specificity, e.specificity);
		return r > 0 || (0 === r && t.index > e.index);
	}
	(Rt.Ast = or),
		(Rt.DecisionTree = class {
			constructor(e) {
				this.branches = hr(
					(function (e) {
						const t = e.length,
							r = new Array(t);
						for (let n = 0; n < t; n++) {
							const [t, a] = e[n],
								o = dr(ar.parse1(t));
							r[n] = {
								ast: o,
								terminal: {
									type: 'terminal',
									valueContainer: {
										index: n,
										value: a,
										specificity: o.specificity,
									},
								},
							};
						}
						return r;
					})(e)
				);
			}
			build(e) {
				return e(this.branches);
			}
		}),
		(Rt.Picker = class {
			constructor(e) {
				this.f = e;
			}
			pickAll(e) {
				return this.f(e);
			}
			pick1(e, t = !1) {
				const r = this.f(e),
					n = r.length;
				if (0 === n) return null;
				if (1 === n) return r[0].value;
				const a = t ? Dr : Tr;
				let o = r[0];
				for (let i = 1; i < n; i++) {
					const e = r[i];
					a(o, e) && (o = e);
				}
				return o.value;
			}
		}),
		(Rt.Treeify = pr),
		(Rt.Types = ir),
		Object.defineProperty(lt, '__esModule', { value: !0 });
	var Ar = ct,
		Lr = Rt;
	function Cr(e) {
		const t = e.map(_r);
		return (e, ...r) => Nr(t, (t) => t(e, ...r));
	}
	function _r(e) {
		switch (e.type) {
			case 'terminal': {
				const t = [e.valueContainer];
				return (e, ...r) => t;
			}
			case 'tagName':
				return (function (e) {
					const t = {};
					for (const r of e.variants) t[r.value] = Cr(r.cont);
					return (e, ...r) => {
						const n = t[e.name];
						return n ? n(e, ...r) : [];
					};
				})(e);
			case 'attrValue':
				return (function (e) {
					const t = [];
					for (const n of e.matchers) {
						const e = n.predicate,
							r = Cr(n.cont);
						t.push((t, n, ...a) => (e(t) ? r(n, ...a) : []));
					}
					const r = e.name;
					return (e, ...n) => {
						const a = e.attribs[r];
						return a || '' === a ? Nr(t, (t) => t(a, e, ...n)) : [];
					};
				})(e);
			case 'attrPresence':
				return (function (e) {
					const t = e.name,
						r = Cr(e.cont);
					return (e, ...n) =>
						Object.prototype.hasOwnProperty.call(e.attribs, t)
							? r(e, ...n)
							: [];
				})(e);
			case 'pushElement':
				return (function (e) {
					const t = Cr(e.cont),
						r = '+' === e.combinator ? Or : Br;
					return (e, ...n) => {
						const a = r(e);
						return null === a ? [] : t(a, e, ...n);
					};
				})(e);
			case 'popElement':
				return (function (e) {
					const t = Cr(e.cont);
					return (e, r, ...n) => t(r, ...n);
				})(e);
		}
	}
	const Or = (e) => {
			const t = e.prev;
			return null === t ? null : Ar.isTag(t) ? t : Or(t);
		},
		Br = (e) => {
			const t = e.parent;
			return t && Ar.isTag(t) ? t : null;
		};
	function Nr(e, t) {
		return [].concat(
			...(function (e, t) {
				const r = e.length,
					n = new Array(r);
				for (let a = 0; a < r; a++) n[a] = t(e[a]);
				return n;
			})(e, t)
		);
	}
	lt.hp2Builder = function (e) {
		return new Lr.Picker(Cr(e));
	};
	var Pr = function (e) {
		return (
			(function (e) {
				return !!e && 'object' == typeof e;
			})(e) &&
			!(function (e) {
				var t = Object.prototype.toString.call(e);
				return (
					'[object RegExp]' === t ||
					'[object Date]' === t ||
					(function (e) {
						return e.$$typeof === Ir;
					})(e)
				);
			})(e)
		);
	};
	var Ir =
		'function' == typeof Symbol && Symbol.for
			? Symbol.for('react.element')
			: 60103;
	function Rr(e, t) {
		return !1 !== t.clone && t.isMergeableObject(e)
			? Ur(((r = e), Array.isArray(r) ? [] : {}), e, t)
			: e;
		var r;
	}
	function jr(e, t, r) {
		return e.concat(t).map(function (e) {
			return Rr(e, r);
		});
	}
	function Mr(e) {
		return Object.keys(e).concat(
			(function (e) {
				return Object.getOwnPropertySymbols
					? Object.getOwnPropertySymbols(e).filter(function (t) {
							return e.propertyIsEnumerable(t);
					  })
					: [];
			})(e)
		);
	}
	function Fr(e, t) {
		try {
			return t in e;
		} catch (r) {
			return !1;
		}
	}
	function Vr(e, t, r) {
		var n = {};
		return (
			r.isMergeableObject(e) &&
				Mr(e).forEach(function (t) {
					n[t] = Rr(e[t], r);
				}),
			Mr(t).forEach(function (a) {
				(function (e, t) {
					return (
						Fr(e, t) &&
						!(
							Object.hasOwnProperty.call(e, t) &&
							Object.propertyIsEnumerable.call(e, t)
						)
					);
				})(e, a) ||
					(Fr(e, a) && r.isMergeableObject(t[a])
						? (n[a] = (function (e, t) {
								if (!t.customMerge) return Ur;
								var r = t.customMerge(e);
								return 'function' == typeof r ? r : Ur;
						  })(a, r)(e[a], t[a], r))
						: (n[a] = Rr(t[a], r)));
			}),
			n
		);
	}
	function Ur(e, t, r) {
		((r = r || {}).arrayMerge = r.arrayMerge || jr),
			(r.isMergeableObject = r.isMergeableObject || Pr),
			(r.cloneUnlessOtherwiseSpecified = Rr);
		var n = Array.isArray(t);
		return n === Array.isArray(e)
			? n
				? r.arrayMerge(e, t, r)
				: Vr(e, t, r)
			: Rr(t, r);
	}
	Ur.all = function (e, t) {
		if (!Array.isArray(e))
			throw new Error('first argument should be an array');
		return e.reduce(function (e, r) {
			return Ur(e, r, t);
		}, {});
	};
	var Hr = Ur,
		Gr = { exports: {} };
	/*! https://mths.be/he v1.2.0 by @mathias | MIT license */
	!(function (e, t) {
		!(function (r) {
			var n = t,
				a = e && e.exports == n && e,
				o = 'object' == typeof k && k;
			(o.global !== o && o.window !== o) || (r = o);
			var i = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
				s = /[\x01-\x7F]/g,
				l =
					/[\x01-\t\x0B\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g,
				c =
					/<\u20D2|=\u20E5|>\u20D2|\u205F\u200A|\u219D\u0338|\u2202\u0338|\u2220\u20D2|\u2229\uFE00|\u222A\uFE00|\u223C\u20D2|\u223D\u0331|\u223E\u0333|\u2242\u0338|\u224B\u0338|\u224D\u20D2|\u224E\u0338|\u224F\u0338|\u2250\u0338|\u2261\u20E5|\u2264\u20D2|\u2265\u20D2|\u2266\u0338|\u2267\u0338|\u2268\uFE00|\u2269\uFE00|\u226A\u0338|\u226A\u20D2|\u226B\u0338|\u226B\u20D2|\u227F\u0338|\u2282\u20D2|\u2283\u20D2|\u228A\uFE00|\u228B\uFE00|\u228F\u0338|\u2290\u0338|\u2293\uFE00|\u2294\uFE00|\u22B4\u20D2|\u22B5\u20D2|\u22D8\u0338|\u22D9\u0338|\u22DA\uFE00|\u22DB\uFE00|\u22F5\u0338|\u22F9\u0338|\u2933\u0338|\u29CF\u0338|\u29D0\u0338|\u2A6D\u0338|\u2A70\u0338|\u2A7D\u0338|\u2A7E\u0338|\u2AA1\u0338|\u2AA2\u0338|\u2AAC\uFE00|\u2AAD\uFE00|\u2AAF\u0338|\u2AB0\u0338|\u2AC5\u0338|\u2AC6\u0338|\u2ACB\uFE00|\u2ACC\uFE00|\u2AFD\u20E5|[\xA0-\u0113\u0116-\u0122\u0124-\u012B\u012E-\u014D\u0150-\u017E\u0192\u01B5\u01F5\u0237\u02C6\u02C7\u02D8-\u02DD\u0311\u0391-\u03A1\u03A3-\u03A9\u03B1-\u03C9\u03D1\u03D2\u03D5\u03D6\u03DC\u03DD\u03F0\u03F1\u03F5\u03F6\u0401-\u040C\u040E-\u044F\u0451-\u045C\u045E\u045F\u2002-\u2005\u2007-\u2010\u2013-\u2016\u2018-\u201A\u201C-\u201E\u2020-\u2022\u2025\u2026\u2030-\u2035\u2039\u203A\u203E\u2041\u2043\u2044\u204F\u2057\u205F-\u2063\u20AC\u20DB\u20DC\u2102\u2105\u210A-\u2113\u2115-\u211E\u2122\u2124\u2127-\u2129\u212C\u212D\u212F-\u2131\u2133-\u2138\u2145-\u2148\u2153-\u215E\u2190-\u219B\u219D-\u21A7\u21A9-\u21AE\u21B0-\u21B3\u21B5-\u21B7\u21BA-\u21DB\u21DD\u21E4\u21E5\u21F5\u21FD-\u2205\u2207-\u2209\u220B\u220C\u220F-\u2214\u2216-\u2218\u221A\u221D-\u2238\u223A-\u2257\u2259\u225A\u225C\u225F-\u2262\u2264-\u228B\u228D-\u229B\u229D-\u22A5\u22A7-\u22B0\u22B2-\u22BB\u22BD-\u22DB\u22DE-\u22E3\u22E6-\u22F7\u22F9-\u22FE\u2305\u2306\u2308-\u2310\u2312\u2313\u2315\u2316\u231C-\u231F\u2322\u2323\u232D\u232E\u2336\u233D\u233F\u237C\u23B0\u23B1\u23B4-\u23B6\u23DC-\u23DF\u23E2\u23E7\u2423\u24C8\u2500\u2502\u250C\u2510\u2514\u2518\u251C\u2524\u252C\u2534\u253C\u2550-\u256C\u2580\u2584\u2588\u2591-\u2593\u25A1\u25AA\u25AB\u25AD\u25AE\u25B1\u25B3-\u25B5\u25B8\u25B9\u25BD-\u25BF\u25C2\u25C3\u25CA\u25CB\u25EC\u25EF\u25F8-\u25FC\u2605\u2606\u260E\u2640\u2642\u2660\u2663\u2665\u2666\u266A\u266D-\u266F\u2713\u2717\u2720\u2736\u2758\u2772\u2773\u27C8\u27C9\u27E6-\u27ED\u27F5-\u27FA\u27FC\u27FF\u2902-\u2905\u290C-\u2913\u2916\u2919-\u2920\u2923-\u292A\u2933\u2935-\u2939\u293C\u293D\u2945\u2948-\u294B\u294E-\u2976\u2978\u2979\u297B-\u297F\u2985\u2986\u298B-\u2996\u299A\u299C\u299D\u29A4-\u29B7\u29B9\u29BB\u29BC\u29BE-\u29C5\u29C9\u29CD-\u29D0\u29DC-\u29DE\u29E3-\u29E5\u29EB\u29F4\u29F6\u2A00-\u2A02\u2A04\u2A06\u2A0C\u2A0D\u2A10-\u2A17\u2A22-\u2A27\u2A29\u2A2A\u2A2D-\u2A31\u2A33-\u2A3C\u2A3F\u2A40\u2A42-\u2A4D\u2A50\u2A53-\u2A58\u2A5A-\u2A5D\u2A5F\u2A66\u2A6A\u2A6D-\u2A75\u2A77-\u2A9A\u2A9D-\u2AA2\u2AA4-\u2AB0\u2AB3-\u2AC8\u2ACB\u2ACC\u2ACF-\u2ADB\u2AE4\u2AE6-\u2AE9\u2AEB-\u2AF3\u2AFD\uFB00-\uFB04]|\uD835[\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDD6B]/g,
				u = {
					'­': 'shy',
					'‌': 'zwnj',
					'‍': 'zwj',
					'‎': 'lrm',
					'⁣': 'ic',
					'⁢': 'it',
					'⁡': 'af',
					'‏': 'rlm',
					'​': 'ZeroWidthSpace',
					'⁠': 'NoBreak',
					'̑': 'DownBreve',
					'⃛': 'tdot',
					'⃜': 'DotDot',
					'\t': 'Tab',
					'\n': 'NewLine',
					' ': 'puncsp',
					' ': 'MediumSpace',
					' ': 'thinsp',
					' ': 'hairsp',
					' ': 'emsp13',
					' ': 'ensp',
					' ': 'emsp14',
					' ': 'emsp',
					' ': 'numsp',
					' ': 'nbsp',
					'  ': 'ThickSpace',
					'‾': 'oline',
					_: 'lowbar',
					'‐': 'dash',
					'–': 'ndash',
					'—': 'mdash',
					'―': 'horbar',
					',': 'comma',
					';': 'semi',
					'⁏': 'bsemi',
					':': 'colon',
					'⩴': 'Colone',
					'!': 'excl',
					'¡': 'iexcl',
					'?': 'quest',
					'¿': 'iquest',
					'.': 'period',
					'‥': 'nldr',
					'…': 'mldr',
					'·': 'middot',
					"'": 'apos',
					'‘': 'lsquo',
					'’': 'rsquo',
					'‚': 'sbquo',
					'‹': 'lsaquo',
					'›': 'rsaquo',
					'"': 'quot',
					'“': 'ldquo',
					'”': 'rdquo',
					'„': 'bdquo',
					'«': 'laquo',
					'»': 'raquo',
					'(': 'lpar',
					')': 'rpar',
					'[': 'lsqb',
					']': 'rsqb',
					'{': 'lcub',
					'}': 'rcub',
					'⌈': 'lceil',
					'⌉': 'rceil',
					'⌊': 'lfloor',
					'⌋': 'rfloor',
					'⦅': 'lopar',
					'⦆': 'ropar',
					'⦋': 'lbrke',
					'⦌': 'rbrke',
					'⦍': 'lbrkslu',
					'⦎': 'rbrksld',
					'⦏': 'lbrksld',
					'⦐': 'rbrkslu',
					'⦑': 'langd',
					'⦒': 'rangd',
					'⦓': 'lparlt',
					'⦔': 'rpargt',
					'⦕': 'gtlPar',
					'⦖': 'ltrPar',
					'⟦': 'lobrk',
					'⟧': 'robrk',
					'⟨': 'lang',
					'⟩': 'rang',
					'⟪': 'Lang',
					'⟫': 'Rang',
					'⟬': 'loang',
					'⟭': 'roang',
					'❲': 'lbbrk',
					'❳': 'rbbrk',
					'‖': 'Vert',
					'§': 'sect',
					'¶': 'para',
					'@': 'commat',
					'*': 'ast',
					'/': 'sol',
					undefined: null,
					'&': 'amp',
					'#': 'num',
					'%': 'percnt',
					'‰': 'permil',
					'‱': 'pertenk',
					'†': 'dagger',
					'‡': 'Dagger',
					'•': 'bull',
					'⁃': 'hybull',
					'′': 'prime',
					'″': 'Prime',
					'‴': 'tprime',
					'⁗': 'qprime',
					'‵': 'bprime',
					'⁁': 'caret',
					'`': 'grave',
					'´': 'acute',
					'˜': 'tilde',
					'^': 'Hat',
					'¯': 'macr',
					'˘': 'breve',
					'˙': 'dot',
					'¨': 'die',
					'˚': 'ring',
					'˝': 'dblac',
					'¸': 'cedil',
					'˛': 'ogon',
					ˆ: 'circ',
					ˇ: 'caron',
					'°': 'deg',
					'©': 'copy',
					'®': 'reg',
					'℗': 'copysr',
					'℘': 'wp',
					'℞': 'rx',
					'℧': 'mho',
					'℩': 'iiota',
					'←': 'larr',
					'↚': 'nlarr',
					'→': 'rarr',
					'↛': 'nrarr',
					'↑': 'uarr',
					'↓': 'darr',
					'↔': 'harr',
					'↮': 'nharr',
					'↕': 'varr',
					'↖': 'nwarr',
					'↗': 'nearr',
					'↘': 'searr',
					'↙': 'swarr',
					'↝': 'rarrw',
					'↝̸': 'nrarrw',
					'↞': 'Larr',
					'↟': 'Uarr',
					'↠': 'Rarr',
					'↡': 'Darr',
					'↢': 'larrtl',
					'↣': 'rarrtl',
					'↤': 'mapstoleft',
					'↥': 'mapstoup',
					'↦': 'map',
					'↧': 'mapstodown',
					'↩': 'larrhk',
					'↪': 'rarrhk',
					'↫': 'larrlp',
					'↬': 'rarrlp',
					'↭': 'harrw',
					'↰': 'lsh',
					'↱': 'rsh',
					'↲': 'ldsh',
					'↳': 'rdsh',
					'↵': 'crarr',
					'↶': 'cularr',
					'↷': 'curarr',
					'↺': 'olarr',
					'↻': 'orarr',
					'↼': 'lharu',
					'↽': 'lhard',
					'↾': 'uharr',
					'↿': 'uharl',
					'⇀': 'rharu',
					'⇁': 'rhard',
					'⇂': 'dharr',
					'⇃': 'dharl',
					'⇄': 'rlarr',
					'⇅': 'udarr',
					'⇆': 'lrarr',
					'⇇': 'llarr',
					'⇈': 'uuarr',
					'⇉': 'rrarr',
					'⇊': 'ddarr',
					'⇋': 'lrhar',
					'⇌': 'rlhar',
					'⇐': 'lArr',
					'⇍': 'nlArr',
					'⇑': 'uArr',
					'⇒': 'rArr',
					'⇏': 'nrArr',
					'⇓': 'dArr',
					'⇔': 'iff',
					'⇎': 'nhArr',
					'⇕': 'vArr',
					'⇖': 'nwArr',
					'⇗': 'neArr',
					'⇘': 'seArr',
					'⇙': 'swArr',
					'⇚': 'lAarr',
					'⇛': 'rAarr',
					'⇝': 'zigrarr',
					'⇤': 'larrb',
					'⇥': 'rarrb',
					'⇵': 'duarr',
					'⇽': 'loarr',
					'⇾': 'roarr',
					'⇿': 'hoarr',
					'∀': 'forall',
					'∁': 'comp',
					'∂': 'part',
					'∂̸': 'npart',
					'∃': 'exist',
					'∄': 'nexist',
					'∅': 'empty',
					'∇': 'Del',
					'∈': 'in',
					'∉': 'notin',
					'∋': 'ni',
					'∌': 'notni',
					'϶': 'bepsi',
					'∏': 'prod',
					'∐': 'coprod',
					'∑': 'sum',
					'+': 'plus',
					'±': 'pm',
					'÷': 'div',
					'×': 'times',
					'<': 'lt',
					'≮': 'nlt',
					'<⃒': 'nvlt',
					'=': 'equals',
					'≠': 'ne',
					'=⃥': 'bne',
					'⩵': 'Equal',
					'>': 'gt',
					'≯': 'ngt',
					'>⃒': 'nvgt',
					'¬': 'not',
					'|': 'vert',
					'¦': 'brvbar',
					'−': 'minus',
					'∓': 'mp',
					'∔': 'plusdo',
					'⁄': 'frasl',
					'∖': 'setmn',
					'∗': 'lowast',
					'∘': 'compfn',
					'√': 'Sqrt',
					'∝': 'prop',
					'∞': 'infin',
					'∟': 'angrt',
					'∠': 'ang',
					'∠⃒': 'nang',
					'∡': 'angmsd',
					'∢': 'angsph',
					'∣': 'mid',
					'∤': 'nmid',
					'∥': 'par',
					'∦': 'npar',
					'∧': 'and',
					'∨': 'or',
					'∩': 'cap',
					'∩︀': 'caps',
					'∪': 'cup',
					'∪︀': 'cups',
					'∫': 'int',
					'∬': 'Int',
					'∭': 'tint',
					'⨌': 'qint',
					'∮': 'oint',
					'∯': 'Conint',
					'∰': 'Cconint',
					'∱': 'cwint',
					'∲': 'cwconint',
					'∳': 'awconint',
					'∴': 'there4',
					'∵': 'becaus',
					'∶': 'ratio',
					'∷': 'Colon',
					'∸': 'minusd',
					'∺': 'mDDot',
					'∻': 'homtht',
					'∼': 'sim',
					'≁': 'nsim',
					'∼⃒': 'nvsim',
					'∽': 'bsim',
					'∽̱': 'race',
					'∾': 'ac',
					'∾̳': 'acE',
					'∿': 'acd',
					'≀': 'wr',
					'≂': 'esim',
					'≂̸': 'nesim',
					'≃': 'sime',
					'≄': 'nsime',
					'≅': 'cong',
					'≇': 'ncong',
					'≆': 'simne',
					'≈': 'ap',
					'≉': 'nap',
					'≊': 'ape',
					'≋': 'apid',
					'≋̸': 'napid',
					'≌': 'bcong',
					'≍': 'CupCap',
					'≭': 'NotCupCap',
					'≍⃒': 'nvap',
					'≎': 'bump',
					'≎̸': 'nbump',
					'≏': 'bumpe',
					'≏̸': 'nbumpe',
					'≐': 'doteq',
					'≐̸': 'nedot',
					'≑': 'eDot',
					'≒': 'efDot',
					'≓': 'erDot',
					'≔': 'colone',
					'≕': 'ecolon',
					'≖': 'ecir',
					'≗': 'cire',
					'≙': 'wedgeq',
					'≚': 'veeeq',
					'≜': 'trie',
					'≟': 'equest',
					'≡': 'equiv',
					'≢': 'nequiv',
					'≡⃥': 'bnequiv',
					'≤': 'le',
					'≰': 'nle',
					'≤⃒': 'nvle',
					'≥': 'ge',
					'≱': 'nge',
					'≥⃒': 'nvge',
					'≦': 'lE',
					'≦̸': 'nlE',
					'≧': 'gE',
					'≧̸': 'ngE',
					'≨︀': 'lvnE',
					'≨': 'lnE',
					'≩': 'gnE',
					'≩︀': 'gvnE',
					'≪': 'll',
					'≪̸': 'nLtv',
					'≪⃒': 'nLt',
					'≫': 'gg',
					'≫̸': 'nGtv',
					'≫⃒': 'nGt',
					'≬': 'twixt',
					'≲': 'lsim',
					'≴': 'nlsim',
					'≳': 'gsim',
					'≵': 'ngsim',
					'≶': 'lg',
					'≸': 'ntlg',
					'≷': 'gl',
					'≹': 'ntgl',
					'≺': 'pr',
					'⊀': 'npr',
					'≻': 'sc',
					'⊁': 'nsc',
					'≼': 'prcue',
					'⋠': 'nprcue',
					'≽': 'sccue',
					'⋡': 'nsccue',
					'≾': 'prsim',
					'≿': 'scsim',
					'≿̸': 'NotSucceedsTilde',
					'⊂': 'sub',
					'⊄': 'nsub',
					'⊂⃒': 'vnsub',
					'⊃': 'sup',
					'⊅': 'nsup',
					'⊃⃒': 'vnsup',
					'⊆': 'sube',
					'⊈': 'nsube',
					'⊇': 'supe',
					'⊉': 'nsupe',
					'⊊︀': 'vsubne',
					'⊊': 'subne',
					'⊋︀': 'vsupne',
					'⊋': 'supne',
					'⊍': 'cupdot',
					'⊎': 'uplus',
					'⊏': 'sqsub',
					'⊏̸': 'NotSquareSubset',
					'⊐': 'sqsup',
					'⊐̸': 'NotSquareSuperset',
					'⊑': 'sqsube',
					'⋢': 'nsqsube',
					'⊒': 'sqsupe',
					'⋣': 'nsqsupe',
					'⊓': 'sqcap',
					'⊓︀': 'sqcaps',
					'⊔': 'sqcup',
					'⊔︀': 'sqcups',
					'⊕': 'oplus',
					'⊖': 'ominus',
					'⊗': 'otimes',
					'⊘': 'osol',
					'⊙': 'odot',
					'⊚': 'ocir',
					'⊛': 'oast',
					'⊝': 'odash',
					'⊞': 'plusb',
					'⊟': 'minusb',
					'⊠': 'timesb',
					'⊡': 'sdotb',
					'⊢': 'vdash',
					'⊬': 'nvdash',
					'⊣': 'dashv',
					'⊤': 'top',
					'⊥': 'bot',
					'⊧': 'models',
					'⊨': 'vDash',
					'⊭': 'nvDash',
					'⊩': 'Vdash',
					'⊮': 'nVdash',
					'⊪': 'Vvdash',
					'⊫': 'VDash',
					'⊯': 'nVDash',
					'⊰': 'prurel',
					'⊲': 'vltri',
					'⋪': 'nltri',
					'⊳': 'vrtri',
					'⋫': 'nrtri',
					'⊴': 'ltrie',
					'⋬': 'nltrie',
					'⊴⃒': 'nvltrie',
					'⊵': 'rtrie',
					'⋭': 'nrtrie',
					'⊵⃒': 'nvrtrie',
					'⊶': 'origof',
					'⊷': 'imof',
					'⊸': 'mumap',
					'⊹': 'hercon',
					'⊺': 'intcal',
					'⊻': 'veebar',
					'⊽': 'barvee',
					'⊾': 'angrtvb',
					'⊿': 'lrtri',
					'⋀': 'Wedge',
					'⋁': 'Vee',
					'⋂': 'xcap',
					'⋃': 'xcup',
					'⋄': 'diam',
					'⋅': 'sdot',
					'⋆': 'Star',
					'⋇': 'divonx',
					'⋈': 'bowtie',
					'⋉': 'ltimes',
					'⋊': 'rtimes',
					'⋋': 'lthree',
					'⋌': 'rthree',
					'⋍': 'bsime',
					'⋎': 'cuvee',
					'⋏': 'cuwed',
					'⋐': 'Sub',
					'⋑': 'Sup',
					'⋒': 'Cap',
					'⋓': 'Cup',
					'⋔': 'fork',
					'⋕': 'epar',
					'⋖': 'ltdot',
					'⋗': 'gtdot',
					'⋘': 'Ll',
					'⋘̸': 'nLl',
					'⋙': 'Gg',
					'⋙̸': 'nGg',
					'⋚︀': 'lesg',
					'⋚': 'leg',
					'⋛': 'gel',
					'⋛︀': 'gesl',
					'⋞': 'cuepr',
					'⋟': 'cuesc',
					'⋦': 'lnsim',
					'⋧': 'gnsim',
					'⋨': 'prnsim',
					'⋩': 'scnsim',
					'⋮': 'vellip',
					'⋯': 'ctdot',
					'⋰': 'utdot',
					'⋱': 'dtdot',
					'⋲': 'disin',
					'⋳': 'isinsv',
					'⋴': 'isins',
					'⋵': 'isindot',
					'⋵̸': 'notindot',
					'⋶': 'notinvc',
					'⋷': 'notinvb',
					'⋹': 'isinE',
					'⋹̸': 'notinE',
					'⋺': 'nisd',
					'⋻': 'xnis',
					'⋼': 'nis',
					'⋽': 'notnivc',
					'⋾': 'notnivb',
					'⌅': 'barwed',
					'⌆': 'Barwed',
					'⌌': 'drcrop',
					'⌍': 'dlcrop',
					'⌎': 'urcrop',
					'⌏': 'ulcrop',
					'⌐': 'bnot',
					'⌒': 'profline',
					'⌓': 'profsurf',
					'⌕': 'telrec',
					'⌖': 'target',
					'⌜': 'ulcorn',
					'⌝': 'urcorn',
					'⌞': 'dlcorn',
					'⌟': 'drcorn',
					'⌢': 'frown',
					'⌣': 'smile',
					'⌭': 'cylcty',
					'⌮': 'profalar',
					'⌶': 'topbot',
					'⌽': 'ovbar',
					'⌿': 'solbar',
					'⍼': 'angzarr',
					'⎰': 'lmoust',
					'⎱': 'rmoust',
					'⎴': 'tbrk',
					'⎵': 'bbrk',
					'⎶': 'bbrktbrk',
					'⏜': 'OverParenthesis',
					'⏝': 'UnderParenthesis',
					'⏞': 'OverBrace',
					'⏟': 'UnderBrace',
					'⏢': 'trpezium',
					'⏧': 'elinters',
					'␣': 'blank',
					'─': 'boxh',
					'│': 'boxv',
					'┌': 'boxdr',
					'┐': 'boxdl',
					'└': 'boxur',
					'┘': 'boxul',
					'├': 'boxvr',
					'┤': 'boxvl',
					'┬': 'boxhd',
					'┴': 'boxhu',
					'┼': 'boxvh',
					'═': 'boxH',
					'║': 'boxV',
					'╒': 'boxdR',
					'╓': 'boxDr',
					'╔': 'boxDR',
					'╕': 'boxdL',
					'╖': 'boxDl',
					'╗': 'boxDL',
					'╘': 'boxuR',
					'╙': 'boxUr',
					'╚': 'boxUR',
					'╛': 'boxuL',
					'╜': 'boxUl',
					'╝': 'boxUL',
					'╞': 'boxvR',
					'╟': 'boxVr',
					'╠': 'boxVR',
					'╡': 'boxvL',
					'╢': 'boxVl',
					'╣': 'boxVL',
					'╤': 'boxHd',
					'╥': 'boxhD',
					'╦': 'boxHD',
					'╧': 'boxHu',
					'╨': 'boxhU',
					'╩': 'boxHU',
					'╪': 'boxvH',
					'╫': 'boxVh',
					'╬': 'boxVH',
					'▀': 'uhblk',
					'▄': 'lhblk',
					'█': 'block',
					'░': 'blk14',
					'▒': 'blk12',
					'▓': 'blk34',
					'□': 'squ',
					'▪': 'squf',
					'▫': 'EmptyVerySmallSquare',
					'▭': 'rect',
					'▮': 'marker',
					'▱': 'fltns',
					'△': 'xutri',
					'▴': 'utrif',
					'▵': 'utri',
					'▸': 'rtrif',
					'▹': 'rtri',
					'▽': 'xdtri',
					'▾': 'dtrif',
					'▿': 'dtri',
					'◂': 'ltrif',
					'◃': 'ltri',
					'◊': 'loz',
					'○': 'cir',
					'◬': 'tridot',
					'◯': 'xcirc',
					'◸': 'ultri',
					'◹': 'urtri',
					'◺': 'lltri',
					'◻': 'EmptySmallSquare',
					'◼': 'FilledSmallSquare',
					'★': 'starf',
					'☆': 'star',
					'☎': 'phone',
					'♀': 'female',
					'♂': 'male',
					'♠': 'spades',
					'♣': 'clubs',
					'♥': 'hearts',
					'♦': 'diams',
					'♪': 'sung',
					'✓': 'check',
					'✗': 'cross',
					'✠': 'malt',
					'✶': 'sext',
					'❘': 'VerticalSeparator',
					'⟈': 'bsolhsub',
					'⟉': 'suphsol',
					'⟵': 'xlarr',
					'⟶': 'xrarr',
					'⟷': 'xharr',
					'⟸': 'xlArr',
					'⟹': 'xrArr',
					'⟺': 'xhArr',
					'⟼': 'xmap',
					'⟿': 'dzigrarr',
					'⤂': 'nvlArr',
					'⤃': 'nvrArr',
					'⤄': 'nvHarr',
					'⤅': 'Map',
					'⤌': 'lbarr',
					'⤍': 'rbarr',
					'⤎': 'lBarr',
					'⤏': 'rBarr',
					'⤐': 'RBarr',
					'⤑': 'DDotrahd',
					'⤒': 'UpArrowBar',
					'⤓': 'DownArrowBar',
					'⤖': 'Rarrtl',
					'⤙': 'latail',
					'⤚': 'ratail',
					'⤛': 'lAtail',
					'⤜': 'rAtail',
					'⤝': 'larrfs',
					'⤞': 'rarrfs',
					'⤟': 'larrbfs',
					'⤠': 'rarrbfs',
					'⤣': 'nwarhk',
					'⤤': 'nearhk',
					'⤥': 'searhk',
					'⤦': 'swarhk',
					'⤧': 'nwnear',
					'⤨': 'toea',
					'⤩': 'tosa',
					'⤪': 'swnwar',
					'⤳': 'rarrc',
					'⤳̸': 'nrarrc',
					'⤵': 'cudarrr',
					'⤶': 'ldca',
					'⤷': 'rdca',
					'⤸': 'cudarrl',
					'⤹': 'larrpl',
					'⤼': 'curarrm',
					'⤽': 'cularrp',
					'⥅': 'rarrpl',
					'⥈': 'harrcir',
					'⥉': 'Uarrocir',
					'⥊': 'lurdshar',
					'⥋': 'ldrushar',
					'⥎': 'LeftRightVector',
					'⥏': 'RightUpDownVector',
					'⥐': 'DownLeftRightVector',
					'⥑': 'LeftUpDownVector',
					'⥒': 'LeftVectorBar',
					'⥓': 'RightVectorBar',
					'⥔': 'RightUpVectorBar',
					'⥕': 'RightDownVectorBar',
					'⥖': 'DownLeftVectorBar',
					'⥗': 'DownRightVectorBar',
					'⥘': 'LeftUpVectorBar',
					'⥙': 'LeftDownVectorBar',
					'⥚': 'LeftTeeVector',
					'⥛': 'RightTeeVector',
					'⥜': 'RightUpTeeVector',
					'⥝': 'RightDownTeeVector',
					'⥞': 'DownLeftTeeVector',
					'⥟': 'DownRightTeeVector',
					'⥠': 'LeftUpTeeVector',
					'⥡': 'LeftDownTeeVector',
					'⥢': 'lHar',
					'⥣': 'uHar',
					'⥤': 'rHar',
					'⥥': 'dHar',
					'⥦': 'luruhar',
					'⥧': 'ldrdhar',
					'⥨': 'ruluhar',
					'⥩': 'rdldhar',
					'⥪': 'lharul',
					'⥫': 'llhard',
					'⥬': 'rharul',
					'⥭': 'lrhard',
					'⥮': 'udhar',
					'⥯': 'duhar',
					'⥰': 'RoundImplies',
					'⥱': 'erarr',
					'⥲': 'simrarr',
					'⥳': 'larrsim',
					'⥴': 'rarrsim',
					'⥵': 'rarrap',
					'⥶': 'ltlarr',
					'⥸': 'gtrarr',
					'⥹': 'subrarr',
					'⥻': 'suplarr',
					'⥼': 'lfisht',
					'⥽': 'rfisht',
					'⥾': 'ufisht',
					'⥿': 'dfisht',
					'⦚': 'vzigzag',
					'⦜': 'vangrt',
					'⦝': 'angrtvbd',
					'⦤': 'ange',
					'⦥': 'range',
					'⦦': 'dwangle',
					'⦧': 'uwangle',
					'⦨': 'angmsdaa',
					'⦩': 'angmsdab',
					'⦪': 'angmsdac',
					'⦫': 'angmsdad',
					'⦬': 'angmsdae',
					'⦭': 'angmsdaf',
					'⦮': 'angmsdag',
					'⦯': 'angmsdah',
					'⦰': 'bemptyv',
					'⦱': 'demptyv',
					'⦲': 'cemptyv',
					'⦳': 'raemptyv',
					'⦴': 'laemptyv',
					'⦵': 'ohbar',
					'⦶': 'omid',
					'⦷': 'opar',
					'⦹': 'operp',
					'⦻': 'olcross',
					'⦼': 'odsold',
					'⦾': 'olcir',
					'⦿': 'ofcir',
					'⧀': 'olt',
					'⧁': 'ogt',
					'⧂': 'cirscir',
					'⧃': 'cirE',
					'⧄': 'solb',
					'⧅': 'bsolb',
					'⧉': 'boxbox',
					'⧍': 'trisb',
					'⧎': 'rtriltri',
					'⧏': 'LeftTriangleBar',
					'⧏̸': 'NotLeftTriangleBar',
					'⧐': 'RightTriangleBar',
					'⧐̸': 'NotRightTriangleBar',
					'⧜': 'iinfin',
					'⧝': 'infintie',
					'⧞': 'nvinfin',
					'⧣': 'eparsl',
					'⧤': 'smeparsl',
					'⧥': 'eqvparsl',
					'⧫': 'lozf',
					'⧴': 'RuleDelayed',
					'⧶': 'dsol',
					'⨀': 'xodot',
					'⨁': 'xoplus',
					'⨂': 'xotime',
					'⨄': 'xuplus',
					'⨆': 'xsqcup',
					'⨍': 'fpartint',
					'⨐': 'cirfnint',
					'⨑': 'awint',
					'⨒': 'rppolint',
					'⨓': 'scpolint',
					'⨔': 'npolint',
					'⨕': 'pointint',
					'⨖': 'quatint',
					'⨗': 'intlarhk',
					'⨢': 'pluscir',
					'⨣': 'plusacir',
					'⨤': 'simplus',
					'⨥': 'plusdu',
					'⨦': 'plussim',
					'⨧': 'plustwo',
					'⨩': 'mcomma',
					'⨪': 'minusdu',
					'⨭': 'loplus',
					'⨮': 'roplus',
					'⨯': 'Cross',
					'⨰': 'timesd',
					'⨱': 'timesbar',
					'⨳': 'smashp',
					'⨴': 'lotimes',
					'⨵': 'rotimes',
					'⨶': 'otimesas',
					'⨷': 'Otimes',
					'⨸': 'odiv',
					'⨹': 'triplus',
					'⨺': 'triminus',
					'⨻': 'tritime',
					'⨼': 'iprod',
					'⨿': 'amalg',
					'⩀': 'capdot',
					'⩂': 'ncup',
					'⩃': 'ncap',
					'⩄': 'capand',
					'⩅': 'cupor',
					'⩆': 'cupcap',
					'⩇': 'capcup',
					'⩈': 'cupbrcap',
					'⩉': 'capbrcup',
					'⩊': 'cupcup',
					'⩋': 'capcap',
					'⩌': 'ccups',
					'⩍': 'ccaps',
					'⩐': 'ccupssm',
					'⩓': 'And',
					'⩔': 'Or',
					'⩕': 'andand',
					'⩖': 'oror',
					'⩗': 'orslope',
					'⩘': 'andslope',
					'⩚': 'andv',
					'⩛': 'orv',
					'⩜': 'andd',
					'⩝': 'ord',
					'⩟': 'wedbar',
					'⩦': 'sdote',
					'⩪': 'simdot',
					'⩭': 'congdot',
					'⩭̸': 'ncongdot',
					'⩮': 'easter',
					'⩯': 'apacir',
					'⩰': 'apE',
					'⩰̸': 'napE',
					'⩱': 'eplus',
					'⩲': 'pluse',
					'⩳': 'Esim',
					'⩷': 'eDDot',
					'⩸': 'equivDD',
					'⩹': 'ltcir',
					'⩺': 'gtcir',
					'⩻': 'ltquest',
					'⩼': 'gtquest',
					'⩽': 'les',
					'⩽̸': 'nles',
					'⩾': 'ges',
					'⩾̸': 'nges',
					'⩿': 'lesdot',
					'⪀': 'gesdot',
					'⪁': 'lesdoto',
					'⪂': 'gesdoto',
					'⪃': 'lesdotor',
					'⪄': 'gesdotol',
					'⪅': 'lap',
					'⪆': 'gap',
					'⪇': 'lne',
					'⪈': 'gne',
					'⪉': 'lnap',
					'⪊': 'gnap',
					'⪋': 'lEg',
					'⪌': 'gEl',
					'⪍': 'lsime',
					'⪎': 'gsime',
					'⪏': 'lsimg',
					'⪐': 'gsiml',
					'⪑': 'lgE',
					'⪒': 'glE',
					'⪓': 'lesges',
					'⪔': 'gesles',
					'⪕': 'els',
					'⪖': 'egs',
					'⪗': 'elsdot',
					'⪘': 'egsdot',
					'⪙': 'el',
					'⪚': 'eg',
					'⪝': 'siml',
					'⪞': 'simg',
					'⪟': 'simlE',
					'⪠': 'simgE',
					'⪡': 'LessLess',
					'⪡̸': 'NotNestedLessLess',
					'⪢': 'GreaterGreater',
					'⪢̸': 'NotNestedGreaterGreater',
					'⪤': 'glj',
					'⪥': 'gla',
					'⪦': 'ltcc',
					'⪧': 'gtcc',
					'⪨': 'lescc',
					'⪩': 'gescc',
					'⪪': 'smt',
					'⪫': 'lat',
					'⪬': 'smte',
					'⪬︀': 'smtes',
					'⪭': 'late',
					'⪭︀': 'lates',
					'⪮': 'bumpE',
					'⪯': 'pre',
					'⪯̸': 'npre',
					'⪰': 'sce',
					'⪰̸': 'nsce',
					'⪳': 'prE',
					'⪴': 'scE',
					'⪵': 'prnE',
					'⪶': 'scnE',
					'⪷': 'prap',
					'⪸': 'scap',
					'⪹': 'prnap',
					'⪺': 'scnap',
					'⪻': 'Pr',
					'⪼': 'Sc',
					'⪽': 'subdot',
					'⪾': 'supdot',
					'⪿': 'subplus',
					'⫀': 'supplus',
					'⫁': 'submult',
					'⫂': 'supmult',
					'⫃': 'subedot',
					'⫄': 'supedot',
					'⫅': 'subE',
					'⫅̸': 'nsubE',
					'⫆': 'supE',
					'⫆̸': 'nsupE',
					'⫇': 'subsim',
					'⫈': 'supsim',
					'⫋︀': 'vsubnE',
					'⫋': 'subnE',
					'⫌︀': 'vsupnE',
					'⫌': 'supnE',
					'⫏': 'csub',
					'⫐': 'csup',
					'⫑': 'csube',
					'⫒': 'csupe',
					'⫓': 'subsup',
					'⫔': 'supsub',
					'⫕': 'subsub',
					'⫖': 'supsup',
					'⫗': 'suphsub',
					'⫘': 'supdsub',
					'⫙': 'forkv',
					'⫚': 'topfork',
					'⫛': 'mlcp',
					'⫤': 'Dashv',
					'⫦': 'Vdashl',
					'⫧': 'Barv',
					'⫨': 'vBar',
					'⫩': 'vBarv',
					'⫫': 'Vbar',
					'⫬': 'Not',
					'⫭': 'bNot',
					'⫮': 'rnmid',
					'⫯': 'cirmid',
					'⫰': 'midcir',
					'⫱': 'topcir',
					'⫲': 'nhpar',
					'⫳': 'parsim',
					'⫽': 'parsl',
					'⫽⃥': 'nparsl',
					'♭': 'flat',
					'♮': 'natur',
					'♯': 'sharp',
					'¤': 'curren',
					'¢': 'cent',
					$: 'dollar',
					'£': 'pound',
					'¥': 'yen',
					'€': 'euro',
					'¹': 'sup1',
					'½': 'half',
					'⅓': 'frac13',
					'¼': 'frac14',
					'⅕': 'frac15',
					'⅙': 'frac16',
					'⅛': 'frac18',
					'²': 'sup2',
					'⅔': 'frac23',
					'⅖': 'frac25',
					'³': 'sup3',
					'¾': 'frac34',
					'⅗': 'frac35',
					'⅜': 'frac38',
					'⅘': 'frac45',
					'⅚': 'frac56',
					'⅝': 'frac58',
					'⅞': 'frac78',
					'𝒶': 'ascr',
					'𝕒': 'aopf',
					'𝔞': 'afr',
					'𝔸': 'Aopf',
					'𝔄': 'Afr',
					'𝒜': 'Ascr',
					ª: 'ordf',
					á: 'aacute',
					Á: 'Aacute',
					à: 'agrave',
					À: 'Agrave',
					ă: 'abreve',
					Ă: 'Abreve',
					â: 'acirc',
					Â: 'Acirc',
					å: 'aring',
					Å: 'angst',
					ä: 'auml',
					Ä: 'Auml',
					ã: 'atilde',
					Ã: 'Atilde',
					ą: 'aogon',
					Ą: 'Aogon',
					ā: 'amacr',
					Ā: 'Amacr',
					æ: 'aelig',
					Æ: 'AElig',
					'𝒷': 'bscr',
					'𝕓': 'bopf',
					'𝔟': 'bfr',
					'𝔹': 'Bopf',
					ℬ: 'Bscr',
					'𝔅': 'Bfr',
					'𝔠': 'cfr',
					'𝒸': 'cscr',
					'𝕔': 'copf',
					ℭ: 'Cfr',
					'𝒞': 'Cscr',
					ℂ: 'Copf',
					ć: 'cacute',
					Ć: 'Cacute',
					ĉ: 'ccirc',
					Ĉ: 'Ccirc',
					č: 'ccaron',
					Č: 'Ccaron',
					ċ: 'cdot',
					Ċ: 'Cdot',
					ç: 'ccedil',
					Ç: 'Ccedil',
					'℅': 'incare',
					'𝔡': 'dfr',
					ⅆ: 'dd',
					'𝕕': 'dopf',
					'𝒹': 'dscr',
					'𝒟': 'Dscr',
					'𝔇': 'Dfr',
					ⅅ: 'DD',
					'𝔻': 'Dopf',
					ď: 'dcaron',
					Ď: 'Dcaron',
					đ: 'dstrok',
					Đ: 'Dstrok',
					ð: 'eth',
					Ð: 'ETH',
					ⅇ: 'ee',
					ℯ: 'escr',
					'𝔢': 'efr',
					'𝕖': 'eopf',
					ℰ: 'Escr',
					'𝔈': 'Efr',
					'𝔼': 'Eopf',
					é: 'eacute',
					É: 'Eacute',
					è: 'egrave',
					È: 'Egrave',
					ê: 'ecirc',
					Ê: 'Ecirc',
					ě: 'ecaron',
					Ě: 'Ecaron',
					ë: 'euml',
					Ë: 'Euml',
					ė: 'edot',
					Ė: 'Edot',
					ę: 'eogon',
					Ę: 'Eogon',
					ē: 'emacr',
					Ē: 'Emacr',
					'𝔣': 'ffr',
					'𝕗': 'fopf',
					'𝒻': 'fscr',
					'𝔉': 'Ffr',
					'𝔽': 'Fopf',
					ℱ: 'Fscr',
					ﬀ: 'fflig',
					ﬃ: 'ffilig',
					ﬄ: 'ffllig',
					ﬁ: 'filig',
					fj: 'fjlig',
					ﬂ: 'fllig',
					ƒ: 'fnof',
					ℊ: 'gscr',
					'𝕘': 'gopf',
					'𝔤': 'gfr',
					'𝒢': 'Gscr',
					'𝔾': 'Gopf',
					'𝔊': 'Gfr',
					ǵ: 'gacute',
					ğ: 'gbreve',
					Ğ: 'Gbreve',
					ĝ: 'gcirc',
					Ĝ: 'Gcirc',
					ġ: 'gdot',
					Ġ: 'Gdot',
					Ģ: 'Gcedil',
					'𝔥': 'hfr',
					ℎ: 'planckh',
					'𝒽': 'hscr',
					'𝕙': 'hopf',
					ℋ: 'Hscr',
					ℌ: 'Hfr',
					ℍ: 'Hopf',
					ĥ: 'hcirc',
					Ĥ: 'Hcirc',
					ℏ: 'hbar',
					ħ: 'hstrok',
					Ħ: 'Hstrok',
					'𝕚': 'iopf',
					'𝔦': 'ifr',
					'𝒾': 'iscr',
					ⅈ: 'ii',
					'𝕀': 'Iopf',
					ℐ: 'Iscr',
					ℑ: 'Im',
					í: 'iacute',
					Í: 'Iacute',
					ì: 'igrave',
					Ì: 'Igrave',
					î: 'icirc',
					Î: 'Icirc',
					ï: 'iuml',
					Ï: 'Iuml',
					ĩ: 'itilde',
					Ĩ: 'Itilde',
					İ: 'Idot',
					į: 'iogon',
					Į: 'Iogon',
					ī: 'imacr',
					Ī: 'Imacr',
					ĳ: 'ijlig',
					Ĳ: 'IJlig',
					ı: 'imath',
					'𝒿': 'jscr',
					'𝕛': 'jopf',
					'𝔧': 'jfr',
					'𝒥': 'Jscr',
					'𝔍': 'Jfr',
					'𝕁': 'Jopf',
					ĵ: 'jcirc',
					Ĵ: 'Jcirc',
					ȷ: 'jmath',
					'𝕜': 'kopf',
					'𝓀': 'kscr',
					'𝔨': 'kfr',
					'𝒦': 'Kscr',
					'𝕂': 'Kopf',
					'𝔎': 'Kfr',
					ķ: 'kcedil',
					Ķ: 'Kcedil',
					'𝔩': 'lfr',
					'𝓁': 'lscr',
					ℓ: 'ell',
					'𝕝': 'lopf',
					ℒ: 'Lscr',
					'𝔏': 'Lfr',
					'𝕃': 'Lopf',
					ĺ: 'lacute',
					Ĺ: 'Lacute',
					ľ: 'lcaron',
					Ľ: 'Lcaron',
					ļ: 'lcedil',
					Ļ: 'Lcedil',
					ł: 'lstrok',
					Ł: 'Lstrok',
					ŀ: 'lmidot',
					Ŀ: 'Lmidot',
					'𝔪': 'mfr',
					'𝕞': 'mopf',
					'𝓂': 'mscr',
					'𝔐': 'Mfr',
					'𝕄': 'Mopf',
					ℳ: 'Mscr',
					'𝔫': 'nfr',
					'𝕟': 'nopf',
					'𝓃': 'nscr',
					ℕ: 'Nopf',
					'𝒩': 'Nscr',
					'𝔑': 'Nfr',
					ń: 'nacute',
					Ń: 'Nacute',
					ň: 'ncaron',
					Ň: 'Ncaron',
					ñ: 'ntilde',
					Ñ: 'Ntilde',
					ņ: 'ncedil',
					Ņ: 'Ncedil',
					'№': 'numero',
					ŋ: 'eng',
					Ŋ: 'ENG',
					'𝕠': 'oopf',
					'𝔬': 'ofr',
					ℴ: 'oscr',
					'𝒪': 'Oscr',
					'𝔒': 'Ofr',
					'𝕆': 'Oopf',
					º: 'ordm',
					ó: 'oacute',
					Ó: 'Oacute',
					ò: 'ograve',
					Ò: 'Ograve',
					ô: 'ocirc',
					Ô: 'Ocirc',
					ö: 'ouml',
					Ö: 'Ouml',
					ő: 'odblac',
					Ő: 'Odblac',
					õ: 'otilde',
					Õ: 'Otilde',
					ø: 'oslash',
					Ø: 'Oslash',
					ō: 'omacr',
					Ō: 'Omacr',
					œ: 'oelig',
					Œ: 'OElig',
					'𝔭': 'pfr',
					'𝓅': 'pscr',
					'𝕡': 'popf',
					ℙ: 'Popf',
					'𝔓': 'Pfr',
					'𝒫': 'Pscr',
					'𝕢': 'qopf',
					'𝔮': 'qfr',
					'𝓆': 'qscr',
					'𝒬': 'Qscr',
					'𝔔': 'Qfr',
					ℚ: 'Qopf',
					ĸ: 'kgreen',
					'𝔯': 'rfr',
					'𝕣': 'ropf',
					'𝓇': 'rscr',
					ℛ: 'Rscr',
					ℜ: 'Re',
					ℝ: 'Ropf',
					ŕ: 'racute',
					Ŕ: 'Racute',
					ř: 'rcaron',
					Ř: 'Rcaron',
					ŗ: 'rcedil',
					Ŗ: 'Rcedil',
					'𝕤': 'sopf',
					'𝓈': 'sscr',
					'𝔰': 'sfr',
					'𝕊': 'Sopf',
					'𝔖': 'Sfr',
					'𝒮': 'Sscr',
					'Ⓢ': 'oS',
					ś: 'sacute',
					Ś: 'Sacute',
					ŝ: 'scirc',
					Ŝ: 'Scirc',
					š: 'scaron',
					Š: 'Scaron',
					ş: 'scedil',
					Ş: 'Scedil',
					ß: 'szlig',
					'𝔱': 'tfr',
					'𝓉': 'tscr',
					'𝕥': 'topf',
					'𝒯': 'Tscr',
					'𝔗': 'Tfr',
					'𝕋': 'Topf',
					ť: 'tcaron',
					Ť: 'Tcaron',
					ţ: 'tcedil',
					Ţ: 'Tcedil',
					'™': 'trade',
					ŧ: 'tstrok',
					Ŧ: 'Tstrok',
					'𝓊': 'uscr',
					'𝕦': 'uopf',
					'𝔲': 'ufr',
					'𝕌': 'Uopf',
					'𝔘': 'Ufr',
					'𝒰': 'Uscr',
					ú: 'uacute',
					Ú: 'Uacute',
					ù: 'ugrave',
					Ù: 'Ugrave',
					ŭ: 'ubreve',
					Ŭ: 'Ubreve',
					û: 'ucirc',
					Û: 'Ucirc',
					ů: 'uring',
					Ů: 'Uring',
					ü: 'uuml',
					Ü: 'Uuml',
					ű: 'udblac',
					Ű: 'Udblac',
					ũ: 'utilde',
					Ũ: 'Utilde',
					ų: 'uogon',
					Ų: 'Uogon',
					ū: 'umacr',
					Ū: 'Umacr',
					'𝔳': 'vfr',
					'𝕧': 'vopf',
					'𝓋': 'vscr',
					'𝔙': 'Vfr',
					'𝕍': 'Vopf',
					'𝒱': 'Vscr',
					'𝕨': 'wopf',
					'𝓌': 'wscr',
					'𝔴': 'wfr',
					'𝒲': 'Wscr',
					'𝕎': 'Wopf',
					'𝔚': 'Wfr',
					ŵ: 'wcirc',
					Ŵ: 'Wcirc',
					'𝔵': 'xfr',
					'𝓍': 'xscr',
					'𝕩': 'xopf',
					'𝕏': 'Xopf',
					'𝔛': 'Xfr',
					'𝒳': 'Xscr',
					'𝔶': 'yfr',
					'𝓎': 'yscr',
					'𝕪': 'yopf',
					'𝒴': 'Yscr',
					'𝔜': 'Yfr',
					'𝕐': 'Yopf',
					ý: 'yacute',
					Ý: 'Yacute',
					ŷ: 'ycirc',
					Ŷ: 'Ycirc',
					ÿ: 'yuml',
					Ÿ: 'Yuml',
					'𝓏': 'zscr',
					'𝔷': 'zfr',
					'𝕫': 'zopf',
					ℨ: 'Zfr',
					ℤ: 'Zopf',
					'𝒵': 'Zscr',
					ź: 'zacute',
					Ź: 'Zacute',
					ž: 'zcaron',
					Ž: 'Zcaron',
					ż: 'zdot',
					Ż: 'Zdot',
					Ƶ: 'imped',
					þ: 'thorn',
					Þ: 'THORN',
					ŉ: 'napos',
					α: 'alpha',
					Α: 'Alpha',
					β: 'beta',
					Β: 'Beta',
					γ: 'gamma',
					Γ: 'Gamma',
					δ: 'delta',
					Δ: 'Delta',
					ε: 'epsi',
					ϵ: 'epsiv',
					Ε: 'Epsilon',
					ϝ: 'gammad',
					Ϝ: 'Gammad',
					ζ: 'zeta',
					Ζ: 'Zeta',
					η: 'eta',
					Η: 'Eta',
					θ: 'theta',
					ϑ: 'thetav',
					Θ: 'Theta',
					ι: 'iota',
					Ι: 'Iota',
					κ: 'kappa',
					ϰ: 'kappav',
					Κ: 'Kappa',
					λ: 'lambda',
					Λ: 'Lambda',
					μ: 'mu',
					µ: 'micro',
					Μ: 'Mu',
					ν: 'nu',
					Ν: 'Nu',
					ξ: 'xi',
					Ξ: 'Xi',
					ο: 'omicron',
					Ο: 'Omicron',
					π: 'pi',
					ϖ: 'piv',
					Π: 'Pi',
					ρ: 'rho',
					ϱ: 'rhov',
					Ρ: 'Rho',
					σ: 'sigma',
					Σ: 'Sigma',
					ς: 'sigmaf',
					τ: 'tau',
					Τ: 'Tau',
					υ: 'upsi',
					Υ: 'Upsilon',
					ϒ: 'Upsi',
					φ: 'phi',
					ϕ: 'phiv',
					Φ: 'Phi',
					χ: 'chi',
					Χ: 'Chi',
					ψ: 'psi',
					Ψ: 'Psi',
					ω: 'omega',
					Ω: 'ohm',
					а: 'acy',
					А: 'Acy',
					б: 'bcy',
					Б: 'Bcy',
					в: 'vcy',
					В: 'Vcy',
					г: 'gcy',
					Г: 'Gcy',
					ѓ: 'gjcy',
					Ѓ: 'GJcy',
					д: 'dcy',
					Д: 'Dcy',
					ђ: 'djcy',
					Ђ: 'DJcy',
					е: 'iecy',
					Е: 'IEcy',
					ё: 'iocy',
					Ё: 'IOcy',
					є: 'jukcy',
					Є: 'Jukcy',
					ж: 'zhcy',
					Ж: 'ZHcy',
					з: 'zcy',
					З: 'Zcy',
					ѕ: 'dscy',
					Ѕ: 'DScy',
					и: 'icy',
					И: 'Icy',
					і: 'iukcy',
					І: 'Iukcy',
					ї: 'yicy',
					Ї: 'YIcy',
					й: 'jcy',
					Й: 'Jcy',
					ј: 'jsercy',
					Ј: 'Jsercy',
					к: 'kcy',
					К: 'Kcy',
					ќ: 'kjcy',
					Ќ: 'KJcy',
					л: 'lcy',
					Л: 'Lcy',
					љ: 'ljcy',
					Љ: 'LJcy',
					м: 'mcy',
					М: 'Mcy',
					н: 'ncy',
					Н: 'Ncy',
					њ: 'njcy',
					Њ: 'NJcy',
					о: 'ocy',
					О: 'Ocy',
					п: 'pcy',
					П: 'Pcy',
					р: 'rcy',
					Р: 'Rcy',
					с: 'scy',
					С: 'Scy',
					т: 'tcy',
					Т: 'Tcy',
					ћ: 'tshcy',
					Ћ: 'TSHcy',
					у: 'ucy',
					У: 'Ucy',
					ў: 'ubrcy',
					Ў: 'Ubrcy',
					ф: 'fcy',
					Ф: 'Fcy',
					х: 'khcy',
					Х: 'KHcy',
					ц: 'tscy',
					Ц: 'TScy',
					ч: 'chcy',
					Ч: 'CHcy',
					џ: 'dzcy',
					Џ: 'DZcy',
					ш: 'shcy',
					Ш: 'SHcy',
					щ: 'shchcy',
					Щ: 'SHCHcy',
					ъ: 'hardcy',
					Ъ: 'HARDcy',
					ы: 'ycy',
					Ы: 'Ycy',
					ь: 'softcy',
					Ь: 'SOFTcy',
					э: 'ecy',
					Э: 'Ecy',
					ю: 'yucy',
					Ю: 'YUcy',
					я: 'yacy',
					Я: 'YAcy',
					ℵ: 'aleph',
					ℶ: 'beth',
					ℷ: 'gimel',
					ℸ: 'daleth',
				},
				p = /["&'<>`]/g,
				d = {
					'"': '&quot;',
					'&': '&amp;',
					"'": '&#x27;',
					'<': '&lt;',
					'>': '&gt;',
					'`': '&#x60;',
				},
				f = /&#(?:[xX][^a-fA-F0-9]|[^0-9xX])/,
				h =
					/[\0-\x08\x0B\x0E-\x1F\x7F-\x9F\uFDD0-\uFDEF\uFFFE\uFFFF]|[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,
				m =
					/&(CounterClockwiseContourIntegral|DoubleLongLeftRightArrow|ClockwiseContourIntegral|NotNestedGreaterGreater|NotSquareSupersetEqual|DiacriticalDoubleAcute|NotRightTriangleEqual|NotSucceedsSlantEqual|NotPrecedesSlantEqual|CloseCurlyDoubleQuote|NegativeVeryThinSpace|DoubleContourIntegral|FilledVerySmallSquare|CapitalDifferentialD|OpenCurlyDoubleQuote|EmptyVerySmallSquare|NestedGreaterGreater|DoubleLongRightArrow|NotLeftTriangleEqual|NotGreaterSlantEqual|ReverseUpEquilibrium|DoubleLeftRightArrow|NotSquareSubsetEqual|NotDoubleVerticalBar|RightArrowLeftArrow|NotGreaterFullEqual|NotRightTriangleBar|SquareSupersetEqual|DownLeftRightVector|DoubleLongLeftArrow|leftrightsquigarrow|LeftArrowRightArrow|NegativeMediumSpace|blacktriangleright|RightDownVectorBar|PrecedesSlantEqual|RightDoubleBracket|SucceedsSlantEqual|NotLeftTriangleBar|RightTriangleEqual|SquareIntersection|RightDownTeeVector|ReverseEquilibrium|NegativeThickSpace|longleftrightarrow|Longleftrightarrow|LongLeftRightArrow|DownRightTeeVector|DownRightVectorBar|GreaterSlantEqual|SquareSubsetEqual|LeftDownVectorBar|LeftDoubleBracket|VerticalSeparator|rightleftharpoons|NotGreaterGreater|NotSquareSuperset|blacktriangleleft|blacktriangledown|NegativeThinSpace|LeftDownTeeVector|NotLessSlantEqual|leftrightharpoons|DoubleUpDownArrow|DoubleVerticalBar|LeftTriangleEqual|FilledSmallSquare|twoheadrightarrow|NotNestedLessLess|DownLeftTeeVector|DownLeftVectorBar|RightAngleBracket|NotTildeFullEqual|NotReverseElement|RightUpDownVector|DiacriticalTilde|NotSucceedsTilde|circlearrowright|NotPrecedesEqual|rightharpoondown|DoubleRightArrow|NotSucceedsEqual|NonBreakingSpace|NotRightTriangle|LessEqualGreater|RightUpTeeVector|LeftAngleBracket|GreaterFullEqual|DownArrowUpArrow|RightUpVectorBar|twoheadleftarrow|GreaterEqualLess|downharpoonright|RightTriangleBar|ntrianglerighteq|NotSupersetEqual|LeftUpDownVector|DiacriticalAcute|rightrightarrows|vartriangleright|UpArrowDownArrow|DiacriticalGrave|UnderParenthesis|EmptySmallSquare|LeftUpVectorBar|leftrightarrows|DownRightVector|downharpoonleft|trianglerighteq|ShortRightArrow|OverParenthesis|DoubleLeftArrow|DoubleDownArrow|NotSquareSubset|bigtriangledown|ntrianglelefteq|UpperRightArrow|curvearrowright|vartriangleleft|NotLeftTriangle|nleftrightarrow|LowerRightArrow|NotHumpDownHump|NotGreaterTilde|rightthreetimes|LeftUpTeeVector|NotGreaterEqual|straightepsilon|LeftTriangleBar|rightsquigarrow|ContourIntegral|rightleftarrows|CloseCurlyQuote|RightDownVector|LeftRightVector|nLeftrightarrow|leftharpoondown|circlearrowleft|SquareSuperset|OpenCurlyQuote|hookrightarrow|HorizontalLine|DiacriticalDot|NotLessGreater|ntriangleright|DoubleRightTee|InvisibleComma|InvisibleTimes|LowerLeftArrow|DownLeftVector|NotSubsetEqual|curvearrowleft|trianglelefteq|NotVerticalBar|TildeFullEqual|downdownarrows|NotGreaterLess|RightTeeVector|ZeroWidthSpace|looparrowright|LongRightArrow|doublebarwedge|ShortLeftArrow|ShortDownArrow|RightVectorBar|GreaterGreater|ReverseElement|rightharpoonup|LessSlantEqual|leftthreetimes|upharpoonright|rightarrowtail|LeftDownVector|Longrightarrow|NestedLessLess|UpperLeftArrow|nshortparallel|leftleftarrows|leftrightarrow|Leftrightarrow|LeftRightArrow|longrightarrow|upharpoonleft|RightArrowBar|ApplyFunction|LeftTeeVector|leftarrowtail|NotEqualTilde|varsubsetneqq|varsupsetneqq|RightTeeArrow|SucceedsEqual|SucceedsTilde|LeftVectorBar|SupersetEqual|hookleftarrow|DifferentialD|VerticalTilde|VeryThinSpace|blacktriangle|bigtriangleup|LessFullEqual|divideontimes|leftharpoonup|UpEquilibrium|ntriangleleft|RightTriangle|measuredangle|shortparallel|longleftarrow|Longleftarrow|LongLeftArrow|DoubleLeftTee|Poincareplane|PrecedesEqual|triangleright|DoubleUpArrow|RightUpVector|fallingdotseq|looparrowleft|PrecedesTilde|NotTildeEqual|NotTildeTilde|smallsetminus|Proportional|triangleleft|triangledown|UnderBracket|NotHumpEqual|exponentiale|ExponentialE|NotLessTilde|HilbertSpace|RightCeiling|blacklozenge|varsupsetneq|HumpDownHump|GreaterEqual|VerticalLine|LeftTeeArrow|NotLessEqual|DownTeeArrow|LeftTriangle|varsubsetneq|Intersection|NotCongruent|DownArrowBar|LeftUpVector|LeftArrowBar|risingdotseq|GreaterTilde|RoundImplies|SquareSubset|ShortUpArrow|NotSuperset|quaternions|precnapprox|backepsilon|preccurlyeq|OverBracket|blacksquare|MediumSpace|VerticalBar|circledcirc|circleddash|CircleMinus|CircleTimes|LessGreater|curlyeqprec|curlyeqsucc|diamondsuit|UpDownArrow|Updownarrow|RuleDelayed|Rrightarrow|updownarrow|RightVector|nRightarrow|nrightarrow|eqslantless|LeftCeiling|Equilibrium|SmallCircle|expectation|NotSucceeds|thickapprox|GreaterLess|SquareUnion|NotPrecedes|NotLessLess|straightphi|succnapprox|succcurlyeq|SubsetEqual|sqsupseteq|Proportion|Laplacetrf|ImaginaryI|supsetneqq|NotGreater|gtreqqless|NotElement|ThickSpace|TildeEqual|TildeTilde|Fouriertrf|rmoustache|EqualTilde|eqslantgtr|UnderBrace|LeftVector|UpArrowBar|nLeftarrow|nsubseteqq|subsetneqq|nsupseteqq|nleftarrow|succapprox|lessapprox|UpTeeArrow|upuparrows|curlywedge|lesseqqgtr|varepsilon|varnothing|RightFloor|complement|CirclePlus|sqsubseteq|Lleftarrow|circledast|RightArrow|Rightarrow|rightarrow|lmoustache|Bernoullis|precapprox|mapstoleft|mapstodown|longmapsto|dotsquare|downarrow|DoubleDot|nsubseteq|supsetneq|leftarrow|nsupseteq|subsetneq|ThinSpace|ngeqslant|subseteqq|HumpEqual|NotSubset|triangleq|NotCupCap|lesseqgtr|heartsuit|TripleDot|Leftarrow|Coproduct|Congruent|varpropto|complexes|gvertneqq|LeftArrow|LessTilde|supseteqq|MinusPlus|CircleDot|nleqslant|NotExists|gtreqless|nparallel|UnionPlus|LeftFloor|checkmark|CenterDot|centerdot|Mellintrf|gtrapprox|bigotimes|OverBrace|spadesuit|therefore|pitchfork|rationals|PlusMinus|Backslash|Therefore|DownBreve|backsimeq|backprime|DownArrow|nshortmid|Downarrow|lvertneqq|eqvparsl|imagline|imagpart|infintie|integers|Integral|intercal|LessLess|Uarrocir|intlarhk|sqsupset|angmsdaf|sqsubset|llcorner|vartheta|cupbrcap|lnapprox|Superset|SuchThat|succnsim|succneqq|angmsdag|biguplus|curlyvee|trpezium|Succeeds|NotTilde|bigwedge|angmsdah|angrtvbd|triminus|cwconint|fpartint|lrcorner|smeparsl|subseteq|urcorner|lurdshar|laemptyv|DDotrahd|approxeq|ldrushar|awconint|mapstoup|backcong|shortmid|triangle|geqslant|gesdotol|timesbar|circledR|circledS|setminus|multimap|naturals|scpolint|ncongdot|RightTee|boxminus|gnapprox|boxtimes|andslope|thicksim|angmsdaa|varsigma|cirfnint|rtriltri|angmsdab|rppolint|angmsdac|barwedge|drbkarow|clubsuit|thetasym|bsolhsub|capbrcup|dzigrarr|doteqdot|DotEqual|dotminus|UnderBar|NotEqual|realpart|otimesas|ulcorner|hksearow|hkswarow|parallel|PartialD|elinters|emptyset|plusacir|bbrktbrk|angmsdad|pointint|bigoplus|angmsdae|Precedes|bigsqcup|varkappa|notindot|supseteq|precneqq|precnsim|profalar|profline|profsurf|leqslant|lesdotor|raemptyv|subplus|notnivb|notnivc|subrarr|zigrarr|vzigzag|submult|subedot|Element|between|cirscir|larrbfs|larrsim|lotimes|lbrksld|lbrkslu|lozenge|ldrdhar|dbkarow|bigcirc|epsilon|simrarr|simplus|ltquest|Epsilon|luruhar|gtquest|maltese|npolint|eqcolon|npreceq|bigodot|ddagger|gtrless|bnequiv|harrcir|ddotseq|equivDD|backsim|demptyv|nsqsube|nsqsupe|Upsilon|nsubset|upsilon|minusdu|nsucceq|swarrow|nsupset|coloneq|searrow|boxplus|napprox|natural|asympeq|alefsym|congdot|nearrow|bigstar|diamond|supplus|tritime|LeftTee|nvinfin|triplus|NewLine|nvltrie|nvrtrie|nwarrow|nexists|Diamond|ruluhar|Implies|supmult|angzarr|suplarr|suphsub|questeq|because|digamma|Because|olcross|bemptyv|omicron|Omicron|rotimes|NoBreak|intprod|angrtvb|orderof|uwangle|suphsol|lesdoto|orslope|DownTee|realine|cudarrl|rdldhar|OverBar|supedot|lessdot|supdsub|topfork|succsim|rbrkslu|rbrksld|pertenk|cudarrr|isindot|planckh|lessgtr|pluscir|gesdoto|plussim|plustwo|lesssim|cularrp|rarrsim|Cayleys|notinva|notinvb|notinvc|UpArrow|Uparrow|uparrow|NotLess|dwangle|precsim|Product|curarrm|Cconint|dotplus|rarrbfs|ccupssm|Cedilla|cemptyv|notniva|quatint|frac35|frac38|frac45|frac56|frac58|frac78|tridot|xoplus|gacute|gammad|Gammad|lfisht|lfloor|bigcup|sqsupe|gbreve|Gbreve|lharul|sqsube|sqcups|Gcedil|apacir|llhard|lmidot|Lmidot|lmoust|andand|sqcaps|approx|Abreve|spades|circeq|tprime|divide|topcir|Assign|topbot|gesdot|divonx|xuplus|timesd|gesles|atilde|solbar|SOFTcy|loplus|timesb|lowast|lowbar|dlcorn|dlcrop|softcy|dollar|lparlt|thksim|lrhard|Atilde|lsaquo|smashp|bigvee|thinsp|wreath|bkarow|lsquor|lstrok|Lstrok|lthree|ltimes|ltlarr|DotDot|simdot|ltrPar|weierp|xsqcup|angmsd|sigmav|sigmaf|zeetrf|Zcaron|zcaron|mapsto|vsupne|thetav|cirmid|marker|mcomma|Zacute|vsubnE|there4|gtlPar|vsubne|bottom|gtrarr|SHCHcy|shchcy|midast|midcir|middot|minusb|minusd|gtrdot|bowtie|sfrown|mnplus|models|colone|seswar|Colone|mstpos|searhk|gtrsim|nacute|Nacute|boxbox|telrec|hairsp|Tcedil|nbumpe|scnsim|ncaron|Ncaron|ncedil|Ncedil|hamilt|Scedil|nearhk|hardcy|HARDcy|tcedil|Tcaron|commat|nequiv|nesear|tcaron|target|hearts|nexist|varrho|scedil|Scaron|scaron|hellip|Sacute|sacute|hercon|swnwar|compfn|rtimes|rthree|rsquor|rsaquo|zacute|wedgeq|homtht|barvee|barwed|Barwed|rpargt|horbar|conint|swarhk|roplus|nltrie|hslash|hstrok|Hstrok|rmoust|Conint|bprime|hybull|hyphen|iacute|Iacute|supsup|supsub|supsim|varphi|coprod|brvbar|agrave|Supset|supset|igrave|Igrave|notinE|Agrave|iiiint|iinfin|copysr|wedbar|Verbar|vangrt|becaus|incare|verbar|inodot|bullet|drcorn|intcal|drcrop|cularr|vellip|Utilde|bumpeq|cupcap|dstrok|Dstrok|CupCap|cupcup|cupdot|eacute|Eacute|supdot|iquest|easter|ecaron|Ecaron|ecolon|isinsv|utilde|itilde|Itilde|curarr|succeq|Bumpeq|cacute|ulcrop|nparsl|Cacute|nprcue|egrave|Egrave|nrarrc|nrarrw|subsup|subsub|nrtrie|jsercy|nsccue|Jsercy|kappav|kcedil|Kcedil|subsim|ulcorn|nsimeq|egsdot|veebar|kgreen|capand|elsdot|Subset|subset|curren|aacute|lacute|Lacute|emptyv|ntilde|Ntilde|lagran|lambda|Lambda|capcap|Ugrave|langle|subdot|emsp13|numero|emsp14|nvdash|nvDash|nVdash|nVDash|ugrave|ufisht|nvHarr|larrfs|nvlArr|larrhk|larrlp|larrpl|nvrArr|Udblac|nwarhk|larrtl|nwnear|oacute|Oacute|latail|lAtail|sstarf|lbrace|odblac|Odblac|lbrack|udblac|odsold|eparsl|lcaron|Lcaron|ograve|Ograve|lcedil|Lcedil|Aacute|ssmile|ssetmn|squarf|ldquor|capcup|ominus|cylcty|rharul|eqcirc|dagger|rfloor|rfisht|Dagger|daleth|equals|origof|capdot|equest|dcaron|Dcaron|rdquor|oslash|Oslash|otilde|Otilde|otimes|Otimes|urcrop|Ubreve|ubreve|Yacute|Uacute|uacute|Rcedil|rcedil|urcorn|parsim|Rcaron|Vdashl|rcaron|Tstrok|percnt|period|permil|Exists|yacute|rbrack|rbrace|phmmat|ccaron|Ccaron|planck|ccedil|plankv|tstrok|female|plusdo|plusdu|ffilig|plusmn|ffllig|Ccedil|rAtail|dfisht|bernou|ratail|Rarrtl|rarrtl|angsph|rarrpl|rarrlp|rarrhk|xwedge|xotime|forall|ForAll|Vvdash|vsupnE|preceq|bigcap|frac12|frac13|frac14|primes|rarrfs|prnsim|frac15|Square|frac16|square|lesdot|frac18|frac23|propto|prurel|rarrap|rangle|puncsp|frac25|Racute|qprime|racute|lesges|frac34|abreve|AElig|eqsim|utdot|setmn|urtri|Equal|Uring|seArr|uring|searr|dashv|Dashv|mumap|nabla|iogon|Iogon|sdote|sdotb|scsim|napid|napos|equiv|natur|Acirc|dblac|erarr|nbump|iprod|erDot|ucirc|awint|esdot|angrt|ncong|isinE|scnap|Scirc|scirc|ndash|isins|Ubrcy|nearr|neArr|isinv|nedot|ubrcy|acute|Ycirc|iukcy|Iukcy|xutri|nesim|caret|jcirc|Jcirc|caron|twixt|ddarr|sccue|exist|jmath|sbquo|ngeqq|angst|ccaps|lceil|ngsim|UpTee|delta|Delta|rtrif|nharr|nhArr|nhpar|rtrie|jukcy|Jukcy|kappa|rsquo|Kappa|nlarr|nlArr|TSHcy|rrarr|aogon|Aogon|fflig|xrarr|tshcy|ccirc|nleqq|filig|upsih|nless|dharl|nlsim|fjlig|ropar|nltri|dharr|robrk|roarr|fllig|fltns|roang|rnmid|subnE|subne|lAarr|trisb|Ccirc|acirc|ccups|blank|VDash|forkv|Vdash|langd|cedil|blk12|blk14|laquo|strns|diams|notin|vDash|larrb|blk34|block|disin|uplus|vdash|vBarv|aelig|starf|Wedge|check|xrArr|lates|lbarr|lBarr|notni|lbbrk|bcong|frasl|lbrke|frown|vrtri|vprop|vnsup|gamma|Gamma|wedge|xodot|bdquo|srarr|doteq|ldquo|boxdl|boxdL|gcirc|Gcirc|boxDl|boxDL|boxdr|boxdR|boxDr|TRADE|trade|rlhar|boxDR|vnsub|npart|vltri|rlarr|boxhd|boxhD|nprec|gescc|nrarr|nrArr|boxHd|boxHD|boxhu|boxhU|nrtri|boxHu|clubs|boxHU|times|colon|Colon|gimel|xlArr|Tilde|nsime|tilde|nsmid|nspar|THORN|thorn|xlarr|nsube|nsubE|thkap|xhArr|comma|nsucc|boxul|boxuL|nsupe|nsupE|gneqq|gnsim|boxUl|boxUL|grave|boxur|boxuR|boxUr|boxUR|lescc|angle|bepsi|boxvh|varpi|boxvH|numsp|Theta|gsime|gsiml|theta|boxVh|boxVH|boxvl|gtcir|gtdot|boxvL|boxVl|boxVL|crarr|cross|Cross|nvsim|boxvr|nwarr|nwArr|sqsup|dtdot|Uogon|lhard|lharu|dtrif|ocirc|Ocirc|lhblk|duarr|odash|sqsub|Hacek|sqcup|llarr|duhar|oelig|OElig|ofcir|boxvR|uogon|lltri|boxVr|csube|uuarr|ohbar|csupe|ctdot|olarr|olcir|harrw|oline|sqcap|omacr|Omacr|omega|Omega|boxVR|aleph|lneqq|lnsim|loang|loarr|rharu|lobrk|hcirc|operp|oplus|rhard|Hcirc|orarr|Union|order|ecirc|Ecirc|cuepr|szlig|cuesc|breve|reals|eDDot|Breve|hoarr|lopar|utrif|rdquo|Umacr|umacr|efDot|swArr|ultri|alpha|rceil|ovbar|swarr|Wcirc|wcirc|smtes|smile|bsemi|lrarr|aring|parsl|lrhar|bsime|uhblk|lrtri|cupor|Aring|uharr|uharl|slarr|rbrke|bsolb|lsime|rbbrk|RBarr|lsimg|phone|rBarr|rbarr|icirc|lsquo|Icirc|emacr|Emacr|ratio|simne|plusb|simlE|simgE|simeq|pluse|ltcir|ltdot|empty|xharr|xdtri|iexcl|Alpha|ltrie|rarrw|pound|ltrif|xcirc|bumpe|prcue|bumpE|asymp|amacr|cuvee|Sigma|sigma|iiint|udhar|iiota|ijlig|IJlig|supnE|imacr|Imacr|prime|Prime|image|prnap|eogon|Eogon|rarrc|mdash|mDDot|cuwed|imath|supne|imped|Amacr|udarr|prsim|micro|rarrb|cwint|raquo|infin|eplus|range|rangd|Ucirc|radic|minus|amalg|veeeq|rAarr|epsiv|ycirc|quest|sharp|quot|zwnj|Qscr|race|qscr|Qopf|qopf|qint|rang|Rang|Zscr|zscr|Zopf|zopf|rarr|rArr|Rarr|Pscr|pscr|prop|prod|prnE|prec|ZHcy|zhcy|prap|Zeta|zeta|Popf|popf|Zdot|plus|zdot|Yuml|yuml|phiv|YUcy|yucy|Yscr|yscr|perp|Yopf|yopf|part|para|YIcy|Ouml|rcub|yicy|YAcy|rdca|ouml|osol|Oscr|rdsh|yacy|real|oscr|xvee|andd|rect|andv|Xscr|oror|ordm|ordf|xscr|ange|aopf|Aopf|rHar|Xopf|opar|Oopf|xopf|xnis|rhov|oopf|omid|xmap|oint|apid|apos|ogon|ascr|Ascr|odot|odiv|xcup|xcap|ocir|oast|nvlt|nvle|nvgt|nvge|nvap|Wscr|wscr|auml|ntlg|ntgl|nsup|nsub|nsim|Nscr|nscr|nsce|Wopf|ring|npre|wopf|npar|Auml|Barv|bbrk|Nopf|nopf|nmid|nLtv|beta|ropf|Ropf|Beta|beth|nles|rpar|nleq|bnot|bNot|nldr|NJcy|rscr|Rscr|Vscr|vscr|rsqb|njcy|bopf|nisd|Bopf|rtri|Vopf|nGtv|ngtr|vopf|boxh|boxH|boxv|nges|ngeq|boxV|bscr|scap|Bscr|bsim|Vert|vert|bsol|bull|bump|caps|cdot|ncup|scnE|ncap|nbsp|napE|Cdot|cent|sdot|Vbar|nang|vBar|chcy|Mscr|mscr|sect|semi|CHcy|Mopf|mopf|sext|circ|cire|mldr|mlcp|cirE|comp|shcy|SHcy|vArr|varr|cong|copf|Copf|copy|COPY|malt|male|macr|lvnE|cscr|ltri|sime|ltcc|simg|Cscr|siml|csub|Uuml|lsqb|lsim|uuml|csup|Lscr|lscr|utri|smid|lpar|cups|smte|lozf|darr|Lopf|Uscr|solb|lopf|sopf|Sopf|lneq|uscr|spar|dArr|lnap|Darr|dash|Sqrt|LJcy|ljcy|lHar|dHar|Upsi|upsi|diam|lesg|djcy|DJcy|leqq|dopf|Dopf|dscr|Dscr|dscy|ldsh|ldca|squf|DScy|sscr|Sscr|dsol|lcub|late|star|Star|Uopf|Larr|lArr|larr|uopf|dtri|dzcy|sube|subE|Lang|lang|Kscr|kscr|Kopf|kopf|KJcy|kjcy|KHcy|khcy|DZcy|ecir|edot|eDot|Jscr|jscr|succ|Jopf|jopf|Edot|uHar|emsp|ensp|Iuml|iuml|eopf|isin|Iscr|iscr|Eopf|epar|sung|epsi|escr|sup1|sup2|sup3|Iota|iota|supe|supE|Iopf|iopf|IOcy|iocy|Escr|esim|Esim|imof|Uarr|QUOT|uArr|uarr|euml|IEcy|iecy|Idot|Euml|euro|excl|Hscr|hscr|Hopf|hopf|TScy|tscy|Tscr|hbar|tscr|flat|tbrk|fnof|hArr|harr|half|fopf|Fopf|tdot|gvnE|fork|trie|gtcc|fscr|Fscr|gdot|gsim|Gscr|gscr|Gopf|gopf|gneq|Gdot|tosa|gnap|Topf|topf|geqq|toea|GJcy|gjcy|tint|gesl|mid|Sfr|ggg|top|ges|gla|glE|glj|geq|gne|gEl|gel|gnE|Gcy|gcy|gap|Tfr|tfr|Tcy|tcy|Hat|Tau|Ffr|tau|Tab|hfr|Hfr|ffr|Fcy|fcy|icy|Icy|iff|ETH|eth|ifr|Ifr|Eta|eta|int|Int|Sup|sup|ucy|Ucy|Sum|sum|jcy|ENG|ufr|Ufr|eng|Jcy|jfr|els|ell|egs|Efr|efr|Jfr|uml|kcy|Kcy|Ecy|ecy|kfr|Kfr|lap|Sub|sub|lat|lcy|Lcy|leg|Dot|dot|lEg|leq|les|squ|div|die|lfr|Lfr|lgE|Dfr|dfr|Del|deg|Dcy|dcy|lne|lnE|sol|loz|smt|Cup|lrm|cup|lsh|Lsh|sim|shy|map|Map|mcy|Mcy|mfr|Mfr|mho|gfr|Gfr|sfr|cir|Chi|chi|nap|Cfr|vcy|Vcy|cfr|Scy|scy|ncy|Ncy|vee|Vee|Cap|cap|nfr|scE|sce|Nfr|nge|ngE|nGg|vfr|Vfr|ngt|bot|nGt|nis|niv|Rsh|rsh|nle|nlE|bne|Bfr|bfr|nLl|nlt|nLt|Bcy|bcy|not|Not|rlm|wfr|Wfr|npr|nsc|num|ocy|ast|Ocy|ofr|xfr|Xfr|Ofr|ogt|ohm|apE|olt|Rho|ape|rho|Rfr|rfr|ord|REG|ang|reg|orv|And|and|AMP|Rcy|amp|Afr|ycy|Ycy|yen|yfr|Yfr|rcy|par|pcy|Pcy|pfr|Pfr|phi|Phi|afr|Acy|acy|zcy|Zcy|piv|acE|acd|zfr|Zfr|pre|prE|psi|Psi|qfr|Qfr|zwj|Or|ge|Gg|gt|gg|el|oS|lt|Lt|LT|Re|lg|gl|eg|ne|Im|it|le|DD|wp|wr|nu|Nu|dd|lE|Sc|sc|pi|Pi|ee|af|ll|Ll|rx|gE|xi|pm|Xi|ic|pr|Pr|in|ni|mp|mu|ac|Mu|or|ap|Gt|GT|ii);|&(Aacute|Agrave|Atilde|Ccedil|Eacute|Egrave|Iacute|Igrave|Ntilde|Oacute|Ograve|Oslash|Otilde|Uacute|Ugrave|Yacute|aacute|agrave|atilde|brvbar|ccedil|curren|divide|eacute|egrave|frac12|frac14|frac34|iacute|igrave|iquest|middot|ntilde|oacute|ograve|oslash|otilde|plusmn|uacute|ugrave|yacute|AElig|Acirc|Aring|Ecirc|Icirc|Ocirc|THORN|Ucirc|acirc|acute|aelig|aring|cedil|ecirc|icirc|iexcl|laquo|micro|ocirc|pound|raquo|szlig|thorn|times|ucirc|Auml|COPY|Euml|Iuml|Ouml|QUOT|Uuml|auml|cent|copy|euml|iuml|macr|nbsp|ordf|ordm|ouml|para|quot|sect|sup1|sup2|sup3|uuml|yuml|AMP|ETH|REG|amp|deg|eth|not|reg|shy|uml|yen|GT|LT|gt|lt)(?!;)([=a-zA-Z0-9]?)|&#([0-9]+)(;?)|&#[xX]([a-fA-F0-9]+)(;?)|&([0-9a-zA-Z]+)/g,
				g = {
					aacute: 'á',
					Aacute: 'Á',
					abreve: 'ă',
					Abreve: 'Ă',
					ac: '∾',
					acd: '∿',
					acE: '∾̳',
					acirc: 'â',
					Acirc: 'Â',
					acute: '´',
					acy: 'а',
					Acy: 'А',
					aelig: 'æ',
					AElig: 'Æ',
					af: '⁡',
					afr: '𝔞',
					Afr: '𝔄',
					agrave: 'à',
					Agrave: 'À',
					alefsym: 'ℵ',
					aleph: 'ℵ',
					alpha: 'α',
					Alpha: 'Α',
					amacr: 'ā',
					Amacr: 'Ā',
					amalg: '⨿',
					amp: '&',
					AMP: '&',
					and: '∧',
					And: '⩓',
					andand: '⩕',
					andd: '⩜',
					andslope: '⩘',
					andv: '⩚',
					ang: '∠',
					ange: '⦤',
					angle: '∠',
					angmsd: '∡',
					angmsdaa: '⦨',
					angmsdab: '⦩',
					angmsdac: '⦪',
					angmsdad: '⦫',
					angmsdae: '⦬',
					angmsdaf: '⦭',
					angmsdag: '⦮',
					angmsdah: '⦯',
					angrt: '∟',
					angrtvb: '⊾',
					angrtvbd: '⦝',
					angsph: '∢',
					angst: 'Å',
					angzarr: '⍼',
					aogon: 'ą',
					Aogon: 'Ą',
					aopf: '𝕒',
					Aopf: '𝔸',
					ap: '≈',
					apacir: '⩯',
					ape: '≊',
					apE: '⩰',
					apid: '≋',
					apos: "'",
					ApplyFunction: '⁡',
					approx: '≈',
					approxeq: '≊',
					aring: 'å',
					Aring: 'Å',
					ascr: '𝒶',
					Ascr: '𝒜',
					Assign: '≔',
					ast: '*',
					asymp: '≈',
					asympeq: '≍',
					atilde: 'ã',
					Atilde: 'Ã',
					auml: 'ä',
					Auml: 'Ä',
					awconint: '∳',
					awint: '⨑',
					backcong: '≌',
					backepsilon: '϶',
					backprime: '‵',
					backsim: '∽',
					backsimeq: '⋍',
					Backslash: '∖',
					Barv: '⫧',
					barvee: '⊽',
					barwed: '⌅',
					Barwed: '⌆',
					barwedge: '⌅',
					bbrk: '⎵',
					bbrktbrk: '⎶',
					bcong: '≌',
					bcy: 'б',
					Bcy: 'Б',
					bdquo: '„',
					becaus: '∵',
					because: '∵',
					Because: '∵',
					bemptyv: '⦰',
					bepsi: '϶',
					bernou: 'ℬ',
					Bernoullis: 'ℬ',
					beta: 'β',
					Beta: 'Β',
					beth: 'ℶ',
					between: '≬',
					bfr: '𝔟',
					Bfr: '𝔅',
					bigcap: '⋂',
					bigcirc: '◯',
					bigcup: '⋃',
					bigodot: '⨀',
					bigoplus: '⨁',
					bigotimes: '⨂',
					bigsqcup: '⨆',
					bigstar: '★',
					bigtriangledown: '▽',
					bigtriangleup: '△',
					biguplus: '⨄',
					bigvee: '⋁',
					bigwedge: '⋀',
					bkarow: '⤍',
					blacklozenge: '⧫',
					blacksquare: '▪',
					blacktriangle: '▴',
					blacktriangledown: '▾',
					blacktriangleleft: '◂',
					blacktriangleright: '▸',
					blank: '␣',
					blk12: '▒',
					blk14: '░',
					blk34: '▓',
					block: '█',
					bne: '=⃥',
					bnequiv: '≡⃥',
					bnot: '⌐',
					bNot: '⫭',
					bopf: '𝕓',
					Bopf: '𝔹',
					bot: '⊥',
					bottom: '⊥',
					bowtie: '⋈',
					boxbox: '⧉',
					boxdl: '┐',
					boxdL: '╕',
					boxDl: '╖',
					boxDL: '╗',
					boxdr: '┌',
					boxdR: '╒',
					boxDr: '╓',
					boxDR: '╔',
					boxh: '─',
					boxH: '═',
					boxhd: '┬',
					boxhD: '╥',
					boxHd: '╤',
					boxHD: '╦',
					boxhu: '┴',
					boxhU: '╨',
					boxHu: '╧',
					boxHU: '╩',
					boxminus: '⊟',
					boxplus: '⊞',
					boxtimes: '⊠',
					boxul: '┘',
					boxuL: '╛',
					boxUl: '╜',
					boxUL: '╝',
					boxur: '└',
					boxuR: '╘',
					boxUr: '╙',
					boxUR: '╚',
					boxv: '│',
					boxV: '║',
					boxvh: '┼',
					boxvH: '╪',
					boxVh: '╫',
					boxVH: '╬',
					boxvl: '┤',
					boxvL: '╡',
					boxVl: '╢',
					boxVL: '╣',
					boxvr: '├',
					boxvR: '╞',
					boxVr: '╟',
					boxVR: '╠',
					bprime: '‵',
					breve: '˘',
					Breve: '˘',
					brvbar: '¦',
					bscr: '𝒷',
					Bscr: 'ℬ',
					bsemi: '⁏',
					bsim: '∽',
					bsime: '⋍',
					bsol: '\\',
					bsolb: '⧅',
					bsolhsub: '⟈',
					bull: '•',
					bullet: '•',
					bump: '≎',
					bumpe: '≏',
					bumpE: '⪮',
					bumpeq: '≏',
					Bumpeq: '≎',
					cacute: 'ć',
					Cacute: 'Ć',
					cap: '∩',
					Cap: '⋒',
					capand: '⩄',
					capbrcup: '⩉',
					capcap: '⩋',
					capcup: '⩇',
					capdot: '⩀',
					CapitalDifferentialD: 'ⅅ',
					caps: '∩︀',
					caret: '⁁',
					caron: 'ˇ',
					Cayleys: 'ℭ',
					ccaps: '⩍',
					ccaron: 'č',
					Ccaron: 'Č',
					ccedil: 'ç',
					Ccedil: 'Ç',
					ccirc: 'ĉ',
					Ccirc: 'Ĉ',
					Cconint: '∰',
					ccups: '⩌',
					ccupssm: '⩐',
					cdot: 'ċ',
					Cdot: 'Ċ',
					cedil: '¸',
					Cedilla: '¸',
					cemptyv: '⦲',
					cent: '¢',
					centerdot: '·',
					CenterDot: '·',
					cfr: '𝔠',
					Cfr: 'ℭ',
					chcy: 'ч',
					CHcy: 'Ч',
					check: '✓',
					checkmark: '✓',
					chi: 'χ',
					Chi: 'Χ',
					cir: '○',
					circ: 'ˆ',
					circeq: '≗',
					circlearrowleft: '↺',
					circlearrowright: '↻',
					circledast: '⊛',
					circledcirc: '⊚',
					circleddash: '⊝',
					CircleDot: '⊙',
					circledR: '®',
					circledS: 'Ⓢ',
					CircleMinus: '⊖',
					CirclePlus: '⊕',
					CircleTimes: '⊗',
					cire: '≗',
					cirE: '⧃',
					cirfnint: '⨐',
					cirmid: '⫯',
					cirscir: '⧂',
					ClockwiseContourIntegral: '∲',
					CloseCurlyDoubleQuote: '”',
					CloseCurlyQuote: '’',
					clubs: '♣',
					clubsuit: '♣',
					colon: ':',
					Colon: '∷',
					colone: '≔',
					Colone: '⩴',
					coloneq: '≔',
					comma: ',',
					commat: '@',
					comp: '∁',
					compfn: '∘',
					complement: '∁',
					complexes: 'ℂ',
					cong: '≅',
					congdot: '⩭',
					Congruent: '≡',
					conint: '∮',
					Conint: '∯',
					ContourIntegral: '∮',
					copf: '𝕔',
					Copf: 'ℂ',
					coprod: '∐',
					Coproduct: '∐',
					copy: '©',
					COPY: '©',
					copysr: '℗',
					CounterClockwiseContourIntegral: '∳',
					crarr: '↵',
					cross: '✗',
					Cross: '⨯',
					cscr: '𝒸',
					Cscr: '𝒞',
					csub: '⫏',
					csube: '⫑',
					csup: '⫐',
					csupe: '⫒',
					ctdot: '⋯',
					cudarrl: '⤸',
					cudarrr: '⤵',
					cuepr: '⋞',
					cuesc: '⋟',
					cularr: '↶',
					cularrp: '⤽',
					cup: '∪',
					Cup: '⋓',
					cupbrcap: '⩈',
					cupcap: '⩆',
					CupCap: '≍',
					cupcup: '⩊',
					cupdot: '⊍',
					cupor: '⩅',
					cups: '∪︀',
					curarr: '↷',
					curarrm: '⤼',
					curlyeqprec: '⋞',
					curlyeqsucc: '⋟',
					curlyvee: '⋎',
					curlywedge: '⋏',
					curren: '¤',
					curvearrowleft: '↶',
					curvearrowright: '↷',
					cuvee: '⋎',
					cuwed: '⋏',
					cwconint: '∲',
					cwint: '∱',
					cylcty: '⌭',
					dagger: '†',
					Dagger: '‡',
					daleth: 'ℸ',
					darr: '↓',
					dArr: '⇓',
					Darr: '↡',
					dash: '‐',
					dashv: '⊣',
					Dashv: '⫤',
					dbkarow: '⤏',
					dblac: '˝',
					dcaron: 'ď',
					Dcaron: 'Ď',
					dcy: 'д',
					Dcy: 'Д',
					dd: 'ⅆ',
					DD: 'ⅅ',
					ddagger: '‡',
					ddarr: '⇊',
					DDotrahd: '⤑',
					ddotseq: '⩷',
					deg: '°',
					Del: '∇',
					delta: 'δ',
					Delta: 'Δ',
					demptyv: '⦱',
					dfisht: '⥿',
					dfr: '𝔡',
					Dfr: '𝔇',
					dHar: '⥥',
					dharl: '⇃',
					dharr: '⇂',
					DiacriticalAcute: '´',
					DiacriticalDot: '˙',
					DiacriticalDoubleAcute: '˝',
					DiacriticalGrave: '`',
					DiacriticalTilde: '˜',
					diam: '⋄',
					diamond: '⋄',
					Diamond: '⋄',
					diamondsuit: '♦',
					diams: '♦',
					die: '¨',
					DifferentialD: 'ⅆ',
					digamma: 'ϝ',
					disin: '⋲',
					div: '÷',
					divide: '÷',
					divideontimes: '⋇',
					divonx: '⋇',
					djcy: 'ђ',
					DJcy: 'Ђ',
					dlcorn: '⌞',
					dlcrop: '⌍',
					dollar: '$',
					dopf: '𝕕',
					Dopf: '𝔻',
					dot: '˙',
					Dot: '¨',
					DotDot: '⃜',
					doteq: '≐',
					doteqdot: '≑',
					DotEqual: '≐',
					dotminus: '∸',
					dotplus: '∔',
					dotsquare: '⊡',
					doublebarwedge: '⌆',
					DoubleContourIntegral: '∯',
					DoubleDot: '¨',
					DoubleDownArrow: '⇓',
					DoubleLeftArrow: '⇐',
					DoubleLeftRightArrow: '⇔',
					DoubleLeftTee: '⫤',
					DoubleLongLeftArrow: '⟸',
					DoubleLongLeftRightArrow: '⟺',
					DoubleLongRightArrow: '⟹',
					DoubleRightArrow: '⇒',
					DoubleRightTee: '⊨',
					DoubleUpArrow: '⇑',
					DoubleUpDownArrow: '⇕',
					DoubleVerticalBar: '∥',
					downarrow: '↓',
					Downarrow: '⇓',
					DownArrow: '↓',
					DownArrowBar: '⤓',
					DownArrowUpArrow: '⇵',
					DownBreve: '̑',
					downdownarrows: '⇊',
					downharpoonleft: '⇃',
					downharpoonright: '⇂',
					DownLeftRightVector: '⥐',
					DownLeftTeeVector: '⥞',
					DownLeftVector: '↽',
					DownLeftVectorBar: '⥖',
					DownRightTeeVector: '⥟',
					DownRightVector: '⇁',
					DownRightVectorBar: '⥗',
					DownTee: '⊤',
					DownTeeArrow: '↧',
					drbkarow: '⤐',
					drcorn: '⌟',
					drcrop: '⌌',
					dscr: '𝒹',
					Dscr: '𝒟',
					dscy: 'ѕ',
					DScy: 'Ѕ',
					dsol: '⧶',
					dstrok: 'đ',
					Dstrok: 'Đ',
					dtdot: '⋱',
					dtri: '▿',
					dtrif: '▾',
					duarr: '⇵',
					duhar: '⥯',
					dwangle: '⦦',
					dzcy: 'џ',
					DZcy: 'Џ',
					dzigrarr: '⟿',
					eacute: 'é',
					Eacute: 'É',
					easter: '⩮',
					ecaron: 'ě',
					Ecaron: 'Ě',
					ecir: '≖',
					ecirc: 'ê',
					Ecirc: 'Ê',
					ecolon: '≕',
					ecy: 'э',
					Ecy: 'Э',
					eDDot: '⩷',
					edot: 'ė',
					eDot: '≑',
					Edot: 'Ė',
					ee: 'ⅇ',
					efDot: '≒',
					efr: '𝔢',
					Efr: '𝔈',
					eg: '⪚',
					egrave: 'è',
					Egrave: 'È',
					egs: '⪖',
					egsdot: '⪘',
					el: '⪙',
					Element: '∈',
					elinters: '⏧',
					ell: 'ℓ',
					els: '⪕',
					elsdot: '⪗',
					emacr: 'ē',
					Emacr: 'Ē',
					empty: '∅',
					emptyset: '∅',
					EmptySmallSquare: '◻',
					emptyv: '∅',
					EmptyVerySmallSquare: '▫',
					emsp: ' ',
					emsp13: ' ',
					emsp14: ' ',
					eng: 'ŋ',
					ENG: 'Ŋ',
					ensp: ' ',
					eogon: 'ę',
					Eogon: 'Ę',
					eopf: '𝕖',
					Eopf: '𝔼',
					epar: '⋕',
					eparsl: '⧣',
					eplus: '⩱',
					epsi: 'ε',
					epsilon: 'ε',
					Epsilon: 'Ε',
					epsiv: 'ϵ',
					eqcirc: '≖',
					eqcolon: '≕',
					eqsim: '≂',
					eqslantgtr: '⪖',
					eqslantless: '⪕',
					Equal: '⩵',
					equals: '=',
					EqualTilde: '≂',
					equest: '≟',
					Equilibrium: '⇌',
					equiv: '≡',
					equivDD: '⩸',
					eqvparsl: '⧥',
					erarr: '⥱',
					erDot: '≓',
					escr: 'ℯ',
					Escr: 'ℰ',
					esdot: '≐',
					esim: '≂',
					Esim: '⩳',
					eta: 'η',
					Eta: 'Η',
					eth: 'ð',
					ETH: 'Ð',
					euml: 'ë',
					Euml: 'Ë',
					euro: '€',
					excl: '!',
					exist: '∃',
					Exists: '∃',
					expectation: 'ℰ',
					exponentiale: 'ⅇ',
					ExponentialE: 'ⅇ',
					fallingdotseq: '≒',
					fcy: 'ф',
					Fcy: 'Ф',
					female: '♀',
					ffilig: 'ﬃ',
					fflig: 'ﬀ',
					ffllig: 'ﬄ',
					ffr: '𝔣',
					Ffr: '𝔉',
					filig: 'ﬁ',
					FilledSmallSquare: '◼',
					FilledVerySmallSquare: '▪',
					fjlig: 'fj',
					flat: '♭',
					fllig: 'ﬂ',
					fltns: '▱',
					fnof: 'ƒ',
					fopf: '𝕗',
					Fopf: '𝔽',
					forall: '∀',
					ForAll: '∀',
					fork: '⋔',
					forkv: '⫙',
					Fouriertrf: 'ℱ',
					fpartint: '⨍',
					frac12: '½',
					frac13: '⅓',
					frac14: '¼',
					frac15: '⅕',
					frac16: '⅙',
					frac18: '⅛',
					frac23: '⅔',
					frac25: '⅖',
					frac34: '¾',
					frac35: '⅗',
					frac38: '⅜',
					frac45: '⅘',
					frac56: '⅚',
					frac58: '⅝',
					frac78: '⅞',
					frasl: '⁄',
					frown: '⌢',
					fscr: '𝒻',
					Fscr: 'ℱ',
					gacute: 'ǵ',
					gamma: 'γ',
					Gamma: 'Γ',
					gammad: 'ϝ',
					Gammad: 'Ϝ',
					gap: '⪆',
					gbreve: 'ğ',
					Gbreve: 'Ğ',
					Gcedil: 'Ģ',
					gcirc: 'ĝ',
					Gcirc: 'Ĝ',
					gcy: 'г',
					Gcy: 'Г',
					gdot: 'ġ',
					Gdot: 'Ġ',
					ge: '≥',
					gE: '≧',
					gel: '⋛',
					gEl: '⪌',
					geq: '≥',
					geqq: '≧',
					geqslant: '⩾',
					ges: '⩾',
					gescc: '⪩',
					gesdot: '⪀',
					gesdoto: '⪂',
					gesdotol: '⪄',
					gesl: '⋛︀',
					gesles: '⪔',
					gfr: '𝔤',
					Gfr: '𝔊',
					gg: '≫',
					Gg: '⋙',
					ggg: '⋙',
					gimel: 'ℷ',
					gjcy: 'ѓ',
					GJcy: 'Ѓ',
					gl: '≷',
					gla: '⪥',
					glE: '⪒',
					glj: '⪤',
					gnap: '⪊',
					gnapprox: '⪊',
					gne: '⪈',
					gnE: '≩',
					gneq: '⪈',
					gneqq: '≩',
					gnsim: '⋧',
					gopf: '𝕘',
					Gopf: '𝔾',
					grave: '`',
					GreaterEqual: '≥',
					GreaterEqualLess: '⋛',
					GreaterFullEqual: '≧',
					GreaterGreater: '⪢',
					GreaterLess: '≷',
					GreaterSlantEqual: '⩾',
					GreaterTilde: '≳',
					gscr: 'ℊ',
					Gscr: '𝒢',
					gsim: '≳',
					gsime: '⪎',
					gsiml: '⪐',
					gt: '>',
					Gt: '≫',
					GT: '>',
					gtcc: '⪧',
					gtcir: '⩺',
					gtdot: '⋗',
					gtlPar: '⦕',
					gtquest: '⩼',
					gtrapprox: '⪆',
					gtrarr: '⥸',
					gtrdot: '⋗',
					gtreqless: '⋛',
					gtreqqless: '⪌',
					gtrless: '≷',
					gtrsim: '≳',
					gvertneqq: '≩︀',
					gvnE: '≩︀',
					Hacek: 'ˇ',
					hairsp: ' ',
					half: '½',
					hamilt: 'ℋ',
					hardcy: 'ъ',
					HARDcy: 'Ъ',
					harr: '↔',
					hArr: '⇔',
					harrcir: '⥈',
					harrw: '↭',
					Hat: '^',
					hbar: 'ℏ',
					hcirc: 'ĥ',
					Hcirc: 'Ĥ',
					hearts: '♥',
					heartsuit: '♥',
					hellip: '…',
					hercon: '⊹',
					hfr: '𝔥',
					Hfr: 'ℌ',
					HilbertSpace: 'ℋ',
					hksearow: '⤥',
					hkswarow: '⤦',
					hoarr: '⇿',
					homtht: '∻',
					hookleftarrow: '↩',
					hookrightarrow: '↪',
					hopf: '𝕙',
					Hopf: 'ℍ',
					horbar: '―',
					HorizontalLine: '─',
					hscr: '𝒽',
					Hscr: 'ℋ',
					hslash: 'ℏ',
					hstrok: 'ħ',
					Hstrok: 'Ħ',
					HumpDownHump: '≎',
					HumpEqual: '≏',
					hybull: '⁃',
					hyphen: '‐',
					iacute: 'í',
					Iacute: 'Í',
					ic: '⁣',
					icirc: 'î',
					Icirc: 'Î',
					icy: 'и',
					Icy: 'И',
					Idot: 'İ',
					iecy: 'е',
					IEcy: 'Е',
					iexcl: '¡',
					iff: '⇔',
					ifr: '𝔦',
					Ifr: 'ℑ',
					igrave: 'ì',
					Igrave: 'Ì',
					ii: 'ⅈ',
					iiiint: '⨌',
					iiint: '∭',
					iinfin: '⧜',
					iiota: '℩',
					ijlig: 'ĳ',
					IJlig: 'Ĳ',
					Im: 'ℑ',
					imacr: 'ī',
					Imacr: 'Ī',
					image: 'ℑ',
					ImaginaryI: 'ⅈ',
					imagline: 'ℐ',
					imagpart: 'ℑ',
					imath: 'ı',
					imof: '⊷',
					imped: 'Ƶ',
					Implies: '⇒',
					in: '∈',
					incare: '℅',
					infin: '∞',
					infintie: '⧝',
					inodot: 'ı',
					int: '∫',
					Int: '∬',
					intcal: '⊺',
					integers: 'ℤ',
					Integral: '∫',
					intercal: '⊺',
					Intersection: '⋂',
					intlarhk: '⨗',
					intprod: '⨼',
					InvisibleComma: '⁣',
					InvisibleTimes: '⁢',
					iocy: 'ё',
					IOcy: 'Ё',
					iogon: 'į',
					Iogon: 'Į',
					iopf: '𝕚',
					Iopf: '𝕀',
					iota: 'ι',
					Iota: 'Ι',
					iprod: '⨼',
					iquest: '¿',
					iscr: '𝒾',
					Iscr: 'ℐ',
					isin: '∈',
					isindot: '⋵',
					isinE: '⋹',
					isins: '⋴',
					isinsv: '⋳',
					isinv: '∈',
					it: '⁢',
					itilde: 'ĩ',
					Itilde: 'Ĩ',
					iukcy: 'і',
					Iukcy: 'І',
					iuml: 'ï',
					Iuml: 'Ï',
					jcirc: 'ĵ',
					Jcirc: 'Ĵ',
					jcy: 'й',
					Jcy: 'Й',
					jfr: '𝔧',
					Jfr: '𝔍',
					jmath: 'ȷ',
					jopf: '𝕛',
					Jopf: '𝕁',
					jscr: '𝒿',
					Jscr: '𝒥',
					jsercy: 'ј',
					Jsercy: 'Ј',
					jukcy: 'є',
					Jukcy: 'Є',
					kappa: 'κ',
					Kappa: 'Κ',
					kappav: 'ϰ',
					kcedil: 'ķ',
					Kcedil: 'Ķ',
					kcy: 'к',
					Kcy: 'К',
					kfr: '𝔨',
					Kfr: '𝔎',
					kgreen: 'ĸ',
					khcy: 'х',
					KHcy: 'Х',
					kjcy: 'ќ',
					KJcy: 'Ќ',
					kopf: '𝕜',
					Kopf: '𝕂',
					kscr: '𝓀',
					Kscr: '𝒦',
					lAarr: '⇚',
					lacute: 'ĺ',
					Lacute: 'Ĺ',
					laemptyv: '⦴',
					lagran: 'ℒ',
					lambda: 'λ',
					Lambda: 'Λ',
					lang: '⟨',
					Lang: '⟪',
					langd: '⦑',
					langle: '⟨',
					lap: '⪅',
					Laplacetrf: 'ℒ',
					laquo: '«',
					larr: '←',
					lArr: '⇐',
					Larr: '↞',
					larrb: '⇤',
					larrbfs: '⤟',
					larrfs: '⤝',
					larrhk: '↩',
					larrlp: '↫',
					larrpl: '⤹',
					larrsim: '⥳',
					larrtl: '↢',
					lat: '⪫',
					latail: '⤙',
					lAtail: '⤛',
					late: '⪭',
					lates: '⪭︀',
					lbarr: '⤌',
					lBarr: '⤎',
					lbbrk: '❲',
					lbrace: '{',
					lbrack: '[',
					lbrke: '⦋',
					lbrksld: '⦏',
					lbrkslu: '⦍',
					lcaron: 'ľ',
					Lcaron: 'Ľ',
					lcedil: 'ļ',
					Lcedil: 'Ļ',
					lceil: '⌈',
					lcub: '{',
					lcy: 'л',
					Lcy: 'Л',
					ldca: '⤶',
					ldquo: '“',
					ldquor: '„',
					ldrdhar: '⥧',
					ldrushar: '⥋',
					ldsh: '↲',
					le: '≤',
					lE: '≦',
					LeftAngleBracket: '⟨',
					leftarrow: '←',
					Leftarrow: '⇐',
					LeftArrow: '←',
					LeftArrowBar: '⇤',
					LeftArrowRightArrow: '⇆',
					leftarrowtail: '↢',
					LeftCeiling: '⌈',
					LeftDoubleBracket: '⟦',
					LeftDownTeeVector: '⥡',
					LeftDownVector: '⇃',
					LeftDownVectorBar: '⥙',
					LeftFloor: '⌊',
					leftharpoondown: '↽',
					leftharpoonup: '↼',
					leftleftarrows: '⇇',
					leftrightarrow: '↔',
					Leftrightarrow: '⇔',
					LeftRightArrow: '↔',
					leftrightarrows: '⇆',
					leftrightharpoons: '⇋',
					leftrightsquigarrow: '↭',
					LeftRightVector: '⥎',
					LeftTee: '⊣',
					LeftTeeArrow: '↤',
					LeftTeeVector: '⥚',
					leftthreetimes: '⋋',
					LeftTriangle: '⊲',
					LeftTriangleBar: '⧏',
					LeftTriangleEqual: '⊴',
					LeftUpDownVector: '⥑',
					LeftUpTeeVector: '⥠',
					LeftUpVector: '↿',
					LeftUpVectorBar: '⥘',
					LeftVector: '↼',
					LeftVectorBar: '⥒',
					leg: '⋚',
					lEg: '⪋',
					leq: '≤',
					leqq: '≦',
					leqslant: '⩽',
					les: '⩽',
					lescc: '⪨',
					lesdot: '⩿',
					lesdoto: '⪁',
					lesdotor: '⪃',
					lesg: '⋚︀',
					lesges: '⪓',
					lessapprox: '⪅',
					lessdot: '⋖',
					lesseqgtr: '⋚',
					lesseqqgtr: '⪋',
					LessEqualGreater: '⋚',
					LessFullEqual: '≦',
					LessGreater: '≶',
					lessgtr: '≶',
					LessLess: '⪡',
					lesssim: '≲',
					LessSlantEqual: '⩽',
					LessTilde: '≲',
					lfisht: '⥼',
					lfloor: '⌊',
					lfr: '𝔩',
					Lfr: '𝔏',
					lg: '≶',
					lgE: '⪑',
					lHar: '⥢',
					lhard: '↽',
					lharu: '↼',
					lharul: '⥪',
					lhblk: '▄',
					ljcy: 'љ',
					LJcy: 'Љ',
					ll: '≪',
					Ll: '⋘',
					llarr: '⇇',
					llcorner: '⌞',
					Lleftarrow: '⇚',
					llhard: '⥫',
					lltri: '◺',
					lmidot: 'ŀ',
					Lmidot: 'Ŀ',
					lmoust: '⎰',
					lmoustache: '⎰',
					lnap: '⪉',
					lnapprox: '⪉',
					lne: '⪇',
					lnE: '≨',
					lneq: '⪇',
					lneqq: '≨',
					lnsim: '⋦',
					loang: '⟬',
					loarr: '⇽',
					lobrk: '⟦',
					longleftarrow: '⟵',
					Longleftarrow: '⟸',
					LongLeftArrow: '⟵',
					longleftrightarrow: '⟷',
					Longleftrightarrow: '⟺',
					LongLeftRightArrow: '⟷',
					longmapsto: '⟼',
					longrightarrow: '⟶',
					Longrightarrow: '⟹',
					LongRightArrow: '⟶',
					looparrowleft: '↫',
					looparrowright: '↬',
					lopar: '⦅',
					lopf: '𝕝',
					Lopf: '𝕃',
					loplus: '⨭',
					lotimes: '⨴',
					lowast: '∗',
					lowbar: '_',
					LowerLeftArrow: '↙',
					LowerRightArrow: '↘',
					loz: '◊',
					lozenge: '◊',
					lozf: '⧫',
					lpar: '(',
					lparlt: '⦓',
					lrarr: '⇆',
					lrcorner: '⌟',
					lrhar: '⇋',
					lrhard: '⥭',
					lrm: '‎',
					lrtri: '⊿',
					lsaquo: '‹',
					lscr: '𝓁',
					Lscr: 'ℒ',
					lsh: '↰',
					Lsh: '↰',
					lsim: '≲',
					lsime: '⪍',
					lsimg: '⪏',
					lsqb: '[',
					lsquo: '‘',
					lsquor: '‚',
					lstrok: 'ł',
					Lstrok: 'Ł',
					lt: '<',
					Lt: '≪',
					LT: '<',
					ltcc: '⪦',
					ltcir: '⩹',
					ltdot: '⋖',
					lthree: '⋋',
					ltimes: '⋉',
					ltlarr: '⥶',
					ltquest: '⩻',
					ltri: '◃',
					ltrie: '⊴',
					ltrif: '◂',
					ltrPar: '⦖',
					lurdshar: '⥊',
					luruhar: '⥦',
					lvertneqq: '≨︀',
					lvnE: '≨︀',
					macr: '¯',
					male: '♂',
					malt: '✠',
					maltese: '✠',
					map: '↦',
					Map: '⤅',
					mapsto: '↦',
					mapstodown: '↧',
					mapstoleft: '↤',
					mapstoup: '↥',
					marker: '▮',
					mcomma: '⨩',
					mcy: 'м',
					Mcy: 'М',
					mdash: '—',
					mDDot: '∺',
					measuredangle: '∡',
					MediumSpace: ' ',
					Mellintrf: 'ℳ',
					mfr: '𝔪',
					Mfr: '𝔐',
					mho: '℧',
					micro: 'µ',
					mid: '∣',
					midast: '*',
					midcir: '⫰',
					middot: '·',
					minus: '−',
					minusb: '⊟',
					minusd: '∸',
					minusdu: '⨪',
					MinusPlus: '∓',
					mlcp: '⫛',
					mldr: '…',
					mnplus: '∓',
					models: '⊧',
					mopf: '𝕞',
					Mopf: '𝕄',
					mp: '∓',
					mscr: '𝓂',
					Mscr: 'ℳ',
					mstpos: '∾',
					mu: 'μ',
					Mu: 'Μ',
					multimap: '⊸',
					mumap: '⊸',
					nabla: '∇',
					nacute: 'ń',
					Nacute: 'Ń',
					nang: '∠⃒',
					nap: '≉',
					napE: '⩰̸',
					napid: '≋̸',
					napos: 'ŉ',
					napprox: '≉',
					natur: '♮',
					natural: '♮',
					naturals: 'ℕ',
					nbsp: ' ',
					nbump: '≎̸',
					nbumpe: '≏̸',
					ncap: '⩃',
					ncaron: 'ň',
					Ncaron: 'Ň',
					ncedil: 'ņ',
					Ncedil: 'Ņ',
					ncong: '≇',
					ncongdot: '⩭̸',
					ncup: '⩂',
					ncy: 'н',
					Ncy: 'Н',
					ndash: '–',
					ne: '≠',
					nearhk: '⤤',
					nearr: '↗',
					neArr: '⇗',
					nearrow: '↗',
					nedot: '≐̸',
					NegativeMediumSpace: '​',
					NegativeThickSpace: '​',
					NegativeThinSpace: '​',
					NegativeVeryThinSpace: '​',
					nequiv: '≢',
					nesear: '⤨',
					nesim: '≂̸',
					NestedGreaterGreater: '≫',
					NestedLessLess: '≪',
					NewLine: '\n',
					nexist: '∄',
					nexists: '∄',
					nfr: '𝔫',
					Nfr: '𝔑',
					nge: '≱',
					ngE: '≧̸',
					ngeq: '≱',
					ngeqq: '≧̸',
					ngeqslant: '⩾̸',
					nges: '⩾̸',
					nGg: '⋙̸',
					ngsim: '≵',
					ngt: '≯',
					nGt: '≫⃒',
					ngtr: '≯',
					nGtv: '≫̸',
					nharr: '↮',
					nhArr: '⇎',
					nhpar: '⫲',
					ni: '∋',
					nis: '⋼',
					nisd: '⋺',
					niv: '∋',
					njcy: 'њ',
					NJcy: 'Њ',
					nlarr: '↚',
					nlArr: '⇍',
					nldr: '‥',
					nle: '≰',
					nlE: '≦̸',
					nleftarrow: '↚',
					nLeftarrow: '⇍',
					nleftrightarrow: '↮',
					nLeftrightarrow: '⇎',
					nleq: '≰',
					nleqq: '≦̸',
					nleqslant: '⩽̸',
					nles: '⩽̸',
					nless: '≮',
					nLl: '⋘̸',
					nlsim: '≴',
					nlt: '≮',
					nLt: '≪⃒',
					nltri: '⋪',
					nltrie: '⋬',
					nLtv: '≪̸',
					nmid: '∤',
					NoBreak: '⁠',
					NonBreakingSpace: ' ',
					nopf: '𝕟',
					Nopf: 'ℕ',
					not: '¬',
					Not: '⫬',
					NotCongruent: '≢',
					NotCupCap: '≭',
					NotDoubleVerticalBar: '∦',
					NotElement: '∉',
					NotEqual: '≠',
					NotEqualTilde: '≂̸',
					NotExists: '∄',
					NotGreater: '≯',
					NotGreaterEqual: '≱',
					NotGreaterFullEqual: '≧̸',
					NotGreaterGreater: '≫̸',
					NotGreaterLess: '≹',
					NotGreaterSlantEqual: '⩾̸',
					NotGreaterTilde: '≵',
					NotHumpDownHump: '≎̸',
					NotHumpEqual: '≏̸',
					notin: '∉',
					notindot: '⋵̸',
					notinE: '⋹̸',
					notinva: '∉',
					notinvb: '⋷',
					notinvc: '⋶',
					NotLeftTriangle: '⋪',
					NotLeftTriangleBar: '⧏̸',
					NotLeftTriangleEqual: '⋬',
					NotLess: '≮',
					NotLessEqual: '≰',
					NotLessGreater: '≸',
					NotLessLess: '≪̸',
					NotLessSlantEqual: '⩽̸',
					NotLessTilde: '≴',
					NotNestedGreaterGreater: '⪢̸',
					NotNestedLessLess: '⪡̸',
					notni: '∌',
					notniva: '∌',
					notnivb: '⋾',
					notnivc: '⋽',
					NotPrecedes: '⊀',
					NotPrecedesEqual: '⪯̸',
					NotPrecedesSlantEqual: '⋠',
					NotReverseElement: '∌',
					NotRightTriangle: '⋫',
					NotRightTriangleBar: '⧐̸',
					NotRightTriangleEqual: '⋭',
					NotSquareSubset: '⊏̸',
					NotSquareSubsetEqual: '⋢',
					NotSquareSuperset: '⊐̸',
					NotSquareSupersetEqual: '⋣',
					NotSubset: '⊂⃒',
					NotSubsetEqual: '⊈',
					NotSucceeds: '⊁',
					NotSucceedsEqual: '⪰̸',
					NotSucceedsSlantEqual: '⋡',
					NotSucceedsTilde: '≿̸',
					NotSuperset: '⊃⃒',
					NotSupersetEqual: '⊉',
					NotTilde: '≁',
					NotTildeEqual: '≄',
					NotTildeFullEqual: '≇',
					NotTildeTilde: '≉',
					NotVerticalBar: '∤',
					npar: '∦',
					nparallel: '∦',
					nparsl: '⫽⃥',
					npart: '∂̸',
					npolint: '⨔',
					npr: '⊀',
					nprcue: '⋠',
					npre: '⪯̸',
					nprec: '⊀',
					npreceq: '⪯̸',
					nrarr: '↛',
					nrArr: '⇏',
					nrarrc: '⤳̸',
					nrarrw: '↝̸',
					nrightarrow: '↛',
					nRightarrow: '⇏',
					nrtri: '⋫',
					nrtrie: '⋭',
					nsc: '⊁',
					nsccue: '⋡',
					nsce: '⪰̸',
					nscr: '𝓃',
					Nscr: '𝒩',
					nshortmid: '∤',
					nshortparallel: '∦',
					nsim: '≁',
					nsime: '≄',
					nsimeq: '≄',
					nsmid: '∤',
					nspar: '∦',
					nsqsube: '⋢',
					nsqsupe: '⋣',
					nsub: '⊄',
					nsube: '⊈',
					nsubE: '⫅̸',
					nsubset: '⊂⃒',
					nsubseteq: '⊈',
					nsubseteqq: '⫅̸',
					nsucc: '⊁',
					nsucceq: '⪰̸',
					nsup: '⊅',
					nsupe: '⊉',
					nsupE: '⫆̸',
					nsupset: '⊃⃒',
					nsupseteq: '⊉',
					nsupseteqq: '⫆̸',
					ntgl: '≹',
					ntilde: 'ñ',
					Ntilde: 'Ñ',
					ntlg: '≸',
					ntriangleleft: '⋪',
					ntrianglelefteq: '⋬',
					ntriangleright: '⋫',
					ntrianglerighteq: '⋭',
					nu: 'ν',
					Nu: 'Ν',
					num: '#',
					numero: '№',
					numsp: ' ',
					nvap: '≍⃒',
					nvdash: '⊬',
					nvDash: '⊭',
					nVdash: '⊮',
					nVDash: '⊯',
					nvge: '≥⃒',
					nvgt: '>⃒',
					nvHarr: '⤄',
					nvinfin: '⧞',
					nvlArr: '⤂',
					nvle: '≤⃒',
					nvlt: '<⃒',
					nvltrie: '⊴⃒',
					nvrArr: '⤃',
					nvrtrie: '⊵⃒',
					nvsim: '∼⃒',
					nwarhk: '⤣',
					nwarr: '↖',
					nwArr: '⇖',
					nwarrow: '↖',
					nwnear: '⤧',
					oacute: 'ó',
					Oacute: 'Ó',
					oast: '⊛',
					ocir: '⊚',
					ocirc: 'ô',
					Ocirc: 'Ô',
					ocy: 'о',
					Ocy: 'О',
					odash: '⊝',
					odblac: 'ő',
					Odblac: 'Ő',
					odiv: '⨸',
					odot: '⊙',
					odsold: '⦼',
					oelig: 'œ',
					OElig: 'Œ',
					ofcir: '⦿',
					ofr: '𝔬',
					Ofr: '𝔒',
					ogon: '˛',
					ograve: 'ò',
					Ograve: 'Ò',
					ogt: '⧁',
					ohbar: '⦵',
					ohm: 'Ω',
					oint: '∮',
					olarr: '↺',
					olcir: '⦾',
					olcross: '⦻',
					oline: '‾',
					olt: '⧀',
					omacr: 'ō',
					Omacr: 'Ō',
					omega: 'ω',
					Omega: 'Ω',
					omicron: 'ο',
					Omicron: 'Ο',
					omid: '⦶',
					ominus: '⊖',
					oopf: '𝕠',
					Oopf: '𝕆',
					opar: '⦷',
					OpenCurlyDoubleQuote: '“',
					OpenCurlyQuote: '‘',
					operp: '⦹',
					oplus: '⊕',
					or: '∨',
					Or: '⩔',
					orarr: '↻',
					ord: '⩝',
					order: 'ℴ',
					orderof: 'ℴ',
					ordf: 'ª',
					ordm: 'º',
					origof: '⊶',
					oror: '⩖',
					orslope: '⩗',
					orv: '⩛',
					oS: 'Ⓢ',
					oscr: 'ℴ',
					Oscr: '𝒪',
					oslash: 'ø',
					Oslash: 'Ø',
					osol: '⊘',
					otilde: 'õ',
					Otilde: 'Õ',
					otimes: '⊗',
					Otimes: '⨷',
					otimesas: '⨶',
					ouml: 'ö',
					Ouml: 'Ö',
					ovbar: '⌽',
					OverBar: '‾',
					OverBrace: '⏞',
					OverBracket: '⎴',
					OverParenthesis: '⏜',
					par: '∥',
					para: '¶',
					parallel: '∥',
					parsim: '⫳',
					parsl: '⫽',
					part: '∂',
					PartialD: '∂',
					pcy: 'п',
					Pcy: 'П',
					percnt: '%',
					period: '.',
					permil: '‰',
					perp: '⊥',
					pertenk: '‱',
					pfr: '𝔭',
					Pfr: '𝔓',
					phi: 'φ',
					Phi: 'Φ',
					phiv: 'ϕ',
					phmmat: 'ℳ',
					phone: '☎',
					pi: 'π',
					Pi: 'Π',
					pitchfork: '⋔',
					piv: 'ϖ',
					planck: 'ℏ',
					planckh: 'ℎ',
					plankv: 'ℏ',
					plus: '+',
					plusacir: '⨣',
					plusb: '⊞',
					pluscir: '⨢',
					plusdo: '∔',
					plusdu: '⨥',
					pluse: '⩲',
					PlusMinus: '±',
					plusmn: '±',
					plussim: '⨦',
					plustwo: '⨧',
					pm: '±',
					Poincareplane: 'ℌ',
					pointint: '⨕',
					popf: '𝕡',
					Popf: 'ℙ',
					pound: '£',
					pr: '≺',
					Pr: '⪻',
					prap: '⪷',
					prcue: '≼',
					pre: '⪯',
					prE: '⪳',
					prec: '≺',
					precapprox: '⪷',
					preccurlyeq: '≼',
					Precedes: '≺',
					PrecedesEqual: '⪯',
					PrecedesSlantEqual: '≼',
					PrecedesTilde: '≾',
					preceq: '⪯',
					precnapprox: '⪹',
					precneqq: '⪵',
					precnsim: '⋨',
					precsim: '≾',
					prime: '′',
					Prime: '″',
					primes: 'ℙ',
					prnap: '⪹',
					prnE: '⪵',
					prnsim: '⋨',
					prod: '∏',
					Product: '∏',
					profalar: '⌮',
					profline: '⌒',
					profsurf: '⌓',
					prop: '∝',
					Proportion: '∷',
					Proportional: '∝',
					propto: '∝',
					prsim: '≾',
					prurel: '⊰',
					pscr: '𝓅',
					Pscr: '𝒫',
					psi: 'ψ',
					Psi: 'Ψ',
					puncsp: ' ',
					qfr: '𝔮',
					Qfr: '𝔔',
					qint: '⨌',
					qopf: '𝕢',
					Qopf: 'ℚ',
					qprime: '⁗',
					qscr: '𝓆',
					Qscr: '𝒬',
					quaternions: 'ℍ',
					quatint: '⨖',
					quest: '?',
					questeq: '≟',
					quot: '"',
					QUOT: '"',
					rAarr: '⇛',
					race: '∽̱',
					racute: 'ŕ',
					Racute: 'Ŕ',
					radic: '√',
					raemptyv: '⦳',
					rang: '⟩',
					Rang: '⟫',
					rangd: '⦒',
					range: '⦥',
					rangle: '⟩',
					raquo: '»',
					rarr: '→',
					rArr: '⇒',
					Rarr: '↠',
					rarrap: '⥵',
					rarrb: '⇥',
					rarrbfs: '⤠',
					rarrc: '⤳',
					rarrfs: '⤞',
					rarrhk: '↪',
					rarrlp: '↬',
					rarrpl: '⥅',
					rarrsim: '⥴',
					rarrtl: '↣',
					Rarrtl: '⤖',
					rarrw: '↝',
					ratail: '⤚',
					rAtail: '⤜',
					ratio: '∶',
					rationals: 'ℚ',
					rbarr: '⤍',
					rBarr: '⤏',
					RBarr: '⤐',
					rbbrk: '❳',
					rbrace: '}',
					rbrack: ']',
					rbrke: '⦌',
					rbrksld: '⦎',
					rbrkslu: '⦐',
					rcaron: 'ř',
					Rcaron: 'Ř',
					rcedil: 'ŗ',
					Rcedil: 'Ŗ',
					rceil: '⌉',
					rcub: '}',
					rcy: 'р',
					Rcy: 'Р',
					rdca: '⤷',
					rdldhar: '⥩',
					rdquo: '”',
					rdquor: '”',
					rdsh: '↳',
					Re: 'ℜ',
					real: 'ℜ',
					realine: 'ℛ',
					realpart: 'ℜ',
					reals: 'ℝ',
					rect: '▭',
					reg: '®',
					REG: '®',
					ReverseElement: '∋',
					ReverseEquilibrium: '⇋',
					ReverseUpEquilibrium: '⥯',
					rfisht: '⥽',
					rfloor: '⌋',
					rfr: '𝔯',
					Rfr: 'ℜ',
					rHar: '⥤',
					rhard: '⇁',
					rharu: '⇀',
					rharul: '⥬',
					rho: 'ρ',
					Rho: 'Ρ',
					rhov: 'ϱ',
					RightAngleBracket: '⟩',
					rightarrow: '→',
					Rightarrow: '⇒',
					RightArrow: '→',
					RightArrowBar: '⇥',
					RightArrowLeftArrow: '⇄',
					rightarrowtail: '↣',
					RightCeiling: '⌉',
					RightDoubleBracket: '⟧',
					RightDownTeeVector: '⥝',
					RightDownVector: '⇂',
					RightDownVectorBar: '⥕',
					RightFloor: '⌋',
					rightharpoondown: '⇁',
					rightharpoonup: '⇀',
					rightleftarrows: '⇄',
					rightleftharpoons: '⇌',
					rightrightarrows: '⇉',
					rightsquigarrow: '↝',
					RightTee: '⊢',
					RightTeeArrow: '↦',
					RightTeeVector: '⥛',
					rightthreetimes: '⋌',
					RightTriangle: '⊳',
					RightTriangleBar: '⧐',
					RightTriangleEqual: '⊵',
					RightUpDownVector: '⥏',
					RightUpTeeVector: '⥜',
					RightUpVector: '↾',
					RightUpVectorBar: '⥔',
					RightVector: '⇀',
					RightVectorBar: '⥓',
					ring: '˚',
					risingdotseq: '≓',
					rlarr: '⇄',
					rlhar: '⇌',
					rlm: '‏',
					rmoust: '⎱',
					rmoustache: '⎱',
					rnmid: '⫮',
					roang: '⟭',
					roarr: '⇾',
					robrk: '⟧',
					ropar: '⦆',
					ropf: '𝕣',
					Ropf: 'ℝ',
					roplus: '⨮',
					rotimes: '⨵',
					RoundImplies: '⥰',
					rpar: ')',
					rpargt: '⦔',
					rppolint: '⨒',
					rrarr: '⇉',
					Rrightarrow: '⇛',
					rsaquo: '›',
					rscr: '𝓇',
					Rscr: 'ℛ',
					rsh: '↱',
					Rsh: '↱',
					rsqb: ']',
					rsquo: '’',
					rsquor: '’',
					rthree: '⋌',
					rtimes: '⋊',
					rtri: '▹',
					rtrie: '⊵',
					rtrif: '▸',
					rtriltri: '⧎',
					RuleDelayed: '⧴',
					ruluhar: '⥨',
					rx: '℞',
					sacute: 'ś',
					Sacute: 'Ś',
					sbquo: '‚',
					sc: '≻',
					Sc: '⪼',
					scap: '⪸',
					scaron: 'š',
					Scaron: 'Š',
					sccue: '≽',
					sce: '⪰',
					scE: '⪴',
					scedil: 'ş',
					Scedil: 'Ş',
					scirc: 'ŝ',
					Scirc: 'Ŝ',
					scnap: '⪺',
					scnE: '⪶',
					scnsim: '⋩',
					scpolint: '⨓',
					scsim: '≿',
					scy: 'с',
					Scy: 'С',
					sdot: '⋅',
					sdotb: '⊡',
					sdote: '⩦',
					searhk: '⤥',
					searr: '↘',
					seArr: '⇘',
					searrow: '↘',
					sect: '§',
					semi: ';',
					seswar: '⤩',
					setminus: '∖',
					setmn: '∖',
					sext: '✶',
					sfr: '𝔰',
					Sfr: '𝔖',
					sfrown: '⌢',
					sharp: '♯',
					shchcy: 'щ',
					SHCHcy: 'Щ',
					shcy: 'ш',
					SHcy: 'Ш',
					ShortDownArrow: '↓',
					ShortLeftArrow: '←',
					shortmid: '∣',
					shortparallel: '∥',
					ShortRightArrow: '→',
					ShortUpArrow: '↑',
					shy: '­',
					sigma: 'σ',
					Sigma: 'Σ',
					sigmaf: 'ς',
					sigmav: 'ς',
					sim: '∼',
					simdot: '⩪',
					sime: '≃',
					simeq: '≃',
					simg: '⪞',
					simgE: '⪠',
					siml: '⪝',
					simlE: '⪟',
					simne: '≆',
					simplus: '⨤',
					simrarr: '⥲',
					slarr: '←',
					SmallCircle: '∘',
					smallsetminus: '∖',
					smashp: '⨳',
					smeparsl: '⧤',
					smid: '∣',
					smile: '⌣',
					smt: '⪪',
					smte: '⪬',
					smtes: '⪬︀',
					softcy: 'ь',
					SOFTcy: 'Ь',
					sol: '/',
					solb: '⧄',
					solbar: '⌿',
					sopf: '𝕤',
					Sopf: '𝕊',
					spades: '♠',
					spadesuit: '♠',
					spar: '∥',
					sqcap: '⊓',
					sqcaps: '⊓︀',
					sqcup: '⊔',
					sqcups: '⊔︀',
					Sqrt: '√',
					sqsub: '⊏',
					sqsube: '⊑',
					sqsubset: '⊏',
					sqsubseteq: '⊑',
					sqsup: '⊐',
					sqsupe: '⊒',
					sqsupset: '⊐',
					sqsupseteq: '⊒',
					squ: '□',
					square: '□',
					Square: '□',
					SquareIntersection: '⊓',
					SquareSubset: '⊏',
					SquareSubsetEqual: '⊑',
					SquareSuperset: '⊐',
					SquareSupersetEqual: '⊒',
					SquareUnion: '⊔',
					squarf: '▪',
					squf: '▪',
					srarr: '→',
					sscr: '𝓈',
					Sscr: '𝒮',
					ssetmn: '∖',
					ssmile: '⌣',
					sstarf: '⋆',
					star: '☆',
					Star: '⋆',
					starf: '★',
					straightepsilon: 'ϵ',
					straightphi: 'ϕ',
					strns: '¯',
					sub: '⊂',
					Sub: '⋐',
					subdot: '⪽',
					sube: '⊆',
					subE: '⫅',
					subedot: '⫃',
					submult: '⫁',
					subne: '⊊',
					subnE: '⫋',
					subplus: '⪿',
					subrarr: '⥹',
					subset: '⊂',
					Subset: '⋐',
					subseteq: '⊆',
					subseteqq: '⫅',
					SubsetEqual: '⊆',
					subsetneq: '⊊',
					subsetneqq: '⫋',
					subsim: '⫇',
					subsub: '⫕',
					subsup: '⫓',
					succ: '≻',
					succapprox: '⪸',
					succcurlyeq: '≽',
					Succeeds: '≻',
					SucceedsEqual: '⪰',
					SucceedsSlantEqual: '≽',
					SucceedsTilde: '≿',
					succeq: '⪰',
					succnapprox: '⪺',
					succneqq: '⪶',
					succnsim: '⋩',
					succsim: '≿',
					SuchThat: '∋',
					sum: '∑',
					Sum: '∑',
					sung: '♪',
					sup: '⊃',
					Sup: '⋑',
					sup1: '¹',
					sup2: '²',
					sup3: '³',
					supdot: '⪾',
					supdsub: '⫘',
					supe: '⊇',
					supE: '⫆',
					supedot: '⫄',
					Superset: '⊃',
					SupersetEqual: '⊇',
					suphsol: '⟉',
					suphsub: '⫗',
					suplarr: '⥻',
					supmult: '⫂',
					supne: '⊋',
					supnE: '⫌',
					supplus: '⫀',
					supset: '⊃',
					Supset: '⋑',
					supseteq: '⊇',
					supseteqq: '⫆',
					supsetneq: '⊋',
					supsetneqq: '⫌',
					supsim: '⫈',
					supsub: '⫔',
					supsup: '⫖',
					swarhk: '⤦',
					swarr: '↙',
					swArr: '⇙',
					swarrow: '↙',
					swnwar: '⤪',
					szlig: 'ß',
					Tab: '\t',
					target: '⌖',
					tau: 'τ',
					Tau: 'Τ',
					tbrk: '⎴',
					tcaron: 'ť',
					Tcaron: 'Ť',
					tcedil: 'ţ',
					Tcedil: 'Ţ',
					tcy: 'т',
					Tcy: 'Т',
					tdot: '⃛',
					telrec: '⌕',
					tfr: '𝔱',
					Tfr: '𝔗',
					there4: '∴',
					therefore: '∴',
					Therefore: '∴',
					theta: 'θ',
					Theta: 'Θ',
					thetasym: 'ϑ',
					thetav: 'ϑ',
					thickapprox: '≈',
					thicksim: '∼',
					ThickSpace: '  ',
					thinsp: ' ',
					ThinSpace: ' ',
					thkap: '≈',
					thksim: '∼',
					thorn: 'þ',
					THORN: 'Þ',
					tilde: '˜',
					Tilde: '∼',
					TildeEqual: '≃',
					TildeFullEqual: '≅',
					TildeTilde: '≈',
					times: '×',
					timesb: '⊠',
					timesbar: '⨱',
					timesd: '⨰',
					tint: '∭',
					toea: '⤨',
					top: '⊤',
					topbot: '⌶',
					topcir: '⫱',
					topf: '𝕥',
					Topf: '𝕋',
					topfork: '⫚',
					tosa: '⤩',
					tprime: '‴',
					trade: '™',
					TRADE: '™',
					triangle: '▵',
					triangledown: '▿',
					triangleleft: '◃',
					trianglelefteq: '⊴',
					triangleq: '≜',
					triangleright: '▹',
					trianglerighteq: '⊵',
					tridot: '◬',
					trie: '≜',
					triminus: '⨺',
					TripleDot: '⃛',
					triplus: '⨹',
					trisb: '⧍',
					tritime: '⨻',
					trpezium: '⏢',
					tscr: '𝓉',
					Tscr: '𝒯',
					tscy: 'ц',
					TScy: 'Ц',
					tshcy: 'ћ',
					TSHcy: 'Ћ',
					tstrok: 'ŧ',
					Tstrok: 'Ŧ',
					twixt: '≬',
					twoheadleftarrow: '↞',
					twoheadrightarrow: '↠',
					uacute: 'ú',
					Uacute: 'Ú',
					uarr: '↑',
					uArr: '⇑',
					Uarr: '↟',
					Uarrocir: '⥉',
					ubrcy: 'ў',
					Ubrcy: 'Ў',
					ubreve: 'ŭ',
					Ubreve: 'Ŭ',
					ucirc: 'û',
					Ucirc: 'Û',
					ucy: 'у',
					Ucy: 'У',
					udarr: '⇅',
					udblac: 'ű',
					Udblac: 'Ű',
					udhar: '⥮',
					ufisht: '⥾',
					ufr: '𝔲',
					Ufr: '𝔘',
					ugrave: 'ù',
					Ugrave: 'Ù',
					uHar: '⥣',
					uharl: '↿',
					uharr: '↾',
					uhblk: '▀',
					ulcorn: '⌜',
					ulcorner: '⌜',
					ulcrop: '⌏',
					ultri: '◸',
					umacr: 'ū',
					Umacr: 'Ū',
					uml: '¨',
					UnderBar: '_',
					UnderBrace: '⏟',
					UnderBracket: '⎵',
					UnderParenthesis: '⏝',
					Union: '⋃',
					UnionPlus: '⊎',
					uogon: 'ų',
					Uogon: 'Ų',
					uopf: '𝕦',
					Uopf: '𝕌',
					uparrow: '↑',
					Uparrow: '⇑',
					UpArrow: '↑',
					UpArrowBar: '⤒',
					UpArrowDownArrow: '⇅',
					updownarrow: '↕',
					Updownarrow: '⇕',
					UpDownArrow: '↕',
					UpEquilibrium: '⥮',
					upharpoonleft: '↿',
					upharpoonright: '↾',
					uplus: '⊎',
					UpperLeftArrow: '↖',
					UpperRightArrow: '↗',
					upsi: 'υ',
					Upsi: 'ϒ',
					upsih: 'ϒ',
					upsilon: 'υ',
					Upsilon: 'Υ',
					UpTee: '⊥',
					UpTeeArrow: '↥',
					upuparrows: '⇈',
					urcorn: '⌝',
					urcorner: '⌝',
					urcrop: '⌎',
					uring: 'ů',
					Uring: 'Ů',
					urtri: '◹',
					uscr: '𝓊',
					Uscr: '𝒰',
					utdot: '⋰',
					utilde: 'ũ',
					Utilde: 'Ũ',
					utri: '▵',
					utrif: '▴',
					uuarr: '⇈',
					uuml: 'ü',
					Uuml: 'Ü',
					uwangle: '⦧',
					vangrt: '⦜',
					varepsilon: 'ϵ',
					varkappa: 'ϰ',
					varnothing: '∅',
					varphi: 'ϕ',
					varpi: 'ϖ',
					varpropto: '∝',
					varr: '↕',
					vArr: '⇕',
					varrho: 'ϱ',
					varsigma: 'ς',
					varsubsetneq: '⊊︀',
					varsubsetneqq: '⫋︀',
					varsupsetneq: '⊋︀',
					varsupsetneqq: '⫌︀',
					vartheta: 'ϑ',
					vartriangleleft: '⊲',
					vartriangleright: '⊳',
					vBar: '⫨',
					Vbar: '⫫',
					vBarv: '⫩',
					vcy: 'в',
					Vcy: 'В',
					vdash: '⊢',
					vDash: '⊨',
					Vdash: '⊩',
					VDash: '⊫',
					Vdashl: '⫦',
					vee: '∨',
					Vee: '⋁',
					veebar: '⊻',
					veeeq: '≚',
					vellip: '⋮',
					verbar: '|',
					Verbar: '‖',
					vert: '|',
					Vert: '‖',
					VerticalBar: '∣',
					VerticalLine: '|',
					VerticalSeparator: '❘',
					VerticalTilde: '≀',
					VeryThinSpace: ' ',
					vfr: '𝔳',
					Vfr: '𝔙',
					vltri: '⊲',
					vnsub: '⊂⃒',
					vnsup: '⊃⃒',
					vopf: '𝕧',
					Vopf: '𝕍',
					vprop: '∝',
					vrtri: '⊳',
					vscr: '𝓋',
					Vscr: '𝒱',
					vsubne: '⊊︀',
					vsubnE: '⫋︀',
					vsupne: '⊋︀',
					vsupnE: '⫌︀',
					Vvdash: '⊪',
					vzigzag: '⦚',
					wcirc: 'ŵ',
					Wcirc: 'Ŵ',
					wedbar: '⩟',
					wedge: '∧',
					Wedge: '⋀',
					wedgeq: '≙',
					weierp: '℘',
					wfr: '𝔴',
					Wfr: '𝔚',
					wopf: '𝕨',
					Wopf: '𝕎',
					wp: '℘',
					wr: '≀',
					wreath: '≀',
					wscr: '𝓌',
					Wscr: '𝒲',
					xcap: '⋂',
					xcirc: '◯',
					xcup: '⋃',
					xdtri: '▽',
					xfr: '𝔵',
					Xfr: '𝔛',
					xharr: '⟷',
					xhArr: '⟺',
					xi: 'ξ',
					Xi: 'Ξ',
					xlarr: '⟵',
					xlArr: '⟸',
					xmap: '⟼',
					xnis: '⋻',
					xodot: '⨀',
					xopf: '𝕩',
					Xopf: '𝕏',
					xoplus: '⨁',
					xotime: '⨂',
					xrarr: '⟶',
					xrArr: '⟹',
					xscr: '𝓍',
					Xscr: '𝒳',
					xsqcup: '⨆',
					xuplus: '⨄',
					xutri: '△',
					xvee: '⋁',
					xwedge: '⋀',
					yacute: 'ý',
					Yacute: 'Ý',
					yacy: 'я',
					YAcy: 'Я',
					ycirc: 'ŷ',
					Ycirc: 'Ŷ',
					ycy: 'ы',
					Ycy: 'Ы',
					yen: '¥',
					yfr: '𝔶',
					Yfr: '𝔜',
					yicy: 'ї',
					YIcy: 'Ї',
					yopf: '𝕪',
					Yopf: '𝕐',
					yscr: '𝓎',
					Yscr: '𝒴',
					yucy: 'ю',
					YUcy: 'Ю',
					yuml: 'ÿ',
					Yuml: 'Ÿ',
					zacute: 'ź',
					Zacute: 'Ź',
					zcaron: 'ž',
					Zcaron: 'Ž',
					zcy: 'з',
					Zcy: 'З',
					zdot: 'ż',
					Zdot: 'Ż',
					zeetrf: 'ℨ',
					ZeroWidthSpace: '​',
					zeta: 'ζ',
					Zeta: 'Ζ',
					zfr: '𝔷',
					Zfr: 'ℨ',
					zhcy: 'ж',
					ZHcy: 'Ж',
					zigrarr: '⇝',
					zopf: '𝕫',
					Zopf: 'ℤ',
					zscr: '𝓏',
					Zscr: '𝒵',
					zwj: '‍',
					zwnj: '‌',
				},
				b = {
					aacute: 'á',
					Aacute: 'Á',
					acirc: 'â',
					Acirc: 'Â',
					acute: '´',
					aelig: 'æ',
					AElig: 'Æ',
					agrave: 'à',
					Agrave: 'À',
					amp: '&',
					AMP: '&',
					aring: 'å',
					Aring: 'Å',
					atilde: 'ã',
					Atilde: 'Ã',
					auml: 'ä',
					Auml: 'Ä',
					brvbar: '¦',
					ccedil: 'ç',
					Ccedil: 'Ç',
					cedil: '¸',
					cent: '¢',
					copy: '©',
					COPY: '©',
					curren: '¤',
					deg: '°',
					divide: '÷',
					eacute: 'é',
					Eacute: 'É',
					ecirc: 'ê',
					Ecirc: 'Ê',
					egrave: 'è',
					Egrave: 'È',
					eth: 'ð',
					ETH: 'Ð',
					euml: 'ë',
					Euml: 'Ë',
					frac12: '½',
					frac14: '¼',
					frac34: '¾',
					gt: '>',
					GT: '>',
					iacute: 'í',
					Iacute: 'Í',
					icirc: 'î',
					Icirc: 'Î',
					iexcl: '¡',
					igrave: 'ì',
					Igrave: 'Ì',
					iquest: '¿',
					iuml: 'ï',
					Iuml: 'Ï',
					laquo: '«',
					lt: '<',
					LT: '<',
					macr: '¯',
					micro: 'µ',
					middot: '·',
					nbsp: ' ',
					not: '¬',
					ntilde: 'ñ',
					Ntilde: 'Ñ',
					oacute: 'ó',
					Oacute: 'Ó',
					ocirc: 'ô',
					Ocirc: 'Ô',
					ograve: 'ò',
					Ograve: 'Ò',
					ordf: 'ª',
					ordm: 'º',
					oslash: 'ø',
					Oslash: 'Ø',
					otilde: 'õ',
					Otilde: 'Õ',
					ouml: 'ö',
					Ouml: 'Ö',
					para: '¶',
					plusmn: '±',
					pound: '£',
					quot: '"',
					QUOT: '"',
					raquo: '»',
					reg: '®',
					REG: '®',
					sect: '§',
					shy: '­',
					sup1: '¹',
					sup2: '²',
					sup3: '³',
					szlig: 'ß',
					thorn: 'þ',
					THORN: 'Þ',
					times: '×',
					uacute: 'ú',
					Uacute: 'Ú',
					ucirc: 'û',
					Ucirc: 'Û',
					ugrave: 'ù',
					Ugrave: 'Ù',
					uml: '¨',
					uuml: 'ü',
					Uuml: 'Ü',
					yacute: 'ý',
					Yacute: 'Ý',
					yen: '¥',
					yuml: 'ÿ',
				},
				v = {
					0: '�',
					128: '€',
					130: '‚',
					131: 'ƒ',
					132: '„',
					133: '…',
					134: '†',
					135: '‡',
					136: 'ˆ',
					137: '‰',
					138: 'Š',
					139: '‹',
					140: 'Œ',
					142: 'Ž',
					145: '‘',
					146: '’',
					147: '“',
					148: '”',
					149: '•',
					150: '–',
					151: '—',
					152: '˜',
					153: '™',
					154: 'š',
					155: '›',
					156: 'œ',
					158: 'ž',
					159: 'Ÿ',
				},
				y = [
					1, 2, 3, 4, 5, 6, 7, 8, 11, 13, 14, 15, 16, 17, 18, 19, 20,
					21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 127, 128, 129,
					130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141,
					142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153,
					154, 155, 156, 157, 158, 159, 64976, 64977, 64978, 64979,
					64980, 64981, 64982, 64983, 64984, 64985, 64986, 64987,
					64988, 64989, 64990, 64991, 64992, 64993, 64994, 64995,
					64996, 64997, 64998, 64999, 65e3, 65001, 65002, 65003,
					65004, 65005, 65006, 65007, 65534, 65535, 131070, 131071,
					196606, 196607, 262142, 262143, 327678, 327679, 393214,
					393215, 458750, 458751, 524286, 524287, 589822, 589823,
					655358, 655359, 720894, 720895, 786430, 786431, 851966,
					851967, 917502, 917503, 983038, 983039, 1048574, 1048575,
					1114110, 1114111,
				],
				w = String.fromCharCode,
				x = {}.hasOwnProperty,
				S = function (e, t) {
					return x.call(e, t);
				},
				E = function (e, t) {
					if (!e) return t;
					var r,
						n = {};
					for (r in t) n[r] = S(e, r) ? e[r] : t[r];
					return n;
				},
				q = function (e, t) {
					var r = '';
					return (e >= 55296 && e <= 57343) || e > 1114111
						? (t &&
								A(
									'character reference outside the permissible Unicode range'
								),
						  '�')
						: S(v, e)
						? (t && A('disallowed character reference'), v[e])
						: (t &&
								(function (e, t) {
									for (var r = -1, n = e.length; ++r < n; )
										if (e[r] == t) return !0;
									return !1;
								})(y, e) &&
								A('disallowed character reference'),
						  e > 65535 &&
								((r += w(
									(((e -= 65536) >>> 10) & 1023) | 55296
								)),
								(e = 56320 | (1023 & e))),
						  (r += w(e)));
				},
				D = function (e) {
					return '&#x' + e.toString(16).toUpperCase() + ';';
				},
				T = function (e) {
					return '&#' + e + ';';
				},
				A = function (e) {
					throw Error('Parse error: ' + e);
				},
				L = function (e, t) {
					(t = E(t, L.options)).strict &&
						h.test(e) &&
						A('forbidden code point');
					var r = t.encodeEverything,
						n = t.useNamedReferences,
						a = t.allowUnsafeSymbols,
						o = t.decimal ? T : D,
						d = function (e) {
							return o(e.charCodeAt(0));
						};
					return (
						r
							? ((e = e.replace(s, function (e) {
									return n && S(u, e)
										? '&' + u[e] + ';'
										: d(e);
							  })),
							  n &&
									(e = e
										.replace(/&gt;\u20D2/g, '&nvgt;')
										.replace(/&lt;\u20D2/g, '&nvlt;')
										.replace(/&#x66;&#x6A;/g, '&fjlig;')),
							  n &&
									(e = e.replace(c, function (e) {
										return '&' + u[e] + ';';
									})))
							: n
							? (a ||
									(e = e.replace(p, function (e) {
										return '&' + u[e] + ';';
									})),
							  (e = (e = e
									.replace(/&gt;\u20D2/g, '&nvgt;')
									.replace(/&lt;\u20D2/g, '&nvlt;')).replace(
									c,
									function (e) {
										return '&' + u[e] + ';';
									}
							  )))
							: a || (e = e.replace(p, d)),
						e
							.replace(i, function (e) {
								var t = e.charCodeAt(0),
									r = e.charCodeAt(1);
								return o(
									1024 * (t - 55296) + r - 56320 + 65536
								);
							})
							.replace(l, d)
					);
				};
			L.options = {
				allowUnsafeSymbols: !1,
				encodeEverything: !1,
				strict: !1,
				useNamedReferences: !1,
				decimal: !1,
			};
			var C = function (e, t) {
				var r = (t = E(t, C.options)).strict;
				return (
					r && f.test(e) && A('malformed character reference'),
					e.replace(m, function (e, n, a, o, i, s, l, c, u) {
						var p, d, f, h, m, v;
						return n
							? g[(m = n)]
							: a
							? ((m = a),
							  (v = o) && t.isAttributeValue
									? (r &&
											'=' == v &&
											A(
												'`&` did not start a character reference'
											),
									  e)
									: (r &&
											A(
												'named character reference was not terminated by a semicolon'
											),
									  b[m] + (v || '')))
							: i
							? ((f = i),
							  (d = s),
							  r &&
									!d &&
									A(
										'character reference was not terminated by a semicolon'
									),
							  (p = parseInt(f, 10)),
							  q(p, r))
							: l
							? ((h = l),
							  (d = c),
							  r &&
									!d &&
									A(
										'character reference was not terminated by a semicolon'
									),
							  (p = parseInt(h, 16)),
							  q(p, r))
							: (r &&
									A(
										'named character reference was not terminated by a semicolon'
									),
							  e);
					})
				);
			};
			C.options = { isAttributeValue: !1, strict: !1 };
			var _ = {
				version: '1.2.0',
				encode: L,
				decode: C,
				escape: function (e) {
					return e.replace(p, function (e) {
						return d[e];
					});
				},
				unescape: C,
			};
			if (n && !n.nodeType)
				if (a) a.exports = _;
				else for (var O in _) S(_, O) && (n[O] = _[O]);
			else r.he = _;
		})(k);
	})(Gr, Gr.exports);
	var Wr = {},
		zr = {},
		$r = {},
		Jr = {},
		Yr =
			(k && k.__importDefault) ||
			function (e) {
				return e && e.__esModule ? e : { default: e };
			};
	Object.defineProperty(Jr, '__esModule', { value: !0 });
	var Xr = Yr({
			0: 65533,
			128: 8364,
			130: 8218,
			131: 402,
			132: 8222,
			133: 8230,
			134: 8224,
			135: 8225,
			136: 710,
			137: 8240,
			138: 352,
			139: 8249,
			140: 338,
			142: 381,
			145: 8216,
			146: 8217,
			147: 8220,
			148: 8221,
			149: 8226,
			150: 8211,
			151: 8212,
			152: 732,
			153: 8482,
			154: 353,
			155: 8250,
			156: 339,
			158: 382,
			159: 376,
		}),
		Zr =
			String.fromCodePoint ||
			function (e) {
				var t = '';
				return (
					e > 65535 &&
						((e -= 65536),
						(t += String.fromCharCode(((e >>> 10) & 1023) | 55296)),
						(e = 56320 | (1023 & e))),
					(t += String.fromCharCode(e))
				);
			};
	Jr.default = function (e) {
		return (e >= 55296 && e <= 57343) || e > 1114111
			? '�'
			: (e in Xr.default && (e = Xr.default[e]), Zr(e));
	};
	var Qr = {
		Aacute: 'Á',
		aacute: 'á',
		Abreve: 'Ă',
		abreve: 'ă',
		ac: '∾',
		acd: '∿',
		acE: '∾̳',
		Acirc: 'Â',
		acirc: 'â',
		acute: '´',
		Acy: 'А',
		acy: 'а',
		AElig: 'Æ',
		aelig: 'æ',
		af: '⁡',
		Afr: '𝔄',
		afr: '𝔞',
		Agrave: 'À',
		agrave: 'à',
		alefsym: 'ℵ',
		aleph: 'ℵ',
		Alpha: 'Α',
		alpha: 'α',
		Amacr: 'Ā',
		amacr: 'ā',
		amalg: '⨿',
		amp: '&',
		AMP: '&',
		andand: '⩕',
		And: '⩓',
		and: '∧',
		andd: '⩜',
		andslope: '⩘',
		andv: '⩚',
		ang: '∠',
		ange: '⦤',
		angle: '∠',
		angmsdaa: '⦨',
		angmsdab: '⦩',
		angmsdac: '⦪',
		angmsdad: '⦫',
		angmsdae: '⦬',
		angmsdaf: '⦭',
		angmsdag: '⦮',
		angmsdah: '⦯',
		angmsd: '∡',
		angrt: '∟',
		angrtvb: '⊾',
		angrtvbd: '⦝',
		angsph: '∢',
		angst: 'Å',
		angzarr: '⍼',
		Aogon: 'Ą',
		aogon: 'ą',
		Aopf: '𝔸',
		aopf: '𝕒',
		apacir: '⩯',
		ap: '≈',
		apE: '⩰',
		ape: '≊',
		apid: '≋',
		apos: "'",
		ApplyFunction: '⁡',
		approx: '≈',
		approxeq: '≊',
		Aring: 'Å',
		aring: 'å',
		Ascr: '𝒜',
		ascr: '𝒶',
		Assign: '≔',
		ast: '*',
		asymp: '≈',
		asympeq: '≍',
		Atilde: 'Ã',
		atilde: 'ã',
		Auml: 'Ä',
		auml: 'ä',
		awconint: '∳',
		awint: '⨑',
		backcong: '≌',
		backepsilon: '϶',
		backprime: '‵',
		backsim: '∽',
		backsimeq: '⋍',
		Backslash: '∖',
		Barv: '⫧',
		barvee: '⊽',
		barwed: '⌅',
		Barwed: '⌆',
		barwedge: '⌅',
		bbrk: '⎵',
		bbrktbrk: '⎶',
		bcong: '≌',
		Bcy: 'Б',
		bcy: 'б',
		bdquo: '„',
		becaus: '∵',
		because: '∵',
		Because: '∵',
		bemptyv: '⦰',
		bepsi: '϶',
		bernou: 'ℬ',
		Bernoullis: 'ℬ',
		Beta: 'Β',
		beta: 'β',
		beth: 'ℶ',
		between: '≬',
		Bfr: '𝔅',
		bfr: '𝔟',
		bigcap: '⋂',
		bigcirc: '◯',
		bigcup: '⋃',
		bigodot: '⨀',
		bigoplus: '⨁',
		bigotimes: '⨂',
		bigsqcup: '⨆',
		bigstar: '★',
		bigtriangledown: '▽',
		bigtriangleup: '△',
		biguplus: '⨄',
		bigvee: '⋁',
		bigwedge: '⋀',
		bkarow: '⤍',
		blacklozenge: '⧫',
		blacksquare: '▪',
		blacktriangle: '▴',
		blacktriangledown: '▾',
		blacktriangleleft: '◂',
		blacktriangleright: '▸',
		blank: '␣',
		blk12: '▒',
		blk14: '░',
		blk34: '▓',
		block: '█',
		bne: '=⃥',
		bnequiv: '≡⃥',
		bNot: '⫭',
		bnot: '⌐',
		Bopf: '𝔹',
		bopf: '𝕓',
		bot: '⊥',
		bottom: '⊥',
		bowtie: '⋈',
		boxbox: '⧉',
		boxdl: '┐',
		boxdL: '╕',
		boxDl: '╖',
		boxDL: '╗',
		boxdr: '┌',
		boxdR: '╒',
		boxDr: '╓',
		boxDR: '╔',
		boxh: '─',
		boxH: '═',
		boxhd: '┬',
		boxHd: '╤',
		boxhD: '╥',
		boxHD: '╦',
		boxhu: '┴',
		boxHu: '╧',
		boxhU: '╨',
		boxHU: '╩',
		boxminus: '⊟',
		boxplus: '⊞',
		boxtimes: '⊠',
		boxul: '┘',
		boxuL: '╛',
		boxUl: '╜',
		boxUL: '╝',
		boxur: '└',
		boxuR: '╘',
		boxUr: '╙',
		boxUR: '╚',
		boxv: '│',
		boxV: '║',
		boxvh: '┼',
		boxvH: '╪',
		boxVh: '╫',
		boxVH: '╬',
		boxvl: '┤',
		boxvL: '╡',
		boxVl: '╢',
		boxVL: '╣',
		boxvr: '├',
		boxvR: '╞',
		boxVr: '╟',
		boxVR: '╠',
		bprime: '‵',
		breve: '˘',
		Breve: '˘',
		brvbar: '¦',
		bscr: '𝒷',
		Bscr: 'ℬ',
		bsemi: '⁏',
		bsim: '∽',
		bsime: '⋍',
		bsolb: '⧅',
		bsol: '\\',
		bsolhsub: '⟈',
		bull: '•',
		bullet: '•',
		bump: '≎',
		bumpE: '⪮',
		bumpe: '≏',
		Bumpeq: '≎',
		bumpeq: '≏',
		Cacute: 'Ć',
		cacute: 'ć',
		capand: '⩄',
		capbrcup: '⩉',
		capcap: '⩋',
		cap: '∩',
		Cap: '⋒',
		capcup: '⩇',
		capdot: '⩀',
		CapitalDifferentialD: 'ⅅ',
		caps: '∩︀',
		caret: '⁁',
		caron: 'ˇ',
		Cayleys: 'ℭ',
		ccaps: '⩍',
		Ccaron: 'Č',
		ccaron: 'č',
		Ccedil: 'Ç',
		ccedil: 'ç',
		Ccirc: 'Ĉ',
		ccirc: 'ĉ',
		Cconint: '∰',
		ccups: '⩌',
		ccupssm: '⩐',
		Cdot: 'Ċ',
		cdot: 'ċ',
		cedil: '¸',
		Cedilla: '¸',
		cemptyv: '⦲',
		cent: '¢',
		centerdot: '·',
		CenterDot: '·',
		cfr: '𝔠',
		Cfr: 'ℭ',
		CHcy: 'Ч',
		chcy: 'ч',
		check: '✓',
		checkmark: '✓',
		Chi: 'Χ',
		chi: 'χ',
		circ: 'ˆ',
		circeq: '≗',
		circlearrowleft: '↺',
		circlearrowright: '↻',
		circledast: '⊛',
		circledcirc: '⊚',
		circleddash: '⊝',
		CircleDot: '⊙',
		circledR: '®',
		circledS: 'Ⓢ',
		CircleMinus: '⊖',
		CirclePlus: '⊕',
		CircleTimes: '⊗',
		cir: '○',
		cirE: '⧃',
		cire: '≗',
		cirfnint: '⨐',
		cirmid: '⫯',
		cirscir: '⧂',
		ClockwiseContourIntegral: '∲',
		CloseCurlyDoubleQuote: '”',
		CloseCurlyQuote: '’',
		clubs: '♣',
		clubsuit: '♣',
		colon: ':',
		Colon: '∷',
		Colone: '⩴',
		colone: '≔',
		coloneq: '≔',
		comma: ',',
		commat: '@',
		comp: '∁',
		compfn: '∘',
		complement: '∁',
		complexes: 'ℂ',
		cong: '≅',
		congdot: '⩭',
		Congruent: '≡',
		conint: '∮',
		Conint: '∯',
		ContourIntegral: '∮',
		copf: '𝕔',
		Copf: 'ℂ',
		coprod: '∐',
		Coproduct: '∐',
		copy: '©',
		COPY: '©',
		copysr: '℗',
		CounterClockwiseContourIntegral: '∳',
		crarr: '↵',
		cross: '✗',
		Cross: '⨯',
		Cscr: '𝒞',
		cscr: '𝒸',
		csub: '⫏',
		csube: '⫑',
		csup: '⫐',
		csupe: '⫒',
		ctdot: '⋯',
		cudarrl: '⤸',
		cudarrr: '⤵',
		cuepr: '⋞',
		cuesc: '⋟',
		cularr: '↶',
		cularrp: '⤽',
		cupbrcap: '⩈',
		cupcap: '⩆',
		CupCap: '≍',
		cup: '∪',
		Cup: '⋓',
		cupcup: '⩊',
		cupdot: '⊍',
		cupor: '⩅',
		cups: '∪︀',
		curarr: '↷',
		curarrm: '⤼',
		curlyeqprec: '⋞',
		curlyeqsucc: '⋟',
		curlyvee: '⋎',
		curlywedge: '⋏',
		curren: '¤',
		curvearrowleft: '↶',
		curvearrowright: '↷',
		cuvee: '⋎',
		cuwed: '⋏',
		cwconint: '∲',
		cwint: '∱',
		cylcty: '⌭',
		dagger: '†',
		Dagger: '‡',
		daleth: 'ℸ',
		darr: '↓',
		Darr: '↡',
		dArr: '⇓',
		dash: '‐',
		Dashv: '⫤',
		dashv: '⊣',
		dbkarow: '⤏',
		dblac: '˝',
		Dcaron: 'Ď',
		dcaron: 'ď',
		Dcy: 'Д',
		dcy: 'д',
		ddagger: '‡',
		ddarr: '⇊',
		DD: 'ⅅ',
		dd: 'ⅆ',
		DDotrahd: '⤑',
		ddotseq: '⩷',
		deg: '°',
		Del: '∇',
		Delta: 'Δ',
		delta: 'δ',
		demptyv: '⦱',
		dfisht: '⥿',
		Dfr: '𝔇',
		dfr: '𝔡',
		dHar: '⥥',
		dharl: '⇃',
		dharr: '⇂',
		DiacriticalAcute: '´',
		DiacriticalDot: '˙',
		DiacriticalDoubleAcute: '˝',
		DiacriticalGrave: '`',
		DiacriticalTilde: '˜',
		diam: '⋄',
		diamond: '⋄',
		Diamond: '⋄',
		diamondsuit: '♦',
		diams: '♦',
		die: '¨',
		DifferentialD: 'ⅆ',
		digamma: 'ϝ',
		disin: '⋲',
		div: '÷',
		divide: '÷',
		divideontimes: '⋇',
		divonx: '⋇',
		DJcy: 'Ђ',
		djcy: 'ђ',
		dlcorn: '⌞',
		dlcrop: '⌍',
		dollar: '$',
		Dopf: '𝔻',
		dopf: '𝕕',
		Dot: '¨',
		dot: '˙',
		DotDot: '⃜',
		doteq: '≐',
		doteqdot: '≑',
		DotEqual: '≐',
		dotminus: '∸',
		dotplus: '∔',
		dotsquare: '⊡',
		doublebarwedge: '⌆',
		DoubleContourIntegral: '∯',
		DoubleDot: '¨',
		DoubleDownArrow: '⇓',
		DoubleLeftArrow: '⇐',
		DoubleLeftRightArrow: '⇔',
		DoubleLeftTee: '⫤',
		DoubleLongLeftArrow: '⟸',
		DoubleLongLeftRightArrow: '⟺',
		DoubleLongRightArrow: '⟹',
		DoubleRightArrow: '⇒',
		DoubleRightTee: '⊨',
		DoubleUpArrow: '⇑',
		DoubleUpDownArrow: '⇕',
		DoubleVerticalBar: '∥',
		DownArrowBar: '⤓',
		downarrow: '↓',
		DownArrow: '↓',
		Downarrow: '⇓',
		DownArrowUpArrow: '⇵',
		DownBreve: '̑',
		downdownarrows: '⇊',
		downharpoonleft: '⇃',
		downharpoonright: '⇂',
		DownLeftRightVector: '⥐',
		DownLeftTeeVector: '⥞',
		DownLeftVectorBar: '⥖',
		DownLeftVector: '↽',
		DownRightTeeVector: '⥟',
		DownRightVectorBar: '⥗',
		DownRightVector: '⇁',
		DownTeeArrow: '↧',
		DownTee: '⊤',
		drbkarow: '⤐',
		drcorn: '⌟',
		drcrop: '⌌',
		Dscr: '𝒟',
		dscr: '𝒹',
		DScy: 'Ѕ',
		dscy: 'ѕ',
		dsol: '⧶',
		Dstrok: 'Đ',
		dstrok: 'đ',
		dtdot: '⋱',
		dtri: '▿',
		dtrif: '▾',
		duarr: '⇵',
		duhar: '⥯',
		dwangle: '⦦',
		DZcy: 'Џ',
		dzcy: 'џ',
		dzigrarr: '⟿',
		Eacute: 'É',
		eacute: 'é',
		easter: '⩮',
		Ecaron: 'Ě',
		ecaron: 'ě',
		Ecirc: 'Ê',
		ecirc: 'ê',
		ecir: '≖',
		ecolon: '≕',
		Ecy: 'Э',
		ecy: 'э',
		eDDot: '⩷',
		Edot: 'Ė',
		edot: 'ė',
		eDot: '≑',
		ee: 'ⅇ',
		efDot: '≒',
		Efr: '𝔈',
		efr: '𝔢',
		eg: '⪚',
		Egrave: 'È',
		egrave: 'è',
		egs: '⪖',
		egsdot: '⪘',
		el: '⪙',
		Element: '∈',
		elinters: '⏧',
		ell: 'ℓ',
		els: '⪕',
		elsdot: '⪗',
		Emacr: 'Ē',
		emacr: 'ē',
		empty: '∅',
		emptyset: '∅',
		EmptySmallSquare: '◻',
		emptyv: '∅',
		EmptyVerySmallSquare: '▫',
		emsp13: ' ',
		emsp14: ' ',
		emsp: ' ',
		ENG: 'Ŋ',
		eng: 'ŋ',
		ensp: ' ',
		Eogon: 'Ę',
		eogon: 'ę',
		Eopf: '𝔼',
		eopf: '𝕖',
		epar: '⋕',
		eparsl: '⧣',
		eplus: '⩱',
		epsi: 'ε',
		Epsilon: 'Ε',
		epsilon: 'ε',
		epsiv: 'ϵ',
		eqcirc: '≖',
		eqcolon: '≕',
		eqsim: '≂',
		eqslantgtr: '⪖',
		eqslantless: '⪕',
		Equal: '⩵',
		equals: '=',
		EqualTilde: '≂',
		equest: '≟',
		Equilibrium: '⇌',
		equiv: '≡',
		equivDD: '⩸',
		eqvparsl: '⧥',
		erarr: '⥱',
		erDot: '≓',
		escr: 'ℯ',
		Escr: 'ℰ',
		esdot: '≐',
		Esim: '⩳',
		esim: '≂',
		Eta: 'Η',
		eta: 'η',
		ETH: 'Ð',
		eth: 'ð',
		Euml: 'Ë',
		euml: 'ë',
		euro: '€',
		excl: '!',
		exist: '∃',
		Exists: '∃',
		expectation: 'ℰ',
		exponentiale: 'ⅇ',
		ExponentialE: 'ⅇ',
		fallingdotseq: '≒',
		Fcy: 'Ф',
		fcy: 'ф',
		female: '♀',
		ffilig: 'ﬃ',
		fflig: 'ﬀ',
		ffllig: 'ﬄ',
		Ffr: '𝔉',
		ffr: '𝔣',
		filig: 'ﬁ',
		FilledSmallSquare: '◼',
		FilledVerySmallSquare: '▪',
		fjlig: 'fj',
		flat: '♭',
		fllig: 'ﬂ',
		fltns: '▱',
		fnof: 'ƒ',
		Fopf: '𝔽',
		fopf: '𝕗',
		forall: '∀',
		ForAll: '∀',
		fork: '⋔',
		forkv: '⫙',
		Fouriertrf: 'ℱ',
		fpartint: '⨍',
		frac12: '½',
		frac13: '⅓',
		frac14: '¼',
		frac15: '⅕',
		frac16: '⅙',
		frac18: '⅛',
		frac23: '⅔',
		frac25: '⅖',
		frac34: '¾',
		frac35: '⅗',
		frac38: '⅜',
		frac45: '⅘',
		frac56: '⅚',
		frac58: '⅝',
		frac78: '⅞',
		frasl: '⁄',
		frown: '⌢',
		fscr: '𝒻',
		Fscr: 'ℱ',
		gacute: 'ǵ',
		Gamma: 'Γ',
		gamma: 'γ',
		Gammad: 'Ϝ',
		gammad: 'ϝ',
		gap: '⪆',
		Gbreve: 'Ğ',
		gbreve: 'ğ',
		Gcedil: 'Ģ',
		Gcirc: 'Ĝ',
		gcirc: 'ĝ',
		Gcy: 'Г',
		gcy: 'г',
		Gdot: 'Ġ',
		gdot: 'ġ',
		ge: '≥',
		gE: '≧',
		gEl: '⪌',
		gel: '⋛',
		geq: '≥',
		geqq: '≧',
		geqslant: '⩾',
		gescc: '⪩',
		ges: '⩾',
		gesdot: '⪀',
		gesdoto: '⪂',
		gesdotol: '⪄',
		gesl: '⋛︀',
		gesles: '⪔',
		Gfr: '𝔊',
		gfr: '𝔤',
		gg: '≫',
		Gg: '⋙',
		ggg: '⋙',
		gimel: 'ℷ',
		GJcy: 'Ѓ',
		gjcy: 'ѓ',
		gla: '⪥',
		gl: '≷',
		glE: '⪒',
		glj: '⪤',
		gnap: '⪊',
		gnapprox: '⪊',
		gne: '⪈',
		gnE: '≩',
		gneq: '⪈',
		gneqq: '≩',
		gnsim: '⋧',
		Gopf: '𝔾',
		gopf: '𝕘',
		grave: '`',
		GreaterEqual: '≥',
		GreaterEqualLess: '⋛',
		GreaterFullEqual: '≧',
		GreaterGreater: '⪢',
		GreaterLess: '≷',
		GreaterSlantEqual: '⩾',
		GreaterTilde: '≳',
		Gscr: '𝒢',
		gscr: 'ℊ',
		gsim: '≳',
		gsime: '⪎',
		gsiml: '⪐',
		gtcc: '⪧',
		gtcir: '⩺',
		gt: '>',
		GT: '>',
		Gt: '≫',
		gtdot: '⋗',
		gtlPar: '⦕',
		gtquest: '⩼',
		gtrapprox: '⪆',
		gtrarr: '⥸',
		gtrdot: '⋗',
		gtreqless: '⋛',
		gtreqqless: '⪌',
		gtrless: '≷',
		gtrsim: '≳',
		gvertneqq: '≩︀',
		gvnE: '≩︀',
		Hacek: 'ˇ',
		hairsp: ' ',
		half: '½',
		hamilt: 'ℋ',
		HARDcy: 'Ъ',
		hardcy: 'ъ',
		harrcir: '⥈',
		harr: '↔',
		hArr: '⇔',
		harrw: '↭',
		Hat: '^',
		hbar: 'ℏ',
		Hcirc: 'Ĥ',
		hcirc: 'ĥ',
		hearts: '♥',
		heartsuit: '♥',
		hellip: '…',
		hercon: '⊹',
		hfr: '𝔥',
		Hfr: 'ℌ',
		HilbertSpace: 'ℋ',
		hksearow: '⤥',
		hkswarow: '⤦',
		hoarr: '⇿',
		homtht: '∻',
		hookleftarrow: '↩',
		hookrightarrow: '↪',
		hopf: '𝕙',
		Hopf: 'ℍ',
		horbar: '―',
		HorizontalLine: '─',
		hscr: '𝒽',
		Hscr: 'ℋ',
		hslash: 'ℏ',
		Hstrok: 'Ħ',
		hstrok: 'ħ',
		HumpDownHump: '≎',
		HumpEqual: '≏',
		hybull: '⁃',
		hyphen: '‐',
		Iacute: 'Í',
		iacute: 'í',
		ic: '⁣',
		Icirc: 'Î',
		icirc: 'î',
		Icy: 'И',
		icy: 'и',
		Idot: 'İ',
		IEcy: 'Е',
		iecy: 'е',
		iexcl: '¡',
		iff: '⇔',
		ifr: '𝔦',
		Ifr: 'ℑ',
		Igrave: 'Ì',
		igrave: 'ì',
		ii: 'ⅈ',
		iiiint: '⨌',
		iiint: '∭',
		iinfin: '⧜',
		iiota: '℩',
		IJlig: 'Ĳ',
		ijlig: 'ĳ',
		Imacr: 'Ī',
		imacr: 'ī',
		image: 'ℑ',
		ImaginaryI: 'ⅈ',
		imagline: 'ℐ',
		imagpart: 'ℑ',
		imath: 'ı',
		Im: 'ℑ',
		imof: '⊷',
		imped: 'Ƶ',
		Implies: '⇒',
		incare: '℅',
		in: '∈',
		infin: '∞',
		infintie: '⧝',
		inodot: 'ı',
		intcal: '⊺',
		int: '∫',
		Int: '∬',
		integers: 'ℤ',
		Integral: '∫',
		intercal: '⊺',
		Intersection: '⋂',
		intlarhk: '⨗',
		intprod: '⨼',
		InvisibleComma: '⁣',
		InvisibleTimes: '⁢',
		IOcy: 'Ё',
		iocy: 'ё',
		Iogon: 'Į',
		iogon: 'į',
		Iopf: '𝕀',
		iopf: '𝕚',
		Iota: 'Ι',
		iota: 'ι',
		iprod: '⨼',
		iquest: '¿',
		iscr: '𝒾',
		Iscr: 'ℐ',
		isin: '∈',
		isindot: '⋵',
		isinE: '⋹',
		isins: '⋴',
		isinsv: '⋳',
		isinv: '∈',
		it: '⁢',
		Itilde: 'Ĩ',
		itilde: 'ĩ',
		Iukcy: 'І',
		iukcy: 'і',
		Iuml: 'Ï',
		iuml: 'ï',
		Jcirc: 'Ĵ',
		jcirc: 'ĵ',
		Jcy: 'Й',
		jcy: 'й',
		Jfr: '𝔍',
		jfr: '𝔧',
		jmath: 'ȷ',
		Jopf: '𝕁',
		jopf: '𝕛',
		Jscr: '𝒥',
		jscr: '𝒿',
		Jsercy: 'Ј',
		jsercy: 'ј',
		Jukcy: 'Є',
		jukcy: 'є',
		Kappa: 'Κ',
		kappa: 'κ',
		kappav: 'ϰ',
		Kcedil: 'Ķ',
		kcedil: 'ķ',
		Kcy: 'К',
		kcy: 'к',
		Kfr: '𝔎',
		kfr: '𝔨',
		kgreen: 'ĸ',
		KHcy: 'Х',
		khcy: 'х',
		KJcy: 'Ќ',
		kjcy: 'ќ',
		Kopf: '𝕂',
		kopf: '𝕜',
		Kscr: '𝒦',
		kscr: '𝓀',
		lAarr: '⇚',
		Lacute: 'Ĺ',
		lacute: 'ĺ',
		laemptyv: '⦴',
		lagran: 'ℒ',
		Lambda: 'Λ',
		lambda: 'λ',
		lang: '⟨',
		Lang: '⟪',
		langd: '⦑',
		langle: '⟨',
		lap: '⪅',
		Laplacetrf: 'ℒ',
		laquo: '«',
		larrb: '⇤',
		larrbfs: '⤟',
		larr: '←',
		Larr: '↞',
		lArr: '⇐',
		larrfs: '⤝',
		larrhk: '↩',
		larrlp: '↫',
		larrpl: '⤹',
		larrsim: '⥳',
		larrtl: '↢',
		latail: '⤙',
		lAtail: '⤛',
		lat: '⪫',
		late: '⪭',
		lates: '⪭︀',
		lbarr: '⤌',
		lBarr: '⤎',
		lbbrk: '❲',
		lbrace: '{',
		lbrack: '[',
		lbrke: '⦋',
		lbrksld: '⦏',
		lbrkslu: '⦍',
		Lcaron: 'Ľ',
		lcaron: 'ľ',
		Lcedil: 'Ļ',
		lcedil: 'ļ',
		lceil: '⌈',
		lcub: '{',
		Lcy: 'Л',
		lcy: 'л',
		ldca: '⤶',
		ldquo: '“',
		ldquor: '„',
		ldrdhar: '⥧',
		ldrushar: '⥋',
		ldsh: '↲',
		le: '≤',
		lE: '≦',
		LeftAngleBracket: '⟨',
		LeftArrowBar: '⇤',
		leftarrow: '←',
		LeftArrow: '←',
		Leftarrow: '⇐',
		LeftArrowRightArrow: '⇆',
		leftarrowtail: '↢',
		LeftCeiling: '⌈',
		LeftDoubleBracket: '⟦',
		LeftDownTeeVector: '⥡',
		LeftDownVectorBar: '⥙',
		LeftDownVector: '⇃',
		LeftFloor: '⌊',
		leftharpoondown: '↽',
		leftharpoonup: '↼',
		leftleftarrows: '⇇',
		leftrightarrow: '↔',
		LeftRightArrow: '↔',
		Leftrightarrow: '⇔',
		leftrightarrows: '⇆',
		leftrightharpoons: '⇋',
		leftrightsquigarrow: '↭',
		LeftRightVector: '⥎',
		LeftTeeArrow: '↤',
		LeftTee: '⊣',
		LeftTeeVector: '⥚',
		leftthreetimes: '⋋',
		LeftTriangleBar: '⧏',
		LeftTriangle: '⊲',
		LeftTriangleEqual: '⊴',
		LeftUpDownVector: '⥑',
		LeftUpTeeVector: '⥠',
		LeftUpVectorBar: '⥘',
		LeftUpVector: '↿',
		LeftVectorBar: '⥒',
		LeftVector: '↼',
		lEg: '⪋',
		leg: '⋚',
		leq: '≤',
		leqq: '≦',
		leqslant: '⩽',
		lescc: '⪨',
		les: '⩽',
		lesdot: '⩿',
		lesdoto: '⪁',
		lesdotor: '⪃',
		lesg: '⋚︀',
		lesges: '⪓',
		lessapprox: '⪅',
		lessdot: '⋖',
		lesseqgtr: '⋚',
		lesseqqgtr: '⪋',
		LessEqualGreater: '⋚',
		LessFullEqual: '≦',
		LessGreater: '≶',
		lessgtr: '≶',
		LessLess: '⪡',
		lesssim: '≲',
		LessSlantEqual: '⩽',
		LessTilde: '≲',
		lfisht: '⥼',
		lfloor: '⌊',
		Lfr: '𝔏',
		lfr: '𝔩',
		lg: '≶',
		lgE: '⪑',
		lHar: '⥢',
		lhard: '↽',
		lharu: '↼',
		lharul: '⥪',
		lhblk: '▄',
		LJcy: 'Љ',
		ljcy: 'љ',
		llarr: '⇇',
		ll: '≪',
		Ll: '⋘',
		llcorner: '⌞',
		Lleftarrow: '⇚',
		llhard: '⥫',
		lltri: '◺',
		Lmidot: 'Ŀ',
		lmidot: 'ŀ',
		lmoustache: '⎰',
		lmoust: '⎰',
		lnap: '⪉',
		lnapprox: '⪉',
		lne: '⪇',
		lnE: '≨',
		lneq: '⪇',
		lneqq: '≨',
		lnsim: '⋦',
		loang: '⟬',
		loarr: '⇽',
		lobrk: '⟦',
		longleftarrow: '⟵',
		LongLeftArrow: '⟵',
		Longleftarrow: '⟸',
		longleftrightarrow: '⟷',
		LongLeftRightArrow: '⟷',
		Longleftrightarrow: '⟺',
		longmapsto: '⟼',
		longrightarrow: '⟶',
		LongRightArrow: '⟶',
		Longrightarrow: '⟹',
		looparrowleft: '↫',
		looparrowright: '↬',
		lopar: '⦅',
		Lopf: '𝕃',
		lopf: '𝕝',
		loplus: '⨭',
		lotimes: '⨴',
		lowast: '∗',
		lowbar: '_',
		LowerLeftArrow: '↙',
		LowerRightArrow: '↘',
		loz: '◊',
		lozenge: '◊',
		lozf: '⧫',
		lpar: '(',
		lparlt: '⦓',
		lrarr: '⇆',
		lrcorner: '⌟',
		lrhar: '⇋',
		lrhard: '⥭',
		lrm: '‎',
		lrtri: '⊿',
		lsaquo: '‹',
		lscr: '𝓁',
		Lscr: 'ℒ',
		lsh: '↰',
		Lsh: '↰',
		lsim: '≲',
		lsime: '⪍',
		lsimg: '⪏',
		lsqb: '[',
		lsquo: '‘',
		lsquor: '‚',
		Lstrok: 'Ł',
		lstrok: 'ł',
		ltcc: '⪦',
		ltcir: '⩹',
		lt: '<',
		LT: '<',
		Lt: '≪',
		ltdot: '⋖',
		lthree: '⋋',
		ltimes: '⋉',
		ltlarr: '⥶',
		ltquest: '⩻',
		ltri: '◃',
		ltrie: '⊴',
		ltrif: '◂',
		ltrPar: '⦖',
		lurdshar: '⥊',
		luruhar: '⥦',
		lvertneqq: '≨︀',
		lvnE: '≨︀',
		macr: '¯',
		male: '♂',
		malt: '✠',
		maltese: '✠',
		Map: '⤅',
		map: '↦',
		mapsto: '↦',
		mapstodown: '↧',
		mapstoleft: '↤',
		mapstoup: '↥',
		marker: '▮',
		mcomma: '⨩',
		Mcy: 'М',
		mcy: 'м',
		mdash: '—',
		mDDot: '∺',
		measuredangle: '∡',
		MediumSpace: ' ',
		Mellintrf: 'ℳ',
		Mfr: '𝔐',
		mfr: '𝔪',
		mho: '℧',
		micro: 'µ',
		midast: '*',
		midcir: '⫰',
		mid: '∣',
		middot: '·',
		minusb: '⊟',
		minus: '−',
		minusd: '∸',
		minusdu: '⨪',
		MinusPlus: '∓',
		mlcp: '⫛',
		mldr: '…',
		mnplus: '∓',
		models: '⊧',
		Mopf: '𝕄',
		mopf: '𝕞',
		mp: '∓',
		mscr: '𝓂',
		Mscr: 'ℳ',
		mstpos: '∾',
		Mu: 'Μ',
		mu: 'μ',
		multimap: '⊸',
		mumap: '⊸',
		nabla: '∇',
		Nacute: 'Ń',
		nacute: 'ń',
		nang: '∠⃒',
		nap: '≉',
		napE: '⩰̸',
		napid: '≋̸',
		napos: 'ŉ',
		napprox: '≉',
		natural: '♮',
		naturals: 'ℕ',
		natur: '♮',
		nbsp: ' ',
		nbump: '≎̸',
		nbumpe: '≏̸',
		ncap: '⩃',
		Ncaron: 'Ň',
		ncaron: 'ň',
		Ncedil: 'Ņ',
		ncedil: 'ņ',
		ncong: '≇',
		ncongdot: '⩭̸',
		ncup: '⩂',
		Ncy: 'Н',
		ncy: 'н',
		ndash: '–',
		nearhk: '⤤',
		nearr: '↗',
		neArr: '⇗',
		nearrow: '↗',
		ne: '≠',
		nedot: '≐̸',
		NegativeMediumSpace: '​',
		NegativeThickSpace: '​',
		NegativeThinSpace: '​',
		NegativeVeryThinSpace: '​',
		nequiv: '≢',
		nesear: '⤨',
		nesim: '≂̸',
		NestedGreaterGreater: '≫',
		NestedLessLess: '≪',
		NewLine: '\n',
		nexist: '∄',
		nexists: '∄',
		Nfr: '𝔑',
		nfr: '𝔫',
		ngE: '≧̸',
		nge: '≱',
		ngeq: '≱',
		ngeqq: '≧̸',
		ngeqslant: '⩾̸',
		nges: '⩾̸',
		nGg: '⋙̸',
		ngsim: '≵',
		nGt: '≫⃒',
		ngt: '≯',
		ngtr: '≯',
		nGtv: '≫̸',
		nharr: '↮',
		nhArr: '⇎',
		nhpar: '⫲',
		ni: '∋',
		nis: '⋼',
		nisd: '⋺',
		niv: '∋',
		NJcy: 'Њ',
		njcy: 'њ',
		nlarr: '↚',
		nlArr: '⇍',
		nldr: '‥',
		nlE: '≦̸',
		nle: '≰',
		nleftarrow: '↚',
		nLeftarrow: '⇍',
		nleftrightarrow: '↮',
		nLeftrightarrow: '⇎',
		nleq: '≰',
		nleqq: '≦̸',
		nleqslant: '⩽̸',
		nles: '⩽̸',
		nless: '≮',
		nLl: '⋘̸',
		nlsim: '≴',
		nLt: '≪⃒',
		nlt: '≮',
		nltri: '⋪',
		nltrie: '⋬',
		nLtv: '≪̸',
		nmid: '∤',
		NoBreak: '⁠',
		NonBreakingSpace: ' ',
		nopf: '𝕟',
		Nopf: 'ℕ',
		Not: '⫬',
		not: '¬',
		NotCongruent: '≢',
		NotCupCap: '≭',
		NotDoubleVerticalBar: '∦',
		NotElement: '∉',
		NotEqual: '≠',
		NotEqualTilde: '≂̸',
		NotExists: '∄',
		NotGreater: '≯',
		NotGreaterEqual: '≱',
		NotGreaterFullEqual: '≧̸',
		NotGreaterGreater: '≫̸',
		NotGreaterLess: '≹',
		NotGreaterSlantEqual: '⩾̸',
		NotGreaterTilde: '≵',
		NotHumpDownHump: '≎̸',
		NotHumpEqual: '≏̸',
		notin: '∉',
		notindot: '⋵̸',
		notinE: '⋹̸',
		notinva: '∉',
		notinvb: '⋷',
		notinvc: '⋶',
		NotLeftTriangleBar: '⧏̸',
		NotLeftTriangle: '⋪',
		NotLeftTriangleEqual: '⋬',
		NotLess: '≮',
		NotLessEqual: '≰',
		NotLessGreater: '≸',
		NotLessLess: '≪̸',
		NotLessSlantEqual: '⩽̸',
		NotLessTilde: '≴',
		NotNestedGreaterGreater: '⪢̸',
		NotNestedLessLess: '⪡̸',
		notni: '∌',
		notniva: '∌',
		notnivb: '⋾',
		notnivc: '⋽',
		NotPrecedes: '⊀',
		NotPrecedesEqual: '⪯̸',
		NotPrecedesSlantEqual: '⋠',
		NotReverseElement: '∌',
		NotRightTriangleBar: '⧐̸',
		NotRightTriangle: '⋫',
		NotRightTriangleEqual: '⋭',
		NotSquareSubset: '⊏̸',
		NotSquareSubsetEqual: '⋢',
		NotSquareSuperset: '⊐̸',
		NotSquareSupersetEqual: '⋣',
		NotSubset: '⊂⃒',
		NotSubsetEqual: '⊈',
		NotSucceeds: '⊁',
		NotSucceedsEqual: '⪰̸',
		NotSucceedsSlantEqual: '⋡',
		NotSucceedsTilde: '≿̸',
		NotSuperset: '⊃⃒',
		NotSupersetEqual: '⊉',
		NotTilde: '≁',
		NotTildeEqual: '≄',
		NotTildeFullEqual: '≇',
		NotTildeTilde: '≉',
		NotVerticalBar: '∤',
		nparallel: '∦',
		npar: '∦',
		nparsl: '⫽⃥',
		npart: '∂̸',
		npolint: '⨔',
		npr: '⊀',
		nprcue: '⋠',
		nprec: '⊀',
		npreceq: '⪯̸',
		npre: '⪯̸',
		nrarrc: '⤳̸',
		nrarr: '↛',
		nrArr: '⇏',
		nrarrw: '↝̸',
		nrightarrow: '↛',
		nRightarrow: '⇏',
		nrtri: '⋫',
		nrtrie: '⋭',
		nsc: '⊁',
		nsccue: '⋡',
		nsce: '⪰̸',
		Nscr: '𝒩',
		nscr: '𝓃',
		nshortmid: '∤',
		nshortparallel: '∦',
		nsim: '≁',
		nsime: '≄',
		nsimeq: '≄',
		nsmid: '∤',
		nspar: '∦',
		nsqsube: '⋢',
		nsqsupe: '⋣',
		nsub: '⊄',
		nsubE: '⫅̸',
		nsube: '⊈',
		nsubset: '⊂⃒',
		nsubseteq: '⊈',
		nsubseteqq: '⫅̸',
		nsucc: '⊁',
		nsucceq: '⪰̸',
		nsup: '⊅',
		nsupE: '⫆̸',
		nsupe: '⊉',
		nsupset: '⊃⃒',
		nsupseteq: '⊉',
		nsupseteqq: '⫆̸',
		ntgl: '≹',
		Ntilde: 'Ñ',
		ntilde: 'ñ',
		ntlg: '≸',
		ntriangleleft: '⋪',
		ntrianglelefteq: '⋬',
		ntriangleright: '⋫',
		ntrianglerighteq: '⋭',
		Nu: 'Ν',
		nu: 'ν',
		num: '#',
		numero: '№',
		numsp: ' ',
		nvap: '≍⃒',
		nvdash: '⊬',
		nvDash: '⊭',
		nVdash: '⊮',
		nVDash: '⊯',
		nvge: '≥⃒',
		nvgt: '>⃒',
		nvHarr: '⤄',
		nvinfin: '⧞',
		nvlArr: '⤂',
		nvle: '≤⃒',
		nvlt: '<⃒',
		nvltrie: '⊴⃒',
		nvrArr: '⤃',
		nvrtrie: '⊵⃒',
		nvsim: '∼⃒',
		nwarhk: '⤣',
		nwarr: '↖',
		nwArr: '⇖',
		nwarrow: '↖',
		nwnear: '⤧',
		Oacute: 'Ó',
		oacute: 'ó',
		oast: '⊛',
		Ocirc: 'Ô',
		ocirc: 'ô',
		ocir: '⊚',
		Ocy: 'О',
		ocy: 'о',
		odash: '⊝',
		Odblac: 'Ő',
		odblac: 'ő',
		odiv: '⨸',
		odot: '⊙',
		odsold: '⦼',
		OElig: 'Œ',
		oelig: 'œ',
		ofcir: '⦿',
		Ofr: '𝔒',
		ofr: '𝔬',
		ogon: '˛',
		Ograve: 'Ò',
		ograve: 'ò',
		ogt: '⧁',
		ohbar: '⦵',
		ohm: 'Ω',
		oint: '∮',
		olarr: '↺',
		olcir: '⦾',
		olcross: '⦻',
		oline: '‾',
		olt: '⧀',
		Omacr: 'Ō',
		omacr: 'ō',
		Omega: 'Ω',
		omega: 'ω',
		Omicron: 'Ο',
		omicron: 'ο',
		omid: '⦶',
		ominus: '⊖',
		Oopf: '𝕆',
		oopf: '𝕠',
		opar: '⦷',
		OpenCurlyDoubleQuote: '“',
		OpenCurlyQuote: '‘',
		operp: '⦹',
		oplus: '⊕',
		orarr: '↻',
		Or: '⩔',
		or: '∨',
		ord: '⩝',
		order: 'ℴ',
		orderof: 'ℴ',
		ordf: 'ª',
		ordm: 'º',
		origof: '⊶',
		oror: '⩖',
		orslope: '⩗',
		orv: '⩛',
		oS: 'Ⓢ',
		Oscr: '𝒪',
		oscr: 'ℴ',
		Oslash: 'Ø',
		oslash: 'ø',
		osol: '⊘',
		Otilde: 'Õ',
		otilde: 'õ',
		otimesas: '⨶',
		Otimes: '⨷',
		otimes: '⊗',
		Ouml: 'Ö',
		ouml: 'ö',
		ovbar: '⌽',
		OverBar: '‾',
		OverBrace: '⏞',
		OverBracket: '⎴',
		OverParenthesis: '⏜',
		para: '¶',
		parallel: '∥',
		par: '∥',
		parsim: '⫳',
		parsl: '⫽',
		part: '∂',
		PartialD: '∂',
		Pcy: 'П',
		pcy: 'п',
		percnt: '%',
		period: '.',
		permil: '‰',
		perp: '⊥',
		pertenk: '‱',
		Pfr: '𝔓',
		pfr: '𝔭',
		Phi: 'Φ',
		phi: 'φ',
		phiv: 'ϕ',
		phmmat: 'ℳ',
		phone: '☎',
		Pi: 'Π',
		pi: 'π',
		pitchfork: '⋔',
		piv: 'ϖ',
		planck: 'ℏ',
		planckh: 'ℎ',
		plankv: 'ℏ',
		plusacir: '⨣',
		plusb: '⊞',
		pluscir: '⨢',
		plus: '+',
		plusdo: '∔',
		plusdu: '⨥',
		pluse: '⩲',
		PlusMinus: '±',
		plusmn: '±',
		plussim: '⨦',
		plustwo: '⨧',
		pm: '±',
		Poincareplane: 'ℌ',
		pointint: '⨕',
		popf: '𝕡',
		Popf: 'ℙ',
		pound: '£',
		prap: '⪷',
		Pr: '⪻',
		pr: '≺',
		prcue: '≼',
		precapprox: '⪷',
		prec: '≺',
		preccurlyeq: '≼',
		Precedes: '≺',
		PrecedesEqual: '⪯',
		PrecedesSlantEqual: '≼',
		PrecedesTilde: '≾',
		preceq: '⪯',
		precnapprox: '⪹',
		precneqq: '⪵',
		precnsim: '⋨',
		pre: '⪯',
		prE: '⪳',
		precsim: '≾',
		prime: '′',
		Prime: '″',
		primes: 'ℙ',
		prnap: '⪹',
		prnE: '⪵',
		prnsim: '⋨',
		prod: '∏',
		Product: '∏',
		profalar: '⌮',
		profline: '⌒',
		profsurf: '⌓',
		prop: '∝',
		Proportional: '∝',
		Proportion: '∷',
		propto: '∝',
		prsim: '≾',
		prurel: '⊰',
		Pscr: '𝒫',
		pscr: '𝓅',
		Psi: 'Ψ',
		psi: 'ψ',
		puncsp: ' ',
		Qfr: '𝔔',
		qfr: '𝔮',
		qint: '⨌',
		qopf: '𝕢',
		Qopf: 'ℚ',
		qprime: '⁗',
		Qscr: '𝒬',
		qscr: '𝓆',
		quaternions: 'ℍ',
		quatint: '⨖',
		quest: '?',
		questeq: '≟',
		quot: '"',
		QUOT: '"',
		rAarr: '⇛',
		race: '∽̱',
		Racute: 'Ŕ',
		racute: 'ŕ',
		radic: '√',
		raemptyv: '⦳',
		rang: '⟩',
		Rang: '⟫',
		rangd: '⦒',
		range: '⦥',
		rangle: '⟩',
		raquo: '»',
		rarrap: '⥵',
		rarrb: '⇥',
		rarrbfs: '⤠',
		rarrc: '⤳',
		rarr: '→',
		Rarr: '↠',
		rArr: '⇒',
		rarrfs: '⤞',
		rarrhk: '↪',
		rarrlp: '↬',
		rarrpl: '⥅',
		rarrsim: '⥴',
		Rarrtl: '⤖',
		rarrtl: '↣',
		rarrw: '↝',
		ratail: '⤚',
		rAtail: '⤜',
		ratio: '∶',
		rationals: 'ℚ',
		rbarr: '⤍',
		rBarr: '⤏',
		RBarr: '⤐',
		rbbrk: '❳',
		rbrace: '}',
		rbrack: ']',
		rbrke: '⦌',
		rbrksld: '⦎',
		rbrkslu: '⦐',
		Rcaron: 'Ř',
		rcaron: 'ř',
		Rcedil: 'Ŗ',
		rcedil: 'ŗ',
		rceil: '⌉',
		rcub: '}',
		Rcy: 'Р',
		rcy: 'р',
		rdca: '⤷',
		rdldhar: '⥩',
		rdquo: '”',
		rdquor: '”',
		rdsh: '↳',
		real: 'ℜ',
		realine: 'ℛ',
		realpart: 'ℜ',
		reals: 'ℝ',
		Re: 'ℜ',
		rect: '▭',
		reg: '®',
		REG: '®',
		ReverseElement: '∋',
		ReverseEquilibrium: '⇋',
		ReverseUpEquilibrium: '⥯',
		rfisht: '⥽',
		rfloor: '⌋',
		rfr: '𝔯',
		Rfr: 'ℜ',
		rHar: '⥤',
		rhard: '⇁',
		rharu: '⇀',
		rharul: '⥬',
		Rho: 'Ρ',
		rho: 'ρ',
		rhov: 'ϱ',
		RightAngleBracket: '⟩',
		RightArrowBar: '⇥',
		rightarrow: '→',
		RightArrow: '→',
		Rightarrow: '⇒',
		RightArrowLeftArrow: '⇄',
		rightarrowtail: '↣',
		RightCeiling: '⌉',
		RightDoubleBracket: '⟧',
		RightDownTeeVector: '⥝',
		RightDownVectorBar: '⥕',
		RightDownVector: '⇂',
		RightFloor: '⌋',
		rightharpoondown: '⇁',
		rightharpoonup: '⇀',
		rightleftarrows: '⇄',
		rightleftharpoons: '⇌',
		rightrightarrows: '⇉',
		rightsquigarrow: '↝',
		RightTeeArrow: '↦',
		RightTee: '⊢',
		RightTeeVector: '⥛',
		rightthreetimes: '⋌',
		RightTriangleBar: '⧐',
		RightTriangle: '⊳',
		RightTriangleEqual: '⊵',
		RightUpDownVector: '⥏',
		RightUpTeeVector: '⥜',
		RightUpVectorBar: '⥔',
		RightUpVector: '↾',
		RightVectorBar: '⥓',
		RightVector: '⇀',
		ring: '˚',
		risingdotseq: '≓',
		rlarr: '⇄',
		rlhar: '⇌',
		rlm: '‏',
		rmoustache: '⎱',
		rmoust: '⎱',
		rnmid: '⫮',
		roang: '⟭',
		roarr: '⇾',
		robrk: '⟧',
		ropar: '⦆',
		ropf: '𝕣',
		Ropf: 'ℝ',
		roplus: '⨮',
		rotimes: '⨵',
		RoundImplies: '⥰',
		rpar: ')',
		rpargt: '⦔',
		rppolint: '⨒',
		rrarr: '⇉',
		Rrightarrow: '⇛',
		rsaquo: '›',
		rscr: '𝓇',
		Rscr: 'ℛ',
		rsh: '↱',
		Rsh: '↱',
		rsqb: ']',
		rsquo: '’',
		rsquor: '’',
		rthree: '⋌',
		rtimes: '⋊',
		rtri: '▹',
		rtrie: '⊵',
		rtrif: '▸',
		rtriltri: '⧎',
		RuleDelayed: '⧴',
		ruluhar: '⥨',
		rx: '℞',
		Sacute: 'Ś',
		sacute: 'ś',
		sbquo: '‚',
		scap: '⪸',
		Scaron: 'Š',
		scaron: 'š',
		Sc: '⪼',
		sc: '≻',
		sccue: '≽',
		sce: '⪰',
		scE: '⪴',
		Scedil: 'Ş',
		scedil: 'ş',
		Scirc: 'Ŝ',
		scirc: 'ŝ',
		scnap: '⪺',
		scnE: '⪶',
		scnsim: '⋩',
		scpolint: '⨓',
		scsim: '≿',
		Scy: 'С',
		scy: 'с',
		sdotb: '⊡',
		sdot: '⋅',
		sdote: '⩦',
		searhk: '⤥',
		searr: '↘',
		seArr: '⇘',
		searrow: '↘',
		sect: '§',
		semi: ';',
		seswar: '⤩',
		setminus: '∖',
		setmn: '∖',
		sext: '✶',
		Sfr: '𝔖',
		sfr: '𝔰',
		sfrown: '⌢',
		sharp: '♯',
		SHCHcy: 'Щ',
		shchcy: 'щ',
		SHcy: 'Ш',
		shcy: 'ш',
		ShortDownArrow: '↓',
		ShortLeftArrow: '←',
		shortmid: '∣',
		shortparallel: '∥',
		ShortRightArrow: '→',
		ShortUpArrow: '↑',
		shy: '­',
		Sigma: 'Σ',
		sigma: 'σ',
		sigmaf: 'ς',
		sigmav: 'ς',
		sim: '∼',
		simdot: '⩪',
		sime: '≃',
		simeq: '≃',
		simg: '⪞',
		simgE: '⪠',
		siml: '⪝',
		simlE: '⪟',
		simne: '≆',
		simplus: '⨤',
		simrarr: '⥲',
		slarr: '←',
		SmallCircle: '∘',
		smallsetminus: '∖',
		smashp: '⨳',
		smeparsl: '⧤',
		smid: '∣',
		smile: '⌣',
		smt: '⪪',
		smte: '⪬',
		smtes: '⪬︀',
		SOFTcy: 'Ь',
		softcy: 'ь',
		solbar: '⌿',
		solb: '⧄',
		sol: '/',
		Sopf: '𝕊',
		sopf: '𝕤',
		spades: '♠',
		spadesuit: '♠',
		spar: '∥',
		sqcap: '⊓',
		sqcaps: '⊓︀',
		sqcup: '⊔',
		sqcups: '⊔︀',
		Sqrt: '√',
		sqsub: '⊏',
		sqsube: '⊑',
		sqsubset: '⊏',
		sqsubseteq: '⊑',
		sqsup: '⊐',
		sqsupe: '⊒',
		sqsupset: '⊐',
		sqsupseteq: '⊒',
		square: '□',
		Square: '□',
		SquareIntersection: '⊓',
		SquareSubset: '⊏',
		SquareSubsetEqual: '⊑',
		SquareSuperset: '⊐',
		SquareSupersetEqual: '⊒',
		SquareUnion: '⊔',
		squarf: '▪',
		squ: '□',
		squf: '▪',
		srarr: '→',
		Sscr: '𝒮',
		sscr: '𝓈',
		ssetmn: '∖',
		ssmile: '⌣',
		sstarf: '⋆',
		Star: '⋆',
		star: '☆',
		starf: '★',
		straightepsilon: 'ϵ',
		straightphi: 'ϕ',
		strns: '¯',
		sub: '⊂',
		Sub: '⋐',
		subdot: '⪽',
		subE: '⫅',
		sube: '⊆',
		subedot: '⫃',
		submult: '⫁',
		subnE: '⫋',
		subne: '⊊',
		subplus: '⪿',
		subrarr: '⥹',
		subset: '⊂',
		Subset: '⋐',
		subseteq: '⊆',
		subseteqq: '⫅',
		SubsetEqual: '⊆',
		subsetneq: '⊊',
		subsetneqq: '⫋',
		subsim: '⫇',
		subsub: '⫕',
		subsup: '⫓',
		succapprox: '⪸',
		succ: '≻',
		succcurlyeq: '≽',
		Succeeds: '≻',
		SucceedsEqual: '⪰',
		SucceedsSlantEqual: '≽',
		SucceedsTilde: '≿',
		succeq: '⪰',
		succnapprox: '⪺',
		succneqq: '⪶',
		succnsim: '⋩',
		succsim: '≿',
		SuchThat: '∋',
		sum: '∑',
		Sum: '∑',
		sung: '♪',
		sup1: '¹',
		sup2: '²',
		sup3: '³',
		sup: '⊃',
		Sup: '⋑',
		supdot: '⪾',
		supdsub: '⫘',
		supE: '⫆',
		supe: '⊇',
		supedot: '⫄',
		Superset: '⊃',
		SupersetEqual: '⊇',
		suphsol: '⟉',
		suphsub: '⫗',
		suplarr: '⥻',
		supmult: '⫂',
		supnE: '⫌',
		supne: '⊋',
		supplus: '⫀',
		supset: '⊃',
		Supset: '⋑',
		supseteq: '⊇',
		supseteqq: '⫆',
		supsetneq: '⊋',
		supsetneqq: '⫌',
		supsim: '⫈',
		supsub: '⫔',
		supsup: '⫖',
		swarhk: '⤦',
		swarr: '↙',
		swArr: '⇙',
		swarrow: '↙',
		swnwar: '⤪',
		szlig: 'ß',
		Tab: '\t',
		target: '⌖',
		Tau: 'Τ',
		tau: 'τ',
		tbrk: '⎴',
		Tcaron: 'Ť',
		tcaron: 'ť',
		Tcedil: 'Ţ',
		tcedil: 'ţ',
		Tcy: 'Т',
		tcy: 'т',
		tdot: '⃛',
		telrec: '⌕',
		Tfr: '𝔗',
		tfr: '𝔱',
		there4: '∴',
		therefore: '∴',
		Therefore: '∴',
		Theta: 'Θ',
		theta: 'θ',
		thetasym: 'ϑ',
		thetav: 'ϑ',
		thickapprox: '≈',
		thicksim: '∼',
		ThickSpace: '  ',
		ThinSpace: ' ',
		thinsp: ' ',
		thkap: '≈',
		thksim: '∼',
		THORN: 'Þ',
		thorn: 'þ',
		tilde: '˜',
		Tilde: '∼',
		TildeEqual: '≃',
		TildeFullEqual: '≅',
		TildeTilde: '≈',
		timesbar: '⨱',
		timesb: '⊠',
		times: '×',
		timesd: '⨰',
		tint: '∭',
		toea: '⤨',
		topbot: '⌶',
		topcir: '⫱',
		top: '⊤',
		Topf: '𝕋',
		topf: '𝕥',
		topfork: '⫚',
		tosa: '⤩',
		tprime: '‴',
		trade: '™',
		TRADE: '™',
		triangle: '▵',
		triangledown: '▿',
		triangleleft: '◃',
		trianglelefteq: '⊴',
		triangleq: '≜',
		triangleright: '▹',
		trianglerighteq: '⊵',
		tridot: '◬',
		trie: '≜',
		triminus: '⨺',
		TripleDot: '⃛',
		triplus: '⨹',
		trisb: '⧍',
		tritime: '⨻',
		trpezium: '⏢',
		Tscr: '𝒯',
		tscr: '𝓉',
		TScy: 'Ц',
		tscy: 'ц',
		TSHcy: 'Ћ',
		tshcy: 'ћ',
		Tstrok: 'Ŧ',
		tstrok: 'ŧ',
		twixt: '≬',
		twoheadleftarrow: '↞',
		twoheadrightarrow: '↠',
		Uacute: 'Ú',
		uacute: 'ú',
		uarr: '↑',
		Uarr: '↟',
		uArr: '⇑',
		Uarrocir: '⥉',
		Ubrcy: 'Ў',
		ubrcy: 'ў',
		Ubreve: 'Ŭ',
		ubreve: 'ŭ',
		Ucirc: 'Û',
		ucirc: 'û',
		Ucy: 'У',
		ucy: 'у',
		udarr: '⇅',
		Udblac: 'Ű',
		udblac: 'ű',
		udhar: '⥮',
		ufisht: '⥾',
		Ufr: '𝔘',
		ufr: '𝔲',
		Ugrave: 'Ù',
		ugrave: 'ù',
		uHar: '⥣',
		uharl: '↿',
		uharr: '↾',
		uhblk: '▀',
		ulcorn: '⌜',
		ulcorner: '⌜',
		ulcrop: '⌏',
		ultri: '◸',
		Umacr: 'Ū',
		umacr: 'ū',
		uml: '¨',
		UnderBar: '_',
		UnderBrace: '⏟',
		UnderBracket: '⎵',
		UnderParenthesis: '⏝',
		Union: '⋃',
		UnionPlus: '⊎',
		Uogon: 'Ų',
		uogon: 'ų',
		Uopf: '𝕌',
		uopf: '𝕦',
		UpArrowBar: '⤒',
		uparrow: '↑',
		UpArrow: '↑',
		Uparrow: '⇑',
		UpArrowDownArrow: '⇅',
		updownarrow: '↕',
		UpDownArrow: '↕',
		Updownarrow: '⇕',
		UpEquilibrium: '⥮',
		upharpoonleft: '↿',
		upharpoonright: '↾',
		uplus: '⊎',
		UpperLeftArrow: '↖',
		UpperRightArrow: '↗',
		upsi: 'υ',
		Upsi: 'ϒ',
		upsih: 'ϒ',
		Upsilon: 'Υ',
		upsilon: 'υ',
		UpTeeArrow: '↥',
		UpTee: '⊥',
		upuparrows: '⇈',
		urcorn: '⌝',
		urcorner: '⌝',
		urcrop: '⌎',
		Uring: 'Ů',
		uring: 'ů',
		urtri: '◹',
		Uscr: '𝒰',
		uscr: '𝓊',
		utdot: '⋰',
		Utilde: 'Ũ',
		utilde: 'ũ',
		utri: '▵',
		utrif: '▴',
		uuarr: '⇈',
		Uuml: 'Ü',
		uuml: 'ü',
		uwangle: '⦧',
		vangrt: '⦜',
		varepsilon: 'ϵ',
		varkappa: 'ϰ',
		varnothing: '∅',
		varphi: 'ϕ',
		varpi: 'ϖ',
		varpropto: '∝',
		varr: '↕',
		vArr: '⇕',
		varrho: 'ϱ',
		varsigma: 'ς',
		varsubsetneq: '⊊︀',
		varsubsetneqq: '⫋︀',
		varsupsetneq: '⊋︀',
		varsupsetneqq: '⫌︀',
		vartheta: 'ϑ',
		vartriangleleft: '⊲',
		vartriangleright: '⊳',
		vBar: '⫨',
		Vbar: '⫫',
		vBarv: '⫩',
		Vcy: 'В',
		vcy: 'в',
		vdash: '⊢',
		vDash: '⊨',
		Vdash: '⊩',
		VDash: '⊫',
		Vdashl: '⫦',
		veebar: '⊻',
		vee: '∨',
		Vee: '⋁',
		veeeq: '≚',
		vellip: '⋮',
		verbar: '|',
		Verbar: '‖',
		vert: '|',
		Vert: '‖',
		VerticalBar: '∣',
		VerticalLine: '|',
		VerticalSeparator: '❘',
		VerticalTilde: '≀',
		VeryThinSpace: ' ',
		Vfr: '𝔙',
		vfr: '𝔳',
		vltri: '⊲',
		vnsub: '⊂⃒',
		vnsup: '⊃⃒',
		Vopf: '𝕍',
		vopf: '𝕧',
		vprop: '∝',
		vrtri: '⊳',
		Vscr: '𝒱',
		vscr: '𝓋',
		vsubnE: '⫋︀',
		vsubne: '⊊︀',
		vsupnE: '⫌︀',
		vsupne: '⊋︀',
		Vvdash: '⊪',
		vzigzag: '⦚',
		Wcirc: 'Ŵ',
		wcirc: 'ŵ',
		wedbar: '⩟',
		wedge: '∧',
		Wedge: '⋀',
		wedgeq: '≙',
		weierp: '℘',
		Wfr: '𝔚',
		wfr: '𝔴',
		Wopf: '𝕎',
		wopf: '𝕨',
		wp: '℘',
		wr: '≀',
		wreath: '≀',
		Wscr: '𝒲',
		wscr: '𝓌',
		xcap: '⋂',
		xcirc: '◯',
		xcup: '⋃',
		xdtri: '▽',
		Xfr: '𝔛',
		xfr: '𝔵',
		xharr: '⟷',
		xhArr: '⟺',
		Xi: 'Ξ',
		xi: 'ξ',
		xlarr: '⟵',
		xlArr: '⟸',
		xmap: '⟼',
		xnis: '⋻',
		xodot: '⨀',
		Xopf: '𝕏',
		xopf: '𝕩',
		xoplus: '⨁',
		xotime: '⨂',
		xrarr: '⟶',
		xrArr: '⟹',
		Xscr: '𝒳',
		xscr: '𝓍',
		xsqcup: '⨆',
		xuplus: '⨄',
		xutri: '△',
		xvee: '⋁',
		xwedge: '⋀',
		Yacute: 'Ý',
		yacute: 'ý',
		YAcy: 'Я',
		yacy: 'я',
		Ycirc: 'Ŷ',
		ycirc: 'ŷ',
		Ycy: 'Ы',
		ycy: 'ы',
		yen: '¥',
		Yfr: '𝔜',
		yfr: '𝔶',
		YIcy: 'Ї',
		yicy: 'ї',
		Yopf: '𝕐',
		yopf: '𝕪',
		Yscr: '𝒴',
		yscr: '𝓎',
		YUcy: 'Ю',
		yucy: 'ю',
		yuml: 'ÿ',
		Yuml: 'Ÿ',
		Zacute: 'Ź',
		zacute: 'ź',
		Zcaron: 'Ž',
		zcaron: 'ž',
		Zcy: 'З',
		zcy: 'з',
		Zdot: 'Ż',
		zdot: 'ż',
		zeetrf: 'ℨ',
		ZeroWidthSpace: '​',
		Zeta: 'Ζ',
		zeta: 'ζ',
		zfr: '𝔷',
		Zfr: 'ℨ',
		ZHcy: 'Ж',
		zhcy: 'ж',
		zigrarr: '⇝',
		zopf: '𝕫',
		Zopf: 'ℤ',
		Zscr: '𝒵',
		zscr: '𝓏',
		zwj: '‍',
		zwnj: '‌',
	};
	var Kr = {
		Aacute: 'Á',
		aacute: 'á',
		Acirc: 'Â',
		acirc: 'â',
		acute: '´',
		AElig: 'Æ',
		aelig: 'æ',
		Agrave: 'À',
		agrave: 'à',
		amp: '&',
		AMP: '&',
		Aring: 'Å',
		aring: 'å',
		Atilde: 'Ã',
		atilde: 'ã',
		Auml: 'Ä',
		auml: 'ä',
		brvbar: '¦',
		Ccedil: 'Ç',
		ccedil: 'ç',
		cedil: '¸',
		cent: '¢',
		copy: '©',
		COPY: '©',
		curren: '¤',
		deg: '°',
		divide: '÷',
		Eacute: 'É',
		eacute: 'é',
		Ecirc: 'Ê',
		ecirc: 'ê',
		Egrave: 'È',
		egrave: 'è',
		ETH: 'Ð',
		eth: 'ð',
		Euml: 'Ë',
		euml: 'ë',
		frac12: '½',
		frac14: '¼',
		frac34: '¾',
		gt: '>',
		GT: '>',
		Iacute: 'Í',
		iacute: 'í',
		Icirc: 'Î',
		icirc: 'î',
		iexcl: '¡',
		Igrave: 'Ì',
		igrave: 'ì',
		iquest: '¿',
		Iuml: 'Ï',
		iuml: 'ï',
		laquo: '«',
		lt: '<',
		LT: '<',
		macr: '¯',
		micro: 'µ',
		middot: '·',
		nbsp: ' ',
		not: '¬',
		Ntilde: 'Ñ',
		ntilde: 'ñ',
		Oacute: 'Ó',
		oacute: 'ó',
		Ocirc: 'Ô',
		ocirc: 'ô',
		Ograve: 'Ò',
		ograve: 'ò',
		ordf: 'ª',
		ordm: 'º',
		Oslash: 'Ø',
		oslash: 'ø',
		Otilde: 'Õ',
		otilde: 'õ',
		Ouml: 'Ö',
		ouml: 'ö',
		para: '¶',
		plusmn: '±',
		pound: '£',
		quot: '"',
		QUOT: '"',
		raquo: '»',
		reg: '®',
		REG: '®',
		sect: '§',
		shy: '­',
		sup1: '¹',
		sup2: '²',
		sup3: '³',
		szlig: 'ß',
		THORN: 'Þ',
		thorn: 'þ',
		times: '×',
		Uacute: 'Ú',
		uacute: 'ú',
		Ucirc: 'Û',
		ucirc: 'û',
		Ugrave: 'Ù',
		ugrave: 'ù',
		uml: '¨',
		Uuml: 'Ü',
		uuml: 'ü',
		Yacute: 'Ý',
		yacute: 'ý',
		yen: '¥',
		yuml: 'ÿ',
	};
	var en = { amp: '&', apos: "'", gt: '>', lt: '<', quot: '"' },
		tn =
			(k && k.__importDefault) ||
			function (e) {
				return e && e.__esModule ? e : { default: e };
			};
	Object.defineProperty($r, '__esModule', { value: !0 });
	var rn = tn(Jr),
		nn = tn(Qr),
		an = tn(Kr),
		on = tn(en);
	function sn(e) {
		return (
			' ' === e || '\n' === e || '\t' === e || '\f' === e || '\r' === e
		);
	}
	function ln(e) {
		return (e >= 'a' && e <= 'z') || (e >= 'A' && e <= 'Z');
	}
	function cn(e, t, r) {
		var n = e.toLowerCase();
		return e === n
			? function (e, a) {
					a === n ? (e._state = t) : ((e._state = r), e._index--);
			  }
			: function (a, o) {
					o === n || o === e
						? (a._state = t)
						: ((a._state = r), a._index--);
			  };
	}
	function un(e, t) {
		var r = e.toLowerCase();
		return function (n, a) {
			a === r || a === e ? (n._state = t) : ((n._state = 3), n._index--);
		};
	}
	var pn = cn('C', 24, 16),
		dn = cn('D', 25, 16),
		fn = cn('A', 26, 16),
		hn = cn('T', 27, 16),
		mn = cn('A', 28, 16),
		gn = un('R', 35),
		bn = un('I', 36),
		vn = un('P', 37),
		yn = un('T', 38),
		wn = cn('R', 40, 1),
		xn = cn('I', 41, 1),
		kn = cn('P', 42, 1),
		Sn = cn('T', 43, 1),
		En = un('Y', 45),
		qn = un('L', 46),
		Dn = un('E', 47),
		Tn = cn('Y', 49, 1),
		An = cn('L', 50, 1),
		Ln = cn('E', 51, 1),
		Cn = un('I', 54),
		_n = un('T', 55),
		On = un('L', 56),
		Bn = un('E', 57),
		Nn = cn('I', 58, 1),
		Pn = cn('T', 59, 1),
		In = cn('L', 60, 1),
		Rn = cn('E', 61, 1),
		jn = cn('#', 63, 64),
		Mn = cn('X', 66, 65),
		Fn = (function () {
			function e(e, t) {
				var r;
				(this._state = 1),
					(this.buffer = ''),
					(this.sectionStart = 0),
					(this._index = 0),
					(this.bufferOffset = 0),
					(this.baseState = 1),
					(this.special = 1),
					(this.running = !0),
					(this.ended = !1),
					(this.cbs = t),
					(this.xmlMode = !!(null == e ? void 0 : e.xmlMode)),
					(this.decodeEntities =
						null === (r = null == e ? void 0 : e.decodeEntities) ||
						void 0 === r ||
						r);
			}
			return (
				(e.prototype.reset = function () {
					(this._state = 1),
						(this.buffer = ''),
						(this.sectionStart = 0),
						(this._index = 0),
						(this.bufferOffset = 0),
						(this.baseState = 1),
						(this.special = 1),
						(this.running = !0),
						(this.ended = !1);
				}),
				(e.prototype.write = function (e) {
					this.ended &&
						this.cbs.onerror(Error('.write() after done!')),
						(this.buffer += e),
						this.parse();
				}),
				(e.prototype.end = function (e) {
					this.ended && this.cbs.onerror(Error('.end() after done!')),
						e && this.write(e),
						(this.ended = !0),
						this.running && this.finish();
				}),
				(e.prototype.pause = function () {
					this.running = !1;
				}),
				(e.prototype.resume = function () {
					(this.running = !0),
						this._index < this.buffer.length && this.parse(),
						this.ended && this.finish();
				}),
				(e.prototype.getAbsoluteIndex = function () {
					return this.bufferOffset + this._index;
				}),
				(e.prototype.stateText = function (e) {
					'<' === e
						? (this._index > this.sectionStart &&
								this.cbs.ontext(this.getSection()),
						  (this._state = 2),
						  (this.sectionStart = this._index))
						: !this.decodeEntities ||
						  '&' !== e ||
						  (1 !== this.special && 4 !== this.special) ||
						  (this._index > this.sectionStart &&
								this.cbs.ontext(this.getSection()),
						  (this.baseState = 1),
						  (this._state = 62),
						  (this.sectionStart = this._index));
				}),
				(e.prototype.isTagStartChar = function (e) {
					return (
						ln(e) ||
						(this.xmlMode && !sn(e) && '/' !== e && '>' !== e)
					);
				}),
				(e.prototype.stateBeforeTagName = function (e) {
					'/' === e
						? (this._state = 5)
						: '<' === e
						? (this.cbs.ontext(this.getSection()),
						  (this.sectionStart = this._index))
						: '>' === e || 1 !== this.special || sn(e)
						? (this._state = 1)
						: '!' === e
						? ((this._state = 15),
						  (this.sectionStart = this._index + 1))
						: '?' === e
						? ((this._state = 17),
						  (this.sectionStart = this._index + 1))
						: this.isTagStartChar(e)
						? ((this._state =
								this.xmlMode || ('s' !== e && 'S' !== e)
									? this.xmlMode || ('t' !== e && 'T' !== e)
										? 3
										: 52
									: 32),
						  (this.sectionStart = this._index))
						: (this._state = 1);
				}),
				(e.prototype.stateInTagName = function (e) {
					('/' === e || '>' === e || sn(e)) &&
						(this.emitToken('onopentagname'),
						(this._state = 8),
						this._index--);
				}),
				(e.prototype.stateBeforeClosingTagName = function (e) {
					sn(e) ||
						('>' === e
							? (this._state = 1)
							: 1 !== this.special
							? 4 === this.special || ('s' !== e && 'S' !== e)
								? 4 !== this.special || ('t' !== e && 'T' !== e)
									? ((this._state = 1), this._index--)
									: (this._state = 53)
								: (this._state = 33)
							: this.isTagStartChar(e)
							? ((this._state = 6),
							  (this.sectionStart = this._index))
							: ((this._state = 20),
							  (this.sectionStart = this._index)));
				}),
				(e.prototype.stateInClosingTagName = function (e) {
					('>' === e || sn(e)) &&
						(this.emitToken('onclosetag'),
						(this._state = 7),
						this._index--);
				}),
				(e.prototype.stateAfterClosingTagName = function (e) {
					'>' === e &&
						((this._state = 1),
						(this.sectionStart = this._index + 1));
				}),
				(e.prototype.stateBeforeAttributeName = function (e) {
					'>' === e
						? (this.cbs.onopentagend(),
						  (this._state = 1),
						  (this.sectionStart = this._index + 1))
						: '/' === e
						? (this._state = 4)
						: sn(e) ||
						  ((this._state = 9),
						  (this.sectionStart = this._index));
				}),
				(e.prototype.stateInSelfClosingTag = function (e) {
					'>' === e
						? (this.cbs.onselfclosingtag(),
						  (this._state = 1),
						  (this.sectionStart = this._index + 1),
						  (this.special = 1))
						: sn(e) || ((this._state = 8), this._index--);
				}),
				(e.prototype.stateInAttributeName = function (e) {
					('=' === e || '/' === e || '>' === e || sn(e)) &&
						(this.cbs.onattribname(this.getSection()),
						(this.sectionStart = -1),
						(this._state = 10),
						this._index--);
				}),
				(e.prototype.stateAfterAttributeName = function (e) {
					'=' === e
						? (this._state = 11)
						: '/' === e || '>' === e
						? (this.cbs.onattribend(void 0),
						  (this._state = 8),
						  this._index--)
						: sn(e) ||
						  (this.cbs.onattribend(void 0),
						  (this._state = 9),
						  (this.sectionStart = this._index));
				}),
				(e.prototype.stateBeforeAttributeValue = function (e) {
					'"' === e
						? ((this._state = 12),
						  (this.sectionStart = this._index + 1))
						: "'" === e
						? ((this._state = 13),
						  (this.sectionStart = this._index + 1))
						: sn(e) ||
						  ((this._state = 14),
						  (this.sectionStart = this._index),
						  this._index--);
				}),
				(e.prototype.handleInAttributeValue = function (e, t) {
					e === t
						? (this.emitToken('onattribdata'),
						  this.cbs.onattribend(t),
						  (this._state = 8))
						: this.decodeEntities &&
						  '&' === e &&
						  (this.emitToken('onattribdata'),
						  (this.baseState = this._state),
						  (this._state = 62),
						  (this.sectionStart = this._index));
				}),
				(e.prototype.stateInAttributeValueDoubleQuotes = function (e) {
					this.handleInAttributeValue(e, '"');
				}),
				(e.prototype.stateInAttributeValueSingleQuotes = function (e) {
					this.handleInAttributeValue(e, "'");
				}),
				(e.prototype.stateInAttributeValueNoQuotes = function (e) {
					sn(e) || '>' === e
						? (this.emitToken('onattribdata'),
						  this.cbs.onattribend(null),
						  (this._state = 8),
						  this._index--)
						: this.decodeEntities &&
						  '&' === e &&
						  (this.emitToken('onattribdata'),
						  (this.baseState = this._state),
						  (this._state = 62),
						  (this.sectionStart = this._index));
				}),
				(e.prototype.stateBeforeDeclaration = function (e) {
					this._state = '[' === e ? 23 : '-' === e ? 18 : 16;
				}),
				(e.prototype.stateInDeclaration = function (e) {
					'>' === e &&
						(this.cbs.ondeclaration(this.getSection()),
						(this._state = 1),
						(this.sectionStart = this._index + 1));
				}),
				(e.prototype.stateInProcessingInstruction = function (e) {
					'>' === e &&
						(this.cbs.onprocessinginstruction(this.getSection()),
						(this._state = 1),
						(this.sectionStart = this._index + 1));
				}),
				(e.prototype.stateBeforeComment = function (e) {
					'-' === e
						? ((this._state = 19),
						  (this.sectionStart = this._index + 1))
						: (this._state = 16);
				}),
				(e.prototype.stateInComment = function (e) {
					'-' === e && (this._state = 21);
				}),
				(e.prototype.stateInSpecialComment = function (e) {
					'>' === e &&
						(this.cbs.oncomment(
							this.buffer.substring(
								this.sectionStart,
								this._index
							)
						),
						(this._state = 1),
						(this.sectionStart = this._index + 1));
				}),
				(e.prototype.stateAfterComment1 = function (e) {
					this._state = '-' === e ? 22 : 19;
				}),
				(e.prototype.stateAfterComment2 = function (e) {
					'>' === e
						? (this.cbs.oncomment(
								this.buffer.substring(
									this.sectionStart,
									this._index - 2
								)
						  ),
						  (this._state = 1),
						  (this.sectionStart = this._index + 1))
						: '-' !== e && (this._state = 19);
				}),
				(e.prototype.stateBeforeCdata6 = function (e) {
					'[' === e
						? ((this._state = 29),
						  (this.sectionStart = this._index + 1))
						: ((this._state = 16), this._index--);
				}),
				(e.prototype.stateInCdata = function (e) {
					']' === e && (this._state = 30);
				}),
				(e.prototype.stateAfterCdata1 = function (e) {
					this._state = ']' === e ? 31 : 29;
				}),
				(e.prototype.stateAfterCdata2 = function (e) {
					'>' === e
						? (this.cbs.oncdata(
								this.buffer.substring(
									this.sectionStart,
									this._index - 2
								)
						  ),
						  (this._state = 1),
						  (this.sectionStart = this._index + 1))
						: ']' !== e && (this._state = 29);
				}),
				(e.prototype.stateBeforeSpecialS = function (e) {
					'c' === e || 'C' === e
						? (this._state = 34)
						: 't' === e || 'T' === e
						? (this._state = 44)
						: ((this._state = 3), this._index--);
				}),
				(e.prototype.stateBeforeSpecialSEnd = function (e) {
					2 !== this.special || ('c' !== e && 'C' !== e)
						? 3 !== this.special || ('t' !== e && 'T' !== e)
							? (this._state = 1)
							: (this._state = 48)
						: (this._state = 39);
				}),
				(e.prototype.stateBeforeSpecialLast = function (e, t) {
					('/' === e || '>' === e || sn(e)) && (this.special = t),
						(this._state = 3),
						this._index--;
				}),
				(e.prototype.stateAfterSpecialLast = function (e, t) {
					'>' === e || sn(e)
						? ((this.special = 1),
						  (this._state = 6),
						  (this.sectionStart = this._index - t),
						  this._index--)
						: (this._state = 1);
				}),
				(e.prototype.parseFixedEntity = function (e) {
					if (
						(void 0 === e &&
							(e = this.xmlMode ? on.default : nn.default),
						this.sectionStart + 1 < this._index)
					) {
						var t = this.buffer.substring(
							this.sectionStart + 1,
							this._index
						);
						Object.prototype.hasOwnProperty.call(e, t) &&
							(this.emitPartial(e[t]),
							(this.sectionStart = this._index + 1));
					}
				}),
				(e.prototype.parseLegacyEntity = function () {
					for (
						var e = this.sectionStart + 1,
							t = Math.min(this._index - e, 6);
						t >= 2;

					) {
						var r = this.buffer.substr(e, t);
						if (Object.prototype.hasOwnProperty.call(an.default, r))
							return (
								this.emitPartial(an.default[r]),
								void (this.sectionStart += t + 1)
							);
						t--;
					}
				}),
				(e.prototype.stateInNamedEntity = function (e) {
					';' === e
						? (this.parseFixedEntity(),
						  1 === this.baseState &&
								this.sectionStart + 1 < this._index &&
								!this.xmlMode &&
								this.parseLegacyEntity(),
						  (this._state = this.baseState))
						: (e < '0' || e > '9') &&
						  !ln(e) &&
						  (this.xmlMode ||
								this.sectionStart + 1 === this._index ||
								(1 !== this.baseState
									? '=' !== e &&
									  this.parseFixedEntity(an.default)
									: this.parseLegacyEntity()),
						  (this._state = this.baseState),
						  this._index--);
				}),
				(e.prototype.decodeNumericEntity = function (e, t, r) {
					var n = this.sectionStart + e;
					if (n !== this._index) {
						var a = this.buffer.substring(n, this._index),
							o = parseInt(a, t);
						this.emitPartial(rn.default(o)),
							(this.sectionStart = r
								? this._index + 1
								: this._index);
					}
					this._state = this.baseState;
				}),
				(e.prototype.stateInNumericEntity = function (e) {
					';' === e
						? this.decodeNumericEntity(2, 10, !0)
						: (e < '0' || e > '9') &&
						  (this.xmlMode
								? (this._state = this.baseState)
								: this.decodeNumericEntity(2, 10, !1),
						  this._index--);
				}),
				(e.prototype.stateInHexEntity = function (e) {
					';' === e
						? this.decodeNumericEntity(3, 16, !0)
						: (e < 'a' || e > 'f') &&
						  (e < 'A' || e > 'F') &&
						  (e < '0' || e > '9') &&
						  (this.xmlMode
								? (this._state = this.baseState)
								: this.decodeNumericEntity(3, 16, !1),
						  this._index--);
				}),
				(e.prototype.cleanup = function () {
					this.sectionStart < 0
						? ((this.buffer = ''),
						  (this.bufferOffset += this._index),
						  (this._index = 0))
						: this.running &&
						  (1 === this._state
								? (this.sectionStart !== this._index &&
										this.cbs.ontext(
											this.buffer.substr(
												this.sectionStart
											)
										),
								  (this.buffer = ''),
								  (this.bufferOffset += this._index),
								  (this._index = 0))
								: this.sectionStart === this._index
								? ((this.buffer = ''),
								  (this.bufferOffset += this._index),
								  (this._index = 0))
								: ((this.buffer = this.buffer.substr(
										this.sectionStart
								  )),
								  (this._index -= this.sectionStart),
								  (this.bufferOffset += this.sectionStart)),
						  (this.sectionStart = 0));
				}),
				(e.prototype.parse = function () {
					for (; this._index < this.buffer.length && this.running; ) {
						var e = this.buffer.charAt(this._index);
						1 === this._state
							? this.stateText(e)
							: 12 === this._state
							? this.stateInAttributeValueDoubleQuotes(e)
							: 9 === this._state
							? this.stateInAttributeName(e)
							: 19 === this._state
							? this.stateInComment(e)
							: 20 === this._state
							? this.stateInSpecialComment(e)
							: 8 === this._state
							? this.stateBeforeAttributeName(e)
							: 3 === this._state
							? this.stateInTagName(e)
							: 6 === this._state
							? this.stateInClosingTagName(e)
							: 2 === this._state
							? this.stateBeforeTagName(e)
							: 10 === this._state
							? this.stateAfterAttributeName(e)
							: 13 === this._state
							? this.stateInAttributeValueSingleQuotes(e)
							: 11 === this._state
							? this.stateBeforeAttributeValue(e)
							: 5 === this._state
							? this.stateBeforeClosingTagName(e)
							: 7 === this._state
							? this.stateAfterClosingTagName(e)
							: 32 === this._state
							? this.stateBeforeSpecialS(e)
							: 21 === this._state
							? this.stateAfterComment1(e)
							: 14 === this._state
							? this.stateInAttributeValueNoQuotes(e)
							: 4 === this._state
							? this.stateInSelfClosingTag(e)
							: 16 === this._state
							? this.stateInDeclaration(e)
							: 15 === this._state
							? this.stateBeforeDeclaration(e)
							: 22 === this._state
							? this.stateAfterComment2(e)
							: 18 === this._state
							? this.stateBeforeComment(e)
							: 33 === this._state
							? this.stateBeforeSpecialSEnd(e)
							: 53 === this._state
							? Nn(this, e)
							: 39 === this._state
							? wn(this, e)
							: 40 === this._state
							? xn(this, e)
							: 41 === this._state
							? kn(this, e)
							: 34 === this._state
							? gn(this, e)
							: 35 === this._state
							? bn(this, e)
							: 36 === this._state
							? vn(this, e)
							: 37 === this._state
							? yn(this, e)
							: 38 === this._state
							? this.stateBeforeSpecialLast(e, 2)
							: 42 === this._state
							? Sn(this, e)
							: 43 === this._state
							? this.stateAfterSpecialLast(e, 6)
							: 44 === this._state
							? En(this, e)
							: 29 === this._state
							? this.stateInCdata(e)
							: 45 === this._state
							? qn(this, e)
							: 46 === this._state
							? Dn(this, e)
							: 47 === this._state
							? this.stateBeforeSpecialLast(e, 3)
							: 48 === this._state
							? Tn(this, e)
							: 49 === this._state
							? An(this, e)
							: 50 === this._state
							? Ln(this, e)
							: 51 === this._state
							? this.stateAfterSpecialLast(e, 5)
							: 52 === this._state
							? Cn(this, e)
							: 54 === this._state
							? _n(this, e)
							: 55 === this._state
							? On(this, e)
							: 56 === this._state
							? Bn(this, e)
							: 57 === this._state
							? this.stateBeforeSpecialLast(e, 4)
							: 58 === this._state
							? Pn(this, e)
							: 59 === this._state
							? In(this, e)
							: 60 === this._state
							? Rn(this, e)
							: 61 === this._state
							? this.stateAfterSpecialLast(e, 5)
							: 17 === this._state
							? this.stateInProcessingInstruction(e)
							: 64 === this._state
							? this.stateInNamedEntity(e)
							: 23 === this._state
							? pn(this, e)
							: 62 === this._state
							? jn(this, e)
							: 24 === this._state
							? dn(this, e)
							: 25 === this._state
							? fn(this, e)
							: 30 === this._state
							? this.stateAfterCdata1(e)
							: 31 === this._state
							? this.stateAfterCdata2(e)
							: 26 === this._state
							? hn(this, e)
							: 27 === this._state
							? mn(this, e)
							: 28 === this._state
							? this.stateBeforeCdata6(e)
							: 66 === this._state
							? this.stateInHexEntity(e)
							: 65 === this._state
							? this.stateInNumericEntity(e)
							: 63 === this._state
							? Mn(this, e)
							: this.cbs.onerror(
									Error('unknown _state'),
									this._state
							  ),
							this._index++;
					}
					this.cleanup();
				}),
				(e.prototype.finish = function () {
					this.sectionStart < this._index &&
						this.handleTrailingData(),
						this.cbs.onend();
				}),
				(e.prototype.handleTrailingData = function () {
					var e = this.buffer.substr(this.sectionStart);
					29 === this._state ||
					30 === this._state ||
					31 === this._state
						? this.cbs.oncdata(e)
						: 19 === this._state ||
						  21 === this._state ||
						  22 === this._state
						? this.cbs.oncomment(e)
						: 64 !== this._state || this.xmlMode
						? 65 !== this._state || this.xmlMode
							? 66 !== this._state || this.xmlMode
								? 3 !== this._state &&
								  8 !== this._state &&
								  11 !== this._state &&
								  10 !== this._state &&
								  9 !== this._state &&
								  13 !== this._state &&
								  12 !== this._state &&
								  14 !== this._state &&
								  6 !== this._state &&
								  this.cbs.ontext(e)
								: (this.decodeNumericEntity(3, 16, !1),
								  this.sectionStart < this._index &&
										((this._state = this.baseState),
										this.handleTrailingData()))
							: (this.decodeNumericEntity(2, 10, !1),
							  this.sectionStart < this._index &&
									((this._state = this.baseState),
									this.handleTrailingData()))
						: (this.parseLegacyEntity(),
						  this.sectionStart < this._index &&
								((this._state = this.baseState),
								this.handleTrailingData()));
				}),
				(e.prototype.getSection = function () {
					return this.buffer.substring(
						this.sectionStart,
						this._index
					);
				}),
				(e.prototype.emitToken = function (e) {
					this.cbs[e](this.getSection()), (this.sectionStart = -1);
				}),
				(e.prototype.emitPartial = function (e) {
					1 !== this.baseState
						? this.cbs.onattribdata(e)
						: this.cbs.ontext(e);
				}),
				e
			);
		})();
	$r.default = Fn;
	var Vn =
		(k && k.__importDefault) ||
		function (e) {
			return e && e.__esModule ? e : { default: e };
		};
	Object.defineProperty(zr, '__esModule', { value: !0 }),
		(zr.Parser = void 0);
	var Un = Vn($r),
		Hn = new Set([
			'input',
			'option',
			'optgroup',
			'select',
			'button',
			'datalist',
			'textarea',
		]),
		Gn = new Set(['p']),
		Wn = {
			tr: new Set(['tr', 'th', 'td']),
			th: new Set(['th']),
			td: new Set(['thead', 'th', 'td']),
			body: new Set(['head', 'link', 'script']),
			li: new Set(['li']),
			p: Gn,
			h1: Gn,
			h2: Gn,
			h3: Gn,
			h4: Gn,
			h5: Gn,
			h6: Gn,
			select: Hn,
			input: Hn,
			output: Hn,
			button: Hn,
			datalist: Hn,
			textarea: Hn,
			option: new Set(['option']),
			optgroup: new Set(['optgroup', 'option']),
			dd: new Set(['dt', 'dd']),
			dt: new Set(['dt', 'dd']),
			address: Gn,
			article: Gn,
			aside: Gn,
			blockquote: Gn,
			details: Gn,
			div: Gn,
			dl: Gn,
			fieldset: Gn,
			figcaption: Gn,
			figure: Gn,
			footer: Gn,
			form: Gn,
			header: Gn,
			hr: Gn,
			main: Gn,
			nav: Gn,
			ol: Gn,
			pre: Gn,
			section: Gn,
			table: Gn,
			ul: Gn,
			rt: new Set(['rt', 'rp']),
			rp: new Set(['rt', 'rp']),
			tbody: new Set(['thead', 'tbody']),
			tfoot: new Set(['thead', 'tbody']),
		},
		zn = new Set([
			'area',
			'base',
			'basefont',
			'br',
			'col',
			'command',
			'embed',
			'frame',
			'hr',
			'img',
			'input',
			'isindex',
			'keygen',
			'link',
			'meta',
			'param',
			'source',
			'track',
			'wbr',
		]),
		$n = new Set(['math', 'svg']),
		Jn = new Set([
			'mi',
			'mo',
			'mn',
			'ms',
			'mtext',
			'annotation-xml',
			'foreignObject',
			'desc',
			'title',
		]),
		Yn = /\s|\//,
		Xn = (function () {
			function e(e, t) {
				var r, n, a, o, i;
				void 0 === t && (t = {}),
					(this.startIndex = 0),
					(this.endIndex = null),
					(this.tagname = ''),
					(this.attribname = ''),
					(this.attribvalue = ''),
					(this.attribs = null),
					(this.stack = []),
					(this.foreignContext = []),
					(this.options = t),
					(this.cbs = null != e ? e : {}),
					(this.lowerCaseTagNames =
						null !== (r = t.lowerCaseTags) && void 0 !== r
							? r
							: !t.xmlMode),
					(this.lowerCaseAttributeNames =
						null !== (n = t.lowerCaseAttributeNames) && void 0 !== n
							? n
							: !t.xmlMode),
					(this.tokenizer = new (
						null !== (a = t.Tokenizer) && void 0 !== a
							? a
							: Un.default
					)(this.options, this)),
					null === (i = (o = this.cbs).onparserinit) ||
						void 0 === i ||
						i.call(o, this);
			}
			return (
				(e.prototype.updatePosition = function (e) {
					null === this.endIndex
						? this.tokenizer.sectionStart <= e
							? (this.startIndex = 0)
							: (this.startIndex =
									this.tokenizer.sectionStart - e)
						: (this.startIndex = this.endIndex + 1),
						(this.endIndex = this.tokenizer.getAbsoluteIndex());
				}),
				(e.prototype.ontext = function (e) {
					var t, r;
					this.updatePosition(1),
						this.endIndex--,
						null === (r = (t = this.cbs).ontext) ||
							void 0 === r ||
							r.call(t, e);
				}),
				(e.prototype.onopentagname = function (e) {
					var t, r;
					if (
						(this.lowerCaseTagNames && (e = e.toLowerCase()),
						(this.tagname = e),
						!this.options.xmlMode &&
							Object.prototype.hasOwnProperty.call(Wn, e))
					)
						for (
							var n = void 0;
							this.stack.length > 0 &&
							Wn[e].has((n = this.stack[this.stack.length - 1]));

						)
							this.onclosetag(n);
					(!this.options.xmlMode && zn.has(e)) ||
						(this.stack.push(e),
						$n.has(e)
							? this.foreignContext.push(!0)
							: Jn.has(e) && this.foreignContext.push(!1)),
						null === (r = (t = this.cbs).onopentagname) ||
							void 0 === r ||
							r.call(t, e),
						this.cbs.onopentag && (this.attribs = {});
				}),
				(e.prototype.onopentagend = function () {
					var e, t;
					this.updatePosition(1),
						this.attribs &&
							(null === (t = (e = this.cbs).onopentag) ||
								void 0 === t ||
								t.call(e, this.tagname, this.attribs),
							(this.attribs = null)),
						!this.options.xmlMode &&
							this.cbs.onclosetag &&
							zn.has(this.tagname) &&
							this.cbs.onclosetag(this.tagname),
						(this.tagname = '');
				}),
				(e.prototype.onclosetag = function (e) {
					if (
						(this.updatePosition(1),
						this.lowerCaseTagNames && (e = e.toLowerCase()),
						($n.has(e) || Jn.has(e)) && this.foreignContext.pop(),
						!this.stack.length ||
							(!this.options.xmlMode && zn.has(e)))
					)
						this.options.xmlMode ||
							('br' !== e && 'p' !== e) ||
							(this.onopentagname(e), this.closeCurrentTag());
					else {
						var t = this.stack.lastIndexOf(e);
						if (-1 !== t)
							if (this.cbs.onclosetag)
								for (t = this.stack.length - t; t--; )
									this.cbs.onclosetag(this.stack.pop());
							else this.stack.length = t;
						else
							'p' !== e ||
								this.options.xmlMode ||
								(this.onopentagname(e), this.closeCurrentTag());
					}
				}),
				(e.prototype.onselfclosingtag = function () {
					this.options.xmlMode ||
					this.options.recognizeSelfClosing ||
					this.foreignContext[this.foreignContext.length - 1]
						? this.closeCurrentTag()
						: this.onopentagend();
				}),
				(e.prototype.closeCurrentTag = function () {
					var e,
						t,
						r = this.tagname;
					this.onopentagend(),
						this.stack[this.stack.length - 1] === r &&
							(null === (t = (e = this.cbs).onclosetag) ||
								void 0 === t ||
								t.call(e, r),
							this.stack.pop());
				}),
				(e.prototype.onattribname = function (e) {
					this.lowerCaseAttributeNames && (e = e.toLowerCase()),
						(this.attribname = e);
				}),
				(e.prototype.onattribdata = function (e) {
					this.attribvalue += e;
				}),
				(e.prototype.onattribend = function (e) {
					var t, r;
					null === (r = (t = this.cbs).onattribute) ||
						void 0 === r ||
						r.call(t, this.attribname, this.attribvalue, e),
						this.attribs &&
							!Object.prototype.hasOwnProperty.call(
								this.attribs,
								this.attribname
							) &&
							(this.attribs[this.attribname] = this.attribvalue),
						(this.attribname = ''),
						(this.attribvalue = '');
				}),
				(e.prototype.getInstructionName = function (e) {
					var t = e.search(Yn),
						r = t < 0 ? e : e.substr(0, t);
					return this.lowerCaseTagNames && (r = r.toLowerCase()), r;
				}),
				(e.prototype.ondeclaration = function (e) {
					if (this.cbs.onprocessinginstruction) {
						var t = this.getInstructionName(e);
						this.cbs.onprocessinginstruction('!' + t, '!' + e);
					}
				}),
				(e.prototype.onprocessinginstruction = function (e) {
					if (this.cbs.onprocessinginstruction) {
						var t = this.getInstructionName(e);
						this.cbs.onprocessinginstruction('?' + t, '?' + e);
					}
				}),
				(e.prototype.oncomment = function (e) {
					var t, r, n, a;
					this.updatePosition(4),
						null === (r = (t = this.cbs).oncomment) ||
							void 0 === r ||
							r.call(t, e),
						null === (a = (n = this.cbs).oncommentend) ||
							void 0 === a ||
							a.call(n);
				}),
				(e.prototype.oncdata = function (e) {
					var t, r, n, a, o, i;
					this.updatePosition(1),
						this.options.xmlMode || this.options.recognizeCDATA
							? (null === (r = (t = this.cbs).oncdatastart) ||
									void 0 === r ||
									r.call(t),
							  null === (a = (n = this.cbs).ontext) ||
									void 0 === a ||
									a.call(n, e),
							  null === (i = (o = this.cbs).oncdataend) ||
									void 0 === i ||
									i.call(o))
							: this.oncomment('[CDATA[' + e + ']]');
				}),
				(e.prototype.onerror = function (e) {
					var t, r;
					null === (r = (t = this.cbs).onerror) ||
						void 0 === r ||
						r.call(t, e);
				}),
				(e.prototype.onend = function () {
					var e, t;
					if (this.cbs.onclosetag)
						for (
							var r = this.stack.length;
							r > 0;
							this.cbs.onclosetag(this.stack[--r])
						);
					null === (t = (e = this.cbs).onend) ||
						void 0 === t ||
						t.call(e);
				}),
				(e.prototype.reset = function () {
					var e, t, r, n;
					null === (t = (e = this.cbs).onreset) ||
						void 0 === t ||
						t.call(e),
						this.tokenizer.reset(),
						(this.tagname = ''),
						(this.attribname = ''),
						(this.attribs = null),
						(this.stack = []),
						null === (n = (r = this.cbs).onparserinit) ||
							void 0 === n ||
							n.call(r, this);
				}),
				(e.prototype.parseComplete = function (e) {
					this.reset(), this.end(e);
				}),
				(e.prototype.write = function (e) {
					this.tokenizer.write(e);
				}),
				(e.prototype.end = function (e) {
					this.tokenizer.end(e);
				}),
				(e.prototype.pause = function () {
					this.tokenizer.pause();
				}),
				(e.prototype.resume = function () {
					this.tokenizer.resume();
				}),
				(e.prototype.parseChunk = function (e) {
					this.write(e);
				}),
				(e.prototype.done = function (e) {
					this.end(e);
				}),
				e
			);
		})();
	zr.Parser = Xn;
	var Zn = {},
		Qn = {},
		Kn = {},
		ea = {},
		ta = {},
		ra = {},
		na =
			(k && k.__importDefault) ||
			function (e) {
				return e && e.__esModule ? e : { default: e };
			};
	Object.defineProperty(ra, '__esModule', { value: !0 }),
		(ra.decodeHTML = ra.decodeHTMLStrict = ra.decodeXML = void 0);
	var aa = na(Qr),
		oa = na(Kr),
		ia = na(en),
		sa = na(Jr),
		la = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
	function ca(e) {
		var t = pa(e);
		return function (e) {
			return String(e).replace(la, t);
		};
	}
	(ra.decodeXML = ca(ia.default)), (ra.decodeHTMLStrict = ca(aa.default));
	var ua = function (e, t) {
		return e < t ? 1 : -1;
	};
	function pa(e) {
		return function (t) {
			if ('#' === t.charAt(1)) {
				var r = t.charAt(2);
				return 'X' === r || 'x' === r
					? sa.default(parseInt(t.substr(3), 16))
					: sa.default(parseInt(t.substr(2), 10));
			}
			return e[t.slice(1, -1)] || t;
		};
	}
	ra.decodeHTML = (function () {
		for (
			var e = Object.keys(oa.default).sort(ua),
				t = Object.keys(aa.default).sort(ua),
				r = 0,
				n = 0;
			r < t.length;
			r++
		)
			e[n] === t[r] ? ((t[r] += ';?'), n++) : (t[r] += ';');
		var a = new RegExp(
				'&(?:' + t.join('|') + '|#[xX][\\da-fA-F]+;?|#\\d+;?)',
				'g'
			),
			o = pa(aa.default);
		function i(e) {
			return ';' !== e.substr(-1) && (e += ';'), o(e);
		}
		return function (e) {
			return String(e).replace(a, i);
		};
	})();
	var da = {},
		fa =
			(k && k.__importDefault) ||
			function (e) {
				return e && e.__esModule ? e : { default: e };
			};
	Object.defineProperty(da, '__esModule', { value: !0 }),
		(da.escapeUTF8 =
			da.escape =
			da.encodeNonAsciiHTML =
			da.encodeHTML =
			da.encodeXML =
				void 0);
	var ha = wa(fa(en).default),
		ma = xa(ha);
	da.encodeXML = Da(ha);
	var ga,
		ba,
		va = wa(fa(Qr).default),
		ya = xa(va);
	function wa(e) {
		return Object.keys(e)
			.sort()
			.reduce(function (t, r) {
				return (t[e[r]] = '&' + r + ';'), t;
			}, {});
	}
	function xa(e) {
		for (var t = [], r = [], n = 0, a = Object.keys(e); n < a.length; n++) {
			var o = a[n];
			1 === o.length ? t.push('\\' + o) : r.push(o);
		}
		t.sort();
		for (var i = 0; i < t.length - 1; i++) {
			for (
				var s = i;
				s < t.length - 1 &&
				t[s].charCodeAt(1) + 1 === t[s + 1].charCodeAt(1);

			)
				s += 1;
			var l = 1 + s - i;
			l < 3 || t.splice(i, l, t[i] + '-' + t[s]);
		}
		return r.unshift('[' + t.join('') + ']'), new RegExp(r.join('|'), 'g');
	}
	(da.encodeHTML =
		((ga = va),
		(ba = ya),
		function (e) {
			return e
				.replace(ba, function (e) {
					return ga[e];
				})
				.replace(ka, Ea);
		})),
		(da.encodeNonAsciiHTML = Da(va));
	var ka =
			/(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
		Sa =
			null != String.prototype.codePointAt
				? function (e) {
						return e.codePointAt(0);
				  }
				: function (e) {
						return (
							1024 * (e.charCodeAt(0) - 55296) +
							e.charCodeAt(1) -
							56320 +
							65536
						);
				  };
	function Ea(e) {
		return (
			'&#x' +
			(e.length > 1 ? Sa(e) : e.charCodeAt(0))
				.toString(16)
				.toUpperCase() +
			';'
		);
	}
	var qa = new RegExp(ma.source + '|' + ka.source, 'g');
	function Da(e) {
		return function (t) {
			return t.replace(qa, function (t) {
				return e[t] || Ea(t);
			});
		};
	}
	(da.escape = function (e) {
		return e.replace(qa, Ea);
	}),
		(da.escapeUTF8 = function (e) {
			return e.replace(ma, Ea);
		}),
		(function (e) {
			Object.defineProperty(e, '__esModule', { value: !0 }),
				(e.decodeXMLStrict =
					e.decodeHTML5Strict =
					e.decodeHTML4Strict =
					e.decodeHTML5 =
					e.decodeHTML4 =
					e.decodeHTMLStrict =
					e.decodeHTML =
					e.decodeXML =
					e.encodeHTML5 =
					e.encodeHTML4 =
					e.escapeUTF8 =
					e.escape =
					e.encodeNonAsciiHTML =
					e.encodeHTML =
					e.encodeXML =
					e.encode =
					e.decodeStrict =
					e.decode =
						void 0);
			var t = ra,
				r = da;
			(e.decode = function (e, r) {
				return (!r || r <= 0 ? t.decodeXML : t.decodeHTML)(e);
			}),
				(e.decodeStrict = function (e, r) {
					return (!r || r <= 0 ? t.decodeXML : t.decodeHTMLStrict)(e);
				}),
				(e.encode = function (e, t) {
					return (!t || t <= 0 ? r.encodeXML : r.encodeHTML)(e);
				});
			var n = da;
			Object.defineProperty(e, 'encodeXML', {
				enumerable: !0,
				get: function () {
					return n.encodeXML;
				},
			}),
				Object.defineProperty(e, 'encodeHTML', {
					enumerable: !0,
					get: function () {
						return n.encodeHTML;
					},
				}),
				Object.defineProperty(e, 'encodeNonAsciiHTML', {
					enumerable: !0,
					get: function () {
						return n.encodeNonAsciiHTML;
					},
				}),
				Object.defineProperty(e, 'escape', {
					enumerable: !0,
					get: function () {
						return n.escape;
					},
				}),
				Object.defineProperty(e, 'escapeUTF8', {
					enumerable: !0,
					get: function () {
						return n.escapeUTF8;
					},
				}),
				Object.defineProperty(e, 'encodeHTML4', {
					enumerable: !0,
					get: function () {
						return n.encodeHTML;
					},
				}),
				Object.defineProperty(e, 'encodeHTML5', {
					enumerable: !0,
					get: function () {
						return n.encodeHTML;
					},
				});
			var a = ra;
			Object.defineProperty(e, 'decodeXML', {
				enumerable: !0,
				get: function () {
					return a.decodeXML;
				},
			}),
				Object.defineProperty(e, 'decodeHTML', {
					enumerable: !0,
					get: function () {
						return a.decodeHTML;
					},
				}),
				Object.defineProperty(e, 'decodeHTMLStrict', {
					enumerable: !0,
					get: function () {
						return a.decodeHTMLStrict;
					},
				}),
				Object.defineProperty(e, 'decodeHTML4', {
					enumerable: !0,
					get: function () {
						return a.decodeHTML;
					},
				}),
				Object.defineProperty(e, 'decodeHTML5', {
					enumerable: !0,
					get: function () {
						return a.decodeHTML;
					},
				}),
				Object.defineProperty(e, 'decodeHTML4Strict', {
					enumerable: !0,
					get: function () {
						return a.decodeHTMLStrict;
					},
				}),
				Object.defineProperty(e, 'decodeHTML5Strict', {
					enumerable: !0,
					get: function () {
						return a.decodeHTMLStrict;
					},
				}),
				Object.defineProperty(e, 'decodeXMLStrict', {
					enumerable: !0,
					get: function () {
						return a.decodeXML;
					},
				});
		})(ta);
	var Ta = {};
	Object.defineProperty(Ta, '__esModule', { value: !0 }),
		(Ta.attributeNames = Ta.elementNames = void 0),
		(Ta.elementNames = new Map([
			['altglyph', 'altGlyph'],
			['altglyphdef', 'altGlyphDef'],
			['altglyphitem', 'altGlyphItem'],
			['animatecolor', 'animateColor'],
			['animatemotion', 'animateMotion'],
			['animatetransform', 'animateTransform'],
			['clippath', 'clipPath'],
			['feblend', 'feBlend'],
			['fecolormatrix', 'feColorMatrix'],
			['fecomponenttransfer', 'feComponentTransfer'],
			['fecomposite', 'feComposite'],
			['feconvolvematrix', 'feConvolveMatrix'],
			['fediffuselighting', 'feDiffuseLighting'],
			['fedisplacementmap', 'feDisplacementMap'],
			['fedistantlight', 'feDistantLight'],
			['fedropshadow', 'feDropShadow'],
			['feflood', 'feFlood'],
			['fefunca', 'feFuncA'],
			['fefuncb', 'feFuncB'],
			['fefuncg', 'feFuncG'],
			['fefuncr', 'feFuncR'],
			['fegaussianblur', 'feGaussianBlur'],
			['feimage', 'feImage'],
			['femerge', 'feMerge'],
			['femergenode', 'feMergeNode'],
			['femorphology', 'feMorphology'],
			['feoffset', 'feOffset'],
			['fepointlight', 'fePointLight'],
			['fespecularlighting', 'feSpecularLighting'],
			['fespotlight', 'feSpotLight'],
			['fetile', 'feTile'],
			['feturbulence', 'feTurbulence'],
			['foreignobject', 'foreignObject'],
			['glyphref', 'glyphRef'],
			['lineargradient', 'linearGradient'],
			['radialgradient', 'radialGradient'],
			['textpath', 'textPath'],
		])),
		(Ta.attributeNames = new Map([
			['definitionurl', 'definitionURL'],
			['attributename', 'attributeName'],
			['attributetype', 'attributeType'],
			['basefrequency', 'baseFrequency'],
			['baseprofile', 'baseProfile'],
			['calcmode', 'calcMode'],
			['clippathunits', 'clipPathUnits'],
			['diffuseconstant', 'diffuseConstant'],
			['edgemode', 'edgeMode'],
			['filterunits', 'filterUnits'],
			['glyphref', 'glyphRef'],
			['gradienttransform', 'gradientTransform'],
			['gradientunits', 'gradientUnits'],
			['kernelmatrix', 'kernelMatrix'],
			['kernelunitlength', 'kernelUnitLength'],
			['keypoints', 'keyPoints'],
			['keysplines', 'keySplines'],
			['keytimes', 'keyTimes'],
			['lengthadjust', 'lengthAdjust'],
			['limitingconeangle', 'limitingConeAngle'],
			['markerheight', 'markerHeight'],
			['markerunits', 'markerUnits'],
			['markerwidth', 'markerWidth'],
			['maskcontentunits', 'maskContentUnits'],
			['maskunits', 'maskUnits'],
			['numoctaves', 'numOctaves'],
			['pathlength', 'pathLength'],
			['patterncontentunits', 'patternContentUnits'],
			['patterntransform', 'patternTransform'],
			['patternunits', 'patternUnits'],
			['pointsatx', 'pointsAtX'],
			['pointsaty', 'pointsAtY'],
			['pointsatz', 'pointsAtZ'],
			['preservealpha', 'preserveAlpha'],
			['preserveaspectratio', 'preserveAspectRatio'],
			['primitiveunits', 'primitiveUnits'],
			['refx', 'refX'],
			['refy', 'refY'],
			['repeatcount', 'repeatCount'],
			['repeatdur', 'repeatDur'],
			['requiredextensions', 'requiredExtensions'],
			['requiredfeatures', 'requiredFeatures'],
			['specularconstant', 'specularConstant'],
			['specularexponent', 'specularExponent'],
			['spreadmethod', 'spreadMethod'],
			['startoffset', 'startOffset'],
			['stddeviation', 'stdDeviation'],
			['stitchtiles', 'stitchTiles'],
			['surfacescale', 'surfaceScale'],
			['systemlanguage', 'systemLanguage'],
			['tablevalues', 'tableValues'],
			['targetx', 'targetX'],
			['targety', 'targetY'],
			['textlength', 'textLength'],
			['viewbox', 'viewBox'],
			['viewtarget', 'viewTarget'],
			['xchannelselector', 'xChannelSelector'],
			['ychannelselector', 'yChannelSelector'],
			['zoomandpan', 'zoomAndPan'],
		]));
	var Aa =
			(k && k.__assign) ||
			function () {
				return (Aa =
					Object.assign ||
					function (e) {
						for (var t, r = 1, n = arguments.length; r < n; r++)
							for (var a in (t = arguments[r]))
								Object.prototype.hasOwnProperty.call(t, a) &&
									(e[a] = t[a]);
						return e;
					}).apply(this, arguments);
			},
		La =
			(k && k.__createBinding) ||
			(Object.create
				? function (e, t, r, n) {
						void 0 === n && (n = r),
							Object.defineProperty(e, n, {
								enumerable: !0,
								get: function () {
									return t[r];
								},
							});
				  }
				: function (e, t, r, n) {
						void 0 === n && (n = r), (e[n] = t[r]);
				  }),
		Ca =
			(k && k.__setModuleDefault) ||
			(Object.create
				? function (e, t) {
						Object.defineProperty(e, 'default', {
							enumerable: !0,
							value: t,
						});
				  }
				: function (e, t) {
						e.default = t;
				  }),
		_a =
			(k && k.__importStar) ||
			function (e) {
				if (e && e.__esModule) return e;
				var t = {};
				if (null != e)
					for (var r in e)
						'default' !== r &&
							Object.prototype.hasOwnProperty.call(e, r) &&
							La(t, e, r);
				return Ca(t, e), t;
			};
	Object.defineProperty(ea, '__esModule', { value: !0 });
	var Oa = _a(ut),
		Ba = ta,
		Na = Ta,
		Pa = new Set([
			'style',
			'script',
			'xmp',
			'iframe',
			'noembed',
			'noframes',
			'plaintext',
			'noscript',
		]);
	var Ia = new Set([
		'area',
		'base',
		'basefont',
		'br',
		'col',
		'command',
		'embed',
		'frame',
		'hr',
		'img',
		'input',
		'isindex',
		'keygen',
		'link',
		'meta',
		'param',
		'source',
		'track',
		'wbr',
	]);
	function Ra(e, t) {
		void 0 === t && (t = {});
		for (
			var r = ('length' in e) ? e : [e], n = '', a = 0;
			a < r.length;
			a++
		)
			n += ja(r[a], t);
		return n;
	}
	function ja(e, t) {
		switch (e.type) {
			case Oa.Root:
				return Ra(e.children, t);
			case Oa.Directive:
			case Oa.Doctype:
				return '<' + e.data + '>';
			case Oa.Comment:
				return (function (e) {
					return '\x3c!--' + e.data + '--\x3e';
				})(e);
			case Oa.CDATA:
				return (function (e) {
					return '<![CDATA[' + e.children[0].data + ']]>';
				})(e);
			case Oa.Script:
			case Oa.Style:
			case Oa.Tag:
				return (function (e, t) {
					var r;
					'foreign' === t.xmlMode &&
						((e.name =
							null !== (r = Na.elementNames.get(e.name)) &&
							void 0 !== r
								? r
								: e.name),
						e.parent &&
							Ma.has(e.parent.name) &&
							(t = Aa(Aa({}, t), { xmlMode: !1 })));
					!t.xmlMode &&
						Fa.has(e.name) &&
						(t = Aa(Aa({}, t), { xmlMode: 'foreign' }));
					var n = '<' + e.name,
						a = (function (e, t) {
							if (e)
								return Object.keys(e)
									.map(function (r) {
										var n,
											a,
											o =
												null !== (n = e[r]) &&
												void 0 !== n
													? n
													: '';
										return (
											'foreign' === t.xmlMode &&
												(r =
													null !==
														(a =
															Na.attributeNames.get(
																r
															)) && void 0 !== a
														? a
														: r),
											t.emptyAttrs ||
											t.xmlMode ||
											'' !== o
												? r +
												  '="' +
												  (!1 !== t.decodeEntities
														? Ba.encodeXML(o)
														: o.replace(
																/"/g,
																'&quot;'
														  )) +
												  '"'
												: r
										);
									})
									.join(' ');
						})(e.attribs, t);
					a && (n += ' ' + a);
					0 === e.children.length &&
					(t.xmlMode
						? !1 !== t.selfClosingTags
						: t.selfClosingTags && Ia.has(e.name))
						? (t.xmlMode || (n += ' '), (n += '/>'))
						: ((n += '>'),
						  e.children.length > 0 && (n += Ra(e.children, t)),
						  (!t.xmlMode && Ia.has(e.name)) ||
								(n += '</' + e.name + '>'));
					return n;
				})(e, t);
			case Oa.Text:
				return (function (e, t) {
					var r = e.data || '';
					!1 === t.decodeEntities ||
						(!t.xmlMode && e.parent && Pa.has(e.parent.name)) ||
						(r = Ba.encodeXML(r));
					return r;
				})(e, t);
		}
	}
	ea.default = Ra;
	var Ma = new Set([
			'mi',
			'mo',
			'mn',
			'ms',
			'mtext',
			'annotation-xml',
			'foreignObject',
			'desc',
			'title',
		]),
		Fa = new Set(['svg', 'math']);
	var Va =
		(k && k.__importDefault) ||
		function (e) {
			return e && e.__esModule ? e : { default: e };
		};
	Object.defineProperty(Kn, '__esModule', { value: !0 }),
		(Kn.innerText =
			Kn.textContent =
			Kn.getText =
			Kn.getInnerHTML =
			Kn.getOuterHTML =
				void 0);
	var Ua = ct,
		Ha = Va(ea),
		Ga = ut;
	function Wa(e, t) {
		return (0, Ha.default)(e, t);
	}
	(Kn.getOuterHTML = Wa),
		(Kn.getInnerHTML = function (e, t) {
			return (0, Ua.hasChildren)(e)
				? e.children
						.map(function (e) {
							return Wa(e, t);
						})
						.join('')
				: '';
		}),
		(Kn.getText = function e(t) {
			return Array.isArray(t)
				? t.map(e).join('')
				: (0, Ua.isTag)(t)
				? 'br' === t.name
					? '\n'
					: e(t.children)
				: (0, Ua.isCDATA)(t)
				? e(t.children)
				: (0, Ua.isText)(t)
				? t.data
				: '';
		}),
		(Kn.textContent = function e(t) {
			return Array.isArray(t)
				? t.map(e).join('')
				: (0, Ua.hasChildren)(t) && !(0, Ua.isComment)(t)
				? e(t.children)
				: (0, Ua.isText)(t)
				? t.data
				: '';
		}),
		(Kn.innerText = function e(t) {
			return Array.isArray(t)
				? t.map(e).join('')
				: (0, Ua.hasChildren)(t) &&
				  (t.type === Ga.ElementType.Tag || (0, Ua.isCDATA)(t))
				? e(t.children)
				: (0, Ua.isText)(t)
				? t.data
				: '';
		});
	var za = {};
	Object.defineProperty(za, '__esModule', { value: !0 }),
		(za.prevElementSibling =
			za.nextElementSibling =
			za.getName =
			za.hasAttrib =
			za.getAttributeValue =
			za.getSiblings =
			za.getParent =
			za.getChildren =
				void 0);
	var $a = ct,
		Ja = [];
	function Ya(e) {
		var t;
		return null !== (t = e.children) && void 0 !== t ? t : Ja;
	}
	function Xa(e) {
		return e.parent || null;
	}
	(za.getChildren = Ya),
		(za.getParent = Xa),
		(za.getSiblings = function (e) {
			var t = Xa(e);
			if (null != t) return Ya(t);
			for (var r = [e], n = e.prev, a = e.next; null != n; )
				r.unshift(n), (n = n.prev);
			for (; null != a; ) r.push(a), (a = a.next);
			return r;
		}),
		(za.getAttributeValue = function (e, t) {
			var r;
			return null === (r = e.attribs) || void 0 === r ? void 0 : r[t];
		}),
		(za.hasAttrib = function (e, t) {
			return (
				null != e.attribs &&
				Object.prototype.hasOwnProperty.call(e.attribs, t) &&
				null != e.attribs[t]
			);
		}),
		(za.getName = function (e) {
			return e.name;
		}),
		(za.nextElementSibling = function (e) {
			for (var t = e.next; null !== t && !(0, $a.isTag)(t); ) t = t.next;
			return t;
		}),
		(za.prevElementSibling = function (e) {
			for (var t = e.prev; null !== t && !(0, $a.isTag)(t); ) t = t.prev;
			return t;
		});
	var Za = {};
	function Qa(e) {
		if (
			(e.prev && (e.prev.next = e.next),
			e.next && (e.next.prev = e.prev),
			e.parent)
		) {
			var t = e.parent.children;
			t.splice(t.lastIndexOf(e), 1);
		}
	}
	Object.defineProperty(Za, '__esModule', { value: !0 }),
		(Za.prepend =
			Za.prependChild =
			Za.append =
			Za.appendChild =
			Za.replaceElement =
			Za.removeElement =
				void 0),
		(Za.removeElement = Qa),
		(Za.replaceElement = function (e, t) {
			var r = (t.prev = e.prev);
			r && (r.next = t);
			var n = (t.next = e.next);
			n && (n.prev = t);
			var a = (t.parent = e.parent);
			if (a) {
				var o = a.children;
				o[o.lastIndexOf(e)] = t;
			}
		}),
		(Za.appendChild = function (e, t) {
			if (
				(Qa(t), (t.next = null), (t.parent = e), e.children.push(t) > 1)
			) {
				var r = e.children[e.children.length - 2];
				(r.next = t), (t.prev = r);
			} else t.prev = null;
		}),
		(Za.append = function (e, t) {
			Qa(t);
			var r = e.parent,
				n = e.next;
			if (((t.next = n), (t.prev = e), (e.next = t), (t.parent = r), n)) {
				if (((n.prev = t), r)) {
					var a = r.children;
					a.splice(a.lastIndexOf(n), 0, t);
				}
			} else r && r.children.push(t);
		}),
		(Za.prependChild = function (e, t) {
			if (
				(Qa(t),
				(t.parent = e),
				(t.prev = null),
				1 !== e.children.unshift(t))
			) {
				var r = e.children[1];
				(r.prev = t), (t.next = r);
			} else t.next = null;
		}),
		(Za.prepend = function (e, t) {
			Qa(t);
			var r = e.parent;
			if (r) {
				var n = r.children;
				n.splice(n.indexOf(e), 0, t);
			}
			e.prev && (e.prev.next = t),
				(t.parent = r),
				(t.prev = e.prev),
				(t.next = e),
				(e.prev = t);
		});
	var Ka = {};
	Object.defineProperty(Ka, '__esModule', { value: !0 }),
		(Ka.findAll =
			Ka.existsOne =
			Ka.findOne =
			Ka.findOneChild =
			Ka.find =
			Ka.filter =
				void 0);
	var eo = ct;
	function to(e, t, r, n) {
		for (var a = [], o = 0, i = t; o < i.length; o++) {
			var s = i[o];
			if (e(s) && (a.push(s), --n <= 0)) break;
			if (r && (0, eo.hasChildren)(s) && s.children.length > 0) {
				var l = to(e, s.children, r, n);
				if ((a.push.apply(a, l), (n -= l.length) <= 0)) break;
			}
		}
		return a;
	}
	(Ka.filter = function (e, t, r, n) {
		return (
			void 0 === r && (r = !0),
			void 0 === n && (n = 1 / 0),
			Array.isArray(t) || (t = [t]),
			to(e, t, r, n)
		);
	}),
		(Ka.find = to),
		(Ka.findOneChild = function (e, t) {
			return t.find(e);
		}),
		(Ka.findOne = function e(t, r, n) {
			void 0 === n && (n = !0);
			for (var a = null, o = 0; o < r.length && !a; o++) {
				var i = r[o];
				(0, eo.isTag)(i) &&
					(t(i)
						? (a = i)
						: n && i.children.length > 0 && (a = e(t, i.children)));
			}
			return a;
		}),
		(Ka.existsOne = function e(t, r) {
			return r.some(function (r) {
				return (
					(0, eo.isTag)(r) &&
					(t(r) || (r.children.length > 0 && e(t, r.children)))
				);
			});
		}),
		(Ka.findAll = function (e, t) {
			for (var r, n, a = [], o = t.filter(eo.isTag); (n = o.shift()); ) {
				var i =
					null === (r = n.children) || void 0 === r
						? void 0
						: r.filter(eo.isTag);
				i && i.length > 0 && o.unshift.apply(o, i), e(n) && a.push(n);
			}
			return a;
		});
	var ro = {};
	Object.defineProperty(ro, '__esModule', { value: !0 }),
		(ro.getElementsByTagType =
			ro.getElementsByTagName =
			ro.getElementById =
			ro.getElements =
			ro.testElement =
				void 0);
	var no = ct,
		ao = Ka,
		oo = {
			tag_name: function (e) {
				return 'function' == typeof e
					? function (t) {
							return (0, no.isTag)(t) && e(t.name);
					  }
					: '*' === e
					? no.isTag
					: function (t) {
							return (0, no.isTag)(t) && t.name === e;
					  };
			},
			tag_type: function (e) {
				return 'function' == typeof e
					? function (t) {
							return e(t.type);
					  }
					: function (t) {
							return t.type === e;
					  };
			},
			tag_contains: function (e) {
				return 'function' == typeof e
					? function (t) {
							return (0, no.isText)(t) && e(t.data);
					  }
					: function (t) {
							return (0, no.isText)(t) && t.data === e;
					  };
			},
		};
	function io(e, t) {
		return 'function' == typeof t
			? function (r) {
					return (0, no.isTag)(r) && t(r.attribs[e]);
			  }
			: function (r) {
					return (0, no.isTag)(r) && r.attribs[e] === t;
			  };
	}
	function so(e, t) {
		return function (r) {
			return e(r) || t(r);
		};
	}
	function lo(e) {
		var t = Object.keys(e).map(function (t) {
			var r = e[t];
			return Object.prototype.hasOwnProperty.call(oo, t)
				? oo[t](r)
				: io(t, r);
		});
		return 0 === t.length ? null : t.reduce(so);
	}
	(ro.testElement = function (e, t) {
		var r = lo(e);
		return !r || r(t);
	}),
		(ro.getElements = function (e, t, r, n) {
			void 0 === n && (n = 1 / 0);
			var a = lo(e);
			return a ? (0, ao.filter)(a, t, r, n) : [];
		}),
		(ro.getElementById = function (e, t, r) {
			return (
				void 0 === r && (r = !0),
				Array.isArray(t) || (t = [t]),
				(0, ao.findOne)(io('id', e), t, r)
			);
		}),
		(ro.getElementsByTagName = function (e, t, r, n) {
			return (
				void 0 === r && (r = !0),
				void 0 === n && (n = 1 / 0),
				(0, ao.filter)(oo.tag_name(e), t, r, n)
			);
		}),
		(ro.getElementsByTagType = function (e, t, r, n) {
			return (
				void 0 === r && (r = !0),
				void 0 === n && (n = 1 / 0),
				(0, ao.filter)(oo.tag_type(e), t, r, n)
			);
		});
	var co = {};
	Object.defineProperty(co, '__esModule', { value: !0 }),
		(co.uniqueSort =
			co.compareDocumentPosition =
			co.removeSubsets =
				void 0);
	var uo = ct;
	function po(e, t) {
		var r = [],
			n = [];
		if (e === t) return 0;
		for (var a = (0, uo.hasChildren)(e) ? e : e.parent; a; )
			r.unshift(a), (a = a.parent);
		for (a = (0, uo.hasChildren)(t) ? t : t.parent; a; )
			n.unshift(a), (a = a.parent);
		for (
			var o = Math.min(r.length, n.length), i = 0;
			i < o && r[i] === n[i];

		)
			i++;
		if (0 === i) return 1;
		var s = r[i - 1],
			l = s.children,
			c = r[i],
			u = n[i];
		return l.indexOf(c) > l.indexOf(u)
			? s === t
				? 20
				: 4
			: s === e
			? 10
			: 2;
	}
	(co.removeSubsets = function (e) {
		for (var t = e.length; --t >= 0; ) {
			var r = e[t];
			if (t > 0 && e.lastIndexOf(r, t - 1) >= 0) e.splice(t, 1);
			else
				for (var n = r.parent; n; n = n.parent)
					if (e.includes(n)) {
						e.splice(t, 1);
						break;
					}
		}
		return e;
	}),
		(co.compareDocumentPosition = po),
		(co.uniqueSort = function (e) {
			return (
				(e = e.filter(function (e, t, r) {
					return !r.includes(e, t + 1);
				})).sort(function (e, t) {
					var r = po(e, t);
					return 2 & r ? -1 : 4 & r ? 1 : 0;
				}),
				e
			);
		});
	var fo = {};
	Object.defineProperty(fo, '__esModule', { value: !0 }),
		(fo.getFeed = void 0);
	var ho = Kn,
		mo = ro;
	fo.getFeed = function (e) {
		var t = yo(ko, e);
		return t
			? 'feed' === t.name
				? (function (e) {
						var t,
							r = e.children,
							n = {
								type: 'atom',
								items: (0, mo.getElementsByTagName)(
									'entry',
									r
								).map(function (e) {
									var t,
										r = e.children,
										n = { media: vo(r) };
									xo(n, 'id', 'id', r),
										xo(n, 'title', 'title', r);
									var a =
										null === (t = yo('link', r)) ||
										void 0 === t
											? void 0
											: t.attribs.href;
									a && (n.link = a);
									var o =
										wo('summary', r) || wo('content', r);
									o && (n.description = o);
									var i = wo('updated', r);
									return i && (n.pubDate = new Date(i)), n;
								}),
							};
						xo(n, 'id', 'id', r), xo(n, 'title', 'title', r);
						var a =
							null === (t = yo('link', r)) || void 0 === t
								? void 0
								: t.attribs.href;
						a && (n.link = a);
						xo(n, 'description', 'subtitle', r);
						var o = wo('updated', r);
						o && (n.updated = new Date(o));
						return xo(n, 'author', 'email', r, !0), n;
				  })(t)
				: (function (e) {
						var t,
							r,
							n =
								null !==
									(r =
										null ===
											(t = yo('channel', e.children)) ||
										void 0 === t
											? void 0
											: t.children) && void 0 !== r
									? r
									: [],
							a = {
								type: e.name.substr(0, 3),
								id: '',
								items: (0, mo.getElementsByTagName)(
									'item',
									e.children
								).map(function (e) {
									var t = e.children,
										r = { media: vo(t) };
									xo(r, 'id', 'guid', t),
										xo(r, 'title', 'title', t),
										xo(r, 'link', 'link', t),
										xo(r, 'description', 'description', t);
									var n = wo('pubDate', t);
									return n && (r.pubDate = new Date(n)), r;
								}),
							};
						xo(a, 'title', 'title', n),
							xo(a, 'link', 'link', n),
							xo(a, 'description', 'description', n);
						var o = wo('lastBuildDate', n);
						o && (a.updated = new Date(o));
						return xo(a, 'author', 'managingEditor', n, !0), a;
				  })(t)
			: null;
	};
	var go = ['url', 'type', 'lang'],
		bo = [
			'fileSize',
			'bitrate',
			'framerate',
			'samplingrate',
			'channels',
			'duration',
			'height',
			'width',
		];
	function vo(e) {
		return (0, mo.getElementsByTagName)('media:content', e).map(function (
			e
		) {
			for (
				var t = e.attribs,
					r = { medium: t.medium, isDefault: !!t.isDefault },
					n = 0,
					a = go;
				n < a.length;
				n++
			) {
				t[(s = a[n])] && (r[s] = t[s]);
			}
			for (var o = 0, i = bo; o < i.length; o++) {
				var s;
				t[(s = i[o])] && (r[s] = parseInt(t[s], 10));
			}
			return t.expression && (r.expression = t.expression), r;
		});
	}
	function yo(e, t) {
		return (0, mo.getElementsByTagName)(e, t, !0, 1)[0];
	}
	function wo(e, t, r) {
		return (
			void 0 === r && (r = !1),
			(0, ho.textContent)((0, mo.getElementsByTagName)(e, t, r, 1)).trim()
		);
	}
	function xo(e, t, r, n, a) {
		void 0 === a && (a = !1);
		var o = wo(r, n, a);
		o && (e[t] = o);
	}
	function ko(e) {
		return 'rss' === e || 'feed' === e || 'rdf:RDF' === e;
	}
	!(function (e) {
		var t =
				(k && k.__createBinding) ||
				(Object.create
					? function (e, t, r, n) {
							void 0 === n && (n = r),
								Object.defineProperty(e, n, {
									enumerable: !0,
									get: function () {
										return t[r];
									},
								});
					  }
					: function (e, t, r, n) {
							void 0 === n && (n = r), (e[n] = t[r]);
					  }),
			r =
				(k && k.__exportStar) ||
				function (e, r) {
					for (var n in e)
						'default' === n ||
							Object.prototype.hasOwnProperty.call(r, n) ||
							t(r, e, n);
				};
		Object.defineProperty(e, '__esModule', { value: !0 }),
			(e.hasChildren =
				e.isDocument =
				e.isComment =
				e.isText =
				e.isCDATA =
				e.isTag =
					void 0),
			r(Kn, e),
			r(za, e),
			r(Za, e),
			r(Ka, e),
			r(ro, e),
			r(co, e),
			r(fo, e);
		var n = ct;
		Object.defineProperty(e, 'isTag', {
			enumerable: !0,
			get: function () {
				return n.isTag;
			},
		}),
			Object.defineProperty(e, 'isCDATA', {
				enumerable: !0,
				get: function () {
					return n.isCDATA;
				},
			}),
			Object.defineProperty(e, 'isText', {
				enumerable: !0,
				get: function () {
					return n.isText;
				},
			}),
			Object.defineProperty(e, 'isComment', {
				enumerable: !0,
				get: function () {
					return n.isComment;
				},
			}),
			Object.defineProperty(e, 'isDocument', {
				enumerable: !0,
				get: function () {
					return n.isDocument;
				},
			}),
			Object.defineProperty(e, 'hasChildren', {
				enumerable: !0,
				get: function () {
					return n.hasChildren;
				},
			});
	})(Qn);
	var So =
			(k && k.__extends) ||
			(function () {
				var e = function (t, r) {
					return (e =
						Object.setPrototypeOf ||
						({ __proto__: [] } instanceof Array &&
							function (e, t) {
								e.__proto__ = t;
							}) ||
						function (e, t) {
							for (var r in t)
								Object.prototype.hasOwnProperty.call(t, r) &&
									(e[r] = t[r]);
						})(t, r);
				};
				return function (t, r) {
					if ('function' != typeof r && null !== r)
						throw new TypeError(
							'Class extends value ' +
								String(r) +
								' is not a constructor or null'
						);
					function n() {
						this.constructor = t;
					}
					e(t, r),
						(t.prototype =
							null === r
								? Object.create(r)
								: ((n.prototype = r.prototype), new n()));
				};
			})(),
		Eo =
			(k && k.__createBinding) ||
			(Object.create
				? function (e, t, r, n) {
						void 0 === n && (n = r),
							Object.defineProperty(e, n, {
								enumerable: !0,
								get: function () {
									return t[r];
								},
							});
				  }
				: function (e, t, r, n) {
						void 0 === n && (n = r), (e[n] = t[r]);
				  }),
		qo =
			(k && k.__setModuleDefault) ||
			(Object.create
				? function (e, t) {
						Object.defineProperty(e, 'default', {
							enumerable: !0,
							value: t,
						});
				  }
				: function (e, t) {
						e.default = t;
				  }),
		Do =
			(k && k.__importStar) ||
			function (e) {
				if (e && e.__esModule) return e;
				var t = {};
				if (null != e)
					for (var r in e)
						'default' !== r &&
							Object.prototype.hasOwnProperty.call(e, r) &&
							Eo(t, e, r);
				return qo(t, e), t;
			},
		To =
			(k && k.__importDefault) ||
			function (e) {
				return e && e.__esModule ? e : { default: e };
			};
	Object.defineProperty(Zn, '__esModule', { value: !0 }),
		(Zn.parseFeed = Zn.FeedHandler = void 0);
	var Ao,
		Lo,
		Co,
		_o,
		Oo = To(ct),
		Bo = Do(Qn),
		No = zr;
	((Lo = Ao || (Ao = {}))[(Lo.image = 0)] = 'image'),
		(Lo[(Lo.audio = 1)] = 'audio'),
		(Lo[(Lo.video = 2)] = 'video'),
		(Lo[(Lo.document = 3)] = 'document'),
		(Lo[(Lo.executable = 4)] = 'executable'),
		((_o = Co || (Co = {}))[(_o.sample = 0)] = 'sample'),
		(_o[(_o.full = 1)] = 'full'),
		(_o[(_o.nonstop = 2)] = 'nonstop');
	var Po = (function (e) {
		function t(t, r) {
			return (
				'object' == typeof t && (r = t = void 0),
				e.call(this, t, r) || this
			);
		}
		return (
			So(t, e),
			(t.prototype.onend = function () {
				var e,
					t,
					r = jo(Uo, this.dom);
				if (r) {
					var n = {};
					if ('feed' === r.name) {
						var a = r.children;
						(n.type = 'atom'),
							Vo(n, 'id', 'id', a),
							Vo(n, 'title', 'title', a);
						var o = Fo('href', jo('link', a));
						o && (n.link = o),
							Vo(n, 'description', 'subtitle', a),
							(i = Mo('updated', a)) && (n.updated = new Date(i)),
							Vo(n, 'author', 'email', a, !0),
							(n.items = Ro('entry', a).map(function (e) {
								var t = {},
									r = e.children;
								Vo(t, 'id', 'id', r),
									Vo(t, 'title', 'title', r);
								var n = Fo('href', jo('link', r));
								n && (t.link = n);
								var a = Mo('summary', r) || Mo('content', r);
								a && (t.description = a);
								var o = Mo('updated', r);
								return (
									o && (t.pubDate = new Date(o)),
									(t.media = Io(r)),
									t
								);
							}));
					} else {
						var i;
						a =
							null !==
								(t =
									null === (e = jo('channel', r.children)) ||
									void 0 === e
										? void 0
										: e.children) && void 0 !== t
								? t
								: [];
						(n.type = r.name.substr(0, 3)),
							(n.id = ''),
							Vo(n, 'title', 'title', a),
							Vo(n, 'link', 'link', a),
							Vo(n, 'description', 'description', a),
							(i = Mo('lastBuildDate', a)) &&
								(n.updated = new Date(i)),
							Vo(n, 'author', 'managingEditor', a, !0),
							(n.items = Ro('item', r.children).map(function (e) {
								var t = {},
									r = e.children;
								Vo(t, 'id', 'guid', r),
									Vo(t, 'title', 'title', r),
									Vo(t, 'link', 'link', r),
									Vo(t, 'description', 'description', r);
								var n = Mo('pubDate', r);
								return (
									n && (t.pubDate = new Date(n)),
									(t.media = Io(r)),
									t
								);
							}));
					}
					(this.feed = n), this.handleCallback(null);
				} else
					this.handleCallback(
						new Error("couldn't find root of feed")
					);
			}),
			t
		);
	})(Oo.default);
	function Io(e) {
		return Ro('media:content', e).map(function (e) {
			var t = {
				medium: e.attribs.medium,
				isDefault: !!e.attribs.isDefault,
			};
			return (
				e.attribs.url && (t.url = e.attribs.url),
				e.attribs.fileSize &&
					(t.fileSize = parseInt(e.attribs.fileSize, 10)),
				e.attribs.type && (t.type = e.attribs.type),
				e.attribs.expression && (t.expression = e.attribs.expression),
				e.attribs.bitrate &&
					(t.bitrate = parseInt(e.attribs.bitrate, 10)),
				e.attribs.framerate &&
					(t.framerate = parseInt(e.attribs.framerate, 10)),
				e.attribs.samplingrate &&
					(t.samplingrate = parseInt(e.attribs.samplingrate, 10)),
				e.attribs.channels &&
					(t.channels = parseInt(e.attribs.channels, 10)),
				e.attribs.duration &&
					(t.duration = parseInt(e.attribs.duration, 10)),
				e.attribs.height && (t.height = parseInt(e.attribs.height, 10)),
				e.attribs.width && (t.width = parseInt(e.attribs.width, 10)),
				e.attribs.lang && (t.lang = e.attribs.lang),
				t
			);
		});
	}
	function Ro(e, t) {
		return Bo.getElementsByTagName(e, t, !0);
	}
	function jo(e, t) {
		return Bo.getElementsByTagName(e, t, !0, 1)[0];
	}
	function Mo(e, t, r) {
		return (
			void 0 === r && (r = !1),
			Bo.getText(Bo.getElementsByTagName(e, t, r, 1)).trim()
		);
	}
	function Fo(e, t) {
		return t ? t.attribs[e] : null;
	}
	function Vo(e, t, r, n, a) {
		void 0 === a && (a = !1);
		var o = Mo(r, n, a);
		o && (e[t] = o);
	}
	function Uo(e) {
		return 'rss' === e || 'feed' === e || 'rdf:RDF' === e;
	}
	(Zn.FeedHandler = Po),
		(Zn.parseFeed = function (e, t) {
			void 0 === t && (t = { xmlMode: !0 });
			var r = new Po(t);
			return new No.Parser(r, t).end(e), r.feed;
		}),
		(function (e) {
			var t =
					(k && k.__createBinding) ||
					(Object.create
						? function (e, t, r, n) {
								void 0 === n && (n = r),
									Object.defineProperty(e, n, {
										enumerable: !0,
										get: function () {
											return t[r];
										},
									});
						  }
						: function (e, t, r, n) {
								void 0 === n && (n = r), (e[n] = t[r]);
						  }),
				r =
					(k && k.__setModuleDefault) ||
					(Object.create
						? function (e, t) {
								Object.defineProperty(e, 'default', {
									enumerable: !0,
									value: t,
								});
						  }
						: function (e, t) {
								e.default = t;
						  }),
				n =
					(k && k.__importStar) ||
					function (e) {
						if (e && e.__esModule) return e;
						var n = {};
						if (null != e)
							for (var a in e)
								'default' !== a &&
									Object.prototype.hasOwnProperty.call(
										e,
										a
									) &&
									t(n, e, a);
						return r(n, e), n;
					},
				a =
					(k && k.__exportStar) ||
					function (e, r) {
						for (var n in e)
							'default' === n ||
								Object.prototype.hasOwnProperty.call(r, n) ||
								t(r, e, n);
					},
				o =
					(k && k.__importDefault) ||
					function (e) {
						return e && e.__esModule ? e : { default: e };
					};
			Object.defineProperty(e, '__esModule', { value: !0 }),
				(e.RssHandler =
					e.DefaultHandler =
					e.DomUtils =
					e.ElementType =
					e.Tokenizer =
					e.createDomStream =
					e.parseDOM =
					e.parseDocument =
					e.DomHandler =
					e.Parser =
						void 0);
			var i = zr;
			Object.defineProperty(e, 'Parser', {
				enumerable: !0,
				get: function () {
					return i.Parser;
				},
			});
			var s = ct;
			function l(e, t) {
				var r = new s.DomHandler(void 0, t);
				return new i.Parser(r, t).end(e), r.root;
			}
			Object.defineProperty(e, 'DomHandler', {
				enumerable: !0,
				get: function () {
					return s.DomHandler;
				},
			}),
				Object.defineProperty(e, 'DefaultHandler', {
					enumerable: !0,
					get: function () {
						return s.DomHandler;
					},
				}),
				(e.parseDocument = l),
				(e.parseDOM = function (e, t) {
					return l(e, t).children;
				}),
				(e.createDomStream = function (e, t, r) {
					var n = new s.DomHandler(e, t, r);
					return new i.Parser(n, t);
				});
			var c = $r;
			Object.defineProperty(e, 'Tokenizer', {
				enumerable: !0,
				get: function () {
					return o(c).default;
				},
			});
			var u = n(ut);
			(e.ElementType = u), a(Zn, e), (e.DomUtils = n(Qn));
			var p = Zn;
			Object.defineProperty(e, 'RssHandler', {
				enumerable: !0,
				get: function () {
					return p.FeedHandler;
				},
			});
		})(Wr);
	const Ho = Hr;
	const Go = ['I', 'X', 'C', 'M'],
		Wo = ['V', 'L', 'D'];
	const zo = (e, t, r) => [...t];
	var $o = {
		get: function (e, t) {
			for (const r of t) {
				if (!e) return;
				e = e[r];
			}
			return e;
		},
		limitedDepthRecursive: function e(t, r, n = () => {}) {
			if (void 0 === t) {
				const e = function (...t) {
					return r(e, ...t);
				};
				return e;
			}
			return t >= 0
				? function (...a) {
						return r(e(t - 1, r, n), ...a);
				  }
				: n;
		},
		mergeDuplicatesPreferLast: function (e, t) {
			const r = new Map();
			for (let n = e.length; n-- > 0; ) {
				const a = e[n],
					o = t(a);
				r.set(o, r.has(o) ? Ho(a, r.get(o), { arrayMerge: zo }) : a);
			}
			return [...r.values()].reverse();
		},
		numberToLetterSequence: function (e, t = 'a', r = 26) {
			const n = [];
			do {
				(e -= 1), n.push(e % r), (e = (e / r) >> 0);
			} while (e > 0);
			const a = t.charCodeAt(0);
			return n
				.reverse()
				.map((e) => String.fromCharCode(a + e))
				.join('');
		},
		numberToRoman: function (e) {
			return [...(e + '')]
				.map((e) => +e)
				.reverse()
				.map((e, t) =>
					e % 5 < 4
						? (e < 5 ? '' : Wo[t]) + Go[t].repeat(e % 5)
						: Go[t] + (e < 5 ? Wo[t] : Go[t + 1])
				)
				.reverse()
				.join('');
		},
		set: function (e, t, r) {
			const n = t.pop();
			for (const a of t) {
				let t = e[a];
				t || ((t = {}), (e[a] = t)), (e = t);
			}
			e[n] = r;
		},
		splitClassesAndIds: function (e) {
			const t = [],
				r = [];
			for (const n of e)
				n.startsWith('.')
					? t.push(n.substring(1))
					: n.startsWith('#') && r.push(n.substring(1));
			return { classes: t, ids: r };
		},
		trimCharacter: function (e, t) {
			let r = 0,
				n = e.length;
			for (; r < n && e[r] === t; ) ++r;
			for (; n > r && e[n - 1] === t; ) --n;
			return r > 0 || n < e.length ? e.substring(r, n) : e;
		},
	};
	var Jo = {
		InlineTextBuilder: class {
			constructor(e, t) {
				(this.lines = []),
					(this.nextLineWords = []),
					(this.maxLineLength = t || e.wordwrap || Number.MAX_VALUE),
					(this.nextLineAvailableChars = this.maxLineLength),
					(this.wrapCharacters =
						e.longWordSplit.wrapCharacters || []),
					(this.forceWrapOnLimit =
						e.longWordSplit.forceWrapOnLimit || !1),
					(this.stashedSpace = !1),
					(this.wordBreakOpportunity = !1);
			}
			pushWord(e) {
				this.nextLineAvailableChars <= 0 && this.startNewLine();
				const t = 0 === this.nextLineWords.length,
					r = e.length + (t ? 0 : 1);
				if (r <= this.nextLineAvailableChars)
					this.nextLineWords.push(e),
						(this.nextLineAvailableChars -= r);
				else {
					const [r, ...n] = this.splitLongWord(e);
					t || this.startNewLine(),
						this.nextLineWords.push(r),
						(this.nextLineAvailableChars -= r.length);
					for (const e of n)
						this.startNewLine(),
							this.nextLineWords.push(e),
							(this.nextLineAvailableChars -= e.length);
				}
			}
			popWord() {
				const e = this.nextLineWords.pop();
				if (void 0 !== e) {
					const t = 0 === this.nextLineWords.length,
						r = e.length + (t ? 0 : 1);
					this.nextLineAvailableChars += r;
				}
				return e;
			}
			concatWord(e) {
				if (
					this.wordBreakOpportunity &&
					e.length > this.nextLineAvailableChars
				)
					this.pushWord(e), (this.wordBreakOpportunity = !1);
				else {
					const t = this.popWord();
					this.pushWord(t ? t.concat(e) : e);
				}
			}
			startNewLine(e = 1) {
				this.lines.push(this.nextLineWords),
					e > 1 &&
						this.lines.push(
							...Array.from({ length: e - 1 }, () => [])
						),
					(this.nextLineWords = []),
					(this.nextLineAvailableChars = this.maxLineLength);
			}
			isEmpty() {
				return (
					0 === this.lines.length && 0 === this.nextLineWords.length
				);
			}
			clear() {
				(this.lines.length = 0),
					(this.nextLineWords.length = 0),
					(this.nextLineAvailableChars = this.maxLineLength);
			}
			toString() {
				return [...this.lines, this.nextLineWords]
					.map((e) => e.join(' '))
					.join('\n');
			}
			splitLongWord(e) {
				const t = [];
				let r = 0;
				for (; e.length > this.maxLineLength; ) {
					const n = e.substring(0, this.maxLineLength),
						a = e.substring(this.maxLineLength),
						o = n.lastIndexOf(this.wrapCharacters[r]);
					if (o > -1)
						(e = n.substring(o + 1) + a),
							t.push(n.substring(0, o + 1));
					else {
						if ((r++, !(r < this.wrapCharacters.length))) {
							if (this.forceWrapOnLimit) {
								if (
									(t.push(n),
									(e = a).length > this.maxLineLength)
								)
									continue;
							} else e = n + a;
							break;
						}
						e = n + a;
					}
				}
				return t.push(e), t;
			}
		},
	};
	const { InlineTextBuilder: Yo } = Jo;
	class Xo {
		constructor(e = null) {
			this.next = e;
		}
		getRoot() {
			return this.next ? this.next : this;
		}
	}
	var Zo = {
		BlockStackItem: class extends Xo {
			constructor(e, t = null, r = 1, n) {
				super(t),
					(this.leadingLineBreaks = r),
					(this.inlineTextBuilder = new Yo(e, n)),
					(this.rawText = ''),
					(this.stashedLineBreaks = 0),
					(this.isPre = t && t.isPre);
			}
		},
		StackItem: Xo,
		TableCellStackItem: class extends Xo {
			constructor(e, t = null, r) {
				super(t),
					(this.inlineTextBuilder = new Yo(e, r)),
					(this.rawText = ''),
					(this.stashedLineBreaks = 0),
					(this.isPre = t && t.isPre);
			}
		},
		TableRowStackItem: class extends Xo {
			constructor(e = null) {
				super(e), (this.cells = []), (this.isPre = e && e.isPre);
			}
		},
		TableStackItem: class extends Xo {
			constructor(e = null) {
				super(e), (this.rows = []), (this.isPre = e && e.isPre);
			}
		},
		TransformerStackItem: class extends Xo {
			constructor(e = null, t) {
				super(e), (this.transform = t);
			}
		},
	};
	function Qo(e, t) {
		return e[t] || (e[t] = []), e[t];
	}
	function Ko(e, t = 0) {
		for (; e[t]; ) t++;
		return t;
	}
	function ei(e, t, r, n) {
		for (let a = 0; a < e.rowspan; a++) {
			const o = Qo(t, r + a);
			for (let t = 0; t < e.colspan; t++) o[n + t] = e;
		}
	}
	function ti(e, t, r, n) {
		e[t + r] = Math.max(e[t + r] || 0, e[t] + n);
	}
	var ri = {
		tableToString: function (e, t, r) {
			const n = [];
			let a = 0;
			const o = e.length,
				i = [0];
			for (let c = 0; c < o; c++) {
				const r = Qo(n, c),
					o = e[c];
				let s = 0;
				for (let e = 0; e < o.length; e++) {
					const a = o[e];
					(s = Ko(r, s)),
						ei(a, n, c, s),
						(s += a.colspan),
						(a.lines = a.text.split('\n'));
					const l = a.lines.length;
					ti(i, c, a.rowspan, l + t);
				}
				a = r.length > a ? r.length : a;
			}
			!(function (e, t) {
				for (let r = 0; r < t; r++) {
					const t = Qo(e, r);
					for (let n = 0; n < r; n++) {
						const a = Qo(e, n),
							o = t[n];
						(t[n] = a[r]), (a[r] = o);
					}
				}
			})(n, o > a ? o : a);
			const s = [],
				l = [0];
			for (let c = 0; c < a; c++) {
				let e,
					t = 0;
				for (; t < o && (e = n[c][t]); ) {
					if (!e.rendered) {
						let n = 0;
						for (let r = 0; r < e.lines.length; r++) {
							const a = e.lines[r],
								o = i[t] + r;
							(s[o] = (s[o] || '').padEnd(l[c]) + a),
								(n = a.length > n ? a.length : n);
						}
						ti(l, c, e.colspan, n + r), (e.rendered = !0);
					}
					t += e.rowspan;
				}
			}
			return s.join('\n');
		},
	};
	var ni = {
		WhitespaceProcessor: class {
			constructor(e) {
				this.whitespaceChars = e.preserveNewlines
					? e.whitespaceCharacters.replace(/\n/g, '')
					: e.whitespaceCharacters;
				const t =
					((r = this.whitespaceChars),
					[...r]
						.map(
							(e) =>
								'\\u' +
								e.charCodeAt(0).toString(16).padStart(4, '0')
						)
						.join(''));
				var r;
				if (
					((this.leadingWhitespaceRe = new RegExp(`^[${t}]`)),
					(this.trailingWhitespaceRe = new RegExp(`[${t}]$`)),
					(this.allWhitespaceOrEmptyRe = new RegExp(`^[${t}]*$`)),
					e.preserveNewlines)
				) {
					const e = new RegExp(`\n|[^\n${t}]+`, 'gm');
					this.shrinkWrapAdd = function (t, r, n = (e) => e) {
						if (!t) return;
						const a = r.stashedSpace;
						let o = !1,
							i = e.exec(t);
						if (i)
							for (
								o = !0,
									'\n' === i[0]
										? r.startNewLine()
										: a || this.testLeadingWhitespace(t)
										? r.pushWord(n(i[0]))
										: r.concatWord(n(i[0]));
								null !== (i = e.exec(t));

							)
								'\n' === i[0]
									? r.startNewLine()
									: r.pushWord(n(i[0]));
						r.stashedSpace =
							(a && !o) || this.testTrailingWhitespace(t);
					};
				} else {
					const e = new RegExp(`[^${t}]+`, 'g');
					this.shrinkWrapAdd = function (t, r, n = (e) => e) {
						if (!t) return;
						const a = r.stashedSpace;
						let o = !1,
							i = e.exec(t);
						if (i)
							for (
								o = !0,
									a || this.testLeadingWhitespace(t)
										? r.pushWord(n(i[0]))
										: r.concatWord(n(i[0]));
								null !== (i = e.exec(t));

							)
								r.pushWord(n(i[0]));
						r.stashedSpace =
							(a && !o) || this.testTrailingWhitespace(t);
					};
				}
			}
			testLeadingWhitespace(e) {
				return this.leadingWhitespaceRe.test(e);
			}
			testTrailingWhitespace(e) {
				return this.trailingWhitespaceRe.test(e);
			}
			testContainsWords(e) {
				return !this.allWhitespaceOrEmptyRe.test(e);
			}
		},
	};
	const { trimCharacter: ai } = $o,
		{
			StackItem: oi,
			BlockStackItem: ii,
			TableCellStackItem: si,
			TableRowStackItem: li,
			TableStackItem: ci,
			TransformerStackItem: ui,
		} = Zo,
		{ tableToString: pi } = ri,
		{ WhitespaceProcessor: di } = ni;
	function fi(e) {
		if (!(e instanceof ii || e instanceof si))
			throw new Error(
				'Only blocks and table cells can be requested for text contents.'
			);
		return e.inlineTextBuilder.isEmpty()
			? e.rawText
			: e.rawText + e.inlineTextBuilder.toString();
	}
	function hi(e, t, r, n) {
		if (!(e instanceof ii || e instanceof si))
			throw new Error('Only blocks and table cells can contain text.');
		const a = fi(e),
			o = Math.max(e.stashedLineBreaks, r);
		e.inlineTextBuilder.clear(),
			a
				? (e.rawText = a + '\n'.repeat(o) + t)
				: ((e.rawText = t), (e.leadingLineBreaks = o)),
			(e.stashedLineBreaks = n);
	}
	var mi = {
		BlockTextBuilder: class {
			constructor(e, t) {
				(this.options = e),
					(this.picker = t),
					(this.whitepaceProcessor = new di(e)),
					(this._stackItem = new ii(e)),
					(this._wordTransformer = void 0);
			}
			pushWordTransform(e) {
				this._wordTransformer = new ui(this._wordTransformer, e);
			}
			popWordTransform() {
				if (!this._wordTransformer) return;
				const e = this._wordTransformer.transform;
				return (this._wordTransformer = this._wordTransformer.next), e;
			}
			_getCombinedWordTransformer() {
				const e = (t, r) => (r ? e(r.transform(t), r.next) : t);
				return (t) => e(t, this._wordTransformer);
			}
			_popStackItem() {
				const e = this._stackItem;
				return (this._stackItem = e.next), e;
			}
			addLineBreak() {
				(this._stackItem instanceof ii ||
					this._stackItem instanceof si) &&
					(this._stackItem.isPre
						? (this._stackItem.rawText += '\n')
						: this._stackItem.inlineTextBuilder.startNewLine());
			}
			addWordBreakOpportunity() {
				(this._stackItem instanceof ii ||
					this._stackItem instanceof si) &&
					(this._stackItem.inlineTextBuilder.wordBreakOpportunity =
						!0);
			}
			addInline(e, t = {}) {
				'object' == typeof t
					? this._addInline(e, t)
					: this._addInline(e, { noWordTransform: t });
			}
			_addInline(e, { noWordTransform: t = !1 } = {}) {
				(this._stackItem instanceof ii ||
					this._stackItem instanceof si) &&
					(this._stackItem.isPre
						? (this._stackItem.rawText += e)
						: (this.whitepaceProcessor.testContainsWords(e) ||
								(e.length &&
									!this._stackItem.stashedLineBreaks)) &&
						  (this._stackItem.stashedLineBreaks &&
								this._stackItem.inlineTextBuilder.startNewLine(
									this._stackItem.stashedLineBreaks
								),
						  this.whitepaceProcessor.shrinkWrapAdd(
								e,
								this._stackItem.inlineTextBuilder,
								this._wordTransformer && !t
									? this._getCombinedWordTransformer()
									: void 0
						  ),
						  (this._stackItem.stashedLineBreaks = 0)));
			}
			openBlock(e = {}, t, r) {
				'object' == typeof e
					? this._openBlock(e)
					: this._openBlock({
							isPre: r,
							leadingLineBreaks: e,
							reservedLineLength: t,
					  });
			}
			_openBlock({
				leadingLineBreaks: e = 1,
				reservedLineLength: t = 0,
				isPre: r = !1,
			} = {}) {
				const n = Math.max(
					20,
					this._stackItem.inlineTextBuilder.maxLineLength - t
				);
				(this._stackItem = new ii(this.options, this._stackItem, e, n)),
					r && (this._stackItem.isPre = !0);
			}
			closeBlock(e = {}, t) {
				'object' == typeof e
					? this._closeBlock(e)
					: this._closeBlock({
							trailingLineBreaks: e,
							blockTransform: t,
					  });
			}
			_closeBlock({ trailingLineBreaks: e = 1, blockTransform: t } = {}) {
				const r = this._popStackItem(),
					n = t ? t(fi(r)) : fi(r);
				hi(
					this._stackItem,
					n,
					r.leadingLineBreaks,
					Math.max(r.stashedLineBreaks, e)
				);
			}
			openTable() {
				this._stackItem = new ci(this._stackItem);
			}
			openTableRow() {
				if (!(this._stackItem instanceof ci))
					throw new Error(
						"Can't add table row to something that is not a table! Check the formatter."
					);
				this._stackItem = new li(this._stackItem);
			}
			openTableCell(e = {}) {
				'object' == typeof e
					? this._openTableCell(e)
					: this._openTableCell({ maxColumnWidth: e });
			}
			_openTableCell({ maxColumnWidth: e } = {}) {
				if (!(this._stackItem instanceof li))
					throw new Error(
						"Can't add table cell to something that is not a table row! Check the formatter."
					);
				this._stackItem = new si(this.options, this._stackItem, e);
			}
			closeTableCell(e = {}, t) {
				'object' == typeof e
					? this._closeTableCell(e)
					: this._closeTableCell({ colspan: e, rowspan: t });
			}
			_closeTableCell({ colspan: e = 1, rowspan: t = 1 } = {}) {
				const r = this._popStackItem(),
					n = ai(fi(r), '\n');
				r.next.cells.push({ colspan: e, rowspan: t, text: n });
			}
			closeTableRow() {
				const e = this._popStackItem();
				e.next.rows.push(e.cells);
			}
			closeTable(e = {}, t, r, n) {
				'object' == typeof e
					? this._closeTable(e)
					: this._closeTable({
							colSpacing: e,
							leadingLineBreaks: r,
							rowSpacing: t,
							trailingLineBreaks: n,
					  });
			}
			_closeTable({
				colSpacing: e = 3,
				rowSpacing: t = 0,
				leadingLineBreaks: r = 2,
				trailingLineBreaks: n = 2,
			} = {}) {
				const a = this._popStackItem(),
					o = pi(a.rows, t, e);
				o && hi(this._stackItem, o, r, n);
			}
			toString() {
				return fi(this._stackItem.getRoot());
			}
		},
	};
	const gi = Gr.exports,
		{
			get: bi,
			numberToLetterSequence: vi,
			numberToRoman: yi,
			splitClassesAndIds: wi,
			trimCharacter: xi,
		} = $o;
	function ki(e, t, r, n) {
		r.openBlock({ leadingLineBreaks: n.leadingLineBreaks }),
			t(e.children, r),
			r.closeBlock({ trailingLineBreaks: n.trailingLineBreaks });
	}
	function Si(e, t, r, n, a) {
		const o = 'li' === bi(e, ['parent', 'name']);
		let i = 0;
		const s = (e.children || [])
			.filter((e) => 'text' !== e.type || !/^\s*$/.test(e.data))
			.map(function (e) {
				if ('li' !== e.name) return { node: e, prefix: '' };
				const t = o ? a().trimStart() : a();
				return t.length > i && (i = t.length), { node: e, prefix: t };
			});
		if (!s.length) return;
		const l = i,
			c = '\n' + ' '.repeat(l);
		r.openBlock({ leadingLineBreaks: o ? 1 : n.leadingLineBreaks || 2 });
		for (const { node: u, prefix: p } of s)
			r.openBlock({ leadingLineBreaks: 1, reservedLineLength: l }),
				t([u], r),
				r.closeBlock({
					trailingLineBreaks: 1,
					blockTransform: (e) =>
						p + ' '.repeat(l - p.length) + e.replace(/\n/g, c),
				});
		r.closeBlock({ trailingLineBreaks: o ? 1 : n.trailingLineBreaks || 2 });
	}
	function Ei(e, t, r, n) {
		function a(e) {
			const a = +bi(e, ['attribs', 'colspan']) || 1,
				o = +bi(e, ['attribs', 'rowspan']) || 1;
			r.openTableCell({ maxColumnWidth: n.maxColumnWidth }),
				t(e.children, r),
				r.closeTableCell({ colspan: a, rowspan: o });
		}
		r.openTable(),
			e.children.forEach(function e(t) {
				if ('tag' !== t.type) return;
				const o =
					!1 !== n.uppercaseHeaderCells
						? (e) => {
								r.pushWordTransform((e) => e.toUpperCase()),
									a(e),
									r.popWordTransform();
						  }
						: a;
				switch (t.name) {
					case 'thead':
					case 'tbody':
					case 'tfoot':
					case 'center':
						return void t.children.forEach(e);
					case 'tr':
						r.openTableRow();
						for (const e of t.children)
							if ('tag' === e.type)
								switch (e.name) {
									case 'th':
										o(e);
										break;
									case 'td':
										a(e);
								}
						r.closeTableRow();
				}
			}),
			r.closeTable({
				colSpacing: n.colSpacing,
				leadingLineBreaks: n.leadingLineBreaks,
				rowSpacing: n.rowSpacing,
				trailingLineBreaks: n.trailingLineBreaks,
			});
	}
	var qi = {
		anchor: function (e, t, r, n) {
			const a = (function () {
				if (n.ignoreHref) return '';
				if (!e.attribs || !e.attribs.href) return '';
				let t = e.attribs.href.replace(/^mailto:/, '');
				return n.noAnchorUrl && '#' === t[0]
					? ''
					: ((t = n.baseUrl && '/' === t[0] ? n.baseUrl + t : t),
					  gi.decode(t, r.options.decodeOptions));
			})();
			if (a) {
				let o = '';
				r.pushWordTransform((e) => (e && (o += e), e)),
					t(e.children, r),
					r.popWordTransform();
				(n.hideLinkHrefIfSameAsText && a === o) ||
					r.addInline(
						o ? (n.noLinkBrackets ? ' ' + a : ' [' + a + ']') : a,
						{ noWordTransform: !0 }
					);
			} else t(e.children, r);
		},
		block: ki,
		blockquote: function (e, t, r, n) {
			r.openBlock({
				leadingLineBreaks: n.leadingLineBreaks || 2,
				reservedLineLength: 2,
			}),
				t(e.children, r),
				r.closeBlock({
					trailingLineBreaks: n.trailingLineBreaks || 2,
					blockTransform: (e) =>
						(!1 !== n.trimEmptyLines ? xi(e, '\n') : e)
							.split('\n')
							.map((e) => '> ' + e)
							.join('\n'),
				});
		},
		dataTable: Ei,
		heading: function (e, t, r, n) {
			r.openBlock({ leadingLineBreaks: n.leadingLineBreaks || 2 }),
				!1 !== n.uppercase
					? (r.pushWordTransform((e) => e.toUpperCase()),
					  t(e.children, r),
					  r.popWordTransform())
					: t(e.children, r),
				r.closeBlock({ trailingLineBreaks: n.trailingLineBreaks || 2 });
		},
		horizontalLine: function (e, t, r, n) {
			r.openBlock({ leadingLineBreaks: n.leadingLineBreaks || 2 }),
				r.addInline('-'.repeat(n.length || r.options.wordwrap || 40)),
				r.closeBlock({ trailingLineBreaks: n.trailingLineBreaks || 2 });
		},
		image: function (e, t, r, n) {
			const a = e.attribs || {},
				o = a.alt ? gi.decode(a.alt, r.options.decodeOptions) : '',
				i = a.src
					? n.baseUrl && 0 === a.src.indexOf('/')
						? n.baseUrl + a.src
						: a.src
					: '',
				s = i ? (o ? o + ' [' + i + ']' : '[' + i + ']') : o;
			r.addInline(s);
		},
		inline: function (e, t, r, n) {
			t(e.children, r);
		},
		lineBreak: function (e, t, r, n) {
			r.addLineBreak();
		},
		orderedList: function (e, t, r, n) {
			let a = Number(e.attribs.start || '1');
			const o = (function (e = '1') {
				switch (e) {
					case 'a':
						return (e) => vi(e, 'a');
					case 'A':
						return (e) => vi(e, 'A');
					case 'i':
						return (e) => yi(e).toLowerCase();
					case 'I':
						return (e) => yi(e);
					case '1':
					default:
						return (e) => e.toString();
				}
			})(e.attribs.type);
			return Si(e, t, r, n, () => ' ' + o(a++) + '. ');
		},
		paragraph: function (e, t, r, n) {
			r.openBlock({ leadingLineBreaks: n.leadingLineBreaks || 2 }),
				t(e.children, r),
				r.closeBlock({ trailingLineBreaks: n.trailingLineBreaks || 2 });
		},
		pre: function (e, t, r, n) {
			r.openBlock({
				isPre: !0,
				leadingLineBreaks: n.leadingLineBreaks || 2,
			}),
				t(e.children, r),
				r.closeBlock({ trailingLineBreaks: n.trailingLineBreaks || 2 });
		},
		skip: function (e, t, r, n) {},
		table: function (e, t, r, n) {
			return (function (e, t) {
				if (!0 === t) return !0;
				if (!e) return !1;
				const { classes: r, ids: n } = wi(t),
					a = (e.class || '').split(' '),
					o = (e.id || '').split(' ');
				return (
					a.some((e) => r.includes(e)) || o.some((e) => n.includes(e))
				);
			})(e.attribs, r.options.tables)
				? Ei(e, t, r, n)
				: ki(e, t, r, n);
		},
		unorderedList: function (e, t, r, n) {
			const a = n.itemPrefix || ' * ';
			return Si(e, t, r, n, () => a);
		},
		wbr: function (e, t, r, n) {
			r.addWordBreakOpportunity();
		},
	};
	const { hp2Builder: Di } = lt,
		Ti = Hr,
		Ai = Gr.exports,
		Li = Wr,
		Ci = Rt,
		{ BlockTextBuilder: _i } = mi,
		Oi = qi,
		{
			limitedDepthRecursive: Bi,
			mergeDuplicatesPreferLast: Ni,
			set: Pi,
		} = $o,
		Ii = {
			baseElements: {
				selectors: ['body'],
				orderBy: 'selectors',
				returnDomByDefault: !0,
			},
			decodeOptions: { isAttributeValue: !1, strict: !1 },
			formatters: {},
			limits: {
				ellipsis: '...',
				maxBaseElements: void 0,
				maxChildNodes: void 0,
				maxDepth: void 0,
				maxInputLength: 1 << 24,
			},
			longWordSplit: { forceWrapOnLimit: !1, wrapCharacters: [] },
			preserveNewlines: !1,
			selectors: [
				{ selector: '*', format: 'inline' },
				{
					selector: 'a',
					format: 'anchor',
					options: {
						baseUrl: null,
						hideLinkHrefIfSameAsText: !1,
						ignoreHref: !1,
						noAnchorUrl: !0,
						noLinkBrackets: !1,
					},
				},
				{ selector: 'article', format: 'block' },
				{ selector: 'aside', format: 'block' },
				{
					selector: 'blockquote',
					format: 'blockquote',
					options: {
						leadingLineBreaks: 2,
						trailingLineBreaks: 2,
						trimEmptyLines: !0,
					},
				},
				{ selector: 'br', format: 'lineBreak' },
				{ selector: 'div', format: 'block' },
				{ selector: 'footer', format: 'block' },
				{ selector: 'form', format: 'block' },
				{
					selector: 'h1',
					format: 'heading',
					options: {
						leadingLineBreaks: 3,
						trailingLineBreaks: 2,
						uppercase: !0,
					},
				},
				{
					selector: 'h2',
					format: 'heading',
					options: {
						leadingLineBreaks: 3,
						trailingLineBreaks: 2,
						uppercase: !0,
					},
				},
				{
					selector: 'h3',
					format: 'heading',
					options: {
						leadingLineBreaks: 3,
						trailingLineBreaks: 2,
						uppercase: !0,
					},
				},
				{
					selector: 'h4',
					format: 'heading',
					options: {
						leadingLineBreaks: 2,
						trailingLineBreaks: 2,
						uppercase: !0,
					},
				},
				{
					selector: 'h5',
					format: 'heading',
					options: {
						leadingLineBreaks: 2,
						trailingLineBreaks: 2,
						uppercase: !0,
					},
				},
				{
					selector: 'h6',
					format: 'heading',
					options: {
						leadingLineBreaks: 2,
						trailingLineBreaks: 2,
						uppercase: !0,
					},
				},
				{ selector: 'header', format: 'block' },
				{
					selector: 'hr',
					format: 'horizontalLine',
					options: {
						leadingLineBreaks: 2,
						length: void 0,
						trailingLineBreaks: 2,
					},
				},
				{
					selector: 'img',
					format: 'image',
					options: { baseUrl: null },
				},
				{ selector: 'main', format: 'block' },
				{ selector: 'nav', format: 'block' },
				{
					selector: 'ol',
					format: 'orderedList',
					options: { leadingLineBreaks: 2, trailingLineBreaks: 2 },
				},
				{
					selector: 'p',
					format: 'paragraph',
					options: { leadingLineBreaks: 2, trailingLineBreaks: 2 },
				},
				{
					selector: 'pre',
					format: 'pre',
					options: { leadingLineBreaks: 2, trailingLineBreaks: 2 },
				},
				{ selector: 'section', format: 'block' },
				{
					selector: 'table',
					format: 'table',
					options: {
						colSpacing: 3,
						leadingLineBreaks: 2,
						maxColumnWidth: 60,
						rowSpacing: 0,
						trailingLineBreaks: 2,
						uppercaseHeaderCells: !0,
					},
				},
				{
					selector: 'ul',
					format: 'unorderedList',
					options: {
						itemPrefix: ' * ',
						leadingLineBreaks: 2,
						trailingLineBreaks: 2,
					},
				},
				{ selector: 'wbr', format: 'wbr' },
			],
			tables: [],
			whitespaceCharacters: ' \t\r\n\f​',
			wordwrap: 80,
		},
		Ri = (e, t, r) => [...t],
		ji = (e, t, r) =>
			e.some((e) => 'object' == typeof e)
				? ((e, t, r) => [...e, ...t])(e, t)
				: Ri(0, t);
	function Mi(e = {}) {
		((e = Ti(Ii, e, {
			arrayMerge: Ri,
			customMerge: (e) => ('selectors' === e ? ji : void 0),
		})).formatters = Object.assign({}, Oi, e.formatters)),
			(function (e) {
				const t = e.selectors;
				if (e.tags) {
					const r = Object.entries(e.tags).map(([e, t]) =>
						__spreadProps(__spreadValues({}, t), {
							selector: e || '*',
						})
					);
					t.push(...r);
				}
				function r(r, n, a) {
					if (void 0 !== e[r])
						for (const o of t)
							o.format === n && Pi(o, ['options', a], e[r]);
				}
				if (
					(r(
						'hideLinkHrefIfSameAsText',
						'anchor',
						'hideLinkHrefIfSameAsText'
					),
					r('ignoreHref', 'anchor', 'ignoreHref'),
					r('linkHrefBaseUrl', 'anchor', 'baseUrl'),
					r('noAnchorUrl', 'anchor', 'noAnchorUrl'),
					r('noLinkBrackets', 'anchor', 'noLinkBrackets'),
					r('linkHrefBaseUrl', 'image', 'baseUrl'),
					r('unorderedListItemPrefix', 'unorderedList', 'itemPrefix'),
					r('uppercaseHeadings', 'heading', 'uppercase'),
					r('uppercaseHeadings', 'table', 'uppercaseHeadings'),
					r('uppercaseHeadings', 'dataTable', 'uppercaseHeadings'),
					e.ignoreImage)
				)
					for (const n of t)
						'image' === n.format && (n.format = 'skip');
				if (e.singleNewLineParagraphs)
					for (const n of t)
						('paragraph' !== n.format && 'pre' !== n.format) ||
							(Pi(n, ['options', 'leadingLineBreaks'], 1),
							Pi(n, ['options', 'trailingLineBreaks'], 1));
				if (e.baseElement) {
					const t = e.baseElement;
					Pi(
						e,
						['baseElements', 'selectors'],
						Array.isArray(t) ? t : [t]
					);
				}
				void 0 !== e.returnDomByDefault &&
					Pi(
						e,
						['baseElements', 'returnDomByDefault'],
						e.returnDomByDefault
					);
			})(e);
		const t = Ni(e.selectors, (e) => e.selector),
			r = t.filter((e) => !e.format);
		if (r.length)
			throw new Error(
				'Following selectors have no specified format: ' +
					r.map((e) => `\`${e.selector}\``).join(', ')
			);
		const n = new Ci.DecisionTree(t.map((e) => [e.selector, e])).build(Di),
			a = new Ci.DecisionTree(
				e.baseElements.selectors.map((e, t) => [e, t + 1])
			).build(Di);
		function o(t) {
			return (function (e, t, r) {
				const n = [];
				function a(e, a) {
					a = a.slice(0, t.limits.maxChildNodes);
					for (const o of a) {
						if ('tag' !== o.type) continue;
						const a = r.pick1(o);
						if (
							(a > 0
								? n.push({ selectorIndex: a, element: o })
								: o.children && e(o.children),
							n.length >= t.limits.maxBaseElements)
						)
							return;
					}
				}
				Bi(t.limits.maxDepth, a)(e),
					'occurrence' !== t.baseElements.orderBy &&
						n.sort((e, t) => e.selectorIndex - t.selectorIndex);
				return t.baseElements.returnDomByDefault && 0 === n.length
					? e
					: n.map((e) => e.element);
			})(t, e, a);
		}
		const i = Bi(e.limits.maxDepth, Vi, function (t, r) {
			r.addInline(e.limits.ellipsis || '');
		});
		return function (t) {
			return (function (e, t, r, n, a) {
				const o = t.limits.maxInputLength;
				o &&
					e &&
					e.length > o &&
					(console.warn(
						`Input length ${e.length} is above allowed limit of ${o}. Truncating without ellipsis.`
					),
					(e = e.substring(0, o)));
				const i = new Li.DomHandler();
				new Li.Parser(i, { decodeEntities: !1 }).parseComplete(e);
				const s = n(i.dom),
					l = new _i(t, r);
				return a(s, l), l.toString();
			})(t, e, n, o, i);
		};
	}
	function Fi(e, t = {}) {
		return Mi(t)(e);
	}
	function Vi(e, t, r) {
		if (!t) return;
		const n = r.options;
		t.length > n.limits.maxChildNodes &&
			(t = t.slice(0, n.limits.maxChildNodes)).push({
				data: n.limits.ellipsis,
				type: 'text',
			});
		for (const a of t)
			switch (a.type) {
				case 'text':
					r.addInline(Ai.decode(a.data, n.decodeOptions));
					break;
				case 'tag': {
					const t = r.picker.pick1(a);
					(0, n.formatters[t.format])(a, e, r, t.options || {});
					break;
				}
			}
	}
	var Ui = {
			compile: Mi,
			convert: Fi,
			fromString: (e, t = {}) => Fi(e, t),
			htmlToText: Fi,
		},
		Hi = { exports: {} };
	!(function (e, t) {
		var r,
			n = 1 / 0,
			a = NaN,
			o = /^\s+|\s+$/g,
			i = /\w*$/,
			s = /^[-+]0x[0-9a-f]+$/i,
			l = /^0b[01]+$/i,
			c = /^0o[0-7]+$/i,
			u = '\\u0300-\\u036f\\ufe20-\\ufe23',
			p = '[\\ud800-\\udfff]',
			d = '[' + u + '\\u20d0-\\u20f0]',
			f = '\\ud83c[\\udffb-\\udfff]',
			h = '[^\\ud800-\\udfff]',
			m = '(?:\\ud83c[\\udde6-\\uddff]){2}',
			g = '[\\ud800-\\udbff][\\udc00-\\udfff]',
			b = '(?:' + d + '|' + f + ')' + '?',
			v = '[\\ufe0e\\ufe0f]?',
			y =
				v +
				b +
				('(?:\\u200d(?:' + [h, m, g].join('|') + ')' + v + b + ')*'),
			w = '(?:' + [h + d + '?', d, m, g, p].join('|') + ')',
			x = RegExp(f + '(?=' + f + ')|' + w + y, 'g'),
			S = RegExp(
				'[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]'
			),
			E = parseInt,
			q = 'object' == typeof k && k && k.Object === Object && k,
			D =
				'object' == typeof self &&
				self &&
				self.Object === Object &&
				self,
			T = q || D || Function('return this')(),
			A = t && !t.nodeType && t,
			L = A && e && !e.nodeType && e,
			C = L && L.exports === A && q.process,
			_ = (function () {
				try {
					return C && C.binding('util');
				} catch (e) {}
			})(),
			O = _ && _.isRegExp,
			B =
				((r = 'length'),
				function (e) {
					return null == e ? void 0 : e[r];
				});
		function N(e) {
			return S.test(e);
		}
		function P(e) {
			return N(e)
				? (function (e) {
						var t = (x.lastIndex = 0);
						for (; x.test(e); ) t++;
						return t;
				  })(e)
				: B(e);
		}
		function I(e) {
			return N(e)
				? (function (e) {
						return e.match(x) || [];
				  })(e)
				: (function (e) {
						return e.split('');
				  })(e);
		}
		var R = Object.prototype.toString,
			j = T.Symbol,
			M = j ? j.prototype : void 0,
			F = M ? M.toString : void 0;
		function V(e) {
			if ('string' == typeof e) return e;
			if (z(e)) return F ? F.call(e) : '';
			var t = e + '';
			return '0' == t && 1 / e == -1 / 0 ? '-0' : t;
		}
		function U(e, t, r) {
			var n = e.length;
			return (
				(r = void 0 === r ? n : r),
				!t && r >= n
					? e
					: (function (e, t, r) {
							var n = -1,
								a = e.length;
							t < 0 && (t = -t > a ? 0 : a + t),
								(r = r > a ? a : r) < 0 && (r += a),
								(a = t > r ? 0 : (r - t) >>> 0),
								(t >>>= 0);
							for (var o = Array(a); ++n < a; ) o[n] = e[n + t];
							return o;
					  })(e, t, r)
			);
		}
		function H(e) {
			var t = typeof e;
			return !!e && ('object' == t || 'function' == t);
		}
		var G,
			W = O
				? ((G = O),
				  function (e) {
						return G(e);
				  })
				: function (e) {
						return H(e) && '[object RegExp]' == R.call(e);
				  };
		function z(e) {
			return (
				'symbol' == typeof e ||
				((function (e) {
					return !!e && 'object' == typeof e;
				})(e) &&
					'[object Symbol]' == R.call(e))
			);
		}
		function $(e) {
			return e
				? (e = (function (e) {
						if ('number' == typeof e) return e;
						if (z(e)) return a;
						if (H(e)) {
							var t =
								'function' == typeof e.valueOf
									? e.valueOf()
									: e;
							e = H(t) ? t + '' : t;
						}
						if ('string' != typeof e) return 0 === e ? e : +e;
						e = e.replace(o, '');
						var r = l.test(e);
						return r || c.test(e)
							? E(e.slice(2), r ? 2 : 8)
							: s.test(e)
							? a
							: +e;
				  })(e)) === n || e === -1 / 0
					? 17976931348623157e292 * (e < 0 ? -1 : 1)
					: e == e
					? e
					: 0
				: 0 === e
				? e
				: 0;
		}
		function J(e) {
			return null == e ? '' : V(e);
		}
		e.exports = function (e, t) {
			var r = 30,
				n = '...';
			if (H(t)) {
				var a = 'separator' in t ? t.separator : a;
				(r =
					'length' in t
						? (function (e) {
								var t = $(e),
									r = t % 1;
								return t == t ? (r ? t - r : t) : 0;
						  })(t.length)
						: r),
					(n = 'omission' in t ? V(t.omission) : n);
			}
			var o = (e = J(e)).length;
			if (N(e)) {
				var s = I(e);
				o = s.length;
			}
			if (r >= o) return e;
			var l = r - P(n);
			if (l < 1) return n;
			var c = s ? U(s, 0, l).join('') : e.slice(0, l);
			if (void 0 === a) return c + n;
			if ((s && (l += c.length - l), W(a))) {
				if (e.slice(l).search(a)) {
					var u,
						p = c;
					for (
						a.global || (a = RegExp(a.source, J(i.exec(a)) + 'g')),
							a.lastIndex = 0;
						(u = a.exec(p));

					)
						var d = u.index;
					c = c.slice(0, void 0 === d ? l : d);
				}
			} else if (e.indexOf(V(a), l) != l) {
				var f = c.lastIndexOf(a);
				f > -1 && (c = c.slice(0, f));
			}
			return c + n;
		};
	})(Hi, Hi.exports);
	var Gi = Hi.exports;
	function Wi(e, r) {
		void 0 === r && (r = null);
		var n = t.useState(i()),
			a = n[0],
			o = n[1];
		function i() {
			if ('undefined' == typeof localStorage) return null;
			var t = localStorage.getItem(e) || 'null';
			try {
				return JSON.parse(t);
			} catch (r) {
				console.error(r);
			}
			return t;
		}
		var s = t.useCallback(function (t) {
				var r;
				o(t),
					(r = t),
					'undefined' != typeof localStorage &&
						localStorage.setItem(e, JSON.stringify(r));
			}, []),
			l = t.useCallback(function (t) {
				t.storageArea === localStorage && t.key === e && o(t.newValue);
			}, []),
			c = t.useCallback(
				function () {
					if ((s(null), 'undefined' == typeof localStorage))
						return !1;
					localStorage.removeItem(e);
				},
				[e]
			);
		return (
			t.useEffect(function () {
				var e;
				(null !== (e = i()) && 'null' !== e) || s(r);
			}, []),
			t.useEffect(function () {
				return (
					window.addEventListener('storage', l),
					function () {
						window.removeEventListener('storage', l);
					}
				);
			}, []),
			Object.assign([a, s, c], { value: a, remove: c, set: s })
		);
	}
	var zi = Object.prototype.hasOwnProperty;
	function $i(e, t, r, n) {
		return new (r || (r = Promise))(function (a, o) {
			function i(e) {
				try {
					l(n.next(e));
				} catch (t) {
					o(t);
				}
			}
			function s(e) {
				try {
					l(n.throw(e));
				} catch (t) {
					o(t);
				}
			}
			function l(e) {
				var t;
				e.done
					? a(e.value)
					: ((t = e.value),
					  t instanceof r
							? t
							: new r(function (e) {
									e(t);
							  })).then(i, s);
			}
			l((n = n.apply(e, t || [])).next());
		});
	}
	function Ji(e, t) {
		var r,
			n,
			a,
			o,
			i = {
				label: 0,
				sent: function () {
					if (1 & a[0]) throw a[1];
					return a[1];
				},
				trys: [],
				ops: [],
			};
		return (
			(o = { next: s(0), throw: s(1), return: s(2) }),
			'function' == typeof Symbol &&
				(o[Symbol.iterator] = function () {
					return this;
				}),
			o
		);
		function s(o) {
			return function (s) {
				return (function (o) {
					if (r)
						throw new TypeError('Generator is already executing.');
					for (; i; )
						try {
							if (
								((r = 1),
								n &&
									(a =
										2 & o[0]
											? n.return
											: o[0]
											? n.throw ||
											  ((a = n.return) && a.call(n), 0)
											: n.next) &&
									!(a = a.call(n, o[1])).done)
							)
								return a;
							switch (
								((n = 0), a && (o = [2 & o[0], a.value]), o[0])
							) {
								case 0:
								case 1:
									a = o;
									break;
								case 4:
									return i.label++, { value: o[1], done: !1 };
								case 5:
									i.label++, (n = o[1]), (o = [0]);
									continue;
								case 7:
									(o = i.ops.pop()), i.trys.pop();
									continue;
								default:
									if (
										!(
											(a =
												(a = i.trys).length > 0 &&
												a[a.length - 1]) ||
											(6 !== o[0] && 2 !== o[0])
										)
									) {
										i = 0;
										continue;
									}
									if (
										3 === o[0] &&
										(!a || (o[1] > a[0] && o[1] < a[3]))
									) {
										i.label = o[1];
										break;
									}
									if (6 === o[0] && i.label < a[1]) {
										(i.label = a[1]), (a = o);
										break;
									}
									if (a && i.label < a[2]) {
										(i.label = a[2]), i.ops.push(o);
										break;
									}
									a[2] && i.ops.pop(), i.trys.pop();
									continue;
							}
							o = t.call(e, i);
						} catch (s) {
							(o = [6, s]), (n = 0);
						} finally {
							r = a = 0;
						}
					if (5 & o[0]) throw o[1];
					return { value: o[0] ? o[1] : void 0, done: !0 };
				})([o, s]);
			};
		}
	}
	var Yi = {}[0],
		Xi = function (e) {
			return e === Yi;
		},
		Zi = function (e) {
			return 'function' == typeof e;
		},
		Qi = function () {},
		Ki = function (e, t) {
			return Object.assign({}, e, t);
		},
		es = !0,
		ts = 'undefined' != typeof window,
		rs = 'undefined' != typeof document,
		ns = (ts && window.addEventListener) || Qi,
		as = (rs && document.addEventListener) || Qi,
		os = {
			isOnline: function () {
				return es;
			},
			isVisible: function () {
				var e = rs && document.visibilityState;
				return !!Xi(e) || 'hidden' !== e;
			},
		},
		is = {
			initFocus: function (e) {
				as('visibilitychange', e), ns('focus', e);
			},
			initReconnect: function (e) {
				ns('online', function () {
					(es = !0), e();
				}),
					ns('offline', function () {
						es = !1;
					});
			},
		},
		ss = 'undefined' == typeof window || 'Deno' in window,
		ls = ss ? null : window.requestAnimationFrame,
		cs = ls
			? function (e) {
					return ls(e);
			  }
			: function (e) {
					return setTimeout(e, 1);
			  },
		us = ss ? t.useEffect : t.useLayoutEffect,
		ps = 'undefined' != typeof navigator && navigator.connection,
		ds =
			!ss &&
			ps &&
			(['slow-2g', '2g'].includes(ps.effectiveType) || ps.saveData),
		fs = new WeakMap(),
		hs = 0;
	function ms(e) {
		if (Zi(e))
			try {
				e = e();
			} catch (r) {
				e = '';
			}
		var t;
		return (
			Array.isArray(e)
				? ((t = e),
				  (e = (function (e) {
						if (!e.length) return '';
						for (var t = 'arg', r = 0; r < e.length; ++r) {
							var n = e[r],
								a = Yi;
							null === n || ('object' != typeof n && !Zi(n))
								? (a = JSON.stringify(n))
								: fs.has(n)
								? (a = fs.get(n))
								: ((a = hs), fs.set(n, hs++)),
								(t += '$' + a);
						}
						return t;
				  })(e)))
				: (t = [(e = String(e || ''))]),
			[e, t, e ? '$err$' + e : '', e ? '$req$' + e : '']
		);
	}
	var gs = new WeakMap(),
		bs = function (e, t, r, n, a, o) {
			void 0 === o && (o = !1);
			var i = gs.get(e),
				s = i[0],
				l = i[1],
				c = s[t],
				u = l[t];
			if (u) for (var p = 0; p < u.length; ++p) u[p](r, n, a);
			return o && c && c[0]
				? c[0](2).then(function () {
						return e.get(t);
				  })
				: e.get(t);
		},
		vs = 0,
		ys = function () {
			return ++vs;
		},
		xs = function (e, t, r, n) {
			return (
				void 0 === n && (n = !0),
				$i(void 0, void 0, void 0, function () {
					var a, o, i, s, l, c, u, p, d, f, h;
					return Ji(this, function (m) {
						switch (m.label) {
							case 0:
								if (((a = ms(t)), (o = a[0]), (i = a[2]), !o))
									return [2];
								if (
									((s = gs.get(e)),
									(l = s[2]),
									(c = s[3]),
									Xi(r))
								)
									return [
										2,
										bs(e, o, e.get(o), e.get(i), Yi, n),
									];
								if (((d = l[o] = ys()), (c[o] = 0), Zi(r)))
									try {
										r = r(e.get(o));
									} catch (g) {
										(r = Yi), (p = g);
									}
								if (!r || !Zi(r.then)) return [3, 5];
								m.label = 1;
							case 1:
								return m.trys.push([1, 3, , 4]), [4, r];
							case 2:
								return (u = m.sent()), [3, 4];
							case 3:
								return (f = m.sent()), (p = f), [3, 4];
							case 4:
								if (d !== l[o]) {
									if (p) throw p;
									return [2, u];
								}
								return [3, 6];
							case 5:
								(u = r), (m.label = 6);
							case 6:
								return (
									Xi(u) || e.set(o, u),
									e.set(i, p),
									(c[o] = ys()),
									[4, bs(e, o, u, p, Yi, n)]
								);
							case 7:
								if (((h = m.sent()), p)) throw p;
								return [2, h];
						}
					});
				})
			);
		};
	function ks(e, t) {
		for (var r in e) e[r][0] && e[r][0](t);
	}
	function Ss(e, t) {
		if (!gs.has(e)) {
			var r = Ki(is, t),
				n = {},
				a = xs.bind(Yi, e);
			return (
				gs.set(e, [n, {}, {}, {}, {}, {}, a]),
				ss ||
					(r.initFocus(ks.bind(Yi, n, 0)),
					r.initReconnect(ks.bind(Yi, n, 1))),
				[e, a]
			);
		}
	}
	var Es = Ss(new Map()),
		qs = Es[0],
		Ds = Es[1],
		Ts = Ki(
			{
				onLoadingSlow: Qi,
				onSuccess: Qi,
				onError: Qi,
				onErrorRetry: function (e, t, r, n, a) {
					if (os.isVisible()) {
						var o = r.errorRetryCount,
							i = a.retryCount,
							s =
								~~(
									(Math.random() + 0.5) *
									(1 << (i < 8 ? i : 8))
								) * r.errorRetryInterval;
						(!Xi(o) && i > o) || setTimeout(n, s, a);
					}
				},
				revalidateOnFocus: !0,
				revalidateOnReconnect: !0,
				revalidateIfStale: !0,
				shouldRetryOnError: !0,
				errorRetryInterval: ds ? 1e4 : 5e3,
				focusThrottleInterval: 5e3,
				dedupingInterval: 2e3,
				loadingTimeout: ds ? 5e3 : 3e3,
				compare: function e(t, r) {
					var n, a;
					if (t === r) return !0;
					if (t && r && (n = t.constructor) === r.constructor) {
						if (n === Date) return t.getTime() === r.getTime();
						if (n === RegExp) return t.toString() === r.toString();
						if (n === Array) {
							if ((a = t.length) === r.length)
								for (; a-- && e(t[a], r[a]); );
							return -1 === a;
						}
						if (!n || 'object' == typeof t) {
							for (n in ((a = 0), t)) {
								if (zi.call(t, n) && ++a && !zi.call(r, n))
									return !1;
								if (!(n in r) || !e(t[n], r[n])) return !1;
							}
							return Object.keys(r).length === a;
						}
					}
					return t != t && r != r;
				},
				isPaused: function () {
					return !1;
				},
				cache: qs,
				mutate: Ds,
				fallback: {},
			},
			os
		);
	function As(e, t) {
		var r = Ki(e, t);
		if (!t) return r;
		var n = e.use,
			a = e.fallback,
			o = t.use,
			i = t.fallback;
		return (
			n && o && (r.use = n.concat(o)),
			a && i && (r.fallback = Ki(a, i)),
			r
		);
	}
	var Ls = t.createContext({});
	function Cs(e) {
		return Zi(e[1])
			? [e[0], e[1], e[2] || {}]
			: [e[0], null, (null === e[1] ? e[2] : e[1]) || {}];
	}
	var _s,
		Os = function (e, t, r) {
			var n = t[e] || (t[e] = []);
			return (
				n.push(r),
				function () {
					var e = n.indexOf(r);
					e >= 0 && ((n[e] = n[n.length - 1]), n.pop());
				}
			);
		},
		Bs = { dedupe: !0 };
	Object.defineProperty(
		function (e) {
			var r = e.children,
				n = e.value,
				a = As(t.useContext(Ls), n),
				o = n && n.provider,
				i = t.useState(function () {
					return o ? Ss(o(a.cache || qs), n) : Yi;
				})[0];
			return (
				i && ((a.cache = i[0]), (a.mutate = i[1])),
				t.createElement(Ls.Provider, { value: a }, r)
			);
		},
		'default',
		{ value: Ts }
	);
	var Ns =
		((_s = function (e, r, n) {
			var a = n.cache,
				o = n.compare,
				i = n.fallbackData,
				s = n.suspense,
				l = n.revalidateOnMount,
				c = n.refreshInterval,
				u = n.refreshWhenHidden,
				p = n.refreshWhenOffline,
				d = gs.get(a),
				f = d[0],
				h = d[1],
				m = d[2],
				g = d[3],
				b = d[4],
				v = d[5],
				y = ms(e),
				w = y[0],
				x = y[1],
				k = y[2],
				S = y[3],
				E = t.useRef(!1),
				q = t.useRef(!1),
				D = t.useRef(w),
				T = t.useRef(n),
				A = function () {
					return T.current;
				},
				L = a.get(w),
				C = Xi(i) ? n.fallback[w] : i,
				_ = Xi(L) ? C : L,
				O = a.get(k);
			if (s && (!w || !r))
				throw new Error(
					'useSWR requires either key or fetcher with suspense mode'
				);
			var B,
				N,
				P,
				I,
				R,
				j,
				M = function () {
					return Xi(l)
						? s
							? !E.current && !Xi(_)
							: Xi(_) || n.revalidateIfStale
						: l;
				},
				F = !(!w || !r) && (!!a.get(S) || (!E.current && M())),
				V =
					((B = { data: _, error: O, isValidating: F }),
					(N = q),
					(P = t.useState({})[1]),
					(I = t.useRef(B)),
					(R = t.useRef({ data: !1, error: !1, isValidating: !1 })),
					(j = t.useCallback(function (e) {
						var t = !1,
							r = I.current;
						for (var n in e) {
							var a = n;
							r[a] !== e[a] &&
								((r[a] = e[a]), R.current[a] && (t = !0));
						}
						t && !N.current && P({});
					}, [])),
					us(function () {
						I.current = B;
					}),
					[I, R.current, j]),
				U = V[0],
				H = V[1],
				G = V[2],
				W = t.useCallback(
					function (e) {
						return $i(void 0, void 0, void 0, function () {
							var t, i, s, l, c, u, p, d, f;
							return Ji(this, function (h) {
								switch (h.label) {
									case 0:
										if (
											!w ||
											!r ||
											q.current ||
											A().isPaused()
										)
											return [2, !1];
										(s = !0),
											(l = e || {}),
											(c = !Xi(b[w]) && l.dedupe),
											(u = function () {
												return (
													!q.current &&
													w === D.current &&
													E.current
												);
											}),
											(p = function () {
												delete b[w], delete v[w];
											}),
											(h.label = 1);
									case 1:
										return (
											h.trys.push([1, 6, , 7]),
											a.set(S, !0),
											G({ isValidating: !0 }),
											c ||
												bs(
													a,
													w,
													U.current.data,
													U.current.error,
													!0
												),
											c ? ((i = v[w]), [4, b[w]]) : [3, 3]
										);
									case 2:
										return (t = h.sent()), [3, 5];
									case 3:
										return (
											n.loadingTimeout &&
												!a.get(w) &&
												setTimeout(function () {
													s &&
														u() &&
														A().onLoadingSlow(w, n);
												}, n.loadingTimeout),
											(v[w] = i = ys()),
											[4, (b[w] = r.apply(r, x))]
										);
									case 4:
										(t = h.sent()),
											setTimeout(function () {
												v[w] === i && p();
											}, n.dedupingInterval),
											u() && A().onSuccess(t, w, n),
											(h.label = 5);
									case 5:
										return v[w] !== i
											? [2, !1]
											: (a.set(k, Yi),
											  a.set(S, !1),
											  (d = { isValidating: !1 }),
											  !Xi(m[w]) &&
											  (i <= m[w] ||
													i <= g[w] ||
													0 === g[w])
													? (G(d), [2, !1])
													: (Xi(U.current.error) ||
															(d.error = Yi),
													  o(U.current.data, t) ||
															(d.data = t),
													  o(a.get(w), t) ||
															a.set(w, t),
													  G(d),
													  c ||
															bs(
																a,
																w,
																t,
																d.error,
																!1
															),
													  [3, 7]));
									case 6:
										return (
											(f = h.sent()),
											p(),
											a.set(S, !1),
											A().isPaused()
												? (G({ isValidating: !1 }),
												  [2, !1])
												: (a.set(k, f),
												  U.current.error !== f &&
														(G({
															isValidating: !1,
															error: f,
														}),
														c ||
															bs(
																a,
																w,
																Yi,
																f,
																!1
															)),
												  u() &&
														(A().onError(f, w, n),
														n.shouldRetryOnError &&
															A().onErrorRetry(
																f,
																w,
																n,
																W,
																{
																	retryCount:
																		(l.retryCount ||
																			0) +
																		1,
																	dedupe: !0,
																}
															)),
												  [3, 7])
										);
									case 7:
										return (s = !1), [2, !0];
								}
							});
						});
					},
					[w]
				),
				z = t.useCallback(function (e, t) {
					return xs(a, D.current, e, t);
				}, []);
			if (
				(us(function () {
					T.current = n;
				}),
				us(
					function () {
						if (w) {
							var e = E.current,
								t = W.bind(Yi, Bs),
								r = function () {
									return A().isVisible() && A().isOnline();
								},
								n = 0,
								a = Os(w, h, function (e, t, r) {
									G(
										Ki(
											{ error: t, isValidating: r },
											o(e, U.current.data)
												? null
												: { data: e }
										)
									);
								}),
								i = Os(w, f, function (e) {
									if (0 === e) {
										var a = Date.now();
										A().revalidateOnFocus &&
											a > n &&
											r() &&
											((n =
												a + A().focusThrottleInterval),
											t());
									} else if (1 === e)
										A().revalidateOnReconnect && r() && t();
									else if (2 === e) return W();
								});
							return (
								(q.current = !1),
								(D.current = w),
								e && G({ data: _, error: O, isValidating: F }),
								M() && (Xi(_) || ss ? t() : cs(t)),
								(E.current = !0),
								function () {
									(q.current = !0), a(), i();
								}
							);
						}
					},
					[w, W]
				),
				us(
					function () {
						var e;
						function t() {
							c && -1 !== e && (e = setTimeout(r, c));
						}
						function r() {
							U.current.error ||
							(!u && !A().isVisible()) ||
							(!p && !A().isOnline())
								? t()
								: W(Bs).then(function () {
										return t();
								  });
						}
						return (
							t(),
							function () {
								e && (clearTimeout(e), (e = -1));
							}
						);
					},
					[c, u, p, W]
				),
				t.useDebugValue(_),
				s && Xi(_))
			)
				throw Xi(O) ? W(Bs) : O;
			return {
				mutate: z,
				get data() {
					return (H.data = !0), _;
				},
				get error() {
					return (H.error = !0), O;
				},
				get isValidating() {
					return (H.isValidating = !0), F;
				},
			};
		}),
		function () {
			for (var e = [], r = 0; r < arguments.length; r++)
				e[r] = arguments[r];
			var n = Cs(e),
				a = n[0],
				o = n[1],
				i = n[2],
				s = Ki(Ts, t.useContext(Ls)),
				l = As(s, i),
				c = _s,
				u = l.use;
			if (u) for (var p = u.length; p-- > 0; ) c = u[p](c);
			return c(a, o || l.fetcher, l);
		});
	async function Ps(e, t = {}) {
		const r = await fetch(e, t);
		if (!r.ok) throw new Error('Error completing request');
		return await r.json();
	}
	function Is(e) {
		const { feed: t } = e;
		return s.default.createElement(
			'div',
			{
				className:
					'relative w-full h-auto overflow-hidden overflow-y-auto grid grid-cols-1 gap-0 divide-y divide-gray-100 bg-white p-0',
			},
			t
				? t.map((t) => {
						const r = Ui.htmlToText(t.content);
						return s.default.createElement(
							'a',
							{
								className:
									'w-full h-32 overflow-hidden overflow-ellipsis flex flex-col items-start justify-start p-4 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50',
								href: `${e.baseUrl}/${t.id}`,
								key: t.id,
								target: '_blank',
								rel: 'noopener noreferrer',
							},
							s.default.createElement(
								'span',
								{
									className:
										'w-full h-auto flex items-center justify-between mb-1',
								},
								s.default.createElement(
									'span',
									{
										className:
											'w-4/6 h-auto overflow-ellipsis overflow-hidden text-md font-medium text-gray-900',
									},
									Gi(t.title, { length: 40 })
								),
								s.default.createElement(
									'span',
									{
										className:
											'w-auto h-auto inline-flex items-center justify-center px-2 py-1 rounded-full text-white text-xs',
										style: {
											backgroundColor:
												((n = 'Tag'),
												{
													bug: '',
													fix: '',
													feature: '',
													maintenance: '',
													release: '',
													tag: '#10B981',
													update: '',
												}[n.toLowerCase()]),
										},
									},
									t.type || 'Tag'
								)
							),
							s.default.createElement(
								'p',
								{ className: 'text-xs text-gray-500' },
								(function (e, t) {
									var r =
										arguments.length > 2 &&
										void 0 !== arguments[2]
											? arguments[2]
											: {};
									Oe(2, arguments);
									var n = r.locale || tt;
									if (!n.formatDistance)
										throw new RangeError(
											'locale must contain formatDistance property'
										);
									var a = Pe(e, t);
									if (isNaN(a))
										throw new RangeError(
											'Invalid time value'
										);
									var o,
										i,
										s = rt(r);
									(s.addSuffix = Boolean(r.addSuffix)),
										(s.comparison = a),
										a > 0
											? ((o = Be(t)), (i = Be(e)))
											: ((o = Be(e)), (i = Be(t)));
									var l,
										c = Ge(i, o),
										u = (Ne(i) - Ne(o)) / 1e3,
										p = Math.round((c - u) / 60);
									if (p < 2)
										return r.includeSeconds
											? c < 5
												? n.formatDistance(
														'lessThanXSeconds',
														5,
														s
												  )
												: c < 10
												? n.formatDistance(
														'lessThanXSeconds',
														10,
														s
												  )
												: c < 20
												? n.formatDistance(
														'lessThanXSeconds',
														20,
														s
												  )
												: c < 40
												? n.formatDistance(
														'halfAMinute',
														null,
														s
												  )
												: c < 60
												? n.formatDistance(
														'lessThanXMinutes',
														1,
														s
												  )
												: n.formatDistance(
														'xMinutes',
														1,
														s
												  )
											: 0 === p
											? n.formatDistance(
													'lessThanXMinutes',
													1,
													s
											  )
											: n.formatDistance(
													'xMinutes',
													p,
													s
											  );
									if (p < 45)
										return n.formatDistance(
											'xMinutes',
											p,
											s
										);
									if (p < 90)
										return n.formatDistance(
											'aboutXHours',
											1,
											s
										);
									if (p < nt) {
										var d = Math.round(p / 60);
										return n.formatDistance(
											'aboutXHours',
											d,
											s
										);
									}
									if (p < 2520)
										return n.formatDistance('xDays', 1, s);
									if (p < at) {
										var f = Math.round(p / nt);
										return n.formatDistance('xDays', f, s);
									}
									if (p < 86400)
										return (
											(l = Math.round(p / at)),
											n.formatDistance(
												'aboutXMonths',
												l,
												s
											)
										);
									if ((l = He(i, o)) < 12) {
										var h = Math.round(p / at);
										return n.formatDistance(
											'xMonths',
											h,
											s
										);
									}
									var m = l % 12,
										g = Math.floor(l / 12);
									return m < 3
										? n.formatDistance('aboutXYears', g, s)
										: m < 9
										? n.formatDistance('overXYears', g, s)
										: n.formatDistance(
												'almostXYears',
												g + 1,
												s
										  );
								})(new Date(t.published_at), new Date(), {
									addSuffix: !0,
								})
							),
							s.default.createElement(
								'p',
								{
									className:
										'mt-2 overflow-ellipsis overflow-hidden text-sm text-gray-900',
								},
								Gi(r, { length: 80 })
							)
						);
						var n;
				  })
				: s.default.createElement('span', null, 'Error!')
		);
	}
	(e.Herald = function (e) {
		const { feed: r, isLoading: n } = (function (e, t) {
				const { data: r, error: n } = Ns(
					`${e}/api/feed?userId=${t}`,
					Ps
				);
				return {
					feed: null == r ? void 0 : r.feed,
					isLoading: !n && !r,
				};
			})(null == e ? void 0 : e.baseUrl, null == e ? void 0 : e.userId),
			{ value: a, set: o } = Wi('heraldLatestUpdate'),
			[i, l] = t.useState(!1);
		return (
			t.useEffect(() => {
				r && r[0].published_at !== a && (o(r[0].published_at), l(!0));
			}, [r]),
			s.default.createElement(
				se,
				{ className: 'relative' },
				({ open: a }) =>
					s.default.createElement(
						s.default.Fragment,
						null,
						s.default.createElement(
							'span',
							{ className: 'relative inline-flex' },
							s.default.createElement(
								se.Button,
								{
									className:
										(a ? '' : 'text-opacity-90') +
										' text-gray-500 group bg-orange-700 p-2 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75',
								},
								e.icon || e.text
							),
							i
								? s.default.createElement(
										'span',
										{
											className:
												'flex absolute h-2 w-2 top-0 right-0',
										},
										s.default.createElement('span', {
											className:
												'animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75',
										}),
										s.default.createElement('span', {
											className:
												'relative inline-flex rounded-full h-2 w-2 bg-red-500',
										})
								  )
								: null
						),
						s.default.createElement(
							_e,
							{
								as: t.Fragment,
								enter: 'transition ease-out duration-200',
								enterFrom: 'opacity-0 translate-y-1',
								enterTo: 'opacity-100 translate-y-0',
								leave: 'transition ease-in duration-150',
								leaveFrom: 'opacity-100 translate-y-0',
								leaveTo: 'opacity-0 translate-y-1',
							},
							s.default.createElement(
								se.Panel,
								{
									className:
										'absolute z-10 w-96 p-0 mt-4 transform translate-x-0 right-0',
								},
								s.default.createElement(
									'div',
									{
										className:
											'w-full overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5',
									},
									n && !r
										? s.default.createElement(
												'div',
												{
													className:
														'relative w-full h-32 p-4 bg-white flex items-center justify-center',
												},
												s.default.createElement('div', {
													style: {
														borderTopColor:
															'transparent',
													},
													className:
														'w-8 h-8 border-2 border-green-500 border-solid rounded-full animate-spin',
												})
										  )
										: s.default.createElement(Is, {
												baseUrl: e.baseUrl,
												feed: r,
										  }),
									s.default.createElement(
										'div',
										{ className: 'p-0 bg-gray-50' },
										s.default.createElement(
											'a',
											{
												href: 'https://useherald.com',
												className:
													'text-xs flow-root px-2 py-2 text-center transition duration-150 ease-in-out rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50',
											},
											'Powered by Herald'
										)
									)
								)
							)
						)
					)
			)
		);
	}),
		Object.defineProperty(e, '__esModule', { value: !0 }),
		(e[Symbol.toStringTag] = 'Module');
});
